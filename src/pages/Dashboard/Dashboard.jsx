import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Coin from '../Coin/Coin';

const Dashboard = () => {
 
  const option = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-bknM9K1Dm2VKQyArU9UmJT2s'}
  };
   
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
   
  useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=1', option)
  .then(response  => {
    setCoins(response.data);
   }).catch(error => console.log(error));
  }, []);
   
  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

    ChartJS.register(
        CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#ffffff',
                },
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    color: '#FFFFFF',
                },
                ticks: {
                    color: '#FFFFFF',
                },
            },
            y: {
                grid: {
                    color: '#FFFFFF',
                },
                ticks: {
                    color: '#FFFFFF',
                },
            }
        }
      };
      
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      const BTCData = {
        labels,
        datasets: [
          {
            label: 'BTC',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 67543 })),
            borderColor: 'rgb(102, 153, 255)',
            backgroundColor: 'rgb(102, 153, 255)',
          },
        ],
      };

      const ETHData = {
        labels,
        datasets: [
          {
            label: 'ETH',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 4347 })),
            borderColor: '#CCFF33',
            backgroundColor: '#CCFF33',
          },
        ],
      };

      const Data = {
        labels,
        datasets: [
            {
                label: 'BTC',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 67543 })),
                borderColor: 'rgb(102, 153, 255)',
                backgroundColor: 'rgb(102, 153, 255)',
            },
            {
                label: 'ETH',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 4347 })),
                borderColor: '#CCFF33',
                backgroundColor: '#CCFF33',
            },
        ],
      };
      

    return (
        <div className='Dashboard'>
            <h1>Dashboard</h1>
            <div className='Widget-container'>
                <div className='Widget'>
                    <Line options={options} data={BTCData} />
                </div>
                <div className='Widget'>
                <Line options={options} data={ETHData} />
                </div>
            </div>
            <div className='graph-container'>
            <Line options={options} data={Data} />
            </div>
            <div className='data-container'>
            <form><input className='searchbar' type="text" placeholder='Search...' onChange={handleChange}/></form>
            <div className="cheakydivje"><p className='rank'>Rank</p><p className='coin'>Coin</p><p className='price'>Price</p><p className='change24h'>24h Change</p><p className='marketcap'>Market Cap</p><p className='volume'>Volume</p></div>
            <br />
            {filteredCoins.map(coin => {
              return(
                <Coin
                marketcaprank={coin.market_cap_rank}
                image={coin.image}
                name={coin.name}
                key={coin.id}
                price={coin.current_price}
                volume={coin.total_volume}
                marketcap={coin.market_cap}
                twentyfourhourchange={coin.price_change_percentage_24h}/>
              )
             })}
            </div>
        </div>
    )
}

export default Dashboard;
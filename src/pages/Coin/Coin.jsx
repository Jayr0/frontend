import './Coin.css';
const Coin = ({marketcaprank, name, image, price, marketcap, twentyfourhourchange, volume}) => {
    return (
        <div className='container'>
        <p className='rank'>{marketcaprank}</p>
        <img src={image}/>
        <p className='naam'>{name}</p>
        <p className='prijs'>${price.toFixed(3)}</p> 
        <p className='uur24'>
            {twentyfourhourchange.toFixed(3) < 0 ? (
                <p style={{ color: 'red' }}>{twentyfourhourchange.toFixed(3)}%</p>
            ) : (
                <p style={{ color: 'green' }}>{twentyfourhourchange.toFixed(3)}%</p>
            )}
        </p>
        <p className='marketcap'>${marketcap.toLocaleString()}</p>
        <p className='volume'>${volume.toLocaleString()}</p>
    </div>
    

    )
}
export default Coin;
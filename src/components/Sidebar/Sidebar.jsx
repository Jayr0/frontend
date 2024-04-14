import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCogs, faHouse, faMagnifyingGlass, faTimes, faWallet, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    let sidebarToggled = false;
    let searchToggled = false;

    const delay = (time) => {
        return new Promise(resolve => setTimeout(resolve, time));
      }
      

    const toggleSidebar = async () => {
        if (sidebarToggled === false) {
            sidebarToggled = true;
            document.querySelector('.Sidebar').style.width = '200px';
            document.querySelector('.close-menu').style.display = 'block';
            document.querySelector('.burger-menu').style.display = 'none';
            await delay(110);
            let navItems = document.querySelectorAll('.hiddenText');
            for (let i = 0; i!== navItems.length; i++) {
                navItems[i].style.display = 'block';
            }	
        } else {
            sidebarToggled = false;
            document.querySelector('.Sidebar').style.width = '80px';
            document.querySelector('.close-menu').style.display = 'none';
            document.querySelector('.burger-menu').style.display = 'block';
            let navItems = document.querySelectorAll('.hiddenText');
            for (let i = 0; i!== navItems.length; i++) {
                navItems[i].style.display = 'none';
            }

            searchToggled = false;
            document.querySelector('.Search-field').style.display = 'none';
        }
    }

    const toggleSearch = () => {
        if (searchToggled === false && sidebarToggled === true) {
            searchToggled = true;
            document.querySelector('.Search-field').style.display = 'block';
        } else {
            searchToggled = false;
            document.querySelector('.Search-field').style.display = 'none';
        }
    }

    return (
        <div className='Sidebar'>
            <FontAwesomeIcon icon={faBars} className='fa-2x burger-menu' onClick={toggleSidebar}/>
            <FontAwesomeIcon icon={faTimes} className='fa-2x close-menu' onClick={toggleSidebar}/>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className='link'>
                            <FontAwesomeIcon icon={faHouse}/> <a className='hiddenText'>Dashboard</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className='link'>
                            <FontAwesomeIcon icon={faCogs}/> <a className='hiddenText'>Settings</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Wallet" className='link'>
                            <FontAwesomeIcon icon={faWallet}/> <a className='hiddenText'>Wallet</a>
                        </Link>
                    </li>
                    <li onClick={toggleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/> <a className='hiddenText'>Search</a>
                    </li>
                    <input type='text' className='Search-field' placeholder='Search...' />
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;
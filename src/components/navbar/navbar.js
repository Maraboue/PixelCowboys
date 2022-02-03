import { Component  } from "react";
import {Link} from 'react-scroll';
import {items} from './items';
import './navbar.css';

class NavigationBar extends Component{
    render() {

        return(

           <nav className="NavigationBarItems">
                <Link className="NavigationBar-Logo" to="DNT" smooth={true} duration={1000}>
                </Link>
                <div className="Menu">
                </div>
                <ul className="nav-items">
                    {items.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.name} to={item.url} smooth={true} duration={1000}>
                                    {item.title}
                                </Link>
                            </li>
                        )

                    })}

                </ul>
            </nav>
        );
    }
}

export default NavigationBar;
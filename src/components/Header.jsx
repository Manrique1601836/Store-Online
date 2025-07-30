import { Link } from "react-router-dom"
import '../style/components/Header.css'

function Header() {
    return(
        <>
            <header>
                <div className="header">
                    <div className="logo">
                        <Link to="/" className="link">
                            <h1>D</h1>
                            <h3>&</h3>
                            <h1>D</h1>
                        </Link> 
                    </div>
                    <div className="navar">
                        <input type="checkbox" id="check-menu"/>
                        <label htmlFor="check-menu" id="label-menu">
                            <svg  
                                xmlns="http://www.w3.org/2000/svg"  
                                width="24"  
                                height="24"  
                                viewBox="0 0 24 24"  
                                fill="none"  
                                stroke="currentColor"  
                                strokeWidth="2"  
                                trokeinecap="round"  
                                strokeLinejoin="round"  
                                className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
                            >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 6l16 0" />
                                    <path d="M4 12l16 0" />
                                    <path d="M4 18l16 0" />
                            </svg>
                        </label>
                        <div className="menu">
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/" className="link">Home</Link>
                                        <ul>
                                            <li>
                                                <Link to="/" className="sublink">sub item</Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="sublink">sub item</Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="sublink">sub item</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/about" className="link">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/store" className="link">Store</Link>
                                        <ul>
                                            <li>
                                                <Link to="/store/he" className="sublink">sub Store</Link>
                                            </li>
                                            <li>
                                                <Link to="/store/she" className="sublink">sub Store</Link>
                                            </li>
                                            <li>
                                                <Link to="/store/son" className="sublink">sub Store</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="link">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
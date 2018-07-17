import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';




const Header = () => {


    return (
        <header className="headerLP">
            
                <Link to='/' className="logoLP">
                    Chat Marketing Romania
                </Link>
            <div  className="headerLP-right">
                <Link to='/' className="aboutUS">
                    Home
                </Link>
                <Link to='/about-us' className="aboutUS">
                    Despre Noi
                </Link>
                <Link to='/blog' className="blog">
                    Blog
                </Link>
                <Link to='/prices' className="prices">
                    Preturi
                </Link>
            </div>
            
        </header>
    );
};

export default Header;
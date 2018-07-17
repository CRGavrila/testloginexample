import React from 'react';
import './layout.css'

const Layout = (props) => {
    return (
        <div>       
                
            <div>
                { props.children }
            </div>
        </div>
    );
};

export default Layout;
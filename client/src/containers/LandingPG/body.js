import React , {Component} from 'react';
import Button from '@material-ui/core/Button';
import './style.css';

class Body extends Component {
    componentDidMount(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=1525106227577637&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
    }

    render(){
        return (
            <div className="bodyLP">
            <br /><br /><br />
            <h1
                style={{
                    textAlign:"center",
                    paddingTop:"45px"}}
            >
                Bine ai venit in Chat Marketing!
            </h1 >
            
            <div
                style={{
                    textAlign:"center",
                    paddingTop:"45px"}}
            >
            <div 
                class="fb-login-button" 
                data-max-rows="1" 
                data-size="large" 
                data-button-type="continue_with" 
                data-show-faces="false" 
                data-auto-logout-link="false" 
                data-use-continue-as="false"
            ></div>

    
            </div>  
            </div>
                
        );
    }
};

export default Body;
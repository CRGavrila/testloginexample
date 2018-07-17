import React, { Component } from 'react';
import { connect } from 'react-redux';

import { action1 } from '../../actions';
import { bindActionCreators } from 'redux';

import Header from './header';
import Body from './body';
import Footer from './footer';
import './style.css';



class LandingPageContainer extends Component {


    render() {
        return ( 
            <div className="container">
                    <Header />
                    <Body />
                    <Footer />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        data : state.data
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action1},dispatch)
}


export default connect(mapStateToProps , mapDispatchToProps)(LandingPageContainer)
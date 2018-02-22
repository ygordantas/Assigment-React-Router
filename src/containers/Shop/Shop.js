import React, { Component } from 'react';
import './Shop.css';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom';
import Users from '../Users/Users';
import Courses from '../Courses/Courses';

class Shop extends Component {
    render(){
        return (
            <div>
                <ul>
                    <li><NavLink to="/" exact >Users</NavLink></li>
                    <li><NavLink to="/courses">Courses</NavLink></li>
                </ul>
                <Switch>
                    <Route path='/courses' component={Courses}/>
                    <Route path='/users' exact component={Users}/>
                    <Redirect from='/' exact to='/users'/>
                    <Route render={()=> <h1>Oops... Page not found :/</h1>} />
                </Switch>
            </div>
            
               
        );
    }
}

export default Shop;
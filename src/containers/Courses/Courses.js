import React, { Component } from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <NavLink key={course.id} to={`/courses/'${course.id}/${course.title}`}>
                                    <article className="Course" >{course.title}</article>
                                </NavLink>
                                );
                        } )
                    }
                </section>
                <Switch>
                    <Route path='/courses/:id/:title' component={Course}/>
                    <Route render={()=> <h1>Oops... Course not found :/</h1>} />
                </Switch>
                
            </div>
        );
    }
}

export default Courses;
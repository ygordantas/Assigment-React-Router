import React, { Component } from 'react';

class Course extends Component {
    state={
        id: null,
        title: null
    };

    componentDidMount(){
        this.loadData();
    }

    componentDidUpdate(){
        if(this.props.match.params.id != this.state.id){
            this.loadData();
        }
    }

    loadData =()=>{
        this.setState({
            id: this.props.match.params.id,
            title: this.props.match.params.title,
        });
    }
    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;
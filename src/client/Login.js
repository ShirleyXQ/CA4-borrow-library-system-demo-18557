import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post('/api/authenticate', this.state)
            .then(res => {
                if (res.status === 200) {
                    // run the login function in the parent component
                    this.props.handleLogin();
                    // redirect to /
                    this.props.history.push('/');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="container is-fluid">
            
            <div className="hero-body container has-background-warning is-fluid">
            <div className="hero-body container has-background-link is-fluid">
          
                <h1 className="title has-text-weight-bold has-text-primary is-1">Login Below!</h1>
             
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input column is-half"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <p className="help">This is a help text</p>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input column is-half"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <p className="help">This is a help text</p>
                </div>
                <input className="button is-primary" type="submit" value="Submit" />
                </div>
               
               
               {/*FOOTER*/}
                <footer className="footer has-background-danger is-bold">
                    <div className="content has-text-centered">
                        <p className="has-text-white-bis"><strong>Borrow library management</strong>  styled with Bulma.</p>
                        <p className="has-text-warning"><strong>2020 © copyright by Shirley</strong>@+@</p>
                         <p className="has-text-link"><strong>styled with QIANXU~18557</strong></p>
                    </div>
                </footer>

                 </div>


                  </form>




             

           


            
        );
    }
}

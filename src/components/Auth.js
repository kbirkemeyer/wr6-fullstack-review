import axios from 'axios';
import React, {Component} from 'react';

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            newUser: false
        }
    }

    toggleNewUser = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = async (e) => {
        e.preventDefault();
        const {email, password} = this.state
        try {
            const user = await axios.post('/auth/login', {email, password})
            alert(user.data.email);
            this.props.history.push('/feed')
        } 
        catch(err){ 
                alert(err.response.request.response)
        }
    }

    register = async (e) => {
        e.preventDefault();
        const {email, password, username} = this.state
        try {
            const user = await axios.post('/auth/register', {email, username, password})
            alert(user.data.username);
            this.props.history.push('/feed')
        } 
        catch(err){ 
                alert(err.response.request.response)
        }
    }

    render(){
        const {email, password, username} = this.state;
        return(<div>
            {this.state.newUser ? 
            <div>
                <h3>Register</h3>
                <form onSubmit={e => this.register(e)}>
                    <input 
                        name="email" 
                        value={email} 
                        placeholder="Email" 
                        onChange={ e => this.changeHandler(e)}
                    />
                    <input 
                        name="username" 
                        value={username} 
                        placeholder="username" 
                        onChange={ e => this.changeHandler(e)}
                    />
                    <input 
                        name="password" 
                        type="password"
                        value={password} 
                        placeholder="password" 
                        onChange={ e => this.changeHandler(e)}
                    />
                    <button>Submit</button>
                </form>
                <button onClick={this.toggleNewUser}>Already a user?</button>
            </div>
            :
            <div>
                <h3>Login</h3>
                <form onSubmit={e => this.login(e)}>
                    <input 
                        name="email" 
                        value={email} 
                        placeholder="Email" 
                        onChange={ e => this.changeHandler(e)}
                    />
                    <input 
                        name="password" 
                        type="password"
                        value={password} 
                        placeholder="password" 
                        onChange={ e => this.changeHandler(e)}
                    />
                    <button>Submit</button>
                </form>
                <button onClick={this.toggleNewUser}>Need an account?</button>
            </div>}
            </div>
        )
    }
}

export default Auth;
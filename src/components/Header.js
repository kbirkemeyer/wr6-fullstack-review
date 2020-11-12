import React, {Component} from 'react';

class Header extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    
    render() {
        return (
            <header>
                <ul>
                    <li>Login</li>
                    <li>Bird Feeder</li>
                    <li>Create Post</li>
                </ul>
            </header>
        )
    }
}

export default Header;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
                <li><Link to="/">Login</Link></li>
                <li><Link to="/feed">Bird Feeder</Link></li>
                <li><Link to="/create_post">Create Post</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header;
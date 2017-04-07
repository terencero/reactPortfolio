import * as React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li>Terence Ro</li>
                    <li><Link to='posts' activeClassName='active' >About</Link></li>
                    <li><Link to='posts/new' activeClassName='active'>Portfolio</Link></li>
                    <li><Link to='posts/new' activeClassName='active'>Contact</Link></li>
                </ul>
            </div>
        );
    }
}

export { Header };
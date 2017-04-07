import * as React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
    render() {
        return (

    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <h2>Contact Me</h2>
            </div>
            <ul>
                <li>
                    <a href="https://github.com/terencero" class="btn-social btn-outline"><img src="img/githubv2.png" class="fa fa-fw" width="30" alt="github icon" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/terence-ro/" class="btn-social btn-outline"><img src="img/linkedin_circle_black.png" class="fa fa-fw" width="30" alt="linkedin icon" /></a>
                </li>
                <li>
                    <a href="https://twitter.com/tro1109" class="btn-social btn-outline"><img src="img/twitter.png" class="fa fa-fw" width="30" alt="twitter icon" /></a>
                </li>
                <li>
                    <a href="mailto:terencehro@gmail.com" class="btn-social btn-outline"><img src="img/message.png" class="fa fa-fw" width="30" alt="email icon" /></a>
                </li>
            </ul>

            <div class="copyright">
                <p>Copyright &copy; Terence Ro 2016</p>
            </div>
        </div>
    </footer>
        );
    }
}

export { Footer };
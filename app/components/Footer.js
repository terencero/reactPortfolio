import * as React from 'react';
import { Link } from 'react-router';
import { Layout, Row, Col } from 'antd';
const Footer = Layout;

class MainFooter extends React.Component {
    render() {
        return (

    <Footer className="page-footer">
        <div className="container">
            <div className="row">
                <h2>Contact Me</h2>
            </div>
            <ul>
                <li>
                    <a href="https://github.com/terencero" className="btn-social btn-outline"><img src="./publicimg/githubv2.png" className="fa fa-fw" width="30" alt="github icon" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/terence-ro/" className="btn-social btn-outline"><img src="./public/img/linkedin_circle_black.png" className="fa fa-fw" width="30" alt="linkedin icon" /></a>
                </li>
                <li>
                    <a href="https://twitter.com/tro1109" className="btn-social btn-outline"><img src="./public/img/twitter.png" className="fa fa-fw" width="30" alt="twitter icon" /></a>
                </li>
                <li>
                    <a href="mailto:terencehro@gmail.com" className="btn-social btn-outline"><img src="./public/img/message.png" className="fa fa-fw" width="30" alt="email icon" /></a>
                </li>
            </ul>

            <div className="copyright">
                <p>Copyright &copy; Terence Ro 2016</p>
            </div>
        </div>
    </Footer>
        );
    }
}

export { MainFooter };
import * as React from 'react';
import { Layout, Row, Col } from 'antd';
const Content = Layout;

class About extends React.Component {
    render() {
        return (
            
            <div className='about-content' id='main'>
            <Row>
                <Col xs={24}>
                    <img className='img-responsive center-block' src='./img/terenceportrait.png' width='200' alt='profile pic of Terence' />
                    <div className="intro-text">
                        <span><h1><bold>Terence Ro</bold></h1></span>
                        <hr />
                        <span><p>Life Long Learner - Web Developer - Web Engineer</p></span>
                    </div>
                    </Col>
                    </Row>
            </div>
        
        );
    }
}

export { About };
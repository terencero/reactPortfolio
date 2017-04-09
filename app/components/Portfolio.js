import * as React from 'react';
import { Link } from 'react-router';
import { Card, Row, Col } from 'antd';
import { Layout } from 'antd';

class Portfolio extends React.Component {
    render() {
        return (
            <section classNameName='portfolio-section'>
                <div>
                    <Row>
                        <Col xs={24}>
                            <h2>Portfolio</h2>
                            <hr />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={24} md={8}>
                            <Card title='Lively' bordered={false}>
                                <div className='custom-image'>
                                    <img alt='example' width='100%' src='img/lively.png' />
                                </div>
                                <p>Lively is a webapp that teaches you how to boost your energy levels everyday through healthy
                                food and exercise suggestions. It is mobile responsive.</p>
                                <p><a href='https://lively-app.herokuapp.com/'>On Heroku</a></p>
                                <p><a href='https://github.com/terencero/Lively'>On Github</a></p>
                            </Card>
                        </Col>

                        <Col sm={24} md={8}>
                            <Card title='Lively' bordered={false}>
                                <div className='custom-image'>
                                    <img alt='example' width='100%' src='img/portfolio/abstract_2.jpg' />
                                </div>
                                <p>Welcome to LIRI! LIRI is a CLI app that will let you know:</p>
                                <ol>
                                    <li>Latest tweets</li>
                                    <li>Details about a song of your choosing</li>
                                    <li>Details about a movie of your choosing</li>
                                    <li>Details about something LIRI wants to tell you about!</li>
                                </ol>
                                <p><a href='https://github.com/terencero/liri-node-app'>On Github</a></p>
                            </Card>
                        </Col>

                        <Col sm={24} md={8}>
                            <Card title='Lively' bordered={false}>
                                <div className='custom-image'>
                                    <img alt='example' width='100%' src='img/portfolio/abstract_3.jpg' />
                                </div>
                                <p>Bamazon is a node app that simulates an online store front. Simply run the bamazonCustomer.js
                                file in your terminal to act as the customer or bamazonManager.js to act as the manager.
                                Customers can browse and purchase items while managers can browse and make changes to inventory,
                                add and update products.
                            </p>
                                <p><a href='https://github.com/terencero/bamazon'>On Github</a></p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export { Portfolio };
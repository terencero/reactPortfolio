import * as React from 'react';
import { Link } from 'react-router';

class Portfolio extends React.Component {
    render() {
return (
<section class="portfolio-section">
    <div class="container portfolio-section">
        <div class="row" id="portfolio">
            <div class="col s12 section-title">
                <h2>Portfolio</h2>
                <hr />
            </div>
        </div>

        <div class="row">
            <div class="card small col s12 m4">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="img/lively.png" />
                        </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">More About Lively<i class="material-icons right">more_vert</i></span>
                        <p><a href="https://lively-app.herokuapp.com/">On Heroku</a></p>
                        <p><a href="https://github.com/terencero/Lively">On Github</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Lively<i class="material-icons right">more_vert</i></span>
                        <p>Lively is a webapp that teaches you how to boost your energy levels everyday through healthy
                                food and exercise suggestions. It is mobile responsive.</p>
                    </div>
                </div>

                <div class="card small col s12 m4">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="img/portfolio/abstract_2.jpg" />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">More About LIRI-Node<i class="material-icons right">more_vert</i></span>
                            <p><a href="https://github.com/terencero/liri-node-app">On Github</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">LIRI<i class="material-icons right">more_vert</i></span>
                            <p>Welcome to LIRI! LIRI is a CLI app that will let you know:</p>
                            <ol>
                                <li>Latest tweets</li>
                                <li>Details about a song of your choosing</li>
                                <li>Details about a movie of your choosing</li>
                                <li>Details about something LIRI wants to tell you about!</li>
                            </ol>
                        </div>
                    </div>

                    <div class="card small col s12 m4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="img/portfolio/abstract_3.jpg" />
                        </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">More About Bamazon<i class="material-icons right">more_vert</i></span>
                                <p><a href="https://github.com/terencero/bamazon">On Github</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Bamazon<i class="material-icons right">more_vert</i></span>
                                <p>Bamazon is a node app that simulates an online store front. Simply run the bamazonCustomer.js
                                file in your terminal to act as the customer or bamazonManager.js to act as the manager.
                                Customers can browse and purchase items while managers can browse and make changes to inventory,
                                add and update products.
                            </p>
                            </div>
                        </div>

                    </div>
                </div>
        </section>
        );
}
            }

export {Portfolio};
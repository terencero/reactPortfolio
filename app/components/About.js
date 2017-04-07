import * as React from 'react';

class About extends React.Component {
    render() {
        return (
            <div class="container">
            <div class="row" id="main">
                <div class="col-lg-12">
                    <img class="img-responsive center-block" src="img/terence.jpeg" width="200" alt="profile pic of Terence" />
                    <div class="intro-text">
                        <span><h1><bold>Terence Ro</bold></h1></span>
                        <hr />
                        <span><p>Life Long Learner - Web Developer - Web Engineer</p></span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export { About };
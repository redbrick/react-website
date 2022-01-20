import React from 'react';
import './Welcome.css';
import CardItem from './CardItem';

function Welcome() {
    return (
        <div id="welcome">

            <p class="content-title">WELCOME</p>
            <hr class="full"></hr><br />
            <p class="content-text">This website is a collection of all you need to know about Redbrick<br /> - from Events to the Services we offer!<br></br>
                <br />Redbrick is DCU’s Computer Networking society. We host events for: <br /> everything computing related this ranges from; <br />- How to setup your own website
                <br />- Storing your photos online<br />- System Administration <br />-Computer Programming Tutorials.<br /><br /> We also host a number of services for our membership.<br />
                If you have any questions, please visit the Wiki,<br /> otherwise use the Help page to contact us.</p>
        </div>
    );
}

export default Welcome;

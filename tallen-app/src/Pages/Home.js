import React from 'react'
import { withRouter } from 'react-router-dom';
import Iframe from '../components/Iframe'
const Home = props => {

    return (
        // Conference display component
        <div style={{height: "100%"}}>
            <Iframe />
        </div>
    )
}

export default withRouter(Home);
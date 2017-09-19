import React, {Component} from "react";
import {Link} from "react-router";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {


        return (

            <div className="w100 h100 pos-rel">
                <p>HomePage</p>
                <Link to="/page2" >Page2</Link>
            </div>
        );
    }
}



export default Home;
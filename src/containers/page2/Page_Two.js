import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {getData} from '../../actions/page_two_data'


class Page_two extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : []
        };
    }
    componentWillMount(){
        if(!this.props.data.loaded){
            this.props.dispatch(getData());
        }else{
            this.setState({
                users : this.props.data.data
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.data.type == "GET_DATA_SUCCESS" && this.props.data.type!="GET_DATA_SUCCESS"){
            this.setState({
                users: nextProps.data.data
            })
        }

    }


    render() {
        let users = this.state.users.map((item, index)=>{
            return <p key={index}>{item.name + " " + item.age}  </p>
        });

        return (

            <div className="w100 h100 pos-rel">
                <p>HomePage</p>
                <Link to="/home" >Home</Link>
                {users}

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { data } = state;
    return {data};
}

export default connect(mapStateToProps)(Page_two);
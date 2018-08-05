import React, { Component } from 'react';
import { connect } from "react-redux";

class ProeficiencyRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return(
            <div>Olá</div>
        );
    }
}

const stateToProps = state => ({
    user: state.user
});

export default connect(stateToProps)(ProeficiencyRegister);
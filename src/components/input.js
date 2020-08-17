import React, { Component } from "react";
import PropTypes from "prop-types";
import {store} from "../redux/store";
import {setState} from "../actions";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static propTypes = {
        inputType: PropTypes.string.isRequired,
        componentIndex: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        handler: PropTypes.string.isRequired
    };
    static defaultProps = {};
    handleInput(e) {
        if (this.props.inputType !== 'checkbox') {
            store.dispatch(setState({actionType: 'SAVE', input: e.target.value, handler: this.props.handler}))
        } else {
            store.dispatch(setState({actionType: 'SAVE', input: e.target.checked, handler: this.props.handler}))
        }
    }

    render() {
        return (
            <div className="input">
                <label htmlFor={`${this.props.inputType}Input${this.props.componentIndex}`}>{`${this.props.name}: `}</label>
                <input
                    id={`${this.props.inputType}Input${this.props.componentIndex}`}
                    type={this.props.inputType}
                    placeholder={this.props.name}
                    onChange={this.handleInput.bind(this)}
                    defaultValue={store.getState().signUp[this.props.handler]}
                />
            </div>
        );
    }
}
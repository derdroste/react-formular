import React, { Component } from "react";
import PropTypes from "prop-types";
import {store} from "../redux/store";
import {setState} from "../actions";

export default class TextArea extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    };
    static defaultProps = {};

    handleInput(e) {
        store.dispatch(setState({actionType: 'SAVE', input: e.target.value, handler: this.props.id}))
    }
    render() {
        return (
            <div>
                <label htmlFor={this.props.name}>{`${this.props.name}: `}</label>
                <textarea
                    id={this.props.id}
                    placeholder={this.props.name}
                    defaultValue={store.getState().signUp.additionalInfo}
                    onChange={this.handleInput.bind(this)}
                />
            </div>
        );
    }
}

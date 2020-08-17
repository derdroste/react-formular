import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    };
    static defaultProps = {};
    render() {
        return <button type={this.props.type}>{this.props.name}</button>;
    }
}

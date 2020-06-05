import React, { Component } from "react";
import { checkPropTypes } from "prop-types";

var Switch = props => (
    <div className="switch-plate">
        <div className="screw" />
        <div className="switch" onClick={props.toggle}>
            <div className="switch-handle" />
        </div>
        <div className="screw" />
    </div>
);

export default Switch;

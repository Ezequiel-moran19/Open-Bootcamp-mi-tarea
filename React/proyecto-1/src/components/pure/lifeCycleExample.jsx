/**
 * Ejemplo de componente de tipo clase que dispone de los
 * metodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente')

    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT: junto al del montaje del componente, antes de renderizarlos')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReciveProps: si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe o no actualizarse
         */
        //return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // Processando o formulário ou formulário em processo
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar title="Sucesso nos dados" />
                    <h1> </h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success

import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Insira os dados do usuário" />
                    <TextField 
                    hintText="Seu primeiro nome" 
                    floatingLabelText="Nome" 
                    handleChange={handleChange('firstName')}
                    defaultValue={values.firstName} 
                    />
                    <br/>
                    <TextField 
                    hintText="Seu sobrenome nome" 
                    floatingLabelText="Sobrenome" 
                    handleChange={handleChange('lastName')}
                    defaultValue={values.lastName} 
                    />
                     <br/>
                    <TextField 
                    hintText="Seu email" 
                    floatingLabelText="Email" 
                    handleChange={handleChange('email')}
                    defaultValue={values.email} 
                    />
                     <br/>
                    <RaisedButton 
                    label="Avançar" 
                    primary={true} 
                    style={StyleSheet.button} 
                    onClick={this.continue} 
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails

import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Insira os dados do usuário" />
                    <TextField 
                    hintText="Seu cargo" 
                    floatingLabelText="Cargo" 
                    handleChange={handleChange('occupation')}
                    defaultValue={values.occupation} 
                    />
                    <br/>
                    <TextField 
                    hintText="Sua cidade" 
                    floatingLabelText="Cidade" 
                    handleChange={handleChange('city')}
                    defaultValue={values.city} 
                    />
                     <br/>
                    <TextField 
                    hintText="Sua bio" 
                    floatingLabelText="Bio" 
                    handleChange={handleChange('bio')}
                    defaultValue={values.bio} 
                    />
                     <br/>
                     <RaisedButton 
                    label="Voltar" 
                    primary={false} 
                    style={StyleSheet.button} 
                    onClick={this.back} 
                    />
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

export default FormPersonalDetails

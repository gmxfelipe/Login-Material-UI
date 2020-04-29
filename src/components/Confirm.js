import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class confirm extends Component {
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
        const { values: { firstName, lastName, email, onClick, occupation, city, bio }} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirme os dados" />
                    <List>
                        <ListItem 
                        primaryText="Primeiro nome"
                        secondaryText={firstName}
                        />
                        <ListItem 
                        primaryText="Sobrenome"
                        secondaryText={lastName}
                        />
                        <ListItem 
                        primaryText="Email"
                        secondaryText={email}
                        />
                        <ListItem 
                        primaryText="Cargo"
                        secondaryText={occupation}
                        /><ListItem 
                        primaryText="Cidade"
                        secondaryText={city}
                        /><ListItem 
                        primaryText="Bio"
                        secondaryText={bio}
                        />
                    </List>
                    <RaisedButton 
                    label="Confirme" 
                    primary={true} 
                    style={StyleSheet.button} 
                    onClick={this.continue} 
                    />
                      <RaisedButton 
                    label="Voltar" 
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

export default confirm

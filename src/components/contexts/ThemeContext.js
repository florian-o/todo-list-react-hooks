import React , {Component,createContext } from 'react';

export const ThemeContext = createContext();
class ThemeContextProvider extends Component {

    state = { 
      
        isLightTheme: true,
        light : { synthax : '#555 ', ui : '#ddd', bg: '#eee',theme:'light'},
        dark : { synthax : '#ddd ', ui : '#333', bg: '#555',theme:'dark'}
     }     
        
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }; 

    render() {
        
        return ( 
            <ThemeContext.Provider value ={{...this.state, toggleTheme: this.toggleTheme }}>
            
                {this.props.children }

            </ThemeContext.Provider>
         );
    }
}

export default ThemeContextProvider;
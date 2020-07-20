import React, {Component} from 'react';
import MainNavbar from './components/MainNavbar';
import Person from './components/Person';
import Store from './reduxStore/store';
import StoreContext from './storeContext';

let styles = {
    outlined: {
        outline: '5px dotted red'
    },
    avatarContainer: {
        // Positioning
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

        marginTop: '100px',
    },
};

class App extends Component {

    render() {
        return (
            <StoreContext.Provider value={Store}>
                <MainNavbar/>
                <div style={styles.avatarContainer}>
                    <Person style={styles.avatar}/>
                </div>
            </StoreContext.Provider>
        )
    }
}

export default App;
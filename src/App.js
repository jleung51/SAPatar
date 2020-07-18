import React, {Component} from 'react';
import MainNavbar from './components/MainNavbar';
import Person from './components/Person';
import Store from './reduxStore/store';
import StoreContext from './storeContext';


class App extends Component {
    render() {
        return (
            <StoreContext.Provider value={Store}>
                <MainNavbar/>
                <Person/>
            </StoreContext.Provider>
        )
    }
}

export default App;
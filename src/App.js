import React, {Component} from 'react';
import Person from './components/Person';
import Store from './reduxStore/store';
import StoreContext from './storeContext';
import styles from './styles/styles';
import CustomizeModal from './components/CustomizeModal';
import EventCodeModal from './components/EventCodeModal';

class App extends Component {
    render() {
        return (
            <div style={styles.root}>
            <StoreContext.Provider value={Store} >
                <div style={styles.floatingContainer}>
                    <div style={styles.sidebar.container}>
                        <div style={styles.sidebar.title}>
                            LEADERBOARD
                        </div>
                    </div>

                    <div style={styles.notSidebarContainer}>
                        <div style={styles.welcomeMessage}>
                            Welcome back, Tiffany!
                        </div>

                        <div style={styles.avatarContainer}>
                            <Person/>
                        </div>

                        <div style={styles.buttonContainer}>
                            <EventCodeModal/>
                            <CustomizeModal/>
                        </div>
                    </div>
                </div>
            </StoreContext.Provider>
            </div>

        )
    }
}

export default App;
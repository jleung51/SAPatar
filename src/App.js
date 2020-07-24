import React, {Component} from 'react';
import Person from './components/Person';
import Store from './reduxStore/store';
import StoreContext from './storeContext';
import styles from './styles/styles';
import CustomizeModal from './components/CustomizeModal';
import EventCodeModal from './components/EventCodeModal';

// Pictures
import FlagCanada from './img/flags/flag-canada.png';

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

                        <div style={styles.sidebar.personCard}>
                            <div style={styles.sidebar.personCardNumber}>
                                <span style={styles.centeredText}>1</span>
                            </div>

                            {/*  Just barely smaller than the person card */}
                            {/* <div style={styles.sidebar.personCardPic}> */}

                            <div style={styles.verticalCenteredContentsLeft}  className='px-2'>
                                <div style={styles.sidebar.personCardPicMargins}>
                                    <Person size='75px'/>
                                </div>
                            </div>

                            <div style={styles.verticalCenteredContentsLeft}>
                                <span style={styles.sidebar.personCardName}>Emily Doe</span>
                            </div>

                            <div style={styles.verticalCenteredContentsRight}>
                                <img src={FlagCanada} style={styles.sidebar.personCardFlag} />
                            </div>
                        </div>

                    </div>

                    <div style={styles.notSidebarContainer}>
                        <div style={styles.welcomeMessage}>
                            Welcome back, Tiffany!
                        </div>

                        <div style={styles.avatarContainer}>
                            <Person />
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
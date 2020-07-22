import React, {Component} from 'react';
import Modal from 'react-modal';
import Person from './components/Person';
import Store from './reduxStore/store';
import StoreContext from './storeContext';

const styles = {
    outlined: {
        outline: '2px dotted red'
    },

    floatingContainer: {
        margin: '40px',
        height: '86%',
    },

    sidebar: {
        container: {

            // Size and position
            float: 'left',
            height: '100%',
            width: '450px',

            // Card
            backgroundColor: 'F0F4F9',
            borderRadius: '10px',

            // Content
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',

        },

        title: {
            width: '100%',
            margin: '34px 0',

            fontSize: '1.6em',
            fontWeight: 'bold',
        }
    },

    notSidebarContainer: {
        float: 'right',

        height: '100%',
        width: '65%',  // Needs to be adjusted if other measurements change


        // outline: '1px dotted grey',
    },

    welcomeMessage: {
        // Size and positioning
        width: '100%',
        display: 'inline-block',
        verticalAlign: 'top',
        margin: '10px 0',

        // Contents
        textAlign: 'center',
        fontSize: '48px',
        fontWeight: 'bold',
    },

    // To customize the avatar size, go to Person.js
    avatarContainer: {
        // Positioning
        display: 'flex',
        margin: '30px 0',

        // Contents
        alignItems: 'center',
        justifyContent: 'center',

        // outline: '1px dotted grey',
    },

    modal: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
};

Modal.setAppElement('#app');

class App extends Component {

    render() {
        return (
            <StoreContext.Provider value={Store}>
                {/* <MainNavbar/> */}

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

                    </div>

                </div>

            </StoreContext.Provider>

        )
    }
}

export default App;
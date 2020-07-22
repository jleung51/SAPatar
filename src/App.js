import React, {Component} from 'react';
import Modal from 'react-modal';
import Person from './components/Person';
import Store from './reduxStore/store';
import StoreContext from './storeContext';
import AvatarForm from './components/CustomizeForm'

const styles = {
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

                <div style={styles.avatarContainer}>
                    <Person style={styles.avatar}/>
                    <AvatarForm />
                </div>

            </StoreContext.Provider>
        )
    }
}

export default App;
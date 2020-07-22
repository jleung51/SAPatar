import React, {Component} from 'react';
import Modal from 'react-modal';
import Person from './components/Person';
import Store from './reduxStore/store';
import StoreContext from './storeContext';
import { Container, Col, Row } from 'react-bootstrap';

const styles = {
    outlined: {
        outline: '2px dotted red'
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


                <Container>
                    <Row>
                        <Col>

                            <div style={styles.avatarContainer}>
                                <Person style={styles.avatar}/>
                            </div>


                        </Col>
                    </Row>

                </Container>

            </StoreContext.Provider>

        )
    }
}

export default App;
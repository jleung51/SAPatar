import React from 'react';
import Modal from 'react-modal';
import Person from './Person';
import CustomizeNav from './CustomizeNav';
import CustomizeMouthContainer from './CustomizeComponents/CustomizeMouthContainer';
import CustomizeHairContainer from './CustomizeComponents/CustomizeHairContainer';
import {
  Button,
  Container,
  Col,
  Row,
} from 'react-bootstrap';

import styles from '../styles/styles';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',

    padding: '0',

    width: '88%',
    height: '88%',
    borderRadius: '50px',

    overflowY: 'hidden',  // Prevent this modal from scrolling up/down
  },

  dialog: {
    outline: '2px dotted red',
  },

  overlay: {
    zIndex: '1000',
  }
};

function CustomizeModal(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <Button onClick={openModal}
          style={styles.orangeButtonLarge}>
            Customize<br />My Avatar
        </Button>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Customize My Avatar"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)} style={styles.customizeModal.thingICantRemove}></h2>

          <div style={styles.customizeModal.header}>
            <span style={styles.customizeModal.headerText}>Customize your avatar</span>

            <span style={styles.customizeModal.headerButton}>
              <Button onClick={closeModal}
                style={styles.blueButtonSmall} >
                Save
              </Button>
            </span>
          </div>

          <Container>

            <Row>
              <Col>
              </Col>

            </Row>

            <Row>
              <Col>
                <Person/>
              </Col>
              <Col>
              <Container style={styles.customizeModal.optionsContainer}>

                <CustomizeNav />

                <CustomizeHairContainer />

              </Container>
              </Col>
            </Row>
          </Container>
        </Modal>
      </div>
    );
}

export default CustomizeModal
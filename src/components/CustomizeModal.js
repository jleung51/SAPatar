import React from 'react';
import Modal from 'react-modal';
import Person from './Person';
import CustomizeNav from './CustomizeNav';
import CustomizeMouthContainer from './CustomizeComponents/CustomizeMouthContainer';
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
    transform             : 'translate(-50%, -50%)'
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
          <h2 ref={_subtitle => (subtitle = _subtitle)}></h2>
          <CustomizeNav/>
          <Container>
            <Row>
              <Col>
                <Person/>
              </Col>
              <Col>
              <Container>
                <CustomizeMouthContainer />
              </Container>
              </Col>
            </Row>
          </Container>
        </Modal>
      </div>
    );
}

export default CustomizeModal
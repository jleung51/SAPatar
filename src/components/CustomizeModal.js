import React from 'react';
import Modal from 'react-modal';
import Person from './Person';
import CustomizeNav from './CustomizeNav';
import {
  Button,
  Container,
  Col,
  Row,
} from 'react-bootstrap';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
        <Button onClick={openModal} variant="light" size="lg">
            Customize Avatar
        </Button>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Customize Avatar"
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

                </Container>
              </Col>
            </Row>
          </Container>
        </Modal>
      </div>
    );
}

export default CustomizeModal
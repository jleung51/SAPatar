import React from 'react';
import Modal from 'react-modal';
import Person from './Person';
import CustomizeNav from './CustomizeNav';
import {Piece} from 'avataaars';
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
                <Button variant="outline-light">
                <Piece pieceType="mouth" pieceSize="100" mouthType="Eating"/>
                </Button>
                <Piece pieceType="eyes" pieceSize="100" eyeType="Dizzy"/>
                <Piece pieceType="eyebrows" pieceSize="100" eyebrowType="RaisedExcited"/>
                <Piece pieceType="accessories" pieceSize="100" accessoriesType="Round"/>
                <Piece pieceType="top" pieceSize="100" topType="LongHairFro" hairColor="Red"/>
                <Piece pieceType="facialHair" pieceSize="100" facialHairType="BeardMajestic"/>
                <Piece pieceType="clothe" pieceSize="100" clotheType="Hoodie" clotheColor="Red"/>
                <Piece pieceType="graphics" pieceSize="100" graphicType="Skull" />
                <Piece pieceType="skin" pieceSize="100" skinColor="Brown" />
                </Container>
              </Col>
            </Row>
          </Container>
        </Modal>
      </div>
    );
}

export default CustomizeModal
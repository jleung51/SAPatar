import React, {Component} from 'react';
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
    transform             : 'translate(-50%, -50%)'
  },

  overlay: {
    zIndex: '1000',
  }
};

const customizeViews = Object.freeze({
  Hair: 1,
  Mouth: 2,
})

class CustomizeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
    }

  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({
      ...this.state,
      modalIsOpen: true,
    })
  }

  afterOpenModal() {

  }

  closeModal(){
    this.setState({
      ...this.state,
      modalIsOpen: false,
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.openModal.bind(this)}
          style={styles.orangeButtonLarge}>
            Customize<br />My Avatar
        </Button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal.bind(this)}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Customize My Avatar"
        >
          <CustomizeNav/>
          <Container>
            <Row>
              <Col>
                <Person/>
              </Col>
              <Col>
              <Container>
                <CustomizeHairContainer />
              </Container>
              </Col>
            </Row>
          </Container>
        </Modal>
      </div>
    )
  }
}

export default CustomizeModal
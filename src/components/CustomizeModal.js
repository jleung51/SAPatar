import React, {Component} from 'react';
import Modal from 'react-modal';
import Person from './Person';
import CustomizeMouthContainer from './CustomizeComponents/CustomizeMouthContainer';
import CustomizeHairContainer from './CustomizeComponents/CustomizeHairContainer';
import {
  Button,
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  ButtonGroup
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

const customizeViews = Object.freeze({
  Hair: 1,
  Mouth: 2,
})

class CustomizeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      currentView: customizeViews.Hair
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

  getCurrentView() {
    switch(this.state.currentView) {
      case(customizeViews.Hair): return <CustomizeHairContainer/>
      case(customizeViews.Mouth): return <CustomizeMouthContainer/>
      default: return <CustomizeMouthContainer/>
    }
  }

  handleClick(type) {
    switch(type) {
      case (customizeViews.Hair): this.setState({...this.state, currentView: customizeViews.Hair});
      break;
      case (customizeViews.Mouth): this.setState({...this.state, currentView: customizeViews.Mouth});
      break;
      default: return;
    }
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

          <div style={styles.customizeModal.header}>
            <span style={styles.customizeModal.headerText}>Customize your avatar</span>

            <span style={styles.customizeModal.headerButton}>
              <Button onClick={this.closeModal}
                style={styles.blueButtonSmall} >
                Save
              </Button>
            </span>
          </div>

          <Container fluid>
            <Row style={styles.customizeModal.floatingContainer}>
              <Col xs={5} style={styles.customizeModal.personColumn}>
                <div style={styles.customizeModal.personBackground}>
                  <Person size='500px' />
                  {/* Size matches personBackground card size */}
                </div>
              </Col>

              <Col>
              <Container style={styles.customizeModal.optionsContainer}>

                <Navbar bg="light" expand="lg">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <ButtonGroup>
                        <Button variant='light' onClick={() => this.handleClick(customizeViews.Hair)}> Hair </Button>
                        <Button variant='light' onClick={() => this.handleClick(customizeViews.Mouth)}> Mouth </Button>
                      </ButtonGroup>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>

                {this.getCurrentView()}

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
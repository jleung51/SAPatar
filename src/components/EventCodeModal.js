import React, { Component } from 'react';
import Modal from 'react-modal';
import {Button} from 'react-bootstrap';
import Confetti from 'react-confetti'
import {levelUp} from '../reduxStore/actionCreator';
import styles from '../styles/styles';
import StoreContext from '../storeContext';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',

    borderRadius: '50px',
  },

  overlay: {
    zIndex: '1000',
  }
};

// Copy styling to avoid affecting originaly stying
let greyButtonSmall = Object.assign({}, styles.orangeButtonSmall);
greyButtonSmall.background = 'linear-gradient(3.76deg, #727C7B 5.48%, #AFB8B7 67.63%)';

class EventCodeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCodeEntryOpen: false,
      isCodeConfirmationOpen: false,
      isCongratulationsOpen: false,
    }
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({
      ...this.state,
      isCodeEntryOpen: true,
    })
  }

  afterOpenModal() {

  }

  closeModal(){
    this.setState({
      ...this.state,
      isCodeEntryOpen: false,
      isCodeConfirmationOpen: false,
      isCongratulationsOpen: false,
    })
  }

  submitCode() {
    this.setState({
      ...this.state,
      isCodeEntryOpen: false,
      isCodeConfirmationOpen: true,
    })

    this.context.dispatch(levelUp());
  }

  soundsGood() {
    this.setState({
      ...this.state,
      isCodeConfirmationOpen: false,
      isCongratulationsOpen: true,
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.openModal.bind(this)}
          style={styles.orangeButtonLarge} >
            I attended<br/>an Event
        </Button>
  
        <Modal
          isOpen={this.state.isCodeEntryOpen}
          onAfterOpen={this.afterOpenModal.bind(this)}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Event Code Modal"
        >
          <div style={styles.eventModal.container}>
            <div style={styles.eventModal.title}>
              Code Entry
            </div>
  
            <form>
              <label style={styles.eventModal.prompt}>
              Enter your event code:
                <input type="text" name="eventCode" style={styles.eventModal.input} />
              </label>
            </form>
  
            <Button onClick={this.closeModal.bind(this)}
              style={greyButtonSmall} >
              Cancel
            </Button>
  
            <Button onClick={this.submitCode.bind(this)}
              style={styles.orangeButtonSmall} >
              Submit Code
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={this.state.isCodeConfirmationOpen}
          onAfterOpen={this.afterOpenModal.bind(this)}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Event Code Modal"
        >
          <div style={styles.eventModal.container}>
            <div style={styles.eventModal.title}>
              Code Confirmation
            </div>
  
            <p>you got some new shit my friend</p>
  
            <Button onClick={this.soundsGood.bind(this)}
              style={greyButtonSmall} >
              Sounds Good
            </Button>
  
            <Button onClick={()=> alert('feature in development')}
              style={styles.orangeButtonSmall} >
              Change My Avatar
            </Button>
          </div>
        </Modal>

        <Modal
          isOpen={this.state.isCongratulationsOpen}
          onAfterOpen={this.afterOpenModal.bind(this)}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Event Code Modal"
        >
          <div style={styles.eventModal.container}>
            <div style={styles.eventModal.title}>
              Congrats
            </div>
            <Confetti
              width='1000px'
              height='1000px'
            />
            <p> you did it you sexy fuck </p>
  
            <Button onClick={this.closeModal.bind(this)}
              style={greyButtonSmall} >
              Dismiss
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}
EventCodeModal.contextType = StoreContext;

export default EventCodeModal
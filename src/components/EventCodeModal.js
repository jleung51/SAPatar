import React, { Component } from 'react';
import Modal from 'react-modal';
import {Button} from 'react-bootstrap';
import Confetti from 'react-confetti'
import {levelUp} from '../reduxStore/actionCreator';
import styles from '../styles/styles';
import StoreContext from '../storeContext';

import ClothesIcon from '../img/category-icons/clothes-selected.png';
import LevelUpMedal5 from '../img/medals/congrats-medal-5.png';
import CustomizeModal from './CustomizeModal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',

    borderRadius: '50px',

    overflow: 'hidden',  // Don't show confetti outside window
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
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

  }

  close() {
    this.setState({
      ...this.state,
      isCodeConfirmationOpen: false,
      isCongratulationsOpen: true,
    })

    this.context.dispatch(levelUp());
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

            <div style={styles.eventModal.buttonContainer}>
              <Button onClick={this.closeModal.bind(this)}
                style={greyButtonSmall} >
                Cancel
              </Button>
              <Button onClick={this.submitCode.bind(this)}
                style={styles.orangeButtonSmall} >
                Submit Code
              </Button>
            </div>

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

            <div style={styles.eventModal.prompt}>
              Event Code Confirmed
            </div>

            <div style={styles.eventModal.message}>
              <p>
                Unlock <span style={styles.orangeText}> clothing</span> <img src={ClothesIcon} style={styles.eventModal.clothesIcon} /> for your avatar
              </p>
            </div>

            <div style={styles.eventModal.buttonContainer}>
              <Button onClick={this.close.bind(this)}
                style={greyButtonSmall} >
                Close
              </Button>

              <CustomizeModal
                style={styles.orangeButtonSmall}
                buttonStyle={styles.orangeButtonSmall}
                textLine1='Change'
                textLine2='My Avatar' />
            </div>
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
            <Confetti
              width='1000px'
              height='1000px'
            />

            <div style={styles.eventModal.title}>
              Code Confirmation
            </div>

            <img src={LevelUpMedal5} style={styles.eventModal.medal5} />

            <div style={styles.eventModal.prompt}>
              Congratulations! <br/> You are now <span style={styles.orangeText}>Level 5</span>
            </div>

            <div style={styles.eventModal.buttonContainer}>
              <Button onClick={this.closeModal.bind(this)}
                style={greyButtonSmall} >
                Close
              </Button>
            </div>

          </div>
        </Modal>
      </div>
    );
  }
}
EventCodeModal.contextType = StoreContext;

export default EventCodeModal
import React from 'react';
import Modal from 'react-modal';
import {Button} from 'react-bootstrap';

import store from '../reduxStore/store';
import {levelUp} from '../reduxStore/actionCreator';
import styles from '../styles/styles';

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

function EventCodeModal(){
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

  function submitCode() {

    // Show celebratory modal

    // Level up (in Redux store)
    store.dispatch(levelUp());
  }


  // Copy styling to avoid affecting originaly stying
  let greyButtonSmall = {};
  Object.assign(greyButtonSmall, styles.orangeButtonSmall);
  greyButtonSmall.background = 'linear-gradient(3.76deg, #727C7B 5.48%, #AFB8B7 67.63%)';

    return (
      <div>
        <Button onClick={openModal}
          style={styles.orangeButtonLarge} >
            I attended<br/>an Event
        </Button>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Event Code Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}></h2>
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

            <Button onClick={closeModal}
              style={greyButtonSmall} >
              Cancel
            </Button>

            <Button onClick={submitCode}
              style={styles.orangeButtonSmall} >
              Submit Code
            </Button>

          </div>
        </Modal>
      </div>
    );
}

export default EventCodeModal
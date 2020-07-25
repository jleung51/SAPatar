import React from 'react';
import Modal from 'react-modal';
import {Button} from 'react-bootstrap';

import styles from '../styles/styles';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
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
          <div>Event Form Goes Here</div>
        </Modal>
      </div>
    );
}

export default EventCodeModal
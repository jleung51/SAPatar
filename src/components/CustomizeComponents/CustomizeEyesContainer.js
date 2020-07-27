import React, {Component} from 'react';
import {Piece} from 'avataaars';
import StoreContext from '../../storeContext';
import {
    changeEyes
} from '../../reduxStore/actionCreator';
import {
    Button,
} from 'react-bootstrap';

import styles from '../../styles/styles';
import '../../styles/styles.css';

const pieceSize = "270";
const pieceType = "eyes";
const buttonVariant = "light";
const eyesType = [
    "Close",
    "Cry",
    "Default",
    "Dizzy",
    "EyeRoll",
    "Happy",
    "Hearts",
    "Side",
    "Squint",
    "Surprised",
    "Wink",
    "WinkWacky",
];

const customStyles = {
    marginTop: '30px',
};

class CustomizeEyesContainer extends Component {
    constructor(props) {
        super(props);
        this.renderContainer;
    }

    handleClick(eyesType) {
        const store = this.context;
        store.dispatch(changeEyes(eyesType));
    }

    render() {
        return (
            <div>
                {eyesType.map( eyes => {
                    return (
                        <Button variant={buttonVariant} onClick={()=> this.handleClick(eyes)}  style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                        <Piece pieceType={pieceType} pieceSize={pieceSize} eyeType={eyes}
                            style={customStyles} />
                        </Button>
                    )
                })}
            </div>
        )
    }
}

CustomizeEyesContainer.contextType = StoreContext;

export default CustomizeEyesContainer;
import React, {Component} from 'react';
import {Piece} from 'avataaars';
import StoreContext from '../../storeContext';
import {
    changeEyebrows
} from '../../reduxStore/actionCreator';
import {
    Button,
} from 'react-bootstrap';

import styles from '../../styles/styles';
import '../../styles/styles.css';

const pieceSize = "100";
const pieceType = "eyebrows";
const buttonVariant = "light";
const eyebrowType = [
    "Angry",
    "AngryNatural",
    "Default",
    "DefaultNatural",
    "FlatNatural",
    "FrownNatural",
    "RaisedExcited",
    "RaisedExcitedNatural",
    "SadConcerned",
    "SadConcernedNatural",
    "UnibrowNatural",
    "UpDown",
    "UpDownNatural",
];

class CustomizeEyebrowsContainer extends Component {
    constructor(props) {
        super(props);
        this.renderContainer;
    }

    handleClick(eyebrowType) {
        const store = this.context;
        store.dispatch(changeEyebrows(eyebrowType));
    }

    render() {
        return (
            <div>
                {eyebrowType.map( eyebrow => {
                    return (
                        <Button variant={buttonVariant} onClick={()=> this.handleClick(eyebrow)} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                        <Piece pieceType={pieceType} pieceSize={pieceSize} eyebrowType={eyebrow}/>
                        </Button>
                    )
                })}
            </div>
        )
    }
}

CustomizeEyebrowsContainer.contextType = StoreContext;

export default CustomizeEyebrowsContainer;
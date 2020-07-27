import React, {Component} from 'react';
import {Piece} from 'sapataaars';
import StoreContext from '../../storeContext';
import {
    changeMouth
} from '../../reduxStore/actionCreator';
import {
    Button,
} from 'react-bootstrap';

import styles from '../../styles/styles';
import '../../styles/styles.css';

const pieceSize = "270";
const pieceType = "mouth";
const buttonVariant = "light";
const mouthType = [
    "Eating",
    "Sad",
    "Smile",
    "Default",
    "Disbelief",
    "ScreamOpen",
    "Twinkle",
    "Serious",
    "Vomit",
    "Grimace",
    "Tongue",
    "Concerned",
];

const customStyles = {
    marginTop: '0px',
};

class CustomizeMouthContainer extends Component {
    constructor(props) {
        super(props);
        this.renderContainer;
    }

    handleClick(mouthType) {
        const store = this.context;
        store.dispatch(changeMouth(mouthType));
    }

    render() {
        return (
            <div>
                {mouthType.map( mouth => {
                    return (
                        <Button variant={buttonVariant} onClick={()=> this.handleClick(mouth)} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                        <Piece pieceType={pieceType} pieceSize={pieceSize} mouthType={mouth}
                            style={customStyles} />
                        </Button>
                    )
                })}
            </div>
        )
    }
}

CustomizeMouthContainer.contextType = StoreContext;

export default CustomizeMouthContainer;
import React, {Component} from 'react';
import {Piece} from 'sapataaars';
import StoreContext from '../../storeContext';
import {
    changeMouth, changeHair
} from '../../reduxStore/actionCreator';
import {
    Button,
} from 'react-bootstrap';

import styles from '../../styles/styles';
import '../../styles/styles.css';

const pieceSize = "100";
const pieceType = "top";
const buttonVariant = "light";
const hairstyles = [
    "LongHairBigHair",
    "LongHairBob",
    "LongHairBun",
    "LongHairCurly",
    "LongHairCurvy",
    "LongHairDreads",
    "LongHairFrida",
    "LongHairFro",
    "LongHairFroBand",
    "LongHairMiaWallace",
    "LongHairNotTooLong",
    "LongHairShavedSides",
    "LongHairStraight",
    "LongHairStraight2",
    "LongHairStraightStrand",
    "NoHair",
    "ShortHairDreads01",
    "ShortHairDreads02",
    "ShortHairFrizzle",
    "ShortHairShaggyMullet",
    "ShortHairShortCurly",
    "ShortHairShortFlat",
    "ShortHairShortRound",
    "ShortHairShortWaved",
    "ShortHairSides",
    "ShortHairTheCaesar",
    "ShortHairTheCaesarSidePart"
];

class CustomizeMouthContainer extends Component {
    constructor(props) {
        super(props);
        this.renderContainer;
    }

    handleClick(hairstyle) {
        const store = this.context;
        store.dispatch(changeHair(hairstyle));
    }

    render() {
        return (
            <div style={styles.customizeModal.selector} >
                {hairstyles.map( hairstyle => {
                    return (
                        <Button variant={buttonVariant} onClick={()=> this.handleClick(hairstyle)} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                        <Piece pieceType={pieceType} pieceSize={pieceSize} topType={hairstyle}/>
                        </Button>
                    )
                })}
            </div>
        )
    }
}

CustomizeMouthContainer.contextType = StoreContext;

export default CustomizeMouthContainer;
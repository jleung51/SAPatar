import React, {Component} from 'react';
import {Piece} from 'avataaars';
import StoreContext from '../../storeContext';
import {
    changeMouth, changeHair
} from '../../reduxStore/actionCreator';
import {
    Button,
} from 'react-bootstrap';

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
            <div>
                {hairstyles.map( hairstyle => {
                    return (
                        <Button variant={buttonVariant} onClick={()=> this.handleClick(hairstyle)}>
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
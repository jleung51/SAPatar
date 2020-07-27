import React, {Component} from 'react';
import {Piece} from 'sapataaars';
import StoreContext from '../../storeContext';
import {
    changeClothes
} from '../../reduxStore/actionCreator';
import {
    Button,
} from 'react-bootstrap';

import styles from '../../styles/styles';
import '../../styles/styles.css';

const pieceSize = "100";
const pieceType = "clothe";
const buttonVariant = "light";

class CustomizeWardrobeContainer extends Component {
    constructor(props) {
        super(props);
        this.renderContainer;
    }

    handleClick(clotheType, clotheColor) {
        const store = this.context;
        store.dispatch(changeClothes(clotheType, clotheColor));
    }

    render() {
        return (
            <div>

                <Button variant={buttonVariant} onClick={()=> this.handleClick('SapIxpBlazer')} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                <Piece pieceType={pieceType} pieceSize={pieceSize} clotheType='SapIxpBlazer'/>
                </Button>

                <Button variant={buttonVariant} onClick={()=> this.handleClick('SapBestRunHoodie')} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                <Piece pieceType={pieceType} pieceSize={pieceSize} clotheType='SapBestRunHoodie'/>
                </Button>

                <Button variant={buttonVariant} onClick={()=> this.handleClick('SapCrewneckShirt')} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                <Piece pieceType={pieceType} pieceSize={pieceSize} clotheType='SapCrewneckShirt'/>
                </Button>

                <Button variant={buttonVariant} onClick={()=> this.handleClick('SapVneckShirt')} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                <Piece pieceType={pieceType} pieceSize={pieceSize} clotheType='SapVneckShirt'/>
                </Button>

                <Button variant={buttonVariant} onClick={()=> this.handleClick('Hoodie', 'Pink')} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                <Piece pieceType={pieceType} pieceSize={pieceSize} clotheType='Hoodie' clotheColor='Pink'/>
                </Button>

                <Button variant={buttonVariant} onClick={()=> this.handleClick('ShirtCrewNeck')} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                <Piece pieceType={pieceType} pieceSize={pieceSize} clotheType='ShirtCrewNeck'clotheColor='Blue02'/>
                </Button>

                <Button variant={buttonVariant} onClick={()=> this.handleClick('BlazerSweater')} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                <Piece pieceType={pieceType} pieceSize={pieceSize} clotheType='BlazerSweater'/>
                </Button>

                <Button variant={buttonVariant} onClick={()=> this.handleClick('BlazerSweater')} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                <Piece pieceType={pieceType} pieceSize={pieceSize} clotheType='BlazerSweater'/>
                </Button>

                <Button variant={buttonVariant} onClick={()=> this.handleClick('GraphicShirt', 'Black')} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                <Piece pieceType={pieceType} pieceSize={pieceSize} clotheType='GraphicShirt' clotheColor='Black'/>
                </Button>

                <Button variant={buttonVariant} onClick={()=> this.handleClick('CollarSweater', 'Blue03')} style={styles.customizeModal.selectorItem} className='selector-item-hover'>
                <Piece pieceType={pieceType} pieceSize={pieceSize} clotheType='CollarSweater' clotheColor='Blue03'/>
                </Button>
            </div>
        )
    }
}

CustomizeWardrobeContainer.contextType = StoreContext;

export default CustomizeWardrobeContainer;
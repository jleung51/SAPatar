const initialState = {
    wardrobe: {
        'clothes': [
        'BlazerShirt',
        'BlazerSweater',
        'ShirtVNeck',
        ],
    },

    currentOutfit: {
        topType:'LongHairMiaWallace',
        hairColor:'BrownDark',
        accessoriesType:'Prescription02',
        clotheType: 'BlazerShirt',
        clotheColor:'PastelBlue',
    },

    physicalChars: {    
        eyeType:'Happy',
        eyebrowType:'Default',
        mouthType: 'Smile',
        skinColor:'Light',
        facialHairType:'Blank',
        hairColor:'Black'
    }
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case 'changeProperty': return changePropertyHandler(state,action.payload);
        default: return state;
    }
}

function changePropertyHandler(state, payload) {
    let newState = Object.assign({}, ...state);
    newState[payload.propertyToChange] = payload.changeTo;
    return newState;
}
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
        accessoriesType:'Blank',
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
    },

    level: 4,

}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case 'changeMouth': return changeMouthHandler(state, action.payload);
        case 'changeHair' : return changeHairHandler(state, action.payload);
        case 'changeEyebrows': return changeEyebrowsHandler(state, action.payload);
        case 'changeEyes': return changeEyesHandler(state, action.payload);
        case 'changeClothe': return changeClotheHandler(state, action.payload);
        case 'levelUp': return levelUpHandler(state);
        default: return state;
    }
}

function changeClotheHandler(state, clothe) {
    let newState = Object.assign({}, state);
    newState.currentOutfit.clotheType = clothe.Clothe;
    if(clothe.Color !== 'Blank') newState.currentOutfit.clotheColor = clothe.Color;
    return newState;
}

function changeMouthHandler(state, mouth) {
    let newState = Object.assign({}, state);
    newState.physicalChars.mouthType = mouth
    return newState;
}

function changeHairHandler(state, hair) {
    let newState = Object.assign({}, state);
    newState.currentOutfit.topType = hair;
    return newState;
}

function changeEyebrowsHandler(state, eyebrow) {
    let newState = Object.assign({}, state);
    newState.physicalChars.eyebrowType = eyebrow;
    return newState;
}

function changeEyesHandler(state, eyes) {
    let newState = Object.assign({}, state);
    newState.physicalChars.eyeType = eyes;
    return newState;
}

function levelUpHandler(state) {
    let newState = Object.assign({}, state);
    if (newState.level < 5) {
        newState.level = newState.level + 1;
    }

    return newState;
}
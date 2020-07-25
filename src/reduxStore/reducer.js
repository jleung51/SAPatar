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
        case 'changeMouth': return changeMouthHandler(state, action.payload);
        case 'changeHair' : return changeHairHandler(state, action.payload);
        default: return state;
    }
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
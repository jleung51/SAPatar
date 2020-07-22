const initialState = {
    topType:'LongHairMiaWallace',
    accessoriesType:'Prescription02',
    hairColor:'BrownDark',
    facialHairType:'Blank',
    clotheType:'Hoodie',
    clotheColor:'PastelBlue',
    eyeType:'Happy',
    eyebrowType:'Default',
    mouthType:'Smile',
    skinColor:'Light'
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
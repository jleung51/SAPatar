export function changeMouth(mouth) {
    return {
        type: 'changeMouth',
        payload: mouth
    }
}

export function changeEyes(Eyes) {
    return {
        type: 'changeEyes',
        payload: Eyes
    }
}

export function changeHair(Hair) {
    return {
        type: 'changeHair',
        payload: Hair
    }
}

export function changeEyebrows(Eyebrow) {
    return {
        type: 'changeEyebrows',
        payload: Eyebrow
    }
}

export function levelUp() {
    return {
        type: 'levelUp'
    }
}
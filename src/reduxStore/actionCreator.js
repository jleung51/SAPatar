export function changeProperty(propertyToChange, changeTo) {
    return {
        type: 'changeProperty',
        payload: {
            propertyToChange,
            changeTo
        }
    }
}
import Background from '../img/background.jpg';

const styles = {
    outlined: {
        outline: '2px dotted red'
    },

    root: {
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '100%',
        margin: '0',
        padding: '0',
    },

    floatingContainer: {
        padding: '40px',
        height: '95%',
    },

    sidebar: {
        container: {
            // Size and position
            float: 'left',
            height: '100%',
            width: '450px',

            // Card
            backgroundColor: 'F0F4F9',
            borderRadius: '10px',

            // Content
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        },

        title: {
            width: '100%',
            margin: '34px 0',

            fontSize: '1.6em',
            fontWeight: 'bold',
        }
    },

    notSidebarContainer: {
        float: 'right',
        height: '100%',
        width: '65%',  // Needs to be adjusted if other measurements change
        // outline: '1px dotted grey',
    },

    welcomeMessage: {
        // Size and positioning
        width: '100%',
        display: 'inline-block',
        verticalAlign: 'top',
        margin: '10px 0',

        // Contents
        textAlign: 'center',
        fontSize: '48px',
        fontWeight: 'bold',
    },

    // To customize the avatar size, go to Person.js
    avatarContainer: {
        // Positioning
        display: 'flex',
        margin: '30px 0',

        // Contents
        alignItems: 'center',
        justifyContent: 'center',
        // outline: '1px dotted grey',
    },

    buttonContainer: {
        // Contents
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '60px 0',
    },

    modal: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
};

export default styles
import Background from '../img/background.jpg';

const styles = {
    outlined: {
        outline: '2px dotted red',
    },

    centeredText: {
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: 'normal',
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
        height: '100%',
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
        },

        personCard: {
            height: '80px',

            margin: '20px',
            borderRadius: '10px',

            backgroundColor: '#FAFAFA',
        },

        personCardNumber: {
            // Size
            height: '100%',
            lineHeight: '100%',
            width: '70px',  // Matches personCard height

            backgroundColor: '#A2D9D0',
            borderRadius: '10px',

            display: 'flex',
            alignItems: 'center',

            float: 'left',

            // Font styling
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',

            fontSize: '32px',
            fontWeight: 'bold',
            color: '#31A493',
        },

        personCardPic: {
            // Size
            height: '100%',
            display: 'inline-block',

            // Positioning
            float: 'left',
            margin: '0 20px',

            // Content
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        },

        personCardName: {
            float: 'left',
            height: '100%',

            fontSize: '26px',
            fontWeight: 'bold',
            color: '#31A493',
        },

        personCardFlag: {
            width: '50px',
            height: '50px',

            float: 'right',
            marginRight: '20px',
        },
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
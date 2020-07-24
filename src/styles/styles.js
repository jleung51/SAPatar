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

    verticalCenteredContentsLeft: {
        height: '100%',
        display: 'flex',

        float: 'left',
        textAlign: 'left',

        // To float an element inside, assign it the following:
        // display: 'block',
        // marginTop: 'auto',
        // marginBottom: 'auto',
    },

    verticalCenteredContentsRight: {
        height: '100%',
        display: 'flex',

        float: 'right',
        textAlign: 'right',

        // To float an element inside, assign it the following:
        // display: 'block',
        // marginTop: 'auto',
        // marginBottom: 'auto',
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
            position: 'relative',

            // Card
            backgroundColor: '#F0F4F9',
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
            height: '83px',

            margin: '12px 20px',
            borderRadius: '10px',

            backgroundColor: '#E8ECF0',
        },

        personCardNumber: {
            // Size
            height: '100%',
            lineHeight: '100%',
            width: '75px',  // Proportional to personCard height

            backgroundColor: '#AAC6DE',
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
            color: '#427CAC',
        },

        personCardPicMargins: {
            display: 'block',
            marginTop: 'auto',
            marginBottom: 'auto',
        },

        personCardNameAndPointsContainer: {
            // Float
            display: 'block',
            marginTop: 'auto',
            marginBottom: 'auto',
        },

        personCardName: {
            // Position
            float: 'left',
            marginRight: '15px',

            // Content
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#427CAC',
            lineHeight: '130%',
            textTransform: 'uppercase',
        },

        personCardPoints: {
            // Content
            fontSize: '14px',
            color: '#E09D03',
            lineHeight: '100%',
            textTransform: 'uppercase',
        },

        personCardFlag: {
            // Size
            width: '45px',
            height: '45px',

            // Position
            alignSelf: 'center',
            marginRight: '15px',

            // Float
            display: 'block',
            marginTop: 'auto',
            marginBottom: 'auto',
        },

        whiteGradient: {
            width: '100%',
            position: 'absolute',  // Parent is relative, to position this over
            bottom: '0',
            left: '0',
            zIndex: '10',
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
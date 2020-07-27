import Background from '../img/backgrounds/fantasy.jpg';

const styles = {
    outlined: {
        outline: '2px dotted red',
    },

    orangeText: {
        color: '#E09D03',
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

        fontFamily: 'Bungee',
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
            borderRadius: '25px',

            // Content
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
        },

        title: {
            width: '100%',
            marginTop: '34px',
            marginBottom: '22px',

            fontSize: '2.4em',
            fontWeight: 'bold',
            color: '#334E69',
        },

        button: {
            width: '82%',
            marginBottom: '20px',
        },

        toggleNationalGlobal: {
            width: '100%',
        },

        // Match the two below, except for background color
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
            fontSize: '24px',
            color: '#427CAC',
            lineHeight: '130%',
            textTransform: 'uppercase',
        },

        personCardPoints: {
            // Content
            fontSize: '16px',
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
            zIndex: '1',
        },

        highlightCard: {
            width: '100%',
            position: 'absolute',  // Parent is relative, to position this over
            bottom: '0',
            left: '0',
            zIndex: '2',

            marginBottom: '15px',
        },
    },

    notSidebarContainer: {
        float: 'right',
        height: '100%',
        width: '65%',  // Needs to be adjusted if other measurements change
        // outline: '1px dotted grey',

        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    medals: {
        display: 'inline-block',
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
        float: 'center',
    },

    welcomeMessage: {
        // Size and positioning
        width: '100%',
        display: 'inline-block',
        verticalAlign: 'top',
        margin: '30px 0',

        // Contents
        textAlign: 'center',
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#E8ECF0',
    },

    // To customize the avatar size, go to Person.js
    avatarContainer: {
        // Positioning
        display: 'flex',
        margin: '30px 0',

        // Contents
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContainer: {
        // Contents
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '60px 0',
    },

    orangeButtonLarge: {
        // Size/shape
        width: '350px',
        height: '100px',
        borderRadius: '28px',

        marginLeft: '15px',
        marginRight: '15px',

        // Color
        background: 'linear-gradient(175.18deg, #FABC63 23.99%, #BE8502 87.39%)',
        border: 0,

        // Content
        fontSize: '26px',
    },

    orangeButtonSmall: {
        // Size/shape
        width: '190px',
        height: '55px',
        borderRadius: '22px',

        marginLeft: '15px',
        marginRight: '15px',

        // Color
        background: 'linear-gradient(175.24deg, #FABC63 23.99%, #C48800 87.39%)',
        border: 0,

        // Content
        fontSize: '16px',
    },

    blueButtonSmall: {
        // Size/shape
        width: '200px',
        height: '55px',
        borderRadius: '12px',

        marginLeft: '15px',
        marginRight: '15px',

        // Color
        background: '#427CAC',
        border: 0,

        // Content
        fontSize: '24px',
    },



    modal: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },

    eventModal: {
        container: {
            width: '660px',
            height: '350px',

            justifyContent: 'center',
            textAlign: 'center',

            fontFamily: 'Bungee',
        },

        title: {
            marginBottom: '50px',

            fontSize: '10px',
            letterSpacing: '.2em',
            color: '#7C7C7C',
        },

        prompt: {
            fontSize: '34px',
            color: '#334E69',
        },

        message: {
            justifyContent: 'center',
            textAlign: 'center',

            display: 'flex',
            marginTop: '30px',

            fontSize: '25px',
            color: '#334E69',
        },

        clothesIcon: {
            width: '40px',
            height: '40px',

            margin: '0 6px',
            verticalAlign: 'middle',
        },

        input: {
            marginTop: '25px',

            width: '300px',
            height: '70px',

            background: '#F0F4F9',
            border: 0,

            justifyContent: 'center',
            textAlign: 'center',
        },

        buttonContainer: {
            width: '100%',

            display: 'inline-block',
            position: 'fixed',
            bottom: 0,
            left: 0,
            marginBottom: '40px',
        },

        medal5: {
            width: '60px',
        },
    },

    customizeModal: {

        header: {
            // Size
            width: '100%',
            height: '115px',
            paddingTop: '20px',

            // Positioning
            display: 'flex',

            // Content
            background: '#E8ECF0',

            alignItems: 'center',

            fontFamily: 'Bungee',
            color: '#334E69',
        },

        headerText: {
            marginLeft: '70px',

            fontSize: '38px',
        },

        headerButton: {
            marginLeft: 'auto',  // Floats right in displayflex
            marginRight: '30px',
        },

        thingICantRemove: {
            background: '#E8ECF0',
            margin: 0,
        },

        floatingContainer: {
            marginTop: '50px',
            marginLeft: '25px',
            marginRight: '25px',
            marginBottom: '0px',
        },

        personColumn: {
            margin: 0,
            padding: 0,
        },

        personBackground: {
            // Size matches <Person /> size
            width: '500px',
            height: '500px',

            borderRadius: '30px',
            background: '#E8ECF0',

            // Positioning
            display: 'flex',

            // Contents
            alignItems: 'center',
            justifyContent: 'center',
        },

        optionsContainer: {
            height: '100%',
        },

        navbar: {
            width: '100%',
            height: '84px',
            borderRadius: '11px',

            padding: 0,
            marginBottom: '30px',


            background: '#E8ECF0',
        },

        navbarButtonGroup: {
            marginLeft: '15px',
        },

        navbarButton: {
            backgroundColor: 'transparent',

            padding: 0,
            marginLeft: '6px',
            marginRight: '6px',

            border: 0,
            outline: 'none',
        },

        navbarButtonImage: {
            width: '60px',
        },

        selector: {
            height: '36%',
            overflowY: 'auto',  // Allow this section to scroll
        },

        selectorItem: {
            width: '150px',
            height: '150px',

            borderRadius: '30px',

            // Outline
            // Using actual 'outline' fails because the corners cannot be rounded
            boxShadow: '0 0 0 1px #AAC6DE',

            margin: '7px',

            backgroundColor: 'transparent',
        },

    },
};

export default styles
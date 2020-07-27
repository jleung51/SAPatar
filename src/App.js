import React, {Component} from 'react';

import PersonTemplate from './components/PersonTemplate';
import Person from './components/Person';
import LeaderboardCard from './components/LeaderboardCard';
import Medals from './components/Medals';

import Store from './reduxStore/store';
import StoreContext from './storeContext';
import styles from './styles/styles';
import CustomizeModal from './components/CustomizeModal';
import EventCodeModal from './components/EventCodeModal';

import './styles/fonts.css';
import './styles/styles.css';

// Pictures
import FlagCanada from './img/flags/flag-canada.png';
import WhiteGradient from './img/white-gradient.png';
import LboardToggleNationalGlobal from './img/toggle-national-global.png';
import LboardToggleSort from './img/toggle-sort.png';

// Backgrounds
import level4BG from './img/backgrounds/level4.jpg';
import level5BG from './img/backgrounds/level5.jpg';

import './styles/fonts.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 0,
            backgroundStyle: {
                backgroundImage: "url(" + level4BG + ")",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                height: '100%',
                margin: '0',
                padding: '0',
                fontFamily: 'Bungee',
            }
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            level: Store.getState().level});

        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                ...this.state,
                level: Store.getState().level
            });

            if(Store.getState().level === 5) {
                this.setState({
                    ...this.state,
                    backgroundStyle: {
                        backgroundImage: "url(" + level5BG + ")",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        height: '100%',
                        margin: '0',
                        padding: '0',
                        fontFamily: 'Bungee',
                    }
                })
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div style={this.state.backgroundStyle}>

            <StoreContext.Provider value={Store} >
                <div style={styles.floatingContainer}>
                    <div style={styles.sidebar.container}>
                        <div style={styles.sidebar.title}>
                            LEADERBOARD
                        </div>

                        <img src={LboardToggleNationalGlobal} style={styles.sidebar.button}/>
                        <img src={LboardToggleSort} style={styles.sidebar.button}/>

                        {/* Container for the cards, allows me to overlay the gradient on top */}
                        <div>
                            <LeaderboardCard
                                rank='1'
                                name='Emily Doe'
                                points='290'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='LongHairFroBand'
                                    clotheType='Overall'
                                    eyeType='Squint'
                                    eyebrowType='RaisedExcited'
                                    mouthType='Twinkle'
                                    skinColor='Brown'
                                    />}
                                flagImg={FlagCanada}
                                />

                            <LeaderboardCard
                                rank='2'
                                name='Jen Yousif'
                                points='285'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='Hijab'
                                    clotheType='ShirtCrewNeck'
                                    clotheColor='Blue02'
                                    eyeType='Surprised'
                                    eyebrowType='RaisedExcited'
                                    mouthType='Tongue'
                                    skinColor='Light'
                                    />}
                                flagImg={FlagCanada}
                                />

                            <LeaderboardCard
                                rank='3'
                                name='Fred Biser'
                                points='270'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='ShortHairTheCaesarSidePart'
                                    clotheType='CollarSweater'
                                    eyeType='EyeRoll'
                                    eyebrowType='RaisedExcited'
                                    mouthType='Eating'
                                    skinColor='DarkBrown'
                                    />}
                                flagImg={FlagCanada}
                                />

                            <LeaderboardCard
                                rank='4'
                                name='Kelly Li'
                                points='260'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='LongHairNotTooLong'
                                    clotheType='Hoodie'
                                    clotheColor='Blue02'
                                    clotheColor='Heather'
                                    eyeType='Happy'
                                    eyebrowType='RaisedExcited'
                                    mouthType='Twinkle'
                                    skinColor='Pale'
                                    />}
                                flagImg={FlagCanada}
                                />

                            <LeaderboardCard
                                rank='5'
                                name='Tom Buxton'
                                points='255'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='ShortHairFrizzle'
                                    clotheType='Blazer'
                                    eyeType='Wink'
                                    eyebrowType='UpDown'
                                    mouthType='Smile'
                                    skinColor='Pale'
                                    />}
                                flagImg={FlagCanada}
                                />

                            <LeaderboardCard
                                rank='6'
                                name='Jeffrey Leung'
                                points='240'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='ShortHairShortFlat'
                                    accessoriesType='Prescription02'
                                    hairColor='Black'
                                    facialHairType='Blank'
                                    clotheType='BlazerShirt'
                                    eyeType='Happy'
                                    eyebrowType='DefaultNatural'
                                    mouthType='Smile'
                                    skinColor='Pale'
                                    />}
                                flagImg={FlagCanada}
                                />

                        </div>

                        <img src={WhiteGradient} style={styles.sidebar.whiteGradient} />

                        <div style={styles.sidebar.highlightCard}>
                            <LeaderboardCard
                                rank= {this.state.level === 5 ? '12' : '13'}
                                name='Ana Mendez'
                                points={this.state.level === 5 ? '200' : '190'}
                                person={<Person size='70px'/>}
                                flagImg={FlagCanada}
                                highlight='true'
                                />
                        </div>

                    </div>

                    <div style={styles.notSidebarContainer}>
                        <div style={styles.welcomeMessage}>
                            Welcome back, Ana
                        </div>

                        <Medals/>

                        <div style={styles.avatarContainer}>
                            <Person size='320px'/>
                            <img src={FlagCanada}/>
                        </div>

                        <div style={styles.buttonContainer}>
                            <EventCodeModal />
                            <CustomizeModal />
                        </div>
                    </div>

                </div>

            </StoreContext.Provider>
            </div>

        )
    }
}

export default App;
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

// Pictures
import FlagCanada from './img/flags/flag-canada.png';
import WhiteGradient from './img/white-gradient.png';
import LboardToggleNationalGlobal from './img/toggle-national-global.png';
import LboardToggleSort from './img/toggle-sort.png';

import './styles/fonts.css';

class App extends Component {

    render() {

        return (
            <div style={styles.root}>
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
                                points='160'
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
                                points='150'
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
                                points='110'
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
                                points='90'
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
                                points='85'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='Frizzle'
                                    clotheType='Blazer'
                                    eyeType='Wink'
                                    eyebrowType='UpDown'
                                    mouthType='Smile'
                                    skinColor='Brown'
                                    />}
                                flagImg={FlagCanada}
                                />

                            <LeaderboardCard
                                rank='6'
                                name='Jeffrey Leung'
                                points='80'
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
                                rank='42'
                                name='Tiffany Ren'
                                points='25'
                                person={<Person size='70px'/>}
                                flagImg={FlagCanada}
                                highlight='true'
                                />
                        </div>

                    </div>

                    <div style={styles.notSidebarContainer}>
                        <div style={styles.welcomeMessage}>
                            Welcome back, Tiffany
                        </div>

                        <Medals/>

                        <div style={styles.avatarContainer}>
                            <Person size='320px'/>
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
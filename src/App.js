import React, {Component} from 'react';

import PersonTemplate from './components/PersonTemplate';
import Person from './components/Person';
import LeaderboardCard from './components/LeaderboardCard';

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
                                name='Priscilla Lee'
                                points='95'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='LongHairNotTooLong'
                                    clotheType='ShirtVNeck'
                                    />}
                                flagImg={FlagCanada}
                                />

                            <LeaderboardCard
                                rank='2'
                                name='Tiffany Ren'
                                points='85'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='LongHairStraight'
                                    hairColor='SilverGray'
                                    accessoriesType='Sunglasses'
                                    eyeType='EyeRoll'
                                    facialHairType='MoustacheFancy'
                                    mouthType='Smile'
                                    />}
                                flagImg={FlagCanada}
                                />

                            <LeaderboardCard
                                rank='3'
                                name='Tiffany Ren'
                                points='85'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='LongHairStraight'
                                    hairColor='SilverGray'
                                    accessoriesType='Sunglasses'
                                    eyeType='EyeRoll'
                                    facialHairType='MoustacheFancy'
                                    mouthType='Smile'
                                    />}
                                flagImg={FlagCanada}
                                />

                            <LeaderboardCard
                                rank='4'
                                name='Tiffany Ren'
                                points='70'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='LongHairStraight'
                                    hairColor='SilverGray'
                                    accessoriesType='Sunglasses'
                                    eyeType='EyeRoll'
                                    facialHairType='MoustacheFancy'
                                    mouthType='Smile'
                                    />}
                                flagImg={FlagCanada}
                                />

                            <LeaderboardCard
                                rank='5'
                                name='Tiffany Ren'
                                points='65'
                                person={<PersonTemplate
                                    size='70px'
                                    topType='LongHairStraight'
                                    hairColor='SilverGray'
                                    accessoriesType='Sunglasses'
                                    eyeType='EyeRoll'
                                    facialHairType='MoustacheFancy'
                                    mouthType='Smile'
                                    />}
                                flagImg={FlagCanada}
                                />

                        </div>

                        <img src={WhiteGradient} style={styles.sidebar.whiteGradient} />

                        <div style={styles.sidebar.highlightCard}>
                            <LeaderboardCard
                                rank='42'
                                name='Tiffany Ren'
                                points='65'
                                person={<Person size='70px'/>}
                                flagImg={FlagCanada}
                                highlight='true'
                                />
                        </div>

                    </div>

                    <div style={styles.notSidebarContainer}>
                        <div style={styles.welcomeMessage}>
                            Welcome back, Tiffany!
                        </div>

                        <div style={styles.avatarContainer}>
                            <Person size='300px'/>
                        </div>

                        <div style={styles.buttonContainer}>
                            <EventCodeModal/>
                            <CustomizeModal/>
                        </div>
                    </div>
                </div>
            </StoreContext.Provider>
            </div>

        )
    }
}

export default App;
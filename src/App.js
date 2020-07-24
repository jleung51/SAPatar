import React, {Component} from 'react';

import PersonTemplate from './components/PersonTemplate';
import Person from './components/Person';
import LeaderboardCard from './components/LeaderboardCard';

import Store from './reduxStore/store';
import StoreContext from './storeContext';
import styles from './styles/styles';
import CustomizeModal from './components/CustomizeModal';
import EventCodeModal from './components/EventCodeModal';

// Pictures
import FlagCanada from './img/flags/flag-canada.png';
import WhiteGradient from './img/white-gradient.png';

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

                        {/* Container for the cards, allows me to overlay the gradient on top */}
                        <div>
                            <LeaderboardCard
                                rank='1'
                                name='Priscilla Lee'
                                person={<PersonTemplate
                                    size='75px'
                                    topType='LongHairNotTooLong'
                                    clotheType='ShirtVNeck'
                                    />}
                                flagImg={FlagCanada}
                                />

                            <LeaderboardCard
                                rank='2'
                                name='Tiffany Ren'
                                person={<PersonTemplate
                                    size='75px'
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
                                person={<PersonTemplate
                                    size='75px'
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
                                person={<PersonTemplate
                                    size='75px'
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
                                person={<PersonTemplate
                                    size='75px'
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

                        {/* <div > */}
                            <img src={WhiteGradient} style={styles.sidebar.whiteGradient} />
                        {/* </div> */}




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
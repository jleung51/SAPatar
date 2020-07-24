import React, {Component} from 'react';
import Person from './Person';
import styles from '../styles/styles';

// Pictures
import FlagCanada from '../img/flags/flag-canada.png';

{/*
    Example call:

    <LeaderboardCard
        rank='1'
        person={<Person size='75px' />}
        name='Emily Doe'
        flagImg={FlagCanada}
        />
*/}

export default class LeaderboardCard extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div style={styles.sidebar.personCard}>
                <div style={styles.sidebar.personCardNumber}>
                    <span style={styles.centeredText}>{this.props.rank}</span>
                </div>

                <div style={styles.verticalCenteredContentsLeft}  className='px-2'>
                    <div style={styles.sidebar.personCardPicMargins}>

                        {/* TODO: Implement passing a Person in to render here */}
                        {this.props.person}


                    </div>
                </div>

                <div style={styles.verticalCenteredContentsLeft}>
                    <span style={styles.sidebar.personCardName}>{this.props.name}</span>
                </div>

                <div style={styles.verticalCenteredContentsRight}>
                    <img src={this.props.flagImg} style={styles.sidebar.personCardFlag} />
                </div>
            </div>
        );
    }

}
import React, {Component} from 'react';
import styles from '../styles/styles';

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
                    {/* Rank */}
                    <span style={styles.centeredText}>{this.props.rank}</span>
                </div>

                <div style={styles.verticalCenteredContentsLeft}  className='px-2'>
                    <div style={styles.sidebar.personCardPicMargins}>
                        {/* Picture */}
                        {this.props.person}
                    </div>
                </div>

                <div style={styles.verticalCenteredContentsLeft}>
                    {/* Name */}
                    <span style={styles.sidebar.personCardName}>{this.props.name}</span>
                </div>

                <div style={styles.verticalCenteredContentsRight}>
                    {/* Flag */}
                    <img src={this.props.flagImg} style={styles.sidebar.personCardFlag} />
                </div>
            </div>
        );
    }

}
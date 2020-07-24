import React, {Component} from 'react';
import styles from '../styles/styles';

{/*
    Example call:

    <LeaderboardCard
        rank='1'
        person={<Person size='75px' />}
        name='Emily Doe'
        points='95'
        flagImg={FlagCanada}
        highlight='true'  // Leave out for normal cards
        />
*/}

export default class LeaderboardCard extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {

        // Copy styling to avoid affecting other cards
        let personCardStyling = {};
        Object.assign(personCardStyling, styles.sidebar.personCard);

        let personCardNumberStyling = {};
        Object.assign(personCardNumberStyling, styles.sidebar.personCardNumber);

        let personCardNameStyling = {};
        Object.assign(personCardNameStyling, styles.sidebar.personCardName);

        // Recolor if highlight
        if (this.props.highlight) {
            personCardStyling.margin = '12px 8px';
            personCardStyling.backgroundColor = '#427CAC';
            personCardNumberStyling.backgroundColor = '#334E69';
            personCardNumberStyling.color = '#FAFAFA';
            personCardNameStyling.color = '#FFFFFF';
        }

        return (
            <div style={personCardStyling}>

                <div style={personCardNumberStyling}>
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
                    <div style={styles.sidebar.personCardNameAndPointsContainer}>
                        {/* Name */}
                        <div style={personCardNameStyling}>{this.props.name}</div>
                        <br />
                        <span style={styles.sidebar.personCardPoints}>{this.props.points} POINTS</span>
                    </div>
                </div>

                <div style={styles.verticalCenteredContentsRight}>
                    {/* Flag */}
                    <img src={this.props.flagImg} style={styles.sidebar.personCardFlag} />
                </div>
            </div>
        );
    }

}
'use strict';
import * as React from 'react'

import StoreContext from '../storeContext';
import styles from '../styles/styles';

// Images
import Medals4 from '../img/medals/stage-4.png';
import Medals5 from '../img/medals/stage-5.png';
import FlagCanada from '../img/flags/flag-canada.png';

export default class Medals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      level: 0
    }
  }

  componentDidMount() {
    const storeState = this.context.getState();
    this.setState({
      level: storeState.level,
    });

    this.unsubscribe = this.context.subscribe(() => {
       this.setState({
          level: this.context.getState().level,
        });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {
    return (
      <div>
        {this.state.level === 5 ? <img src={Medals5} style={styles.medals}/> : <img src={Medals4} style={styles.medals}/>}
      </div>
    )
  }
}

Medals.contextType = StoreContext;
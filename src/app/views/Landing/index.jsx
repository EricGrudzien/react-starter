// eslint-disable-next-line jsx-a11y/href-no-hash
import React, { Component } from 'react';
import ClassNames from 'classnames';
import Welcome from './Welcome';

const styles = require('./styles.scss');

class Layout extends Component {
  static isBackground() {
    return true;
  }

  constructor() {
    super();
    // eslint-disable-next-line no-console
    console.log(`styles: ${JSON.stringify(styles)}`);
  }

  state = {
  }

  render() {
    const classes = ClassNames(
      styles.container,
      {
        [styles.background]: Layout.isBackground(),
      },
    );

    return (
      <div className={classes}>
        <Welcome />
      </div>
    );
  }
}

export default Layout;

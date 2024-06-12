import React, { Component } from 'react';
import styles from './MyComponent.module.css'; // Import CSS module

class MyComponent extends Component {
  render() {
    return (
      <div className={styles.container}> {/* Apply CSS class */}
        <h2>My Component</h2>
        <p>This is a styled component.</p>
      </div>
    );
  }
}

export default MyComponent;

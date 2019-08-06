import React, { PureComponent } from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

export default class Input extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChangeValue: PropTypes.func,
    onValidate: PropTypes.func
  };

  changeValue = event => {
    const { onChangeValue } = this.props;
    onChangeValue(event.target.value);
  };

  render() {
    const { name, value, onValidate } = this.props;
    return (
      <div className={styles.block}>
        <p className={styles.text}>{name}</p>
        <input
          type="text"
          value={value}
          onChange={this.changeValue}
          className={styles.input}
        />
        <div className={styles.error}>{onValidate(value)}</div>
      </div>
    );
  }
}

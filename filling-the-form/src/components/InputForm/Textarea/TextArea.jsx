import React, { PureComponent } from "react";
import styles from "./TextArea.module.css";
import PropTypes from "prop-types";

export default class TextArea extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChangeValue: PropTypes.func
  };

  handleChange = event => {
    const { onChangeValue } = this.props;
    onChangeValue(event.target.value);
  };

  render() {
    const { name, value } = this.props;
    return (
      <div className={styles.block}>
        <p className={styles.text}>{name}</p>
        <textarea
          className={styles.textarea}
          value={value}
          onChange={this.handleChange}
        />
        {value.length > 0 && <div className={styles.img} />}
      </div>
    );
  }
}

import React, { PureComponent, Fragment } from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

export default class Input extends PureComponent {
  handleChange = event => {
    const { onChangeValue, name } = this.props;
    onChangeValue(event.target.value, name);
  };

  getInputField = () => {
    const { inputType, value, onValidate } = this.props;
    switch (inputType) {
      case "input": {
        const error = onValidate(value);

        return (
          <Fragment>
            <input
              type="text"
              value={value}
              onChange={this.handleChange}
              className={styles.input}
            />
            {error === "no error" ? (
              <div className={styles.img} />
            ) : (
              <p className={styles.error}>{error}</p>
            )}
          </Fragment>
        );
      }
      case "textarea": {
        return (
          <Fragment>
            <textarea
              className={styles.textarea}
              onChange={this.handleChange}
              value={value}
            />
            {value.length > 0 && <div className={styles.img} />}
          </Fragment>
        );
      }
      default:
        return null;
    }
  };

  render() {
    const { name } = this.props;
    return (
      <div className={styles.block}>
        <p className={styles.text}>{name}</p>
        {this.getInputField()}
      </div>
    );
  }
}

Input.propsType = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChangeValue: PropTypes.func,
  onValidate: PropTypes.func,
  inputType: PropTypes.string
};

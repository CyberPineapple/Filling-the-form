import React, { Component } from "react";
import styles from "./InputForm.module.css";
import Input from "./Input/";
import { dataList } from "../../constants/dataForInputComponents";
import PropTypes from "prop-types";

export default class InputForm extends Component {
  render() {
    const { changeValue, nameList, onClearForm } = this.props;
    const storeKeys = Object.keys(nameList);
    const storeValues = Object.values(nameList);
    return (
      <div className={styles.block}>
        {dataList.map((v, index) => (
          <Input
            key={v.name}
            value={storeValues[index]}
            name={storeKeys[index]}
            onChangeValue={changeValue}
            onValidate={v.validate}
            inputType={v.inputType}
          />
        ))}
        <p className={styles.description}>
          Для создания пунктов списка в полях education, experience, skills
          после знака ";" нажмите Enter
        </p>
        <button className={styles.button} onClick={onClearForm}>
          Очистить форму
        </button>
      </div>
    );
  }
}

InputForm.propTypes = {
  onClearForm: PropTypes.func,
  nameList: PropTypes.object,
  changeValue: PropTypes.func
};

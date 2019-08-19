import React from "react";
import styles from "./InputForm.module.css";
import Input from "./Input/";
import PropTypes from "prop-types";

const InputForm = ({ changeValue, inputFieldList, onClearForm }) => {
  return (
    <div className={styles.block}>
      {Object.values(inputFieldList).map(value => (
        <Input
          key={value.title}
          value={value.value}
          name={value.title}
          onChangeValue={changeValue}
          onValidate={value.validate}
          inputType={value.inputType}
        />
      ))}
      <p className={styles.description}>
        Для создания пунктов списка в полях education, experience, skills после
        знака ";" нажмите Enter
      </p>
      <button className={styles.button} onClick={onClearForm}>
        Очистить форму
      </button>
    </div>
  );
};

InputForm.propTypes = {
  onClearForm: PropTypes.func,
  nameList: PropTypes.object,
  changeValue: PropTypes.func
};

export default InputForm;

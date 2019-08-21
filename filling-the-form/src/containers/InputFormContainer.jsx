import React, { Component } from "react";
import { connect } from "react-redux";
import { changeFormFieldAction, clearFormAction } from "../actions/";
import InputForm from "../components/InputForm/";

class InputFormContainer extends Component {
  render() {
    const { inputFieldList, clearForm, changeInputValue } = this.props;
    return (
      <InputForm
        inputFieldList={inputFieldList}
        onClearForm={clearForm}
        onChangeInputValue={changeInputValue}
      />
    );
  }
}

export default connect(
  state => ({
    inputFieldList: state.fields
  }),
  {
    clearForm: clearFormAction,
    changeInputValue: changeFormFieldAction
  }
)(InputFormContainer);

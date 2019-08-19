import React, { Component } from "react";
import { connect } from "react-redux";
import { changeFormFieldAction, clearFormAction } from "../actions/";
import InputForm from "../components/InputForm/";

class InputFormContainer extends Component {
  render() {
    const { inputFieldList, clearForm, changeValue } = this.props;
    return (
      <InputForm
        inputFieldList={inputFieldList}
        onClearForm={clearForm}
        changeValue={changeValue}
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
    changeValue: changeFormFieldAction
  }
)(InputFormContainer);

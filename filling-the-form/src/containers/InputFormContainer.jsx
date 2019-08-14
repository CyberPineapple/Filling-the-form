import React, { Component } from "react";
import { connect } from "react-redux";
import { changeValueAction, clearFormAction } from "../actions/";
import InputForm from "../components/InputForm/";

class InputFormContainer extends Component {
  render() {
    const { nameList, clearForm, changeValue } = this.props;
    return (
      <InputForm
        nameList={nameList}
        onClearForm={clearForm}
        changeValue={changeValue}
      />
    );
  }
}

export default connect(
  state => ({
    nameList: state
  }),
  {
    clearForm: clearFormAction,
    changeValue: changeValueAction
  }
)(InputFormContainer);

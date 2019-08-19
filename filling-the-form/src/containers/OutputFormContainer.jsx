import React, { Component } from "react";
import { connect } from "react-redux";
import OutputForm from "../components/OutputForm/";

class OutputFormContainer extends Component {
  render() {
    return <OutputForm {...this.props} />;
  }
}

export default connect(state => ({
  name: state.fields.name.value,
  surname: state.fields.surname.value,
  telephone: state.fields.telephone.value,
  email: state.fields.email.value,
  summary: state.fields.summary.value,
  education: state.fields.education.value,
  experience: state.fields.experience.value,
  skills: state.fields.skills.value,
  city: state.fields.city.value,
  street: state.fields.street.value,
  home: state.fields.home.value
}))(OutputFormContainer);

import React, { Component } from "react";
import { connect } from "react-redux";
import OutputForm from "../components/OutputForm/";

class OutputFormContainer extends Component {
  render() {
    const {
      firstName,
      secondName,
      telephone,
      email,
      summary,
      education,
      skills,
      experience,
      city,
      street,
      home
    } = this.props;
    return (
      <OutputForm
        firstName={firstName}
        secondName={secondName}
        telephone={telephone}
        email={email}
        summary={summary}
        education={education}
        experience={experience}
        skills={skills}
        city={city}
        street={street}
        home={home}
      />
    );
  }
}

export default connect(
  state => ({
    firstName: state.firstName,
    secondName: state.secondName,
    telephone: state.telephone,
    email: state.email,
    summary: state.summary,
    education: state.education,
    experience: state.experience,
    skills: state.skills,
    city: state.city,
    street: state.street,
    home: state.home
  }),
  null
)(OutputFormContainer);

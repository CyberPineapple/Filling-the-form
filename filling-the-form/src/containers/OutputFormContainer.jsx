import React, { Component } from "react";
import { connect } from "react-redux";
import OutputForm from "../components/OutputForm/";

class OutputFormContainer extends Component {
  render() {
    const {
      name,
      surname,
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
        name={name}
        surname={surname}
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
    name: state.name,
    surname: state.surname,
    telephone: state.telephone,
    email: state.email,
    summary: state.summary,
    education: state.education,
    experience: state.experience,
    skills: state.skills,
    city: state.city,
    street: state.street,
    home: state.home
  })
)(OutputFormContainer);

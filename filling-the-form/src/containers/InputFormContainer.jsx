import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setFirstNameAction,
  setSecondNameAction,
  setTelephoneAction,
  setEducationAction,
  setEmailAction,
  setExperienceAction,
  setCityAction,
  setHomeAction,
  setStreetAction,
  setSummaryAction,
  setSkillsAction,
  clearFormAction
} from "../actions/";
import InputForm from "../components/InputForm/";

class InputFormContainer extends Component {
  render() {
    const {
      setFirstName,
      setSecondName,
      setEmail,
      setTelephone,
      setSummary,
      setEducation,
      setSkills,
      setExperience,
      setCity,
      setStreet,
      setHome,
      city,
      street,
      home,
      firstName,
      secondName,
      email,
      telephone,
      summary,
      education,
      experience,
      skills,
      clearForm
    } = this.props;
    return (
      <InputForm
        setFirstName={setFirstName}
        setSecondName={setSecondName}
        setTelephone={setTelephone}
        setCity={setCity}
        setStreet={setStreet}
        setHome={setHome}
        setSummary={setSummary}
        setEducation={setEducation}
        setExperience={setExperience}
        setSkills={setSkills}
        setEmail={setEmail}
        firstName={firstName}
        secondName={secondName}
        email={email}
        telephone={telephone}
        summary={summary}
        experience={experience}
        education={education}
        skills={skills}
        city={city}
        street={street}
        home={home}
        onClearForm={clearForm}
      />
    );
  }
}

export default connect(
  state => ({
    firstName: state.firstName,
    secondName: state.secondName,
    email: state.email,
    telephone: state.telephone,
    education: state.education,
    summary: state.summary,
    experience: state.experience,
    skills: state.skills,
    city: state.city,
    home: state.home,
    street: state.street
  }),
  {
    setFirstName: setFirstNameAction,
    setSecondName: setSecondNameAction,
    setTelephone: setTelephoneAction,
    setEmail: setEmailAction,
    setCity: setCityAction,
    setStreet: setStreetAction,
    setHome: setHomeAction,
    setSummary: setSummaryAction,
    setEducation: setEducationAction,
    setExperience: setExperienceAction,
    setSkills: setSkillsAction,
    clearForm: clearFormAction
  }
)(InputFormContainer);

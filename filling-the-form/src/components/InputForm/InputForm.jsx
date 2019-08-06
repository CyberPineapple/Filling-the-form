import React, { PureComponent } from "react";
import styles from "./InputForm.module.css";
import Input from "./Input/";
import TextArea from "./Textarea/";
import {
  validateName,
  validateTelephone,
  validateEmail,
  validateNumber
} from "../../constants/validatesFunctions.jsx";

export default class InputForm extends PureComponent {
  handleClick = () => {
    const { onClearForm } = this.props;
    onClearForm();
  };

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
      skills
    } = this.props;
    return (
      <div className={styles.block}>
        <Input
          name="Имя"
          value={firstName}
          onChangeValue={setFirstName}
          onValidate={validateName}
        />
        <Input
          name="Фамилия"
          value={secondName}
          onChangeValue={setSecondName}
          onValidate={validateName}
        />
        <Input
          name="Телефон"
          value={telephone}
          onChangeValue={setTelephone}
          onValidate={validateTelephone}
        />
        <Input
          name="Email"
          value={email}
          onChangeValue={setEmail}
          onValidate={validateEmail}
        />
        <Input
          name="Город"
          value={city}
          onChangeValue={setCity}
          onValidate={validateName}
        />
        <Input
          name="Улица"
          value={street}
          onChangeValue={setStreet}
          onValidate={validateName}
        />
        <Input
          name="Дом"
          value={home}
          onChangeValue={setHome}
          onValidate={validateNumber}
        />
        {/* <InputAdress changeAdress={setAdress} value={adress} /> */}
        <TextArea name="Summary" onChangeValue={setSummary} value={summary} />
        <TextArea
          name="Education"
          onChangeValue={setEducation}
          value={education}
        />
        <TextArea
          name="Experience"
          onChangeValue={setExperience}
          value={experience}
        />
        <TextArea name="Skills" onChangeValue={setSkills} value={skills} />
        <p className={styles.description}>
          Для создания пунктов списка в полях education, experience, skills
          после знака ";" нажмите Enter
        </p>
        <button className={styles.button} onClick={this.handleClick}>
          Очистить форму
        </button>
      </div>
    );
  }
}

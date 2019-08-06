import React, { PureComponent } from "react";
import styles from "./OutputForm.module.css";
import PropTypes from "prop-types";

export default class OutputForm extends PureComponent {
  static propTypes = {
    firstName: PropTypes.string,
    secondName: PropTypes.string,
    telephone: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    street: PropTypes.string,
    home: PropTypes.string,
    summary: PropTypes.string,
    education: PropTypes.string,
    skills: PropTypes.string,
    experience: PropTypes.string
  };

  render() {
    const {
      firstName,
      secondName,
      telephone,
      email,
      city,
      street,
      home,
      summary,
      education,
      skills,
      experience
    } = this.props;

    return (
      <div className={styles.block}>
        <div className={styles.nameBlock}>
          <p className={styles.secondName}>{secondName}</p>
          <p className={styles.firstName}>{firstName}</p>
        </div>
        <div className={styles.contacts}>
          <div className={styles.telephone}>
            {telephone}
            <img
              className={styles.img}
              src="https://c7.uihere.com/files/145/603/671/telephone-call-computer-icons-clip-art-telephone-number-phone-icon-transparent-thumb.jpg"
              alt=""
            />
          </div>
          <div className={styles.email}>
            {email}
            <img
              src="http://www.iconninja.com/files/962/66/523/mail-read-icon.png"
              className={styles.img}
              alt=""
            />
          </div>
          <div className={styles.adress}>
            г. {city}, ул. {street}, {home}
            <img
              src="https://www.shareicon.net/data/128x128/2015/10/28/663456_house_512x512.png"
              alt=""
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.summary}>
          <div className={styles.title}>
            <img
              src="https://png.pngtree.com/svg/20170831/f3f7e2269d.png"
              alt=""
              className={styles.img}
            />
            summary
          </div>
          <p className={styles.text}>{summary}</p>
        </div>
        <div className={styles.education}>
          <div className={styles.title}>
            <img
              src="http://freevector.co/wp-content/uploads/2011/12/2228-graduation-hat2.png"
              alt=""
              className={styles.img}
            />
            education
          </div>
          <ul className={styles.list}>
            {education.split(/;\n/).map(v => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
        <div className={styles.experience}>
          <div className={styles.title}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/worker-and-employee-glyph/64/26_certificate_reward_experience_employee_worker_job_business-512.png"
              alt=""
              className={styles.img}
            />
            experience
          </div>
          <ul className={styles.list}>
            {experience.split(/;\n/).map(v => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
        <div className={styles.skills}>
          <div className={styles.title}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/interface-elements-vii-1/512/Ruler_-_Pen-512.png"
              alt=""
              className={styles.img}
            />
            skills
          </div>
          <ul className={styles.list}>
            {skills.split(/;\n/).map(v => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

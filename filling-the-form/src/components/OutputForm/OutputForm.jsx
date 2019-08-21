import React, { Component } from "react";
import styles from "./OutputForm.module.css";
import PropTypes from "prop-types";
import {
  telephoneImage,
  emailImage,
  summaryImage,
  experienceImage,
  educationImage,
  adressImage,
  skillsImage
} from "../../constants/imagesDescription";

export default class OutputForm extends Component {
  render() {
    const {
      name,
      surname,
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
        <div className={styles.borderBlock}>
          <div className={styles.contactsBlock}>
            <div className={styles.nameBlock}>
              <p className={styles.nameText}>{name}</p>
              <p className={styles.nameText}>{surname}</p>
            </div>
            <div className={styles.contacts}>
              {telephone && (
                <div className={styles.contactsLine}>
                  <p className={styles.contactsText}>{telephone}</p>
                  <img
                    className={styles.contactsImg}
                    src="https://c7.uihere.com/files/145/603/671/telephone-call-computer-icons-clip-art-telephone-number-phone-icon-transparent-thumb.jpg"
                    alt={telephoneImage}
                  />
                </div>
              )}
              {email && (
                <div className={styles.contactsLine}>
                  <p className={styles.contactsText}>{email}</p>
                  <img
                    src="https://1.bp.blogspot.com/-jLiE9ROUpOo/VggArpkNucI/AAAAAAAAAyA/LFgcQhPaDwk/s1600/rt5.png"
                    className={styles.contactsImg}
                    alt={emailImage}
                  />
                </div>
              )}
              {(city || street || home) && (
                <div className={styles.contactsLine}>
                  <p className={styles.contactsText}>
                    {city && `city ${city},`} {street && `street ${street},`}{" "}
                    {home}
                  </p>
                  <img
                    src="https://www.shareicon.net/data/128x128/2015/10/28/663456_house_512x512.png"
                    alt={adressImage}
                    className={styles.contactsImg}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={styles.description}>
            {summary && (
              <div className={styles.textBlock}>
                <div className={styles.title}>
                  <img
                    src="https://png.pngtree.com/svg/20170831/f3f7e2269d.png"
                    alt={summaryImage}
                    className={styles.img}
                  />
                  summary
                </div>
                <p className={styles.text}>{summary}</p>
              </div>
            )}
            {education && (
              <div className={styles.textBlock}>
                <div className={styles.title}>
                  <img
                    src="http://freevector.co/wp-content/uploads/2011/12/2228-graduation-hat2.png"
                    alt={educationImage}
                    className={styles.img}
                  />
                  education
                </div>
                <ul className={styles.list}>
                  {education.split(/;\n/).map(value => (
                    <li key={value} className={styles.text}>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {experience && (
              <div className={styles.textBlock}>
                <div className={styles.title}>
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/worker-and-employee-glyph/64/26_certificate_reward_experience_employee_worker_job_business-512.png"
                    alt={experienceImage}
                    className={styles.img}
                  />
                  experience
                </div>
                <ul className={styles.list}>
                  {experience.split(/;\n/).map(value => (
                    <li key={value} className={styles.text}>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {skills && (
              <div className={styles.textBlock}>
                <div className={styles.title}>
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/interface-elements-vii-1/512/Ruler_-_Pen-512.png"
                    alt={skillsImage}
                    className={styles.img}
                  />
                  skills
                </div>
                <ul className={styles.list}>
                  {skills.split(/;\n/).map(value => (
                    <li key={value} className={styles.text}>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

OutputForm.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
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

import React from "react";
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
} from "../../constants/srcImages";

const OutputForm = ({
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
}) => {
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
                  src={telephoneImage}
                  alt="img"
                />
              </div>
            )}
            {email && (
              <div className={styles.contactsLine}>
                <p className={styles.contactsText}>{email}</p>
                <img
                  src={emailImage}
                  className={styles.contactsImg}
                  alt="img"
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
                  src={adressImage}
                  alt="img"
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
                <img src={summaryImage} alt="img" className={styles.img} />
                summary
              </div>
              <p className={styles.text}>{summary}</p>
            </div>
          )}
          {education && (
            <div className={styles.textBlock}>
              <div className={styles.title}>
                <img src={educationImage} alt="img" className={styles.img} />
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
                <img src={experienceImage} alt="img" className={styles.img} />
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
                <img src={skillsImage} alt="img" className={styles.img} />
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
};

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

export default OutputForm;

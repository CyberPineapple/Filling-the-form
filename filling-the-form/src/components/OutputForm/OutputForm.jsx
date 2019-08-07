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
        <div className={styles.borderBlock}>
          <div className={styles.nameBlock}>
            <p className={styles.secondName}>{secondName}</p>
            <p className={styles.firstName}>{firstName}</p>
          </div>
          <div className={styles.contacts}>
            {telephone && (
              <div className={styles.contactsText}>
                {telephone}
                <img
                  className={styles.contactsImg}
                  src="https://c7.uihere.com/files/145/603/671/telephone-call-computer-icons-clip-art-telephone-number-phone-icon-transparent-thumb.jpg"
                  alt=""
                />
              </div>
            )}
            {email && (
              <div className={styles.contactsText}>
                {email}
                <img
                  src="https://1.bp.blogspot.com/-jLiE9ROUpOo/VggArpkNucI/AAAAAAAAAyA/LFgcQhPaDwk/s1600/rt5.png"
                  className={styles.contactsImg}
                  alt=""
                />
              </div>
            )}
            {(city || street || home) && (
              <div className={styles.contactsText}>
                {city && `г. ${city}`} {street && `ул. ${street}`} {home}
                <img
                  src="https://www.shareicon.net/data/128x128/2015/10/28/663456_house_512x512.png"
                  alt=""
                  className={styles.contactsImg}
                />
              </div>
            )}
          </div>
          <div className={styles.description}>
            {summary && (
              <div className={styles.textBlock}>
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
            )}
            {education && (
              <div className={styles.textBlock}>
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
                    <li key={v} className={styles.text}>{v}</li>
                  ))}
                </ul>
              </div>
            )}
            {experience && (
              <div className={styles.textBlock}>
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
                    <li key={v} className={styles.text}>{v}</li>
                  ))}
                </ul>
              </div>
            )}
            {skills && (
              <div className={styles.textBlock}>
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
                    <li key={v} className={styles.text}>{v}</li>
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

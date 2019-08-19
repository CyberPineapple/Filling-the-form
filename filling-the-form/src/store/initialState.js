import {
  validateEmail,
  validateName,
  validateNumber,
  validateTelephone
} from "../utils/validatesFunctions.js";

export const initialState = {
  fields: {
    name: {
      title: "name",
      value: localStorage.getItem("name") || "Alexander",
      validate: validateName,
      inputType: "input"
    },
    surname: {
      title: "surname",
      value: localStorage.getItem("surname") || "Smirnov",
      validate: validateName,
      inputType: "input"
    },
    telephone: {
      title: "telephone",
      value: localStorage.getItem("telephone") || "+79647438901",
      validate: validateTelephone,
      inputType: "input"
    },
    email: {
      title: "email",
      value: localStorage.getItem("email") || "a.smirnov@mail.ru",
      validate: validateEmail,
      inputType: "input"
    },
    city: {
      title: "city",
      value: localStorage.getItem("city") || "Saint-Petersburg",
      validate: validateName,
      inputType: "input"
    },
    street: {
      title: "street",
      value: localStorage.getItem("street") || "Abrosimova",
      validate: validateName,
      inputType: "input"
    },
    home: {
      title: "home",
      value: localStorage.getItem("home") || "35",
      validate: validateNumber,
      inputType: "input"
    },
    summary: {
      title: "summary",
      value:
        localStorage.getItem("summary") ||
        "Date of birth: 01.04. 1981 Ready for business trips. Ready to move to Moscow. Objective: Head of Sales Department. Achievements: created sales department from scratch, developed and implemented the company's sales technology of the technically complicated equipment, under my supervision department (5 persons) regularly performed the plan of attracting new customers and sales, led the company 7 key customer (totally up to 50% of orders), developed and implemented the company's sales technology of the technically complicated equipment.",
      inputType: "textarea"
    },

    education: {
      title: "education",
      value:
        localStorage.getItem("education") ||
        `2003 Saint Petersburg State University of Economics and Finance, St. Petersburg Department of "Economics of Labor and Personnel Management" Specialty: "Personnel Management" Qualification: "Manager" (Graduated with honors);
      2003-2014 Visiting numerous seminars and training sessions for sales and customer service ("Cold calls", "Sales method SPIN», «Active sales", "Sales of services", "Tough negotiations", "Work with objections," etc. )
      `,
      inputType: "textarea"
    },

    experience: {
      title: "experience",
      value:
        localStorage.getItem("experience") ||
        `10. 2008-07. 2014 Head of Sales Co.Ltd «ННН group» (www.nnn-grup.com), St. Petersburg
      `,
      inputType: "textarea"
    },

    skills: {
      title: "skills",
      value:
        localStorage.getItem("skills") ||
        `Active sales, expansion of client base;
  Working with key clients, work with objections;
  Management sales team.`,
      inputType: "textarea"
    }
  }
};

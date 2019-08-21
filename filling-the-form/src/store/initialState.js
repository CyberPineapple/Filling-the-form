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
      value: localStorage.getItem("name") || "",
      validate: validateName,
      inputType: "input"
    },
    surname: {
      title: "surname",
      value: localStorage.getItem("surname") || "",
      validate: validateName,
      inputType: "input"
    },
    telephone: {
      title: "telephone",
      value: localStorage.getItem("telephone") || "",
      validate: validateTelephone,
      inputType: "input"
    },
    email: {
      title: "email",
      value: localStorage.getItem("email") || "",
      validate: validateEmail,
      inputType: "input"
    },
    city: {
      title: "city",
      value: localStorage.getItem("city") || "",
      validate: validateName,
      inputType: "input"
    },
    street: {
      title: "street",
      value: localStorage.getItem("street") || "",
      validate: validateName,
      inputType: "input"
    },
    home: {
      title: "home",
      value: localStorage.getItem("home") || "",
      validate: validateNumber,
      inputType: "input"
    },
    summary: {
      title: "summary",
      value: localStorage.getItem("summary") || "",
      inputType: "textarea"
    },

    education: {
      title: "education",
      value: localStorage.getItem("education") || "",
      inputType: "textarea"
    },

    experience: {
      title: "experience",
      value: localStorage.getItem("experience") || "",
      inputType: "textarea"
    },

    skills: {
      title: "skills",
      value: localStorage.getItem("skills") || "",
      inputType: "textarea"
    }
  }
};

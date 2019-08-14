import {
  validateName,
  validateTelephone,
  validateEmail,
  validateNumber
} from "../utils/validatesFunctions.js";

export const dataList = [
  {
    name: "name",
    validate: validateName,
    inputType: "input"
  },
  {
    name: "surname",
    inputType: "input",
    validate: validateName
  },
  {
    name: "telephone",
    validate: validateTelephone,
    inputType: "input"
  },
  {
    name: "email",
    validate: validateEmail,
    inputType: "input"
  },
  {
    name: "city",
    validate: validateName,
    inputType: "input"
  },
  {
    name: "street",
    validate: validateName,
    inputType: "input"
  },
  {
    name: "home",
    validate: validateNumber,
    inputType: "input"
  },
  {
    name: "summary",
    inputType: "textarea"
  },
  {
    name: "education",
    inputType: "textarea"
  },
  {
    name: "experience",
    inputType: "textarea"
  },
  {
    name: "skills",
    inputType: "textarea"
  }
];

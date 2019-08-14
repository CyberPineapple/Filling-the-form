export const validateName = value => {
  if (value.length > 0) {
    if (/\d/.test(value)) {
      return "Поле не должно содержать цифры";
    } else if (/\s/.test(value)) {
      return "Поле не должно содержать пробелы";
    } else {
      return true;
    }
  } else {
    return null;
  }
};

export const validateTelephone = value => {
  if (value.length > 0) {
    if (/^\+79/.test(value) || /^89/.test(value)) {
      if (/[^\d+]/.test(value)) {
        return "Поле должно содержать только числа";
      } else if (/\+79\d{8}/.test(value) || /89\d{8}/.test(value)) {
        return true;
      } else {
        return "Некорректная длина";
      }
    } else {
      return "Неверный формат номера, введите номер в формате +79**********, либо 89**********";
    }
  } else {
    return null;
  }
};

export const validateEmail = value => {
  if (value.length > 0) {
    if (/\s/.test(value)) {
      return "Поле не должно содержать пробелы";
    } else if (/\S+@\S+\.\S+/.test(value)) {
      return true;
    } else {
      return "Неправильный формат, введите в формате ***@***.***";
    }
  } else {
    return null;
  }
};

export const validateNumber = value => {
  if (value.length > 0) {
    if (/\D/.test(value)) {
      return "Поле должно содержать только числа";
    } else {
      return true;
    }
  } else {
    return null;
  }
};

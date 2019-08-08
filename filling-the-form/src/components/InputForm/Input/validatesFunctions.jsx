import React from "react";
import styles from "./Input.module.css";

export const validateName = value => {
  if (value.length > 0) {
    if (/\d/.test(value)) {
      return <p className={styles.error}>Поле не должно содержать цифры</p>;
    } else if (/\s/.test(value)) {
      return <p className={styles.error}>Поле не должно содержать пробелы</p>;
    } else {
      return <div className={styles.img} />;
    }
  } else {
    return null;
  }
};

export const validateTelephone = value => {
  if (value.length > 0) {
    if (/^\+79/.test(value) || /^89/.test(value)) {
      if (/[^\d+]/.test(value)) {
        return (
          <p className={styles.error}>Поле должно содержать только числа</p>
        );
      } else if (/\+79\d{8}/.test(value) || /89\d{8}/.test(value)) {
        return <div className={styles.img} />;
      } else {
        return <p className={styles.error}>Некорректная длина</p>;
      }
    } else {
      return (
        <p className={styles.error}>
          Неверный формат номера, введите номер в формате +79**********, либо
          89**********
        </p>
      );
    }
  } else {
    return null;
  }
};

export const validateEmail = value => {
  if (value.length > 0) {
    if (/\s/.test(value)) {
      return <p className={styles.error}>Поле не должно содержать пробелы</p>;
    } else if (/\S+@\S+\.\S+/.test(value)) {
      return <div className={styles.img} />;
    } else {
      return (
        <p className={styles.error}>
          Неправильный формат, введите в формате ***@***.***
        </p>
      );
    }
  } else {
    return null;
  }
};

export const validateNumber = value => {
  if (value.length > 0) {
    if (/\D/.test(value)) {
      return <p className={styles.error}>Поле должно содержать только числа</p>;
    } else {
      return <div className={styles.img} />;
    }
  } else {
    return null;
  }
};

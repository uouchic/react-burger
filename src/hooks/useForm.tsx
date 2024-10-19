import React, {ChangeEvent, SyntheticEvent} from "react";
import { useState } from 'react';

export function useForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    token: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues, useState };
}

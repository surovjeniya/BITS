import "./AuthForm.scss";
import { useState, useEffect } from "react";
import { TextField, Button, Alert } from "@mui/material/";

export const AuthForm = () => {
  const [form, setForm] = useState({
    phone: "",
    code: "",
  });
  const [error, setError] = useState(null);
  const [valid, setValid] = useState(false);
  const [step, setStep] = useState(1);

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    const phoneRegExp =
      /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/;
    setValid(phoneRegExp.test(form.phone));
  };

  const nextStep = () => {
    step <= 2 ? setStep(2) : setStep(step + 1);
  };

  const prevStep = () => {
    step >= 1 ? setStep(1) : setStep(step - 1);
  };

  return (
    <div className="auth">
      <h4 className="auth__title">Войти</h4>
      <form action="" className="auth__form">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
      <div className="auth__btns">
        <Button variant="outlined" disabled={step === 1}>
          Назад
        </Button>
        {step === 2 && <Button variant="outlined">Вперёд</Button>}
      </div>
      <div>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </div>
    </div>
  );
};

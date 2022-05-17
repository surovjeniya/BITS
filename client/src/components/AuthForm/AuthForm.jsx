import "./AuthForm.scss";
import { useState, useEffect } from "react";
import { TextField, Button, Alert } from "@mui/material/";
import authService from "../../services/authService";
import { signIn } from "../../redux/actions/signIn";
import { useDispatch } from "react-redux";

export const AuthForm = () => {
  const [form, setForm] = useState({
    phone: "",
    code: "",
  });
  const [error, setError] = useState(null);
  const [valid, setValid] = useState(false);
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const phoneRegExp =
      /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/;
    setValid(phoneRegExp.test(form.phone));
  }, [form, valid]);

  const nextStep = async () => {
    step <= 2 ? setStep(2) : setStep(step + 1);
    const res = await authService.stepOne(form.phone);
    if (!res.hasOwnProperty("code")) {
      setError(res);
    } else {
      setError(null);
    }
  };

  const prevStep = () => {
    step >= 1 ? setStep(1) : setStep(step - 1);
  };

  const sendCode = async () => {
    const res = await authService.stepTwo(form.code);
    if (!res.hasOwnProperty("tokens")) {
      setError(res.message);
    } else {
      dispatch(signIn(res));
      setError(null);
    }
  };

  return (
    <div className="auth">
      <h4 className="auth__title">Войти</h4>
      <form action="" className="auth__form">
        {step === 1 && (
          <TextField
            id="phone"
            label="Введите номер телефона"
            variant="outlined"
            required
            placeholder="375-**-***-**-**"
            value={form.phone}
            onChange={onChangeHandler}
            name="phone"
          />
        )}
        {step === 2 && (
          <TextField
            id="code"
            label="Введите код из смс"
            variant="outlined"
            required
            placeholder="XX-XX"
            value={form.code}
            onChange={onChangeHandler}
            name="code"
          />
        )}
      </form>
      <div className="auth__btns">
        <Button variant="outlined" disabled={step === 1} onClick={prevStep}>
          Назад
        </Button>
        {step !== 2 && (
          <Button variant="outlined" disabled={!valid} onClick={nextStep}>
            Вперёд
          </Button>
        )}
        {step === 2 && (
          <Button
            variant="outlined"
            disabled={form.code.length !== 6}
            onClick={sendCode}
          >
            Отправиь код
          </Button>
        )}
      </div>
      <div>{error && <Alert severity="error">{error}</Alert>}</div>
    </div>
  );
};

import { useState, useEffect } from "react";

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
      <form action="" className="auth-form">
        <input type="text" />
      </form>
    </div>
  );
};

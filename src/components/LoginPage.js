import { useContext, useState } from "react";
import { login } from "./auth/dataService";
import AuthContext from "./auth/context";
import { useNavigate, useLocation } from "react-router";
import storage from "../utils/storage";
import "./LoginPage.css";

const LoginPage = () => {
  const credentials = () => {
    if (storage.get("credentials")) {
      const { email, password } = storage.get("credentials");
      return { email: email, password: password };
    }
    return { email: "", password: "" };
  };
  const [inputValues, setInputValues] = useState(credentials);
  const [checked, setChecked] = useState(false);
  const { handleLoginState } = useContext(AuthContext);

  const handleInputChange = (event) => {
    setInputValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const accessToken = await login(inputValues);
      handleLoginState(true);
      if (checked) {
        storage.set("auth_token", accessToken);
      }
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="login-container">
        <h2 className="login_h2">Logeate Aqui </h2>
        <form onSubmit={handleSubmit} class="form-login">
          <label for="login-input-user" class="login__label">
            Email
          </label>
          <input
            autoFocus
            id="login-input-user"
            class="login__input"
            placeholder="Email"
            type="email"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
          <label for="login-input-password" class="login__label">
            Password
          </label>
          <input
            id="login-input-password"
            class="login__input"
            placeholder="Password"
            type="password"
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
          />
          <br />
          <label for="login-sign-up" class="login__label--checkbox">
            <input
              id="login-sign-up"
              class="login__input--checkbox"
              type="checkbox"
              name="saveCredentials"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            Mantener la session iniciada
          </label>
          <br />
          <button class="login__submit" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;

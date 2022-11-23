import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Contact.css";

export const Form = () => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({
    userName: "",
    email: "",
    telefono: "",
  });

  const initialState = {
    userName: "",
    email: "",
    telefono: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };
  let regexName = new RegExp(/^([a-zA-Z\s]{5,25})$/);
  let regexEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  useEffect(() => {
    if (!regexName.test(data.userName) || !data.userName === " ") {
      setMessage("el nombre debe ser con un formato correcto");
      setBtnDisabled(true);
    } else if (!regexEmail.test(data.email) || !data.email === " ") {
      setMessage("El Email debe ser con un formato correcto");
      setBtnDisabled(true);
    } else if (data.telefono.length < 9) {
      setMessage("El Nº de telefono debe tener al menos 9 numeros");
      setBtnDisabled(true);
    } else {
      setMessage(null);

      setBtnDisabled(false);
    }
    //eslint-disable-next-line
  }, [data]);
  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Sending data..." + data.userName + " " + data.email + " " + data.telefono
    );
    localStorage.setItem("Datos Formulario", JSON.stringify(data));

    clearState();
    setTimeout(() => {
      navigate("/");
    }, 3000);
    setVisible(false);
  };

  return (
    <>
      <div className="form-titulo">Completa el Formulario Che</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={data.userName}
            onChange={handleInputChange}
            name="userName"
          />
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={handleInputChange}
            name="email"
          />
          <input
            type="text"
            placeholder="Telefono"
            value={data.telefono}
            onChange={handleInputChange}
            name="telefono"
          />
        <button className="button" type="submit" disabled={btnDisabled}>
            Enviar
          </button>
        </form>
      </div>
      <p className="form-mensaje">{visible ? message : "Redirecting to Home..."}</p>
    </>
  );
};

export default Form;

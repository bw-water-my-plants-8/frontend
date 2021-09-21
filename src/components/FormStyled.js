import styled from "styled-components";

const FormStyled = styled.div`
  background-color: #ffffff;
  width: 30%;
  height: 60%;
  margin: 7%;
  margin-top: 11%;
  border-radius: 5%;
  box-shadow: 0 0 7px #000;
  font-family: "Gideon Roman", cursive;
  h1 {
    padding-top: 22%;
    text-align: center;
    color: #00416a;
    font-weight: bold;
    font-size: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding-top: 40px;
    //
  }
  .username,
  .password,
  .phone,
  .name {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: "Gideon Roman", cursive;
  }
  .username:focus,
  .password:focus {
    border: 2px solid rgba(0, 0, 0, 0.18);
  }
  button {
    margin: auto;
  }
  .signIn,
  .newAcct {
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    background: #3ca55c;
    background: linear-gradient(to left, #00416a, #e4e5e6);
    border: 0;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: "Gideon Roman", cursive;
    font-size: 1rem;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  }
  .signUp {
    margin-top: 35px;
  }
  a {
    text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
    color: #3b8d99;

    text-decoration: none;
  }
  .forgot,
  .terms {
    text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  }
  .warning {
    color: red;
    margin: 0;
    min-height: 1rem;
  }
`;

export default FormStyled;

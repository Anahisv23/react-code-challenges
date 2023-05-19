import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      email &&
      email.includes("@") &&
      password.length >= 8 &&
      password === passwordConfirm
    ) {
      setMessage("Success! User created!");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
    } else if (
      !email &&
      !password &&
      !passwordConfirm
    ) {
      setMessage("One or more input fields are invalid");
    } else if (password.length < 8) {
      setMessage("Password must be 8 characters or more");
    } else if (password !== passwordConfirm) {
      setMessage("Password confirm does not match password");
    } else if (!email.includes("@")) {
      setMessage("Email must contain @");
    } else if (!email) {
      setMessage("Must include email");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)
          // {
          //   console.log("LENGTH", e.target.value);
          // }
          // if (e.target.value.length === 0 && !e.target.value.includes("@")) {
          //   setMessage("Must include email");
          // } else if (!e.target.value.includes("@")) {
          //   setMessage("Email must contain @");
          // } else if (e.target.value.includes("@") &&  e.target.value.includes("com")){
          //   setMessage("Email set");
          //   setEmail(e.target.value);
          // }
        }
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <h4>{message}</h4>
      <input type="submit" value="Submit"/>
    </form>
  );
}

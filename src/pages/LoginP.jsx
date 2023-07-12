import "./LoginP.css"

const LoginP = () => {
  const login = () => {
    localStorage.setItem("isAuth", "1");
    window.location = "/";
  };
  return (
    <div className="login-box">
    <input type="text" name="username" id="username" placeholder="username" />
    <input type="password" name="password" id="password" placeholder="password" />
      <button onClick={login}>Register</button>
    </div>
  );
};

export default LoginP;

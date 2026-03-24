import axios from "axios";

function Login() {

  const login = () => {
    axios.post("http://localhost:8080/auth/login", {
      username: "admin",
      password: "password"
    })
    .then(res => {
      alert("Login Success");
      window.location.href = "/dashboard";
    })
    .catch(() => {
      alert("Login Failed");
    });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
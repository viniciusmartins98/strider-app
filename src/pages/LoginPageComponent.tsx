import { useNavigate } from "react-router";
import { useAuthContext } from "../contexts/authContext";

export default function LoginPageComponent() {
  const authContext = useAuthContext();
  const navigate = useNavigate();

  async function signIn() {
    await authContext.login();
    navigate({ pathname: '/' })
  }

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={signIn}>Sign In</button>
    </>
  )
}

import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/authContext";
import { Alert, Button, Form } from "react-bootstrap";
import "./styles.scss";
import { useState } from "react";

export default function LoginPageComponent() {
  const authContext = useAuthContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function signIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (await authContext.login({ username, password })) {
      navigate({ pathname: "/" });
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-panel">
        <div className="auth-panel-header">
          <h1>Welcome to Petvisor!</h1>
        </div>
        <Form onSubmit={(e) => signIn(e)}>
          <Form.Group className="mb-2">
            <Form.Control
              required
              size="lg"
              className="required"
              type="email"
              placeholder="E-mail"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              required
              size="lg"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {authContext.errorMessage && <Alert variant="warning">{authContext.errorMessage}</Alert>}
          <Button type="submit" className="fullwidth">
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
}

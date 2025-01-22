import { FormGroup, FormLabel } from "react-bootstrap";
import {Container ,Content , StyledFormGroup, TitleForm } from "./style";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";

const LoginAdmin = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const { signIn, signed, loading } = useContext(AuthContext)

  if (!signIn) {
    console.error("AuthContext não foi inicializado corretamente");
  }

  useEffect(() => {
    if (signed) {
      console.log("Usuário logado");
    }
  }, [signed]);
  

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log("Sign-in data:", data);
    await signIn(data);
  };

  return (
    <Container>
      <Content>
        <StyledFormGroup onSubmit={handleSignIn}>
          <TitleForm>Login</TitleForm>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <input
              type="email"
              className="form-control"
              placeholder="Digite seu email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Senha</FormLabel>
            <input
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormGroup>
          <button className="btn-login" type="submit">Entrar</button>
        </StyledFormGroup>
      </Content>
    </Container>
  );
};

export default LoginAdmin;

import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};

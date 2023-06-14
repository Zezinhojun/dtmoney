import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps{
  onOpenNemTransactionModal : () => void
  }

export const Header = ({onOpenNemTransactionModal}: HeaderProps) => {
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNemTransactionModal}>
          Nova transação
        </button>
        
      </Content>
    </Container>
  );
};

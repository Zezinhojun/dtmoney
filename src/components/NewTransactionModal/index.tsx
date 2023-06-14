import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { FormEvent, useState, useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const { createTransaction } = useContext(TransactionContext);

  const [title, setTitle] = useState("");
  const [amount, setAmout] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmout(0);
    setCategory("deposity");
    setType("");

    onRequestClose();
  }

  return (
    <div>
      <Modal
        overlayClassName={"react-modal-overlay"}
        className={"react-modal-content"}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <button
          className="react-modal-close"
          onClick={onRequestClose}
          type="button"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>

          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Título"
          />
          <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(event) => setAmout(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              activeColor="green"
              onClick={() => {
                setType("deposit");
              }}
              isActive={type === "deposit"}
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              activeColor="red"
              onClick={() => {
                setType("withdraw");
              }}
              isActive={type === "withdraw"}
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </div>
  );
};

export default NewTransactionModal;

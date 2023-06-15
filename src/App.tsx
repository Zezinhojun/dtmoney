import { TransactionProvider } from "./hooks/useTransactions";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import NewTransactionModal from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

import { useState } from "react";

function App() {
  const [isNewModalTransactionOpen, setIsNewModalTransactionOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewModalTransactionOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewModalTransactionOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNemTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewModalTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;

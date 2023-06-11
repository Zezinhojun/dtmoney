import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

const TransactionsTable = () => {
  useEffect(() => {
    api.get("transactions")
    .then((response) => console.log(response.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$2.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">-R$1.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;

import { api } from "../../services/api";
import { Container } from "./styles";
import { useEffect } from "react"

export function SalesReport() {

  useEffect(() => {
    api
    .get('/sales', { withCredentials: true})
    .then((response) => console.log(response.data))
  }, []);

  return (
    <Container>
      <h1>Relatório de Vendas</h1>
    </Container>

  )
}
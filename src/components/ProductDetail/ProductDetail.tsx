import { Spacer } from "@chakra-ui/react";
import "./product-detail.css";

export function ProductDetail() {
  return (
    <div className="product-details">
      <h3>Assinatura mensal</h3>
      <Spacer height="4" />
      <p>Você irá pagar</p>
      <span>R$ 500,00</span>
      <Spacer height="4" />
      <p>
        Regras: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dignissimos suscipit nihil, iusto illo saepe dolorum deserunt officia
        laudantium veritatis.
      </p>
    </div>
  );
}

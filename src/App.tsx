import "./App.css";
import { Spacer } from "@chakra-ui/react";
import { Form } from "./components/Form/Form";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="container">
      <Form />

      <Spacer width="6" maxWidth="6" />

      <ProductDetail />
    </div>
  );
}

export default App;

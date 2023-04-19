import "./App.css";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons"
import { DivTeste2 } from "./Style";
import { useState , useEffect} from "react";

function App() {

  const [contador, setContador] = useState(0);
  const [vetor, setVetor] = useState([]);
  const [objeto, setObjeto] = useState({})

  useEffect(() => {
    alert("A variável contador foi alterada para " + contador)
  }, [contador])

  return (
    <div>
      <div className="div-teste">
        <button> botao 1 </button>
        <button> botao 2 </button>
        <button> botao 3 </button>
      </div>
      <input>
      </input>
      <div className="div-botao">
        <button
          className="botao-teste"
          onClick={() => setContador(contador + 1)}
        >
          {contador}
        </button>
      </div>
      <div>
        <Button type="primary" size="large" shape="round" icon={<DownloadOutlined />} className="botao-antd">
          Baixar arquivo
        </Button>
      </div>
      <DivTeste2>
        OLÁ, ESSE É O STYLED
      </DivTeste2>
    </div>

  )
}

export default App


import { FiSearch } from "react-icons/fi";
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title"> Buscador de Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..."/>

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      <main className="main">
<h2>CEP : 6445455</h2>
<span>Rua: manuel leao rego</span>
<span>Bairro: xuparina</span>




</main>

    </div>
  );
}

export default App;


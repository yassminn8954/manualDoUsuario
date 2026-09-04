
import "./App.css";
import { etapas } from "./components/etapas";
import EtapaSecao from "./components/EtapaSecao";

export default function App() {
  return (
    <div>
      <header className="topo">
        <h1>Manual de Deploy</h1>
        <p>Do código local até o servidor em produção</p>
      </header>

      <nav className="indice">
        <ul>
          {etapas.map((etapa) => (
            <li key={etapa.id}>
              <a href={`#${etapa.id}`}>
                {etapa.numero}. {etapa.rotulo}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {etapas.map((etapa) => (
          <EtapaSecao key={etapa.id} etapa={etapa} />
        ))}
      </main>

      <footer className="rodape">
        <p>Manual de referência interno.</p>
      </footer>
    </div>
  );
}
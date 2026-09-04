import type { Etapa } from "../types/Types";

interface Props {
  etapa: Etapa;
}

export default function EtapaSecao({ etapa }: Props) {
  return (
    <section id={etapa.id} className="etapa">
      <h2>
        {etapa.numero}. {etapa.titulo}
      </h2>
      {etapa.blocos.map((bloco, i) =>
        bloco.tipo === "texto" ? (
          <p key={i}>{bloco.conteudo}</p>
        ) : (
          <pre key={i}>
            <code>{bloco.conteudo}</code>
          </pre>
        )
      )}
    </section>
  );
}
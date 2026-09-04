import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EtapaSecao from "./EtapaSecao";
import { Etapa } from "../types/Types";

const etapaExemplo: Etapa = {
  id: "exemplo",
  numero: 1,
  rotulo: "Exemplo",
  titulo: "Etapa de exemplo",
  blocos: [
    { tipo: "texto", conteudo: "Um parágrafo explicativo." },
    { tipo: "codigo", conteudo: "echo 'olá'" },wvw
  ],
};

describe("EtapaSecao", () => {
  it("renderiza o número e o título dentro de um h2", () => {
    render(<EtapaSecao etapa={etapaExemplo} />);
    expect(
      screen.getByRole("heading", { name: "1. Etapa de exemplo" })
    ).toBeInTheDocument();
  });

  it("usa o id da etapa como id da section (âncora do índice)", () => {
    const { container } = render(<EtapaSecao etapa={etapaExemplo} />);
    expect(container.querySelector("section#exemplo")).toBeInTheDocument();
  });

  it("renderiza blocos de texto como parágrafos", () => {
    render(<EtapaSecao etapa={etapaExemplo} />);
    expect(screen.getByText("Um parágrafo explicativo.")).toBeInTheDocument();
  });

  it("renderiza blocos de código dentro de pre > code", () => {
    const { container } = render(<EtapaSecao etapa={etapaExemplo} />);
    const bloco = container.querySelector("pre > code");
    expect(bloco).toHaveTextContent("echo 'olá'");
  });

  it("renderiza os blocos na mesma ordem em que aparecem nos dados", () => {
    const { container } = render(<EtapaSecao etapa={etapaExemplo} />);
    const filhos = Array.from(container.querySelector("section")!.children);
    expect(filhos[1].tagName).toBe("P");
    expect(filhos[2].tagName).toBe("PRE");
  });
});
export interface Etapa {
  id: string;
  numero: number;
  rotulo: string;
  titulo: string;
  blocos: Bloco[];
}

export type Bloco =
  | { tipo: "texto"; conteudo: string }
  | { tipo: "codigo"; conteudo: string };
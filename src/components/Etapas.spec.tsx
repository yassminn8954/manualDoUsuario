import { describe, it, expect } from "vitest";
import { etapas } from "./etapas";

describe("etapas (dados)", () => {
    it("contém exatamente as 4 etapas esperadas, na ordem certa", () => {
        expect(etapas).toHaveLength(4);
        expect(etapas.map((e) => e.id)).toEqual([
            "docker",
            "github",
            "actions",
            "servidor",
        ]);
    });

    it("cada etapa tem número sequencial, rótulo, título e ao menos um bloco", () => {
        etapas.forEach((etapa, index) => {
            expect(etapa.numero).toBe(index + 1);
            expect(etapa.rotulo.length).toBeGreaterThan(0);
            expect(etapa.titulo.length).toBeGreaterThan(0);
            expect(etapa.blocos.length).toBeGreaterThan(0);
        });
    });

    it("todo bloco é do tipo 'texto' ou 'codigo' e tem conteúdo não vazio", () => {
        etapas.forEach((etapa) => {
            etapa.blocos.forEach((bloco) => {
                expect(["texto", "codigo"]).toContain(bloco.tipo);
                expect(bloco.conteudo.trim().length).toBeGreaterThan(0);
            });
        });
    });
});
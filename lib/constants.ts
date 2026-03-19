export const PAISES = [
  "Brasil",
  "Argentina",
  "Uruguay",
  "Chile",
  "Colombia",
  "USA",
  "UE",
] as const;

export type Pais = (typeof PAISES)[number];

// Tipos de usuário selecionáveis no cadastro (admin não é escolha, usado internamente)
export const TIPOS_USUARIO = [
  { value: "estudante" },
  { value: "medico" },
  { value: "professor" },
  { value: "farmaceutico" },
  { value: "corporacao" },
  { value: "governo" },
] as const;

export type TipoUsuarioValue = (typeof TIPOS_USUARIO)[number]["value"];

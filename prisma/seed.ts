import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

const classesData: Prisma.ClassesCreateInput[] = [
  {
    name: "Feiticeiro",
    description:
      "O feiticeiro conjura magia por talento inato, geralmente. Diferente do mago, ele não estuda magia, a magia simplesmente flui através dele. É uma classe poderosa, porém frágil fisicamente.",
    hit_die: 6,
    pericias:
      "Arcanismo, Enganação, Intimidação, Intuição, Persuasão e Religião",
    base_attributes: "Carisma e Constituição",
    base_attributes_code: ["CAR", "CON"],
  },
  {
    name: "Guerreiro",
    description:
      "O guerreiro é o especialista em combate físico. Versátil, pode usar qualquer arma ou armadura e se adaptar a vários estilos: tanque, duelista, arqueiro ou líder tático. É simples de aprender e muito eficiente.",
    hit_die: 10,
    pericias:
      "Acrobacia, Adestrar, Animais, Atletismo, História, Intuição, Intimidação, Percepção, Sobrevivência",
    base_attributes: "Força e Constituição",
    base_attributes_code: ["FOR", "CON"],
  },
  {
    name: "Ladino",
    description:
      "O ladino é um especialista em furtividade, agilidade e precisão. Usa o ambiente a seu favor e causa grande dano com Ataque Furtivo quando pega o inimigo desprevenido ou distraído.",
    hit_die: 8,
    pericias:
      "Acrobacia, Atletismo, Atuação, Enganação, Furtividade, Intimidação, Intuição, Investigação, Percepção, Persuasão, Prestidigitação",
    base_attributes: "Destreza e Inteligência",
    base_attributes_code: ["DES", "INT"],
  },
];

const attributesData: Prisma.AttributesCreateInput[] = [
  {
    name: "Destreza",
    code: "DES",
  },
  {
    name: "Inteligência",
    code: "INT",
  },
  {
    name: "Carisma",
    code: "CAR",
  },
  {
    name: "Sabedoria",
    code: "SAB",
  },
  {
    name: "Constituição",
    code: "CON",
  },
  {
    name: "Força",
    code: "FOR",
  },
];

const racesData: Prisma.RacesCreateInput[] = [
  {
    name: "Anão",
    description: `Os anões são conhecidos por sua resistência, honra e tradição. Vivem cerca de 350 anos e valorizam profundamente clãs, juramentos e o trabalho bem-feito, especialmente na forja, mineração e artesanato. Costumam ser diretos, desconfiados de estranhos, mas extremamente leais àqueles que conquistam sua confiança.
Em termos mecânicos, os anões recebem +2 em Constituição, o que os torna naturalmente robustos e difíceis de derrubar. Eles possuem Visão no Escuro, Resiliência Anã (vantagem contra veneno e resistência a dano de veneno) e proficiência com armas e ferramentas ligadas à sua cultura. Apesar do deslocamento menor, não sofrem penalidade por usar armaduras pesadas.`,
    races_modifier: {
      create: [
        {
          attribute: "CON",
          value: 2,
        },
      ],
    },
  },
  {
    name: "Humano",
    description: `Os humanos em D&D 5ª edição são a raça mais versátil e adaptável do jogo. Com uma expectativa de vida mais curta que a de elfos e anões, eles tendem a viver intensamente, expandindo reinos, explorando terras desconhecidas e buscando poder, conhecimento ou glória. Sua diversidade cultural é enorme, variando de impérios organizados a tribos nômades.
Mecanicamente, o humano padrão recebe +1 em todos os atributos, o que o torna uma escolha equilibrada para qualquer classe.`,
    races_modifier: {
      create: [
        {
          attribute: "FOR",
          value: 1,
        },
        {
          attribute: "DES",
          value: 1,
        },
        {
          attribute: "CON",
          value: 1,
        },
        {
          attribute: "INT",
          value: 1,
        },
        {
          attribute: "SAB",
          value: 1,
        },
        {
          attribute: "CAR",
          value: 1,
        },
      ],
    },
  },
  {
    name: "Elfo",
    description: `Elfos são uma raça humanoide conhecida por sua graça, longevidade e ligação com a magia e a natureza. Eles vivem centenas de anos, o que lhes dá uma visão mais paciente e contemplativa do mundo. Elfos valorizam arte, música, poesia e conhecimento, e costumam parecer distantes ou enigmáticos para raças de vida curta, como humanos.
Mecanicamente, os elfos possuem +2 em Destreza, o que os torna excelentes arqueiros, ladinos e guerreiros ágeis. Todos os elfos têm Visão no Escuro, Sentidos Aguçados (proficiência em Percepção) e Ancestral Feérico, que concede vantagem contra ser enfeitiçado e imunidade ao sono mágico.`,
    races_modifier: {
      create: [
        {
          attribute: "DES",
          value: 2,
        },
      ],
    },
  },
];

const skillsData: Prisma.SkillsCreateInput[] = [
  {
    name: "Atletismo",
    attribute: { connect: { id: "e42a9238-9534-4d16-93b4-c8e36d2058d8" } },
  },
  {
    name: "Acrobacia",
    attribute: { connect: { id: "04ef0d78-a0da-4036-84f1-1a0b8e8cf9e4" } },
  },
  {
    name: "Furtividade",
    attribute: { connect: { id: "04ef0d78-a0da-4036-84f1-1a0b8e8cf9e4" } },
  },
  {
    name: "Prestidigitação",
    attribute: { connect: { id: "04ef0d78-a0da-4036-84f1-1a0b8e8cf9e4" } },
  },
  {
    name: "Arcanismo",
    attribute: { connect: { id: "85a278b5-e1a0-4cee-810a-05b85dc1a028" } },
  },
  {
    name: "História",
    attribute: { connect: { id: "85a278b5-e1a0-4cee-810a-05b85dc1a028" } },
  },
  {
    name: "Investigação",
    attribute: { connect: { id: "85a278b5-e1a0-4cee-810a-05b85dc1a028" } },
  },
  {
    name: "Natureza",
    attribute: { connect: { id: "85a278b5-e1a0-4cee-810a-05b85dc1a028" } },
  },
  {
    name: "Religião",
    attribute: { connect: { id: "85a278b5-e1a0-4cee-810a-05b85dc1a028" } },
  },
  {
    name: "Adestrar Animais",
    attribute: { connect: { id: "d7a97f1b-70d8-4913-a676-e77980e21d8c" } },
  },
  {
    name: "Intuição",
    attribute: { connect: { id: "d7a97f1b-70d8-4913-a676-e77980e21d8c" } },
  },
  {
    name: "Medicina",
    attribute: { connect: { id: "d7a97f1b-70d8-4913-a676-e77980e21d8c" } },
  },
  {
    name: "Percepção",
    attribute: { connect: { id: "d7a97f1b-70d8-4913-a676-e77980e21d8c" } },
  },
  {
    name: "Sobrevivência",
    attribute: { connect: { id: "d7a97f1b-70d8-4913-a676-e77980e21d8c" } },
  },
  {
    name: "Atuação",
    attribute: { connect: { id: "b97b22c5-b2bb-4e3d-baec-de780d928453" } },
  },
  {
    name: "Enganação",
    attribute: { connect: { id: "b97b22c5-b2bb-4e3d-baec-de780d928453" } },
  },
  {
    name: "Intimidação",
    attribute: { connect: { id: "b97b22c5-b2bb-4e3d-baec-de780d928453" } },
  },
  {
    name: "Persuasão",
    attribute: { connect: { id: "b97b22c5-b2bb-4e3d-baec-de780d928453" } },
  },
];

export async function main() {
  for (const u of skillsData) {
    await prisma.skills.create({ data: u });
  }

  // for (const u of classesData) {
  //   await prisma.classes.create({ data: u });
  // }
  // for (const r of racesData) {
  //   await prisma.races.create({ data: r });
  // }
  // for (const a of attributesData) {
  //   await prisma.attributes.create({ data: a });
  // }
}

main();

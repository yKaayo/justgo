// Constraints
import images from "./images";
import people from "./people";
import comment from "./comments";

const architectures = [
  {
    id: 1,
    name: "Catedral Paróquia Santuário Sagrada Família",
    img: images.img1,
    recomendations: 1500,
    address:
      "R. Campina Grande, 400 - Jardim Bom Refugio, São Paulo - SP, 05788-250",
    tel: "(11) 5842-2120",
    work: "3ª a Sábado das 08h às 12h e 13h às 18h.",
    characteristices: [
      {
        name: "Gratuito",
        icon: "ticket",
      },
      {
        name: "Aceita Pet",
        icon: "pet",
      },
      {
        name: "WI-FI",
        icon: "wifi",
      },
    ],
    description:
      "Dentro da grande metrópole paulista e invadindo municípios que são considerados uma extensão do ‘Campo’ que em tempo algum foi ‘Limpo’ do propósito da evangelização, está a Diocese de Campo Limpo. Aos 33 anos, inúmeras conquistas e três governos diferentes, a diocese que tem outras três dioceses-irmãs, se faz competente ano após ano na fundamentação das virtudes teologais: Fé, esperança e caridade.",
    comments: [
      {
        name: "Roberto Silva",
        photo: people.person1,
        title: "Lugar muito bom!",
        comment:
          "Desde que comecei a frequentar esta igreja, minha vida mudou para melhor. O acolhimento é incrível, as mensagens são inspiradoras e cheias de amor, e a presença de Deus é sentida em cada culto. A equipe é muito atenciosa, e os momentos de louvor são verdadeiramente transformadores.",
        asset: comment.comment1,
      },
      {
        name: "Roberto Silva",
        photo: people.person1,
        title: "Lugar muito bom!",
        comment:
          "Desde que comecei a frequentar esta igreja, minha vida mudou para melhor. O acolhimento é incrível, as mensagens são inspiradoras e cheias de amor, e a presença de Deus é sentida em cada culto. A equipe é muito atenciosa, e os momentos de louvor são verdadeiramente transformadores.",
        asset: comment.comment1,
      },
    ],
  },
  {
    id: 2,
    name: "Casa de Vidro",
    img: images.img2,
    recomendations: 1500,
    address:
      "R. Gen. Almério de Moura, 200 - Morumbi, São Paulo - SP, 05690-080",
    tel: "(11) 3744-9902",
    work: "3ª a Sábado das 10h às 17h.",
    characteristices: [
      {
        name: "Pago",
        icon: "ticket",
      },
      {
        name: "WI-FI",
        icon: "wifi",
      },
    ],
    price: [{ full: "50,00", half: "25,00" }],
    description:
      "A Casa de Vidro é um dos mais importantes exemplares da arquitetura moderna no Brasil. Projetada e construída entre 1950 e 1951, foi a primeira residência do casal Lina Bo e Pietro Maria Bardi no Brasil.",
    comments: [
      {
        name: "Ana Costa",
        photo: people.person1,
        title: "Arquitetura incrível!",
        comment:
          "Fiquei impressionada com a arquitetura da Casa de Vidro. O projeto é lindo e muito bem conservado. A visita guiada é super informativa e a experiência de estar ali é única.",
        asset: comment.comment1,
      },
      {
        name: "Pedro Lima",
        photo: people.person1,
        title: "Experiência única!",
        comment:
          "Um lugar incrível para quem gosta de arquitetura e design. A luz natural invade o espaço de forma mágica. Vale a pena cada centavo do ingresso.",
        asset: comment.comment1,
      },
    ],
  },
  {
    id: 3,
    name: "Clube Paineiras do Morumbi",
    img: images.img3,
    recomendations: 1500,
    address:
      "Av. Dr. Alberto Penteado, 605 - Morumbi, São Paulo - SP, 05678-000",
    tel: "(11) 3779-2000",
    work: "Segunda a Sexta das 06h às 22h, Sábado e Domingo das 06h às 19h.",
    characteristices: [
      {
        name: "Gratuito",
        icon: "ticket",
      },
      {
        name: "Aceita Pet",
        icon: "pet",
      },
      {
        name: "WI-FI",
        icon: "wifi",
      },
    ],
    description:
      "O Clube Paineiras do Morumbi é uma tradicional agremiação social, esportiva e cultural da cidade de São Paulo. Fundado em 1960, oferece uma vasta gama de atividades e infraestrutura de lazer para seus associados.",
    comments: [
      {
        name: "Julia Martins",
        photo: people.person1,
        title: "Ótimo para a família!",
        comment:
          "O clube é excelente para passar o dia com a família. As piscinas são ótimas, a área de lazer é bem cuidada e as atividades esportivas são variadas. Recomendo muito!",
        asset: comment.comment1,
      },
      {
        name: "Carlos Andrade",
        photo: people.person1,
        title: "Infraestrutura completa.",
        comment:
          "Um clube com uma infraestrutura completa, desde quadras de tênis até academia. O ambiente é seguro e agradável. Ótima opção para quem busca lazer e esporte.",
        asset: comment.comment1,
      },
    ],
  },
  {
    id: 4,
    name: "Programa Habitacional Paraisópolis",
    img: images.img4,
    recomendations: 1500,
    address: "R. Ernest Renan, 1366 - Vila Andrade, São Paulo - SP, 05659-020",
    tel: "Não possui",
    work: "Aberto 24h.",
    characteristices: [
      {
        name: "Gratuito",
        icon: "ticket",
      },
      {
        name: "Aceita Pet",
        icon: "pet",
      },
      {
        name: "WI-FI",
        icon: "wifi",
      },
    ],
    description:
      "O Programa de Urbanização de Paraisópolis é uma iniciativa de intervenção urbana que visa melhorar a qualidade de vida da comunidade através da construção de moradias dignas, equipamentos públicos e infraestrutura básica, como saneamento e iluminação.",
    comments: [
      {
        name: "Fernanda Oliveira",
        photo: people.person1,
        title: "Transformação social.",
        comment:
          "O projeto habitacional de Paraisópolis é um exemplo de transformação social e urbana. É um trabalho muito importante para a comunidade e um modelo a ser seguido. Fiquei muito feliz em conhecer o projeto de perto.",
        asset: comment.comment1,
      },
      {
        name: "João Pereira",
        photo: people.person1,
        title: "Exemplo de urbanização.",
        comment:
          "É um projeto muito bonito e funcional, que mostra como é possível urbanizar uma área de forma digna e sustentável. As moradias são de alta qualidade e o espaço comum é bem planejado.",
        asset: comment.comment1,
      },
    ],
  },
];

export default architectures;

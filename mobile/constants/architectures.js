// Constraints
import images from "./images";

const architectures = [
  {
    id: 1,
    name: "Catedral Paróquia Santuário Sagrada Família",
    img: images.img1,
    recomendations: 1500,
    address:
      "R. Campina Grande, 400 - Jardim Bom Refugio, São Paulo - SP, 05788-250",
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
  },
  {
    id: 2,
    name: "Casa de Vidro",
    img: images.img2,
    recomendations: 1500,
    address:
      "R. Gen. Almério de Moura, 200 - Morumbi, São Paulo - SP, 05690-080",
  },
  {
    id: 3,
    name: "Clube Paineiras do Morumbi",
    img: images.img3,
    recomendations: 1500,
    address:
      "Av. Dr. Alberto Penteado, 605 - Morumbi, São Paulo - SP, 05678-000",
  },
  {
    id: 4,
    name: "Programa Habitacional Paraisópolis",
    img: images.img4,
    recomendations: 1500,
    address: "R. Ernest Renan, 1366 - Vila Andrade, São Paulo - SP, 05659-020",
  },
];

export default architectures;

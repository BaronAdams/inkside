type categoryData = {
  value:string,
  label: string,
  path: string
}

interface IDictionary {
  [index: string]: string;
}

let TITLES = {} as IDictionary;
TITLES['top'] = 'TOP DES ANIMES'
TITLES['bypopularity'] = 'LES PLUS POPULAIRES'
TITLES['favorite'] = 'LES PLUS AIMES'
TITLES['upcoming'] = 'A VENIR'

export const categories : categoryData[] = [
    {
      value:"Technologie",
      label:"Technologie",
      path:"/categories/technologie"
    },
    {
      value:"Sciences",
      label:"Sciences",
      path:"/categories/sciences"
    },
    {
      value:"IA",
      label:"IA",
      path:"/categories/ia"
    },
    {
      value:"Voyages",
      label:"Voyages",
      path:"/categories/voyages"
    },
    {
      value:"Ingénierie",
      label:"Ingénierie",
      path:"/categories/ingenierie"
    },
    {
      value:"Développement Web",
      label:"Développement Web",
      path:"/categories/developpement_web"
    },
    {
      value:"Programmation",
      label:"Programmation",
      path:"/categories/programmation"
    },
    {
      value:"Design",
      label:"Design",
      path:"/categories/design"
    },
    {
      value:"Sécurité informatique",
      label:"Sécurité informatique",
      path:"/categories/securite_informatique"
    },
    {
      value:"Big Data",
      label:"Big Data",
      path:"/categories/bigdata"
    },
    {
      value:"Réseaux sociaux",
      label:"Réseaux sociaux",
      path:"/categories/resaux_sociaux"
    },
    {
      value:"Startups",
      label:"Startups",
      path:"/categories/startups"
    },
    {
      value:"Cryptomonnaies",
      label:"Cryptomonnaies",
      path:"/categories/cryptomonnaies"
    },
    {
      value:"Internet des Objets (IoT)",
      label:"Internet des Objets (IoT)",
      path:"/categories/iot"
    },
    {
      value:"Cloud Computing",
      label:"Cloud Computing",
      path:"/categories/cloudcomputing"
    },
    {
      value:"Robotique",
      label:"Robotique",
      path:"/categories/robotique"
    },
    {
      value:"Data Sciences",
      label:"Data Sciences",
      path:"/categories/datasciences"
    },
    {
      value:"E-commerce",
      label:"E-commerce",
      path:"/categories/ecommerce"
    },
    {
      value:"VR et AR",
      label:"VR et AR",
      path:"/categories/vr&ar"
    },
    {
      value:"Intelligence Artificielle éthique",
      label:"Intelligence Artificielle éthique",
      path:"/categories/intelligence_artificielle_ethique"
    },
    {
      value:"Blockchain",
      label:"Blockchain",
      path:"/categories/blockchain"
    },
    {
      value:"Cybersécurité",
      label:"Cybersécurité",
      path:"/categories/cybersecurite"
    },
    {
      value:"Marketing Digital",
      label:"Marketing Digital",
      path:"/categories/marketingdigital"
    },
    {
      value:"Gestion de projet informatique",
      label:"Gestion de projet informatique",
      path:"/categories/gestionprojetinformatique"
    },
    {
      value:"Systèmes embarqués",
      label:"Systèmes embarqués",
      path:"/categories/systemesembarques"
    }
  ];
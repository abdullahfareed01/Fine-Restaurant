import images from "./images";

export const wines = [
  { title: "Orange Jice Hill Shiraz", price: "$56", tags: "AU | Bottle" },
  { title: "Catena Malbee", price: "$59", tags: "AU | Bottle" },
  { title: "La Vintage Rose", price: "$44", tags: "FR | 750 ml" },
  { title: "Pale Blue Lemonade ", price: "$31", tags: "CA | 750 ml" },
  { title: "Irish Lemons", price: "$26", tags: "IE | 750 ml" },
];

export const cocktails = [
  { title: "Aperol Sprtiz", price: "$20", tags: "Aperol | prosecco | soda | 30 ml" },
  { title: "Dark 'N' Stormy", price: "$16", tags: "Dark rum | Ginger Juice | lemonade" },
  { title: "Daiquiri", price: "$10", tags: "Rum | Citrus juice | Sugar" },
  { title: "Old Fashioned", price: "$31", tags: "Bourbon | Brown sugar | Bitters" },
  { title: "Negroni", price: "$26", tags: "Gin | Vermouth | Campari | Orange" },
];

export const awards = [
  { imgUrl: images.award02, title: "Bib Gourmond", subtitle: "Lorem ipsum dolor sit amet." },
  { imgUrl: images.award01, title: "Rising Star", subtitle: "Lorem ipsum dolor sit amet." },
  { imgUrl: images.award05, title: "AA Hospitality", subtitle: "Lorem ipsum dolor sit amet." },
  { imgUrl: images.award03, title: "Outstanding Chef", subtitle: "Lorem ipsum dolor sit amet." },
];


export default { wines, cocktails, awards };

import _ from "lodash";
export function sortObjectsByPropertyDescending<T>(
  objets: T[],
  propriete: keyof T
): T[] {
  // Utilisez _.sortBy pour trier les objets par la propriété spécifiée en ordre décroissant
  const objetsTries = _.sortBy(
    objets,
    (objet: T) => objet[propriete]
  ).reverse();
  return objetsTries;
}

export function takeNFirstElements<T>(tableau: T[], limit = 5): T[] {
  // Utilisez _.take pour prendre les 5 premiers éléments du tableau
  return _.take(tableau, limit);
}

export function generateInt8Id() {
  // Générer un nombre aléatoire entre -128 et 127
  const int8Id = _.random(-128, 127);
  return int8Id;
}

export function generateUniqueID() {
  const timestamp = new Date().getTime(); // Récupère le timestamp actuel
  const randomNum = Math.random(); // Génère un nombre aléatoire entre 0 et 1
  const uniqueID = `${timestamp}-${randomNum}`; // Concatène le timestamp et le nombre aléatoire
  return uniqueID;
}

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

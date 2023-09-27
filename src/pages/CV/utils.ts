export const splitStringArrayIntoColumns = (skills: string[]) => {
  const middleIndex = Math.ceil(skills.length / 2);
  const leftColumn = skills.slice(0, middleIndex);
  const rightColumn = skills.slice(middleIndex);
  return [leftColumn, rightColumn];
};

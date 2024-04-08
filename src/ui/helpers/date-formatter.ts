export const formatDate = (date: string) => {
  const parts = date.split("-");
  const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
  return formattedDate;
};

export default formatDate;
export const handleFormatDate = (date) => {
  const dateInstance = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(dateInstance);

  return formattedDate;
};

export default handleFormatDate
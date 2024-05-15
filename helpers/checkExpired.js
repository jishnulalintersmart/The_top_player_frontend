const isExpired = (date) => {
  const currentDate = new Date();
  const endDate = new Date(date);
  // const endDate = new Date("2022-01-01");

  console.log(endDate);
  console.log(currentDate > endDate);
  return currentDate > endDate;
};
export default isExpired;
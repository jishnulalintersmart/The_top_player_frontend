const isExpired = (date) => {
  const currentDate = new Date();
  // const endDate = new Date(date);
  const endDate = new Date("2025-01-01");

  return currentDate > endDate;
};

export default isExpired;

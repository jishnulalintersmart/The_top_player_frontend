const isExpired = (course) => {
 

  const startDate = new Date(course.startDate);
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + course.duration); // Add course duration in months

  // Get the current date
  const currentDate = new Date();

  // Compare current date with expiration date
  return currentDate > endDate;
};

export default isExpired;

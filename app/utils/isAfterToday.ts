const isAfterToday = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date > today;
};

export default isAfterToday;

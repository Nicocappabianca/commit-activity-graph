const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase();
};

export default capitalizeFirstLetter;

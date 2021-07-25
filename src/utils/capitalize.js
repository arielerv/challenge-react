const capitalize = (text) => {
  if (!text) {
    return '';
  }
  if (text === 'null') {
    return '';
  }
  if (Array.isArray(text)) {
    return text.map((item) => capitalize(item)).join(', ');
  }
  const splittedText = text.split('-').join(' ');
  return splittedText.charAt(0).toUpperCase() + splittedText.slice(1);
};

export default capitalize;

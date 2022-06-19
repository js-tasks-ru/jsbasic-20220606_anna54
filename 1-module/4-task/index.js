function checkSpam(str) {
  // ваш код...
  if (str.toLowerCase().includes("xxx") == false && str.toLowerCase().includes("1xbet") == false) {
  return false;
  } else {
    return true;
  }
}

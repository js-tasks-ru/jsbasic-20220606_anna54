function ucFirst(str) {
  // ваш код...
  if (str.length == 1) {
    str = str.toUpperCase();
    //return str;
    
  } else if (str.length == 0) {    
        //return str;
    } 
    else {
      str = str[0].toUpperCase() + str.slice(1);
      //return str;
    }
    return str;
}

function camelize(str) {
<<<<<<< HEAD
  // ваш код...
  
  //let arr = str.split('-');
    //let arr2 = arr.map(item => item[0].toUpperCase() + item.slice(1));
  //let arr2 = arr.map(function Big(item => item[0].toUpperCase() + item.slice(1) ));
  //let str2 = arr2.join('');

  
  
  //let arr = str.split('');


  
  //arr.findIndex(item => item.id == "-")





  //let str = arr.join('');

=======
  if (!str) {
    return str;
  }

  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map((part, index) => {
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      if (index === 0) { // Это нужно делать, чтобы не делать заглавной первую часть
        return part;
      }

      let firstLetter = part.slice(0, 1);
      let rest = part.slice(1);

      return `${firstLetter.toUpperCase()}${rest}`;
    })
    .join('');
>>>>>>> 49ffb82d97a2fcc86e0189ae3fa9ee034dc579c4
}

let calculator = {
  // ваш код
  aa:0,
  bb:0,

  read(a, b) {
  this.aa = a;
  this.bb = b;
  }
  ,
  sum() {
    s = this.aa + this.bb;
    return s;
  }
  ,

  mul() {
    m = this.aa*this.bb;
    return m;
  }


};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

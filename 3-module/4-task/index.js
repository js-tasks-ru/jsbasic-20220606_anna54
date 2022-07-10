function showSalary(users, age) {
  // ваш код...

  //let youngUsers = users.filter(function(item => item.age <= age); //массив пользователей младше age
 // let youngUsers = users.filter(item => item.age <= age);
  
  // let str = youngUsers.name`${user.name}, ${user.balance}`;


  
  //let arrNameBalance = [];

  //for (let i = 0; i < youngUsers.length; i++) {
    //собираю массив из имен и зарплат
  //  arrNameBalance.push(youngUsers[i].Name,youngUsers[i].Balance,/n);

  //}

//let str = String(arr);

//return str;

users
  .filter(user => users.age < age)
  .map(user => `${user.name}, ${user.balance}`);





  return data
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join('\n');
}

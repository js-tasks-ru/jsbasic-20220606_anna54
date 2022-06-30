function namify(users) {
  // ваш код...
  //let names = [users[0].name, users[1].name, users[2].name];
  //return names;

  let names = [];
  for (let i = 0; i < users.length; i++) { 
    names.push(users[i].name);  
  }
  return names;
}

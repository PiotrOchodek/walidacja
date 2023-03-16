function validatePassword(password) {
  const characters = /^(?=.*[!@#])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,10}$/;
  if (typeof password == typeof '') {
    return characters.test(password);
  } else {
    console.log('Wrong input');
  }
}

const word = validatePassword('dom1@');
console.log(word);

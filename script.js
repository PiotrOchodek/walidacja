function validatePassword(password) {
  const characters = /^(?=.*[!@#])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,10}$/;
  // [0-9] może być zamienione na \d - wyszukuje cyfry
  if (typeof password == typeof '') {
    return characters.test(password);
  } else {
    console.log('Wrong input');
  }
}

const word = validatePassword('dom1@');
console.log(word);

// inny zapis tej samej funkcji bez tworzenia stałej
function validatePassword2(password) {
  if (typeof password == typeof '') {
    return /^(?=.*[!@#])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,10}$/.test(password);
  } else {
    console.log('Wrong input');
  }
}

const word2 = validatePassword2('dom@');
console.log(word2);

//zapis w formie strzałkowej funkcji 

const validatePassword3 = password => {
  const characters = /^(?=.*[!@#])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,10}$/;
  // [0-9] może być zamienione na \d - wyszukuje cyfry
  if (typeof password == typeof '') {
    return characters.test(password);
  } else {
    console.log('Wrong input');
  }
}

const word3 = validatePassword3('!123456789');
console.log(word3);

const validatePassword4 = (password) => {
  const characters = /\d/;

  if (typeof password !== 'string') {
    console.log('Wrong input! Enter string type parameter');
    return;
  }
  if (password.length > 10 || password.length < 3) {
    console.log('Wrong number of characters');
    return;
  }
  if (
    !(
      password.includes('!') ||
      password.includes('@') ||
      password.includes('#')
    )
  ) {
    console.log(
      'Must contain at least one of the special characters "!","@","#"'
    );
  }
  if (!characters.test(password)) {
    console.log('Must contain at least one digit');
    return;
  }
  console.log('Correct password');
};

const word4 = validatePassword4('dom!1');
console.log(word4);

//------------------------------------------------------------

function validatePassword(password) {
  const characters = /^(?=.*[!@#])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,10}$/;
  // [0-9] może być zamienione na \d - wyszukuje cyfry
  if (typeof password === 'string') {
    return characters.test(password);
  } else {
    console.log('Wrong input');
    return;
  }
}

const word = validatePassword('dom1@');
console.log(word);

// inny zapis tej samej funkcji bez tworzenia stałej
function validatePassword2(password) {
  if (typeof password === 'string') {
    return /^(?=.*[!@#])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,10}$/.test(password);
  } else {
    console.log('Wrong input');
    return;
  }
}

const word2 = validatePassword2('dom@');
console.log(word2);

//zapis w formie strzałkowej funkcji

const validatePassword3 = (password) => {
  const characters = /^(?=.*[!@#])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,10}$/;
  // [0-9] może być zamienione na \d - wyszukuje cyfry
  if (typeof password === 'string') {
    return characters.test(password);
  } else {
    console.log('Wrong input');
    return;
  }
};

const word3 = validatePassword3('!123456789');
console.log(word3);

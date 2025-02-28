function isAdult(age) {
  if (age >= 18) {
    return "adult";
  } else {
    return "not adult";
  }
}

function isCharAVowel(char) {
  vowels = ["a", "e", "i", "o", "u"];
  for (i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      return true;
    } else return false;
  }
}

function generateEmail(name, domain) {
  return `${name}@${domain}`;
}

function greetUser(name, TOD) {
  if (TOD === "morning") {
    return `Good ${TOD} ${name}`;
  }
  if (TOD === "afternoon") {
    return `have a great ${TOD} ${name}`;
  }
  if (TOD === "evening") {
    return `its ${TOD} go get some dinner ${name}`;
  }
}

function maxOfThree(num1, num2, num3) {
  if (num1 >= num2) {
    max = num1;
  } else {
    max = num2;
  }
  if (num3 >= max) {
    max = num3;
  }
  return max;
}

function calculateTip(billAmmount, tipPercentage) {
  return (tipPercentage / 100) * billAmmount + billAmmount;
}

function convertTemperature(temperature, string) {
  if (string === "C") {
    return `${temperature * 1.8 + 32} (Farenheit)`;
  } else if (string === "F") {
    return `${(temperature - 32) / 1.8} (Celcius)`;
  } else return "write ur check better";
}

function basicCalculator(num1, num2, operation) {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    return num1 / num2;
  }
}

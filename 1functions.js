function formatGrade(num) {
  let grade = num;

  if (grade < 3) {
    console.log(`Fail (2)`);
  } else if (grade >= 3 && grade < 3.50) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (grade >= 3.50 && grade < 4.50) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (grade >= 4.50 && grade < 5.50) {
    console.log(`Very good (${grade.toFixed(2)})`);
  } else {
    console.log(`Excellent (${grade.toFixed(2)})`);
  }
}

function myMathPow(num, pow) {
  let finalSum = Math.pow(num, pow);
  console.log(finalSum);
}

function repeatString(str, num) {
  let result = ``;
  for (let i = 0; i < num; i++) {
    result += str;
  }
  
  return result;
}

function orders(product, quantity) {
  let price = 0;

  switch (product) {
    case `water` : price = 1.00;break;
    case `coffee` : price = 1.50;break;
    case `coke` : price = 1.40;break;
    case `snacks` : price = 2.00;break;
  }
  
  let totalPrice = (quantity * price).toFixed(2);
  return totalPrice;
}

function simpleCalculator(num1, num2, operator) {
let result;
  switch(operator) {
    case `multiply` : result = num1 * num2;break;
    case `divide` : result = num1 / num2;break;
    case `add` : result = num1 + num2;break;
    case `subtract` : result = num1 - num2;break;
  }
  
  return result;
}


function signCheck(a, b, c) {
  let result;
  isPositive = true;

  result = a * b * c;

  if (result < 0) {
    isPositive = false;
    return `Negative`;
  }

  if (isPositive) {
    return `Positive`;
  }
}

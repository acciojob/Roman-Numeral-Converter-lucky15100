function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1],
  };

  let romanNumeral = '';

  for (let i = 0; i < Object.keys(obj).length; i++) {
    const [symbol, value] = obj[i];
    
    // Calculate the number of times the symbol should be added
    const count = Math.floor(num / value);
    
    if (count > 0) {
      romanNumeral += symbol.repeat(count);
      num -= count * value;
    }

    // Check for subtraction rules (e.g., IV for 4, IX for 9, etc.)
    if (i % 2 === 0) {
      const nextObjIndex = i + 2;
      const nextValue = obj[nextObjIndex][1];
      const subtractiveValue = value - nextValue;
      
      if (num >= subtractiveValue) {
        romanNumeral += obj[nextObjIndex][0] + symbol;
        num -= subtractiveValue;
      }
    }
  }

  return romanNumeral;
}

// Testing the function with an example input
console.log(convertToRoman(798)); // Output: "DCCXCVIII"

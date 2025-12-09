try {
  const raw = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
  // const raw = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`

  let row = '';
  let cell = '';
  let rawArr = [];
  let tempArr = [];

  for (let charIndex in raw) {

    const char = raw[charIndex];

    if (charIndex < raw.length - 1) {

      if (char == ',') {
        tempArr.push(cell);

        row += cell + ',';
        cell = '';
      } else if (char == '\n') {
        tempArr.push(cell);
        rawArr.push(tempArr);
        tempArr = [];

        row += cell;
        console.log(row);
        row = '';
        cell = '';
      } else {
        cell += char;
      }

      // This accounts for the last row because if there is no '\n', the last row doesn't get printed
    } else {
      cell += char; // Add the last character in the string to the cell because there is no ',' or '\n' char delimiter to tell us to add the cell to the row
      tempArr.push(cell);
      rawArr.push(tempArr);

      row += cell;
      console.log(row);
    }

  }

  console.log('\nPART TWO---------------------------------------');
  console.log(`rawArr: ${rawArr}`);
  console.log(...rawArr)

  let numCols = raw[0].length;
  console.log(numCols);

  let rawObj = [];

  for (let i = 1; i < rawArr.length; i++) {
    const currentRow = rawArr[i];
    let tempObj = {};

    for (let col = 0; col < rawArr[0].length; col++) {
      tempObj[rawArr[0][col].toLowerCase()] = currentRow[col];
    }
    rawObj.push(tempObj);
  }

  console.log('\nPART THREE---------------------------------------');
  console.log(`Raw data to obj: ${rawObj}`);
  console.log(...rawObj);

  console.log('\nPART FOUR---------------------------------------');
  rawObj.pop();
  console.log(`rawObj after popping last item: ${rawObj}`);
  console.log(...rawObj);
  const newObj = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

  rawObj.splice(1, 0, newObj);
  console.log('\nrawObj after splicing into it new object');
  console.log(...rawObj);

  const newObjToPush = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
  rawObj.push(newObjToPush);
  console.log('\nrawObj after pushing new object')
  console.log(...rawObj);

  let sum = 0;
  for (let currentObj of rawObj) {
    sum += parseInt(currentObj.age);
  }
  console.log(`\nTotal age: ${sum}`);
  console.log(`Average age: ${sum / rawObj.length}`);

  console.log('\nPART FIVE---------------------------------------');
  let csvRawAgain = '';

  const keys = Object.keys(rawObj[0]);
  for (let keyIndex in keys) {
    const key = keys[keyIndex];
    csvRawAgain += key;
    if (keyIndex < keys.length - 1)
      csvRawAgain += ',';
  }
  console.log('Keys of csv');
  console.log(csvRawAgain);

  for (let i = 0; i < rawObj.length; i++) {
    const currentObj = rawObj[i];
    csvRawAgain += '\n';
    console.log(currentObj)
    for (let keyIndex in keys) {
      const key = keys[keyIndex];
      console.log(currentObj[key]);
      csvRawAgain += currentObj[key];
      if (keyIndex < keys.length - 1) 
        csvRawAgain += ',';
    }
  }

  console.log(csvRawAgain);
  console.log(JSON.stringify(csvRawAgain));

} catch (err) {
  console.error(err);
}
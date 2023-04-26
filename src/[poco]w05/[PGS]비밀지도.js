function solution(n, arr1, arr2) {
  const secretMap = [];

  const firstMap = arr1.map((row) => {
    let binary = row.toString(2);
    if (binary.length < n) {
      binary = binary.padStart(n, '0');
    }
    return binary;
  });

  const secondMap = arr2.map((row) => {
    let binary = row.toString(2);
    if (binary.length < n) {
      binary = binary.padStart(n, '0');
    }
    return binary;
  });

  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      const first = firstMap[i][j];
      const second = secondMap[i][j];
      console.log(`first, ${first}, second, ${second}`);
      console.log('row', row);
      first === '0' && second === '0' ? (row += ' ') : (row += '#');
    }
    secretMap.push(row);
  }

  return secretMap;
}

const copyArray = <T>(array: T[]): T[] => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

export const union = <T extends number | string>(arr1: T[], arr2: T[]): T[] => {
  let match = false;
  const result = copyArray(arr1);
  let idx = result.length;
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        match = true;
        break;
      }
    }
    if (!match) {
      result[idx] = arr2[i];
      idx++;
    }
    match = false;
  }
  return result;
};

export const intersection = <T extends number | string>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
};

export const difference = <T extends number | string>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
};

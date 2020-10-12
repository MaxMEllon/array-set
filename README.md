# array-set
> create array as set from two arrays. like as intersection, union, and defference set.

## Usage

```js
const { intersection, union, difference } = require("array-set");

union([3, 2, 3], [2, 3, 4]);
// => [3, 2, 4]
intersection([1, 2, 3], [3, 4, 5]);
// => [3]
difference([1, 2, 3, 4], [1, 2]);
// => [3, 4]
```

## API

### intersection: `<T extends string | numebr>(a: T[], b: T[]): T[]`

### union: `<T extends string | numebr>(a: T[], b: T[]): T[]`

### difference: `<T extends string | numebr>(a: T[], b: T[]): T[]`

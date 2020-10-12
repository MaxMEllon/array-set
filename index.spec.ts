import { intersection, union, difference } from ".";

describe("number array", () => {
  it("intersection works", () => {
    const actual = union([3, 2, 3], [2, 3, 4]);
    expect(actual.sort()).toEqual([2, 3, 4]);
  });

  it("union works", () => {
    const actual = intersection([1, 2, 3], [3, 4, 5]);
    expect(actual).toEqual([3]);
  });

  it("difference", () => {
    const actual = difference([1, 2, 3, 4], [1, 2]);
    expect(actual).toEqual([3]);
  });
});

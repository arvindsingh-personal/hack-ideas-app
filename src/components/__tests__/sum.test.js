import { sum } from "../sum";

test("Sym to be", () => {
  const result = sum(3, 4);

  expect(result).toBe(7);
});

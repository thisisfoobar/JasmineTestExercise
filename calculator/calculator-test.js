it("should calculate the monthly rate correctly", function () {
  expect(calculateMonthlyPayment({ amount: 100000, years: 10, rate: 6 })).toBe(
    "1110.21"
  );
  expect(calculateMonthlyPayment({ amount: 100000, years: 10, rate: 'a' })).toBe('NaN');
});

it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 10, years: 10, rate: 6 })).toBe(
    "0.11"
  );
});

it("should return a string value", function () {
  expect(
    calculateMonthlyPayment({ amount: 100000, years: 10, rate: 6 })
  ).toBeInstanceOf(String);
});

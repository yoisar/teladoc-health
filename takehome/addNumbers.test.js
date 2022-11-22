const addNumbers = require("./addNumbers");


test("should return 134 478 822", () => {
  expect(addNumbers("123 456 789", "11 22 33"))
    .toBe("134 478 822");
});

//Error that I do not find way to fix it
test(" should return 123456789012358024579 234567890123480245801", () => {
  expect(addNumbers("123456789012345678901 23456789", "12345678 234567890123456789012"))
    .toBe("123456789012358024579 234567890123480245801");
});

test("should return 1234580.2301 2345678903.545", () => {
  expect(addNumbers("1234567.8901 2.345", "12.34 2345678901.2"))
    .toBe("1234580.2301 2345678903.545");
});

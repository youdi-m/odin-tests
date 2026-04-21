import {calculator} from "./calculator"

describe("calculator", () => {
	test("calculates the given string", () => {
		expect(calculator("2*2")).toBe("4");
	})
})

test("addition", () => {
	expect(calculator("1+1")).toBe("2")
});

test("subtraction", () => {
	expect(calculator("1-1")).toBe("0")
});

test("multiplication", () => {
	expect(calculator("2*2")).toBe("4")
});

test("addition", () => {
	expect(calculator("2/2")).toBe("1")
});
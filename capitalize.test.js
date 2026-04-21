import {capitalize} from "./capitalize";

describe("capitalize", () => {
	test("capitalizes the first letter", () => {
		expect(capitalize("hello")).toBe("Hello");
	})
})

test("lowercases the rest of the string", () => {
	expect(capitalize("hELLO")).toBe("Hello");
});

test("returns empty string unchanged", () => {
	expect(capitalize("")).toBe("");
});

test("handles null/undefined", () => {
	expect(capitalize(null)).toBeNull();
	expect(capitalize(undefined)).toBeUndefined();
});
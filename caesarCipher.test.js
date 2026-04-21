import {shiftLetter} from "./caesarCipher";

describe("shiftLetter", () => {
	test("shift the letters by a set amount", () => {
		expect(shiftLetter("abcd", 1)).toBe("bcde");
	})
})

test("regular word", () => {
	expect(shiftLetter("hello", 1)).toBe("ifmmp");
});

test("punctuation", () => {
	expect(shiftLetter("shift!", 4)).toBe("wlmjx!");
});

test("letter z", () => {
	expect(shiftLetter("zebra", 3)).toBe("cheud");
});

test("returns empty string unchanged", () => {
	expect(shiftLetter("", 5)).toBe("");
});

test("handles null/undefined", () => {
	expect(shiftLetter(null, 0)).toBeNull();
	expect(shiftLetter(undefined, 8)).toBeUndefined();
});
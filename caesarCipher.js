export function shiftLetter(str, shift) {
	if (!str) return str;
  return str.replace(/[a-z]/gi, char => {
    const code = char.charCodeAt(0);
    const base = code >= 65 && code <= 90 ? 65 : 97;
    return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
  });
}
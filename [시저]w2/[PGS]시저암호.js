let a = "a".charCodeAt(0);
let z = "z".charCodeAt(0);
let A = "A".charCodeAt(0);
let Z = "Z".charCodeAt(0);

function solution(s, n) {
  return [...s]
    .map((c) => {
      if (c === " ") return " ";

      let ca = c.charCodeAt(0);

      if (ca >= a && ca <= z) {
        return String.fromCharCode(((ca - a + n) % (z - a + 1)) + a);
      } else {
        return String.fromCharCode(((ca - A + n) % (Z - A + 1)) + A);
      }
    })
    .join("");
}

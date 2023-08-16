var hi = "hello";
function capThenLowcase(String) {
  let lowCase = String.toLowerCase();
  let upCase = String.toUpperCase();
  let msg = upCase + " " + lowCase;
  console.log(msg);
}
capThenLowcase(hi);
function halfLength(String) {
  let length = String.length;
  let half = Math.floor(length / 2);
  console.log(half);
}
halfLength(hi);
function justHe(String) {
  let length = String.length;
  let half = Math.floor(length / 2);
  let h = String.slice(0, half);
  console.log(h);
}
justHe(hi);
function capAndLow(String) {
  let length = String.length;
  let half = Math.floor(length / 2);
  let firstHalf = String.slice(0, half);
  let secondHalf = String.slice(half, length);
  let caps = firstHalf.toUpperCase();
  let lows = secondHalf.toLowerCase();
  let msg = caps + lows;
  console.log(msg);
}
capAndLow(hi);

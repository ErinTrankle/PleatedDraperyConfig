// this function calculates the total number of widths

export function calculateWidths(fabricWidth, fullness, finishedWidth) {
  console.log("calculateWidths() start");

  fabricWidth = 54;

  const x = (finishedWidth * fullness) / fabricWidth;
  const y = Math.ceil(x);
  const z = y - x;

  if (z > 0.9) {
    return Math.floor(x);
  } else {
    return Math.ceil(x);
  }
}
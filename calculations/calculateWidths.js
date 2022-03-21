// this function calculates the total number of widths

export function calculateWidths(
      fabricWidth,
      fullness,
      finishedWidth,
      panelOrPair
) {
      console.log('calculateWidths() start');
      console.log(arguments);

      const x = (finishedWidth * fullness) / fabricWidth;
      const y = Math.ceil(x);
      const z = y - x;

      if (panelOrPair == 'Panel') {
            if (z > 0.9) {
                  return Math.floor(x);
            } else {
                  return Math.ceil(x);
            }
      } else if (panelOrPair == 'Pair') {
            if (z > 0.9) {
                  return Math.floor(x);
            } else {
                  return Math.ceil(x);
            }
      } else {
            console.log('- please specify panel or pair');
            return 0;
      }
}

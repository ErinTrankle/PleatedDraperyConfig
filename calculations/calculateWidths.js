// this function calculates the total number of widths

export function calculateWidths(
      boltWidth,
      fullness,
      finishedWidth,
      panelOrPair
) {
      console.log('calculateWidths() start');

      const x = (finishedWidth * fullness) / boltWidth;
      const y = Math.ceil(x);
      const z = y - x;

      if (panelOrPair == 'DRAPERYPANEL') {
            if (z > 0.9) {
                  return Math.floor(x);
            } else {
                  return Math.ceil(x);
            }
      } else if (panelOrPair == 'DRAPERYPAIR') {
            if (z > 0.9) {
                  return Math.floor(x);
            } else {
                  return Math.ceil(x);
            }
      } else {
            console.log('- please specify panel or pair');
      }
}

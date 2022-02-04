export function calculateCOM(totalWidths, cutLength, fabricNeededForRepeat) {
      console.log('calculateCOM() start');

      const x = (totalWidths * (cutLength + fabricNeededForRepeat)) / 36;

      console.log('- returning', x);
      return x.toFixed(2);

      //return (Math.ceil(x * 4) / 4).toFixed(2); rounds COM to nearest 1/4 of a yard
}
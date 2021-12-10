export function calculateCOM(totalWidths, cutLength, fabricNeededForRepeat) {
      console.log('calculateCOM() start');

      const x = (totalWidths * (cutLength + fabricNeededForRepeat)) / 36;

      console.log('- returning', x);
      return x.toFixed(2);

      //return (Math.ceil(x * 4) / 4).toFixed(2); rounds COM to nearest 1/4 of a yard
}

////////////////// maybe a pleat calculation? pulled from page 1 of scanned doc from Lori

// const pleatToPerSide = finishedWidth / numberOfPanels;
// console.log("--",pleatToPerSide);
// const totalNumberOfFabricInchesPerSide = totalWidths * boltWidth;
// console.log("--",totalNumberOfFabricInchesPerSide);
// const sideHems = 6;

// return totalNumberOfFabricInchesPerSide - sideHems - pleatToPerSide;

////////////////////////// old way of calculating COM yardage based on table

// const numberOfRepeats = widths - 1;
// const additionalYardsRequiredForRepeat = (numberOfRepeats * repeat) / 36;

// console.log(
//   "-- additional yardage needed for repeat: ",
//   additionalYardsRequiredForRepeat
// );

// if (length >= 0 && length < 16) {
//   return widths + additionalYardsRequiredForRepeat;
// } else if (length >= 16 && length < 36) {
//   return (widths * 1.5 + additionalYardsRequiredForRepeat).toFixed(1);
// } else if (length >= 36 && length < 48) {
//   return (widths * 1.9 + additionalYardsRequiredForRepeat).toFixed(1);
// } else if (length >= 48 && length < 60) {
//   return (widths * 2.2 + additionalYardsRequiredForRepeat).toFixed(1);
// } else if (length >= 60 && length < 72) {
//   return (widths * 2.5 + additionalYardsRequiredForRepeat).toFixed(1);
// } else if (length >= 72 && length < 84) {
//   return (widths * 2.9 + additionalYardsRequiredForRepeat).toFixed(1);
// } else if (length >= 84 && length < 96) {
//   return (widths * 3.2 + additionalYardsRequiredForRepeat).toFixed(1);
// } else if (length >= 96 && length < 108) {
//   return (widths * 3.5 + additionalYardsRequiredForRepeat).toFixed(1);
// } else if (length >= 108 && length < 120) {
//   return (widths * 3.9 + additionalYardsRequiredForRepeat).toFixed(1);
// } else if (length >= 120 && length < 132) {
//   return (widths * 4.2 + additionalYardsRequiredForRepeat).toFixed(1);
// } else if (length >= 132 && length < 144) {
//   return (widths * 4.5 + additionalYardsRequiredForRepeat).toFixed(1);
// } else {
//   console.log("-- calculateCOM() failed: length out of bounds");
// }

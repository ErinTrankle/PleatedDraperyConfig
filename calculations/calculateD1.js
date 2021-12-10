//calculate D1 - Draperies and Valances retail price

export function calculateD1(
      pricePoint,
      lining,
      totalWidths,
      finishedLength,
      COM
) {
      console.log('calculateD1() start');

      if (finishedLength == 0) {
            return 0;
      }

      if (COM == false) {
            ////////////// UNLINED CALCULATIONS ////////////////
            if (lining == false) {
                  ////////////// <= 108 ////////////////
                  if (finishedLength <= 108) {
                        let finishedLengthRounded;
                        if (finishedLength == 0) {
                              return 0;
                        } else if (finishedLength <= 16) {
                              finishedLengthRounded = 16;
                        } else if (
                              finishedLength > 16 &&
                              finishedLength <= 36
                        ) {
                              finishedLengthRounded = 36;
                        } else if (
                              finishedLength > 36 &&
                              finishedLength <= 48
                        ) {
                              finishedLengthRounded = 48;
                        } else if (
                              finishedLength > 48 &&
                              finishedLength <= 60
                        ) {
                              finishedLengthRounded = 60;
                        } else if (
                              finishedLength > 60 &&
                              finishedLength <= 72
                        ) {
                              finishedLengthRounded = 72;
                        } else if (
                              finishedLength > 72 &&
                              finishedLength <= 84
                        ) {
                              finishedLengthRounded = 84;
                        } else if (
                              finishedLength > 84 &&
                              finishedLength <= 96
                        ) {
                              finishedLengthRounded = 96;
                        } else if (
                              finishedLength > 96 &&
                              finishedLength <= 108
                        ) {
                              finishedLengthRounded = 108;
                        } else {
                              return null;
                        }
                        let x = Math.round(
                              (totalWidths * 27.14 +
                                    ((finishedLengthRounded + 18) / 36) *
                                          pricePoint *
                                          totalWidths) *
                                    2
                        );
                        return x;
                  }
                  ////////////// > 108 <= 120 ////////////////
                  else if (finishedLength > 108 && finishedLength <= 120) {
                        let x = Math.round(
                              (totalWidths * 29.85 +
                                    totalWidths * 1 +
                                    ((120 + 18) / 36) *
                                          pricePoint *
                                          totalWidths) *
                                    2
                        );
                        return x;
                  }
                  ////////////// > 120 ////////////////
                  else if (finishedLength > 120) {
                        let x = Math.round(
                              (totalWidths * 29.85 +
                                    totalWidths * 1 +
                                    ((120 + 18) / 36) *
                                          pricePoint *
                                          totalWidths) *
                                    2
                        );
                        let extraCostPer12Inches =
                              ((12 / 36) * pricePoint * totalWidths +
                                    7.76 * totalWidths) *
                              2;
                        console.log(
                              '- extraCostPer12Inches',
                              extraCostPer12Inches
                        );
                        let multiplier = Math.ceil((finishedLength - 120) / 12);
                        let extraCost = Math.round(
                              extraCostPer12Inches * multiplier
                        );
                        return x + extraCost;
                  } else {
                        console.log('- finishedLength is out of scope');
                  }
            }
            ////////////// LINED CALCULATIONS ////////////////
            else if (lining == true) {
                  ////////////// <= 108 ////////////////
                  if (finishedLength <= 108) {
                        let finishedLengthRounded;
                        if (finishedLength == 0) {
                              return 0;
                        } else if (finishedLength <= 16) {
                              finishedLengthRounded = 16;
                        } else if (
                              finishedLength > 16 &&
                              finishedLength <= 36
                        ) {
                              finishedLengthRounded = 36;
                        } else if (
                              finishedLength > 36 &&
                              finishedLength <= 48
                        ) {
                              finishedLengthRounded = 48;
                        } else if (
                              finishedLength > 48 &&
                              finishedLength <= 60
                        ) {
                              finishedLengthRounded = 60;
                        } else if (
                              finishedLength > 60 &&
                              finishedLength <= 72
                        ) {
                              finishedLengthRounded = 72;
                        } else if (
                              finishedLength > 72 &&
                              finishedLength <= 84
                        ) {
                              finishedLengthRounded = 84;
                        } else if (
                              finishedLength > 84 &&
                              finishedLength <= 96
                        ) {
                              finishedLengthRounded = 96;
                        } else if (
                              finishedLength > 96 &&
                              finishedLength <= 108
                        ) {
                              finishedLengthRounded = 108;
                        } else {
                              return null;
                        }

                        let x = Math.round(
                              (totalWidths * 31.17 +
                                    (((finishedLengthRounded + 14) / 36) *
                                          pricePoint +
                                          ((finishedLengthRounded + 14) / 36) *
                                                3.75) *
                                          totalWidths) *
                                    2
                        );
                        return x;
                  }
                  ////////////// > 108 <= 120 ////////////////
                  else if (finishedLength > 108 && finishedLength <= 120) {
                        let x = Math.round(
                              (totalWidths * 34.29 +
                                    (((120 + 14) / 36) * pricePoint +
                                          ((120 + 18) / 36) * 3.75) *
                                          totalWidths) *
                                    2
                        );
                        return x;
                  }
                  ////////////// > 120 ////////////////
                  else if (finishedLength > 120) {
                        let x = Math.round(
                              (totalWidths * 34.29 +
                                    (((120 + 14) / 36) * pricePoint +
                                          ((120 + 18) / 36) * 3.75) *
                                          totalWidths) *
                                    2
                        );

                        let extraCostPer12Inches =
                              ((12 / 36) * pricePoint * totalWidths +
                                    (12 / 36) * 3.75 * totalWidths +
                                    7.53 * totalWidths) *
                              2;
                        console.log(
                              'extraCostPer12Inches:',
                              extraCostPer12Inches
                        );
                        let multiplier = Math.ceil((finishedLength - 120) / 12);
                        let extraCost = Math.ceil(
                              extraCostPer12Inches * multiplier
                        );

                        return x + extraCost;
                  } else {
                        console.log('finishedLength is out of scope.');
                  }
            } else {
                  console.log('- no lining');
            }
      } else if (COM == true) {
            console.log('- COM is true');
            ////////////// UNLINED CALCULATIONS ////////////////
            if (lining == false) {
                  ////////////// <= 108 ////////////////
                  if (finishedLength <= 108) {
                        let finishedLengthRounded;
                        if (finishedLength == 0) {
                              return 0;
                        } else if (finishedLength <= 16) {
                              finishedLengthRounded = 16;
                        } else if (
                              finishedLength > 16 &&
                              finishedLength <= 36
                        ) {
                              finishedLengthRounded = 36;
                        } else if (
                              finishedLength > 36 &&
                              finishedLength <= 48
                        ) {
                              finishedLengthRounded = 48;
                        } else if (
                              finishedLength > 48 &&
                              finishedLength <= 60
                        ) {
                              finishedLengthRounded = 60;
                        } else if (
                              finishedLength > 60 &&
                              finishedLength <= 72
                        ) {
                              finishedLengthRounded = 72;
                        } else if (
                              finishedLength > 72 &&
                              finishedLength <= 84
                        ) {
                              finishedLengthRounded = 84;
                        } else if (
                              finishedLength > 84 &&
                              finishedLength <= 96
                        ) {
                              finishedLengthRounded = 96;
                        } else if (
                              finishedLength > 96 &&
                              finishedLength <= 108
                        ) {
                              finishedLengthRounded = 108;
                        } else {
                              return null;
                        }
                        let x = Math.round(
                              (totalWidths * 35.09 +
                                    ((finishedLengthRounded + 18) / 36) *
                                          0 *
                                          totalWidths) *
                                    2
                        );
                        return x;
                  }
                  ////////////// > 108 <= 120 ////////////////
                  else if (finishedLength > 108 && finishedLength <= 120) {
                        let x = Math.round(
                              (totalWidths * 38.6 +
                                    totalWidths * 1 +
                                    ((120 + 18) / 36) * 0 * totalWidths) *
                                    2
                        );
                        return x;
                  }
                  ////////////// > 120 ////////////////

                  //first get the base cost of 120
                  else if (finishedLength > 120) {
                        let x = Math.round(
                              (totalWidths * 38.6 +
                                    totalWidths * 1 +
                                    ((120 + 18) / 36) * 0 * totalWidths) *
                                    2
                        );
                        let extraCostPer12Inches = Math.round(
                              totalWidths * 8.63 * 2
                        );
                        let multiplier = Math.ceil((finishedLength - 120) / 12);
                        let extraCost = Math.round(
                              extraCostPer12Inches * multiplier
                        );
                        return x + extraCost;
                  } else {
                        console.log('- finishedLength is out of scope');
                  }
            }
            ////////////// LINED CALCULATIONS ////////////////
            else if (lining == true) {
                  ////////////// <= 108 ////////////////
                  if (finishedLength <= 108) {
                        let finishedLengthRounded;
                        if (finishedLength == 0) {
                              return 0;
                        } else if (finishedLength <= 16) {
                              finishedLengthRounded = 16;
                        } else if (
                              finishedLength > 16 &&
                              finishedLength <= 36
                        ) {
                              finishedLengthRounded = 36;
                        } else if (
                              finishedLength > 36 &&
                              finishedLength <= 48
                        ) {
                              finishedLengthRounded = 48;
                        } else if (
                              finishedLength > 48 &&
                              finishedLength <= 60
                        ) {
                              finishedLengthRounded = 60;
                        } else if (
                              finishedLength > 60 &&
                              finishedLength <= 72
                        ) {
                              finishedLengthRounded = 72;
                        } else if (
                              finishedLength > 72 &&
                              finishedLength <= 84
                        ) {
                              finishedLengthRounded = 84;
                        } else if (
                              finishedLength > 84 &&
                              finishedLength <= 96
                        ) {
                              finishedLengthRounded = 96;
                        } else if (
                              finishedLength > 96 &&
                              finishedLength <= 108
                        ) {
                              finishedLengthRounded = 108;
                        } else {
                              return null;
                        }

                        let x = Math.round(
                              (totalWidths * 38.9 +
                                    (((finishedLengthRounded + 14) / 36) * 0 +
                                          ((finishedLengthRounded + 14) / 36) *
                                                3.75) *
                                          totalWidths) *
                                    2
                        );
                        return x;
                  }
                  ////////////// > 108 <= 120 ////////////////
                  else if (finishedLength > 108 && finishedLength <= 120) {
                        let x = Math.round(
                              (totalWidths * 42.79 +
                                    (((120 + 14) / 36) * 0 +
                                          ((120 + 18) / 36) * 3.75) *
                                          totalWidths) *
                                    2
                        );
                        return x;
                  }
                  ////////////// > 120 ////////////////

                  //first calculate the base cost for 120
                  else if (finishedLength > 120) {
                        let x = Math.round(
                              (totalWidths * 42.79 +
                                    (((120 + 14) / 36) * 0 +
                                          ((120 + 18) / 36) * 3.75) *
                                          totalWidths) *
                                    2
                        );

                        //now calculate the extra inches
                        let extraCostPer12Inches =
                              Math.round(
                                    ((totalWidths * 12) / 36) * 3.75 +
                                          10.78 * totalWidths
                              ) * 2;
                        console.log(
                              'extraCostPer12Inches:',
                              extraCostPer12Inches
                        );
                        let multiplier = Math.ceil((finishedLength - 120) / 12);
                        let extraCost = Math.ceil(
                              extraCostPer12Inches * multiplier
                        );

                        return x + extraCost;
                  } else {
                        console.log('- finishedLength is out of scope');
                  }
            } else {
                  console.log('- no lining');
            }
      } else {
            console.log('- no COM value');
      }
}

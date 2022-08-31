//calculate D1 - Draperies and Valances retail price
import pleatedDraperyLabor from "../data/pleatedDraperyLabor.json" assert { type: "json" };

export function calculateD1(
  pricePoint,
  lining,
  totalWidths,
  finishedLength,
  COM
) {
  console.log("calculateD1() start");

  const unlinedLaborZeroTo108 = pleatedDraperyLabor["unlinedLaborZeroTo108"];
  const linedLaborZeroTo108 = pleatedDraperyLabor["linedLaborZeroTo108"];
  const unlinedLabor108to120 = pleatedDraperyLabor["unlinedLabor108to120"];
  const linedLabor108to120 = pleatedDraperyLabor["linedLabor108to120"];
  const unlinedLabor120to132 = pleatedDraperyLabor["unlinedLabor120to132"];
  const linedLabor120to132 = pleatedDraperyLabor["linedLabor120to132"];
  const unlinedLabor132to144 = pleatedDraperyLabor["unlinedLabor132to144"];
  const linedLabor132to144 = pleatedDraperyLabor["linedLabor132to144"];
  const unlinedEachAdditional12 =
    pleatedDraperyLabor["unlinedEachAdditional12"];
  const linedEachAdditional12 = pleatedDraperyLabor["linedEachAdditional12"];
  const liningCost = pleatedDraperyLabor["liningCost"];
  const COMunlinedLaborZeroTo108 =
    pleatedDraperyLabor["COMunlinedLaborZeroTo108"];
  const COMlinedLaborZeroTo108 = pleatedDraperyLabor["COMlinedLaborZeroTo108"];
  const COMunlinedLabor108to120 =
    pleatedDraperyLabor["COMunlinedLabor108to120"];
  const COMlinedLabor108to120 = pleatedDraperyLabor["COMlinedLabor108to120"];
  const COMunlinedLabor120to132 =
    pleatedDraperyLabor["COMunlinedLabor120to132"];
  const COMlinedLabor120to132 = pleatedDraperyLabor["COMlinedLabor120to132"];
  const COMunlinedLabor132to144 =
    pleatedDraperyLabor["COMunlinedLabor132to144"];
  const COMlinedLabor132to144 = pleatedDraperyLabor["COMlinedLabor132to144"];
  const COMunlinedEachAdditional12 =
    pleatedDraperyLabor["COMunlinedEachAdditional12"];
  const COMlinedEachAdditional12 =
    pleatedDraperyLabor["COMlinedEachAdditional12"];
  const COMliningCost = pleatedDraperyLabor["COMliningCost"];

  if (finishedLength == 0) {
    return 0;
  }

  if (COM == false) {
    console.log("- COM false");
    ////////////// UNLINED CALCULATIONS ////////////////
    if (lining == false) {
      console.log("- lining false");
      ////////////// <= 108 ////////////////
      if (finishedLength <= 108) {
        let finishedLengthRounded;
        if (finishedLength == 0) {
          return 0;
        } else if (finishedLength <= 16) {
          finishedLengthRounded = 16;
        } else if (finishedLength > 16 && finishedLength <= 36) {
          finishedLengthRounded = 36;
        } else if (finishedLength > 36 && finishedLength <= 48) {
          finishedLengthRounded = 48;
        } else if (finishedLength > 48 && finishedLength <= 60) {
          finishedLengthRounded = 60;
        } else if (finishedLength > 60 && finishedLength <= 72) {
          finishedLengthRounded = 72;
        } else if (finishedLength > 72 && finishedLength <= 84) {
          finishedLengthRounded = 84;
        } else if (finishedLength > 84 && finishedLength <= 96) {
          finishedLengthRounded = 96;
        } else if (finishedLength > 96 && finishedLength <= 108) {
          finishedLengthRounded = 108;
        } else {
          return null;
        }
        let x = Math.round(
          (totalWidths * unlinedLaborZeroTo108 +
            ((finishedLengthRounded + 18) / 36) * pricePoint * totalWidths) *
          2
        );

        /////// drapery surcharge
        if (totalWidths == 1) {
          return Math.round(x * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(x * 1.1);
        } else {
          return x;
        }
      }


      ////////////// > 108 <= 120 ////////////////
      else if (finishedLength > 108 && finishedLength <= 120) {
        let x = Math.round(
          (totalWidths * unlinedLabor108to120 +
            totalWidths * 1 +
            ((120 + 18) / 36) * pricePoint * totalWidths) *
          2
        );

        // drapery surcharge
        if (totalWidths == 1) {
          return Math.round(x * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(x * 1.1);
        } else {
          return x;
        }
      }
      ////////////// > 120 ////////////////
      else if (finishedLength > 120) {
        //get base cost of first 120 inches
        let x = Math.round(
          (totalWidths * unlinedLabor108to120 +
            totalWidths * 1 +
            ((120 + 18) / 36) * pricePoint * totalWidths) *
          2
        );
        //calculate the cost for each additional 12 inches
        let extraCostPer12Inches =
          ((12 / 36) * pricePoint * totalWidths +
            unlinedEachAdditional12 * totalWidths) *
          2;
        //calculate the quantity of 12 inch increments
        let multiplier = Math.ceil((finishedLength - 120) / 12);
        //calculate the additional cost
        let extraCost = Math.round(extraCostPer12Inches * multiplier);

        let y = x + extraCost;

        // drapery surcharge
        if (totalWidths == 1) {
          return Math.round(y * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(y * 1.1);
        } else {
          return y;
        }
      } else {
        console.log("- finishedLength is out of scope");
      }
    }


    ////////////// LINED CALCULATIONS ////////////////
    else if (lining == true) {
      console.log("- lining true");
      ////////////// <= 108 ////////////////
      if (finishedLength <= 108) {
        let finishedLengthRounded;
        if (finishedLength == 0) {
          return 0;
        } else if (finishedLength <= 16) {
          finishedLengthRounded = 16;
        } else if (finishedLength > 16 && finishedLength <= 36) {
          finishedLengthRounded = 36;
        } else if (finishedLength > 36 && finishedLength <= 48) {
          finishedLengthRounded = 48;
        } else if (finishedLength > 48 && finishedLength <= 60) {
          finishedLengthRounded = 60;
        } else if (finishedLength > 60 && finishedLength <= 72) {
          finishedLengthRounded = 72;
        } else if (finishedLength > 72 && finishedLength <= 84) {
          finishedLengthRounded = 84;
        } else if (finishedLength > 84 && finishedLength <= 96) {
          finishedLengthRounded = 96;
        } else if (finishedLength > 96 && finishedLength <= 108) {
          finishedLengthRounded = 108;
        } else {
          return null;
        }

        let x = Math.round(
          (totalWidths * linedLaborZeroTo108 +
            (((finishedLengthRounded + 14) / 36) * pricePoint +
              ((finishedLengthRounded + 14) / 36) * liningCost) *
            totalWidths) *
          2
        );
        /////// drapery surcharge
        if (totalWidths == 1) {
          return Math.round(x * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(x * 1.1);
        } else {
          return x;
        }
      }
      ////////////// > 108 <= 120 ////////////////
      else if (finishedLength > 108 && finishedLength <= 120) {
        let x = Math.round(
          (totalWidths * linedLabor108to120 +
            (((120 + 14) / 36) * pricePoint + ((120 + 18) / 36) * liningCost) *
            totalWidths) *
          2
        );

        /////// drapery surcharge
        if (totalWidths == 1) {
          return Math.round(x * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(x * 1.1);
        } else {
          return x;
        }
      }

      ////////////// > 120 ////////////////
      else if (finishedLength > 120) {
        let x = Math.round(
          (totalWidths * linedLabor108to120 +
            (((120 + 14) / 36) * pricePoint + ((120 + 18) / 36) * liningCost) *
            totalWidths) *
          2
        );

        let extraCostPer12Inches =
          ((12 / 36) * pricePoint * totalWidths +
            (12 / 36) * liningCost * totalWidths +
            linedEachAdditional12 * totalWidths) *
          2;

        let multiplier = Math.ceil((finishedLength - 120) / 12);
        let extraCost = Math.ceil(extraCostPer12Inches * multiplier);

        let y = x + extraCost;

        /////// drapery surcharge
        if (totalWidths == 1) {
          return Math.round(y * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(y * 1.1);
        } else {
          return y;
        }
      } else {
        console.log("- finishedLength is out of scope");
      }
    } else {
      console.log("- no lining");
    }
  } else if (COM == true) {
    console.log("- COM is true");
    ////////////// UNLINED CALCULATIONS ////////////////
    if (lining == false) {
      console.log("- lining false");
      if (finishedLength <= 108) {
        let finishedLengthRounded;
        if (finishedLength == 0) {
          return 0;
        } else if (finishedLength <= 16) {
          finishedLengthRounded = 16;
        } else if (finishedLength > 16 && finishedLength <= 36) {
          finishedLengthRounded = 36;
        } else if (finishedLength > 36 && finishedLength <= 48) {
          finishedLengthRounded = 48;
        } else if (finishedLength > 48 && finishedLength <= 60) {
          finishedLengthRounded = 60;
        } else if (finishedLength > 60 && finishedLength <= 72) {
          finishedLengthRounded = 72;
        } else if (finishedLength > 72 && finishedLength <= 84) {
          finishedLengthRounded = 84;
        } else if (finishedLength > 84 && finishedLength <= 96) {
          finishedLengthRounded = 96;
        } else if (finishedLength > 96 && finishedLength <= 108) {
          finishedLengthRounded = 108;
        } else {
          return null;
        }
        let x = Math.round(
          (totalWidths * COMunlinedLaborZeroTo108 +
            ((finishedLengthRounded + 18) / 36) * 0 * totalWidths) *
          2
        );

        /////// drapery surcharge
        if (totalWidths == 1) {
          return Math.round(x * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(x * 1.1);
        } else {
          return x;
        }
      }
      ////////////// > 108 <= 120 ////////////////
      else if (finishedLength > 108 && finishedLength <= 120) {
        // let x = Math.round(
        //   (totalWidths * COMunlinedLabor108to120 +
        //     ((120 + 18) / 36) * 0 * totalWidths) *
        //     2
        // );

        let x = Math.round(
          ((totalWidths * COMunlinedLabor108to120) + (totalWidths * 1)) * 2
        );


        /////// drapery surcharge
        if (totalWidths == 1) {
          return Math.round(x * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(x * 1.1);
        } else {
          return x;
        }
      }

      ////////////// > 120 ////////////////
      else if (finishedLength > 120) {
        // get base cost for first 120 inches
        let x = Math.round(
          ((totalWidths * COMunlinedLabor108to120) + (totalWidths * 1)) * 2
        );
        // calculate cost for each additional 12 inches
        let extraCostPer12Inches = Math.round(
          totalWidths * COMunlinedEachAdditional12 * 2
        );
        // calculate how many extra 12 inch increments
        let multiplier = Math.ceil((finishedLength - 120) / 12);
        // caclulate additional cost
        let extraCost = Math.round(extraCostPer12Inches * multiplier);
        let y = x + extraCost;

        /////// drapery surcharge
        if (totalWidths == 1) {
          return Math.round(y * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(y * 1.1);
        } else {
          return y;
        }
      }



      else {
        console.log("- finishedLength is out of scope");
      }

    }
    ////////////// LINED CALCULATIONS ////////////////
    else if (lining == true) {
      console.log(" - lining true");
      if (finishedLength <= 108) {
        let finishedLengthRounded;
        if (finishedLength == 0) {
          return 0;
        } else if (finishedLength <= 16) {
          finishedLengthRounded = 16;
        } else if (finishedLength > 16 && finishedLength <= 36) {
          finishedLengthRounded = 36;
        } else if (finishedLength > 36 && finishedLength <= 48) {
          finishedLengthRounded = 48;
        } else if (finishedLength > 48 && finishedLength <= 60) {
          finishedLengthRounded = 60;
        } else if (finishedLength > 60 && finishedLength <= 72) {
          finishedLengthRounded = 72;
        } else if (finishedLength > 72 && finishedLength <= 84) {
          finishedLengthRounded = 84;
        } else if (finishedLength > 84 && finishedLength <= 96) {
          finishedLengthRounded = 96;
        } else if (finishedLength > 96 && finishedLength <= 108) {
          finishedLengthRounded = 108;
        } else {
          return null;
        }
        let x = Math.round(
          (totalWidths * COMlinedLaborZeroTo108 +
            (((finishedLengthRounded + 14) / 36) * 0 +
              ((finishedLengthRounded + 14) / 36) * COMliningCost) *
            totalWidths) *
          2
        );
        /////// drapery surcharge
        if (totalWidths == 1) {
          return Math.round(x * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(x * 1.1);
        } else {
          return x;
        }
      }

      ////////////// > 108 <= 120 ////////////////
      else if (finishedLength > 108 && finishedLength <= 120) {
        let x = Math.round(
          (totalWidths * COMlinedLabor108to120 +
            (((120 + 14) / 36) * 0 + ((120 + 18) / 36) * COMliningCost) *
            totalWidths) *
          2
        );
        /////// drapery surcharge
        if (totalWidths == 1) {
          return Math.round(x * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(x * 1.1);
        } else {
          return x;
        }
      }

      ////////////// > 120 ////////////////
      else if (finishedLength > 120) {
        let x = Math.round(
          (totalWidths * COMlinedLabor108to120 +
            (((120 + 14) / 36) * 0 + ((120 + 18) / 36) * COMliningCost) *
            totalWidths) *
          2
        );
        let extraCostPer12Inches = Math.round((((totalWidths * 12) / 36) * COMliningCost) + (COMlinedEachAdditional12 * totalWidths)) * 2;


        let multiplier = Math.ceil((finishedLength - 120) / 12);
        let extraCost = Math.ceil(extraCostPer12Inches * multiplier);

        let y = x + extraCost;

        /////// drapery surcharge
        if (totalWidths == 1) {
          return Math.round(y * 1.2);
        } else if (totalWidths == 2) {
          return Math.round(y * 1.1);
        } else {
          return y;
        }
      } else {
        console.log("- finishedLength is out of scope");
      }
    } else {
      console.log("- no lining value provided");
    }
  } else {
    console.log("- no COM value");
  }
}

// D3 special pleat surcharge - imported by calculatePleat.js

export function calculateD3(totalWidths, COM) {
      console.log('calculateD3() start');

      if (COM == true) {
            switch (totalWidths) {
                  case 1:
                        return 71;
                  case 2:
                        return 142;
                  case 3:
                        return 212;
                  case 4:
                        return 283;
                  case 5:
                        return 354;
                  case 6:
                        return 425;
                  case 7:
                        return 496;
                  case 8:
                        return 566;
                  case 9:
                        return 637;
                  case 10:
                        return 708;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
      }
      } else if (COM == false) {
            switch (totalWidths) {
                  case 1:
                        return 62;
                  case 2:
                        return 125;
                  case 3:
                        return 187;
                  case 4:
                        return 250;
                  case 5:
                        return 312;
                  case 6:
                        return 375;
                  case 7:
                        return 437;
                  case 8:
                        return 500;
                  case 9:
                        return 562;
                  case 10:
                        return 625;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else {
            console.log('- COM is null');
      }
}

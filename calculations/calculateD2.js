// D2 - one and two prong pleats - imported by calculatePleat.js

export function calculateD2(totalWidths, COM) {
      console.log('calculateD2() start');

      if (COM == true) {
            switch (totalWidths) {
                  case 1:
                        return 35;
                  case 2:
                        return 71;
                  case 3:
                        return 106;
                  case 4:
                        return 142;
                  case 5:
                        return 177;
                  case 6:
                        return 212;
                  case 7:
                        return 248;
                  case 8:
                        return 283;
                  case 9:
                        return 319;
                  case 10:
                        return 354;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else if (COM == false) {
            switch (totalWidths) {
                  case 1:
                        return 31;
                  case 2:
                        return 63;
                  case 3:
                        return 94;
                  case 4:
                        return 125;
                  case 5:
                        return 156;
                  case 6:
                        return 188;
                  case 7:
                        return 219;
                  case 8:
                        return 250;
                  case 9:
                        return 281;
                  case 10:
                        return 313;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else {
            console.log('- COM is null');
      }
}

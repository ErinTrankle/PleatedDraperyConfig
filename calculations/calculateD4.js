// D4 special pleat surcharge - imported by calculatePleat.js

export function calculateD4(totalWidths, COM) {
      console.log('calculateD4() start');

      if (COM == true) {
            switch (totalWidths) {
                  case 1:
                        return 210;
                  case 2:
                        return 421;
                  case 3:
                        return 631;
                  case 4:
                        return 842;
                  case 5:
                        return 1052;
                  case 6:
                        return 1263;
                  case 7:
                        return 1473;
                  case 8:
                        return 1684;
                  case 9:
                        return 1894;
                  case 10:
                        return 2105;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
      }
      } else if (COM == false) {
            switch (totalWidths) {
                  case 1:
                        return 186;
                  case 2:
                        return 372;
                  case 3:
                        return 557;
                  case 4:
                        return 743;
                  case 5:
                        return 929;
                  case 6:
                        return 1115;
                  case 7:
                        return 1301;
                  case 8:
                        return 1486;
                  case 9:
                        return 1672;
                  case 10:
                        return 1858;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else {
            console.log('- COM is null');
      }
}

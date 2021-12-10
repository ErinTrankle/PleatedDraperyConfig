// D2 - one and two prong pleats

export function calculateD2(totalWidths, COM) {
      console.log('calculateD2() start');

      if (COM == true) {
            switch (totalWidths) {
                  case 1:
                        return 28;
                  case 2:
                        return 55;
                  case 3:
                        return 83;
                  case 4:
                        return 111;
                  case 5:
                        return 138;
                  case 6:
                        return 166;
                  case 7:
                        return 194;
                  case 8:
                        return 221;
                  case 9:
                        return 249;
                  case 10:
                        return 277;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else if (COM == false) {
            switch (totalWidths) {
                  case 1:
                        return 25;
                  case 2:
                        return 50;
                  case 3:
                        return 76;
                  case 4:
                        return 101;
                  case 5:
                        return 126;
                  case 6:
                        return 151;
                  case 7:
                        return 176;
                  case 8:
                        return 202;
                  case 9:
                        return 227;
                  case 10:
                        return 252;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else {
            console.log('- COM is null');
      }
}

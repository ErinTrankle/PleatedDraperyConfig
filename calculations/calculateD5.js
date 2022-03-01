// D5 horizontal trimming

export function calculateD5(totalWidths, COM) {
      console.log('calculateD5() start');

      if (COM == true) {
            switch (totalWidths) {
                  case 1:
                        return 42;
                  case 2:
                        return 84;
                  case 3:
                        return 126;
                  case 4:
                        return 168;
                  case 5:
                        return 210;
                  case 6:
                        return 253;
                  case 7:
                        return 295;
                  case 8:
                        return 337;
                  case 9:
                        return 379;
                  case 10:
                        return 421;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else if (COM == false) {
            switch (totalWidths) {
                  case 1:
                        return 37;
                  case 2:
                        return 74;
                  case 3:
                        return 111;
                  case 4:
                        return 149;
                  case 5:
                        return 186;
                  case 6:
                        return 223;
                  case 7:
                        return 260;
                  case 8:
                        return 297;
                  case 9:
                        return 334;
                  case 10:
                        return 371;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else {
            console.log('- COM is null');
      }
}

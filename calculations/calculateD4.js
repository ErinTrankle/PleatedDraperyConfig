// D4 

export function calculateD4(totalWidths, COM) {
      console.log('calculateD4() start');

      if (COM == true) {
            switch (totalWidths) {
                  case 1:
                        return 164;
                  case 2:
                        return 329;
                  case 3:
                        return 493;
                  case 4:
                        return 658;
                  case 5:
                        return 822;
                  case 6:
                        return 987;
                  case 7:
                        return 1151;
                  case 8:
                        return 1316;
                  case 9:
                        return 1480;
                  case 10:
                        return 1644;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
      }
      } else if (COM == false) {
            switch (totalWidths) {
                  case 1:
                        return 150;
                  case 2:
                        return 300;
                  case 3:
                        return 449;
                  case 4:
                        return 599;
                  case 5:
                        return 749;
                  case 6:
                        return 899;
                  case 7:
                        return 1049;
                  case 8:
                        return 1199;
                  case 9:
                        return 1348;
                  case 10:
                        return 1498;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else {
            console.log('- COM is null');
      }
}

// D5

export function calculateD5(totalWidths, COM) {
      console.log('calculateD5() start');

      if (COM == true) {
            switch (totalWidths) {
                  case 1:
                        return 33;
                  case 2:
                        return 66;
                  case 3:
                        return 99;
                  case 4:
                        return 132;
                  case 5:
                        return 164;
                  case 6:
                        return 197;
                  case 7:
                        return 230;
                  case 8:
                        return 263;
                  case 9:
                        return 296;
                  case 10:
                        return 329;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else if (COM == false) {
            switch (totalWidths) {
                  case 1:
                        return 30;
                  case 2:
                        return 60;
                  case 3:
                        return 90;
                  case 4:
                        return 120;
                  case 5:
                        return 150;
                  case 6:
                        return 180;
                  case 7:
                        return 210;
                  case 8:
                        return 240;
                  case 9:
                        return 270;
                  case 10:
                        return 300;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else {
            console.log('- COM is null');
      }
}

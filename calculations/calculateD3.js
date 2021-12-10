// D3 

export function calculateD3(totalWidths, COM) {
      console.log('calculateD3() start');

      if (COM == true) {
            switch (totalWidths) {
                  case 1:
                        return 55;
                  case 2:
                        return 111;
                  case 3:
                        return 166;
                  case 4:
                        return 221;
                  case 5:
                        return 277;
                  case 6:
                        return 332;
                  case 7:
                        return 387;
                  case 8:
                        return 443;
                  case 9:
                        return 498;
                  case 10:
                        return 553;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
      }
      } else if (COM == false) {
            switch (totalWidths) {
                  case 1:
                        return 50;
                  case 2:
                        return 101;
                  case 3:
                        return 151;
                  case 4:
                        return 202;
                  case 5:
                        return 252;
                  case 6:
                        return 302;
                  case 7:
                        return 353;
                  case 8:
                        return 403;
                  case 9:
                        return 454;
                  case 10:
                        return 504;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else {
            console.log('- COM is null');
      }
}

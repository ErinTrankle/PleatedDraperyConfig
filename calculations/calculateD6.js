// D6 pleat surcharge for certain styles - imported by calculatePleat.js

export function calculateD6(totalWidths, COM, pricePoint) {
      console.log('calculateD6() start');

      if (COM == true) {
            switch (totalWidths) {
                  case 1:
                        return 63;
                  case 2:
                        return 126;
                  case 3:
                        return 189;
                  case 4:
                        return 253;
                  case 5:
                        return 316;
                  case 6:
                        return 379;
                  case 7:
                        return 442;
                  case 8:
                        return 505;
                  case 9:
                        return 568;
                  case 10:
                        return 631;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else if (COM == false) {
            switch (totalWidths) {
                  case 1:
                        return Math.round(((pricePoint*0.5)+27.87)*2);
                  case 2:
                        return Math.round(((pricePoint*0.75)+55.73)*2);
                  case 3:
                        return Math.round(((pricePoint*1.25)+83.60)*2);
                  case 4:
                        return Math.round(((pricePoint*1.75)+111.47)*2);
                  case 5:
                        return Math.round(((pricePoint*2.25)+139.33)*2);
                  case 6:
                        return Math.round(((pricePoint*2.5)+167.20)*2);
                  case 7:
                        return Math.round(((pricePoint*3)+195.07)*2);
                  case 8:
                        return Math.round(((pricePoint*3.5)+222.93)*2);
                  case 9:
                        return Math.round(((pricePoint*3.75)+250.80)*2);
                  case 10:
                        return Math.round(((pricePoint*4.25)+278.67)*2);
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else {
            console.log('- COM is null');
      }
}

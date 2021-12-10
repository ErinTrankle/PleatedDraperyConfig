// D6

export function calculateD6(totalWidths, COM, pricePoint) {
      console.log('calculateD6() start');

      if (COM == true) {
            switch (totalWidths) {
                  case 1:
                        return 49;
                  case 2:
                        return 99;
                  case 3:
                        return 148;
                  case 4:
                        return 197;
                  case 5:
                        return 247;
                  case 6:
                        return 296;
                  case 7:
                        return 345;
                  case 8:
                        return 395;
                  case 9:
                        return 444;
                  case 10:
                        return 493;
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else if (COM == false) {
            switch (totalWidths) {
                  case 1:
                        return Math.round(((pricePoint*0.5)+22.47)*2);
                  case 2:
                        return Math.round(((pricePoint*0.75)+44.95)*2);
                  case 3:
                        return Math.round(((pricePoint*1.25)+67.42)*2);
                  case 4:
                        return Math.round(((pricePoint*1.75)+89.89)*2);
                  case 5:
                        return Math.round(((pricePoint*2.25)+112.37)*2);
                  case 6:
                        return Math.round(((pricePoint*2.5)+134.84)*2);
                  case 7:
                        return Math.round(((pricePoint*3)+157.31)*2);
                  case 8:
                        return Math.round(((pricePoint*3.5)+179.78)*2);
                  case 9:
                        return Math.round(((pricePoint*3.75)+202.26)*2);
                  case 10:
                        return Math.round(((pricePoint*4.25)+224.73)*2);
                  default:
                        console.log('- totalWidths out of scope');
                        return 0;
            }
      } else {
            console.log('- COM is null');
      }
}

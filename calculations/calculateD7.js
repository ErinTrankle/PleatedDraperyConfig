//interlining surcharge

export function calculateD7(totalWidths, interlining, COM) {
      console.log('calculateD7() start');

      if (interlining == true) {
            if (COM == true) {
                  switch (totalWidths) {
                        case 1:
                              return 80;
                        case 2:
                              return 143;
                        case 3:
                              return 209;
                        case 4:
                              return 287;
                        case 5:
                              return 362;
                        case 6:
                              return 438;
                        case 7:
                              return 513;
                        case 8:
                              return 581;
                        case 9:
                              return 656;
                        case 10:
                              return 724;
                        default:
                              console.log(
                                    '- invalid totalWidths. must be 1-10'
                              );
                              return 0;
                  }
            } else {
                  switch (totalWidths) {
                        case 1:
                              return 73;
                        case 2:
                              return 131;
                        case 3:
                              return 190;
                        case 4:
                              return 261;
                        case 5:
                              return 330;
                        case 6:
                              return 399;
                        case 7:
                              return 467;
                        case 8:
                              return 529;
                        case 9:
                              return 598;
                        case 10:
                              return 660;
                        default:
                              console.log(
                                    '- invalid total width. must be 1-10'
                              );
                              return 0;
                  }
            }
      } else {
            return 0;
      }
}

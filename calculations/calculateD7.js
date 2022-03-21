//interlining / blackout surcharge - both use D7

export function calculateD7(totalWidths, interliningOrBlackout, COM) {
      console.log('calculateD7() start');
      console.log('- ',totalWidths, interliningOrBlackout, COM);

      if (interliningOrBlackout == true || interliningOrBlackout == 'Blackout') {
            if (COM == true) {
                  switch (totalWidths) {
                        case 1:
                              return 103;
                        case 2:
                              return 183;
                        case 3:
                              return 267;
                        case 4:
                              return 367;
                        case 5:
                              return 463;
                        case 6:
                              return 560;
                        case 7:
                              return 657;
                        case 8:
                              return 743;
                        case 9:
                              return 840;
                        case 10:
                              return 927;
                        default:
                              console.log(
                                    '- invalid totalWidths. must be 1-10'
                              );
                              return 0;
                  }
            } else {
                  switch (totalWidths) {
                        case 1:
                              return 91;
                        case 2:
                              return 162;
                        case 3:
                              return 236;
                        case 4:
                              return 324;
                        case 5:
                              return 409;
                        case 6:
                              return 494;
                        case 7:
                              return 579;
                        case 8:
                              return 656;
                        case 9:
                              return 741;
                        case 10:
                              return 818;
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

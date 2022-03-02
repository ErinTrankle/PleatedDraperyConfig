//vertical trimming labor surcharge

export function calculateD9(finishedLength, COM, panelOrPair) {
      console.log('calculateD9() start');
      console.log('- ',finishedLength, COM, panelOrPair);
      var x;

      if (panelOrPair == 'DRAPERYPANEL') {
            x = 1;
      } else if (panelOrPair == 'DRAPERYPAIR') {
            x = 2;
      }

      if (COM == true) {
            if (finishedLength <= 36) {
                  return 31 * x;
            } else if (finishedLength > 36 && finishedLength <= 48) {
                  return 46 * x;
            } else if (finishedLength > 48 && finishedLength <= 60) {
                  return 54 * x;
            } else if (finishedLength > 60 && finishedLength <= 72) {
                  return 61 * x;
            } else if (finishedLength > 72 && finishedLength <= 84) {
                  return 77 * x;
            } else if (finishedLength > 84 && finishedLength <= 96) {
                  return 85 * x;
            } else if (finishedLength > 96 && finishedLength <= 108) {
                  return 92 * x;
            } else if (finishedLength > 108) {
                  let extra = Math.ceil((finishedLength - 108) / 12) * 15;
                  return (extra + 72) * x;
            }
      } else if (COM == false) {
            if (finishedLength <= 36) {
                  return 27 * x;
            } else if (finishedLength > 36 && finishedLength <= 48) {
                  return 41 * x;
            } else if (finishedLength > 48 && finishedLength <= 60) {
                  return 47 * x;
            } else if (finishedLength > 60 && finishedLength <= 72) {
                  return 54 * x;
            } else if (finishedLength > 72 && finishedLength <= 84) {
                  return 68 * x;
            } else if (finishedLength > 84 && finishedLength <= 96) {
                  return 75 * x;
            } else if (finishedLength > 96 && finishedLength <= 108) {
                  return 81 * x;
            } else if (finishedLength > 108) {
                  let extra = Math.ceil((finishedLength - 108) / 12) * 14;
                  return (extra + 72) * x;
            }
      } else {
            console.log('- COM is null');
      }
}

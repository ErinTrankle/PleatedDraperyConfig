//vertical trimming labor surcharge

export function calculateD9(finishedLength, COM, panelOrPair) {
      console.log('calculateD9() start');
      var x;

      if (panelOrPair == 'panel') {
            x = 1;
      } else if (panelOrPair == 'pair') {
            x = 2;
      }

      if (COM == true) {
            if (finishedLength <= 36) {
                  return 24 * x;
            } else if (finishedLength > 36 && finishedLength <= 48) {
                  return 36 * x;
            } else if (finishedLength > 48 && finishedLength <= 60) {
                  return 42 * x;
            } else if (finishedLength > 60 && finishedLength <= 72) {
                  return 48 * x;
            } else if (finishedLength > 72 && finishedLength <= 84) {
                  return 60 * x;
            } else if (finishedLength > 84 && finishedLength <= 96) {
                  return 66 * x;
            } else if (finishedLength > 96 && finishedLength <= 108) {
                  return 72 * x;
            } else if (finishedLength > 108) {
                  let extra = Math.ceil((finishedLength - 108) / 12) * 12;
                  return (extra + 72) * x;
            }
      } else if (COM == false) {
            if (finishedLength <= 36) {
                  return 22 * x;
            } else if (finishedLength > 36 && finishedLength <= 48) {
                  return 33 * x;
            } else if (finishedLength > 48 && finishedLength <= 60) {
                  return 38 * x;
            } else if (finishedLength > 60 && finishedLength <= 72) {
                  return 44 * x;
            } else if (finishedLength > 72 && finishedLength <= 84) {
                  return 55 * x;
            } else if (finishedLength > 84 && finishedLength <= 96) {
                  return 60 * x;
            } else if (finishedLength > 96 && finishedLength <= 108) {
                  return 66 * x;
            } else if (finishedLength > 108) {
                  let extra = Math.ceil((finishedLength - 108) / 12) * 11;
                  return (extra + 72) * x;
            }
      } else {
            console.log('- COM is null');
      }
}

export function calculateCutLength(finishedLength, lining) {
      console.log('calculateCutLength() start');
      var extraInches;
      if (finishedLength > 16) {
            if (lining == false) {
                  extraInches = 18;
            } else if (lining == true) {
                  extraInches = 13;
            }
      } else {
            extraInches = 10;
      }

      const cutLength = finishedLength + extraInches;
      console.log('- returning', cutLength);

      return cutLength;
}

export function calculateFabricNeededForRepeat(cutLength, repeat) {
      console.log('calculateFabricNeededForRepeat() start');

      var fabricNeededForRepeat = 0;

      if (repeat > 0) {
            fabricNeededForRepeat =
                  Math.ceil(cutLength / repeat) * repeat - cutLength;
      } else {
            fabricNeededForRepeat = 0;
      }

      console.log('- fabricNeededForRepeat:', fabricNeededForRepeat);

      return fabricNeededForRepeat;
}

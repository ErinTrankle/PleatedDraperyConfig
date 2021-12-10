// this function figures out how much to increase the price code by base on the repeat

export function calculateRepeatSurcharge(repeat) {
      console.log('calculateRepeatSurcharge() start');
      console.log(arguments);
      if (repeat < 3) {
            return 0;
      } else if (repeat >= 3 && repeat < 19) {
            return 1;
      } else if (repeat >= 19 && repeat < 27) {
            return 2;
      } else if (repeat >= 27 && repeat < 36) {
            return 3;
      } else if (repeat >= 36) {
            return 4;
      } else {
            console.log('- repeat is out of scope');
      }
}

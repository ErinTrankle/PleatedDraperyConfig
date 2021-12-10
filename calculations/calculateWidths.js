// this function calculates the total number of widths

export function calculateWidths(
      boltWidth,
      fullness,
      finishedWidth,
      panelOrPair
) {
      console.log('calculateWidths() start');

      const x = (finishedWidth * fullness) / boltWidth;
      const y = Math.ceil(x);
      const z = y - x;

      if (panelOrPair == 'panel') {
            if (z > 0.9) {
                  return Math.floor(x);
            } else {
                  return Math.ceil(x);
            }
      } else if (panelOrPair == 'pair') {
            if (z > 0.9) {
                  return Math.floor(x);
            } else {
                  return Math.ceil(x);
            }
      } else {
            console.log('- please specify panel or pair');
      }
}

// Switch statement was built before learning that the simple formula above would suffice.

// switch (boltWidth) {
//   case 48:
//     switch (fullness) {
//       case 2:
//         if (finishedWidth >= 21 && finishedWidth < 44) {
//           return 1;
//         } else if (finishedWidth >= 44 && finishedWidth < 71) {
//           return 2;
//         } else if (finishedWidth >= 71 && finishedWidth < 92) {
//           return 3;
//         } else if (finishedWidth >= 92 && finishedWidth < 115) {
//           return 4;
//         } else if (finishedWidth >= 115 && finishedWidth < 139) {
//           return 5;
//         } else if (finishedWidth >= 139 && finishedWidth < 162) {
//           return 6;
//         } else if (finishedWidth >= 162 && finishedWidth < 186) {
//           return 7;
//         } else if (finishedWidth >= 186 && finishedWidth < 209) {
//           return 8;
//         } else if (finishedWidth >= 209 && finishedWidth < 233) {
//           return 9;
//         } else if (finishedWidth >= 233) {
//           return 10;
//         } else {
//           console.log();
//         }
//         break;
//       case 2.5:
//         if (finishedWidth >= 17 && finishedWidth < 36) {
//           return 1;
//         } else if (finishedWidth >= 36 && finishedWidth < 57) {
//           return 2;
//         } else if (finishedWidth >= 57 && finishedWidth < 73) {
//           return 3;
//         } else if (finishedWidth >= 73 && finishedWidth < 92) {
//           return 4;
//         } else if (finishedWidth >= 92 && finishedWidth < 111) {
//           return 5;
//         } else if (finishedWidth >= 111 && finishedWidth < 138) {
//           return 6;
//         } else if (finishedWidth >= 138 && finishedWidth < 148) {
//           return 7;
//         } else if (finishedWidth >= 148 && finishedWidth < 167) {
//           return 8;
//         } else if (finishedWidth >= 167 && finishedWidth < 186) {
//           return 9;
//         } else if (finishedWidth >= 186) {
//           return 10;
//         } else {
//           console.log();
//         }
//         break;
//       case 3:
//         if (finishedWidth >= 14 && finishedWidth < 30) {
//           return 1;
//         } else if (finishedWidth >= 30 && finishedWidth < 47) {
//           return 2;
//         } else if (finishedWidth >= 47 && finishedWidth < 61) {
//           return 3;
//         } else if (finishedWidth >= 61 && finishedWidth < 77) {
//           return 4;
//         } else if (finishedWidth >= 77 && finishedWidth < 92) {
//           return 5;
//         } else if (finishedWidth >= 92 && finishedWidth < 108) {
//           return 6;
//         } else if (finishedWidth >= 108 && finishedWidth < 124) {
//           return 7;
//         } else if (finishedWidth >= 124 && finishedWidth < 139) {
//           return 8;
//         } else if (finishedWidth >= 139 && finishedWidth < 155) {
//           return 9;
//         } else if (finishedWidth >= 155) {
//           return 10;
//         } else {
//           console.log();
//         }
//         break;
//       default:
//         console.log();
//         break;
//     }
//     break;
//   case 54:
//     switch (fullness) {
//       case 2:
//         if (finishedWidth >= 24 && finishedWidth < 51) {
//           return 1;
//         } else if (finishedWidth >= 51 && finishedWidth < 77) {
//           return 2;
//         } else if (finishedWidth >= 77 && finishedWidth < 104) {
//           return 3;
//         } else if (finishedWidth >= 104 && finishedWidth < 130) {
//           return 4;
//         } else if (finishedWidth >= 130 && finishedWidth < 157) {
//           return 5;
//         } else if (finishedWidth >= 157 && finishedWidth < 183) {
//           return 6;
//         } else if (finishedWidth >= 183 && finishedWidth < 210) {
//           return 7;
//         } else if (finishedWidth >= 210 && finishedWidth < 236) {
//           return 8;
//         } else if (finishedWidth >= 236 && finishedWidth < 263) {
//           return 9;
//         } else if (finishedWidth >= 263) {
//           return 10;
//         } else {
//           console.log();
//         }
//         break;
//       case 2.5:
//         if (finishedWidth >= 19 && finishedWidth < 40) {
//           return 1;
//         } else if (finishedWidth >= 40 && finishedWidth < 62) {
//           return 2;
//         } else if (finishedWidth >= 62 && finishedWidth < 83) {
//           return 3;
//         } else if (finishedWidth >= 83 && finishedWidth < 104) {
//           return 4;
//         } else if (finishedWidth >= 104 && finishedWidth < 122) {
//           return 5;
//         } else if (finishedWidth >= 122 && finishedWidth < 146) {
//           return 6;
//         } else if (finishedWidth >= 146 && finishedWidth < 168) {
//           return 7;
//         } else if (finishedWidth >= 168 && finishedWidth < 189) {
//           return 8;
//         } else if (finishedWidth >= 189 && finishedWidth < 210) {
//           return 9;
//         } else if (finishedWidth >= 210) {
//           return 10;
//         } else {
//           console.log();
//         }
//         break;
//       case 3:
//         if (finishedWidth >= 16 && finishedWidth < 34) {
//           return 1;
//         } else if (finishedWidth >= 34 && finishedWidth < 51) {
//           return 2;
//         } else if (finishedWidth >= 51 && finishedWidth < 69) {
//           return 3;
//         } else if (finishedWidth >= 69 && finishedWidth < 87) {
//           return 4;
//         } else if (finishedWidth >= 87 && finishedWidth < 104) {
//           return 5;
//         } else if (finishedWidth >= 104 && finishedWidth < 122) {
//           return 6;
//         } else if (finishedWidth >= 122 && finishedWidth < 140) {
//           return 7;
//         } else if (finishedWidth >= 140 && finishedWidth < 157) {
//           return 8;
//         } else if (finishedWidth >= 157 && finishedWidth < 175) {
//           return 9;
//         } else if (finishedWidth >= 175) {
//           return 10;
//         } else {
//           console.log();
//         }
//         break;
//       default:
//         console.log();
//         break;
//     }
//     break;
//   case 60:
//     switch (fullness) {
//       case 2:
//         if (finishedWidth >= 27 && finishedWidth < 56) {
//           return 1;
//         } else if (finishedWidth >= 56 && finishedWidth < 86) {
//           return 2;
//         } else if (finishedWidth >= 86 && finishedWidth < 115) {
//           return 3;
//         } else if (finishedWidth >= 115 && finishedWidth < 145) {
//           return 4;
//         } else if (finishedWidth >= 145 && finishedWidth < 174) {
//           return 5;
//         } else if (finishedWidth >= 174 && finishedWidth < 204) {
//           return 6;
//         } else if (finishedWidth >= 204 && finishedWidth < 233) {
//           return 7;
//         } else if (finishedWidth >= 233 && finishedWidth < 263) {
//           return 8;
//         } else if (finishedWidth >= 263 && finishedWidth < 292) {
//           return 9;
//         } else if (finishedWidth >= 292) {
//           return 10;
//         } else {
//           console.log();
//         }
//         break;
//       case 2.5:
//         if (finishedWidth >= 22 && finishedWidth < 45) {
//           return 1;
//         } else if (finishedWidth >= 45 && finishedWidth < 69) {
//           return 2;
//         } else if (finishedWidth >= 69 && finishedWidth < 92) {
//           return 3;
//         } else if (finishedWidth >= 92 && finishedWidth < 116) {
//           return 4;
//         } else if (finishedWidth >= 116 && finishedWidth < 139) {
//           return 5;
//         } else if (finishedWidth >= 139 && finishedWidth < 163) {
//           return 6;
//         } else if (finishedWidth >= 163 && finishedWidth < 186) {
//           return 7;
//         } else if (finishedWidth >= 186 && finishedWidth < 210) {
//           return 8;
//         } else if (finishedWidth >= 210 && finishedWidth < 234) {
//           return 9;
//         } else if (finishedWidth >= 234) {
//           return 10;
//         } else {
//           console.log();
//         }
//         break;
//       case 3:
//         if (finishedWidth >= 18 && finishedWidth < 38) {
//           return 1;
//         } else if (finishedWidth >= 38 && finishedWidth < 57) {
//           return 2;
//         } else if (finishedWidth >= 57 && finishedWidth < 77) {
//           return 3;
//         } else if (finishedWidth >= 77 && finishedWidth < 96) {
//           return 4;
//         } else if (finishedWidth >= 96 && finishedWidth < 116) {
//           return 5;
//         } else if (finishedWidth >= 116 && finishedWidth < 136) {
//           return 6;
//         } else if (finishedWidth >= 136 && finishedWidth < 155) {
//           return 7;
//         } else if (finishedWidth >= 155 && finishedWidth < 175) {
//           return 8;
//         } else if (finishedWidth >= 175 && finishedWidth < 195) {
//           return 9;
//         } else if (finishedWidth >= 195) {
//           return 10;
//         } else {
//           console.log();
//         }
//         break;
//       default:
//         console.log();
//         break;
//     }
//     break;
//   default:
//     alert("Invalid fabric boltWidth. Options are 48, 54, 60.");
//     break;
// }

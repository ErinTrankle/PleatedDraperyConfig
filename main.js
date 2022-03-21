// pass this function the needed data, and it will return all of the information needed to quote a pleated drapery


import { calculateWidths } from './calculations/calculateWidths.js';
import { calculateCOM } from './calculations/calculateCOM.js';
//import { calculateRepeatSurcharge } from "./calculateRepeatSurcharge.js";
import { calculateD1 } from './calculations/calculateD1.js';
import { calculateCutLength } from './calculations/calculateCutLength.js';
import { calculateFabricNeededForRepeat } from './calculations/calculateFabricNeededForRepeat.js';
import { calculateD7 } from './calculations/calculateD7.js';
import { calculcateTrimming } from './calculations/calculateTrimming.js';
import { calculatePleat } from './calculations/calculatePleat.js';
import priceData from './data/codePricing.json' assert {type:"json"};

export function masterFunction(data) {
      console.log('masterFunction() start');

      //be careful to use result.totalWidths and not data.totalWidths in the calculations

      //instantiate return object
      var result = {
            trimming: {
                  vertical: {},
                  horizontal: {},
                  total: {},
            },
            errors: [],
      };

      result.finishedWidth =
            data.rodWidth + data.leftReturn + data.rightReturn + data.overlap;

      result.totalWidths = calculateWidths(
            data.fabricWidth,
            data.fullness,
            result.finishedWidth,
            data.panelOrPair
      );

      result.cutLength = calculateCutLength(data.finishedLength, data.lining);

      result.fabricNeededForRepeat = calculateFabricNeededForRepeat(
            result.cutLength,
            data.repeat
      );

      result.totalLength = result.cutLength + result.fabricNeededForRepeat;

      result.COMyardage = calculateCOM(
            result.totalWidths,
            result.cutLength,
            result.fabricNeededForRepeat
      );

      //this.repeatSurcharge = this.calculateRepeatSurcharge(this.repeat);
      //this.pricePoint = priceData[this.priceCode + this.repeatSurcharge];

      result.pricePoint = priceData[data.priceCode];

      result.D1 =
            calculateD1(
                  result.pricePoint,
                  data.lining,
                  result.totalWidths,
                  data.finishedLength,
                  data.COM
            );
      
      result.pleatCost = calculatePleat(data.pleatType,data.COM,result.totalWidths,data.pricePoint);

      result.interliningCost = calculateD7(result.totalWidths, data.interlining, data.COM);

      result.blackoutCost = calculateD7(result.totalWidths, data.liningType, data.COM);

      result.trimming = calculcateTrimming(
            data.trimming,
            data.finishedLength,
            data.panelOrPair,
            result.totalWidths,
            data.fabricWidth
      );

      result.unitCost = result.D1 + result.trimming.total.cost + result.pleatCost + result.interliningCost + result.blackoutCost;

      console.log('masterFunction() end');
      console.log(result);
      console.log('-----------------------------END--------------------------');
      return result;
}
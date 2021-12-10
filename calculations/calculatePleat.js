import { calculateD2 } from './calculateD2.js';
import { calculateD3 } from './calculateD3.js';
import { calculateD4 } from './calculateD4.js';
import { calculateD5 } from './calculateD5.js';
import { calculateD6 } from './calculateD6.js';

export function calculatePleat(pleatType,COM,totalWidths,pricePoint)
{
    console.log('calculatePleat() start');
    
    if (pleatType == '1prong') {
        return calculateD2(totalWidths, COM);
    }
    else if (pleatType == '2prong'){
        return calculateD2(totalWidths, COM);
    }
    else if (pleatType == '3prong'){
        return 0;
    }   
    else if (pleatType == '2prongtacked') {
        return calculateD2(totalWidths, COM);
    }
    else if (pleatType == '3prongtacked') {
        return 0;
    }
    else if (pleatType == 'reverse') {
        return 0;
    }
    else if (pleatType == 'softgoblet') {
        return calculateD2(totalWidths,COM);
    }
    else if (pleatType == 'cartridge') {
        return calculateD2(totalWidths, COM);
    }
    else if (pleatType == 'casual1prong') {
        return calculateD3(totalWidths, COM);
    }
    else if (pleatType == 'singleskip') {
        return calculateD2(totalWidths, COM);
    }
    else if (pleatType == 'clusterskip') {
        return calculateD3(totalWidths, COM);
    }
    else if (pleatType == 'sewonCOM') {
        return calculateD2(totalWidths, COM);
    }
    else if (pleatType == 'scalloped') {
        return calculateD6(totalWidths, COM,pricePoint);
    }
    else if (pleatType == 'archtop') {
        return calculateD4(totalWidths, COM);
    }
    else if (pleatType == 'graduated') {
        return calculateD5(totalWidths, COM);
    }
    else if (pleatType == 'multigraduated') {
        return calculateD6(totalWidths, COM,pricePoint);
    }
    else if (pleatType == 'box') {
        return calculateD3(totalWidths, COM);
    }
    
    else if (pleatType == 'inverted') {
        return calculateD3(totalWidths, COM);
    }
    
    
    
    
    else {
        console.log('invalid pleatType');
        return 0;
    }
}
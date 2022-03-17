// calculate pleat surcharges

import { calculateD2 } from './calculateD2.js';
import { calculateD3 } from './calculateD3.js';
import { calculateD4 } from './calculateD4.js';
import { calculateD5 } from './calculateD5.js';
import { calculateD6 } from './calculateD6.js';

export function calculatePleat(pleatType,COM,totalWidths,pricePoint)
{
    console.log('calculatePleat() start');
    
    if (pleatType == '1PN') {
        return calculateD2(totalWidths, COM);
    }
    else if (pleatType == '2PB'){
        return calculateD2(totalWidths, COM);
    }
    else if (pleatType == '3PB'){
        return 0;
    }   
    else if (pleatType == '2PT') {
        return calculateD2(totalWidths, COM);
    }
    else if (pleatType == '3PT') {
        return 0;
    }
    else if (pleatType == 'REV') {
        return 0;
    }
    else if (pleatType == 'GOB') {
        return calculateD2(totalWidths,COM);
    }
    else if (pleatType == 'CAR') {
        return calculateD2(totalWidths, COM);
    }
    else if (pleatType == 'C1P') {
        return calculateD3(totalWidths, COM);
    }
    else if (pleatType == 'SSP') {
        return calculateD2(totalWidths, COM);
    }
    else if (pleatType == 'CSP') {
        return calculateD3(totalWidths, COM);
    }

    else if (pleatType == 'BXP') {
        return calculateD3(totalWidths, COM);
    }
    
    else if (pleatType == 'INV') {
        return calculateD3(totalWidths, COM);
    }
    // else if (pleatType == 'sewonCOM') {
    //     return calculateD2(totalWidths, COM);
    // }
    // else if (pleatType == 'scalloped') {
    //     return calculateD6(totalWidths, COM,pricePoint);
    // }
    // else if (pleatType == 'archtop') {
    //     return calculateD4(totalWidths, COM);
    // }
    // else if (pleatType == 'graduated') {
    //     return calculateD5(totalWidths, COM);
    // }
    // else if (pleatType == 'multigraduated') {
    //     return calculateD6(totalWidths, COM,pricePoint);
    // }
    
    else {
        console.log('- invalid pleatType');
        return 0;
    }
}
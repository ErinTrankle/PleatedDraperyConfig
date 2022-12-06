import { calculateD5 } from "./calculateD5.js";
import { calculateD9 } from "./calculateD9.js";

export function calculcateTrimming(
	trimmingData,
	finishedLength,
	panelOrPair,
	totalWidths,
	fabricWidth
) {
	console.log("calculateTrimming() start");
	console.log(JSON.stringify(trimmingData));

	var trimmingResults = {
		vertical: {},
		horizontal: {},
		total: {},
	};

	if (trimmingData.vertical.included == true) {
		let vertMultiplier = 1;

		if (panelOrPair == "Pair") {
			vertMultiplier = 2;
		}

		trimmingResults.vertical.yardageRequired =
			Math.ceil(((finishedLength + 6) / 36) * vertMultiplier * 4) / 4;

		trimmingResults.vertical.labor = calculateD9(
			finishedLength,
			trimmingData.vertical.COM,
			panelOrPair
		);

		trimmingResults.vertical.cost = Math.round(
			trimmingData.vertical.price * trimmingResults.vertical.yardageRequired * 2
		); //multiplying by 2 to get retail

		trimmingResults.vertical.total =
			trimmingResults.vertical.cost + trimmingResults.vertical.labor;
	}

	// no vertical trimming, then zero everything out
	else if (trimmingData.vertical.included == false) {
		trimmingResults.vertical.yardageRequired = 0;
		trimmingResults.vertical.labor = 0;
		trimmingResults.vertical.cost = 0;
		trimmingResults.vertical.total = 0;
	} else {
		console.log("- bad data: is vertical trimming true or false?");
	}

	if (trimmingData.horizontal.included == true) {
		trimmingResults.horizontal.yardageRequired =
			Math.ceil(((totalWidths * fabricWidth) / 36) * 4) / 4;

		trimmingResults.horizontal.labor = calculateD5(
			totalWidths,
			trimmingData.horizontal.COM
		);

		trimmingResults.horizontal.cost = Math.round(
			trimmingData.horizontal.price *
				trimmingResults.horizontal.yardageRequired *
				2
		); //multiplying by 2 to get retail

		trimmingResults.horizontal.total =
			trimmingResults.horizontal.cost + trimmingResults.horizontal.labor;
	} else if (trimmingData.horizontal.included == false) {
		trimmingResults.horizontal.yardageRequired = 0;
		trimmingResults.horizontal.labor = 0;
		trimmingResults.horizontal.cost = 0;
		trimmingResults.horizontal.total = 0;
	} else {
	}

	trimmingResults.total.cost =
		trimmingResults.horizontal.total + trimmingResults.vertical.total;

	return trimmingResults;
}

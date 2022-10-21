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
		console.log("- vertical labor cost: ", trimmingResults.vertical.labor);

		trimmingResults.vertical.cost = Math.round(
			trimmingData.vertical.price * trimmingResults.vertical.yardageRequired
		);
		console.log("- vertical trim cost: ", trimmingResults.vertical.cost);

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
		console.log("- horizontal labor cost: ", trimmingResults.horizontal.labor);

		trimmingResults.horizontal.cost = Math.round(
			trimmingData.horizontal.price * trimmingResults.horizontal.yardageRequired
		);
		console.log("- horizontal trim cost: ", trimmingResults.horizontal.cost);

		trimmingResults.horizontal.total =
			trimmingResults.horizontal.cost + trimmingResults.horizontal.labor;

		console.log("- horizontal trim total: ", trimmingResults.horizontal.total);
	} else if (trimmingData.horizontal.included == false) {
		trimmingResults.horizontal.yardageRequired = 0;
		trimmingResults.horizontal.labor = 0;
		trimmingResults.horizontal.cost = 0;
		trimmingResults.horizontal.total = 0;
	} else {
		console.log("- bad data: is vertical trimming true or false?");
	}

	trimmingResults.total.cost =
		trimmingResults.horizontal.total + trimmingResults.vertical.total;

	return trimmingResults;
}

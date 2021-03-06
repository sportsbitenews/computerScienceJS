function permutationsWithRepetitions(choices, temp) {

    if (temp.length >= choices.length) {
        return [temp.slice(0)];
    }

    var results = [];

    for (var i = 0;i < choices.length;i++) {
        temp += choices[i];
        results = results.concat(permutations(choices, temp));
        temp = temp.slice(temp, temp.length - 1);
    }

    return results;
}

function permutationsWithoutRepitions(dataset, accumulator, r) {

    if (accumulator.length === r) {
        return [accumulator.slice(0)];
    }


    for (var i = 0, results = [], n = dataset.length;i < n;i++) {
        accumulator += dataset[i];
        var tempDataset = dataset.slice(0, i) + dataset.slice(i + 1);
        results = results.concat(permutationsWithoutRepitions(tempDataset, accumulator, r));
        accumulator = accumulator.slice(0, accumulator.length - 1);
    }

    return results;
}

function powerSet(choices, temp, len) {

    if (temp.length >= len) {
        return [temp.slice(0)];
    }

    var results = [temp.slice(0)];

    for (var i = 0;i < choices.length;i++) {
        temp += choices[i];
        var tempChoices = choices.slice(0, i) + choices.slice(i + 1);
        results = results.concat(powerSet(tempChoices, temp, len));
        temp = temp.slice(temp, temp.length - 1);
    }

    return results;
}

//console.log(powerSet('hey', '', 6));

/*
 * dataset String - Dataset of choices to create combinations of
 * Accumulator String - Accumulation of combinations as they get built up
 * r Number - Fixed size each combination should be
 *
 */
function repeatingCombination(dataset, accumulator, r) {

    if (accumulator.length >= r) {
        return [accumulator.slice(0)];
    }

    var results = [];
    var n = dataset.length;

    for (var i = 0;i < n;i++) {
        results = results.concat(
                repeatingCombination(
                    dataset.slice(i),
                    accumulator + dataset[i],
                    r
                    )
                );
    }

    return results;
}

var dataset = 'okay';
var accumulator = '';
var r = 3;

//console.log(repeatingCombination(dataset, accumulator, r));


/*
 * dataset String - Dataset of choices to create combinations of
 * Accumulator String - Accumulation of combinations as they get built up
 * r Number - Fixed size each combination should be
 *
 * non-repeating
 *
 */
function combination(dataset, accumulator, r) {

    if (accumulator.length >= r) {
        return [accumulator.slice(0)];
    }

    var results = [];
    var n = dataset.length;

    for (var i = 0;i < n;i++) {
        results = results.concat(
                combination(
                    dataset.slice(i + 1),
                    accumulator + dataset[i],
                    r
                    )
                );
    }

    return results;
}

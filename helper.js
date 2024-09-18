let jsonString = "{name=Tanmay sameer mutalik, age=, salary=5000, country=null, datetime=2024-09-17 15:38:58.0}";

// Step 1: Replace `=` with `:`
jsonString = jsonString.replace(/=/g, ':');

// Step 2: Add quotes around property names (key)
jsonString = jsonString.replace(/(\w+)\s*:/g, '"$1":');

// Step 3: Add quotes around string values, including those with spaces and date-like formats, but skip null and numbers
jsonString = jsonString.replace(/:\s*([^,\s{}]+(?: [^,\s{}]+)*)(?=,|\})/g, function(match, value) {
    if (value === 'null' || !isNaN(value)) {
        // Leave `null` and numbers as is
        return ':' + value;
    } else {
        // Wrap strings and dates with quotes
        return ':"' + value + '"';
    }
});

// Step 4: Ensure empty values are replaced with `null`
jsonString = jsonString.replace(/:\s*(?=,|\})/g, ':null');

// Output the corrected JSON string
console.log(jsonString);

// Step 5: Now you can safely parse the string to a JavaScript object
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

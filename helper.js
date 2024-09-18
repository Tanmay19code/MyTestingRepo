let jsonString = "{name=Tanmay sameer mutalik, age=, salary=5000, country=null, datetime=2024-09-17 15:38:58.0, website=https://localhost:8080}";

// Step 1: Replace `=` with `:`
jsonString = jsonString.replace(/=/g, ':');

// Step 2: Add quotes around property names (keys)
jsonString = jsonString.replace(/(\w+)\s*:/g, '"$1":');

// Step 3: Add quotes around values (but skip null, numbers, URLs, and datetime)
// Handle URLs and datetime as special cases, ensuring they aren't incorrectly split.
jsonString = jsonString.replace(/:\s*([^,\s{}]+(?: [^,\s{}]+)*)(?=,|\})/g, function(match, value) {
    if (value === 'null' || !isNaN(value) || /https?:\/\/[^\s]+/.test(value)) {
        // Leave `null`, numbers, and URLs unchanged
        return ':' + value;
    } else if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d+$/.test(value)) {
        // Wrap datetime values in quotes
        return ':"' + value + '"';
    } else {
        // Wrap regular strings in quotes
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

let jsonString = "{name=Tanmay sameer mutalik, age=, salary=5000, country=null, isMarried=true, datetime=2024-09-17 15:38:58.0, website=https://localhost:8080}";

// Step 1: Handle values with regex (add quotes to both keys and values)
jsonString = jsonString.replace(/(\w+)=([^,{}]+)/g, function(match, key, value) {
    value = value.trim(); // Trim any extra spaces

    // Step 2: Determine if value is null, number, or boolean, or needs quotes
    if (value === 'null' || value === '') {
        // If the value is empty or 'null', replace with null
        return `"${key}":null`;
    } else if (!isNaN(value) || value === 'true' || value === 'false') {
        // If the value is a number or boolean, don't add quotes around the value
        return `"${key}":${value}`;
    } else {
        // Otherwise, it's a string, so wrap the value in quotes
        return `"${key}":"${value}"`;
    }
});

// Step 3: Replace `=` with `:` only after processing everything (already handled inside regex now)

// Output the corrected JSON string
console.log(jsonString);

// Step 4: Now you can safely parse the string to a JavaScript object
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

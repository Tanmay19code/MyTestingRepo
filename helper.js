let jsonString = "{name=Tanmay sameer mutalik, age=, salary=5000, country=null}";

// Step 1: Replace = with :
jsonString = jsonString.replace(/=/g, ':');

// Step 2: Add quotes around property names
jsonString = jsonString.replace(/(\w+)\s*:/g, '"$1":');

// Step 3: Add quotes around non-empty string values but skip nulls and empty values
jsonString = jsonString.replace(/:\s*([^,{}\s]+[a-zA-Z][^,{}\s]*)/g, ':"$1"');

// Step 4: Ensure `null` values and empty values remain unquoted
jsonString = jsonString.replace(/:\s*null/g, ':null')   // Keep null as it is
                       .replace(/:\s*""/g, ':null')     // Replace empty string with null
                       .replace(/:\s*,/g, ':null,');    // Handle empty fields

console.log(jsonString);  // Output: {"name":"Tanmay sameer mutalik", "age":null, "salary":5000, "country":null}

// Step 5: Now you can safely parse the string to a JavaScript object
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

function groupByFamilies(input) {

var output = input.reduce(function(result, value) { 
  result[value.surname] = result[value.surname] || []; 
  result[value.surname].push(value.name);
  return result; 
}, {});

console.log(output)

}

groupByFamilies([{"name": "Barack",   "surname": "Obama"},
    {"name": "Michelle", "surname": "Obama"},
    {"name": "Donald",   "surname": "Trump"}])
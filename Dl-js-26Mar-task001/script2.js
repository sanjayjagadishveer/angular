let arrObj = [
    { name: "Shantanu", age: 27 },
    { name: "Vignesh", age: 24 },
    { name: "Priya", age: 24 },
    { name: "Goutham", age: 26 },
  ]; // ['Shantanu','Vignesh','Priya', 'Goutham']
let data=arrObj.map(function(ele)
{
    return ele.name;
})
console.log(data);




const showname=(firstname,lastname, ...title)=>
{
    let name=firstname+" "+lastname+ " ";
    for(let data of title)
    {
        name+=data+" ";
    }
    return name;
}
console.log(showname('sanjay','jagadish','veer','from','bangalore'));




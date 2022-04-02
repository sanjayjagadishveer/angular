//Task 3


let pageInfo=
{
    width:500,
    height:800,
    title:'mypage'
}
let totalsum=0;
for(let data in pageInfo)
{
if(typeof pageInfo[data] == "number")
{
    pageInfo[data]*=2;
}
}
console.log('total data',totalsum);
console.log(pageInfo);


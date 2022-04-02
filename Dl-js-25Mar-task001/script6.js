let calculator=
{
    num1:+prompt('enter fisrt num'),
    num2:+prompt('enter second num'),
    add:function()
    {
        let result=this.num1+this.num2;
       console.log(result);
    },
    multiply:function()
    {
        let result=this.num1*this.num2;
        console.log(result)
    }
}
calculator.add();
calculator.multiply();




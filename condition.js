var userAge= Number(prompt("What's your Age?"));
if(userAge<0)
{
	console.log("error");
}

else if(userAge===21)
{
	console.log("happy 21st birthday!!");
}

else if(userAge%2!==0)
{
	console.log("your age is odd!");
}
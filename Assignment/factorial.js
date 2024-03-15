
function factorial(n)
{ 
    if(n==0)
    {
        return 1;
    }
    else{
   let ans=n*factorial(n-1);
   return ans;
    }
}
console.log(factorial(20));
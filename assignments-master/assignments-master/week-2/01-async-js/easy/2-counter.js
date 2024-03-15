// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the 
// bottom of the file if you get stuck.



let ans = 0;
function Time() {
  setInterval(() => {
    ans++;
    console.log(ans);
  }, 1000);
}
Time();




































































(Hint: setTimeout)
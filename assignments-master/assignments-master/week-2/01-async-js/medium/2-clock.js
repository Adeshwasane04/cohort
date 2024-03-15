// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(()=>
{
   
    const hr=new Date().getHours();
    const min=new Date().getMinutes();
    const sec=new Date().getSeconds();
    console.log(`${hr}`+":"+`${min}`+":"+`${sec}`);
},1000)

function getCurrentTime() {
    const currentTime = new Date();
    const hr = currentTime.getHours();
    const min = currentTime.getMinutes();
    const sec = currentTime.getSeconds();
    return `${hr}:${min}:${sec}`;
  }
  
  function printCurrentTime() {
    const currentTimeString = getCurrentTime();
    console.log(currentTimeString);
  
    // Call printCurrentTime again after a delay of 1000 milliseconds (1 second)
    setTimeout(printCurrentTime, 1000);
  }
  
  // Call printCurrentTime to start the continuous update
  printCurrentTime();
  
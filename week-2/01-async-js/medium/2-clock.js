// function formatTime() {
//   const now = new Date();

//   // Get hours, minutes, and seconds
//   const hours = now.getHours().toString().padStart(2, "0");
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   const seconds = now.getSeconds().toString().padStart(2, "0");

//   // Format the time as "HH:MM:SS"
//   const formattedTime = `${hours}:${minutes}:${seconds}`;

//   return formattedTime;
// }

function formatTimeWithAmpm() {
  const date = new Date();
  const options = {
    hour12: true, //  here if i not want am/pm then i can make it false or else true
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedTime = date.toLocaleTimeString("en-US", options);
  return `${formattedTime}`;
}

// setInterval(() => {
//   console.log(formatTime());
// }, 1000);

setInterval(() => {
  console.log(formatTimeWithAmpm());
}, 1000);

function displayDateAndGreeting() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();
    const hour = now.getHours();

    let greeting;
    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon";
    } else if (hour >= 18 && hour < 22) {
        greeting = "Good Evening";
    } else {
        greeting = "Welcome"; 
    }

    const output = `Today is ${dayName}, ${dayOfMonth} ${monthName} ${year}, and ${greeting} to You.`;
    console.log(output);
    alert(output);
}

displayDateAndGreeting();
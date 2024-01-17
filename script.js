 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the use

    // Convert the input to a number
    let radiusNumber = parseFloat(radius);

    // Check if the input is a valid positive number
    if (!isNaN(radiusNumber) && radiusNumber > 0) {
        // Calculate the area of the circle
        let area = Math.PI * Math.pow(radiusNumber, 2);

        // Round off the result to two decimal places
        let roundedArea = area.toFixed(2);

        // Display the result to the user
        alert(`The area of the circle with radius ${radiusNumber} is ${roundedArea}`);
    } else {
        // Display an error message for invalid input
        alert("Invalid input. Please enter a positive number for the radius.");
    }
}
	 
           

calculateArea();

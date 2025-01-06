document.getElementById("dob-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the page from refreshing

  const dobInput = document.getElementById("dob").value; // Get the input value

  if (!dobInput) {
    alert("Please select a valid date of birth!"); // Validate input
    return;
  }

  const dob = new Date(dobInput); // Convert input to a Date object
  const solidStartDate = new Date(dob.getTime() + 181 * 24 * 60 * 60 * 1000); // Add 181 days

  // Format the date for display
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = solidStartDate.toLocaleDateString(undefined, options);

  // Display the solid start date
  document.getElementById("solid-date").textContent = `Start solids on: ${formattedDate}`;

  // Show the result section
  document.getElementById("result").classList.remove("hidden");
});

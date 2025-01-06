document.getElementById("dob-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the page from refreshing

  const dobInput = document.getElementById("dob").value;

  if (!dobInput) {
    alert("Please select a valid date of birth!");
    return;
  }

  const dob = new Date(dobInput);
  const solidStartDate = new Date(dob.getTime() + 181 * 24 * 60 * 60 * 1000); // Add 181 days
  const today = new Date();

  // Format the solid start date
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = solidStartDate.toLocaleDateString(undefined, options);

  // Calculate the countdown
  const daysLeft = Math.ceil((solidStartDate - today) / (1000 * 60 * 60 * 24));
  const countdownText =
    daysLeft > 0
      ? `${daysLeft} days left until the recommended date to start solids.`
      : "The recommended date to start solids has passed.";

  // Display the results
  document.getElementById("solid-date").textContent = formattedDate;
  document.getElementById("countdown").textContent = countdownText;
  document.getElementById("result").classList.remove("hidden");
});

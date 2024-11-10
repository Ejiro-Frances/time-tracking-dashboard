const listItems = document.querySelectorAll("li");
const dailyElements = document.querySelectorAll(".daily");
const weeklyElements = document.querySelectorAll(".weekly");
const monthlyElements = document.querySelectorAll(".monthly");
const trackCardImg = document.querySelectorAll(".trackCard img");

// Function to toggle visibility based on selected time period
const updateVisibility = (period) => {
  // Hide all elements initially
  dailyElements.forEach((el) => el.classList.add("hide"));
  weeklyElements.forEach((el) => el.classList.add("hide"));
  monthlyElements.forEach((el) => el.classList.add("hide"));

  // Show only the selected period
  if (period === "day") {
    dailyElements.forEach((el) => el.classList.remove("hide"));
  } else if (period === "week") {
    weeklyElements.forEach((el) => el.classList.remove("hide"));
  } else if (period === "month") {
    monthlyElements.forEach((el) => el.classList.remove("hide"));
  }
};

// Add click event listeners to each list item
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove 'active' class from all list items
    listItems.forEach((li) => li.classList.remove("active"));

    // Add 'active' class to the clicked item
    item.classList.add("active");
    // Get the class of the clicked item to determine the period
    const period = item.classList[0];
    updateVisibility(period);
  });
});

// Add click event listeners to each img inside .trackCard
// trackCardImg.forEach((img) => {
//   img.addEventListener("click", () => {
//     // Remove the hide class from all period elements to display them
//     dailyElements.forEach((el) => el.classList.remove("hide"));
//     weeklyElements.forEach((el) => el.classList.toggle("hide"));
//     monthlyElements.forEach((el) => el.classList.toggle("hide"));
//   });
// });

// Target each card and not all the images at the same time
trackCardImg.forEach((img) => {
  img.addEventListener("click", () => {
    // Find the closest card container of the clicked image
    const card = img.closest(".card");

    // Toggle visibility for elements specific to this card only
    const dailyElements = card.querySelectorAll(".daily");
    const weeklyElements = card.querySelectorAll(".weekly");
    const monthlyElements = card.querySelectorAll(".monthly");

    dailyElements.forEach((el) => el.classList.remove("hide"));
    weeklyElements.forEach((el) => el.classList.toggle("hide"));
    monthlyElements.forEach((el) => el.classList.toggle("hide"));
  });
});

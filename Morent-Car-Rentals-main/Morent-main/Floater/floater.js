function updatePrice() {
  const slider = document.getElementById("priceSlider");
  const priceDisplay = document.getElementById("priceValue");
  priceDisplay.textContent = slider.value;

  // Calculate the fill percentage
  const fillPercentage =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;

  // Update the background gradient to reflect the fill
  slider.style.background = `linear-gradient(to right, #3498db ${fillPercentage}%, #ddd ${fillPercentage}%)`;
}

const companyBtn = document.getElementById("companyLogo");

companyBtn.addEventListener("click", function () {
  window.location.href = "./Abody/index.html";
});

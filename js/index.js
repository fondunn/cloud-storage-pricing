const storgeValue = document.getElementById("storageRangeValue");
const transferValue = document.getElementById("transferRangeValue");

const blackblazeChart = document.getElementById("blackblazeChart");
const blackblazeChartValue = document.getElementById("blackblazeChartValue");
const bunnyChart = document.getElementById("bunnyChart");
const bunnyChartValue = document.getElementById("bunnyChartValue");
const scalewayChart = document.getElementById("scalewayChart");
const scalewayChartValue = document.getElementById("scalewayChartValue");
const vultrChart = document.getElementById("vultrChart");
const vultrChartValue = document.getElementById("vultrChartValue");

function updateRange(value, key) {
  if (key === "storage") storgeValue.innerHTML = value;
  else if (key === "transfer") transferValue.innerHTML = value;
  updateChart({
    name: "blackblaze",
    company: initialState.blackblaze,
    chartPriceValue: blackblazeChartValue,
    chart: blackblazeChart,
  });
  updateChart({
    name: "bunny",
    company: initialState.bunny,
    chartPriceValue: bunnyChartValue,
    chart: bunnyChart,
    key: initialState.bunny.defaultCheck,
  });
  updateChart({
    name: "scaleway",
    company: initialState.scaleway,
    chartPriceValue: scalewayChartValue,
    chart: scalewayChart,
    key: initialState.scaleway.defaultCheck,
  });
  updateChart({
    name: "vultr",
    company: initialState.vultr,
    chartPriceValue: vultrChartValue,
    chart: vultrChart,
  });
}
window.addEventListener("resize", () => {
  updateRange(storgeValue.innerHTML, "storage");
  updateRange(transferValue.innerHTML, "transfer");
});

updateRange();

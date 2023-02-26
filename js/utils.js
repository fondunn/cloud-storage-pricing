function checkFree(value, price, free) {
  if (value <= free) return 0;
  else {
    return price * (value - free);
  }
}

function checkMinMax(value, min, max) {
  if (max !== 0 && value > max) {
    return max.toFixed(2);
  } else if (min !== 0 && value < min) {
    return min.toFixed(2);
  } else {
    return value;
  }
}

function getStoragePrice(company, key) {
  if (!key) return company.prices.storage;
  else {
    return company.prices.storage[key];
  }
}

function colorizeBackground(company) {
  let chipest = {
    value: 0,
    title: null,
  };
  for (let key in company) {
    if (!chipest.title) {
      chipest.title = company[key].title;
      chipest.value = company[key].chartValue;
    } else {
      if (company[key].chartValue < chipest.value) {
        chipest.title = company[key].title;
        chipest.value = company[key].chartValue;
      }
    }
  }
  return chipest;
}

function getCheckedKey(fieldset) {
  if (fieldset.elements[0].checked) {
    return fieldset.elements[0].defaultValue;
  } else {
    return fieldset.elements[1].defaultValue;
  }
}

function getTotal(props) {
  const storage = checkFree(
    props.storageValue,
    props.storagePrice,
    props.freeRange.storage
  );
  const transfer = checkFree(
    props.transferVal,
    props.transferPrice,
    props.freeRange.transfer
  );
  const res = (storage + transfer).toFixed(2);
  return checkMinMax(res, props.company.minPayment, props.company.maxPayment);
}

function changeRadio(key, name) {
  const fs = document.getElementById(key);
  const newKey = getCheckedKey(fs);
  initialState[name].defaultCheck = newKey;
  updateRange();
  return newKey;
}

function updateChart({ company, chartPriceValue, chart, key = null, name }) {
  const storageValue = Number(storgeValue.innerHTML);
  const transferVal = Number(transferValue.innerHTML);
  const transferPrice = company.prices.transfer;
  const storagePrice = getStoragePrice(company, key);
  const totalPrice = getTotal({
    storagePrice,
    storageValue,
    transferPrice,
    transferVal,
    freeRange: company.freeRange,
    company: company,
  });
  chartPriceValue.innerHTML = totalPrice + "$";
  company.chartValue = Number(totalPrice);

  const colorFor = colorizeBackground(initialState);

  if (name === colorFor.title) {
    chart.style.background = company.color;
  } else {
    chart.style.background = "lightgray";
  }
  if (window.innerWidth > 768) {
    chart.style.width = totalPrice + "%";
    chart.style.height = "20px";
  } else {
    chart.style.height = totalPrice + "%";
    chart.style.width = "20px";
  }
}

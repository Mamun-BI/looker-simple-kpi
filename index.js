/* global dscc */
const ds = window.dscc;

function drawViz(data) {
  const root = document.getElementById("root");
  if (!root) return;

  const titleEl = root.querySelector(".card-title");
  const valueEl = root.querySelector(".card-value");
  const subtitleEl = root.querySelector(".card-subtitle");

  const rows = data.tables.DEFAULT || [];
  let value = "0";

  if (rows.length && rows[0].metric && rows[0].metric.length) {
    const cell = rows[0].metric[0];
    value = cell.formattedValue || cell.value || "0";
  }

  titleEl.textContent = "Total Revenue";
  valueEl.textContent = value;
  subtitleEl.textContent = "Current period";
}

function onDataChange(data) {
  drawViz(data);
}

ds.subscribeToData(onDataChange, { transform: ds.objectTransform });

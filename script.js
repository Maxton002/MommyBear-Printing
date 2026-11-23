let previousPage = "services";
let currentPage = "services";
let currentServiceKey = "print";

function showPage(pageId) {
  if (pageId !== currentPage) {
    previousPage = currentPage;
    currentPage = pageId;
  }

  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.remove("active");
  });
  const targetSection = document.getElementById(pageId);
  // Force reflow so the pageFadeIn animation replays reliably
  void targetSection.offsetWidth;
  targetSection.classList.add("active");

  document.querySelectorAll("header nav a").forEach((link) => {
    link.classList.remove("active");
  });
  const activeNav = document.getElementById(`nav-${pageId}`);
  if (activeNav) {
    activeNav.classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBack() {
  showPage(previousPage);
}

const serviceData = {
  print: {
    title: "Print",
    btnText: "Order Print →",
    cardBg: "#dcebfa",
    darkCardBg: "#1d324a",
    options: [
      { name: "Documents (A4 & Short) - B&W", price: "₱5", unitPrice: 5, minQty: 1 },
      { name: "Documents (A4 & Short) - Colored", price: "₱10", unitPrice: 10, minQty: 1 },
      { name: "Documents (A4 & Short) - Full Page Photo", price: "₱20", unitPrice: 20, minQty: 1 },
      { name: "Documents (Long) - B&W", price: "₱6", unitPrice: 6, minQty: 1 },
      { name: "Documents (Long) - Colored", price: "₱10", unitPrice: 10, minQty: 1 },
      { name: "Documents (Long) - Full Page Photo", price: "₱20", unitPrice: 20, minQty: 1 },
      { name: "Xerox", price: "₱5", unitPrice: 5, minQty: 1 },
      { name: "Scan", price: "₱5", unitPrice: 5, minQty: 1 },
    ],
  },
  photos: {
    title: "Photos",
    btnText: "Order Photos →",
    cardBg: "#e2f3e4",
    darkCardBg: "#1c3829",
    options: [
      { name: "Cute Size (10 pcs)", price: "₱50", unitPrice: 50, minQty: 1 },
      { name: "Wallet Size (9 pcs)", price: "₱50", unitPrice: 50, minQty: 1 },
      { name: "3R Size (min. 2 pcs)", price: "₱6", unitPrice: 6, minQty: 2 },
      { name: "4R Size (min. 2 pcs)", price: "₱10", unitPrice: 10, minQty: 2 },
      { name: "5R Size (min. 2 pcs)", price: "₱15", unitPrice: 15, minQty: 2 },
      { name: "A4 Size - Glossy Photo Paper", price: "₱50", unitPrice: 50, minQty: 1 },
      { name: "A4 Size - RC Satin & Woven Photo Paper", price: "₱70", unitPrice: 70, minQty: 1 },
      { name: "Instax Inspired (10 pcs)", price: "₱50", unitPrice: 50, minQty: 1 },
      { name: "Rush ID Photo (Package)", price: "₱40", unitPrice: 40, minQty: 1 },
      { name: "Photo Card", price: "₱15", unitPrice: 15, minQty: 1 },
    ],
  },
  envelopes: {
    title: "Envelopes",
    btnText: "Order Envelopes →",
    cardBg: "#fce4ec",
    darkCardBg: "#441c2c",
    options: [
      { name: "Angpao (10 pcs)", price: "₱50", unitPrice: 50, minQty: 1 },
      { name: "3D Character Envelopes (10 pcs)", price: "₱50", unitPrice: 50, minQty: 1 },
      { name: "ATM Envelopes (10 pcs)", price: "₱50", unitPrice: 50, minQty: 1 },
      { name: "Character Envelopes (10 pcs)", price: "₱50", unitPrice: 50, minQty: 1 },
    ],
  },
  laminate: {
    title: "Laminate & PVC",
    btnText: "Order Laminate & PVC →",
    cardBg: "#efe5fd",
    darkCardBg: "#2d2147",
    options: [
      { name: "ID Size Lamination (125 mic)", price: "₱15", unitPrice: 15, minQty: 1 },
      { name: "ID Size Lamination (250 mic)", price: "₱30", unitPrice: 30, minQty: 1 },
      { name: "3R Size Lamination (125 mic)", price: "₱30", unitPrice: 30, minQty: 1 },
      { name: "3R Size Lamination (250 mic)", price: "₱50", unitPrice: 50, minQty: 1 },
      { name: "4R Size Lamination (125 mic)", price: "₱30", unitPrice: 30, minQty: 1 },
      { name: "4R Size Lamination (250 mic)", price: "₱50", unitPrice: 50, minQty: 1 },
      { name: "A5 Size Lamination (125 mic)", price: "₱50", unitPrice: 50, minQty: 1 },
      { name: "A5 Size Lamination (250 mic)", price: "₱80", unitPrice: 80, minQty: 1 },
      { name: "A4 Size Lamination (125 mic)", price: "₱80", unitPrice: 80, minQty: 1 },
      { name: "A4 Size Lamination (250 mic)", price: "₱120", unitPrice: 120, minQty: 1 },
      { name: "Nametag (250 mic Laminated)", price: "₱80", unitPrice: 80, minQty: 1 },
      { name: "Nametag (PVC)", price: "₱100", unitPrice: 100, minQty: 1 },
      { name: "Bagtag (PVC)", price: "₱100", unitPrice: 100, minQty: 1 },
    ],
  },
  stickers: {
    title: "Stickers",
    btnText: "Order Stickers →",
    cardBg: "#fef5d4",
    darkCardBg: "#423518",
    options: [
      { name: "A4 Photo Sticker", price: "₱50", unitPrice: 50, minQty: 1 },
      {
        name: "Notebook Label Stickers Promo (Subject + Name + Nametag PVC + Bagtag PVC)",
        price: "₱250",
        unitPrice: 250,
        minQty: 1,
      },
    ],
  },
  sintraboard: {
    title: "Sintraboard & Magnet",
    btnText: "Order Sintraboard & Magnet →",
    cardBg: "#fde8dc",
    darkCardBg: "#452516",
    options: [
      { name: "Bubble Head Magnet (2 inches)", price: "₱15", unitPrice: 15, minQty: 1 },
      { name: "A4 Flat Type Sintraboard", price: "₱150", unitPrice: 150, minQty: 1 },
      { name: "A5 Flat Type Sintraboard", price: "₱80", unitPrice: 80, minQty: 1 },
      { name: "4x4 Sintraboard", price: "₱50", unitPrice: 50, minQty: 1 },
      { name: "A5 Standee Sintraboard", price: "₱60", unitPrice: 60, minQty: 1 },
    ],
  },
};

function updateCardBackground() {
  const isDark = document.body.classList.contains("dark-mode");
  const data = serviceData[currentServiceKey];
  document.getElementById("service-card").style.background = isDark
    ? data.darkCardBg
    : data.cardBg;
}

function renderServiceCard(key) {
  const data = serviceData[key];
  const card = document.getElementById("service-card");

  // Re-trigger title/count fade animation on switch
  card.classList.remove("switching");
  void card.offsetWidth;
  card.classList.add("switching");

  document.getElementById("card-title").textContent = data.title;
  document.getElementById("card-count").textContent = `${data.options.length} options available`;
  document.getElementById("card-order-btn").textContent = data.btnText;
  updateCardBackground();

  const chipsContainer = document.getElementById("card-chips");
  chipsContainer.innerHTML = data.options
    .map(
      (opt, idx) =>
        `<span style="animation-delay: ${idx * 35}ms"><strong>${opt.name}</strong> &mdash; <span class="chip-price">${opt.price}</span></span>`
    )
    .join("");
}

function selectService(key, clickedBtn) {
  if (currentServiceKey === key) return;
  currentServiceKey = key;

  document.querySelectorAll(".services .btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  clickedBtn.classList.add("active");

  renderServiceCard(key);
}

function updateOrderOptions() {
  const selectedKey = document.getElementById("service-select").value;
  const optionSelect = document.getElementById("option-select");
  const options = serviceData[selectedKey].options;

  optionSelect.innerHTML = options
    .map((opt, index) => {
      const label = `${opt.name} — ${opt.price}`;
      return `<option value="${index}">${label}</option>`;
    })
    .join("");

  calculateTotal();
}

function calculateTotal() {
  const selectedKey = document.getElementById("service-select").value;
  const optionSelect = document.getElementById("option-select");
  const optionIndex = parseInt(optionSelect.value, 10) || 0;
  const selectedOption = serviceData[selectedKey].options[optionIndex];

  if (!selectedOption) return;

  const qtyInput = document.getElementById("order-quantity");
  qtyInput.min = selectedOption.minQty;

  let qty = parseInt(qtyInput.value, 10);
  if (isNaN(qty) || qty < selectedOption.minQty) {
    qty = selectedOption.minQty;
    qtyInput.value = qty;
  }

  const total = selectedOption.unitPrice * qty;
  const totalEl = document.getElementById("total-amount");

  document.getElementById("total-formula").textContent =
    `₱${selectedOption.unitPrice.toLocaleString()} × ${qty}`;
  totalEl.textContent = `₱${total.toLocaleString()}`;

  // Playful bump animation when price updates
  totalEl.classList.remove("bump");
  void totalEl.offsetWidth;
  totalEl.classList.add("bump");
}

document.getElementById("option-select").addEventListener("change", calculateTotal);
document.getElementById("order-quantity").addEventListener("input", calculateTotal);

function orderCurrentService() {
  document.getElementById("service-select").value = currentServiceKey;
  updateOrderOptions();
  showPage("order");
}

// File upload display & validation
function handleFileChange(input) {
  const dropzone = document.getElementById("file-dropzone");
  const labelText = document.getElementById("file-label-text");
  const errMsg = document.getElementById("err-file-upload");

  if (input.files.length > 0) {
    const fileNames = Array.from(input.files)
      .map((f) => f.name)
      .join(", ");
    labelText.textContent = `Selected (${input.files.length}): ${fileNames}`;
    dropzone.classList.add("has-file");
    dropzone.classList.remove("input-error");
    errMsg.classList.remove("visible");
  } else {
    resetFileDisplay();
  }
}

function resetFileDisplay() {
  const dropzone = document.getElementById("file-dropzone");
  const labelText = document.getElementById("file-label-text");
  labelText.textContent = "📎 Click to choose file(s) (PDF, PNG, JPG, DOCX)";
  dropzone.classList.remove("has-file", "input-error");
}

function clearError(input) {
  input.classList.remove("input-error");
  const errEl = document.getElementById(`err-${input.id}`);
  if (errEl) {
    errEl.classList.remove("visible");
  }
}

function triggerError(element, errorId) {
  element.classList.remove("input-error");
  void element.offsetWidth; // Replay shake animation on repeated invalid submits
  element.classList.add("input-error");
  if (errorId) {
    const errEl = document.getElementById(errorId);
    if (errEl) errEl.classList.add("visible");
  }
}

function submitOrder(event) {
  event.preventDefault();

  const nameInput = document.getElementById("customer-name");
  const contactInput = document.getElementById("customer-contact");
  const fileInput = document.getElementById("file-upload");

  let isValid = true;

  if (!nameInput.value.trim()) {
    triggerError(nameInput, "err-customer-name");
    isValid = false;
  }

  if (!contactInput.value.trim()) {
    triggerError(contactInput, "err-customer-contact");
    isValid = false;
  }

  if (fileInput.files.length === 0) {
    triggerError(document.getElementById("file-dropzone"), "err-file-upload");
    isValid = false;
  }

  if (!isValid) return;

  const serviceKey = document.getElementById("service-select").value;
  const serviceName = serviceData[serviceKey].title.replace("• ", "");
  const optionIndex = parseInt(document.getElementById("option-select").value, 10) || 0;
  const selectedOption = serviceData[serviceKey].options[optionIndex];
  const qty = parseInt(document.getElementById("order-quantity").value, 10) || selectedOption.minQty;
  const total = selectedOption.unitPrice * qty;
  const fileCount = fileInput.files.length;

  alert(
    `Thank you, ${nameInput.value.trim()}! Your order for ${qty}x ${serviceName} (${selectedOption.name}) — Total: ₱${total.toLocaleString()} with ${fileCount} file(s) has been received. We will message you shortly!`
  );

  event.target.reset();
  resetFileDisplay();
  updateOrderOptions();
}

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
  localStorage.setItem("mommybear-theme", isDark ? "dark" : "light");
  updateCardBackground();
}

// Initialize theme, initial service card, and order options on page load
if (localStorage.getItem("mommybear-theme") === "dark") {
  document.body.classList.add("dark-mode");
  document.getElementById("theme-toggle").textContent = "☀️ Light";
}
renderServiceCard(currentServiceKey);
updateOrderOptions();
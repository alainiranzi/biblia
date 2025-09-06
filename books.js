let loggedIn = false;
let selectedBook = null;
let selectedPrice = 0;
let selectedFile = null;

function openPayment() {
  document.getElementById("bookInfo").innerText = `You are buying: ${selectedBook} - $${selectedPrice}`;
  document.getElementById("paymentModal").style.display = "flex";
}

// Download button click
document.querySelectorAll(".downloadBtn").forEach(btn => {
  btn.addEventListener("click", function() {
    const card = this.parentElement;
    selectedBook = card.dataset.title;
    selectedPrice = card.dataset.price;
    selectedFile = card.dataset.file;

    if (!loggedIn) {
      document.getElementById("authModal").style.display = "flex";
    } else {
      openPayment();
    }
  });
});

// Close Modals
document.querySelector(".close").onclick = () => document.getElementById("authModal").style.display = "none";
document.querySelector(".closePay").onclick = () => document.getElementById("paymentModal").style.display = "none";

// Auth form
document.getElementById("authForm").addEventListener("submit", e => {
  e.preventDefault();
  loggedIn = true;
  document.getElementById("authModal").style.display = "none";
  alert("You are now registered/logged in!");
  if (selectedBook) openPayment();
});

// Payment form
document.getElementById("paymentForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("paymentModal").style.display = "none";
  alert(`Payment successful for "${selectedBook}" ($${selectedPrice})! Download starting...`);
  
  
  const link = document.createElement("a");
  link.href = selectedFile;
  link.download = selectedFile;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Reset selection
  selectedBook = null;
  selectedPrice = 0;
  selectedFile = null;
});

let loggedIn = false; // change to true if user logged in
let selectedBook = null;
let selectedPrice = 0;
let selectedFile = null;

// Buy button click
document.querySelectorAll(".buyBtn").forEach(btn=>{
  btn.addEventListener("click", function(){
    const card = this.parentElement;
    selectedBook = card.dataset.title;
    selectedPrice = card.dataset.price;
    selectedFile = card.dataset.file;

    if(!loggedIn){
      document.getElementById("authModal").style.display="block";
    }else{
      document.getElementById("bookInfo").innerText = `You are buying: ${selectedBook} - $${selectedPrice}`;
      document.getElementById("paymentModal").style.display="block";
    }
  });
});

// Login Modal
document.querySelector(".close").onclick = ()=>{
  document.getElementById("authModal").style.display="none";
};

// Payment Modal
document.querySelector(".closePay").onclick = ()=>{
  document.getElementById("paymentModal").style.display="none";
};

// Auth form simulation
document.getElementById("authForm").addEventListener("submit", e=>{
  e.preventDefault();
  loggedIn = true;
  document.getElementById("authModal").style.display="none";
  alert("Logged in! Now you can buy books.");
});

// Payment form simulation
document.getElementById("paymentForm").addEventListener("submit", e=>{
  e.preventDefault();
  document.getElementById("paymentModal").style.display="none";
  alert(`Payment successful for "${selectedBook}" ($${selectedPrice})! Download link: ${selectedFile}`);
});

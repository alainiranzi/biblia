// Modal handling
const modal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close");

loginBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target==modal) modal.style.display="none"; };

// Login/Signup simulation
document.getElementById("authForm").addEventListener("submit", function(e){
  e.preventDefault();
  const email = document.getElementById("authEmail").value;
  document.getElementById("authMessage").innerText = `Logged in as ${email} (simulation)`;
  modal.style.display="none";
});

// Buy / Download click simulation
const buyButtons = document.querySelectorAll(".buyBtn");
buyButtons.forEach(btn=>{
  btn.addEventListener("click", function(){
    alert("Please login or sign up to buy/download this book!");
  });
});

// Search functionality
document.getElementById("searchInput").addEventListener("input", function(){
  const query = this.value.toLowerCase();
  document.querySelectorAll(".book-card").forEach(card=>{
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});

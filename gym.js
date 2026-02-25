const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
function joinNow() {
    alert("Welcome to PowerHouse Fitness! \nOur team will contact you soon.");
  }

  // Contact form submission
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert(" Please fill out all fields.");
      return;
    }

    // Basic email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert(" Please enter a valid email address.");
      return;
    }

    // Success message
    alert(` Thank you, ${name}! Your message has been sent successfully.`);
    
    // Reset form
    document.getElementById("contactForm").reset();
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
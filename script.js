```javascript
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("result").textContent =
        "Thank you, " + name + "! Your message has been submitted.";

    document.getElementById("contactForm").reset();
});
```

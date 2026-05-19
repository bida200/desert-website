console.log("JS connected");
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
const items = document.querySelectorAll(".dessert-item");

items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.05)";
        item.style.transition = "0.3s";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
    });
});
const revealItems = document.querySelectorAll(".dessert-item");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    revealItems.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < trigger) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
});
function goToOrder(item) {
    localStorage.setItem("selectedItem", item);
    window.location.href = "order.html";
}
document.addEventListener("DOMContentLoaded", function () {

    const rows = document.querySelectorAll("table tr");

    rows.forEach(row => {
        row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "#ffdbe5";
            row.style.cursor = "pointer";
        });

        row.addEventListener("mouseleave", () => {
            row.style.backgroundColor = "";
        });

        row.addEventListener("click", () => {
            row.style.transform = "scale(1.01)";
            row.style.transition = "0.2s";

            setTimeout(() => {
                row.style.transform = "scale(1)";
            }, 200);
        });
    });

});
const images = document.querySelectorAll("table img");

images.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "0.3s";
        img.style.zIndex = "10";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const selected = localStorage.getItem("selectedItem");
    const display = document.getElementById("selected-item");

    if (selected && display) {
        display.textContent = "Selected item: " + selected;

        // Auto-check matching checkbox
        const checkboxes = document.querySelectorAll("input[name='desserts']");
        checkboxes.forEach(box => {
            if (box.value.toLowerCase().includes(selected.toLowerCase())) {
                box.checked = true;
            }
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {
const deliveryOption = document.querySelector("select[name='delivery_option']");
const addressBox = document.getElementById("address-box");

if (deliveryOption && addressBox) {
    addressBox.style.display = "none";

    deliveryOption.addEventListener("change", function () {
        if (this.value === "Delivery") {
            addressBox.style.display = "block";
        } else {
            addressBox.style.display = "none";
        }
    });
}
});
document.addEventListener("DOMContentLoaded", function () {

    const prices = {
        "Brownie - Chocolate": 15,
        "Brownie - Caramel": 15,
        "Cookie - Chocolate Chip": 5,
        "Cookie - Oatmeal Raisin": 5,
        "Cake - Red Velvet": 100,
        "Cake - Carrot": 100,
        "Cupcake - Lemon": 7,
        "Cupcake - Oreo": 7
    };

    const dessertBoxes = document.querySelectorAll(".dessert-item");
    const quantityInput = document.querySelector("input[name='total_quantity']");
    const totalDisplay = document.getElementById("total-price");

    if (!dessertBoxes.length || !quantityInput || !totalDisplay) return;

    function calculateTotal() {
        let total = 0;
        let quantity = parseInt(quantityInput.value) || 1;

        dessertBoxes.forEach(box => {
            if (box.checked && prices[box.value]) {
                total += prices[box.value];
            }
        });

        total = total * quantity;
        totalDisplay.textContent = total;
    }

    dessertBoxes.forEach(box => {
        box.addEventListener("change", calculateTotal);
    });

    quantityInput.addEventListener("input", calculateTotal);

});
document.querySelector("form").addEventListener("submit", function () {
    alert("Your order has been submitted successfully!");
});

    // ===== IMAGE HOVER =====
    const aboutImage = document.querySelector(".container img");

    if (aboutImage) {
        aboutImage.addEventListener("mouseenter", () => {
            aboutImage.style.transform = "scale(1.05)";
            aboutImage.style.transition = "0.3s";
        });

        aboutImage.addEventListener("mouseleave", () => {
            aboutImage.style.transform = "scale(1)";
        });
    }

    // ===== LIST HOVER =====
    const listItems = document.querySelectorAll("ul li");

    listItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.color = "#ff69b4";
        });

        item.addEventListener("mouseleave", () => {
            item.style.color = "";
        });
    });
;
function copyEmail() {
    navigator.clipboard.writeText("delightfultreats@gmail.com");
    alert("Email copied!");
}
// ===== ABOUT PAGE TYPING EFFECT (SAFE VERSION) =====
(function () {

    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return; // stop if not on About page

    const text = "Hello there, my name is Rose Smith. I operate a dessert shop in Gaborone, Block 9. I am a self-taught baker who developed a passion during my school years.";

    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 60);
        }
    }

    // small delay to make sure page is loaded
    setTimeout(typeEffect, 300);

})();
// ===== REVIEW SYSTEM =====
(function () {

    const form = document.getElementById("reviewForm");
    const reviewList = document.getElementById("reviewList");

    if (!form || !reviewList) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const rating = document.getElementById("ratingValue").value;
        const comment = document.getElementById("comment").value;
        const date = document.getElementById("date").value;

        if (!rating || comment.trim() === "") {
            alert("Please add rating and comment");
            return;
        }

        const reviewCard = document.createElement("div");
        reviewCard.className = "card p-3 mb-2 shadow-sm";

        reviewCard.innerHTML = `
            <strong>Rating:</strong> ${rating.value} ⭐ <br>
            <strong>Comment:</strong> ${comment} <br>
            <small>${date}</small>
        `;

        reviewList.prepend(reviewCard);

        form.reset();
    });

})();
// ===== STAR RATING SYSTEM =====
(function () {

    const stars = document.querySelectorAll(".star");
    const ratingInput = document.getElementById("ratingValue");

    if (!stars.length) return;

    stars.forEach(star => {
        star.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            ratingInput.value = value;

            stars.forEach(s => s.classList.remove("active"));

            for (let i = 0; i < value; i++) {
                stars[i].classList.add("active");
            }
        });
    });

})();
// ===== PAGE FADE IN =====
document.body.style.opacity = "0";

window.addEventListener("load", () => {
    document.body.style.transition = "1s";
    document.body.style.opacity = "1";
});
function goToPage(page) {
    document.body.classList.add("slide-out");

    setTimeout(() => {
        window.location.href = page;
    }, 500);
}
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
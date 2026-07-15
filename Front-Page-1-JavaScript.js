const deals = {
    website1: { time: "2", price: 50 },
    website2: { time: "4", price: 90 },
    website3: { time: "1", price: 150 },
    pythonSimple: { time: "3", price: 40 },
    pythonComplex: { time: "2", price: 250 }
};

function setDeal(name) {
    document.getElementById(`${name}-time`).textContent =
        `Waiting time: ${deals[name].time}`;

    document.getElementById(`${name}-price`).textContent =
        `Price: € ${deals[name].price}`;
}

setDeal("website1");
setDeal("website2");
setDeal("website3");
setDeal("pythonSimple");
setDeal("pythonComplex");








const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => {
    observer.observe(el);
});


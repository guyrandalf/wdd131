document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    const productArray = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averageRating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averageRating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averageRating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averageRating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averageRating: 5.0
        }
    ];

    const productSelect = document.getElementById("productName");
    if (productSelect) {
        productArray.forEach((product) => {
            let option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    const reviewForm = document.querySelector('form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission
            const formData = new FormData(this);
            const queryString = new URLSearchParams(formData).toString();
            const actionUrl = this.action.includes('?') ? this.action : this.action + '?';
            const finalUrl = actionUrl + (actionUrl.endsWith('?') ? '' : '&') + queryString + '&submitted=true';
            console.log(`Form submission URL: ${finalUrl}`);
            window.location.href = finalUrl;
        });
    }

    if (window.location.pathname.includes("review.html")) {
        const submittedValue = new URLSearchParams(window.location.search).get('submitted');
        if (submittedValue === 'true') {
            let reviewCount = localStorage.getItem("reviewCount");
            reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
            localStorage.setItem("reviewCount", reviewCount);

            const header = document.querySelector('header');
            if (header) {
                const message = document.createElement('div');
                message.innerHTML = `<h2>Thank you for your review!</h2><p>You have submitted ${reviewCount} reviews.</p>`;
                header.insertAdjacentElement('afterend', message);
            }
        }
    }
});
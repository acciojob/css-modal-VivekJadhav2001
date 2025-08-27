const openBtn = document.getElementById("openModal");
        const modal = document.getElementById("myModal");
        const closeBtn = document.querySelector(".close-modal");

        // Open
        openBtn.onclick = () => {
            modal.style.display = "block";
        };

        // Close (button)
        closeBtn.onclick = () => {
            modal.style.display = "none";
        };

        // Close (outside click)
        modal.addEventListener("click", (e) => {
            if (!e.target.closest(".modal-content")) {
                modal.style.display = "none";
            }
        });

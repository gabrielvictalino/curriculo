const images = document.querySelectorAll("img");

images.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(2.5)";

        img.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});
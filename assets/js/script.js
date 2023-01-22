// Open Modal

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");

// Close Modal

const botaoFecharModal = document.querySelector(".fechar-modal");

// Pause Modal Video 

const video = document.getElementById("video");

// Reset Modal Video

const linkDoVideo = video.src;

// Toggle Modal

function alternarModal () {
    modal.classList.toggle("aberto");
}

// Open Function

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

// Close Function

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

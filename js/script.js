// Seleciona o tema com base no toggle
const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
});

window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const scrollPosition = window.pageYOffset;
    const offset = aboutSection.offsetTop;
    const parallaxSpeed = 0.5; // Ajuste a velocidade aqui (0.3 a 0.5 funciona bem)

    // Verifica se estamos na posição da seção
    if (scrollPosition >= offset - window.innerHeight && scrollPosition <= offset + aboutSection.offsetHeight) {
        const parallaxOffset = (scrollPosition - offset) * parallaxSpeed;
        aboutSection.style.setProperty('--parallax-offset', `${parallaxOffset}px`);
    }
});

// Função para alternar a classe flipped no card ao clicar
function toggleFlip(card) {
    const cardInner = card.querySelector('.card-inner');
    // Alterna a classe 'flipped' para mostrar o card-back
    cardInner.classList.toggle('flipped');
}

// Reseta o flip ao sair do card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        const cardInner = card.querySelector('.card-inner');
        cardInner.classList.remove('flipped');
    });
});

function autoResize(textarea) {
    textarea.style.height = "auto"; // Redefine a altura para que possa crescer
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px"; // Ajusta a altura até o limite
}
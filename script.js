// Atualiza o ano automaticamente no rodapé
document.getElementById('current-year').textContent = new Date().getFullYear();

// Suaviza o scroll ao clicar em links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

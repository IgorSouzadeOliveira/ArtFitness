// Seu JavaScript Personalizado

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: Log no console quando a página é carregada
    console.log('Landing page ArtFitness (Loja de Equipamentos) carregada com sucesso!');

    // Adiciona um evento de clique no botão "Explore Nossos Produtos" da Hero Section
    const btnHero = document.querySelector('.btn-primary-custom-outline');
    if (btnHero) {
        btnHero.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            alert('Aguarde nosso catálogo detalhado de equipamentos!');
        });
    }

    // Você pode adicionar mais interatividade aqui, como sliders de produtos,
    // formulários de contato interativos, etc.
});

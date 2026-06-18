// Aguarda o HTML carregar completamente antes de rodar a mágica
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona a opção "Com certeza" pelo ID
    const opcaoComCerteza = document.getElementById('icomctz');
    
    // Seleciona todos os inputs que estão dentro das divs com a classe "armadilha"
    const opcoesNegativas = document.querySelectorAll('.armadilha input');

    // Para cada opção negativa, adiciona um evento que "escuta" o clique
    opcoesNegativas.forEach(function(checkboxNegativo) {
        checkboxNegativo.addEventListener('click', function(event) {
            
            // 1. Impede a ação padrão (ou seja, não deixa a caixinha negativa ser marcada)
            event.preventDefault(); 
            
            // 2. Marca a opção "Com certeza" instantaneamente no lugar
            opcaoComCerteza.checked = true; 
            
        });
    });
});
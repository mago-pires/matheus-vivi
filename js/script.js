// Inicializa o AOS (Animação de scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000, // Duração da animação em milissegundos
        once: true      // Anima só na primeira vez que rola
    });
}

// ===============================================
// 1. LÓGICA DOS CORAÇÕES (Só roda na index/bg-romantico)
// ===============================================
const heartsContainer = document.getElementById('hearts-container');

if (heartsContainer) {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤'; // Símbolo do coração

        // Posição horizontal aleatória
        heart.style.left = Math.random() * 100 + 'vw';

        // Tamanho aleatório
        const size = Math.random() * 20 + 10 + 'px'; // entre 10px e 30px
        heart.style.fontSize = size;

        // Duração da subida aleatória (entre 3s e 8s)
        heart.style.animationDuration = Math.random() * 5 + 3 + 's';

        heartsContainer.appendChild(heart);

        // Remove o coração do DOM depois que animação acabar para não pesar
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }

    // Cria um coração a cada 300ms
    setInterval(createHeart, 300);
}


// ===============================================
// 2. LÓGICA DOS CARDS (Só roda na retrospectiva)
// ===============================================
const containerMemorias = document.getElementById('container-memorias');

if (containerMemorias) {

    // SEU ARRAY DE DADOS (PREENCHA AQUI)
    const memorias = [
        {
            mes: "Novembro 2024",
            foto: "imagens/foto1.jpeg", // Caminho da foto
            texto: "O dia em que tudo começou, a minha melhor decisão."
        },
        {
            mes: "Dezembro 2024",
            foto: "imagens/foto2.jpeg",
            texto: "Uma noite cheia de orgulho da minha princesa se formando!"
        },
        {
            mes: "Janeiro 2025",
            foto: "imagens/foto3.jpeg",
            texto: "O primeiro dia do ano marcado com a melhor companhia do mundo."
        },

        {
            mes: "Fevereiro 2025",
            foto: "imagens/foto4.jpeg",
            texto: "Uma sessao de fotos e muitas risadas kakakaka"
        },

        {
            mes: "Março 2025",
            foto: "imagens/foto5.jpeg",
            texto: "Voce estava belissima com o vestido branco que te caiu como uma luva"
        },

        {
            mes: "Abril 2025",
            foto: "imagens/foto6.jpeg",
            texto: "Nesse dia voce ficou tao animada por achar a melhor iluminaçao para a foto"
        },

        {
            mes: "Maio 2025",
            foto: "imagens/foto7.jpeg",
            texto: "O dia que a gente foi voar mesmo com voce tendo medo de altura kakakakak."
        },

        {
            mes: "Junho 2025",
            foto: "imagens/foto8.jpeg",
            texto: "Cuidando da minha princesa."
        },

        {
            mes: "Julho 2025",
            foto: "imagens/foto9.jpeg",
            texto: "Minutos antes de tirar o fatidico siso kakaka."
        },

        {
            mes: "Agosto 2025",
            foto: "imagens/foto10.jpeg",
            texto: "O cabelo vermelho mais lindo que ja vi na minha vida!"
        },

        {
            mes: "Setembro 2025",
            foto: "imagens/foto11.jpeg",
            texto: "Sendo saudavel juntos kakaka."
        },

        {
            mes: "Outubro 2025",
            foto: "imagens/foto12.jpeg",
            texto: "Voltando do culto sempre servindo ao seu lado!"
        },

        // Adicione mais meses aqui...
        {
            mes: "Hoje",
            foto: "imagens/foto13.jpeg",
            texto: "Um ano depois e eu te amo mais do que nunca. Obrigado por tudo meu amor!"
        }
    ];

    // Função que renderiza os cards
    memorias.forEach((item, index) => {
        // Alterna o lado do fade (esquerda/direita) para ficar dinâmico
        const animacao = index % 2 === 0 ? 'fade-right' : 'fade-left';

        const cardHTML = `
            <div class="col-md-6 col-lg-4 mb-4" data-aos="${animacao}">
                <div class="card card-memoria shadow-lg h-100">
                    <div class="card-header bg-white border-0 pt-4 pb-0 text-center">
                        <h3 class="fonte-destaque" style="color: #ff758c;">${item.mes}</h3>
                    </div>
                    <div class="card-body text-center">
                        <img src="${item.foto}" class="card-img-top rounded mb-3 shadow-sm" alt="${item.mes}">
                        <p class="card-text fs-5 text-muted">${item.texto}</p>
                    </div>
                </div>
            </div>
        `;

        containerMemorias.innerHTML += cardHTML;
    });
}

// Verificamos se estamos na página de retrospectiva procurando o player
const player = document.getElementById('player-musica');
const btnPlay = document.getElementById('btn-play-musica');

if (player) {
    // Tenta tocar automaticamente assim que carregar
    player.volume = 0.5; // 50% do volume para não assustar
    const promessaPlay = player.play();

    if (promessaPlay !== undefined) {
        promessaPlay.catch(error => {
            // Se cair aqui, o navegador bloqueou o autoplay
            console.log("Autoplay bloqueado. Mostrando botão de play.");

            // Mostra o botão de música
            if (btnPlay) {
                btnPlay.style.display = "flex";

                // Adiciona animação de "pulsar" para chamar atenção
                btnPlay.style.animation = "pulse 2s infinite";
            }
        });
    }

    // Se o botão for clicado, toca a música e esconde o botão
    if (btnPlay) {
        btnPlay.addEventListener('click', () => {
            player.play();
            btnPlay.style.display = "none"; // Ou pode deixar visível para ela pausar se quiser
        });
    }
}
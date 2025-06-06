document.addEventListener('DOMContentLoaded', function() {
    incializarInteracoes();
});

function incializarInteracoes() {
    const formGerador = document.getElementById('form-gerador');
    if (formGerador) {
        formGerador.addEventListener('submit', function(e) {
            e.preventDefault();
            gerarImagem();
        });
    }
    
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            enviarContato();
        });
    }
}

function salvarImagem() {
    alert('Imagem salva na galeria com sucesso!');
}

function enviarContato() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    const feedback = document.getElementById('feedback-contato');
    if (feedback) {
        feedback.style.display = 'block';
        feedback.innerHTML = '<p>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>';
        
        document.getElementById('form-contato').reset();
        
        setTimeout(function() {
            feedback.style.display = 'none';
        }, 5000);
    }
}

function gerarImagem() {
    const prompt = document.getElementById('prompt').value;
    if (!prompt) {
        alert('Por favor, descreva a imagem que deseja gerar.');
        return;
    }
    
    const feedback = document.getElementById('feedback-geracao');
    const resultado = document.getElementById('resultado-geracao');
    
    if (feedback) feedback.style.display = 'block';
    if (resultado) resultado.innerHTML = '';
    
    setTimeout(function() {
        if (feedback) feedback.style.display = 'none';
        
        if (resultado) {
            resultado.innerHTML = `
                <h3>Imagem gerada com sucesso!</h3>
                <p>Prompt utilizado: "${prompt}"</p>
                <div class="imagem-gerada">
                    <img src="assets/landscape-placeholder.svg" alt="Imagem gerada por IA baseada no prompt: ${prompt}">
                </div>
                <button class="btn" onclick="salvarImagem('${prompt}')">Salvar na Galeria</button>
                <button class="btn" onclick="downloadImagem('assets/landscape-placeholder.svg', 'imagem_gerada.png')">Download</button>
            `;
        }
    }, 2000);
}

function downloadImagem(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}
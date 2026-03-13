const terminalInput = document.getElementById('terminal-cmd');
const display = document.getElementById('terminal-display');
const terminalContent = document.getElementById('terminal-content');

// Usaremos 'caminhos' em todo o código para ser consistente
const caminhos = {
    '/sobre': 'sobre',
    '/projeto': 'projeto',
    '/habilidades': 'habilidades',
    '/contato': 'contato'
};

terminalInput.addEventListener('keydown', function(event) {
    // 1. CORREÇÃO: O 'T' do Tab deve ser maiúsculo
    if (event.key === 'Tab') {
        event.preventDefault();

        const fullCmd = this.value.trim().toLowerCase(); // Corrigido de fullCmc
        const parts = fullCmd.split(' ');

        if (parts[0] === 'cd' && parts[1] !== undefined) {
            const typedPath = parts[1];
            // Corrigido para usar 'caminhos'
            const matches = Object.keys(caminhos).filter(s => s.startsWith(typedPath));

            if (matches.length === 1) {
                this.value = `cd ${matches[0]}`;
                this.style.width = (this.value.length + 1) + "ch";
            } else if (matches.length > 1) {
                addMessage(`Opções: ${matches.join(' ')}`);
            }
        }
        this.setSelectionRange(this.value.length, this.value.length);
    }

    if (event.key === 'Enter') {
        const fullCmd = this.value.trim().toLowerCase();
        const parts = fullCmd.split(' ');
        const command = parts[0]; // Corrigido: você usou 'command' aqui...
        const path = parts[1];

        // ...mas tentou usar 'cmd' e 'sections' aqui. Vamos corrigir:
        if (command === 'cd' && caminhos[path]) {
            executeNavigation(path, caminhos[path]);
        }
        else if (command === 'ls') {
            listDirectories();
        }
        else if (fullCmd === 'help') {
            addMessage("[AJUDA] Comandos:");
            addMessage("  ls                - Lista diretórios");
            addMessage("  cd [diretório]    - Navega (use Tab para completar)");
            addMessage("  clear             - Limpa o terminal");
        }
        else if (fullCmd === 'clear') {
            terminalContent.innerHTML = '';
            display.scrollTop = 0;

            window.scrollTo({

                 top: 0,
            behavior: 'smooth' // O 'smooth' faz aquele deslize bonito até o início
            });
        }
        else if (fullCmd !== '') {
            addMessage(`sh: command not found: ${fullCmd}`, 'error-msg');
        }
        this.value = '';
        // Reseta a largura do input após limpar
        this.style.width = "10ch";
    }
});

// Faz o input crescer conforme você digita
terminalInput.addEventListener('input', function() {
    this.style.width = (this.value.length + 1) + "ch";
});

function addMessage(text, className = 'system-msg') {
    const msg = document.createElement('div');
    msg.className = className;
    msg.innerText = text;
    terminalContent.appendChild(msg);
    display.scrollTop = display.scrollHeight;
}

function listDirectories() {
    addMessage("user@analuiza:~$ ls", 'user-cmd');
    // Corrigido para usar 'caminhos'
    const dirs = Object.keys(caminhos).join('   ');
    addMessage(dirs, 'success-msg');
}

async function executeNavigation(path, targetId) {
    addMessage(`user@visitante:~$ cd ${path}`, 'user-cmd');
    
    const steps = [
        `[INFO] Acessando ${path}...`,
        `[INFO] Validando tokens de sessão...`,
        `[OK] Identidade confirmada.`,
        `[SISTEMA] Carregando módulos de interface...`,
    ];

    for (const step of steps) {
        await new Promise(resolve => setTimeout(resolve, 150));
        addMessage(step);
    }

    addMessage(`>> Sucesso! Movendo para ${path}`, 'success-msg');

    const section = document.getElementById(targetId);
    if (section) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
}
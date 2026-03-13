<div align="center">

# 💻 `<PortfolioTerminal/>`

✨ Onde o design encontra a interatividade! Meu portfólio pessoal desenvolvido com foco em experiência do usuário (UX) e estética **Dark Mode moderna**. Apresenta uma interface que simula um **terminal interativo**, navegação fluida e layout responsivo.
100% autoral, utilizando as bases fundamentais da web. Aprenda **manipulação de DOM, estilização avançada com CSS e semântica HTML** enquanto navega pela minha jornada! 🚀

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Status](https://img.shields.io/badge/Version-1.0_Launch-brightgreen?style=for-the-badge)

### ⌨️ Where Design Meets Command Line

*Portfólio interativo que demonstra habilidades de Front-end de forma criativa*

[🌐 Ver Online](#-como-executar) • [💡 Conceitos](#-conceitos-web-aplicados) • [🚀 Features](#-funcionalidades)

</div>

---

# 🧠 Sobre o Projeto

**ESTA É A PRIMEIRA VERSÃO (V1.0)** do meu site pessoal.
O **`<PortfolioTerminal/>`** representa minha identidade inicial como desenvolvedora.

Ele foge do comum ao integrar um **terminal funcional**, onde o visitante pode navegar pelas seções através de comandos, unindo a nostalgia da linha de comando com a modernidade dos **gradientes e efeitos de vidro (Glassmorphism)**.

### Diferencial

Por ser o **lançamento oficial do meu site**, cada linha de código foi pensada para demonstrar domínio das tecnologias base (**HTML, CSS e JavaScript**).

O sistema de navegação via terminal (`cd /projeto`, `ls`) demonstra **lógica de eventos pura**, sem frameworks, marcando o início da minha presença digital.

### Ideal para

* ✅ Demonstrar domínio de **JavaScript Vanilla**
* ✅ Apresentar projetos de forma **imersiva**
* ✅ Provar habilidades em **design responsivo e layout 70/30**

---

# 🚀 Funcionalidades

## 📟 Terminal Interativo (Core V1)

* Navegação por comandos reais (`cd`, `ls`, `clear`)
* Autocomplete funcional com a tecla **Tab**
* Feedback de sistema simulado com latência para realismo

## 🎨 UI/UX Moderna

* Background dinâmico com **gradientes radiais**
* Estética **Glassmorphism** nos cards
* Tipografia baseada na fonte **Outfit**

## 📱 Responsividade

* Layout adaptável para **mobile e desktop**
* Transições suaves entre seções

---

# 🧱 Estrutura do Projeto

```text
portfolio-v1/
├── index.html           # Estrutura semântica e seções
├── style.css            # Estilização, gradientes e layout
├── script.js            # Motor do terminal e lógica de navegação
├── assets/              # Imagens e ícones
└── README.md
```

---

# 🧠 Conceitos Web Aplicados

## ✅ Manipulação de DOM (Vanilla JS)

```javascript
terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const fullCmd = this.value.trim().toLowerCase();
        handleCommand(fullCmd);
    }
});
```

## ✅ Background Multi-Gradient (CSS)

```css
body {
    background-image: 
        radial-gradient(at 0% 0%, rgba(255, 210, 170, 0.3) 0%, transparent 60%),
        radial-gradient(at 0% 50%, rgba(150, 80, 255, 0.4) 0%, transparent 75%);
    background-attachment: fixed;
}
```

## ✅ Feedback Visual de Comando

```javascript
async function executeNavigation(path, targetId) {
    addMessage(`[INFO] Acessando ${path}...`);
    await new Promise(resolve => setTimeout(resolve, 150));
    showSection(targetId);
}
```

---

# 🖥️ Exemplo de Uso

```bash
user@visitante:~$ ls
Opções: /sobre   /projeto   /habilidades   /contato

user@visitante:~$ cd /sobre
[INFO] Acessando /sobre...
[INFO] Validando tokens de sessão...
[OK] Identidade confirmada.
🚀 Carregando perfil de Ana Luiza...
```

---

# ⚙️ Como Executar

### Pré-requisitos

* Navegador moderno (Chrome, Firefox, Safari ou Edge)

### Passos

```bash
# Clone o repositório
git clone https://github.com/aluizafullstack/seu-repositorio-v1.git

# Entre na pasta
cd seu-repositorio-v1

# Abra o arquivo
index.html
```

---

# 🔧 Tecnologias

* ✔ **HTML5** (Semântica e SEO)
* ✔ **CSS3** (Flexbox e estilização avançada)
* ✔ **JavaScript ES6+** (Manipulação de eventos e DOM)

---

# 📌 Roadmap (Próximas Versões)

Como esta é a **V1**, já planejo melhorias futuras:

* [ ] **V2.0** — Dark/Light mode alternável
* [ ] **V2.0** — Tradução completa para inglês (i18n)
* [ ] **V3.0** — Integração de backend para envio de mensagens pelo terminal

---

# 👩‍💻 Sobre

Sou **Ana Luiza**, em transição de carreira para tecnologia.
Este site marca o **marco zero da minha jornada como desenvolvedora Full Stack**.

Ele representa não apenas o que eu sei fazer, mas também meu compromisso com **evolução técnica e criatividade**.

### 🎯 Filosofia

> "Aprender construindo. Destacar-se sendo criativa."

---

# 📫 Contato

📧 Email
[a.luiza.fullstack@gmail.com](mailto:a.luiza.fullstack@gmail.com)

💼 LinkedIn
https://linkedin.com/in/analuizafullstack

🐙 GitHub
https://github.com/aluizafullstack

💬 WhatsApp
+55 47 99705-5373

---

**Desenvolvido com ☕ JavaScript e ✨ criatividade**

### `<PortfolioTerminal/>`

**Version 1.0**

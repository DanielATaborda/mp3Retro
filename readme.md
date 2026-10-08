<div align="center">

# 📼 mp3Retro

**Um player de MP3 com alma de aparelho antigo, rodando direto no seu desktop.**

![Electron](https://img.shields.io/badge/Electron-29-47848F?style=for-the-badge&logo=electron&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/status-finalizado-success?style=for-the-badge)
![Licença](https://img.shields.io/badge/licença-ISC-blue?style=for-the-badge)

</div>

---

## 🎧 Sobre o projeto

O **mp3Retro** é um aplicativo desktop que recria a experiência dos antigos players de MP3: um visor, botões físicos de controle e aquele charme nostálgico de quando carregar músicas era um ritual.

Foi construído com **Electron**, **HTML**, **CSS** e **JavaScript puro**, sem frameworks de interface. Nesta versão o projeto está **concluído**, e fica aqui como registro do que foi construído.

## ✨ Funcionalidades

- ▶️ **Controles clássicos:** play, pause, faixa anterior e próxima
- 📊 **Barra de progresso** com tempo atual e duração da faixa
- 🔊 **Controle de volume** deslizante
- 🏠 **Tela Home** com a faixa em reprodução (nome da música e artista)
- 💿 **Tela Álbum** com a lista de músicas carregadas
- 📥 **Tela Upload** para adicionar novas músicas, informando nome, artista e o arquivo
- 🎵 **Formatos suportados:** `.mp3` e `.wav`
- 🔁 **Botões de repeat e shuffle** na interface
- 🪟 **Janela própria de desktop** com botão de fechar integrado ao visual do player

## 🗂️ Navegação do visor

| Ícone | Tela | O que faz |
| :---: | :--- | :--- |
| 🏠 | **Home** | Mostra a música tocando, progresso e volume |
| 💿 | **Álbum** | Lista as músicas disponíveis |
| 📥 | **Upload** | Cadastra uma nova música no player |

## 🛠️ Tecnologias

| Tecnologia | Uso |
| :--- | :--- |
| [Electron](https://www.electronjs.org/) `^29.1.1` | Aplicativo desktop multiplataforma |
| [Electron Forge](https://www.electronforge.io/) `^7.3.0` | Ferramentas de empacotamento |
| [electron-reload](https://github.com/yan-foto/electron-reload) | Recarregamento automático durante o desenvolvimento |
| [Boxicons](https://boxicons.com/) | Ícones da interface |
| HTML + CSS + JavaScript | Interface e lógica do player |

## 📁 Estrutura do projeto

```
mp3Retro/
├── src/               # Recursos do projeto
├── index.html         # Estrutura da interface do player
├── style.css          # Visual retrô
├── main.js            # Processo principal do Electron
├── preload.js         # Ponte segura entre main e renderer
├── renderer.js        # Lógica da interface (renderer)
├── music.js           # Lógica de reprodução e playlist
├── package.json       # Dependências e scripts
└── readme.md          # Você está aqui!
```

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/DanielATaborda/mp3Retro.git

# 2. Entre na pasta do projeto
cd mp3Retro

# 3. Instale as dependências
npm install

# 4. Inicie o aplicativo
npm start
```

Pronto! O player abrirá em uma janela de desktop. 🎶

## 🎮 Como usar

1. Abra a tela de **Upload** (ícone de arquivo no topo do visor).
2. Digite o **nome da música** e o **artista**.
3. Selecione um arquivo `.mp3` ou `.wav` e clique em **Submit**.
4. Vá até a tela **Álbum** para ver sua lista e escolher uma faixa.
5. Volte para a **Home** e aproveite o som com os controles de play, volume e navegação.

## 📌 Status do projeto

Este projeto está **finalizado** na versão atual (`v1.0.0`) e **não deve receber novas atualizações**. Fique à vontade para explorar o código, aprender com ele ou fazer um fork para evoluir por conta própria!

## 🤝 Contribuindo

Como o projeto está encerrado, não estou aceitando contribuições no repositório original. Mesmo assim, forks são bem-vindos:

1. Faça um fork do projeto
2. Crie sua branch: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m "Minha feature"`
4. Envie para o seu fork: `git push origin minha-feature`

## 📄 Licença

Distribuído sob a licença **ISC**.

## 👤 Autor

Feito com 💜 e muita nostalgia por **Daniel A. Taborda**

[![GitHub](https://img.shields.io/badge/GitHub-DanielATaborda-181717?style=for-the-badge&logo=github)](https://github.com/DanielATaborda)

---

<div align="center">

⭐ Se curtiu o projeto, deixe uma estrela no repositório!

</div>

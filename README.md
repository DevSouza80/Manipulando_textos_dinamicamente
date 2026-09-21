# 📝 Manipulando Textos Dinamicamente

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

Projeto de estudo focado na **manipulação dinâmica de textos e elementos do DOM** utilizando **jQuery**. Ele demonstra, de forma prática, como inserir conteúdo HTML, alterar textos, ler valores de campos de formulário e tratar strings com JavaScript.

---

## 📋 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como executar](#-como-executar)
- [Conceitos abordados](#-conceitos-abordados)
- [Exemplos de código](#-exemplos-de-código)
- [Próximos passos](#-próximos-passos)
- [Autor](#-autor)

---

## 📖 Sobre o projeto

Este repositório reúne exercícios de manipulação de texto no front-end. A página possui um formulário simples com um campo de texto e um botão. Ao clicar em **Enviar**, o script lê o valor digitado, trata a string (separação por delimitador, corte de caracteres, remoção de espaços) e reage de acordo com o conteúdo, por exemplo, verificando o domínio de um e-mail.

Além disso, o código traz exemplos comentados de inserção de HTML e texto em elementos, úteis como referência de estudo.

## ✨ Funcionalidades

- Inserção de HTML dentro de elementos com `.html()`
- Inserção de texto puro (sem interpretar HTML) com `.text()`
- Definição e leitura de valores de campos com `.val()`
- Separação de strings por delimitador com `split()`
- Extração de trecho da string com `substr()`
- Remoção de espaços em branco com `trim()`
- Alteração de estilos via `.css()`
- Validação simples de domínio de e-mail (`@hotmail.com`)

## 🛠 Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura da página e formulário |
| **CSS3** | Estilização |
| **JavaScript (ES5+)** | Lógica e tratamento de strings |
| **jQuery 4.0.0** | Seleção e manipulação do DOM |

## 📂 Estrutura do projeto

```
📦 manipulando-textos-dinamicamente
 ┣ 📂 css
 ┃ ┗ 📜 style.css
 ┣ 📂 jquery
 ┃ ┗ 📜 jquery-4.0.0.min.js
 ┣ 📂 js
 ┃ ┗ 📜 function.js
 ┣ 📜 index.html
 ┗ 📜 README.md
```

## 🚀 Como executar

Não é necessário instalar dependências. O jQuery já está incluído no projeto.

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/manipulando-textos-dinamicamente.git
   ```

2. **Acesse a pasta do projeto**

   ```bash
   cd manipulando-textos-dinamicamente
   ```

3. **Abra o `index.html` no navegador**

   Basta dar um duplo clique no arquivo ou usar uma extensão como o *Live Server* (VS Code).

4. **Teste a aplicação**

   Digite um e-mail no campo de texto (ex.: `usuario@hotmail.com`), clique em **Enviar** e abra o **Console do navegador** (`F12`) para acompanhar os resultados.

## 🧠 Conceitos abordados

- **Seletores jQuery**: por classe (`.box`) e por atributo (`input[type=text]`)
- **Diferença entre `.html()` e `.text()`**: o primeiro interpreta tags HTML, o segundo trata tudo como texto puro
- **Eventos**: uso de `.click()` para reagir à interação do usuário
- **Manipulação de strings**: `split`, `substr` e `trim`
- **Estruturas condicionais**: `if / else` para validar o conteúdo digitado
- **Depuração**: uso de `console.log()` para inspecionar valores

## 💻 Exemplos de código

**Inserindo HTML em um elemento**

```javascript
$('.box').html('<h1 class="text1">Meu texto via javascript!</h1>');
```

**Inserindo texto puro (tags não são interpretadas)**

```javascript
$('.box2').text('<div></div>');
```

**Definindo o valor de um campo**

```javascript
$('input[type=text]').val('Olá mundo!');
```

**Validando o domínio de um e-mail**

```javascript
$('input[type=button]').click(function () {
    var str = $('input[type=text]').val();
    var partes = str.split('@');

    if (partes[1] === 'hotmail.com') {
        $('input[type=text]').css('opacity', '0');
    } else {
        console.log('A condição não bateu!');
    }
});
```

## 🔮 Próximos passos

- [ ] Adicionar validação completa de e-mail com expressões regulares
- [ ] Exibir mensagens de feedback na tela em vez de apenas no console
- [ ] Melhorar o layout e a responsividade com CSS
- [ ] Refatorar o código para JavaScript puro (Vanilla JS)

## 👤 Autor

Desenvolvido por **Seu Nome**.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)

---

⭐ Se este projeto te ajudou nos estudos, deixe uma estrela no repositório!

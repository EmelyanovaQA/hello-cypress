# Туториал: первый полет на Cypress

Подойдет тем, кто хочет начать писать автоматизированные тесты.

# 👍 Что сделаем

* Создадим чистый **Java Script** проект на **Node.js**.
* Установим **Cypress** через менеджер пакетов **npm**.
* Напишем авто-тест подписки на рассылку **Cypress**.

# 🙋‍ Перед началом

* Ты знаком с основами ручного тестирования приложений.
* Ты знаешь как запустить [терминал командной строки](https://www.youtube.com/watch?v=M4CkQuOAFjw)
* У тебя установлен [Visual Code](https://code.visualstudio.com/)
* У тебя установлен [Node.js](https://nodejs.org/), если что [мини-инструкция](https://md.epic1h.com/install_node)

# 🧐 Как использовать туториал

## Реагируй на пункты

<img width="300" src="../img/tutorial/shit.gif">

## Оставляй комментарии и вопросы

<img width="300" src="../img/tutorial/commenting.gif">

## В конце оставь фидбек

<img width="300" src="../img/tutorial/feedback.gif">

*****

# 🔢 Шаги

## 1. Инициализируем проект

> **Node.js** — среда выполнения **Java Script** и менеджер пакетов **npm**.

- [x] Создай папку `%/projects/cypress/test_flight`
- [x] В **Visual Code** открой папку проекта.
- [x] Открой **Терминал** → **Новый терминал**.
- [x] Выполни в терминале `npm init`
- [x] На все вопросы нажми `ENTER ↵`, а в конце введи `yes` + `ENTER ↵`
- [x] Проверь что в папке проекта появился файл `package.json`

<details>
  <summary>Не получается 🤯</summary>

<video width="600px" controls>
  <source src="https://s.epic1h.com/api/public/dl/fumdib2k?inline=true" type="video/mp4">
</video>
</details>

* ❓ Что такое инициализация проекта?
* ❓ Зачем нужен файл `package.json`?

<details>
  <summary>Крутая фишка 😎</summary>

Можно выполнить команду `npm init -y` и файл `package.json` будет создан сразу. 
</details>

*****

## 2. Ставим Cypress

- [x] Выполни команду `npm install cypress@9`
- [x] В `package.json` добавь команду `cypress` в раздел `scripts`:

```json
...
  "scripts": {
    "cypress": "cypress",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
...
```
- [x] Не забудь сохранить файл `CTRL` + `S`

<details>
  <summary>Не получается 🤯</summary>

<video width="600px" controls>
  <source src="https://s.epic1h.com/api/public/dl/RHTCffXM?inline=true" type="video/mp4">
</video>
</details>

* ❓ Зачем нужна папка `node_modules`?
* ❓ Какой версии установлен **Cypress**?
* ❓ Зачем нужен раздел **dependencies** в `package.json`?
* ❓ Что такой **JSON**?

<details>
  <summary>Зачем добавлять команду в `package.json`?</summary>
  
Этого можно и не делать, но запускать в терминале через `./node_modules/.bin/cypress` длинно.

Мы же будем запускать через **NPM** `npm run cypress`
</details>

<details>
  <summary>Где найти все доступные версии **Cypress**?</summary>
  
На вкладке версии пакета **Cypress** в репозитарии менеджера пакетов **NPM** https://www.npmjs.com/package/cypress
</details>

*****

## 3. Первый запуск Cypress

- [x] Выполни команду `npm run cypress open`

<details>
  <summary>Не получается 🤯</summary>

<video width="600px" controls>
  <source src="https://s.epic1h.com/api/public/dl/egG3Ma3c?inline=true" type="video/mp4">
</video>
</details>

* ❓ Появилась папка `cypress` в корне проекта?
* ❓ Что за файлы `.spec.js` лежат в папке `cypress/integration`?
* ❓ Что ты видишь в окне Cypress?

*****

## 4. Запуск примера теста

- [x] В окне **Cypress** выбери `todo.spec.js`
- [x] Перезапусти тест еще раз.

<details>
  <summary>Не получается 🤯</summary>

<video width="600px" controls>
  <source src="https://s.epic1h.com/api/public/dl/Sw73qKOH?inline=true" type="video/mp4">
</video>
</details>

* ❓ Что происходит в Chrome?

*****

## 5. Пишем свой тест

- [x] Нажми `CTRL` + `C` в терминале, чтобы остановить Cypress.
- [x] Из папки `cypress/integration` удали `1-getting-started` и `2-advanced-examples`
- [x] Создай файл `cypress/integration/hello-cypress.spec.js`:

```javascript
describe('Функции сайта Cypress', () => {
it('Подписаться на рассылку', () => { 
cy.visit('https://www.cypress.io/');
});
});
```

<details>
  <summary>Не получается 🤯</summary>

<video width="600px" controls>
  <source src="https://s.epic1h.com/api/public/dl/Sk48Ckuw?inline=true" type="video/mp4">
</video>
</details>

- [x] Отформатируй код:
  * На Windows `SHIFT` + `ALT` + `F`
  * На MacOS `SHIFT` + `OPTION` + `F`
  * На Linux `CTRL` + `Shift` + `I`
- [x] Сохрани файл `CTRL` + `S`
- [x] Выполни команду `npm run cypress open`
- [x] В окне **Cypress** выбери `hello-cypress.spec.js`

<details>
  <summary>Назойливая 🤦‍️ **mocha**</summary>

**Visual Code** постоянно добавляет строчку `const { it } = require("mocha");` и код не работает?

* [x] Пропиши в начале файла теста:
```javascript
///<reference types="cypress" />
```
</details>

* ❓ Что такое `describe`?
* ❓ Что такое `it`?
* ❓ Что такое `cy.visit`?

*****

## 6. Отключаем перехват ошибок сайта

> На самом сайте Cypress есть ошибка в коде, которая не влияет на его функциональнось, но она мешает тесту успешно выполниться.
> Что бы наш тест проходил, нужно отключить перехват ошибок.

- [x] Добавь в конец файла `cypress/support/index.js`:

```javascript
Cypress.on('uncaught:exception', (err, runnable) => {
return false;
});
```

- [x] Отформатируй код и сохрани файл

<details>
  <summary>Не получается 🤯</summary>

<video width="600px" controls>
  <source src="https://s.epic1h.com/api/public/dl/mJXN2MxL?inline=true" type="video/mp4">
</video>
</details>

* ❓ Теперь тест проходит успешно?

*****

## 7. Вводим email для подписки

- [x] Прокрути страницу до формы подписки на рассылку.
- [x] Активируй **selector playground**.

<img width="200" src="../img/selector_playground.png">

- [x] Наведи на поле ввода **email**.
- [x] Скопируй код селектора.
- [x] Обнови код теста:
```javascript
describe('Функции сайта Cypress', () => {
  it('Подписаться на рассылку', () => {
      cy.visit('https://www.cypress.io/');
      cy.get('#input-footer-email').type('test@test.ru');
  });
});
```
- [x] Замени **email** в коде на свой.
- [x] Не забудь отформатировать код!
- [x] Сохрани файл.
- [x] Переключись на окно Cypress.

<details>
  <summary>Не получается 🤯</summary>

<video width="600px" controls>
  <source src="https://s.epic1h.com/api/public/dl/5bLdLRM5?inline=true" type="video/mp4">
</video>
</details>

* ❓ Что происходит в Chrome?
* ❓ Что такое `cy.get()`?
* ❓ Что такое `#input-footer-email`?
* ❓ Что такое `.type()`?

*****

## 8. Подписываемся на рассылку

- [x] Найди селектор для кнопки **Subscribe**.
- [x] Обнови код теста:
```javascript
describe('Функции сайта Cypress', () => {
  it('Подписаться на рассылку', () => {
    cy.visit('https://www.cypress.io/');
    cy.get('#input-footer-email').type('test@test.ru');
    cy.get('.styled__Submit-sc-10l91w3-12').click();
  });
});
```
- [x] Не забудь отформатировать код!

<details>
  <summary>Не получается 🤯</summary>

<video width="600px" controls>
  <source src="https://s.epic1h.com/api/public/dl/tDiRq2JK?inline=true" type="video/mp4">
</video>
</details>


* ❓ Что происходит в Chrome?
* ❓ Что такое `.styled__Submit-sc-10l91w3-12`?
* ❓ Что такое `.click()`?

*****

## 9. Проверяем подписку

- [x] Найди селектор для элемента с сообщением **Thanks for submitting the form**.
- [x] Обнови код теста:
```javascript
describe('Функции сайта Cypress', () => {
  it('Подписаться на рассылку', () => {
    cy.visit('https://www.cypress.io/');
    cy.get('#input-footer-email').type('test@test.ru');
    cy.get('.styled__Submit-sc-10l91w3-12').click();
    cy.get('.Subscribe__Label-sc-1hdnlrs-1').should('have.text', 'Thanks for submitting the form.');
  });
});
```
- [x] Не забудь отформатировать код!

<details>
  <summary>Не получается 🤯</summary>

<video width="600px" controls>
  <source src="https://s.epic1h.com/api/public/dl/jfbTFCjy?inline=true" type="video/mp4">
</video>
</details>

* ❓ Что такое `.Subscribe__Label-sc-1hdnlrs-1`?
* ❓ Что такое `.should('have.text', )`?

*****

## 10. Запускаем **Cypress** в **Headless**

- [x] Закрой **Cypress** в терминале `CTRL`+`C`
- [x] Выполи команду `npm run cypress run`

<details>
  <summary>Не получается 🤯</summary>

<video width="600px" controls>
  <source src="https://s.epic1h.com/api/public/dl/D4HgVHx0?inline=true" type="video/mp4">
</video>
</details>

* ❓ Что ты видишь в терминале?

*****

## 11. Ломаем тест

- [x] Сломай сообщение в коде:
```javascript
.should('have.text', 'Thanks for submitting the form!!!');
```
- [x] Снова запусти Cypress `npm run cypress run`

<details>
  <summary>Не получается 🤯</summary>

<video width="600px" controls>
  <source src="https://s.epic1h.com/api/public/dl/2h0DxcZY?inline=true" type="video/mp4">
</video>
</details>

* ❓ Что ты видишь в терминале?

Бинго 🥳

- [x] Сделай так, что бы тест снова работал.

# 🤩 Хочу еще

Не хватило? Поиграйся с https://automationteststore.com/

* [x] Добавь пару товаров в корзину.
* [x] Оформи заказ.

# 🤟 Быстрые рецепты

## Скорость ввода текста

500 мс между нажатием клавишей:
```javascript
cy.get('#input-footer-email')
  .type('test@test.ru', {delay: 500});
```

## Basic авторизация

Некоторые сайты могут скрываться под [Basic](https://docs.cypress.io/api/commands/visit#Add-basic-auth-headers) авторизаций. 

Например, попробуй зайти: https://finance.dev.fabrique.studio/accounts/login/

```javascript
cy.visit('https://www.cypress.io/', {
  auth: {
    username: 'user',
    password: 'password'
  }
});
```

# Фидбек пожалуйста 🙏

? Полезный материал ?
* 🤩 Очень полезный материал
* 😃 В целом полезный
* 😐 Возможно что-то пригодится
* 😒 Нет ничего полезного
* 😬 Абсолютно бесполезно

? Все ли было понятно ?
* 🤩 Все понятно на 100%
* 😃 В целом все понятно
* 😐 Что-то понятно, что-то нет
* 😒 Понял только малую часть
* 😬 Ничего не понял

? Как тебе такой формат Туториала ?
* 🤩 Очень удобно
* 😃 Мне понравилось
* 😐 Нормально
* 😒 Не удобно
* 😬 Ужасно

# Термины

* [Visual Code](https://ru.wikipedia.org/wiki/Visual_Studio_Code) — редактор исходного кода.
* [Node.js](https://ru.wikipedia.org/wiki/Node.js) — среда выволнения кода на Java Script.
* [npm](https://ru.wikipedia.org/wiki/Npm) — менеджер пакетов, входящий в состав Node.js.
* [JSON](https://ru.wikipedia.org/wiki/JSON) / JavaScript Object Notation — текстовый формат описания данных.
* [package.json](https://www.tech-wiki.online/ru/package-json.html) — [манифест](https://en.wikipedia.org/wiki/Manifest_file) проекта на **Node.js**
* [Headless](https://bureau.ru/soviet/20190418/) — полноценный браузер без графического интерфейса.

# Артефакты

* [Список рецептов](https://example.cypress.io/)
* [Todo-приложение для тестирования](https://example.cypress.io/todo)
* [Видео Cypress Automation для новичков](https://www.youtube.com/watch?v=N0Eqlz5G-Jo)
* [Первый взгляд на Cypress для end2end тестирования](https://www.youtube.com/watch?v=k7Z5_jJPOlU) 

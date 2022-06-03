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

Есть вопросы? Пиши в канал поддержки [support](https://chat.epic1h.com/channel/support)

*****

# 🔢 Шаги

## 1. Инициализируем проект

> **Node.js** — среда выполнения **Java Script** и менеджер пакетов **npm**.

- [ ] Создай папку `%/projects/cypress/test_flight`
- [ ] В **Visual Code** открой папку проекта.
- [ ] Открой **Терминал** → **Новый терминал**.
- [ ] Выполни в терминале `npm init`
- [ ] На все вопросы нажми `ENTER ↵`, а в конце введи `yes` + `ENTER ↵`
- [ ] Проверь что в папке проекта появился файл `package.json`

<timer time="03:00">
    <img src="https://via.placeholder.com/400x50?text=3 min">
</timer>

*****

* ❓ Что такое инициализация проекта?
* ❓ Зачем нужен файл `package.json`?

<details>
  <summary>Крутая фишка 😎</summary>

Можно выполнить команду `npm init -y` и файл `package.json` будет создан сразу. 
</details>

*****

## 2. Ставим Cypress

- [ ] Выполни команду `npm install cypress`
- [ ] В `package.json` добавь команду `cypress` в раздел `scripts`:

```json
...
  "scripts": {
    "cypress": "cypress",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
...
```

*****

* ❓ Зачем нужна папка `node_modules`?
* ❓ Какой версии установлен **Cypress**?
* ❓ Зачем нужен раздел **dependencies** в `package.json`?
* ❓ Что такой **JSON**?

<details>
  <summary>Зачем добавлять команду в `package.json`?</summary>
  
Этого можно и не делать, но запускать **Сypress** через `./node_modules/.bin/cypress` длинно.
</details>

*****

## 3. Первый запуск Cypress

- [ ] Выполни команду `npm run cypress open`

<timer time="01:00">
    <img src="https://via.placeholder.com/400x50?text=3 min">
</timer>

*****

* ❓ Появилась папка `cypress` в корне проекта?
* ❓ Что за файлы `.spec.js` лежат в папке `cypress/integration`?
* ❓ Что ты видишь в окне Cypress?

*****

## 4. Запуск примера теста

- [ ] В окне **Cypress** выбери `todo.spec.js`
- [ ] Перезапусти тест еще раз

*****

* ❓ Что происходит в Chrome?

*****

## 5. Пишем свой тест

- [ ] Нажми `CTRL` + `C` в терминале, чтобы закрыть Cypress.
- [ ] Из папки `cypress/integration` удали `1-getting-started` и `2-advanced-examples`
- [ ] Создай файл `cypress/integration/hello-cypress.spec.js`:

```javascript
describe('Функции сайта Cypress', () => {
it('Подписаться на рассылку', () => { 
cy.visit('https://www.cypress.io/');
});
});
```

- [ ] Отформатируй код:
  * На Windows `SHIFT` + `ALT` + `F`
  * На MacOS `SHIFT` + `OPTION` + `F`
  * На Linux `CTRL` + `Shift` + `I`
- [ ] Сохрани файл `CTRL` + `S`
- [ ] Выполни команду `npm run cypress open`
- [ ] В окне **Cypress** выбери `hello-cypress.spec.js`

*****

* ❓ Что такое `describe`?
* ❓ Что такое `it`?
* ❓ Что такое `cy.visit`?

*****

## 6. Вводим email для подписки

- [ ] Прокрути страницу до формы подписки на рассылку.
- [ ] Активируй **Selector Playground**

<img width="200" src="../img/selector_playground.png">

- [ ] Наведи на поле ввода **email**.
- [ ] Скопируй код селектора.

- [ ] Обнови код теста:
```javascript
describe('Функции сайта Cypress', () => {
    it('Подписаться на рассылку', () => {
        cy.visit('https://www.cypress.io/');
        cy.get('#input-footer-email').type('test@test.ru');
    });
});
```
- [ ] Замени **email** в коде на свой.
- [ ] Сохрани файл.
- [ ] Переключись на окно Cypress.

*****

* ❓ Что происходит в Chrome?
* ❓ Что такое `cy.get()`?
* ❓ Что такое `#input-footer-email`?
* ❓ Что такое `.type()`?

*****

## 7. Подписываемся на рассылку

- [ ] Найди селектор для кнопки **Subscribe**.
- [ ] Обнови код теста:
```javascript
describe('Функции сайта Cypress', () => {
  it('Подписаться на рассылку', () => {
    cy.visit('https://www.cypress.io/');
    cy.get('#input-footer-email').type('test@test.ru');
    cy.get('.styled__Submit-sc-10l91w3-12').click();
  });
});
```

*****

* ❓ Что происходит в Chrome?
* ❓ Что такое `.styled__Submit-sc-10l91w3-12`?
* ❓ Что такое `.click()`?

*****

## 8. Проверяем подписку

- [ ] Найди селектор для элемента с сообщением **Thanks for submitting the form**.
- [ ] Обнови код теста:
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

- [ ] Не забудь отформатировать код!

*****

* ❓ Что такое `.Subscribe__Label-sc-1hdnlrs-1`?
* ❓ Что такое `.should('have.text', )`?

*****

## 9. Запускаем **Cypress** в **Headless**

- [ ] Закрой **Cypress** в терминале `CTRL`+`C`
- [ ] Выполи команду `npm run cypress run`

*****

* ❓ Что ты видишь в терминале?

## 10. Ломаем тест

- [ ] Сломай сообщение в коде:
```javascript
.should('have.text', 'Thanks for submitting the form!!!');
```

- [ ] Снова запусти Cypress `npm run cypress run`

*****

* ❓ Что ты видишь в терминале?

Бинго 🥳

# 🤩 Хочу еще

Не хватило? Поиграйся с https://automationteststore.com/

* [ ] Добавь пару товаров в корзину.
* [ ] Оформи заказ.

# 🤟 Быстрые рецепты

## Скорость ввода текста

500 мс между нажатием клавишей:
```javascript
cy.get('#input-footer-email')
  .type('test@test.ru', {delay: 500});
```

## Basic авторизация

Некоторые тестовые задания скрываются под [Basic](https://docs.cypress.io/api/commands/visit#Add-basic-auth-headers) авторизаций. 

Например, попробуй зайти: https://finance.dev.fabrique.studio/accounts/login/

```javascript
cy.visit('https://www.cypress.io/', {
  auth: {
    username: 'user',
    password: 'password'
  }
});
```

## Назойливая 🤦‍️ `mocha`

**Visual Code** постоянно добавляет строчку `const { it } = require("mocha");` и код не работает?

* [ ] Пропишите в начале файла теста:
```javascript
///<reference types="cypress" />
```

# Термины 👇

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
* [Первый взгляд на Cypress для End2end тестирования](https://www.youtube.com/watch?v=k7Z5_jJPOlU) 

Первый полет на `Cypress` 👇

* Создадим чистый `Java Script` проект на `NodeJS`
* Установим `Cypress` через менеджер пакетов `npm`
* Напишем автотест подписки на рассылку `Cypress`

# 🙋‍♂️ Перед началом

* Вы знаете основы ручного тестирования приложений.
* Вы знаете как устанавливать программы на компьютере.
* У Вас права администратор на компьютере.
* Вы знаете как запустить [терминал командной строки](https://www.youtube.com/watch?v=M4CkQuOAFjw)

Есть вопросы? Пишите в канал поддержки https://chat.epic1h.com/

# Шаги

## 1. Ставим `Visual Code`

Ищем в Google `Visual Code` Скачиваем и устанавливаем.

Запускаем `Visual Code`

## 2. Ставим `NodeJS`

`NodeJS` - среда выполнения `Java Script` и менеджер пакетов `npm`

Ищем в Google `Node JS` Скачиваем версию LTS и устанавливаем.

Запускаем командную строку и вводим команду `node -v`

Что видим на экране?

<details>
  <summary>Как поиграться нодой 🤟</summary>
  <p></p>
  Создайте файл `test.js` с содержимым `console.log(new Date().toISOString());`

  Потом выполните команду `node test.js`

</details>

## 3. Инициализуем проект

Создаем папку `%/projects/cypress/test_flight`

В `Visual Code` от открываем папку проекта.

Открываем `Терминал` → `Новый терминал`

Выполняем `npm init`, на все вопросы нажимаем `ENTER ↵` и в конце водим `yes`, `ENTER ↵`

<details>
  <summary>Показать как 🤔</summary>

  <p>Скоро будет короткое мини-видео 😂</p>
  
</details>

Проверяем, что в папке проекта появился файл `package.json`

## 4. Ставим `Cypress`

Выполняем команду `npm install cypress`

В `package.json` добавляем команду `cypress` в раздел `scripts`:

```json
...
  "scripts": {
    "cypress": "cypress",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
...
```

<details>
  <summary>Ничего не понятно 🤔</summary>
  
  <p>Это можно и не делать, но запускать `Сypress` через `./node_modules/.bin/cypress` длинно.</p>

</details>

Выполняем команду `npm run cypress open`

Ждем, что появилась папка `cypress` внутри проекта и открылось окно `Cypress`

В окне выбираем `todo.spec.js` и смотрим на то, что происходит.

В терминале нажимаем `CTRL+C` — прервать процесс, `Cypress` должен закрыться.

## 5. Открываем сайт `Cypress`

Из папки `cypress/integration` удаляем `1-getting-started` и `2-advanced-examples`

Создаем файл `cypress/integration/hello-cypress.spec.js`:

```javascript
describe('Привет Cypress', () => {

it('открыть сайт', () => { 
cy.visit('https://www.cypress.io/');
});

});
```

🔥 Не забывайте форматировать код:
* На Windows `SHIFT` + `ALT` + `F`
* На MacOS `SHIFT` + `OPTION` + `F`
* На Linux `CTRL` + `Shift` + `I`

И сохранять файл `CTRL` + `S`

В терминале выполняем команду `npm run cypress open`

В окне `Cypress` выбираем `hello-cypress.spec.js`

Видим что в `Chrome` открылся https://www.cypress.io/

## 6. Вводим email для подписки

Скроллим страницу в самый низ до формы подписки на рассылку.

Нужно найти селектор для поля ввода `email`

Активируем `Selector Playground` 

<img width="200" src="img/selector_playground.png">

Наводим на поле и копируем код селектора.

Обновляем код теста:
```javascript
describe('Привет Cypress', () => {

    it('открыть сайт', () => {
        cy.visit('https://www.cypress.io/');
    });

    it('подписаться на рассылку', () => {
        cy.get('#input-footer-email')
            .type('test@test.ru');
    });
});
```

## 7. Подписываемся на рассылку

Находим селектор для кнопки `Subscribe`

Обновляем код теста:
```javascript
describe('Привет Cypress', () => {

    it('Открыть сайт', () => {
        cy.visit('https://www.cypress.io/');
    });

    it('подписаться на рассылку', () => {
        cy.get('#input-footer-email')
            .type('test@test.ru');

        cy.get('.styled__Submit-sc-10l91w3-12').click();
    });
});
```

## 8. Проверяем подписку

Находим селектор для элемента с сообщением `Thanks for submitting the form.`

Обновляем код теста:
```javascript
describe('Привет Cypress', () => {

    it('открыть сайт', () => {
        cy.visit('https://www.cypress.io/');
    });

    it('подписаться на рассылку', () => {
        cy.get('#input-footer-email')
            .type('test@test.ru');

        cy.get('.styled__Submit-sc-10l91w3-12').click();

        cy.get('.Subscribe__Label-sc-1hdnlrs-1')
          .should('have.text', 'Thanks for submitting the form.');
    });

});
```

🔥 Не забывайте форматировать код!

## 9. Запускаем `Cypress` в `Headless`

Закрываем `Cypress` в терминале `CTRL+C` и выполняем команду `npm run cypress run`

Ждем и смотрим отчет.

Пробуем сломать тест, меняем сообщение:

```javascript
.should('have.text', 'Thanks! for submitting the form.');
```

И снова запускаем `npm run cypress run`

Бинго 🥳

# 🤩 Хочу еще

Не хватило? Поиграйся с https://automationteststore.com/

* Добавь пару товаров в корзину
* Оформи заказ

# 🤟 Быстрые рецепты

## Скорость ввода текста

500 мс. между нажатием клавишей:
```javascript
cy.get('#input-footer-email')
  .type('test@test.ru', {delay: 500});
```

## Basic авторизация

Некоторые тестовые задания скрываются под `Basic` авторизаций.
Пример, https://finance.dev.fabrique.studio/accounts/login/

```javascript
it('открыть сайт', () => {
  cy.visit('https://www.cypress.io/', {
    auth: {
      username: 'user',
      password: 'password'
    }
  });
});
```

https://docs.cypress.io/api/commands/visit#Add-basic-auth-headers

## Назойливая 🤦‍♂️ `mocha`

`Visual Code` постоянно добавляет строчку `const { it } = require("mocha");` и код не работает?

Пропишите в начале файла теста:

```javascript
///<reference types="cypress" />
```

# Термины 👇

* [Visual Code](https://ru.wikipedia.org/wiki/Visual_Studio_Code) — редактор исходного кода.
* [NodeJS](https://ru.wikipedia.org/wiki/Node.js) — среда выволнения кода на `Java Script`
* [npm](https://ru.wikipedia.org/wiki/Npm) — менеджер пакетов, входящий в состав `NodeJS`
* [package.json](https://www.tech-wiki.online/ru/package-json.html) — [манифест](https://en.wikipedia.org/wiki/Manifest_file) прокта на `NodeJS`
* [Headless](https://bureau.ru/soviet/20190418/) — это полноценный браузер без графического интерфейса.

# Артефакты

* Список рецептов https://example.cypress.io/
* Todo-приложение для тестирования https://example.cypress.io/todo
* Видео Cypress Automation для новичков https://www.youtube.com/watch?v=N0Eqlz5G-Jo
* Cypress для End2end тестирования. Первый взгляд https://www.youtube.com/watch?v=k7Z5_jJPOlU

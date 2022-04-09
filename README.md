Туториал практических занятий для `Cypress` 👇

# 1. Ставим `Visual Code`

Ищем в Google `Visual Code`, скачиваем и устанавливаем.

Запускаем `Visual Code`

# 2. Ставим `NodeJS`

`NodeJS` - среда выполнения `Java Script` и менеджер пакетов `npm`

Ищем в Google `Node JS`, скачиваем версию LTS и устанавливаем.

Проверяем установку ноды. Запускаем командную строку и вводим команду `node -v`

Что видим на экране?

<details>
  <summary>Показать как 🤔</summary>

  Скоро будет короткое мини-видео 😂
  
</details>

# 3. Инициализуем проект

Создаем папку `%/projects/cypress/tutorial`

В `Visual Code` от открываем папку проекта.

Открываем `Терминал` → `Новый терминал` в `Visual Code`

Выполняем `npm init`, на все вопросы нажимаем `ENTER ↵` и в конце водим `yes`, `ENTER ↵`

<details>
  <summary>Показать как 🤔</summary>

  Скоро будет короткое мини-видео 😂
  
</details>

Проверяем, что в папке проекта появился файл `package.json`

# 4. Ставим `Cypress`

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
  <summary>Показать как 🤔</summary>

  Скоро будет короткое мини-видео 😂
  
</details>

Выполняем команду `npm run cypress open`

Ждем, что появилась папка `cypress` внутри проекта и открылось окно `Cypress`

В окне выбираем `todo.spec.js` и смотрим на то, что происходит.

В терминале нажимаем `CTRL+C` - прервать процеес, `Cypress` должен закрыться.

# 5. Открываем `Google`

Из папки `cypress/integration` удаляем `1-getting-started` и `2-advanced-examples`

В папке `cypress/integration` создаем файл `google.spec.js` содержимым:

```javascript
describe('Google', () => {

    it('Открыть сайт', () => {
        cy.visit('https://google.ru/');
    });

});
```

В терминале выполняем команду `npm run cypress open`

В `Cypress` выбираем `google.spec.js`

Видим что в `Chrome` под управлением `Cypress` открылся Google с сообщением о политике Cookie.

# 6. Принимаем куки

Нужно найти селектор для элемента кнопки `Принять` в модальном окне.

Активируем `Selector Playground` 

<img width="200" src="img/selector_playground.png">

Наводим на кнопку в окне браузера и копируем код селектора.

Обновляем код:
```javascript
describe('Google', () => {

    it('Открыть сайт', () => {
        cy.visit('https://google.ru/');
    });

    it('Принять cookie', () => {
        cy.get('#L2AGLb > .QS5gu').click();
    });

});
```

# 7. Вводим поисковый запрос

Используя `Selector Playground` находим селектор для поля ввода поискового запроса.

Обновляем код:
```javascript
describe('Google', () => {

    it('Открыть сайт', () => {
        cy.visit('https://google.ru/');
    });

    it('Принять cookie', () => {
        cy.get('#L2AGLb > .QS5gu').click();
    });

    it('Ввести запрос', () => {
        cy.get('.gLFyf').type('Привет google{enter}');
    });

});
```

# 8. Проверяем результаты поиска 

Используя `Selector Playground` находим селектор для ссылки из результатов поиска с содержимым `Google Ассистент`.

Обновляем код:
```javascript
describe('Google', () => {

    it('Открыть сайт', () => {
        cy.visit('https://google.ru/');
    });

    it('Принять cookie', () => {
        cy.get('#L2AGLb > .QS5gu').click();
    });

    it('Ввести запрос', () => {
        cy.get('.gLFyf').type('Привет google{enter}');
    });

    it('Ассистент найден', () => {
        cy.contains('Google Ассистент').should('be.visible');
    });

});
```

# 9. Наводим красоту

Заменим первый шаг на хук `before`

```javascript
describe('Google', () => {

    before(() => {
        cy.visit('https://google.ru/');
    });

    it('Принять cookie', () => {
        cy.get('#L2AGLb > .QS5gu').click();
    });

    it('Ввести запрос', () => {
        cy.get('.gLFyf').type('Привет google{enter}');
    });

    it('Ассистент найден', () => {
        cy.contains('Google Ассистент').should('be.visible');
    });

});
```

# Артефакты

* Список рецептов https://example.cypress.io/
* Todo-приложение для тестирования https://example.cypress.io/todo
* Видео Cypress Automation для новичков https://www.youtube.com/watch?v=N0Eqlz5G-Jo
* Cypress для End2end тестирования. Первый взгляд https://www.youtube.com/watch?v=k7Z5_jJPOlU

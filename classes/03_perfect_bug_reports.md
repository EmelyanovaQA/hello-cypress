# Туториал: Исследуем баги и пишем профессиональные баг-репорты

Подойдет тем, что хочет научиться исследовать ошибки в ПО и писать профессиональные баг-репорты.

# 👍 Что сделаем

* Проведем исследование **критического бага**.
* Поработаем с **инструментами разработчика** Chrome.
* Больше узнаем про **фронтенд**,  **бекенд**,  **куки**,  **API**,  **лог-файлы** и **SQL**.
* Выполним **SQL-запросы** в базу данных.
* Напишем **профессиональный баг-репорт**.

# 🙋‍️ Перед началом

* У Вас установлен браузер [Google Chrome](https://www.google.com/chrome/)
* У Вас открывается [тестовое приложение](https://qa.epic1h.com)
* У Вас установлено приложение для создания скриншотов и записи экрана или установите [Awesome Screenshot](https://www.awesomescreenshot.com)
* Почитайте про [Markdown](https://ru.markdown.net.br/nachinaya/)
* Почитайте про [SQL](https://habr.com/ru/post/480838/)
* Попробуйте поработать с [Markdown таблицами](https://www.tablesgenerator.com/markdown_tables)

Создайте текстовый файл `env.txt` на рабочем столе, заполните и сохраните его со своими данными:
* **Устройство:** MacBook M1 Pro (14-inch, 2021) / 32 GB RAM
* **ОС:** macOS Monterey 12.0.1
* **Экран:** Built-in XDR Display 3024x1964
* **Браузер:** Google Chrome 100.0.4896.88 (arm64)
* **Параметры сети:** 90.187.49.33, 100MB, Vodafone Germany

> env - сокращение от environment - окружение

<details>
   <summary>Откуда это взять ❓</summary>

* **Устройство** — посмотрите этикетки на вашем системном блоке или ноутбуке
* **ОС** — посмотрите [видео](https://www.youtube.com/watch?v=VyvSqajg9C4)
* **Экран** — посмотрите короткое [видео](https://www.youtube.com/watch?v=ak53URhvGzI)
* **Браузер** — посмотрите короткое [видео](https://www.youtube.com/watch?v=2l5Ij77DvQk)
* **Параметры сети** — зайдите на сайт https://whatismyipaddress.com/
</details>

Есть вопросы? Пишите в канал поддержки [support](https://chat.epic1h.com/channel/support)

# 🔢 Шаги

## 1. Оформляем баг-репорт

Откройте в `Chrome` https://qa.epic1h.com/?v=1.1 и попробуйте войти в личный кабинет пользователем `marry` с паролем `qwerty`

<details>
  <summary>Что такое qwerty 🤢?</summary>
  <p></p>

<img src="../img/qwerty.gif" width="465" height="600">

</details>

❗ После нажатия на кнопку `Войти` пользователю выдается сообщение `Критическая ошибка сервера`

Откройте `Markdown` редактор https://dillinger.io/ и скопируйте в него исходное содержимое [шаблона идеального баг-репорта](../artefacts/perfect_bug_report.md)

**Поправьте в репорте:**
* Дату обнаружения.
* Версию приложения.
* Окружение.

Вам помогут https://whatismybrowser.com/ и https://whatismyipaddress.com/

<timer time="03:00">
    <img src="https://via.placeholder.com/400x50?text=3 min">
</timer>



## 2. Воспроизводим и исследуем баг

Сделайте запись экрана используя `Awesome Screenshot` и закрепите ссылку в отчет.

<timer time="02:00">
    <img src="https://via.placeholder.com/400x50?text=2 min">
</timer>

Очистите результаты исследования в репорте и оставьте только заголовки.

<timer time="01:00">
    <img src="https://via.placeholder.com/400x50?text=1 min">
</timer>

### Состояние до бага

Выполните предварительные условия:
* Откройте https://qa.epic1h.com/?v=1.1
* Сбросьте Cookie и кэш в Браузере: `Инструменты разработчика` &rarr; `Приложение` &rarr; `Хранилище` &rarr; `Очистить`

<timer time="01:00">
    <img src="https://via.placeholder.com/400x50?text=1 min">
</timer>

Выполните шаги для воспроизведения бага.

Откройте главную страницу `/` iBank.

В разделе `Исследование` заполните подразделы `После загрузки страницы`

#### Консоль

В `Инструментах разработчика` перейдите на вкладку `Консоль`

Скопируйте содержимое консоли в раздел баг-репорта `6.1. Console пользователя`

> Не забывайте оформлять `Markdown`
> ~~~Markdown
> ```text
> Текст тут
> ```
> ~~~

<details>
  <summary>Что получилось</summary>
  <p></p>

~~~Markdown
```text
фронтенд загружен
запрос на бекенд GET /api/users/summary
ответ сервера: {count: 3}
Uncaught TypeError: final is not a function at XMLHttpRequest.request.onreadystatechange
```
~~~
</details>

#### Cookies

Перейдите на вкладку `Приложение` &rarr; `Cookies` и заполните в отчете `6.2. Cookie браузера`

Используйте [Markdown таблицы](https://www.tablesgenerator.com/markdown_tables) для оформления.

<details>
  <summary>Что получилось</summary>
  <p></p>

~~~Markdown
```markdown
| **name** | **value**           |
|----------|---------------------|
| rnd      | 0.22187308399860428 |
```
~~~
</details>

<timer time="00:30">
    <img src="https://via.placeholder.com/400x50?text=30 sec">
</timer>

#### Запросы к API

Перейдите на вкладку `Сеть` и выберите фильтр `Fetch/XHR`

Выберите запрос `/summary`, заполните `6.3. Log запросов к API` &rarr; `После загрузки страницы` 

Используйте вкладки `Заголовки`, `Ответ`, `Cookies` и шаблон

~~~Markdown
```text
{Request Method} {Request URL}
{Status Code} ↓ 
{Response}
```
~~~

<details>
  <summary>Что получилось</summary>
  <p></p>

~~~Markdown
```text
GET https://qa.ecpic1h.com/api/users/summary
200 ↓ 
{"count": 5}
```
~~~
</details>

<timer time="01:00">
    <img src="https://via.placeholder.com/400x50?text=1 min">
</timer>

#### Состояние базы данных

Перейдите на https://qa.epic1h.com/db.html и выполните запрос

```sql
SELECT id, username, password, firstName FROM users WHERE username = 'marry'
```

Используйте [Markdown таблицы](https://www.tablesgenerator.com/markdown_tables) для оформления.

<details>
  <summary>Что получилось</summary>
  <p></p>

~~~Markdown
Пользователь с логином `marry` присутствует в базе данных.

```markdown
| **id** | **username** | **password** | **firstName** |
|--------|--------------|--------------|---------------|
| 3      | marry        | qwerty       | NULL          |
```
~~~
</details>

Проверьте что сессии для пользователя `marry` отсутствуют

```sql
SELECT * FROM sessions WHERE user = 3
```

<timer time="01:00">
    <img src="https://via.placeholder.com/400x50?text=1 min">
</timer>

### Исследуем состояние после обнаружения бага

Выполните оставшиеся шаги для воспроизведения

2. На форме `Входа` заполнить поля:
    1. Логин: `marry`
    2. Пароль: `qwerty`
3. Нажать на кнопку `Войти`

#### Консоль

Скопируйте новые записи в раздел `После нажатия на кнопку Войти`

<details>
  <summary>Что получилось</summary>
  <p></p>

~~~Markdown
```text
запрос на бекенд POST /api/login {username: 'marry', password: 'qwerty'}
POST https://qa.epic1h.com/api/login 500 (Internal Server Error)
```
~~~
</details>

<timer time="01:00">
    <img src="https://via.placeholder.com/400x50?text=1 min">
</timer>

#### Cookies

Заполните состояние Cookies.

<details>
  <summary>Что получилось</summary>
  <p></p>

Без изменений.
</details>

<timer time="00:30">
    <img src="https://via.placeholder.com/400x50?text=30 sec">
</timer>

#### Запросы к API

Опишите все запросы к API после фиксации бага.

<details>
  <summary>Что получилось</summary>
  <p></p>

~~~Markdown
### После нажатия на кнопку **Войти**
```
POST /api/login
{"login": "marry", "password": "qwerty"}
500 ↓
Не удалось создать сессию
```
~~~
</details>

<timer time="02:00">
    <img src="https://via.placeholder.com/400x50?text=2 min">
</timer>

#### Состояние базы данных

Проверьте сессии для пользователя `marry` и добавьте в отчет.
```sql
SELECT * FROM sessions WHERE user = 3
```

<details>
  <summary>Что получилось</summary>
  <p></p>

~~~Markdown
Создана сессия для пользователя `marry`

`SELECT * FROM sessions WHERE user = 3`

| **id**    | **user** | **active** |
|-----------|----------|------------|
| eeSJFLKxt | 3        | 1          |
~~~
</details>

<timer time="02:00">
    <img src="https://via.placeholder.com/400x50?text=2 min">
</timer>

#### Лог сервера

Откройте в новой вкладке о https://qa.epic1h.com/server.log

Добавьте в отчет информацию которую считаете ключевой.

<details>
  <summary>Что получилось</summary>
  <p></p>

~~~Markdown
```text
2022-05-01T12:18:46.792Z connected to database
2022-05-01T12:18:46.791Z server has been started
...
2022-05-01T12:18:49.049Z checking password qwerty === qwerty
2022-05-01T12:18:49.049Z finding username marry
2022-05-01T12:18:49.050Z TypeError: Cannot read property 'toUpperCase' of null
```
~~~
</details>

# Артефакты
1. [Баг и баг репорт](https://beqa.pro/blog/баг-и-баг-репорт)
2. [Правила написания предварительных шагов в тест-кейсах](https://habr.com/ru/post/481628/)

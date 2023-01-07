<style>

.marks {
  display: none !important;
}

h1 {
  background: #121FCF;
  font-size: 3em;
  background: linear-gradient(to right, #121FCF 0%, #CF1512 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h1.title {
  margin-top: 0;
  font-size: 5em;
}

#slide {
  margin-top: 20px;
  padding: 20px 40px;
  background-color: #F1F3FC;
  border-radius: 10px;
}

#slide h1 {
  margin-top: 0;
}

</style>

<h1 class="title">Туториалы<br>по IT навыкам</h1>

```text circle hello_from_anton
{
  "time": 1.7,
  "video": "https://raw.githubusercontent.com/breslavsky/hello-cypress/main/assets/hello_from_anton.mp4"
}

Привет, [Anton](https://t.me/breslavsky_anton) на связи 🤙

Я — Тимлид и **разработчик** с более чем **15-летним** опытом. 

Мне 36, живу и работаю в Берлине, и у меня есть огромное желание **делиться** знаниями.

Я разработал серию практических туториалов по авто-тестам на **Cypress**.

Чистый **концентрат** — все как на работе, сразу в бой.

Ну что? Погнали 👇
```

<section id="slide">

# Мой подход

Я сторонник **проблемно-ориентированного** ~~программирования~~ обучения:
1. Выполняя **практические действия** и сталкиваясь с **проблемами** — у тебя возникают вопросы.
2. Получая ответы, ты ловишь **ага-эффекты!** Чем больше таких эффектов — тем большему ты научишься!

На сложные вопросы и **концепты** — я даю свои **расширенные** комментарии.

</section>

# Менторство по Zoom

Каждый вторник и четверг я провожу свои **менторские стендапы** в Zoom для всех желающих.

Подробности и 🔔 анонсы новых туториалов в [Телеграмм](https://t.me/epic_one_hour)

Скринкасты и записи стендапов на 
<a href="https://www.youtube.com/@epic_one_hour" target="_blank" class="button">
  <img width="90" height="20" src="assets/icons/youtube.svg">
</a>

# Туториалы по Cypress

Уникальный практический и 🔥 <b>бесплатный</b> курс по Cypress.

Идеально подходит 🥳 для **начала изучения** программирования с нуля.

<details>
  <summary>Syllabus – учебный план&nbsp;<img width="18" height="18" src="assets/icons/syllabus.svg"></summary>

```mermaid
flowchart TB
cypress_test_flight(<span style='font-size:25px'>Первый полет</span>)
cypress_test_flight --> node_js(Node.js)
node_js --> package_json(package.json)
node_js --> npm
npm --> npm_init(npm init)
npm --> npm_install(npm install)
node_js --> node_modules
node_js --> npx
npx --> cypress_npx(cypress)
cypress_npx --> cypress_open(open)
cypress_npx --> cypress_run(run)
cypress_test_flight --> cypress(Cypress)
cypress ---> cy_visit(visit)
cypress ---> cy_get(get)
cypress ---> cy_type(type)
cypress ---> cy_click(click)
cypress ---> cy_should(should)
cy_should --> cy_should_have_text(have.text)
cypress_test_flight --> TDD
TDD ---> it

style cypress_test_flight stroke:#333,stroke-width:4px
click cypress_test_flight "https://md.epic1h.com/cypress_test_flight" _blank
click npm_init "https://youtu.be/lqqlaOuxrpM?t=194" _blank
click cy_click "https://youtu.be/lqqlaOuxrpM?t=591" _blank
```

```mermaid
flowchart TB
best_selectors(<span style='font-size:25px'>Лучшие селекторы</span>)
best_selectors ---> dev_tools(DevTools)

dev_tools --> query_selector_all(querySelectorAll)
dev_tools --> $$($$)

best_selectors --> css_selectors(CSS selectors)
css_selectors --> semantic_ui(Semantic UI)
css_selectors --> data_cy("[data-cy]")

best_selectors --> tiny_web_server(Tiny Web Server)
best_selectors --> wget(Wget)

best_selectors --> js_TODO(TODO)

style best_selectors stroke:#333,stroke-width:4px
click best_selectors "https://md.epic1h.com/best_selectors" _blank
```

```mermaid
flowchart TB
test_mama_project(<span style='font-size:25px'>Тестируем мама проект</span>)
test_mama_project --> conduit(Conduit)

conduit --> login
conduit --> register
conduit --> logout

test_mama_project --> tdd(TDD)
tdd ---> tdd_describe(describe)
test_mama_project --> java_script("Java Script")

java_script --> js_math(Math)
js_math --> js_random(random)
js_math --> js_round(round)

test_mama_project --> cypress(Cypress)
cypress --> cy_it_only(it.only)
cypress --> cy_url(url)
cypress --> cy_should(should)
cy_should --> cy_include(include)
cy_should --> cy_contain_text(contain.text)
cy_should --> cy_be_visible(be.visible)

style test_mama_project stroke:#333,stroke-width:4px
click test_mama_project "https://md.epic1h.com/test_mama_project" _blank
```

```mermaid
flowchart TB
my_first_refactor(<span style='font-size:25px'>Мой первый рефактор</span>)

my_first_refactor --> cypress(Cypress)
cypress --> cypress_config(cypress.json)
cypress_config --> base_url(Base URL)

cypress --> hooks
cypress --> _find(find)
hooks --> before_each(Before Each)
cypress --> aliases
aliases --> as
aliases --> get_alias("@")

cypress --> fixtures
fixtures --> me_user_json(me-user.json)

my_first_refactor --> signup_spec_js(signup.spec.js)
signup_spec_js --> login_me(loginMe)
my_first_refactor --> utils(utils.js)
utils --> get_random_number(getRandomNumber)

style my_first_refactor stroke:#333,stroke-width:4px
click my_first_refactor "https://md.epic1h.com/my_first_refactor" _blank
```

```mermaid
flowchart TB
fake_data(<span style='font-size:25px'>Фейк дата в тестах</span>)
fake_data --> faker

fake_data --> cypress(Cypress)
cypress --> g_should

subgraph g_should [" "]
    direction LR
    should --> eq
    should --> contain_text(contain.text)
    should --> contain_html(contain.html)
    should --> have_class_(have.class)
    should --> have_length(have.length)
    should --> have_length_greater_than(have.length.greaterThan)
end

cypress --> parents

fake_data --> shared_js(shared.js)
shared_js --> login

fake_data --> g_articles_spec_js

subgraph g_articles_spec_js [" "]
    direction LR
    articles_spec_js(articles.spec.js)
    articles_spec_js --> generate_fake_article(generateFakeArticle)
    articles_spec_js --> fill_article(fillArticle)
    articles_spec_js --> check_article(checkArticle)
    articles_spec_js --> add_article(addArticle)
    articles_spec_js --> open_my_articles(openMyArticles)
    articles_spec_js --> open_my_article(openMyArticle)
    articles_spec_js --> clear_article(clearArticle)
end

style fake_data stroke:#333,stroke-width:4px
click fake_data "https://md.epic1h.com/fake_data" _blank
```

```mermaid
flowchart TB
deep_cypress(<span style='font-size:25px'>Cypress внутри</span>)

deep_cypress --> g_cypress_json

subgraph g_cypress_json [" "]
    direction LR
    cypress_json(cypress.json)
    cypress_json --> default_command_timeout(defaultCommandTimeout)
    cypress_json --> chrome_web_security(chromeWebSecurity)
end

deep_cypress --> jquery(jQuery)

deep_cypress --> cypress(cy)
cypress --> g_cypress1
cypress --> g_cypress2

subgraph g_cypress1 [" "]
    direction LR
    its
    viewport
    writeFile
    readFile
    within
    each
    eq
    shadow
    window
    screenshot
    intercept
end

subgraph g_cypress2 [" "]
    direction LR
    invoke --> remove_attr(removeAttr)
    invoke --> on
    invoke --> off
    invoke --> css
    invoke --> html

    should --> have_been_called(have.been.called)
    should --> not_be_empty(not.be.empty)
    should --> have_css(have.css)

    stub --> callsFake

    trigger --> mousedown
    trigger --> mousedup
    trigger --> mousemove

    location --> pathname
    location --> search
    location --> hash
end

style deep_cypress stroke:#333,stroke-width:4px
click deep_cypress "https://md.epic1h.com/deep_cypress" _blank
```

</details>

## 🦸 Путь героя

1. [Первый полет на Cypress](https://md.epic1h.com/cypress_test_flight)
2. [Находим лучшие селекторы](https://md.epic1h.com/best_selectors)
3. [Тестируем мама проект на Cypress](https://md.epic1h.com/test_mama_project)
4. [Мой первый рефактор в Cypress](https://md.epic1h.com/my_first_refactor)
5. [Фейк дата в тестах](https://md.epic1h.com/fake_data)
6. [Как устроен Cypress внутри](https://md.epic1h.com/deep_cypress)
7. [Заканчиваем мама проект](https://md.epic1h.com/finish_mama_project)
8. [Забавные кейсы](https://md.epic1h.com/fun_cases)

## 🥷 Путь ниндзя

9. [Тестируем API в Cypress](https://md.epic1h.com/test_api) ~"Черновик"
10. Обновляем Cypress до 12
11. Собираем Conduit локально
12. Запускаем тестирование через CI/CD
13. Деплоим проект на своем сервере
14. Визуальное тестирование через Cypress
15. Отладка тестов в Visual Code

## 🧘 Путь джедая

16. RPA через Cypress & Tag UI

# Ручное тестирование

1. [Ломаем приложение онлайн-банка](https://md.epic1h.com/became_a_tester)
1. [Организуем баг-трекинг в стартапе](https://md.epic1h.com/bug_tracking)
1. [Исследуем баги и пишем профессиональные баг-репорты](https://md.epic1h.com/perfect_bug_reports)

# Менторство

1. [Java Script](https://md.epic1h.com/js_mentor)

# Челленджы

1. [Спасти мир от хакера Hакатика](https://md.epic1h.com/save_the_world)

# Стримы

1. [Стрим-практикум: мемы учат](https://md.epic1h.com/memes_teach)
1. [ИИ решает тестовое задание по QA](https://www.youtube.com/watch?v=NP6LL5e52vU)

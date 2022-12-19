# Туториалы по ИТ навыкам

Привет, [Anton](https://t.me/breslavsky_anton) на связи 🤙

Перед тобой 👇 серия практических туториалов по авто-тестам на **Cypress**

Чистый **концентрат** — все как на работе, сразу в бой.

Я — Тимлид и **разработчик** с более чем **15-летним** опытом. Мне 36, живу и работаю в Берлине, и у меня есть огромное желание **делиться** знаниями.

# Мой подход

Я сторонник **проблемно-ориентированного** обучения:
1. Выполняя **практические действия** и сталкиваясь с **проблемами** — у тебя возникают вопросы.
2. Получая ответы, ты ловишь **ага-эффекты!** Чем больше таких эффектов — тем большему ты научишься!

На сложные вопросы и **концепты** — я даю свои **расширенные** комментарии.

# +Менторство по Zoom

Каждый вторник и четверг я провожу свои **менторские онлайн стендапы** в Zoom для всех желающих.

Подробности и 🔔 анонсы новых туториалов в [Телеграмм](https://t.me/epic_one_hour)

Скринкасты и записи стендапов на 🎬[YouTube](https://www.youtube.com/@epic_one_hour)

# +Туториалы по Cypress

1. [Первый полет на Cypress](https://md.epic1h.com/cypress_test_flight)
2. [Находим лучшие селекторы](https://md.epic1h.com/best_selectors)
3. [Тестируем мама проект на Cypress](https://md.epic1h.com/test_mama_project)
4. [Мой первый рефактор в Cypress](https://md.epic1h.com/my_first_refactor)
5. [Фейк дата в тестах](https://md.epic1h.com/fake_data)
6. [Как устроен Cypress внутри](https://md.epic1h.com/deep_cypress)
7. [Заканчиваем мама проект](https://md.epic1h.com/finish_mama_project)
8. Обновляем Cypress до 12
9. Собираем проект локально
10. Деплоим проект на своем сервере
11. Запускаем тестирование по расписанию через CI/CD в GitLab
12. Тестирование API в Cypress
13. Визуальное тестирование через Cypress

```mermaid
%%{ init: { 'flowchart': { 'curve': 'monotoneX' } } }%%
flowchart TB
  subgraph g_cypress_test_flight [ ]
    direction TB
    node_js(Node.js) --> package_json(package.json)
    node_js --> npm
    npm --> npm_init(npm init)
    npm --> npm_install(npm install)
    node_js --> node_modules
    node_js --> npx
    cypress --> cypress_open(open)
    cypress --> cypress_run(run)
    cypress_test_flight(<span style='font-size:25px'>Первый полет</span>)
    cypress_test_flight --> node_js
    cypress_test_flight --> cypress
  end
  subgraph g_best_selectors [ ]
      direction TB
      dev_tools(DevTools) --> $$($$)
      dev_tools --> querySelectorAll
      dev_tools --> XHR
      TDD ---> it
      best_selectors(<span style='font-size:25px'>Лучшие селекторы</span>) ---> dev_tools
      best_selectors --> tiny_web_server(Tiny Web Server)
      best_selectors --> wget(Wget)
      best_selectors --> TDD
  end
  g_cypress_test_flight --> g_best_selectors

style g_cypress_test_flight fill:lightgreen
  
style cypress_test_flight fill:#f9f,stroke:#333,stroke-width:4px
style best_selectors fill:#f9f,stroke:#333,stroke-width:4px
click cypress_test_flight "https://md.epic1h.com/cypress_test_flight"
click best_selectors "https://md.epic1h.com/best_selectors"
```

# +Туториалы по ручному тестированию

1. [Ломаем приложение онлайн-банка](https://md.epic1h.com/became_a_tester)
1. [Организуем баг-трекинг в стартапе](https://md.epic1h.com/bug_tracking)
1. [Исследуем баги и пишем профессиональные баг-репорты](https://md.epic1h.com/perfect_bug_reports)

# +Челленджы

1. [Спасти мир от хакера Hакатика](https://md.epic1h.com/save_the_world)

# +Стримы

1. [Стрим-практикум: мемы учат](https://md.epic1h.com/memes_teach)

# Как контрибутить

Присылайте пулрегвесты, если вы хотите улучшить [туториалы](tutorials) или добавить новые.

## Скринкасты и GIF

Для сжатия скринкастов в MP4:
```bash
ffmpeg -i my_video.mov -vcodec h264 -acodec mp2 my_video.mp4
```

Для конвертации видео в GIF:
```bash
ffmpeg -i my_video.mov -pix_fmt rgb24 my_video.gif
```

Добро пожаловать на стажировку в **стартап iBank!**

# Приветствие

```json message hello_from_anton
{
  "from": {
    "name": "Антон",
    "avatar": "assets/images/anton.jpg"
  },
  "src": "https://drive.google.com/uc?export=view&id=1l1kBR3XI1xDaSX02jLY8FfzxLibosE3P"
}
```

<details>
    <summary>На всякий случай продублировал текстом 😉</summary>

> **Привет, дружище!**
>
> Меня зовут Антон и я рад сообщить, что по результатам **собеседования** ты **принят** к нам в качестве **стажера** по тестированию!
>
> Оплата совсем небольшая, вернее ее совсем нет 😂, мы все же еще **стартап**, но зато — опыта море!
>
> Наша миссия сделать супер крутой платежный сервис. Мы хотим купить **PayPal** 😎

***

> Я **ТимЛид** проекта и мы будем постоянно **в контакте** с тобой!
>
> Мы будем двигаться медленно шаг за шагом.
>
> И не переживай, если чего-то не знаешь или не понимаешь, мы с радостью всей командой поможем тебе влиться.
>
> Более того, несколько раз в неделю, мы будем созваниваться и решать вопросы и проблемы.

***

> **Ближе к делу:** для начала работы тебе нужно **настроить** наш проект. Это займет не более 5 минут.
>
> В качестве интегрированной платформы для управления процессами разработки нашего приложения мы используем **GitLab.**
>
> Там мы храним **исходный код**, ведем **задачи**, делаем **релизы**, пишем документацию и т.д.

***

> Я **гарантирую**, если ты разберешься с **GitLab**, ты поймешь все основные процессы, связанные с разработкой любого ПО.
>
> Конечно же, включая и тестирование.
>
> Ну что, погнали? Я накидал тебе очень простую инструкцию.

</details>

***

# Зарегистрируйся на **GitLab**

> Если, у тебя уже есть аккаунт на **GitLab** просто пропусти этот шаг.

Зайди на форму регистрации по ссылке https://gitlab.com/users/sign_up/

Заполни форму, как я показал в примере или войди через **Google**, **Twitter** или другие сервисы.

Кстати, не пугайся, что форма на английском языке. Привыкай, **в ИТ** почти все на **английском**.

<img width="416" height="621" src="https://drive.google.com/uc?export=view&id=1j9iPnAdO_RKhxY95Zja47RD_OIsqjhFU">

После отправки формы, на почту **поступит письмо** со ссылкой **подтверждения email**.

Просто **нажми** на ссылку из сообщения.

> Сообщение иногда падает в папку **SPAM**.

Далее **GitLab** попросит представиться. Заполни как у меня в **примере**:

<img width="453" height="621" src="https://drive.google.com/uc?export=view&id=1M_hJJXnd_d1vEIStTp9uwudJp13TH6aM">

***

# Сделай **fork** проекта **iBank**

> **Fork** с английского **вилка**, а в ИТ — это клон или копия проекта.

Мы создадим копию проекта **iBank** внутри твоего аккаунта на **GitLab**.

После регистрации **GitLab** сразу предлагает создать или импортировать проект.

Наш проект уже существует, поэтому выбираем **импорт**.

Введи название своей группы проектов для **GitLab**.

Я предлагаю использовать свое **имя и фамилию** на английском, заполни по **моему примеру**.

<img width="522" height="513" src="https://drive.google.com/uc?export=view&id=1C2_k_EG6gVlwcRrlbjr_8RXckNJAhAzN">

Далее, нажми **GitLab export**.

На следующем экране выбери **Explore public projects**.

<img width="650" height="558" src="https://drive.google.com/uc?export=view&id=1C_qWSlZTM3vR9RTu89pBpB9Sg2gEC-jX">

В той же вкладке открой URL нашего проекта https://gitlab.com/epic1h/ibank

Нажми **Fork** в правом верхнем углу:

<img width="250" height="93" src="https://drive.google.com/uc?export=view&id=1wrhhlauvwe6xjAWkRUzw_SoQdoUEHdSv">

Заполни форму по **моему примеру** и нажми **Fork project**.

<img width="500" height="534" src="https://drive.google.com/uc?export=view&id=1BHnjordzxdPaKHef0q1bF_bj3fXde0LP">

Ты должен увидеть страничку своего проекта:

<img width="200" height="100" src="https://drive.google.com/uc?export=view&id=1Bqxmm1Ji2E1YD4NGrinvBEpf__GIaWS1">

Кстати, запиши или запомни номер своего проекта **Project ID**. Он нам еще пригодится!

***

# Найди свой **ID** на GitLab

Что бы настроить **GitLab** для твоей стажировки, мне нужен твой ID.

Нажми **Edit profile** в меню пользователя:

<img width="250" height="289" src="https://drive.google.com/uc?export=view&id=1pGOC0mcvqY1pt_-1cQ5gi63Vj8VleN1S">

Далее прокрути страницу до раздела **Main settings**.

<img width="600" height="121" src="https://drive.google.com/uc?export=view&id=166I8Db3pqvUg0__fMSGshYgIYLuDJtc8">

```json robot check_user
{
  "id": "check_user",
  "endpoint": "https://ibank-robot.epic1h.com/check-user",
  "submit": "Проверить",
  "fields": [
    {
      "name": "me_gitlab_id",
      "placeholder": "User ID"
    }
  ]
}
```

# Добавь меня как **ТимЛида** в проект

Отлично! Теперь необходимо пригласить меня в проект и тогда **начнется магия 🪄**

Зайди в список своих проектов в верхнем левом меню:

<img width="400" height="318" src="https://drive.google.com/uc?export=view&id=1gOOfbgRXCQWxuCraqTSNaIRDF7y7Quvw">

И далее в списке выбери **iBank**.

В меню проекта в боковой панели слева перейди в **Members**:

<img width="400" height="164" src="https://drive.google.com/uc?export=view&id=152GLVag2NyMwvV-JI61ZBLOwgpmrlofG">

Далее нажми **Invite members**, напиши мой логин **breslavsky** и выбери мне роль **Maintainer**.

> Кстати, если с английским еще тяжело, заведи себе сразу свой словарик.

<img width="300" height="188" src="https://drive.google.com/uc?export=view&id=1VfC_f-v--3tzIh4Nyis7ZhLfxnNnVYaC">

<img width="500" height="232" src="https://drive.google.com/uc?export=view&id=1AdXVw6t48zxXjd38eFqChJMlynzf75VG">

Не забудь нажать **Invite**. Я должен появится в списке:

<img width="686" height="132" src="https://drive.google.com/uc?export=view&id=12Oecjzm7ZLL2pwd7kBc5_ktASG1UeJpS">

Вернись на домашнюю страницу проекта:

<img width="262" height="59" src="https://drive.google.com/uc?export=view&id=1rzFKiifT3Av-NF2CqBWvSdb0-yhVqSgV">

***

Помнишь, я просил тебя **запомнить ID** твоего проекта?

> Рядом с номером, есть удобная кнопка копировать в буфер обмена.

<img width="283" height="141" src="https://drive.google.com/uc?export=view&id=1Bqxmm1Ji2E1YD4NGrinvBEpf__GIaWS1">

```json robot check_target_project
{
  "id": "check_target_project",
  "endpoint": "https://ibank-robot.epic1h.com/check-target-project",
  "submit": "Проверить",
  "fields": [
    {
      "name": "project_id",
      "placeholder": "Project ID"
    }
  ]
}
```

Поздравляю! Теперь ты готов к реальным задачам на нашем проекте 👍

# Первая задача

```json message first_task
{
  "from": {
    "name": "Антон",
    "avatar": "assets/images/anton.jpg"
  },
  "src": "https://drive.google.com/uc?export=view&id=12aXyZ1SQRn6SHIamFNBxZQ4KLUVt6isY"
}
```

<details>
    <summary>Если что дублирую текстом 😉</summary>

Ты делаешь успехи. И у меня как раз есть **первая задача** для тебя.

У нас **завтра презентация MVP** нашего приложения перед **инвесторами**. Нужно **протестировать функцию входа** в
приложение.

Я создал тебе **задачу** с подробным описанием на **GitLab**. Задача очень простая, и я надеюсь на тебя 😉
</details>

Перейди в задачи проекта и открой задачу **Протестировать вход в приложение**.

<img width="261" height="266" src="https://drive.google.com/uc?export=view&id=1ETjK_rOfqy6pLSbRGwXoZXFIKD8CDWa9">

Ознакомься с описанием и не забудь сделать **отметки** в чек-листе.

Для успешного выполнения задачи тебе потребуется приложить **запись экрана** своих действий.

Я накидал на **Wiki** мини-инструкцию, если ты не знаешь как это делать.

В меню проекта перейди в раздел **Wiki**:

<img width="136" height="231" src="https://drive.google.com/uc?export=view&id=1adefT_aRc86i5G-IxB-MI5owprHzh1Pm">

```json robot check_first_task
{
  "id": "check_first_task",
  "endpoint": "https://ibank-robot.epic1h.com/check-first-task",
  "submit": "Проверить задачу"
}
```

Проверь, пожалуйста, что **статус задачи** изменился на **Closed**:

<img width="702" height="68" src="https://drive.google.com/uc?export=view&id=17vHkeGLQ8HnnoQHDXCzZBDHrNSajADSp">

```json robot how_we_work
{
  "id": "how_we_work",
  "endpoint": "https://ibank-robot.epic1h.com/how-we-work",
  "submit": "Продолжить"
}
```

На **Wiki** я добавил еще статью: **Как мы работаем в GitLab**

Посмотри и **не волнуйся**, если что-то пока не понимаешь. Мы разберем этот процесс целиком на отдельном
**мастер-классе**.

Я тебе **поставил новую** задачу. Проверь и **попробуй выполнить**.

Подготовь список вопросов для утреннего стендапа:

1. Что делал?
2. Что сделал?
3. Какие вопросы и проблемы?
4. Что планируешь делать?

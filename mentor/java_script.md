# Менторство Java Script

Дано — платформа по **изучению языков** программирования — https://exercism.io

> Ничего общего с оккультизмом, exercise — упражнение, а не exorcism.

**Ключевые фичи:**
* Полный **Open Source**, как сама платформа, так и задания.
* Трек по Java Script для усиления скилов по Cypress.
* **Интересные** задания в виде историй и концептов.
* **Авто-проверка** заданий.
* **Бесплатные** менторы.
* Превосходный **UI/UX!**

Нужно приготовиться, к тому, что сайт весь на английском.

Хочешь получить меня как ментора на платформе?

- [x] Начни проходить задания в треке по [Java Script](https://exercism.org/tracks/javascript/exercises)
- [x] Если есть вопросы, сгенерируй ссылку-приглашение.
- [x] Отправь ссылку в наш [комьюнити чат](https://t.me/epic_one_hour_community)

***

# +Freelancer Rates

https://exercism.org/tracks/javascript/exercises/freelancer-rates

## Стоимость рабочего дня

### ↓ Дано

**Фрилансер 🧑‍💻 Борис** со ставкой 20$ в час.

### ↓ Найти

**Стоимость** 8и часового рабочего дня Бориса.

### ↓ Решение

```js
function dayRate(ratePerHour) { 
  return ratePerHour * 8; 
}
dayRate(20); 
// => 160
```

Обычная математика, ничего сложного.

***

## Рабочих дней в бюджете

### ↓ Дано

Бюджет 10 000$.

### ↓ Найти

Сколько **целых рабочих** дней мы можем оплатить Борису.

### ↓ Решение

```js
function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
  // Math.floor(10000 / 160) = Math.floor(62.5)
}
daysInBudget(10000, 20); 
// => 62
```

***

## Большие проекты

### ↓ Дано

* Проект на 55 дней.
* Фрилансер дает скидку 10% за каждый полный месяц работы с ним.
* В месяце 22 рабочих дня. 
* Оставшиеся дни от неполного месяца, фрилансер считает по своей дневной ставке.

### ↓ Найти

**Стоимость фрилансера** с учетом его скидки.

### ↓ Решение

```js
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dayRate = dayRate(ratePerHour);
  // dayRate = 160
  const monthsWithDiscount = Math.floor(numDays / 22);
  // monthsWithDiscount = 2
  const monthRate = 22 * dayRate; 
  // monthRate = 3520
  const monthRateWithDiscount = monthRate * (1 - discount);
  // monthRateWithDiscount = 0.9 * 3520 = 3168
  const extraDays = numDays % 22;
  // extraDays = 55 % 22 = 11
  const priceExtraDays = extraDays * dayRate;
  // priceExtraDays = 11 * dayRate(20) = 11 * 160 = 1760
  return Math.ceil(monthsWithDiscount * monthRateWithDiscount + priceExtraDays);
  // Math.ceil(2 * 3168 + 1760)
}
daysInBudget(20, 55, 0.1);
// => 8096
```

***

## Вывод ментора

Код выглядит:
* логично,
* оптимально,
* названия функций и переменных понятны,

но всегда есть, что улучшить!

> I only can recommend to create two constants:
> ```js
> const WORK_HOURS_IN_DAY = 8;
> const WORK_DAYS_IN_MONTH = 22;
> ```

***

## Итоговый код

```js
const WORK_HOURS_IN_DAY = 8;
const WORK_DAYS_IN_MONTH = 22;

function dayRate(ratePerHour) { 
  return ratePerHour * WORK_HOURS_IN_DAY; 
}

function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) { 
  const dayRate = dayRate(ratePerHour);
  
  const monthsWithDiscount = Math.floor(numDays / WORK_DAYS_IN_MONTH);
  const monthRate = WORK_DAYS_IN_MONTH * dayRate; 
  const monthRateWithDiscount = monthRate * (1 - discount);
  
  const extraDays = numDays % WORK_DAYS_IN_MONTH;
  const priceExtraDays = extraDays * dayRate;
  return Math.ceil(monthsWithDiscount * monthRateWithDiscount + priceExtraDays);
}
```

***

## Отзыв менти

*По поводу exercism хочу добавить и смотивировать других начать там заниматься. И не обязательно нагружать именно Антона проверкой, т.к. там автосистема запроса обратной связи от ментора и в течении пары часов «кто-нибудь» да объявится. Кто-нибудь я взял в кавычки, т.к. на первый мой менторский запрос дал ответ мистер, который судя по линкедину, какое-то время отработал в гугле, хотя, конечно, раз на раз не приходится, но уверен — способы для улучшения вашего кода подскажут.*

*Сразу как Антон скинул, я сам особо не понял в чём преимущество именно этого ресурса, т.к. хватает более популярных codewars и других, но да — самый главный плюс в бесплатном менторстве. Причём, если на сайтах с задачами просто необходимо решение, с которым будут проходить автотесты, то тут менторы даже в твоём правильном решении подскажут моменты, которые можно сделать лучше.*

*Ну и дополнительный, немаловажный бонус, как по мне, так это отработка навыка общения по поводу кода на английском — формулирование вопроса и тд.*

Понравилось? Ищи меня в [Telegram](https://t.me/epic_one_hour)
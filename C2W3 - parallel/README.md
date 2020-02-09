# Задание по программированию: Параллельное выполнение асинхронных функций

В этом задании необходимо реализовать функцию parallel, которая выполняет асинхронные операции параллельно.

Функция parallel принимает два аргумента: массив операций и результирующий callback.

```js
var parallel = require('./index.js);

parallel(
    [
        function (next) { /* асинхронная операция 1 */ },
        function (next) { /* асинхронная операция 2 */ },
        // ...
    ],
    function(err, result) {
        // обработка результата выполнения операций
    }
)
```

Каждая операция – это синхронная или асинхронная функция. На вход ей приходит callback-функция next. По завершению работы операция вызывает функцию next либо с результатом выполнения, либо с ошибкой.

Если операция успешно завершилась, то вызывается callback-функция с первым аргументом null, а вторым – результатом выполнения:

```js
function (next) {
    setTimeout(function () {
        next(null, 'data');
    }, 1000);
}
```

Если операция завершается с ошибкой, то callback-функция вызывается с единственным аргументом – возникшей ошибкой:

```js
function (next) {
    setTimeout(function () {
        next(new Error('Что-то пошло не так'));
    }, 1000);
}
```

## Результирующий callback

Результирующий callback (второй параметр функции parallel) вызывается по окончанию выполнения всех операций или при возникновения ошибки в одной из них.

Если все операции завершились успешно, в callback передаётся первым аргументом null, а вторым – массив с результатами выполнения операций. Порядок данных должен соответствовать порядку операций в массиве, а не их вызову.

Если не переданы операции (передан пустой массив), то результатом выполнения должен быть пустой массив.

Если хотя бы одна из операций закончилась ошибкой, то callback-функция вызывается с произошедшей ошибкой. Если несколько операцией завершились ошибкой, то callback будет вызван с первой из них.

Важно. Callback вызывается ровно один раз: либо с первой пойманной ошибкой, либо с результатами выполнения операций.

- Гарантируется корректность вызова функции parallel и передача операций в правильном формате.
- Гарантируется, что функция next всегда вызывается в операциях.

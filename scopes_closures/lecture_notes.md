
Ключевые мысли книги Scopes and closures

1. Код выполняется не совсем так, как мы представляем. В частности, движок проходит по коду более, чем один раз. На момент начала выполнения кода движок уже прошел по нему как минимум один раз и выполнил необходимую подготовительную работу. В книге этот подготовительный этап называется компиляцией. В рамках данной темы самая важная часть такой подготовительной работы - это создание областей видимости и привязка идентификаторов к ним.

Идентификатор - имя, по которому мы обращаемся к сущности. Идентификаторы - это названия переменных, названия функций, названия параметров.

К процессу компиляции мы как разработчики не имеем прямого доступа, но можем косвенно убедиться в его существовании. Например, хойстинг (всплытие) показывает, что на момент исполнения кода движок уже знает, какие переменные будут объявлены в данной области видимости.


2 Видимость переменной не совпадает со временем жизни того объекта на который она ссылается. Например, переменные, объявленные через ключевое слово const доступны только после объявления и инициализации, но область их видимости - вся функция, поэтому если обратиться к таким переменным до объявления, ошибка будет звучат так: “ReferenceError: Cannot access '<some name>' before initialization”, так как движок уже знает, что ниже в теле функции этот идентификатор будет занят. Утверждение, что переменные, объявленные через ключевые слова let и const, таким образом, не верны.


3.  Множество идентификаторов нашей программы организовано в виде вложенных областей видимости.

Предположим, что такой вложенности нет и мы храним все наши идентификаторы в глобальной области видимости. Это было бы очень неудобно по ряду причин:
Совпадение имен. Все переменным пришлось бы придумывать строго уникальные названия
Общий доступ к переменным, отсутствие изоляции - переменные доступны всей программе и кто угодно может их изменить
Поэтому области иерархические (вложенные) области видимости - это механизм, который позволяет на изолировать группы идентификаторов внутри функции или блока. 


4. Важно понимать, что области видимости и привязанные к ним идентификаторы определяются на момент компиляции, а заполняются при выполнении кода (при вызове функции)

5. Параметры функции - тоже идентификаторы. Их значение присваивается при вызове функции. Они также могут перекрывать идентификаторы из внешней области видимости.

6. Лексическая область видимости. Как понять, что область видимости лексическая: привязка переменных определяется на стадии компиляции, поэтому уже во время написания кода мы можем понять благодаря статическому анализу кода, что обращаемся к необъявленной переменной, редактор нам подскажет. То есть, идентификаторы не могут появляться неизвестно откуда. Где будет лежать значение идентификатора, определяется на стадии компиляции, а само значение присваивается во время выполнения.

Scope - где будем брать значение этой переменной?
Lexical scope - мы уже в момент написания кода знаем, где будем брать значение этой переменной
Внимание: само значение мы еще не знаем!
Также lexical scope называется static. Противопоставляется ему динамическая область видимости, когда цепочка поиска идентификаторов определяется во время выполнения программы.

7. Замыкание - это способность функции обращаться к переменным из своей области видимости даже когда она вызывается за пределами этой области видимости. Замыкание формируется, когда функция объявляется в теле другой функции или модуля. Однако практически наблюдать замыкание мы можем только в том случае, если эта функция вызывается за пределами своей области видимости. Это происходит, если функцию экспортируют из модуля или возвращают из той функции, внутри которой она была создана. При вызове такой функции она может обращаться ко внешним переменным из того лексического окружения, где была объявлена.

Замыкания тесно связаны с двумя темами - освобождением памяти в процессе сборки мусора и изоляцией доступа к каким-то переменным. Сборка мусора не убирает объекты, на которые есть ссылка в функции, обладающей замыканием. Функция “замыкает” эти объекты и не дает им быть удаленными. Напомним, что сборщик мусора в джаваскрипте освобождает память от тех объектов, на которые нет ссылок. 






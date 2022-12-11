### npm i express

```javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hi!'));
app.listen(4000, () => console.log('запущено приложение на порту 4000'))
```

Для запуска сервера при изменениях установим nodemon.

    npm i nodemon

**package.json**

```javascript
"scripts": {
"dev": "nodemon src/index.js",
...
```

    npm run dev

Как использовать DotEnv

DotEnv — это облегченный пакет npm, который автоматически загружает переменные среды из файла .env в объект process.env.
Чтобы использовать DotEnv, сначала установите его с помощью команды:

    npm i dotenv

Затем в своем приложении запросите и настройте пакет следующим образом:

    require('dotenv').config().

Обратите внимание, что некоторые пакеты, такие как Create React App, уже включают DotEnv, и облачные провайдеры
могут иметь разные способы установки переменных среды вместе. Поэтому убедитесь, что вы проверили документацию для любых
пакетов или поставщиков, которые вы используете, прежде чем следовать каким-либо советам в этой статье.
Как создать файл .env
После того, как вы установили и настроили DotEnv, создайте файл с именем .env на верхнем уровне вашей файловой
структуры.

```javascript
const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 4000;
app.get('/', (req, res) => res.send('Hello World!!!'));

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
```


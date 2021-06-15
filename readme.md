# entipic.url

Build entipic picture url.

## Usage

```js
const entipicUrl = require('entipic.url');

entipicUrl('Brack Obama');
// output: http://cdn.entipic.com/Brack_Obama.jpg
entipicUrl('Brack Obama', 'en', 'us');
// output: http://cdn.entipic.com/en-us/Brack_Obama.jpg
entipicUrl('Brack Obama', 'b', 'en');
// output: http://cdn.entipic.com/en/b/Brack_Obama.jpg
```

## API

#### entipicUrl(name, size, lang, country)

#### entipicUrl.picture(id, size)


#### entipicUrl.create(host)

```js
const entipicUrl = require('entipic.url');
const instance = entipicUrl.create("https://cdn.entipic.com");
instance('Brack Obama');
// output: https://cdn.entipic.com/Brack_Obama.jpg
```

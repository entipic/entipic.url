# entipic.url

Build entipic picture url.

## Usage

```
var entipicUrl = require('entipic.url');

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

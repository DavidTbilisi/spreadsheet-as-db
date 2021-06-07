# Usage

First you should [publish](https://support.google.com/a/users/answer/9308870?hl=en) your spreadsheat on web as `csv`.
After publishing you should have shareable link. Copy that link and use it like this ([Video instruction](https://www.youtube.com/watch?v=jxKmnhbrUWs)).

```javascript
let ss_link = 'YOUR_LINK';
let spreadsheet = Spreadshet(ss_link, ['title1', 'title2', 'title3', 'title4', ])
```

This script will get data from spreadsheet. After that you can get data as `JSON` or as `TEXT`.

```javascript
spreadsheet.text() // will give you just text
spreadsheet.json() // or json. with titles that you put on init line 
```
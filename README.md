## USE

UMD: getUrlsInString

```js
import getUrlsInString from 'get-urls-in-string';

const matches = getUrlsInString(`this is text1 http://www.google.com/ctA3pgtzhttp://www.google.com #this is text2`);

console.log(matches);
/*
[
    { 
        type: "text", 
        content: "this is text1 " 
    },
    { 
        type: "url", 
        content: "http://www.google.com/ctA3pgtz" 
    },
    { 
        type: "text", 
        content: "" 
    },
    { 
        type: "url", 
        content: "http://www.google.com" 
    },
    { 
        type: "text", 
        content: " #this is text2" 
    }
]
*/
```

## LICENSE

MIT
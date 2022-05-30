# dg-middleware

## API Status
```
/api/status - Get working status of API
```

## Domain Check
```
/api/domaincheck - Check whether the given domain is available
```

## Get Rupees in Words
```
/api/rupeesInWords?n=<<amount>> - Get the supplied rupee amount in words
```

## Github Unofficial Trending API
### Trending Repositories
```
/api/github-trending/repositories?language=javascript&since=weekly - Returns an array of trending repositories
```
**Parameters:**

- `language`: **optional**, list trending repositories of certain programming languages, possible values are listed [here](./src/pages/api/github-trending/data/languages.json).
- `since`: **optional**, default to `daily`, possible values: `daily`, `weekly` and `monthly`.
- `spoken_language_code`: **optional**, list trending repositories of certain spoken languages (e.g English, Chinese), possible values are listed [here](./src/pages/api/github-trending/data/spoken-languages.json).

> Note that [GitHub trending page](http://github.com/trending) sometimes is empty, in that case this API returns `[]` in response, your application should be able to handle it or read from previous cache.

### Trending Developers
```
/api/github-trending/developers?language=javascript&since=weekly - Returns an array of trending developers
```
**Parameters:**

- `language`: **optional**, list trending repositories of certain programming languages, possible values are listed [here](./src/pages/api/github-trending/data/languages.json).
- `since`: **optional**, default to `daily`, possible values: `daily`, `weekly` and `monthly`.

> `type` could be `organization` or `user`.

### List Languages
```
/api/github-trending/languages - Returns an array of languages
```

### List Spoken Languages
```
/api/github-trending/spoken_languages - Returns an array of spoken languages
```

## Randomizer APIs
### Show Random Joke
```
/api/random/joke - Returns a random joke
```
# Challenge #76 [Easy]: [Title case](https://www.reddit.com/r/dailyprogrammer/comments/wjzly/7132012_challenge_76_easy_title_case/)

Date: 13-Jul-2012

Write a function that transforms a string into title case. This mostly means: capitalizing only every first letter of every word in the string. However, there are some non-obvious exceptions to title case which can't easily be hard-coded. Your function must accept, as a second argument, a set or list of words that should not be capitalized. Furthermore, the first word of every title should **always** have a capital letter. For example:

```js
exceptions = ["jumps", "the", "over"];
titlecase("the quick brown fox jumps over the lazy dog", exceptions);
```

should return:

```js
The Quick Brown Fox jumps over the Lazy Dog
```

An example from the [Wikipedia page:](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage)

```js
exceptions = ["are", "is", "in", "your", "my"];
titlecase("THE vitamins ARE IN my fresh CALIFORNIA raisins", exceptions);
```

Returns:

```
The Vitamins are in my Fresh California Raisins
```

---

| Started     | Last revisited | Completed   |
| ----------- | -------------- | ----------- |
| 04-Sep-2018 | 04-Sep-2018    | dd-MMM-yyyy |

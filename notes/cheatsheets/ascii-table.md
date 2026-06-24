# ASCII Cheat Sheet

## Uppercase Letters

| Character | ASCII |
|------------|---------|
| A | 65 |
| B | 66 |
| C | 67 |
| Z | 90 |

---

## Lowercase Letters

| Character | ASCII |
|------------|---------|
| a | 97 |
| b | 98 |
| c | 99 |
| z | 122 |

---

## Digits

| Character | ASCII |
|------------|---------|
| 0 | 48 |
| 1 | 49 |
| 2 | 50 |
| 9 | 57 |

---

# Useful Methods

## Character → ASCII

```js
'A'.charCodeAt(0)
```

Output:

```js
65
```

---

## ASCII → Character

```js
String.fromCharCode(65)
```

Output:

```js
"A"
```

---

# Common Checks

## Check Digit

```js
if (ch >= '0' && ch <= '9')
```

---

## Check Uppercase

```js
if (ch >= 'A' && ch <= 'Z')
```

---

## Check Lowercase

```js
if (ch >= 'a' && ch <= 'z')
```

---

# Interview Questions Using ASCII

- Count Digits
- Count Uppercase Letters
- Extract Numbers
- Second Largest Digit
- Character Classification
# Strings

## What is a String?

A string is a sequence of characters.

Examples:

* "hello"
* "JavaScript"
* "12345"
* "abc123xyz"

Strings are immutable in JavaScript, which means individual characters cannot be modified directly.

Example:

```js
let str = "hello";
str[0] = "H"; // No effect
```

---

# Common String Operations

## Access Character

```js
str[0]
```

Complexity: O(1)

---

## Length

```js
str.length
```

Complexity: O(1)

---

## Traverse a String

Using index:

```js
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```

Using for...of:

```js
for (let char of str) {
  console.log(char);
}
```

Complexity: O(n)

---

# Core Patterns

## Character Traversal

Visit each character exactly once.

Used for:

* Count vowels
* Count digits
* Count uppercase letters
* Reverse string
* Character frequency

Complexity:

* Time: O(n)
* Space: O(1)

---

## Character Comparison

Compare characters directly.

Examples:

```js
'a' === 'a'
'A' !== 'a'
```

Used for:

* Palindrome
* Character matching
* String validation

---

## Frequency Counting

Track occurrences of characters.

Example:

Input:

```text
aabbc
```

Output:

```js
{
  a: 2,
  b: 2,
  c: 1
}
```

Usually implemented using:

* Object
* Map

---

# Common Interview Problems

## Easy

* Reverse String
* Count Vowels
* Count Digits
* Count Uppercase Letters
* Remove Spaces
* Count Words

---

## Medium

* Valid Palindrome
* Character Frequency
* First Non-Repeating Character
* Valid Anagram
* Longest Common Prefix

---

# Problems Completed

* Reverse String
* Count Vowels
* Palindrome Check
* Character Frequency
* Second Largest Digit in Alphanumeric String

---

# Key Takeaways

After completing string fundamentals, you should be able to:

* Traverse strings confidently
* Extract digits from strings
* Compare characters
* Count character occurrences
* Solve common string-based interview questions
* Identify when frequency counting is needed

---

# Related Topics

Next concepts that build on strings:

* Hashing (Object, Map, Set)
* Two Pointers
* Sliding Window
* Recursion

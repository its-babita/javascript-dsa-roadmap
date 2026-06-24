# Big O Cheat Sheet

## O(1)

Constant Time

```js
arr[0]
```

---

## O(n)

Linear Time

```js
for(let i = 0; i < n; i++) {}
```

---

## O(n²)

Quadratic Time

```js
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {}
}
```

---

## O(log n)

Binary Search

```js
while(left <= right) {}
```

---

# Common Data Structure Complexities

| Operation | Array |
|------------|---------|
| Access | O(1) |
| Search | O(n) |
| Insert End | O(1) |
| Insert Beginning | O(n) |
| Delete End | O(1) |
| Delete Beginning | O(n) |

---

# Interview Rule

Always mention:

- Time Complexity
- Space Complexity

after solving a problem.
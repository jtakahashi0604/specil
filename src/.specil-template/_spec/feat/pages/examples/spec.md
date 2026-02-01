# Spec - Page: Example List

## ✏️ Overview

Example list page

## 📦 Data

```
- examples: fetch examples
```

## 🔄 State

```
- none
```

## 🎨 Components

### 🧱 Component - ExampleCard

#### Props

```
- example
```

#### UI

```
- Row:
  - Col:
    - Text: {example.id}
    - Text: {example.name}
  - Col:
    - Button: {
        behavior:
          click:
            - moveTo "/examples/${example.id}"
      }: "Edit"
```

### 🧱 Component - CreateButton

#### Props

```
- none
```

#### UI

```
- Button: {
    behavior:
      click:
        - Example - create
  }: "Create"
```

## 🍱 Layout

```
- {render: example in examples}
  - ExampleCard({ example: example })
- CreateButton()
```

----

# Spec - Page: Example Form

## ✏️ Overview

Example form page.

## 📦 Data

```
- example: fetch example by id
```

## 🔄 State

```
- none
```

## 🎨 Components

### 🧱 Component - ExampleForm

#### Props

```
- example
```

#### UI

```
- Form: {
    data: example
    behavior:
      submit:
        - Example - update
  }:
  - Field: {
      type: text
      name: "name"
      label: "Name"
    }
  - Button: {
      behavior:
        click:
          - submit
    }: "Submit"
  - Button: {
      behavior:
        click:
          - Example - delete
          - moveTo "/examples"
    }: "Remove"
```

## 🍱 Layout

```
- ExampleForm({ example: example })
```

# Feat Spec: Example

## Overview

[Description]

----

## Capabilities

- Example
  - findMany
  - findById
  - create
  - update
  - delete

----

## Pages

### Page - List

- URL: /examples

#### Components

##### Component

###### Data

```text
list: Example.findMany()
```

###### UI

```text
Container
  Container
    {render: each item in list}
      Row
        [behavior]:
          trigger: click
            move: to /examples/{item.id}
              args:
                id: {item.id}
        Col:
          Text: {item.id}
        Col:
          Text: {item.name}
        Col:
          Text: {item.createdAt}
        Col:
          Text: {item.updatedAt}
```

### Page - Edit

- URL: /examples/{id}

#### Components

##### Component

###### Data

```text
item: Example.findById
  args:
    id: {id}
```

###### UI

```text
Container
  Container
    Form
      Input: {item.name}
      Button: Save
        [behavior]:
          trigger: click
            call: Example.update
              args:
                id: {item.id}
                data:
                  name
```

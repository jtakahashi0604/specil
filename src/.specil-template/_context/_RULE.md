## Commit message

- Write in English
- Following Conventional Commits

## Code - Product

### Coding

- Following Biome
- Avoid writing comments whenever possible

#### Name

- Camel case(`camelCase`, `CamelCase`)

#### Function

##### Parameters

Do use named parameters.

```ts
function foo({ bar }: { bar: string }) {
  return bar;
}
```

#### Condition

Do use `== null` if you want to check if a value is null or undefined.

✅
```tsx
if (value == null) {
  return null;
}
```

❌
```tsx
if (!value) {
  return value;
}

#### Elements in tsx

##### Tailwind CSS

##### Use even numbers

✅
```tsx
<div className="p-2">
  hi
</div>
```

❌
```tsx
<div className="p-3">
  hi
</div>
```

##### Use Spacing

✅
- space-*
- p*
- gap-*

❌
- m*

##### Spacing between elements

Do not use space between A element and B element in tsx.

✅
```tsx
<div>
  hi 1
</div>
<div>
  hi 2
</div>
<div>
  hi 3
</div>
```

❌
```tsx
<div>
  hi 1
</div>

<div>
  hi 2
</div>

<div>
  hi 3
</div>
```

## Code - Test


### Test description

#### Component

##### list
- renders empty state when no examples provided
- renders list of examples
- renders links to example detail pages
- calls create action when Create button is clicked

##### form
- renders form with example data
- updates input value when user types
- calls update action when Submit button is clicked
- calls remove action when Remove button is clicked
- shows validation error

#### Policy
- allows access when example belongs to the team
- throws error when example does not exist
- throws error when example belongs to different team

#### Service

##### findMany
- returns examples for the specified team
- returns empty array when no examples exist
- returns examples sorted by createdAt descending

##### findById
- returns the example when it exists
- throws error when example does not exist
- throws error when example belongs to different team

##### create
- creates a new example
- creates example with correct team association

##### update
- updates an existing example
- throws error when example belongs to different team

##### remove
- removes an existing example
- throws error when example belongs to different team

### Coding

#### Organization

[define]
[:BLANK_LINE:]
[action]
[:BLANK_LINE:]
[render]
[:BLANK_LINE:]
[expect]

#### Value

##### Single value in a test case

```
id:    "example-id"
value: "Test Example"
```

##### Single value in a test case for update

```
id:    "example-id"
value: "Updated Test Example"
```

##### Multi value

```
id:    "example-1-id"
value: "Test Example 1"

id:    "example-2-id"
value: "Test Example 2"
```

##### Multi tenant and value

```
id:    "tenant-1-id"
value: "Tenant 1"

id:    "tenant-2-id"
value: "Tenant 2"

id:    "tenant-1-example1-id"
value: "Tenant 1 - Test Example 1"

id:    "tenant-1-example2-id"
value: "Tenant 1 - Test Example 2"

id:    "tenant-2-example1-id"
value: "Tenant 2 - Test Example 1"

id:    "tenant-2-example2-id"
value: "Tenant 2 - Test Example 2"
```

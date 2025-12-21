# Specil

Specil is a minimal and helpful tool for Spec-Driven Development.

## What is Spec-Driven Development?

Spec-Driven Development is a development methodology that focuses on writing specifications before writing code.

## Core Philosophy

Generate spec and code from an SSOT, inspired by DB migration tools.

## Get Started

### 1. Setup

```bash
npx specil setup
```

### 2. Change your SSOT

SSOT is located at:
- `.specil/_spec/_ARCHITECTURE.md`
- `.specil/_spec/feat/{feature-name}/spec.md`

### 3. Generate spec

**Note:** Please run this tool inside an AI Agent console (e.g., Claude Code).

```bash
npx specil run apply-spec
```

Generated spec will be saved to `.specil/_spec-migration/{timestamp}/spec.md`.

### 4. Generate code

**Note:** Please run this tool inside an AI Agent console (e.g., Claude Code).

```bash
npx specil run apply-code
```

### 5. Review

```bash
npx specil run review
```

## CLI Reference

| Command                     | Description              |
|-----------------------------|--------------------------|
| `npx specil setup`          | Setup Specil environment |
| `npx specil run apply-spec` | Generate spec            |
| `npx specil run apply-code` | Generate code            |

## Support

Please send feedback to [@jtakahashi0604](https://x.com/jtakahashi0604).

## License

MIT

# Commands

## Command - apply-spec

```text
TIMESTAMP=$(date +"%Y%m%d%H%M")
mkdir -p ".specil/_spec-migration/$TIMESTAMP"
cp       ".specil/_spec-migration/_template/spec.md" ".specil/_spec-migration/$TIMESTAMP/spec.md"

SPEC_FILE=".specil/_spec-migration/$TIMESTAMP/spec.md"

1. read `git diff` on `.specil/_spec/**/*.md`
2. read existing spec and code
3. trite about overview, plan and todo into SPEC_FILE
```

## Command - apply-code

```text
1. read `git diff` on `.specil/_spec-migration/**/*.md`
2. do todos
```

## Command - review

```text
git diff
review code changes
- points
  - [ ] readable?
  - [ ] testable?
  - [ ] secure?
```

## Coomand - deploy

```text
git commit
git push
gh pr create
```

## Command - launch
```
gh pr merge
git checkout main
git pull
remove unnecessary branches
```

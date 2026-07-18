# Forester
CAIMEO's mathematics, physics, and computer science notes and blog posts.

## Build
```bash
make
```

## Preview
```bash
make preview
```

Then open <http://127.0.0.1:8000/>. Forester 5 serves each tree through a
directory route such as `/index/`; the generated `index.html` redirects to the
corresponding `index.xml`, which the browser renders with the bundled XSL theme.
Use an HTTP server for previewing rather than opening files directly.

## Code blocks

Indent `\codeblock` bodies naturally with the surrounding `.tree` source. The
theme removes only their common leading indentation before Prism highlights
them. Use `\codeblock/raw` for examples where absolute leading whitespace is
part of the content.

## Search smoke test
```bash
make test-search
```

This builds the forest, loads the generated search bundle in Chromium, and
checks that `forest.json` results can be opened and rendered.

## Watch 
```bash
bash watch.sh
```

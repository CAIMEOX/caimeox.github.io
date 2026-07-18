OPAM ?= $(if $(wildcard /usr/local/bin/opam),/usr/local/bin/opam,opam)
NODE ?= node

all: dev
.PHONY: all

release:
	@echo "Build forester"
	@$(OPAM) exec -- forester build forest.toml
.PHONY: release

dev:
	@echo "Build forester (Dev)"
	@$(OPAM) exec -- forester build forest.toml --dev
.PHONY: dev

preview: dev
	@echo "Preview forest at http://127.0.0.1:8000/"
	@python3 -m http.server 8000 --directory output
.PHONY: preview

test-search: dev
	@python3 -m unittest tests/test_search.py
.PHONY: test-search

test-code-blocks:
	@$(NODE) --test tests/code-blocks.test.cjs
.PHONY: test-code-blocks

typos:
	@typos trees
.PHONY: typos

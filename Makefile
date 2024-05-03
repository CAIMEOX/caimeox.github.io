all: dev
.PHONY: all

release:
	@echo "Build forester"
	@opam exec -- forester build forest.toml
.PHONY: release

dev:
	@echo "Build forester (Dev)"
	@opam exec -- forester build forest.toml --dev
	@cp utils/forester.dev.js output/forester.js
.PHONY: dev
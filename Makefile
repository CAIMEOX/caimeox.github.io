all: dev
.PHONY: all

release:
	@echo "Build forester"
	@opam exec -- forester build --root index trees/
.PHONY: release

dev:
	@echo "Build forester (Dev)"
	@opam exec -- forester build --root index trees/ --dev
.PHONY: dev
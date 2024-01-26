{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    forester.url = "sourcehut:~jonsterling/ocaml-forester";
    forester.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs@{ self, forester, nixpkgs, flake-utils }:
    let
      system = "x86_64-linux"; 
      pkgs = import nixpkgs { inherit system inputs; };
    in
    {
      devShells."${system}".default = pkgs.mkShell {
        buildInputs = [ 
          pkgs.fswatch
          pkgs.texlive.combined.scheme-full
          forester.packages."${system}".default ];
        shellHook = ''
          exec fish
        '';
      };
    };
}

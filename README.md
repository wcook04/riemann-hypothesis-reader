# Riemann Hypothesis Reader

An independent candidate reader by Will Cook for *The argument of a formal proof of the Riemann Hypothesis*, version 1.5, by Qui Vincit and Fable.

**[Open the reader](https://wcook04.github.io/riemann-hypothesis-reader/)** · [Try Statement 2.1 beside its Lean](https://wcook04.github.io/riemann-hypothesis-reader/@st%3Arh?v=lean&view=pdf&page=4) · [Explore the map](https://wcook04.github.io/riemann-hypothesis-reader/map/)

Click a highlighted passage to open its Lean declaration. The Graph tab follows the selected statement and distinguishes dependencies in its type from dependencies in its proof. The reader links 145 passages to 146 Lean declarations across 92 modules. The Compare and What ran pages show the passage reviews and the archive’s recorded checks. Passage reviews are AI-assisted readings of the sources.

## Sources and credit

- The PDF is reproduced under CC BY 4.0 from the authors’ pinned repository. [Paper and verification records](https://github.com/vincitamore/riemann-lean-account/tree/dd9bfc30bf9fc605251a22aa41004d1e22cc303b)
- The Lean formalization is by Levent Alpöge with Claude. The reader retrieves individual source files from the Lean community’s pinned import and verifies their hashes before display. [Announcement](https://alpo.ge/remark.pdf) · [Lean revision](https://github.com/leanprover-community/riemann-hypothesis/tree/8b83d5e7b319ebc7b3be6e59ce3411ba2b09d116)
- The graph uses a compiled dependency export from James Shore. [Dependency dataset](https://github.com/james-shore/rh-proof-dependencies/releases/tag/v0.2.1)

## Build and hosting

This repository contains the generated GitHub Pages edition. The reader, passage mappings, and build instructions are in Lean Exposition. The generated site links to the pinned sources and does not bundle the upstream Lean files. [Source and build instructions](https://github.com/wcook04/lean-exposition/blob/34f81451a6fbd5e70ce33488789f92c14294c51c/docs/web-api.md#connect-the-library-reader)

The reader software is under [Apache 2.0](LICENSE.txt). See [NOTICE](NOTICE.txt) and [third-party notices](THIRD_PARTY_NOTICES.md) for credits.

# Riemann Hypothesis Reader

An independent candidate reader by Will Cook for *The argument of a formal proof of the Riemann Hypothesis*, version 1.5, by Qui Vincit and Fable.

**[Open the reader](https://wcook04.github.io/riemann-hypothesis-reader/)** · [Try Statement 2.1 beside its Lean](https://wcook04.github.io/riemann-hypothesis-reader/?n=rh.result&l=b11474-11623&v=lean&view=pdf&page=4) · [Explore the map](https://wcook04.github.io/riemann-hypothesis-reader/map/)

Click a highlighted passage to open its Lean declaration. The Graph tab follows the selected statement and distinguishes dependencies in its type from dependencies in its proof. The reader links 145 passages to 146 Lean declarations across 92 modules. Select Statement 2.1 and open Reading notes to see why the real part of a zeta zero matters for counting primes and how the functional equation finishes the zero-free argument. The notes include links to the relevant sources. Compare shows the AI-assisted assessments of the statements. What ran links to the archive’s recorded checks.

## Sources and credit

- The PDF is reproduced under CC BY 4.0 from the authors’ pinned repository. [Paper and verification records](https://github.com/vincitamore/riemann-lean-account/tree/dd9bfc30bf9fc605251a22aa41004d1e22cc303b)
- The Lean formalization is by Levent Alpöge with Claude. The reader retrieves individual source files from the Lean community’s pinned import and verifies their hashes before display. [Announcement](https://alpo.ge/remark.pdf) · [Lean revision](https://github.com/leanprover-community/riemann-hypothesis/tree/8b83d5e7b319ebc7b3be6e59ce3411ba2b09d116)
- The graph uses a compiled dependency export from James Shore. [Dependency dataset](https://github.com/james-shore/rh-proof-dependencies/releases/tag/v0.2.1)

## Build and hosting

This repository contains the generated GitHub Pages edition. The reader, passage mappings, and build instructions are in Lean Exposition. The generated site links to the pinned sources and does not bundle the upstream Lean files. [Source and build instructions](https://github.com/wcook04/lean-exposition/blob/9a392e29ab238e1f24bd4f84c366702292b6dba0/docs/web-api.md#connect-the-library-reader)

The reader software is under [Apache 2.0](LICENSE.txt). See [NOTICE](NOTICE.txt) and [third-party notices](THIRD_PARTY_NOTICES.md) for credits.

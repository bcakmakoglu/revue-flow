---
home: true
heroText: null
tagline: null
footer: MIT Licensed | Copyright © 2021-present Burak Cakmakoglu
---

<Home />

<Suspense>
  <Banner />
</Suspense>

<client-only>
  <Features />

  <XyzTransition appear-visible xyz="fade down ease-out-back">
    <Acknowledgement />
  </XyzTransition>
</client-only>

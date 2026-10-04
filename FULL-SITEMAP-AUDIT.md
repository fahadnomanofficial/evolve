# Full sitemap audit

Checked on 4 October 2026 against https://www.evolve.com.mt/sitemap_index.xml.

- 182 source URLs, all represented in the rebuilt website.
- 115 individual products; 29 product categories; 525 recorded variants.
- Four articles and their original blog archive. Article copy is adapted; original titles, topics, author and publication dates are retained.
- 324 additional original product, variant, category and article images downloaded locally.
- 68 source pages returned HTTP 200. The remaining 114 variable-product pages returned HTTP 500 with the source WordPress error. All affected product content was recovered from the public WooCommerce Store API.
- Store API product count: 115; all category counts match the original taxonomy. All 525 variant records were retrieved.
- Some source product titles have a shade count that differs from the source attribute terms. Original names and actual available option lists were preserved, rather than silently changing source data.
- Price and stock values are snapshots, labelled with the audit date. Orders and payments are not processed by this static frontend.

## Coverage

| Original path | HTTP response | Source used |
|---|---:|---|
| /2022/02/exterior-sheeting-what-is-it-and-why-is-it-used/ | 200 | Original page; public API where available |
| /2022/02/how-to-pick-the-perfect-paint-colour-for-your-bedroom/ | 200 | Original page; public API where available |
| /2022/02/different-types-of-gypsum-boards/ | 200 | Original page; public API where available |
| /2022/07/how-to-add-life-to-your-walls/ | 200 | Original page; public API where available |
| / | 200 | Original page; public API where available |
| /basket/ | 200 | Original page; public API where available |
| /clients/ | 200 | Original page; public API where available |
| /checkout/ | 200 | Original page; public API where available |
| /paint-fandeck/ | 200 | Original page; public API where available |
| /paint-disclaimer/ | 200 | Original page; public API where available |
| /products/acoustic-solutions-malta/ | 200 | Original page; public API where available |
| /projects/ | 200 | Original page; public API where available |
| /testimonials/ | 200 | Original page; public API where available |
| /products/ | 200 | Original page; public API where available |
| /products/flooring/ | 200 | Original page; public API where available |
| /products/lighting-malta/ | 200 | Original page; public API where available |
| /products/insulation-acoustic-solutions/ | 200 | Original page; public API where available |
| /products/paint-and-membrane-malta/ | 200 | Original page; public API where available |
| /products/paint-malta/ | 200 | Original page; public API where available |
| /products/ceiling-tiles-malta/ | 200 | Original page; public API where available |
| /products/gypsum-plaster-malta-home-office/ | 200 | Original page; public API where available |
| /products/gypsum-malta-home-office/ | 200 | Original page; public API where available |
| /online-shop/ | 200 | Original page; public API where available |
| /products/thermal-insulation/ | 200 | Original page; public API where available |
| /products/vinyl-flooring/ | 200 | Original page; public API where available |
| /products/parquet-flooring/ | 200 | Original page; public API where available |
| /products/laminate-flooring/ | 200 | Original page; public API where available |
| /products/artificial-turf/ | 200 | Original page; public API where available |
| /products/decking/ | 200 | Original page; public API where available |
| /products/membrane/ | 200 | Original page; public API where available |
| /products/green-walls/ | 200 | Original page; public API where available |
| /products/3d-walls/ | 200 | Original page; public API where available |
| /products/wall-sheeting/ | 200 | Original page; public API where available |
| /products/wall-decor-malta/ | 200 | Original page; public API where available |
| /contact/ | 200 | Original page; public API where available |
| /services/ | 200 | Original page; public API where available |
| /shop/ | 200 | Original page; public API where available |
| /product/off-white-master-internal-light/ | 500 | Public Store API product and variant records |
| /product/magnolia-profi-external/ | 500 | Public Store API product and variant records |
| /product/yellow-4seasons-elastic-external-light/ | 500 | Public Store API product and variant records |
| /product/orange-4seasons-elastic-external-light/ | 500 | Public Store API product and variant records |
| /product/red-4seasons-elastic-external-light/ | 500 | Public Store API product and variant records |
| /product/off-white-4seasons-elastic-external-light/ | 500 | Public Store API product and variant records |
| /product/master-hydrocontrol-internal-white/ | 500 | Public Store API product and variant records |
| /product/bartoline-wall-paper-adhesive/ | 200 | Original page; public API where available |
| /product/red-master-internal-dark2/ | 500 | Public Store API product and variant records |
| /product/orange-master-internal-dark2/ | 500 | Public Store API product and variant records |
| /product/yellow-master-internal-dark2/ | 500 | Public Store API product and variant records |
| /product/green-master-internal-dark2/ | 500 | Public Store API product and variant records |
| /product/blue-master-internal-dark2/ | 500 | Public Store API product and variant records |
| /product/purple-master-internal-dark2/ | 500 | Public Store API product and variant records |
| /product/grey-master-internal-dark2/ | 500 | Public Store API product and variant records |
| /product/white-profi-external/ | 500 | Public Store API product and variant records |
| /product/master-hydrocontrol-internal-light-off-whites-108-shades/ | 500 | Public Store API product and variant records |
| /product/master-hinternal-light-reds-127-shades-copy/ | 500 | Public Store API product and variant records |
| /product/master-hydrocontrol-internal-light-oranges-130-shades/ | 500 | Public Store API product and variant records |
| /product/master-hydrocontrol-internal-light-yellows-98-shades/ | 500 | Public Store API product and variant records |
| /product/master-hydrocontrol-internal-light-greens-171-shades/ | 500 | Public Store API product and variant records |
| /product/master-hydrocontrol-internal-light-blues-134-shades/ | 500 | Public Store API product and variant records |
| /product/master-hydrocontrol-internal-light-purples-114-shades/ | 500 | Public Store API product and variant records |
| /product/master-hydrocontrol-internal-light-grey-53-shades/ | 500 | Public Store API product and variant records |
| /product/white-profi-internal/ | 500 | Public Store API product and variant records |
| /product/grey-4-seasons-acrylic-external-dark2/ | 500 | Public Store API product and variant records |
| /product/purple-4-seasons-acrylic-external-dark2/ | 500 | Public Store API product and variant records |
| /product/orange-4-seasons-acrylic-external-dark2/ | 500 | Public Store API product and variant records |
| /product/red-4-seasons-acrylic-external-dark2/ | 500 | Public Store API product and variant records |
| /product/blue-4-seasons-acrylic-external-dark2/ | 500 | Public Store API product and variant records |
| /product/green-4-seasons-acrylic-external-dark2/ | 500 | Public Store API product and variant records |
| /product/yellow-4-seasons-acrylic-external-dark2/ | 500 | Public Store API product and variant records |
| /product/grey-4-seasons-acrylic-external-dark/ | 500 | Public Store API product and variant records |
| /product/red-4-seasons-acrylic-external-dark/ | 500 | Public Store API product and variant records |
| /product/purple-4-seasons-acrylic-external-dark/ | 500 | Public Store API product and variant records |
| /product/orange-4-seasons-acrylic-external-dark/ | 500 | Public Store API product and variant records |
| /product/blue-4-seasons-acrylic-external-dark/ | 500 | Public Store API product and variant records |
| /product/green-4-seasons-acrylic-external-dark/ | 500 | Public Store API product and variant records |
| /product/yellow-4-seasons-acrylic-external-dark/ | 500 | Public Store API product and variant records |
| /product/grey-4-seasons-acrylic-external-medium/ | 500 | Public Store API product and variant records |
| /product/purple-4-seasons-acrylic-external-medium/ | 500 | Public Store API product and variant records |
| /product/orange-4-seasons-acrylic-external-medium/ | 500 | Public Store API product and variant records |
| /product/red-4-seasons-acrylic-external-medium/ | 500 | Public Store API product and variant records |
| /product/blue-4-seasons-acrylic-external-medium/ | 500 | Public Store API product and variant records |
| /product/green-4-seasons-acrylic-external-medium/ | 500 | Public Store API product and variant records |
| /product/yellow-4-seasons-acrylic-external-medium/ | 500 | Public Store API product and variant records |
| /product/red-4-seasons-acrylic-external-light/ | 500 | Public Store API product and variant records |
| /product/grey-4-seasons-acrylic-external-light/ | 500 | Public Store API product and variant records |
| /product/purple-4-seasons-acrylic-external-light/ | 500 | Public Store API product and variant records |
| /product/blue-4-seasons-acrylic-external-light/ | 500 | Public Store API product and variant records |
| /product/green-4-seasons-acrylic-external-light/ | 500 | Public Store API product and variant records |
| /product/yellow-4-seasons-acrylic-external-light/ | 500 | Public Store API product and variant records |
| /product/orange-4-seasons-acrylic-external-light/ | 500 | Public Store API product and variant records |
| /product/off-white-4-seasons-acrylic-external-light/ | 500 | Public Store API product and variant records |
| /product/grey-4-seasons-elastic-external-light/ | 500 | Public Store API product and variant records |
| /product/purple-4-seasons-elastic-external-light/ | 500 | Public Store API product and variant records |
| /product/blue-4seasons-elastic-external-light/ | 500 | Public Store API product and variant records |
| /product/green-4seasons-elastic-external-light/ | 500 | Public Store API product and variant records |
| /product/purple-profi-external-medium/ | 500 | Public Store API product and variant records |
| /product/grey-profi-external-medium/ | 500 | Public Store API product and variant records |
| /product/blue-profi-external-medium/ | 500 | Public Store API product and variant records |
| /product/green-profi-external-medium/ | 500 | Public Store API product and variant records |
| /product/yellow-profi-external-medium/ | 500 | Public Store API product and variant records |
| /product/orange-profi-external-medium/ | 500 | Public Store API product and variant records |
| /product/red-profi-external-medium/ | 500 | Public Store API product and variant records |
| /product/grey-profi-external-light/ | 500 | Public Store API product and variant records |
| /product/purple-profi-external-light/ | 500 | Public Store API product and variant records |
| /product/blue-profi-external-light/ | 500 | Public Store API product and variant records |
| /product/green-profi-external-light/ | 500 | Public Store API product and variant records |
| /product/yellow-profi-external-light/ | 500 | Public Store API product and variant records |
| /product/orange-profi-external-light/ | 500 | Public Store API product and variant records |
| /product/red-profi-external-light/ | 500 | Public Store API product and variant records |
| /product/off-white-profi-external-light/ | 500 | Public Store API product and variant records |
| /product/grey-master-internal-dark/ | 500 | Public Store API product and variant records |
| /product/purple-master-internal-dark/ | 500 | Public Store API product and variant records |
| /product/blue-master-internal-dark/ | 500 | Public Store API product and variant records |
| /product/green-master-internal-dark/ | 500 | Public Store API product and variant records |
| /product/yellow-master-internal-dark/ | 500 | Public Store API product and variant records |
| /product/orange-master-internal-dark/ | 500 | Public Store API product and variant records |
| /product/red-master-internal-dark/ | 500 | Public Store API product and variant records |
| /product/grey-master-internal-medium/ | 500 | Public Store API product and variant records |
| /product/purple-master-internal-medium/ | 500 | Public Store API product and variant records |
| /product/blue-master-internal-medium/ | 500 | Public Store API product and variant records |
| /product/green-master-internal-medium/ | 500 | Public Store API product and variant records |
| /product/yellow-master-internal-medium/ | 500 | Public Store API product and variant records |
| /product/orange-master-internal-medium/ | 500 | Public Store API product and variant records |
| /product/red-master-internal-medium/ | 500 | Public Store API product and variant records |
| /product/grey-master-internal-light/ | 500 | Public Store API product and variant records |
| /product/purple-master-internal-light/ | 500 | Public Store API product and variant records |
| /product/blue-master-internal-light/ | 500 | Public Store API product and variant records |
| /product/green-master/ | 500 | Public Store API product and variant records |
| /product/yellow-master-internal-light/ | 500 | Public Store API product and variant records |
| /product/orange-master-internal-light/ | 500 | Public Store API product and variant records |
| /product/red-master-internal-light/ | 500 | Public Store API product and variant records |
| /product/white-master-internal/ | 500 | Public Store API product and variant records |
| /product/grey-profi-internal-medium/ | 500 | Public Store API product and variant records |
| /product/purple-profi-internal-medium/ | 500 | Public Store API product and variant records |
| /product/blue-profi-internal-medium/ | 500 | Public Store API product and variant records |
| /product/green-profi-internal-medium/ | 500 | Public Store API product and variant records |
| /product/yellow-profi-internal-medium/ | 500 | Public Store API product and variant records |
| /product/orange-profi-internal-medium/ | 500 | Public Store API product and variant records |
| /product/red-profi-internal-medium/ | 500 | Public Store API product and variant records |
| /product/off-white-profi-internal-light/ | 500 | Public Store API product and variant records |
| /product/grey-profi-internal-light/ | 500 | Public Store API product and variant records |
| /product/yellow-profi-internal-light/ | 500 | Public Store API product and variant records |
| /product/orange-profi-internal-light/ | 500 | Public Store API product and variant records |
| /product/purple-profi-internal/ | 500 | Public Store API product and variant records |
| /product/blue-profi-internal-light/ | 500 | Public Store API product and variant records |
| /product/green-profi-internal-light/ | 500 | Public Store API product and variant records |
| /product/red-profi-internal-light/ | 500 | Public Store API product and variant records |
| /product/fashion-for-walls/ | 500 | Public Store API product and variant records |
| /product/elle-decoration/ | 500 | Public Store API product and variant records |
| /product/play-of-light/ | 500 | Public Store API product and variant records |
| /product/focus/ | 500 | Public Store API product and variant records |
| /product/casual-chic/ | 500 | Public Store API product and variant records |
| /category/blog/ | 200 | Original page; public API where available |
| /product-category/uncategorised/ | 200 | Original page; public API where available |
| /product-category/paint/exterior/4-seasons-acrylic/ | 200 | Original page; public API where available |
| /product-category/paint/exterior/4-seasons-acrylic/4-seasons-acrylic-external-dark2/ | 200 | Original page; public API where available |
| /product-category/paint/exterior/4-seasons-acrylic/4-seasons-acrylic-external-dark/ | 200 | Original page; public API where available |
| /product-category/paint/exterior/4-seasons-acrylic/4-seasons-acrylic-external-light/ | 200 | Original page; public API where available |
| /product-category/paint/exterior/4-seasons-acrylic/4-seasons-acrylic-external-medium/ | 200 | Original page; public API where available |
| /product-category/paint/exterior/4-seasons-elastic/ | 200 | Original page; public API where available |
| /product-category/uncategorised/accessories/ | 200 | Original page; public API where available |
| /product-category/wallpaper/cashual-chic/ | 200 | Original page; public API where available |
| /product-category/wallpaper/elle-decorations-3/ | 200 | Original page; public API where available |
| /product-category/paint/exterior/ | 200 | Original page; public API where available |
| /product-category/wallpaper/fashion-for-walls/ | 200 | Original page; public API where available |
| /product-category/wallpaper/focus/ | 200 | Original page; public API where available |
| /product-category/paint/interior/ | 200 | Original page; public API where available |
| /product-category/paint/ | 200 | Original page; public API where available |
| /product-category/paint/interior/master-eco-internal/ | 200 | Original page; public API where available |
| /product-category/paint/interior/master-eco-internal/master-eco-internal-dark2/ | 200 | Original page; public API where available |
| /product-category/paint/interior/master-eco-internal/master-eco-internal-dark/ | 200 | Original page; public API where available |
| /product-category/paint/interior/master-eco-internal/master-eco-internal-light/ | 200 | Original page; public API where available |
| /product-category/paint/interior/master-eco-internal/master-eco-internal-medium/ | 200 | Original page; public API where available |
| /product-category/paint/interior/hydrocontrol/ | 200 | Original page; public API where available |
| /product-category/wallpaper/play-of-life/ | 200 | Original page; public API where available |
| /product-category/paint/exterior/profi-external/ | 200 | Original page; public API where available |
| /product-category/paint/exterior/profi-external/profi-external-light/ | 200 | Original page; public API where available |
| /product-category/paint/exterior/profi-external/profi-external-medium/ | 200 | Original page; public API where available |
| /product-category/paint/interior/profi-internal/ | 200 | Original page; public API where available |
| /product-category/paint/interior/profi-internal/profi-internal-light/ | 200 | Original page; public API where available |
| /product-category/paint/interior/profi-internal/profi-internal-medium/ | 200 | Original page; public API where available |
| /product-category/wallpaper/ | 200 | Original page; public API where available |

The generated SITEMAP-COVERAGE.json verifies all original paths are present. The build fails if a source route is missing. npm run check also verifies local navigation, image paths, category counts and variation attributes.

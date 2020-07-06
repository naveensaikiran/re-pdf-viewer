# re-pdf-viewer

---

[![npm version](https://badge.fury.io/js/re-pdf-viewer.svg)](https://badge.fury.io/js/re-pdf-viewer)

`re-pdf-viewer` provides a component for rendering PDF documents using [PDF.js](http://mozilla.github.io/pdf.js/). Control ZoomIn and ZoomOut and dynamically update page numbers on scroll

---

## Usage

Install with `npm install re-pdf-viewer --save`

Use in your app

```js
import React, { useState } from "react";
import Pdf from "re-pdf-viewer";

const MultiPagePdf = () => {
  const [scale, setScale] = useState(1);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  const zoomIn = () => {
    setScale(scale + 1);
  };

  const zoomOut = () => {
    setScale(scale - 1);
  };

  return (
    <div>
      <button onClick={zoomIn}>ZOOM IN</button>
      <button onClick={zoomOut}>ZOOM OUT</button>
      <div>
        Page - {page} / Pages - {pages}{" "}
      </div>
      <Pdf
        file={file}
        scale={scale}
        setPages={(num) => setPages(num)}
        setPage={(num) => setPage(num)}
        loading={<div>Loading...</div>}
      />
    </div>
  );
};
```

## Credit

This project is a fork of [react-pdf-js](https://github.com/mikecousins/react-pdf-js) which is a fork of [react-pdfjs](https://github.com/erikras/react-pdfjs) which itself was a port of [react-pdf](https://github.com/nnarhinen/react-pdf), so thank you to
the original authors.

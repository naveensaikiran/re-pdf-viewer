/* eslint-disable no-console */
import React, { useState } from 'react';
import Pdf from '../../src/Pdf';
import file from './sample-pdf.pdf';

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

  console.log(`${page} / ${pages}`);

  return (<div>
    <button onClick={zoomIn} >ZOOM IN</button>
    <button onClick={zoomOut} >ZOOM OUT</button>
    <div>Page - {page} / Pages - {pages} </div>
    <Pdf file={file} scale={scale} setPages={num => setPages(num)} setPage={num => setPage(num)} loading={<div>Hello</div>} />
  </div>);
};

export default MultiPagePdf;

import { Component, createSignal } from "solid-js";
import { usePDFSlick } from "@pdfslick/solid";

//
// It is required to include PDFSlick's CSS styles once
// you can do it in your main `App.tsx` for example
//
import "@pdfslick/solid/dist/pdf_viewer.css";

type PDFViewerComponentProps = {
  pdfFilePath: string;
};

const PDFViewerComponent: Component<PDFViewerComponentProps> = ({
  pdfFilePath,
}) => {
  const {
    viewerRef,
    pdfSlickStore: store,
    PDFSlickViewer,
  } = usePDFSlick(pdfFilePath);

  return (
    <div class="absolute mt-[7rem]  inset-0 flex flex-col pdfSlick">
      <div class="flex-1  relative h-full">
        <PDFSlickViewer {...{ store, viewerRef }} />

        {/*
          Pass PDFSlick's store to your custom components (like the `<PDFNavigation />` below) —
          Toolbars, Sidebars, components which render thumbnails etc.
          and use it as here to get and react on 
          PDF document and viewer properties and changes
        */}

        {/*
          PDFSlick's store values automatically update
        */}
      </div>
    </div>
  );
};

export default PDFViewerComponent;

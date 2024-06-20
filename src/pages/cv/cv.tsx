import PDFViewerComponent from "../../components/PDFViewerComponent/PDFViewerComponent";
import Asd from "../../assets/resume.pdf";

const CvPage = () => {
  return (
    <div>
      <a
        class="float-right mr-10 hover:text-yellow-400 hover:scale-125"
        href="https://drive.google.com/file/d/1BXP8k-3AEzb_LT51tqOOuHAi2R3GqOpj/view?usp=sharing"
        download="Geza_Szoradi_resume"
      >
        Download
      </a>

      <div class="text-white">
        <div class=" mt-[65rem]  flex flex-col items-center justify-center text-center">
          <PDFViewerComponent pdfFilePath="https://drive.google.com/file/d/1BXP8k-3AEzb_LT51tqOOuHAi2R3GqOpj/view?usp=sharing" />
        </div>
      </div>
    </div>
  );
};

export default CvPage;

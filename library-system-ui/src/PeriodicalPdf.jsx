import { useLocation } from "react-router-dom";

const PeriodicalPdf= () => {
    const location = useLocation();
  const pdfUrl =  location.state.pdfUrl;
  console.log("pdfUrl", pdfUrl)
 return (
 <div>
 <iframe src = {pdfUrl} style={{width: "100%", height: "500px"}}/>
 </div>
 );
};
export default PeriodicalPdf;
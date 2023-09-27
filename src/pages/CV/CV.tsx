import { Box, Divider, Button } from "@mui/material";
import { OffWhite, White, secondSidebarBackground } from "../../assets/colors";
import CVIdentity from "./CVIdentity";
import _ from "lodash";
import CVProfile from "./CVProfile";
import CVExperience from "./CVExperience";
import CVFormation from "./CVFormation";
import DownloadIcon from "@mui/icons-material/Download";
import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";
import CVSkills from "./CVSkills";
import CVAccomplishment from "./CVAccomplishment";
import CVLanguage from "./CVLanguage";
import classNames from "classnames";
import CVHobbies from "./CVHobbies";
import { useState } from "react";

const options: Options = {
  filename: "edison-kassin-cv.pdf",
  method: "save",
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  resolution: Resolution.MEDIUM,
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.MEDIUM,
    // default is 'A4'
    format: "letter",
    // default is 'portrait' or "landscape"
    orientation: "portrait",
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: "image/jpeg",
    qualityRatio: 1,
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true,
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true,
    },
  },
};
const CustomCV = () => {
  const getTargetElement = () => document.getElementById("content-cv");
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <div>Telechargement en cours du CV</div>;
  }
  return (
    <Box
      className="py-2 px-40 overflow-y-auto"
      style={{
        color: "#333c4d",
        background: OffWhite,
      }}
    >
      <Button
        style={{ color: secondSidebarBackground }}
        startIcon={<DownloadIcon />}
        onClick={async () => {
          setLoading(true);
          await generatePDF(getTargetElement, options);
          setLoading(false);
        }}
      >
        Telecharger en PDF
      </Button>

      <Box id="content-cv">
        <ChildrenLayout>
          <CVIdentity />
          <CVProfile />
          <CVExperience />
          <CVSkills />
          <CVFormation />
          <CVAccomplishment />
          <CVLanguage />
          <CVHobbies />
        </ChildrenLayout>
      </Box>
    </Box>
  );
};

export default CustomCV;

const ChildrenLayout = ({ children }: { children: React.ReactNode }) => {
  const isArray = _.isArray(children);

  return (
    <Box
      className="h-full w-full p-8 shadow-sm border-orange-400"
      style={{
        background: White,
      }}
    >
      {_.map(isArray ? children : [children], (child: any, index: number) => (
        <Box className={classNames("flex flex-col gap-5 mb-5")}>
          {child}
          {index !== _.size(children) - 1 && (
            <Divider
              style={{
                height: "3px",
                background: secondSidebarBackground,
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

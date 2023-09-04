import { Box, Divider, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import BasicCard from "./components/BasicCard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import {
  sortObjectsByPropertyDescending,
  takeNFirstElements,
} from "../../utils/utils";
import _ from "lodash";
import { ACTION_TYPE } from "../../utils/constants/SidebarItem";
import { IAction } from "../../components/ActionsBox/ActionsBox";
import { sidebarBackground, sidebarItemClicked } from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import { BASE_ROUTE } from "../../routes/constants";
import { useAppDispatch } from "../../redux/app/hooks";
import { setNewPage } from "../../redux/features/category/CategorySlice";

interface IProject {
  id: string;
  name: string;
  description: string;
  created_at?: Date;
  path: string;
}

interface IProjectsList {
  limit?: number;
  projects: IProject[];
}
const ProjectsList = ({ limit, projects }: IProjectsList) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const projectLimited = takeNFirstElements(
    sortObjectsByPropertyDescending(projects, "created_at"),
    limit
  );

  const actions: IAction[] = [
    // {
    //   label: "Modifier",
    //   actionType: ACTION_TYPE.EDIT,
    //   onClick: (id: string) => alert("EDIT " + id),
    //   Icon: <EditIcon />,
    // },
    {
      label: "Visualiser",
      Icon: <PreviewIcon />,
      actionType: ACTION_TYPE.DETAILS,
      onClick: (id: string) => alert("VISUALISER " + id),
    },
  ];
  return (
    <Box className="my-10">
      {/* Header */}
      <h1 className="flex items-center gap-5 text-3xl w-full font-bold mb-2">
        <span>Mes derniers projets</span>
        <span>
          <CodeIcon />
        </span>
      </h1>
      <Divider />

      <Box>
        {_.map(projectLimited, (project: IProject) => (
          <BasicCard
            key={project.id}
            id={project.id}
            path={project.path}
            Icon={<AccountTreeIcon style={{ fontSize: "50px" }} />}
            title={project.name}
            description={project.description}
            actions={actions}
          />
        ))}

        {limit && _.size(projects) >= limit && (
          <div className="flex justify-start mt-5">
            <Button
              className="shadow-md"
              style={{
                background: sidebarBackground,
                color: sidebarItemClicked,
                padding: "10px 50px",
              }}
              onClick={() => {
                navigate(`${BASE_ROUTE}/projects`);
                dispatch(
                  setNewPage({
                    itemKey: "projects",
                    itemLabel: "Projects",
                  })
                );
              }}
            >
              Voir plus
            </Button>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default ProjectsList;

import { Box, Divider, Button } from "@mui/material";
import BasicCard from "./components/BasicCard";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import EditIcon from "@mui/icons-material/Edit";
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

interface IPost {
  id: string;
  title: string;
  description: string;
  created_at?: Date;
  path: string;
}

interface IPostList {
  limit?: number;
  posts: IPost[];
}
const PostList = ({ limit, posts }: IPostList) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const projectLimited = takeNFirstElements(
    sortObjectsByPropertyDescending(posts, "created_at"),
    limit
  );

  const actions: IAction[] = [
    {
      label: "Modifier",
      actionType: ACTION_TYPE.EDIT,
      onClick: (id: string) => alert("EDIT " + id),
      Icon: <EditIcon />,
    },
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
        <span>Mes derniers posts</span>
        <span>
          <DynamicFormIcon />
        </span>
      </h1>
      <Divider />

      <Box>
        {_.map(projectLimited, (post: IPost) => (
          <BasicCard
            key={post.id}
            id={post.id}
            path={post.path}
            Icon={<DynamicFormIcon style={{ fontSize: "50px" }} />}
            title={post.title}
            description={post.description}
            actions={actions}
          />
        ))}

        <div className="flex justify-start mt-5">
          <Button
            className="shadow-md"
            style={{
              background: sidebarBackground,
              color: sidebarItemClicked,
              padding: "10px 50px",
            }}
            onClick={() => {
              navigate(`${BASE_ROUTE}/blogs`);
              dispatch(
                setNewPage({
                  itemKey: "blogs",
                  itemLabel: "Blogs",
                })
              );
            }}
          >
            Voir plus
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default PostList;

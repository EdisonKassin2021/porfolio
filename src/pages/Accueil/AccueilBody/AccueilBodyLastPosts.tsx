import { Box, Button } from "@mui/material";
import { White, secondSidebarBackground } from "../../../assets/colors";
import _ from "lodash";
import { useEffect, useState } from "react";
import { IBlog } from "../../Blogs/BlogsForm";
import axios from "axios";
import { useAppSelector } from "../../../redux/app/hooks";
import { getSessionToken } from "../../../redux/features/login/LoginSlice";
import { useNavigate } from "react-router-dom";
import { BASE_ROUTE } from "../../../routes/constants";
import {
  sortObjectsByPropertyDescending,
  takeNFirstElements,
} from "../../../utils/utils";
import classNames from "classnames";
import BlogCard from "../../Blogs/BlogCard";

const AccueilBodyLastPosts = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const token = useAppSelector(getSessionToken);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await axios.get("http://localhost:3000/blogs");
      if (data.status === 200) {
        setBlogs(data.data);
      }
    })();
  }, []);

  const posts = takeNFirstElements(
    sortObjectsByPropertyDescending(blogs, "createdAt"),
    5
  );
  return (
    <Box className="w-full flex flex-col items-center gap-3 p-3">
      <Box
        className="w-full text-center font-bold underline"
        style={{ fontSize: "20px", color: secondSidebarBackground }}
      >
        <h2>Les derniers posts</h2>
      </Box>

      <Box>
        <p style={{ fontWeight: 300 }}>
          Ici sont présentés des derniers posts publiés par nos soins!
        </p>
      </Box>

      {_.isEmpty(posts) && (
        <Box className="p-5 flex flex-col items-center justify-center gap-5 bg-red-400 w-full">
          <div className="text-xl text-white"> Aucun blog publié encore</div>
          {token && (
            <div>
              <Button
                className="rounded-md"
                style={{
                  background:
                    "linear-gradient(to bottom, #2271b1, #818a96, #2271b1)",
                  color: White,
                }}
                onClick={() => {
                  navigate(`${BASE_ROUTE}/blogs/create`);
                }}
              >
                Créer un post
              </Button>
            </div>
          )}
        </Box>
      )}

      {_.size(posts) > 0 && (
        <Box
          className={classNames(
            "grid gap-6 justify-center p-3",
            _.size(blogs) > 3 ? "grid-cols-3" : `grid-cols-${_.size(blogs)}`
          )}
        >
          {_.map(takeNFirstElements(blogs, 6), (blog: IBlog) => (
            <BlogCard
              blog={{
                id: blog.id!,
                title: blog.title,
                description: `${blog.title}`,
              }}
              withHead={false}
            />
          ))}
        </Box>
      )}

      {_.size(blogs) > 6 && (
        <Box className={"w-full flex justify-center"}>
          <Button
            style={{
              background:
                "linear-gradient(to bottom, #2271b1, #818a96, #2271b1)",
              color: White,
              borderRadius: "30px",
              padding: "10px",
            }}
            onClick={() => navigate(`${BASE_ROUTE}/blogs`)}
          >
            Voir plus
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AccueilBodyLastPosts;

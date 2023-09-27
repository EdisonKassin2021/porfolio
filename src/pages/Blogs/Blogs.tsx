import { Box } from "@mui/material";
import BlogCard from "./BlogCard";
import BlogHeader from "./BlogHeader";
import { useEffect, useState } from "react";
import { IBlog } from "./BlogsForm";
import _ from "lodash";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get("http://localhost:3000/blogs");
      if (data.status === 200) {
        setBlogs(data.data);
      }
    })();
  }, []);
  return (
    <Box>
      <BlogHeader />

      <Box className="p-3 py-8 flex gap-4 flex-wrap">
        {_.map(blogs, (blog: IBlog) => (
          <BlogCard
            blog={{
              id: blog.id!,
              title: blog.title,
              description: blog.description,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Blogs;

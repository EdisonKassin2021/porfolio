import { Box } from "@mui/material";
import BlogCard from "./BlogCard";
import BlogHeader from "./BlogHeader";
import { useEffect, useState } from "react";
import { IBlog } from "./BlogsForm";
import _ from "lodash";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../hooks/useScreenSize";

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const navigate = useNavigate();
  const screen = useScreenSize();

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
      <Box>
        <BlogHeader />
        <Box className="p-3 py-8 flex gap-4 flex-wrap">
          {_.isEmpty(blogs) && (
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMjToKcWqiFnUKJLrcLUoEPf1n7MzOEqCaQ&usqp=CAU)",
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Aucun post !</h1>
                  <p className="mb-5">
                    Explorons ensemble un monde de connaissances, d'inspiration
                    et de découvertes. Bienvenue sur mon écran de posts, où
                    l'imagination rencontre l'information. Plongez dans nos
                    articles captivants et partagez l'excitation de
                    l'apprentissage continu.
                  </p>
                  {_.includes(["xl", "lg"], screen) && (
                    <button
                      className="btn btn-warning"
                      onClick={() => navigate(`create`)}
                    >
                      Ajouter
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {_.size(blogs) > 0 &&
            _.map(blogs, (blog: IBlog) => (
              <BlogCard
                blog={{
                  id: blog.id!,
                  title: blog.title,
                  description: blog.description,
                }}
                key={blog.id}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Blogs;

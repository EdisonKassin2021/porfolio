import { Box } from "@mui/material";
import { useAppSelector } from "../../redux/app/hooks";
import {
  IRealisation,
  getRealisations,
} from "../../redux/features/realisations/RealisationSlice";
import _ from "lodash";
import DashboardCard from "./components/DashboardCard";
import { Teal } from "../../assets/colors";
import { useEffect, useState } from "react";
import { IBlog } from "../Blogs/BlogsForm";
import axios from "axios";
import { takeNFirstElements } from "../../utils/utils";
import { useScreenSize } from "../../hooks/useScreenSize";
import classNames from "classnames";

const Dashboard = () => {
  const realisations = useAppSelector(getRealisations);
  const screen = useScreenSize();
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
    <Box className="flex flex-col gap-4 p-5">
      <Box className="p-2 flex gap-5 flex-wrap justify-start ">
        <DashboardCard label="Nombre de posts" value={`${_.size(blogs)}`} />
        <DashboardCard
          label="Nombre de projets"
          value={`${_.size(realisations)}`}
        />
        <DashboardCard
          label="Nombre d'années d'expériences"
          value={`${new Date(Date.now()).getFullYear() - 2021}`}
        />
      </Box>

      <Box
        className={classNames(
          "flex w-full p-5 gap-4",
          _.includes(["sm", "xs", "md"], screen) && "flex-col"
        )}
      >
        <Box
          className="grow w-full"
          style={{
            border: `2px solid ${Teal}`,
          }}
        >
          <div
            className="p-2 bg-red-100 shadow-md"
            style={{
              background: Teal,
              fontWeight: 700,
            }}
          >
            Liste des dernières posts
          </div>
          <Box className="p-2">
            <table>
              <tbody>
                {_.map(
                  takeNFirstElements(blogs, 5),
                  (blog: IBlog, index: number) => (
                    <tr className="flex items-center m-2" key={blog.id}>
                      <td className="font-bold">{index + 1}.</td>
                      <td className="px-2">{blog.title}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </Box>
        </Box>
        <Box
          className="grow w-full"
          style={{
            border: `2px solid ${Teal}`,
          }}
        >
          <div
            className="p-2 shadow-md"
            style={{
              background: Teal,
              fontWeight: 700,
            }}
          >
            Liste de quelques projets faits
          </div>
          <Box className="p-2">
            <table>
              <tbody>
                {_.map(
                  takeNFirstElements(realisations, 5),
                  (blog: IRealisation, index: number) => (
                    <tr className="flex items-center m-2" key={blog.id}>
                      <td className="font-bold">{index + 1}.</td>
                      <td className="px-2">{blog.name}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </Box>
        </Box>
      </Box>

      <Box className="flex w-full p-5 gap-4">
        <Box
          className="grow w-full"
          style={{
            border: `2px solid ${Teal}`,
          }}
        >
          <div
            className="p-2 bg-red-100 shadow-md"
            style={{
              background: Teal,
              fontWeight: 700,
            }}
          >
            Paramètres
          </div>
          <Box className="p-2">Aucun parametrage disponible</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

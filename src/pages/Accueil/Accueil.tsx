import { Box } from "@mui/material";
import AboutMe from "./AboutMe";
import ProjectsList from "./ProjectsList";
import PostList from "./PostList";

const Accueil = () => {
  return (
    <Box className="h-full">
      <Box
        className="p-8 pr-10 h-full overflow-y-auto"
        style={{
          color: "#333c4d",
        }}
      >
        <AboutMe />
        <ProjectsList
          limit={5}
          projects={[
            {
              description: "This is a description",
              id: "Id1",
              name: "This is the name of Project",
              path: "1",
              created_at: new Date(Date.now()),
            },
            {
              description: "This is a description",
              id: "Id2",
              name: "This is the name of Project",
              path: "2",
              created_at: new Date(Date.now()),
            },
            {
              description: "This is a description",
              id: "Id3",
              name: "This is the name of Project",
              path: "3",
              created_at: new Date(Date.now()),
            },
            {
              description: "This is a description",
              id: "Id4",
              name: "This is the name of Project",
              path: "4",
              created_at: new Date(Date.now()),
            },
            {
              description: "This is a description",
              id: "Id5",
              name: "This is the name of Project",
              path: "5",
              created_at: new Date(Date.now()),
            },
            {
              description: "This is a description",
              id: "Id6",
              name: "This is the name of Project",
              path: "6",
              created_at: new Date(Date.now()),
            },
          ]}
        />
        <PostList
          limit={3}
          posts={[
            {
              description: "This is a description",
              id: "Id1",
              title: "This is the name of post",
              path: "1",
              created_at: new Date(Date.now()),
            },
            {
              description: "This is a description",
              id: "Id2",
              title: "This is the name of post",
              path: "2",
              created_at: new Date(Date.now()),
            },
            {
              description: "This is a description",
              id: "Id3",
              title: "This is the name of post",
              path: "3",
              created_at: new Date(Date.now()),
            },
            {
              description: "This is a description",
              id: "Id4",
              title: "This is the name of post",
              path: "4",
              created_at: new Date(Date.now()),
            },
            {
              description: "This is a description",
              id: "Id5",
              title: "This is the name of post",
              path: "5",
              created_at: new Date(Date.now()),
            },
            {
              description: "This is a description",
              id: "Id6",
              title: "This is the name of post",
              path: "6",
              created_at: new Date(Date.now()),
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Accueil;

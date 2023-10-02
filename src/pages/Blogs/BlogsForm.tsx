import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import _ from "lodash";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import CustomTextfield from "../../components/CustomTextfield/CustomTextfield";
import {
  OffWhite,
  Teal,
  White,
  cancelColor,
  secondSidebarBackground,
  secondaryColor,
} from "../../assets/colors";
import useFormState from "../../hooks/useFormState";
import axios from "axios";
import { generateUniqueID } from "../../utils/utils";
import ForwardIcon from "@mui/icons-material/Forward";

const useStyle = makeStyles({
  editorInput: {
    "& .ql-container.ql-snow": {
      // border: "none",
    },
    "& .ql-toolbar.ql-snow": {
      // borderRadius: "4px",
    },
  },
});

//ref: https://www.npmjs.com/package/react-quill
//https://quilljs.com/docs/formats/
const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video"],

    [{ color: [] }, { background: [] }],

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ font: [] }],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ script: "sub" }, { script: "super" }], // superscript/subscript

    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],

    [{ align: [] }],
    [{ direction: "rtl" }], // text direction
    ["clean"], // remove formatting button
  ],
};

export interface IBlog {
  id?: string;
  title: string;
  description?: string;
  text: string;
  createdAt: Date;
  editedAt?: Date;
  autor?: string;
  likes?: string[];
  pusblished?: boolean;
}
const BlogsForm = () => {
  const { blog_id } = useParams();
  const classe = useStyle();
  const navigate = useNavigate();

  const [currentBlog, setCurrentBlog] = useState<IBlog | undefined>(undefined);

  //A changer avec du redux
  useEffect(() => {
    (async () => {
      const data = await axios.get("http://localhost:3000/blogs");
      if (data.status === 200 && blog_id) {
        const currentBlog = _.find(data.data, { id: blog_id });
        setCurrentBlog(currentBlog);
      }
    })();
  }, []);

  const [value, setValue] = useState("");

  const { attributes, handleInputChange, errors } = useFormState({
    initialAttributes: {
      title: currentBlog && blog_id ? currentBlog.title : "",
      description: currentBlog && blog_id ? currentBlog.description : "",
    },
    validate: ({ attributes }) => {
      const errors: any = {};
      if (_.isEmpty(attributes.title)) {
        errors["title"] = "Le titre est obligatoire";
      }

      return errors;
    },
  });

  useEffect(() => {
    if (currentBlog) {
      setValue(currentBlog.text);
      handleInputChange(currentBlog.title, "title");
      handleInputChange(currentBlog.description, "description");
    }
  }, [currentBlog]);

  const handleCreate = async () => {
    const date = new Date(Date.now());

    if (!blog_id) {
      await axios.post("http://localhost:3000/blogs", {
        title: attributes.title,
        description: attributes.description,
        createdAt: date,
        editedAt: date,
        text: value,
        autor: "Edison K",
        id: generateUniqueID(),
        likes: [],
        pusblished: false,
      } as IBlog);

      navigate(-1);
    } else {
      await axios.patch(`http://localhost:3000/blogs/${blog_id}`, {
        ...currentBlog,
        title: attributes.title,
        description: attributes.description,
        editedAt: date,
        text: value,
        autor: "Edison K",
      } as IBlog);
    }
  };

  return (
    <Box className="w-full h-full flex flex-col gap-3">
      <Box className="p-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          {blog_id ? "Modifier ce post" : "Ajouter un nouveau post"}
        </div>
        <div className="flex gap-3 items-center">
          <Button
            style={{
              background: secondSidebarBackground,
              color: OffWhite,
            }}
            disabled={!_.isEmpty(errors)}
            onClick={handleCreate}
          >
            {blog_id ? "Modifier" : "Ajouter"}
          </Button>

          <Button
            style={{
              background: secondaryColor,
              color: White,
            }}
            disabled={_.isEmpty(value)}
            onClick={() => alert("publié")}
          >
            Publié
          </Button>

          <Button
            style={{
              background: cancelColor,
              color: secondSidebarBackground,
            }}
            onClick={() => navigate(-1)}
          >
            Annuler
          </Button>
        </div>
      </Box>

      <Box className="h-full w-full flex gap-3">
        <Box style={{ flexGrow: 1, width: "50%" }} className="p-3 h-full">
          <div className="grow">
            <CustomTextfield
              id="title"
              name="title"
              fullWidth
              value={attributes.title}
              placeholder="Titre du blog"
              size="small"
              required
              onChange={handleInputChange}
            />
          </div>
          <Box>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
              className={classNames(classe.editorInput)}
              placeholder="Ecrivez votre post ici !"
            />
          </Box>
        </Box>
        <div className="divider lg:divider-horizontal">
          <ForwardIcon />
        </div>
        <Box
          style={{ flexGrow: 1, width: "50%", background: Teal }}
          className="p-3 h-full"
        >
          <Box className="shadow-sm rounded-sm p-3 bg-white h-full overflow-y-auto">
            <ReactQuill theme={"bubble"} value={value} readOnly />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogsForm;

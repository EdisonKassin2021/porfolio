import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BlogImage from "../../assets/images/blogImage.jpg";
import { MyPicture } from "../../assets/images/images";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IBlogCard {
  blog: {
    id: string;
    url?: string;
    description?: string;
    title: string;
    pictureUrl?: string;
    subHeader?: string;
    likes?: number;
  };
  withHead?: boolean;
}

export default function BlogCard({ blog, withHead = true }: IBlogCard) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const { title, description, url, pictureUrl, subHeader, likes } = blog;
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={url ?? BlogImage} alt="blog url" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>

    // <Card sx={{ maxWidth: 250 }}>
    //   {withHead && (
    //     <CardHeader
    //       avatar={
    //         <Avatar
    //           aria-label="recipe"
    //           src={pictureUrl ?? MyPicture}
    //           alt="user image url"
    //         />
    //       }
    //       action={
    //         <div>
    //           <IconButton
    //             aria-label="more"
    //             id="long-button"
    //             aria-controls={open ? "long-menu" : undefined}
    //             aria-expanded={open ? "true" : undefined}
    //             aria-haspopup="true"
    //             onClick={handleClick}
    //           >
    //             <MoreVertIcon />
    //           </IconButton>

    //           <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
    //             <MenuItem
    //               key={"modifier"}
    //               onClick={() => {
    //                 navigate(`edit/${blog.id}`);
    //               }}
    //             >
    //               Modifier
    //             </MenuItem>

    //             <MenuItem
    //               key={"supprimer"}
    //               onClick={() => {
    //                 alert("Supprimer");
    //                 handleClose();
    //               }}
    //             >
    //               Supprimer
    //             </MenuItem>
    //           </Menu>
    //         </div>
    //       }
    //       title={title}
    //       subheader={subHeader} //"September 14, 2016"
    //     />
    //   )}
    //   <CardMedia
    //     component="img"
    //     height="194"
    //     image={url ?? BlogImage}
    //     alt="blog url"
    //   />
    //   {description && (
    //     <CardContent className="text-ellipsis w-full">
    //       {description}
    //     </CardContent>
    //   )}
    //   <CardActions
    //     disableSpacing
    //     className="flex items-center justify-between px-3"
    //   >
    //     <IconButton aria-label="add to favorites" className="flex items-center">
    //       <FavoriteIcon /> <span>{likes ? likes : 0}</span>
    //     </IconButton>
    //     <IconButton aria-label="share">
    //       <ShareIcon />
    //     </IconButton>
    //   </CardActions>
    // </Card>
  );
}

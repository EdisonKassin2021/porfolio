import HomeIcon from "@mui/icons-material/Home";
import Person4Icon from "@mui/icons-material/Person4";
import AllInboxIcon from "@mui/icons-material/AllInbox";
// import AttractionsIcon from "@mui/icons-material/Attractions";
import BookIcon from "@mui/icons-material/Book";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export interface ISidebarItem {
  label: string;
  key: string;
  Icon?: any;
}

export enum GENDER {
  HOMME = "HOMME",
  FEMME = "FEMME",
}

export enum ACTION_TYPE {
  CREATE = "CREATE",
  ARCHIVE = "ARCHIVE",
  EDIT = "EDIT",
  DELETE = "DELETE",
  DETAILS = "DETAILS",

  CREATE_MULTIPLE = "CREATE_MULTIPLE",
  ARCHIVE_MULTIPLE = "ARCHIVE_MULTIPLE",
  EDIT_MULTIPLE = "EDIT_MULTIPLE",
  DELETE_MULTIPLE = "DELETE_MULTIPLE",
}

export const SidebarItems: ISidebarItem[] = [
  {
    key: "home",
    label: "Home",
    Icon: HomeIcon,
  },

  {
    key: "profils",
    label: "Profils",
    Icon: Person4Icon,
  },

  {
    key: "projects",
    label: "Projects",
    Icon: AllInboxIcon,
  },

  // {
  //   key: "services",
  //   label: "Services",
  //   Icon: AttractionsIcon,
  // },

  {
    key: "blogs",
    label: "Blogs",
    Icon: BookIcon,
  },

  {
    key: "cv",
    label: "CV",
    Icon: WorkOutlineIcon,
  },

  {
    key: "contacts",
    label: "Contacts",
    Icon: ContactMailIcon,
  },
];

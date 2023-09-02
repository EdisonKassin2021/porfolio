export interface ISidebarItem {
  label: string;
  key: string;
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
  },

  {
    key: "profils",
    label: "Profils",
  },

  {
    key: "projects",
    label: "Projects",
  },

  {
    key: "services",
    label: "Services",
  },

  {
    key: "blogs",
    label: "Blogs",
  },

  {
    key: "cv",
    label: "CV",
  },

  {
    key: "contacts",
    label: "Contacts",
  },
];

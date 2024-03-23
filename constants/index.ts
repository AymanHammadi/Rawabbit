import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "فاتح", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "داكن", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "النظام", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "الصفحة الرئيسية",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "المفضلة",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/categories",
    label: "الفئات",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "الملف الشخصي",
  },
  // {
  //   imgURL: "/assets/icons/question.svg",
  //   route: "/questions",
  //   label: "الأسئلة",
  // },
  {
    imgURL: "/assets/icons/folder-plus-solid.svg",
    route: "/request-add",
    label: "طلب إضافة",
  },
];



export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

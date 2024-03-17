import { Routes } from "@angular/router";
import { HomePage } from "./home.page";
import { ContactPage } from "./contact.page";

export const pages: Routes = [
  {
    path: "",
    component: HomePage,
  },
  {
    path: "contact",
    component: ContactPage,
  },
];

import "zone.js";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { bootstrapApplication } from "@angular/platform-browser";
import {
  RouterModule,
  RouterLinkWithHref,
  provideRouter,
} from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { Component } from "@angular/core";
import { pages } from "./pages";
import "./style.scss";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [
    RouterModule,
    RouterLinkWithHref,
    MatToolbarModule,
    MatButtonModule,
  ],
  template: `
    <mat-toolbar color="primary">
      <h1>App</h1>
      <nav>
        <a mat-button routerLink="/">Home</a>
        <a mat-button routerLink="/contact">Contact</a>
      </nav>
    </mat-toolbar>
    <main>
      <router-outlet />
    </main>
  `,
})
export class LayoutComponent {}

bootstrapApplication(LayoutComponent, {
  providers: [provideRouter(pages), provideAnimationsAsync()],
});

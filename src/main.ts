import 'zone.js';
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import './style.css'

@Component({
  standalone: true,
  selector: "app-root",
  template: ` Hello world! `
})
export class PlaygroundComponent {}

bootstrapApplication(PlaygroundComponent);

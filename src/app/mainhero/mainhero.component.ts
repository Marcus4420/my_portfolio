import { Component } from '@angular/core';

@Component({
  selector: 'app-mainhero',
  standalone: true,
  imports: [],
  templateUrl: './mainhero.component.html',
  styleUrl: './mainhero.component.css'
})
export class MainheroComponent {
  public scrollToNextContent() {
    document.getElementById("skills")?.scrollIntoView({behavior: "smooth"});
  }
}

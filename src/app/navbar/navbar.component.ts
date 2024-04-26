import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public scrollToHome() {
    document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
  }
  public scrollToSkills() {
    document.getElementById("skills")?.scrollIntoView({behavior: "smooth"});
  }
  public scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({behavior: "smooth"});
  }
  public scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
  }
}

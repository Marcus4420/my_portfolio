import { Component } from '@angular/core';
import { MainheroComponent } from '../mainhero/mainhero.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainheroComponent, SkillsComponent, ProjectsComponent, TimelineComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

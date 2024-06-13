import { Component, inject } from '@angular/core';
import { Project, ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  private projectService = inject(ProjectsService);
  public projects: Project[] = [...this.projectService.getProjects()];
}

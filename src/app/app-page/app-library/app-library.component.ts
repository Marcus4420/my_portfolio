import { Component, inject } from '@angular/core';
import { Project, ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-app-library',
  standalone: true,
  imports: [],
  templateUrl: './app-library.component.html',
  styleUrl: './app-library.component.css'
})

export class AppLibraryComponent {
  private projectService = inject(ProjectsService);
  public result: Project[] = [...this.projectService.getProjects()];

  public searchForProject(searchString: string) {
    if (!searchString) {
        this.result = [...this.projectService.getProjects()];
        return;
    }
    const lowerCaseSearchString = searchString.toLowerCase();
    this.result = this.result.filter((project) =>
        project.name.toLowerCase().includes(lowerCaseSearchString) ||
        project.description.toLowerCase().includes(lowerCaseSearchString) ||
        project.techs.some((tech: string) => tech.toLowerCase().includes(lowerCaseSearchString))
    );
}

  
}

import { Component } from '@angular/core';

interface Project {
  name: string;
  image_url?: string;
  description: string;
  start_date?: string;
  end_date?: string;
  status: "In Progress" | "Completed" | "On Hold";
  context: "Personal" | "Academic";
  techs: string[];
}

interface techs {
  name: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public projects: Project[] = [
    {name: "Product Information Management system", image_url: 'assets/projects/pim.png', description: "A web application that allows users to manage product information", start_date: "2021-01-01", end_date: "2021-01-31", status: "Completed", context: "Academic", techs: ['Java', 'PostgreSQL', 'JavaFX']},
    {name: "Beer Bros", image_url: 'assets/projects/beerbros.png', description: "A web application that allows users to manage a beer brewing machine", start_date: "2021-02-01", end_date: "2021-02-28", status: "Completed", context: "Academic", techs: ['Java', 'PostgreSQL', 'JavaFX']},
  ];
}

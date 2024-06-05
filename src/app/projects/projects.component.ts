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
  github_url?: string;
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
    {
      name: "Product Information Management system",
      image_url: 'assets/projects/pim.png',
      description: "A web application that allows users to manage product information",
      status: "Completed",
      context: "Academic",
      techs: ['Java', 'PostgreSQL', 'JavaFX']
    },
    {
      name: "Beer Bros",
      image_url: 'assets/projects/beerbros.png',
      description: "A web application that allows users to manage a beer brewing machine",
      status: "Completed",
      context: "Academic",
      techs: ['Java', 'PostgreSQL', 'JavaFX']
    },
    {
      name: "Tauri Codepad",
      image_url: '',
      description: "A code editor application that runs on the desktop",
      status: "In Progress",
      context: "Personal",
      techs: ['React', 'Rust', 'Tauri']
    },
    {
      name: "Level Up Library",
      image_url: 'assets/projects/lul.png',
      description: "Gaming-review database - Like IMDB but for games",
      status: "Completed",
      context: "Academic",
      techs: ['Laravel', 'Supabase', 'JavaScript']
    },
    {
      name: "DroneDudes",
      image_url: '',
      description: "A software system for controlling an assembly system simulation, supporting drone production and multiple robot scalability.",
      start_date: "Present",
      status: "In Progress",
      context: "Academic",
      techs: ['Java Spring Boot', 'Angular', 'Tailwind', 'PostgreSql'],
      github_url: 'https://github.com/DroneDudes'
    },
    {
      name: "Slotsfeed",
      image_url: '',
      description: "A simple one-room chat forum with profanity filtering and spam prevention, storing messages in a MongoDB database.",
      start_date: "Jan 2024",
      status: "In Progress",
      context: "Academic",
      techs: ['JavaScript', 'Node', 'MongoDB'],
      github_url: 'https://github.com/Marcus4420/SlotsFeed'
    },
  ];
}

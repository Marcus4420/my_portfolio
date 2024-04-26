import { Component } from '@angular/core';

export interface skill {
  name: string;
  logo_url: string;
  alt_text: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  public skills: skill[] = [
    { name: "Java", logo_url: "assets/skills/java.svg", alt_text: "Java logo"},
    { name: "Java Spring Boot", logo_url: "assets/skills/Spring.svg", alt_text: "Spring Boot logo"},
    { name: "TypeScript", logo_url: "assets/skills/typescript.svg", alt_text: "TypeScript logo"},
    { name: "Angular", logo_url: "assets/skills/angular.svg", alt_text: "Angular logo"},
    { name: "React", logo_url: "assets/skills/react.svg", alt_text: "React logo"},
    { name: "NextJS", logo_url: "assets/skills/next-js.svg", alt_text: "NextJS logo"},
    { name: "Vue", logo_url: "assets/skills/vue.svg", alt_text: "Vue logo"},
    { name: "Laravel", logo_url: "assets/skills/laravel.svg", alt_text: "Laravel logo"},
    { name: "Arduino", logo_url: "assets/skills/arduino.svg", alt_text: "Arduino logo"},
    { name: "Python", logo_url: "assets/skills/python.svg", alt_text: "Python logo"},



  ];
}

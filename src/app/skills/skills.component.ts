import { Component, AfterViewInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

export interface Language {
  name: string;
  logo_url: string;
  alt_text: string;
  skill_level: "Beginner" | "Intermediate" | "Proficient" |"Advanced";
}

export interface Tech {
  name: string;
  logo_url: string;
  alt_text: string;
  skill_level: "Beginner" | "Intermediate" | "Proficient" |"Advanced";
}

export interface Tools {
  name: string;
  logo_url: string;
  alt_text: string;
  skill_level: "Beginner" | "Intermediate" | "Proficient" |"Advanced";
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  public skills: Language[] = [
    { name: "TypeScript", logo_url: "assets/skills/typescript.svg", alt_text: "TypeScript logo", skill_level: "Advanced" },
    { name: "Java", logo_url: "assets/skills/java.svg", alt_text: "Java logo", skill_level: "Proficient" },
    { name: "Rust", logo_url: "assets/skills/rust.svg", alt_text: "Rust logo", skill_level: "Beginner" },
    { name: "Arduino", logo_url: "assets/skills/arduino.svg", alt_text: "Arduino logo", skill_level: "Beginner" },
    { name: "Python", logo_url: "assets/skills/python.svg", alt_text: "Python logo", skill_level: "Beginner" },
  ];

  public techs: Tech[] = [
    { name: "Angular", logo_url: "assets/skills/angular.svg", alt_text: "Angular logo", skill_level: "Advanced" },
    { name: "Java Spring Boot", logo_url: "assets/skills/Spring.svg", alt_text: "Spring Boot logo", skill_level: "Proficient" },
    { name: "React", logo_url: "assets/skills/react.svg", alt_text: "React logo", skill_level: "Proficient" },
    { name: "NextJS", logo_url: "assets/skills/next-js.svg", alt_text: "NextJS logo", skill_level: "Proficient" },
    { name: "Vue", logo_url: "assets/skills/vue.svg", alt_text: "Vue logo", skill_level: "Intermediate" },
    { name: "Laravel", logo_url: "assets/skills/laravel.svg", alt_text: "Laravel logo", skill_level: "Intermediate" },
  ];
  
  public tools: Tools[] = [
    { name: "Docker", logo_url: "assets/skills/docker.svg", alt_text: "Docker logo", skill_level: "Intermediate" },
    { name: "Kubernetes", logo_url: "assets/skills/kubernets.svg", alt_text: "Kubernetes logo", skill_level: "Beginner" },
  ];
  }

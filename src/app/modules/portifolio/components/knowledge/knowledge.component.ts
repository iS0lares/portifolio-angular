import { Component, signal } from '@angular/core';
import { iKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<iKnowledge[]>([
    {
      src: 'icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de AngularJs',
    },
    {
      src: 'icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de Css',
    },
    {
      src: 'icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de Html',
    },
    {
      src: 'icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de JavaScript',
    },
    {
      src: 'icons/knowledge/ts-logo.svg',
      alt: 'Ícone de conhecimento de Typescript',
    },
    {
      src: 'icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de NodeJs',
    },
    {
      src: 'icons/knowledge/vue.svg',
      alt: 'Ícone de conhecimento de Vuejs',
    },
    {
      src: 'icons/knowledge/database.svg',
      alt: 'Ícone de conhecimento de MongoDb',
    },
  ]);
}

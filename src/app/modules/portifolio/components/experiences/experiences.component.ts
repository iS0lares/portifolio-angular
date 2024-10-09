import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal([
    {
      summary: {
        strong: 'Front End Jr',
        p: 'Secretaria de segurnça pública da Bahia | Agosto 2023 - Atual',
      },
      text: '<p>Desde Agosto de 2023 eu estou no time de desenvolvimento front end utilizando as seguintes tecnologias: Html, Css, Javascript, Typescript, Vuejs, Mongodb, Nodejs e Bun. Estou agora aprendendo Angularjs para aumentar meu conhecimento dentro os frameworks mais utilizados e ver qual a especialidade de cada um deles. Na parte do versionamento eu utilizo o git juntamente ao gitlab</p>',
    },
  ]);
}

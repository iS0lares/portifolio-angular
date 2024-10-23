import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanel } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'spotify-logo.svg',
      alt: 'Projeto Recriando o Spotify',
      title: 'Recriando o Spotify',
      width: '100px',
      height: '51px',
      description:
        'No intuito de aperfeiçoar minhas habilidades utilizando o vuejs, decidi recriar o spotify a partir desse framework',
      links: [
        {
          name: 'Spotify',
          href: 'https://github.com/iS0lares/Spotify',
        },
      ],
    },
    {
      src: 'json.svg',
      alt: 'Projeto lendo arquivo json utilizando js runtimes',
      title: 'Lendo arquivo json utilizando js runtimes',
      width: '100px',
      height: '51px',
      description:
        'No intuito de verificar qual runtime tem a melhor performance decidi testar 3 runtimes do javascript, sendo eles o Deno, Bun e Node',
      links: [
        {
          name: 'Reading json with js runtimes',
          href: 'https://github.com/iS0lares/download-pokemon-with-deno-bun-node',
        },
      ],
    },
    {
      src: 'pokeball.svg',
      alt: 'Projeto criando uma pokedex com javascript html e css',
      title: 'Criação de uma pokedex com javascript html e css',
      width: '100px',
      height: '51px',
      description:
        'Esse Projeto foi quando iniciei minha carreira no front end, o intuito foi aperfeiçoar minhas habilidades com js e requisições http utilizando o fetch.',
      links: [
        {
          name: 'Pokedex',
          href: 'https://github.com/iS0lares/Pokedex-v2',
        },
      ],
    },
    {
      src: 'web.svg',
      alt: 'Projeto Criando uma landpage para um restaurante',
      title: 'Criando uma landpage para um restaurante',
      width: '100px',
      height: '51px',
      description:
        'Fui solicitado para construir uma landpage para um restaurante juntamente com um sistema de reserva dentro dele.',
      links: [
        {
          name: 'Land Page for restaurant',
          href: 'https://github.com/iS0lares/Land-page-vue',
        },
      ],
    },
    {
      src: 'slot-machine.svg',
      alt: 'Projeto Criando um sistema simples de sorteio para o evento TikTalk',
      title: 'Criando um sistema de sorteio para o evento TikTalk',
      width: '100px',
      height: '51px',
      description:
        'Fui solicitado para construir um sistema de sorteio para no final do evento tiktalk ser sorteado premiações para quem compareceu ao evento.',
      links: [
        {
          name: 'sweepstake for TikTalk event',
          href: 'https://github.com/iS0lares/Sorteio-vue',
        },
      ],
    },
    {
      src: 'database-plus.svg',
      alt: 'Projeto Criando uma inserção de dados fakes em um banco mongo',
      title: 'Criando uma inserção de dados em um banco mongo',
      width: '100px',
      height: '51px',
      description:
        'Criei este projeto para estudar MongoDB e Node.js, integrando-os. A primeira integração foi feita usando shell scripts Linux para importar um jsonArray criado com a API Faker, que gera dados falsos para preencher o MongoDB. Também utilizei a ferramenta Mongoose para inserção direta de dados no MongoDB sem a necessidade de criar um arquivo JSON para ele.',
      links: [
        {
          name: 'Mongo and Node insert',
          href: 'https://github.com/iS0lares/Mongo-and-Node',
        },
      ],
    },
    {
      src: 'language-go.svg',
      alt: 'Projeto Criando uma api em golang',
      title:
        'Criando uma api em go pra manipular json e fazer requisições http',
      width: '100px',
      height: '81px',
      description:
        'Iniciando estudos em Golang na criação de api usando pokemons json para ler e coletar imagens para fazer uma requisição http e salvar no diretório dentro do projeto.',
      links: [
        {
          name: 'Api GO',
          href: 'https://github.com/iS0lares/Api-Pokemon-Golang',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanel.PROJECTS,
    });
  }
}

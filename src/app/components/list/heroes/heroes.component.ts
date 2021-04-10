import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { SuperHeroesService } from '../../../services/super-heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {

  list_super_heroes: IHeroe[] = [];

  constructor(
    private superHeroesService: SuperHeroesService,
    private notification: NotificationService
  ) { }
  ngOnInit() {
    this.listSuperHeroes();
    this.notification.notifySaveData.subscribe((response: any) => {
      this.listSuperHeroes(response != undefined && response != null ? response.filter : null);
    });
  }
  listSuperHeroes(filter = null){
    this.list_super_heroes = this.superHeroesService.lisHeroes();
    if(filter != null && filter != undefined && filter != ''){
      this.list_super_heroes = this.list_super_heroes.filter((item: IHeroe) => item.nombre.toLowerCase().includes(filter.toLowerCase()) || item.poderes.toLowerCase().includes(filter.toLowerCase()));
    }
  }
  eliminarHeroe(id){
    let responseDeleted = this.superHeroesService.eliminarHeroeByID(id);
    if(responseDeleted.deleted){
      alert('Registro eliminado');
    }else{
      alert('Error al eliminar');
    }
    this.listSuperHeroes();
  }

}

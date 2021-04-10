import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {

  constructor() { }
  public lisHeroes(){
    let super_heroes = localStorage.getItem('list_heroes');
    return super_heroes != null ? JSON.parse(localStorage.getItem('list_heroes')) : [];
  }
  public guardarHeroe(data_form: IHeroe): any{
    let super_heroes = [];
    if(localStorage.getItem('list_heroes') != null){
      super_heroes = JSON.parse(localStorage.getItem('list_heroes'));
      localStorage.removeItem('list_heroes');
      super_heroes = super_heroes.map((item: IHeroe) => {
        if(item.id == data_form.id){
          return data_form;
        }
        return item;
      });
    }
    super_heroes.push(data_form);
    localStorage.setItem('list_heroes', JSON.stringify(super_heroes));
    return {
      saved: true
    };
  }
  public eliminarHeroeByID(id){
    let super_heroes = JSON.parse(localStorage.getItem('list_heroes'));
    super_heroes = super_heroes.filter(item => item.id != id);
    localStorage.setItem('list_heroes', JSON.stringify(super_heroes));
    return {
      deleted: true
    };
  }

}

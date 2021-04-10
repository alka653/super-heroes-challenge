import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SuperHeroesService } from '../../../services/super-heroes.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {

  heroeForm;

  constructor(
    private formBuilder: FormBuilder,
    private superHeroesService: SuperHeroesService,
    private notification: NotificationService
  ) {
    this.heroeForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      poderes: [null, [Validators.required]],
      url_foto: [null, [Validators.required]],
    });
  }
  guardarHeroe() {
    if(this.heroeForm.valid){
      let responseSave = this.superHeroesService.guardarHeroe(this.heroeForm.value);
      if(responseSave.saved){
        this.heroeForm.patchValue({
          id: '',
          nombre: '',
          poderes: '',
          url_foto: '',
        });
        alert('Datos guardados con éxito');
        this.notification.notifySaveData.emit();
      }else{
        alert('Error al guardar los datos');
      }
    }else{
      alert('Faltan campos por ingresar datos');
    }
  }

}

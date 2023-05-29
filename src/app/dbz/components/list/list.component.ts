import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  //TODO: Emite un evento y funciona como un metodo generico podemos pasarle strings, numbers.. entre otros luego de definirlo lo llamamos en una funcion y le pasamos el parametro
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList :Character[] =  [{
    id: '',
    name: 'Trunk',
    power: 10
  }]

  // onDeleteId = Index Value: number;

  onDeleteCharacterById(id?: string):void{
    //TODO: Emitir el ID del personaje
    if (!id) return;
    this.onDelete.emit( id );
  }

}

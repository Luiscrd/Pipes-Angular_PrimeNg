import { Pipe, PipeTransform } from "@angular/core";
import { Persona } from '../interfaces/ventas.interface';

@Pipe({ name: 'mayustab' })
export class MayusTablaPipe implements PipeTransform {
  transform(personas: Persona[], activo: boolean): Persona[] {

    if (activo) {
      for (let persona of personas) {
        persona.nombre = persona.nombre.toUpperCase();
      }
    } else {
      for (let persona of personas) {
        persona.nombre = persona.nombre.toLowerCase();
        persona.nombre = persona.nombre[0].toUpperCase() + persona.nombre.slice(1,persona.nombre.length);
      }
    }

    return personas;

  }

}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'active' })
export class ActivoPipe implements PipeTransform {
  transform(value: boolean): string {
    const activo = value ? 'Trabajando' : 'En paro';
    return activo;
  }

}

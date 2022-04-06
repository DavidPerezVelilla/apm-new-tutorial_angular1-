import { Pipe, PipeTransform } from "@angular/core";

//Creamos un modificador |. En este caso lo que hara sera cambiar un string por otro
@Pipe({
    name:'convertToSpaces'
})

export class ConvertToSpacePipe implements PipeTransform{
    transform(value: string, character: string): string {
        return value.replace(character, ' ')
    }

}
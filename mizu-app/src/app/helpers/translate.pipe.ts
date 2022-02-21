import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../core/translate-service.service';

@Pipe({
    name: 'translate'
})

export class TranslatePipe implements PipeTransform {

    constructor(private translateService: TranslateService){}

    transform(value: string): string | undefined {
        return this.translateService.getTranslation(value);
    }
}
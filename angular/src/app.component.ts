import { Component } from '@angular/core';

import { Data, dataGenerator, HIGH, MEDIUM, LOW } from '../../common';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    public messages: Data[] = [];

    public generateLow(): void {
        this.messages = dataGenerator(LOW);
    }

    public generateMedium(): void {
        this.messages = dataGenerator(MEDIUM);
    }

    public generateHigh(): void {
        this.messages = dataGenerator(HIGH);
    }

    public clear(): void {
        this.messages = [];
    }
}

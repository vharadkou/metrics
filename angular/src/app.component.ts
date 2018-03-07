import { Component, AfterContentInit } from '@angular/core';

import { Data, dataGenerator, HIGH, MEDIUM, LOW } from '../../common';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterContentInit {

    public messages: Data[] = [];

    public ngAfterContentInit(): void {
        console.log('tada');
    }

    public generateLow(): void {
        this.messages = dataGenerator(LOW);
    }

    public generateMedium(): void {
        this.messages = dataGenerator(MEDIUM);
    }

    public generateHigh(): void {
        this.messages = dataGenerator(HIGH);
    }

    public updateOne(): void {
        this.messages = this.messages.map(m => {
            if (m.id < 100) {
                m.text += 'Updated';
            }

            return m;
        })
    }

    public updateTwo(): void {
        this.messages = this.messages.map(m => {
            if (m.id < 1000) {
                m.text += 'Updated';
            }

            return m;
        })
    }

    public clear(): void {
        this.messages = [];
    }
}

import { Component, Input } from '@angular/core';

import { Data } from '../../../common';

@Component({
    selector: 'my-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    @Input() public message: Data;
}

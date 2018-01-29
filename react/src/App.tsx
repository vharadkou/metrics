import * as React from 'react';

import { Message } from './Message';

import { Data, dataGenerator, HIGH, MEDIUM, LOW } from '../../common';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, { messages: Array<Data> }> {

    public constructor(props: HelloProps) {
        super(props);

        this.state = {
            messages: []
        }
    }

    public generateLow(): void {
        this.setState({ messages: dataGenerator(LOW) });
    }

    public generateMedium(): void {
        this.setState({ messages: dataGenerator(MEDIUM) });
    }

    public generateHigh(): void {
        this.setState({ messages: dataGenerator(HIGH) });
    }

    public clear(): void {
        this.setState({ messages: [] });
    }

    public render(): JSX.Element {
        return (
            <div>
                <button onClick={this.generateLow.bind(this)}>generateLow</button>
                <button onClick={this.generateMedium.bind(this)}>generateMedium</button>
                <button onClick={this.generateHigh.bind(this)}>generateHigh</button>
                <button onClick={this.clear.bind(this)}>clear</button>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                {this.state.messages.map(m => (
                    <Message key={m.id} message={m} />
                ))}
            </div>
        );
    }
}
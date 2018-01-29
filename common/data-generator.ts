import { Data } from './Data';

export const HIGH = 10000;
export const MEDIUM = 5000;
export const LOW = 1000;

export function dataGenerator(numberOfRows: number): Data[] {
    let data: Data[] = [];

    for (let i = 0; i < numberOfRows; i++) {
        data.push({ id: i, text: `Message Component ${i}` });
    }

    return data;
}

/**
 * SequenceList.ts
 * (C) Copyright, Alva Chien, 2017
 */

import { IList } from './IList';

export class SequenceList<T> implements IList<T> {
    constructor() {
    }

    private _data: T[] = [];

    public InitList() {
    }

    public IsEmpty(): boolean {
        return this._data.length === 0;
    }

    public ClearAll(): boolean {
        this._data = [];
        return true;
    }

    public GetElement(index: number): T | null {
        if (this._data.length === 0) return null;

        if (index >= 0 && index < this._data.length) {
            return this._data[index];
        }

        return null;
    }

    public InsertElement(index: number, elem: T) : boolean {
        if (index < 0 || index >= this._data.length) {
            return false;
        }

        if (index < this._data.length) {
            for (let i = this._data.length - 1; i >= index; i --) {
                this._data[i + 1] = this._data[i];
            }

            this._data[index] = elem;
        }

        return true;
    }

    public AppendElement(elem: T) : number {
        return this._data.push(elem);
    }

    public DeleteElement(index: number): boolean {
        if (index < 0 || index >= this._data.length) {
            return false;
        }

        if (index < this._data.length - 1) {
            for (let k = index; k < this._data.length; k++) {
                this._data[k - 1] = this._data[k];
            }
        }

        delete this._data[this._data.length - 1];

        return true;
    }
    public Length(): number {
        return this._data.length;
    }

    // public readonly [index: number] {
    //     return this.GetElement(index);
    // };
}
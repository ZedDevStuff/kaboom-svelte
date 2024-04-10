import { writable, type Invalidator, type Subscriber, type Writable } from 'svelte/store';

export class Store<T> {
    private writable: Writable<T> | null = null;
    subscribe;
    private _value: T | null = null;
    get value(): T {
        return this._value!;
    }
    constructor(value: T) {
        this.writable = writable(value)!;
        this.subscribe = this.writable.subscribe;
    }

    set(value: T) {
        this._value = value;
        this.writable!.set(value);
    }
    update(fn: (value: T) => T) {
        this._value = fn(this._value!);
        this.writable!.update(fn);
    }
}
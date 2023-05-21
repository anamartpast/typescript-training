export class Phone {
    private _type: string;
    private _number: number;

    constructor(type: string, number: number) {
        this._type = type;
        this._number = number;
    }

    get number() {
        return this._number;
    }

    get type() {
        return this._type;
    }

    set number(number: number) {
        this._number = number;
    }

    set type(type: string) {
        this._type = type;
    }
}
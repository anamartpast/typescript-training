export class Mail {
    private _type: string;
    private _direction: string;

    constructor(type: string, direction: string) {
        this._type = type;
        this._direction = direction;
    }

    get direction() {
        return this._direction;
    }

    get type() {
        return this._type;
    }

    set direction(direction: string) {
        this._direction = direction;
    }

    set type(type: string) {
        this._type = type;
    }

}
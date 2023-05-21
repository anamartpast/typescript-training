export class Direction {
    private _street: string;
    private _number: number;
    private _floor: number | boolean;
    private _letter: string | boolean;
    private _postalCode: number;
    private _town: string;
    private _province: string

    constructor(street: string, number: number, floor: number | boolean, letter: string | boolean, postalCode: number, town: string, province: string) {
        this._street = street;
        this._number = number;
        this._floor = floor;
        this._letter = letter;
        this._postalCode = postalCode;
        this._town = town;
        this._province = province;
    }

    get street() {
        return this._street;
    }

    get number() {
        return this._number;
    }

    get floor() {
        return this._floor;
    }

    get letter() {
        return this._letter;
    }

    get postalCode() {
        return this._postalCode;
    }

    get town() {
        return this._town;
    }

    get province() {
        return this._province;
    }

    set street(street: string) {
        this._street = street;
    }

    set number(number: number) {
        this._number = number;
    }

    set floor(floor: number | boolean) {
        this._floor = floor;
    }

    set letter(letter: string | boolean) {
        this._letter = letter;
    }

    set postalCode(postalCode: number) {
        this._postalCode = postalCode;
    }

    set town(town: string) {
        this._town = town;
    }

    set province(province: string) {
        this._province = province;
    }
}
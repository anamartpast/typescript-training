import { Direction } from "./direction";
import { Mail } from "./mail";
import { Phone } from "./phone";

export class Person {
    private _name: string;
    private _surnames: string;
    private _age: number;
    private _dni: string;
    private _birthday: Date;
    private _favoriteColour: string;
    private _sex: string;
    private _directions: Array<Direction>;
    private _mails: Array<Mail>;
    private _phones: Array<Phone>;
    private _notes: string

    constructor(name: string, surnames: string, age: number, dni: string, birthday: Date, favoriteColour: string, sex: string, directions: Array<Direction>,
        mails: Array<Mail>, phones: Array<Phone>, notes: string) {
        this._name = name;
        this._surnames = surnames;
        this._age = age;
        this._dni = dni;
        this._birthday = birthday;
        this._favoriteColour = favoriteColour;
        this._sex = sex;
        this._directions = directions;
        this._mails = mails;
        this._phones = phones;
        this._notes = notes;
    }

    get name() {
        return this._name;
    }

    get surnames() {
        return this._surnames;
    }

    get age() {
        return this._age;
    }

    get dni() {
        return this._dni;
    }

    get birthday() {
        return this._birthday;
    }

    get favoriteColour() {
        return this._favoriteColour;
    }

    get sex() {
        return this._sex;
    }

    get directions() {
        return this._directions;
    }

    get phones() {
        return this._phones;
    }

    get notes() {
        return this._notes;
    }

    set name(name: string) {
        this._name = name;
    }

    set surnames(surnames: string) {
        this._surnames = surnames;
    }

    set age(age: number) {
        this._age = age;
    }

    set dni(dni: string) {
        this._dni = dni;
    }

    set birthday(birthday: Date) {
        this._birthday = birthday;
    }

    set favoriteColour(favoriteColour: string) {
        this._favoriteColour = favoriteColour;
    }

    set sex(sex: string) {
        this._sex = sex;
    }

    set directions(directions: Array<Direction>) {
        this._directions = directions;
    }

    set mails(mails: Array<Mail>) {
        this._mails = mails;
    }

    set phones(phones: Array<Phone>) {
        this._phones = phones;
    }

    set notes(notes: string) {
        this._notes = notes;
    }

    //functions to edit personal data
    updateDirection(direction: Direction) {
        this._directions.push(direction)
    }

    updatePhone(phone: Phone) {
        this._phones.push(phone)
    }

    updateMail(mail: Mail) {
        this._mails.push(mail)
    }
}
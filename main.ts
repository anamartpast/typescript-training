import { Person } from './person';
import { Direction } from './direction';
import { Mail } from './mail';
import { Phone } from './phone';

//fill data to the first person
const firstResidenceAna: Direction = new Direction(
    'Calle Las rosas',
    4,
    3,
    false,
    42099,
    'Córdoba',
    'Córdoba'
);

const secondResidenceAna: Direction = new Direction(
    'Calle Los claveles',
    23,
    5,
    'A',
    28732,
    'Málaga',
    'Málaga'
);

const mailAna: Mail = new Mail(
    'personal',
    'ana123@gmail.es'
);

const homePhoneAna: Phone = new Phone(
    'home phone',
    989898989
);

const mobilePhoneAna: Phone = new Phone(
    'mobile phone',
    678767876
);

const personalData1: Person = new Person(
    'Ana',
    'Martín Pastor',
    20,
    '18483848S',
    new Date(2003, 2, 5),
    'red',
    'Woman',
    [firstResidenceAna, secondResidenceAna],
    [mailAna],
    [homePhoneAna, mobilePhoneAna],
    'Llamar al número de teléfono de casa solo por la tarde.'
);

//fill data to the second person
const firstResidencePepe: Direction = new Direction(
    'Avenida San Antón',
    47,
    6,
    'C',
    18789,
    'Barcelona',
    'Barcelona'
);

const secondResidencePepe: Direction = new Direction(
    'Calle Vivaldi',
    36,
    8,
    'A',
    28732,
    'Málaga',
    'Málaga'
);

const mailPepe: Mail = new Mail(
    'job mail',
    'pepe123pepito@gmail.es'
);

const homePhonePepito: Phone = new Phone(
    'home phone',
    999999999
);


//fill data to the third person
const personalData2: Person = new Person(
    'Pepe',
    'Melero Sánchez',
    21,
    '8989898J',
    new Date(2002, 5, 2),
    'green',
    'Man',
    [firstResidencePepe],
    [mailPepe],
    [homePhonePepito],
    'Vive en la primera residencia todo el año, excepto en verano'
);

const firstResidenceJuan: Direction = new Direction(
    'Glorieta La Marina',
    32,
    3,
    'F',
    23423,
    'Cádiz',
    'Cádiz'
);

const mailJuan: Mail = new Mail(
    'personal',
    'juanito.3423j@gmail.es'
);

const homePhoneJuan: Phone = new Phone(
    'mobile phone',
    676767676
);

const personalData3: Person = new Person(
    'Juan Manuel',
    'Ruiz Teruel',
    21,
    '99876543D',
    new Date(2002, 9, 23),
    'black',
    'Man',
    [firstResidenceJuan],
    [mailPepe],
    [homePhonePepito],
    'Nada a destacar'
);

//print data before changes
console.log('-----  CONTACT DETAILS BEFORE EDITION -----');
console.log(personalData1);
console.log('----------------------------------------------------------');
console.log(personalData2);
console.log('----------------------------------------------------------');
console.log(personalData3);

//save new data
const contactBook: Array<Person> = new Array(personalData1, personalData2, personalData3);

const searchedDni: string = "18483848S";

const editionData: Person = contactBook.find(person => person.dni === searchedDni) as Person;

const updatedDirection: Direction = new Direction(
    "Calle de la libertad",
    55,
    1,
    'D',
    34345,
    "Lanjarón",
    "Granada"
)

const updatedMail: Mail = new Mail(
    "job mail",
    "clinicaruizfernandez.atcliente@email.es"
)

const updatedPhone: Phone = new Phone(
    "another mobile phone",
    600000099
)

//update data in contact book
editionData.updateDirection(updatedDirection);
editionData.updateMail(updatedMail);
editionData.updatePhone(updatedPhone);

//print updated info
console.log('-----  CONTACT DETAILS AFTER EDITION -----');
console.log(personalData1);
console.log('----------------------------------------------------------');
console.log(personalData2);
console.log('----------------------------------------------------------');
console.log(personalData3);
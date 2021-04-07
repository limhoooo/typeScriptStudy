function logMessage(value:any) {
    console.log(value);
}

logMessage('hello');
logMessage(100);


let limho: string | number | boolean;
// 유니온타입
function logMessage1(value:string | number) {
    if (typeof value === 'number'){
        value.toLocaleString();
    }
    if (typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}
interface Person{
    name: string;
    age: number;
}

// 유니온
function askSomeone(someone:Developer| Person) {

}
askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

// 인터섹션
function askSomeone1(someone:Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}
// askSomeone1({ name: '디벨로퍼', skill: '웹 개발' });

let limho2: string | number | boolean;
let limho3: string & number & boolean;
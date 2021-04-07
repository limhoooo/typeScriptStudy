function logText1(text) {
    console.log(text);
    return text;
}


function logText<T>(text: T): T {
    return text;
}
logText<string>('하이');

function logText2(text: string) {
    text.split('')
    return text;
}

function logNumber(text: number) {
    text.split('')
    return text;
}

function logText3(text: number | string) {
    text.split('')
    return text;
}

function logText4<T>(text:T):T {
    return text;
}

logText<string>('sadasd');
logText<boolean>(true);

interface Dropdown {
    value: string;
    selected: boolean;
}


interface Dropdown2<T> {
    value: T;
    selected: boolean;
}

const obj2 : Dropdown2<string> = {value: 'asd', selected:false}
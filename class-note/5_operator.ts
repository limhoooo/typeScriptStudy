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

}

logMessage('hello');
logMessage(100);

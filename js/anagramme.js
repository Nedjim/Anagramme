let string1 = 'demain';
let string2 = 'damien';

function anagramme(mot1,mot2){
    var tmp1 = mot1.split("").sort().join();
    var tmp2 = mot2.split("").sort().join();
    return tmp1 == tmp2;
}

let result = anagramme(string1, string2);
console.log(result);
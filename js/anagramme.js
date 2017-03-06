let content = document.getElementById('result');

function anagramme(string1,string2){
    var tmp1 = string1.split("").sort().join();
    var tmp2 = string2.split("").sort().join();
    return tmp1 == tmp2;
}


document.getElementById('formulaire').addEventListener('submit', function(e){
    e.preventDefault();
    let string1 = document.getElementById('string1').value.toLowerCase();
    let string2 = document.getElementById('string2').value.toLowerCase();

    anagramme(string1, string2) ?  content.innerHTML = "Les deux mots sont des anagrammes" : content.innerHTML = "Les deux mots ne sont pas des anagrammes";
})




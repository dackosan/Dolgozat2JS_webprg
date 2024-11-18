//Disemvowel Trolls
function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

//Correct the date-string
function dateCorrect(datestring){
    if(datestring === ""){
        return datestring;
    }

    if(datestring === null || /[a-z]/.test(datestring) || !datestring.includes('.')){
        return null;
    }

    let [day, month, year] = datestring.split('.').map(Number);
    
    month -= 1;
    
    let date = new Date(year, month, day);

    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
}

//DNA -> RNA
function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U')
}

//Fizz-Buzz
function fizzBuzz(number){
    return (number%3==0 && number%5==0) ? "FizzBuzz":number && (number % 3 == 0) ? "Fizz":number && number % 5 == 0 ? "Buzz":number
}
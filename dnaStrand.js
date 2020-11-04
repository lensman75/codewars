// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 

function DNAStrand(dna) { 
    let vr1 = dna.split(''); 
    let vr2 = []; 
    vr1.forEach(element => { 
        switch (element) { 
            case 'A': 
                vr2.push('T'); 
                break; 
            case 'T': 
                vr2.push('A'); 
                break; 
            case 'C': 
                vr2.push('G'); 
                break; 
            case 'G': 
                vr2.push('C'); 
                break; 
        } 
    }); 
    vr2 = vr2.join(''); 
    return vr2; 
} 
// Better solution 
// var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' }; 
// function DNAStrand(dna) { 
//     return dna.split('').map(function (v) { return pairs[v] }).join(''); 
// }
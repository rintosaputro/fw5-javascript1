const mtk = 80
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let grade = ''
const rataRata = (mtk+bahasaIndonesia+bahasaInggris+ipa) / 4


if(mtk !== null && bahasaIndonesia !== null && bahasaInggris !== null && ipa !== null) {
    if(mtk !== undefined && bahasaIndonesia !== undefined && bahasaInggris !== undefined && ipa !== undefined) {

        if(rataRata >= 90 && rataRata <= 100) {
            grade = 'A'
        } else if(rataRata >= 80 && rataRata <= 89) {
            grade = 'B'
        } else if(rataRata >= 70 && rataRata <= 79) {
            grade = 'C'
        } else if(rataRata >= 60 && rataRata <= 69) {
            grade = 'D'
        } else if(rataRata >= 0 && rataRata <= 59) {
            grade = 'E'
        } else {
            grade = 'Tidak Diketahui'
        }

        console.log('Rata-rata: ' + rataRata)
        console.log('Grade: '+grade)
    }
} 
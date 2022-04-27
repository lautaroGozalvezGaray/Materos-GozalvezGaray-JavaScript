alert("funciona")

var checkbox = document.querySelector(".mate");
termo = document.getElementById("termos");
mochila = document.getElementById("mochilas");

checkbox.addEventListener( 'change', function() {
if(this.checked) {
    termo.style.display='none';
    mochila.style.display='none';
    
}else{
    termo.style.display='';
    mochilas.style.display='';
}});

const cards = document.querySelectorAll(".cardd");
console.log(cards)
document.addEventListener('keyup', (e) => {
    if(e.target.matches('.filter')){
        document.querySelectorAll('.cardd').forEach(card => {
            if(card.textContent.toLocaleLowerCase().includes(e.target.value)){
                card.classList.remove('hidden');
            }else{
                card.classList.add('hidden');
            }
            
        });
    }
})


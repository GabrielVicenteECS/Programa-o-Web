//Luz
const rostoRobo= document.getElementById("rosto-robo")

// Botões
//classList.add - classList.remove - classList.toggle
const btnCarinho = document.getElementById("btn-carinho")
const btnBronca = document.getElementById("btn-bronca")
const btnDormir = document.getElementById("btn-dormir")

btnCarinho.addEventListener('click', function(){
    rostoRobo.style.backgroundColor = 'pink';
    rostoRobo.textContent = "( ^-^ )";
})

btnBronca.addEventListener('click', function(){
    rostoRobo.style.backgroundColor = 'red';
    rostoRobo.textContent = "( >_< )";
})

btnDormir.addEventListener('click', function(){
    rostoRobo.style.backgroundColor = 'darkblue';
    rostoRobo.textContent = "( -_- ) zZz";
})
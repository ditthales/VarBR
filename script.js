const time1 = document.querySelector('#time1');
const time2 = document.querySelector('#time2');
const lance = document.querySelector('#lance');
const lanceText = document.querySelector('#lance-text');
const submitBtn = document.querySelector('#submit-btn');
const timesNordestinos = ["abc", "bahia", "fortaleza", "ceará", "crb", "sampaio", "sport", "vitoria"]

// Adiciona um manipulador de evento ao botão
submitBtn.addEventListener('click', () => {
	if (time1.value && time2.value && lance.value) {
		// Se todas as caixas seletoras foram selecionadas, exibe o texto do lance
        if (lance.value === "iguais"){
            lanceText.textContent = `Por favor selecione times diferentes!`;
        }else{
            if (timesNordestinos.includes(lance.value) && !(timesNordestinos.includes(time1.value) && timesNordestinos.includes(time2.value))){
                lanceText.textContent = `Não foi nada, segue o jogo`;
            }else if(lance.value == `atleticomg`){
                lanceText.textContent = `Pênalti pro galo`;
            }else if((timesNordestinos.includes(time1.value) || timesNordestinos.includes(time2.value)) && !timesNordestinos.includes(lance.value)){
                lanceText.textContent = `Pênalti claro`
            }else{
                lanceText.textContent = `Lance precisa de revisão no vídeo`
            }
            // lanceText.textContent = `O lance é a favor de ${lance.options[lance.selectedIndex].text}!`;
        }
		
	} else {
		// Caso contrário, exibe uma mensagem de erro
		lanceText.textContent = 'Selecione os times e o lance primeiro!';
	}
});

// Adiciona um manipulador de evento às caixas seletoras de time
time1.addEventListener('change', updateLanceOptions);
time2.addEventListener('change', updateLanceOptions);

function updateLanceOptions() {
	// Remove todas as opções anteriores da caixa de seleção de lance
    if (time1.value == "" || time2.value == ""){
        lance.innerHTML = '<option value="">Selecione os times primeiro</option>';
    }else{
        lance.innerHTML = '<option value="">Selecione um time</option>';
    }

    lanceText.textContent = ``
	

	if (time1.value && time2.value) {
		// Se ambas as caixas seletoras de time tiverem um valor, adicione as opções relevantes à caixa de seleção de lance
        if (time1.value == time2.value) {
            lance.innerHTML = '<option value="iguais">Os times não podem ser iguais</option>';
        }else{
            lance.innerHTML += `<option value="${time1.value}">${time1.options[time1.selectedIndex].text}`
            lance.innerHTML += `<option value="${time2.value}">${time1.options[time2.selectedIndex].text}`
        }
	}

	// Desabilita a caixa de seleção de lance se não houver opções disponíveis
	
    if (time1.value == time2.value) {
        lance.disabled = true
        submitBtn.disabled = true
    }else{
        lance.disabled = !lance.options[1];
        submitBtn.disabled = !lance.options[1];
    }
    
}

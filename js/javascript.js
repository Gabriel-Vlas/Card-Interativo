let numContainer = document.querySelector('.state_start_button_container');
let rateNumber = document.querySelector('.state_end_result_number');
let submitButton = document.querySelector('.state_start_button_submit');
let state_start = document.querySelector('.state_start');
let state_end_tankyou = document.querySelector('.state_end_tankyou');

numContainer.addEventListener('click', event=> {
    let numeberSelected = event.target.innerText;
    rateNumber.innerText = numeberSelected;
    console.log(numeberSelected)

    if(numeberSelected > 0 || numeberSelected <= 5){
        submitButton.addEventListener('click', ()=>{
            state_start.style.display = 'none';
            state_end_tankyou.style.display = 'flex';
        });
    }
});


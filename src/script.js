const cepForm = document.getElementById("cep-form")
const showResponse = document.querySelector('.show-response')
const logradouro = document.querySelector('.logadouro div')
const bairro = document.querySelector('.bairro div')
const uf = document.querySelector('.uf div');
const showError = document.querySelector('.show-error');

cepForm.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
    event.preventDefault();
    showResponse.classList.remove('mostrar')
    const input = cepForm[0];
    const inputValue = input.value;
    const response = await fetch(
            `https://viacep.com.br/ws/${inputValue}/json/`
        )
        .then((res) => res.json())
        .catch(() => {});



    if (response) {
        logradouro.innerText = response.logradouro;
        bairro.innerText = response.bairro;
        uf.innerText = response.uf;
        showError.classList.remove('mostrar')
        showResponse.classList.add('mostrar')
    } else {
        showResponse.classList.remove('mostrar')
        showError.classList.add('mostrar');
    }


}
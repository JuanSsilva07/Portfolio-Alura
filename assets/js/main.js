import { sendMessage } from './firebase/portfolio.js';

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtAssunto = document.getElementById('txtAssunto');
const txtMensagem = document.getElementById('txtMensagem');

const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', async () =>{
    const subscription = {
        name:txtName.value,
        email:txtEmail.value,
        assunto:txtAssunto.value,
        mensagem:txtMensagem.value
    }


    //Salvar no banco de dados
    const subscriptionId = await sendMessage(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    txtName.value = '';
    txtEmail.value = '';
    txtAssunto.value = '';
    txtMensagem.value = '';
})
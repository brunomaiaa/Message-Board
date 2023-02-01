const btnLoad = document.querySelector('#btn-load');
const btnSend = document.querySelector('#btn-send');
const inputName = document.querySelector('#input-name');
const inputContent = document.querySelector('#input-content');
const messageList = document.querySelector('.message-list');
const btnConfirm = document.querySelector('#btn-confirm');
const nameProvided = document.querySelector('#nameprovided');

// Only keeps data
let currentName = localStorage.getItem('name');

if(!currentName){

    //display the modal to prompt for the name.
    document.getElementById('dialog-default').showModal();
} else {
    inputName.value = currentName;
}


//async keyword means asynchronous 
//neede tot use await.
const getMessages = async () => {
    const res = await fetch('https://messages-fa82.onrender.com/api/messages');
    console.log(res);
    if(res.status == 200){
        const jsonResponse = await res.json();
        console.log(jsonResponse);
        setMessages(jsonResponse);
    }
}


const postMessage = async (name, content) => {
    const res = await fetch('https://messages-fa82.onrender.com/api/messages/create', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({name, content}) //returns a JSON string of our object. 
    });

    return res.json();
}

const generateMessageBalloon = (name, content) => {
    return `
    <div class="nes-balloon from-right">
    <p>${content} - <b>${name}</b></p>
    </div>
    `;
}

const setMessages = (messages) => {
    messageList.innerHTML = "";

    //foreach message add a text balloon to the list
    messages.forEach(element => {
        messageList.innerHTML += generateMessageBalloon(element.name, element.content);
    });
}

btnSend.addEventListener('click', async ()=> {
    const res = await postMessage(inputName.value, inputContent.value);
    console.log("message posted", res);
    getMessages();
});

btnLoad.addEventListener('click',() => {
    //add in registering someone clicked button
    console.log("Hello I'm loading data");
    getMessages();
});

btnConfirm.addEventListener('click',() => {
//
localStorage.setItem('name', nameProvided.value);
inputName.value = nameProvided.value;
});
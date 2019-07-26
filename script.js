const startupTime = 2500;
const delay = 100;
const message = 'angryaxi';
const element = document.getElementById('title');

setTimeout(
    async () => {
        for (const letter of message.split('')) {
            await new Promise(resolve => {
                setTimeout(() => {
                    element.innerHTML += letter;
                    resolve();
                }, delay)
            })
        }
    }, startupTime
);

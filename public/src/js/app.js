/* Registering service worker in app.js because app.js is a common js asset among html files */

/* Check to see if serviceWorkers are supported by browser */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    // .register('/sw.js', {scope: '/help/'}) /* You can define certain website areas where the serviceWorker can operate */
    .register('/sw.js')
    .then(function() {
      console.log('Service worker registered!');
    })
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  // e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

// Installation must be done by a user gesture! Here, the button click
btnAdd.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = 'none';
  // Show the prompt 
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        // Could create an event listener to change install prompt timing or GTM/GA data
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
});
/** Service Worker**/
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('SW registered at:', registration.scope);
  }).catch(function(e) {
    console.log('SW failed registered:', e);
  });
}

//truepush
var truepush = window.truepush || [];
truepush.push(function(){
    truepush.Init({
        id: "62490db0ba4757fe0c6bb8e5"
    }, function(error){
            if(error) console.error(error);
    })
})
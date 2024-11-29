const audio = new Audio();
audio.src = '/scripts/extensions/third-party/Extension-Shit/fart.mp3';

function wrapToastrError(originalError) {
    return function(...args) {
        if (audio.currentTime === 0 || audio.ended) {
            audio.currentTime = 0;
            audio.play();
        }
        originalError.apply(this, args);
    };
}

toastr.error = wrapToastrError(toastr.error);

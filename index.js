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

export function onInstall() {
    return Promise.of(toastr.success('Extension installed'));
}

export function onDelete() {
    return Promise.of(toastr.success('Extension deleted'));
}

export function onActivate() {
    return Promise.of(toastr.success('Extension activated'));
}

export function onEnable() {   
    return Promise.of(toastr.success('Extension enabled'));
}
    
export function onDisable() {   
    return Promise.of(toastr.success('Extension enabled'));
}

export function onUpdate() {
    return Promise.of(toastr.success('Extension updated'));
}

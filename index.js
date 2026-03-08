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
    return Promise.resolve(toastr.success('Extension installed'));
}

export function onDelete() {
    return Promise.resolve(toastr.success('Extension deleted'));
}

export function onActivate() {
    return Promise.resolve(toastr.success('Extension activated'));
}

export function onEnable() {   
    return Promise.resolve(toastr.success('Extension enabled'));
}
    
export function onDisable() {   
    return Promise.resolve(toastr.success('Extension disabled'));
}

export function onUpdate() {
    return Promise.resolve(toastr.success('Extension updated'));
}

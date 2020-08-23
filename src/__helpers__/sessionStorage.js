export const loadFromSessionStorage = () => {
    try {
        const serializedState = window.sessionStorage.getItem('state');
        if(serializedState === null) return {};
        return JSON.parse(serializedState);
    } catch(e) {
        console.warn(e);
        return {};
    }
}

export const saveToSessionStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState);
    } catch(e) {
        console.warn(e);
    }
}

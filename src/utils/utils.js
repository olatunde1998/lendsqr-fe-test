export function saveToLocalStorage(key, value) {
    if(typeof window !== "undefined" && typeof value === "object"){
        window.localStorage.setItem(key, JSON.stringify(value))
        return value
    }else if(typeof window !== "undefined") {
        window.localStorage.setItem(key, value)
        return value
    }
}

export function getFromLocalStorage(key){
    if(typeof window !== "undefined") {
        return window.localStorage.getItem(key)
    }
    return "";

}

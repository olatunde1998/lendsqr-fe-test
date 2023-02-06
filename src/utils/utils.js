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
    return null;

}

export const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length === 0
  }

export const formatDate = (date) => {
    const dateObject = new Date(date)
    return dateObject.toUTCString()
}

export const getUserStatus = (date) => {
    const dateObj = new Date(date)
    const today = new Date()
    if (dateObj >= today) {
        return "Active"
    }
    return "Inactive"
}
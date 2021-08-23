

export const transformPrice = (price) => {
    if (price){
        return parseFloat(price.slice(1))
    }
    return 0
}

export const isHomepage = () => {
    return window.location.pathname.includes('index.html');
}


// Found online. 
export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


export const getVisitorID = () => {
    const visitorID = localStorage.getItem('user-visitor-id')
    if (!visitorID) {
        const uuid = uuidv4()
        localStorage.setItem('user-visitor-id', uuid)
        return uuid
    } 
    return visitorID
}

export const getUserAPIInfo = async () => {

    const result = await fetch('http://ip-api.com/json', {
        method: 'get',
    });
    return result.json()
}
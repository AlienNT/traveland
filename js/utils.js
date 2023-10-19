export function setWindowHeight(height = window.innerHeight || 0) {
    document.documentElement.style.setProperty('--height', `${height}px`)
}

export function debounce(callback, timeout) {
    let timer;

    return () => {

        if (timer) clearTimeout(timer)

        timer = setTimeout(() => callback(), timeout)
    }
}

export function isEmptyAttribute(target, attribute) {
    const attributeValue = target.getAttribute(attribute)

    return attributeValue === '' || attributeValue === '#'
}

export function isEmptyLink(link) {
    return link.tagName.toLowerCase() === 'a' && isEmptyAttribute(link, 'href')
}
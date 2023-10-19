import {isEmptyLink} from "./utils.js";

export function clickAction () {
    window.onclick = (e) => {
        const target = e.target

        if (isEmptyLink(target)) {
            e.preventDefault()
        }
    }
}
import {debounce, setWindowHeight} from "./utils.js";

export function resizeAction () {
    setWindowHeight()

    const resizeTimer = debounce(() => setWindowHeight(), 500)
    let width = window.innerWidth

    window.onresize = () => {
        if (width !== window.innerWidth) {
            width = window.innerWidth
            resizeTimer()
        }
    }
}
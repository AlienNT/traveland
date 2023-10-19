export function submitFormAction() {
    const form = document.querySelector('.subscribe-form')

    form.onsubmit = (e) => e.preventDefault()
}
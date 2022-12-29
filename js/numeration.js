export const numeration = () => {
    const numbers = document.querySelectorAll('.number')

    numbers.forEach(number => {
        const result = +number.textContent % 2

        if (result === 0) {
            number.style.backgroundColor = `#313131`
        }
    })
}
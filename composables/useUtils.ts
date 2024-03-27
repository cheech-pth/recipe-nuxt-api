export const useRandomInt = () => {
    return useState('randomInt', () => Math.floor(Math.random() * 99))
}
const conta = {
    email: 'roberto@oliveira.com',
    password: '123',
    name: 'Roberto Oliveira',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
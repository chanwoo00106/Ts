interface user {
    name: string,
    age: number
};

interface gender {
    gen: string
}

const chanwoo: user & gender = {
    name: 'chan',
    age: 17,
    gen: 'men'
}
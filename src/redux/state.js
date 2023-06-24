let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 15 },
            { id: 2, message: "It's my first post", likesCount: 20 },
            { id: 3, message: "It's my second post", likesCount: 25 },
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Ian'},
            {id: 2, name: 'Nazar'},
            {id: 3, name: 'Egor'},
            {id: 4, name: 'Ann'},
            {id: 5, name: 'Maria'},
            {id: 6, name: 'Vadym'},
            {id: 7, name: 'Iryna'},
            {id: 8, name: 'Alla'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Andale'},
            {id: 4, message: 'Hola'},
            {id: 5, message: 'Shalom'},
            {id: 6, message: 'Yo'},
            {id: 7, message: 'Privet'},
            {id: 8, message: 'Vitayu'},
        ],
    }
}

export default state
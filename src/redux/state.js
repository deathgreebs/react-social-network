let rerenderEntireTree = () => {
    console.log('state was changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 20},
            {id: 3, message: "It's my second post", likesCount: 25},
        ],
        newPostText: 'New Post'
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
            {id: 8, message: 'Лол чел я такое длинное сообщение. Ебануться можно. Нахуй меня написали аахаххааххах'},
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Ian'},
            {id: 2, name: 'Nazar'},
            {id: 3, name: 'Egor'},
        ]

    }
}
export const addPost = () => {
    let newPost = {
        id: 11,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state
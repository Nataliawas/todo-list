const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyDpGiuPB8AzkDLDmJtMPaWcXLiJ3OwxGpo",
    authDomain: "todo-list-b01b8.firebaseapp.com",
    databaseURL: "https://todo-list-b01b8.firebaseio.com",
    projectId: "todo-list-b01b8",
    storageBucket: "todo-list-b01b8.appspot.com",
    messagingSenderId: "281981327349"
}

const app = firebase.initializeApp(config)


export const db = app.database()


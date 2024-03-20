// function printBooks(books) {
//     for (let i = 0; i < books.length; i++) {
//         const book = books[i];
//         console.log(`『${book.title}』 ${book.author}`);
//     }
// }

// const books = [
//     { title: "JavaScript入門", author: "山田太郎" },
//     { title: "JavaScriptの絵本", author: "山田次郎" },
// ];

// printBooks(books);

// let users = [
//     {
//         username: "山田",
//         permissions: {
//             canRead: true,
//             canWrite: true,
//             canDelete: false,
//         },
//     },
//     {
//         username: "佐藤",
//         permissions: {
//             canRead: false,
//             canWrite: true,
//             canDelete: false,
//         },
//     },
//     // ユーザーを追加してください
// ];

// function checkPermission(username, permission) {
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         if (user.username === username) {
//             return user.permissions[permission];
//         }
//     }
//     return false;
// }

// console.log(checkPermission("山田", "canDelete"));

// 関数式;
// const obj = {
//     method: function () {
//         console.log("method");
//     },
// };

// アロー関数;
// const obj = {
//     method: () => {
//         console.log("method");
//     },
// };

// オブジェクト短縮記法;
// const obj = {
//     method() {
//         console.log("method");
//     },
// };

// obj.method();

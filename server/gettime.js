// let time = function () {
//     let today = new Date();
//     let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
//     let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
//     let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
//     let date = (today.getDate() < 10 ? '0' : '')+ today.getDate();
//     let month = (today.getMonth()< 12 ? '0' : '') + today.getMonth();
//     let year = (today.getFullYear()< 10 ? '0' : '') + today.getFullYear();
//     return hours + ':' + minutes + ':' + seconds + '(' + date + '-' + month + '-' + year + ')';
//   }
//   console.log(time());
//   module.exports = {time}
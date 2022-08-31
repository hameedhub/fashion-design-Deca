if(sessionStorage.getItem('token') === null || sessionStorage.getItem('token') === undefined || sessionStorage.getItem('id') === null){
    sessionStorage.clear();
    window.location.href = 'login.html';
};
let API_PREFIX = 'http://localhost:3000/';

function logout(){
    sessionStorage.clear();
    window.location.href = 'login.html';
}
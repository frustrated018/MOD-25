// One way to use onClick
document.getElementById('btn-green-bg').onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green';
};

// How we will use it most of the time

function makeRed(){
    document.body.style.backgroundColor = 'red';
}
// Another thing we will use all the time

document.getElementById('btn-blue-bg').addEventListener('click', function(){
    document.body.style.backgroundColor = 'Blue';
});
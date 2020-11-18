document.addEventListener('DOMContentLoaded', function(){
    const ul = document.querySelector('ul');
    ul.addEventListener('click', function(event){
        event.preventDefault();
        console.log('target', event.target);
        console.log('currentTarget', event.currentTarget);
    });
});
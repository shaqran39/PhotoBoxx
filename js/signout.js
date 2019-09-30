
const logout =document.querySelector('#logout_div');

logout.addEventListener('click', (e) =>
{
 auth.signOut().then(()=>{
    console.log('user signed out');
 })
})

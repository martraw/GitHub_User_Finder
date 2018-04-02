//Instantieate GitHub obiect
const gh = new GitHub;

//Search user name input
const searchUser = document.querySelector('#username');

//Add keyup event to searchUser
searchUser.addEventListener('keyup', (e) => {
   const userName = e.target.value;

   if (userName !== '') {
     gh.getUser(userName)
      .then(user => console.log(user))
   } else {
     
   }
})
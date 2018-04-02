//Instantieate GitHub obiect
const gh = new GitHub;

//Instantieate UI obiect
const ui = new UI;

//Search user name input
const searchUser = document.querySelector('#username');

//Add keyup event to searchUser
searchUser.addEventListener('keyup', (e) => {
   const userName = e.target.value;

   if (userName !== '') {
     gh.getUser(userName)
      .then(user => {
        if (user.profile.message === 'Not Found') {
          //Show alert
        } else {
          // Show user profile
          ui.showUser(user.profile)
        }
      })
   } else {
     //Clear user profile

   }
})
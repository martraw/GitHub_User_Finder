//Create UI class
class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  //Show user profile
  showUser(user) {
    const output = `
      <div class="row">
        <div class="four columns">
          <img class="u-max-full-width" src="${user.avatar_url}">
          <a href="${user.html_url}" class="button button-primary" target="_blank">VISIT PROFILE</a>
        </div>
        <div class="eight columns">
          <h4>${user.login}</h4>
          <span class="badge green">Public Repos: ${user.public_repos}</span>
          <span class="badge green">Public Gists: ${user.public_gists}</span>
          <span class="badge green">Followers: ${user.followers}</span>
          <span class="badge green">Following: ${user.following}</span>
          <table class="u-full-width">
          <tbody>
            <tr>
              <th>Company</th>
              <td>${this.hasValue(user.company)}</td>
            </tr>
              <tr>
              <th>Website/Blog</th>
              <td>${this.hasValue(user.blog)}</td>
            </tr>
              <tr>
              <th>Location</th>
              <td>${this.hasValue(user.location)}</td>
            </tr>
            <tr>
              <th>Member Sience</th>
              <td>${user.created_at}</td>
            </tr>
            <tr>
              <th>Last Update</th>
              <td>${user.updated_at}</td>
            </tr>
          </tbody>
        </table>
        </div>
        <h5>Most recent repos</h5>
        <div id="repositories"></div>
      </div>
    `;
    
    this.profile.innerHTML = output;
  }

  //Check if data has value. If not returns long dash sign (unicode: U+2014)
  hasValue(data) {
    return !data?`\u{2014}`:data
  }
}
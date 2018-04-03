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
          <a href="${user.html_url}" class="button button-primary u-full-width " target="_blank">VISIT PROFILE</a>
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

  //Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class='repo'>
          <div class='row'>
            <div class='one-half column'>
              <a href='${repo.html_url}' class='repo-link' target='_blank'>${repo.name}</a>
            </div>

            <div class='one-half column'>
              <span class="badge">Stars: ${repo.stargazers_count}</span>
              <span class="badge">Watchers: ${repo.watchers_count}</span>
              <span class="badge">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `
    });

    document.querySelector('#repositories').innerHTML = output;
  }

  //Check if data has value. If not returns long dash sign (unicode: U+2014)
  hasValue(data) {
    return !data?`\u{2014}`:data;
  }

  //Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

  //Show alert message
  showAlert(message, className) {
    this.clearAlert();
    const messageContainer = document.querySelector('#message');
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));

    messageContainer.appendChild(div);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear alert
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
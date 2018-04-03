class GitHub {
  constructor() {
    this.client_id = 'f9aef124973201ed3bc2';
    this.client_secret = '69f5f986065c73c26509323b2e7b1779c0ee159b';
    this.repos_count = 10;
    this.repos_sort = 'created';
  }

  async getUser(user) {
    //Fetch user profile informations
    const profileResponce = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //Fetch user public repos
    const repoResponce = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    
    const profileData = await profileResponce.json();
    const reposData = await repoResponce.json();
    
    
    return {
      profile: profileData,
      repos: reposData
    }
  }
}
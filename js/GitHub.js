class GitHub {
  constructor() {
    this.client_id = 'f9aef124973201ed3bc2';
    this.client_secret = '69f5f986065c73c26509323b2e7b1779c0ee159b';
  }

  async getUser(user) {
    const profileResponce = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponce.json();
    
    return {
      profile: profileData
    }
  }
}
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('The character is already on the team');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  toArray() {
    this.members = [...this.members];
  }
}

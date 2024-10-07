type HeartItemType = {
  id: string;
};
export default class HeartStorage {
  private static readonly KEY = 'heartList';

  static getHeartList(): HeartItemType[] {
    const heartList = localStorage.getItem(this.KEY);
    return heartList ? JSON.parse(heartList) : [];
  }

  private static setHeartList(newHeartList: HeartItemType[]) {
    localStorage.setItem(this.KEY, JSON.stringify(newHeartList));
  }

  static addHeart(heart: HeartItemType) {
    const heartList = this.getHeartList();
    heartList.push(heart);
    this.setHeartList(heartList);
  }

  static removeHeart(id: string) {
    const heartList = this.getHeartList();
    const updatedHeartList = heartList.filter(heart => heart.id !== id);
    this.setHeartList(updatedHeartList);
  }

  static isHearted(id: string) {
    return this.getHeartList().some(heart => heart.id === id);
  }

  static toggleHeart(id: string) {
    if (this.isHearted(id)) this.removeHeart(id);
    else this.addHeart({ id });
  }
}

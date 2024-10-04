type ReviewItemType = {
  review: string;
  id: string;
};

export default class ReviewStorage {
  private static readonly KEY = 'reviewList';

  static getReviewList(): ReviewItemType[] {
    const reviewList = localStorage.getItem(this.KEY);
    return reviewList ? JSON.parse(reviewList) : [];
  }

  private static setReviewList(newReviewList: ReviewItemType[]): void {
    localStorage.setItem(this.KEY, JSON.stringify(newReviewList));
  }

  static addReview(review: ReviewItemType): void {
    const reviewList = this.getReviewList();
    reviewList.push(review);
    this.setReviewList(reviewList);
  }

  static removeReview(id: string): void {
    const reviewList = this.getReviewList();
    const updatedReviewList = reviewList.filter(review => review.id !== id);
    this.setReviewList(updatedReviewList);
  }

  static editReview(newReview: ReviewItemType): void {
    const reviewList = this.getReviewList();
    const updatedReviewList = reviewList.map(review => (review.id === newReview.id ? newReview : review));
    this.setReviewList(updatedReviewList);
  }

  static saveReview(review: ReviewItemType): void {
    const reviewList = this.getReviewList();
    const existingReview = reviewList.find(item => item.id === review.id);

    if (existingReview) {
      // 이미 존재하는 리뷰인 경우 editReview 실행
      this.editReview(review);
    } else {
      // 새로운 리뷰인 경우 addReview 실행
      this.addReview(review);
    }
  }
}

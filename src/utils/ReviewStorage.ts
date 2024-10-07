type ReviewItemType = {
  review: string;
  id: string;
  score: number; // 별점 1,2,3,4,5
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
      if (review.review === '')
        this.removeReview(review.id); // review 파트가 비어있다면 삭제
      else this.editReview(review); // 이미 존재하는 리뷰인 경우 editReview 실행
    } else {
      // 새로운 리뷰인 경우 addReview 실행
      this.addReview(review);
    }
  }
}

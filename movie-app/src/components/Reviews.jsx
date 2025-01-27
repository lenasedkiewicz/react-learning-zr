import { Review } from "./Review";
import { useState } from "react";

const initialReviews = [
  { author: "Brian", text: "Najlepszy film ever!", id: 1 },
  { author: "Jessica", text: "Nie podobał mi się", id: 2 },
];
export function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);

  const reviewsElement = reviews.map((r) => (
    <Review key={r.id} author={r.author} text={r.text} />
  ));

  return <ul>{reviewsElement}</ul>;
}

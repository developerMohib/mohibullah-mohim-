import { model, Schema } from 'mongoose';

const reviewSchema = new Schema({
  quote: String,
  name: String,
  position: String,
  image: String,
},
{
  timestamps : true
});

const Review = model('Review', reviewSchema);
export default Review;

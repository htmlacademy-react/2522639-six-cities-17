import { CommentLengthLimits } from '../../../../constants';
import { CommentType, RatingType } from '../../../../types/alltypes';

const isValidValues = (comment: CommentType, rating: RatingType): boolean => {
  const isValidComment =
    typeof comment === 'string' &&
    comment.length >= CommentLengthLimits.Min &&
    comment.length <= CommentLengthLimits.Max;

  return isValidComment && typeof rating === 'number';
};

export { isValidValues };

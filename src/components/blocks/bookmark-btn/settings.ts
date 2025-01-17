import { ImageSizeType } from '../../../types/alltypes';

const SvgSize: ImageSizeType = {
  Card: {
    Width: 19,
    Height: 19,
  },
  OffCard: {
    Width: 31,
    Height: 33,
  },
} as const;

export { SvgSize };

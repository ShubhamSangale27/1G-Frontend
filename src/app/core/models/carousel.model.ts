export interface CarouselSlide {
  id: number;
  imageUrl: string;
  linkUrl?: string;
  altText?: string;
  displayOrder: number;
  active: boolean;
}

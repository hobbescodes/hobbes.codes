import NextImage from "next/image";

import { ImageProps } from "next/image";

const Image = ({ blurDataURL, placeholder, fill, ...rest }: ImageProps) => (
  <NextImage
    placeholder="blur"
    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP84bioHgAGcAJck3pOOQAAAABJRU5ErkJggg=="
    fill={fill}
    sizes={fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
    {...rest}
  />
);

export default Image;

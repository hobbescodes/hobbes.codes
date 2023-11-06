import NextImage from "next/image";

import type { ImageProps } from "next/image";

const Image = ({ fill, ...rest }: ImageProps) => (
  <NextImage
    {...rest}
    placeholder="blur"
    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP84bioHgAGcAJck3pOOQAAAABJRU5ErkJggg=="
    fill={fill}
    sizes={fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
  />
);

export default Image;

import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, circular }: SvgIconProps) => (
  <img 
    src={`/img/svg/${src}`} 
    alt={src} 
    width={width} 
    height={height} 
    style={circular ? { borderRadius: '50%', objectFit: 'cover' } : {}}
  />
);

//тут будут props для иконок

export type IconSize = "xs" | "xxs" | "sm" | "md" | "lg";

export interface IconProps {
  size: IconSize;
  className?: string;
}

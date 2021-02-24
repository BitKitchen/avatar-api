/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Radius = number;
export type Size = number;
export type Margin = number;
export type Background = string | "transparent";

export interface Core {
  radius?: Radius;
  r?: Radius;
  width?: Size;
  w?: Size;
  height?: Size;
  h?: Size;
  margin?: Margin;
  m?: Margin;
  background?: Background;
  b?: Background;
  [k: string]: unknown;
}

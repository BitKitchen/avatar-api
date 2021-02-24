/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Jdenticon = {
  radius?: number;
  r?: number;
  width?: number;
  w?: number;
  height?: number;
  h?: number;
  margin?: number;
  m?: number;
  background?: string | "transparent";
  b?: string | "transparent";
  [k: string]: unknown;
} & {
  hues?: number[];
  colorLightness?: [number, number];
  grayscaleLightness?: [number, number];
  colorSaturation?: number;
  grayscaleSaturation?: number;
  [k: string]: unknown;
};

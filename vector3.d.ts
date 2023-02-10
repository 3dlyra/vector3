export function create( x?: number, y?: number, z?: number ): Float32Array;
export function add( a: Float32Array, b: Float32Array ): Float32Array;
export function sub( a: Float32Array, b: Float32Array ): Float32Array;
export function mul( a: Float32Array, b: Float32Array ): Float32Array;
export function div( a: Float32Array, b: Float32Array ): Float32Array;
export function min( a: Float32Array, b: Float32Array ): Float32Array;
export function max( a: Float32Array, b: Float32Array ): Float32Array;
export function clamp( v3: Float32Array, min: Float32Array, max: Float32Array ): Float32Array;
export function dot( a: Float32Array, b: Float32Array ): number;
export function cross( a: Float32Array, b: Float32Array ): Float32Array;
export function floor( v3: Float32Array ): Float32Array;
export function ceil( v3: Float32Array ): Float32Array;
export function round( v3: Float32Array ): Float32Array;
export function trunc( v3: Float32Array ): Float32Array;
export function distance( a: Float32Array, b: Float32Array ): number;
export function length( v3: Float32Array ): number;
export function negate( v3: Float32Array ): Float32Array;
export function inverse( v3: Float32Array ): Float32Array;
export function normalize( v3: Float32Array ): Float32Array;
export function equals( a: Float32Array, b: Float32Array, accuracy?: number ): boolean;
export function angle( a: Float32Array, b: Float32Array ): number;
export function applyQuaternion( v3: Float32Array, quat: Float32Array ): Float32Array;

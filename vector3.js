export function create( x, y, z ) {

	return new Float32Array( [ x || 0, y || 0, z || 0 ] )
}

export function add( a, b ) {

	return new Float32Array( [
		a[ 0 ] + b[ 0 ],
		a[ 1 ] + b[ 1 ],
		a[ 2 ] + b[ 2 ]
	] )
}

export function sub( a, b ) {

	return new Float32Array( [
		a[ 0 ] - b[ 0 ],
		a[ 1 ] - b[ 1 ],
		a[ 2 ] - b[ 2 ]
	] )
}

export function mul( a, b ) {

	return new Float32Array( [
		a[ 0 ] * b[ 0 ],
		a[ 1 ] * b[ 1 ],
		a[ 2 ] * b[ 2 ]
	] )
}

export function div( a, b ) {

	return new Float32Array( [
		a[ 0 ] / b[ 0 ],
		a[ 1 ] / b[ 1 ],
		a[ 2 ] / b[ 2 ]
	] )
}

export function min( a, b ) {

	return new Float32Array( [
		Math.min( a[ 0 ], b[ 0 ] ),
		Math.min( a[ 1 ], b[ 1 ] ),
		Math.min( a[ 2 ], b[ 2 ] )
	] )
}

export function max( a, b ) {

	return new Float32Array( [
		Math.max( a[ 0 ], b[ 0 ] ),
		Math.max( a[ 1 ], b[ 1 ] ),
		Math.max( a[ 2 ], b[ 2 ] )
	] )
}

export function clamp( v3, min, max ) {

	return new Float32Array( [
		Math.max( min[ 0 ], Math.min( max[ 0 ], v3[ 0 ] ) ),
		Math.max( min[ 1 ], Math.min( max[ 1 ], v3[ 1 ] ) ),
		Math.max( min[ 2 ], Math.min( max[ 2 ], v3[ 2 ] ) )
	] )
}

export function dot( a, b ) {

	return a[ 0 ] * b[ 0 ] + a[ 1 ] * b[ 1 ] + a[ 2 ] * b[ 2 ]
}

export function cross( a, b ) {

	return new Float32Array( [
		a[ 1 ] * b[ 2 ] - a[ 2 ] * b[ 1 ],
		a[ 2 ] * b[ 0 ] - a[ 0 ] * b[ 2 ],
		a[ 0 ] * b[ 1 ] - a[ 1 ] * b[ 0 ]
	] )
}

export function floor( v3 ) {

	return new Float32Array( [
		Math.floor( v3[ 0 ] ),
		Math.floor( v3[ 1 ] ),
		Math.floor( v3[ 2 ] )
	] )
}

export function ceil( v3 ) {

	return new Float32Array( [
		Math.ceil( v3[ 0 ] ),
		Math.ceil( v3[ 1 ] ),
		Math.ceil( v3[ 2 ] )
	] )
}

export function round( v3 ) {

	return new Float32Array( [
		Math.round( v3[ 0 ] ),
		Math.round( v3[ 1 ] ),
		Math.round( v3[ 2 ] )
	] )
}

export function trunc( v3 ) {

	return new Float32Array( [
		Math.trunc( v3[ 0 ] ),
		Math.trunc( v3[ 1 ] ),
		Math.trunc( v3[ 2 ] )
	] )
}

export function distance( a, b ) {

	return Math.sqrt(
		( b[ 0 ] - a[ 0 ] ) * ( b[ 0 ] - a[ 0 ] ) +
		( b[ 1 ] - a[ 1 ] ) * ( b[ 1 ] - a[ 1 ] ) +
		( b[ 2 ] - a[ 2 ] ) * ( b[ 2 ] - a[ 2 ] )
	)
}

export function length( v3 ) {

	return Math.sqrt( v3[ 0 ] * v3[ 0 ] + v3[ 1 ] * v3[ 1 ] + v3[ 2 ] * v3[ 2 ] )
}

export function negate( v3 ) {

	return new Float32Array( [
		- v3[ 0 ],
		- v3[ 1 ],
		- v3[ 2 ]
	] )
}


export function inverse( v3 ) {

	return new Float32Array( [
		1 / v3[ 0 ],
		1 / v3[ 1 ],
		1 / v3[ 2 ]
	] )
}

export function normalize( v3 ) {

	return new Float32Array( [
		v3[ 0 ] * 1 / Math.sqrt( v3[ 0 ] * v3[ 0 ] + v3[ 1 ] * v3[ 1 ] + v3[ 2 ] * v3[ 2 ] ),
		v3[ 1 ] * 1 / Math.sqrt( v3[ 0 ] * v3[ 0 ] + v3[ 1 ] * v3[ 1 ] + v3[ 2 ] * v3[ 2 ] ),
		v3[ 2 ] * 1 / Math.sqrt( v3[ 0 ] * v3[ 0 ] + v3[ 1 ] * v3[ 1 ] + v3[ 2 ] * v3[ 2 ] )
	] )
}

export function equals( a, b, accuracy ) {

	return (
		Math.abs( a[ 0 ] - b[ 0 ] ) <= ( accuracy || 0 ) * Math.max( 1.0, Math.abs( a[ 0 ] ), Math.abs( b[ 0 ] ) ) &&
		Math.abs( a[ 1 ] - b[ 1 ] ) <= ( accuracy || 0 ) * Math.max( 1.0, Math.abs( a[ 1 ] ), Math.abs( b[ 1 ] ) ) &&
		Math.abs( a[ 2 ] - b[ 2 ] ) <= ( accuracy || 0 ) * Math.max( 1.0, Math.abs( a[ 2 ] ), Math.abs( b[ 2 ] ) )
	)
}

export function angleBetween( a, b ) {

	const cosine = (
		( a[ 0 ] * 1 / Math.sqrt( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] + a[ 2 ] * a[ 2 ] ) ) * ( b[ 0 ] * 1 / Math.sqrt( b[ 0 ] * b[ 0 ] + b[ 1 ] * b[ 1 ] + b[ 2 ] * b[ 2 ] ) ) +
		( a[ 1 ] * 1 / Math.sqrt( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] + a[ 2 ] * a[ 2 ] ) ) * ( b[ 1 ] * 1 / Math.sqrt( b[ 0 ] * b[ 0 ] + b[ 1 ] * b[ 1 ] + b[ 2 ] * b[ 2 ] ) ) +
		( a[ 2 ] * 1 / Math.sqrt( a[ 0 ] * a[ 0 ] + a[ 1 ] * a[ 1 ] + a[ 2 ] * a[ 2 ] ) ) * ( b[ 2 ] * 1 / Math.sqrt( b[ 0 ] * b[ 0 ] + b[ 1 ] * b[ 1 ] + b[ 2 ] * b[ 2 ] ) )
	)

	return cosine > 1 ? 0 : Math.acos( cosine )
}

// adapted from threejs
// quat = [ x, y, z, w ] (@3dlyra/quaternion)

export function applyQuaternion( v3, quat ) {

	return new Float32Array( [
		( quat[ 3 ] * v3[ 0 ] + quat[ 1 ] * v3[ 2 ] - quat[ 2 ] * v3[ 1 ] ) * quat[ 3 ] + ( - quat[ 0 ] * v3[ 0 ] - quat[ 1 ] * v3[ 1 ] - quat[ 2 ] * v3[ 2 ] ) * - quat[ 0 ] + ( quat[ 3 ] * v3[ 1 ] + quat[ 2 ] * v3[ 0 ] - quat[ 0 ] * v3[ 2 ] ) * - quat[ 2 ] - ( quat[ 3 ] * v3[ 2 ] + quat[ 0 ] * v3[ 1 ] - quat[ 1 ] * v3[ 0 ] ) * - quat[ 1 ],
		( quat[ 3 ] * v3[ 1 ] + quat[ 2 ] * v3[ 0 ] - quat[ 0 ] * v3[ 2 ] ) * quat[ 3 ] + ( - quat[ 0 ] * v3[ 0 ] - quat[ 1 ] * v3[ 1 ] - quat[ 2 ] * v3[ 2 ] ) * - quat[ 1 ] + ( quat[ 3 ] * v3[ 2 ] + quat[ 0 ] * v3[ 1 ] - quat[ 1 ] * v3[ 0 ] ) * - quat[ 0 ] - ( quat[ 3 ] * v3[ 0 ] + quat[ 1 ] * v3[ 2 ] - quat[ 2 ] * v3[ 1 ] ) * - quat[ 2 ],
		( quat[ 3 ] * v3[ 2 ] + quat[ 0 ] * v3[ 1 ] - quat[ 1 ] * v3[ 0 ] ) * quat[ 3 ] + ( - quat[ 0 ] * v3[ 0 ] - quat[ 1 ] * v3[ 1 ] - quat[ 2 ] * v3[ 2 ] ) * - quat[ 2 ] + ( quat[ 3 ] * v3[ 0 ] + quat[ 1 ] * v3[ 2 ] - quat[ 2 ] * v3[ 1 ] ) * - quat[ 1 ] - ( quat[ 3 ] * v3[ 1 ] + quat[ 2 ] * v3[ 0 ] - quat[ 0 ] * v3[ 2 ] ) * - quat[ 0 ]
	] )
}

export function fromLonLat( targetLon, targetLat, centerLon, centerLat, scale ) {

	return new Float32Array( [
		( 0 - ( ( scale || 1_000_000 ) * ( centerLon % 360 * ( Math.PI / 180 ) ) * 1 ) ) + ( scale || 1_000_000 ) * ( ( targetLon * ( Math.PI / 180 ) ) * 1 ),
		( 0 - ( 0 - ( scale || 1_000_000 ) * ( Math.log( Math.tan( ( ( Math.PI / 2 ) + ( centerLat % 360 * ( Math.PI / 180 ) ) ) / 2 ) ) ) * - 1 ) ) - ( scale || 1_000_000 ) * ( ( Math.log( Math.tan( ( ( Math.PI / 2 ) + ( targetLat * ( Math.PI / 180 ) ) ) / 2 ) ) ) * - 1 ),
		0,
	] )
}

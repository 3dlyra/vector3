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

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

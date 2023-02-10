# Vector3
This library is the 3D vector part of the 3DLyra's math library.
### Installation
```
npm i @3dlyra/vector3
```
### Example
```JavaScript
import * as Vector3 from "@3dlyra/vector3"

// Euclidean distance between two vectors
{
  const a = Vector3.create() // Float32Array[ 0, 0, 0 ]
  const b = Vector3.create( 1, 2, 3 )

  console.log( Vector3.distance( a, b ) ) // 3.7416573867739413
}

// Angle between two vectors
{
  const a = Vector3.create( 1, 0, 0 )
  const b = Vector3.create( 0, 1, 0 )

  console.log( Vector3.angleBetween( a, b ) ) // 1.5707963267948966 (=== Math.PI / 2)
}
```

### API
```TypeScript
// type vec3 = Float32Array( 3 )
// type quaternion = Float32Array( 4 ) [or use @3dlyra/quaternion]

create( x?: number, y?: number, z?: number ): vec3
equals( a: vec3, b: vec3, accuracy?: number ): boolean
add( a: vec3, b: vec3 ): vec3
sub( a: vec3, b: vec3 ): vec3
mul( a: vec3, b: vec3 ): vec3
div( a: vec3, b: vec3 ): vec3
min( a: vec3, b: vec3 ): vec3
max( a: vec3, b: vec3 ): vec3
clamp( v3: vec3, min: vec3, max: vec3 ): vec3
dot( a: vec3, b: vec3 ): number
cross( a: vec3, b: vec3 ): vec3
floor( v3: vec3 ): vec3
ceil( v3: vec3 ): vec3
round( v3: vec3 ): vec3
trunc( v3: vec3 ): vec3
length( v3: vec3 ): number
distance( a: vec3, b: vec3 ): number
angleBetween( a: vec3, b: vec3 ): number
negate( v3: vec3 ): vec3
inverse( v3: vec3 ): vec3
normalize( v3: vec3 ): vec3
applyQuaternion( v3: vec3, quat: quaternion ): vec3
```

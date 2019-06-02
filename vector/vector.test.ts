namespace $ {
	$mol_test({

		'Vector limiting'() {

			let point = new $mol_vector_3d( 7 , 10 , 13 )
			const res = point.limited( [ [ 1 , 5 ] , [ 15 , 20 ] , [ 5 , 10 ] ] as const )

			$mol_assert_equal( res.x , 5 )
			$mol_assert_equal( res.y , 15 )
			$mol_assert_equal( res.z , 10 )

		} ,

		'Vector adding scalar'() {

			let point = new $mol_vector_3d( 1 , 2 , 3 )
			let res = point.added0( 5 )

			$mol_assert_equal( res.x , 6 )
			$mol_assert_equal( res.y , 7 )
			$mol_assert_equal( res.z , 8 )

		} ,

		'Vector adding vector'() {

			let point = new $mol_vector_3d( 1 , 2 , 3 )
			let res = point.added1( [ 5 , 10 , 15 ] as const )

			$mol_assert_equal( res.x , 6 )
			$mol_assert_equal( res.y , 12 )
			$mol_assert_equal( res.z , 18 )

		} ,

		'Vector multiplying scalar'() {

			let point = new $mol_vector_3d( 2 , 3 , 4 )
			let res = point.multed0( -1 )

			$mol_assert_equal( res.x , -2 )
			$mol_assert_equal( res.y , -3 )
			$mol_assert_equal( res.z , -4 )

		} ,

		'Vector multiplying vector'() {

			let point = new $mol_vector_3d( 2 , 3 , 4 )
			let res = point.multed1( [ 5 , 2 , -2 ] as const )

			$mol_assert_equal( res.x , 10 )
			$mol_assert_equal( res.y , 6 )
			$mol_assert_equal( res.z , -8 )

		} ,

		'Matrix adding matrix'() {

			let matrix = new $mol_vector_matrix<2,3>( ...[ [ 1 , 2 ] , [ 3 , 4 ] , [ 5 , 6 ] ] as const )
			let res = matrix.added2( [ [ 10 , 20 ] , [ 30 , 40 ] , [ 50 , 60 ] ] as const )

			$mol_assert_equal( res[0][0] , 11 )
			$mol_assert_equal( res[0][1] , 22 )
			$mol_assert_equal( res[1][0] , 33 )
			$mol_assert_equal( res[1][1] , 44 )
			$mol_assert_equal( res[2][0] , 55 )
			$mol_assert_equal( res[2][1] , 66 )

		} ,

		'Matrix multiplying matrix'() {

			let matrix = new $mol_vector_matrix<2,3>( ...[ [ 2 , 3 ] , [ 4 , 5 ] , [ 6 , 7 ] ] as const )
			let res = matrix.multed2( [ [ 2 , 3 ] , [ 4 , 5 ] , [ 6 , 7 ] ] as const )

			$mol_assert_equal( res[0][0] , 4 )
			$mol_assert_equal( res[0][1] , 9 )
			$mol_assert_equal( res[1][0] , 16 )
			$mol_assert_equal( res[1][1] , 25 )
			$mol_assert_equal( res[2][0] , 36 )
			$mol_assert_equal( res[2][1] , 49 )

		} ,

	})
}

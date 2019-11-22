namespace $ {
	$mol_test({

		'Is number' () {
			$mol_data_number( 0 )
		} ,

		'Is not number' () {
			$mol_assert_fail( ()=> {
				$mol_data_number( '' as any )
			} , 'string is not a number' )
		} ,

		'Is object number' () {
			$mol_assert_fail( ()=> {
				$mol_data_number( new Number( '' ) as any )
			} , 'object is not a number' )
		} ,

	})
}

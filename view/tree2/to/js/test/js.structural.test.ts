namespace $ {

	$mol_test({
		
		'Structural channel'( $ ) {
			const _foo = $mol_view_tree2_to_js_test_ex_structural_channel_foo
			
			$mol_assert_like(
				_foo.make({ $ }).bar(),
				{
					alpha: 1,
					beta: {},
					xxx: 2,
				},
			)
			
		},
		
		'Structural dict'( $ ) {
			const _foo = $mol_view_tree2_to_js_test_ex_structural_dict_foo
			
			$mol_assert_like(
				_foo.make({ $ }).bar(),
				{
					alpha: 1,
					beta: 'a',
				},
			)
			
		},

		'Structural channel with inheritance'( $ ) {
			const _bar = $mol_view_tree2_to_js_test_ex_structural_channel_with_inheritance_bar
			
			$mol_assert_like(
				_bar.make({ $ }).field(),
				{
					yyy: 234,
					xxx: 123,
					xxy: 'test',
					zzz: 345,
				},
			)
			
		},
		
		'Structural channel spread other channel'( $ ) {
			const _foo = $mol_view_tree2_to_js_test_ex_structural_channel_spread_other_channel_foo
			
			$mol_assert_like(
				_foo.make({ $ }).field(),
				{
					bbb: 321,
					aaa: 123,
				},
			)
			
		},

		'Structural channel localized prop value'( $ ) {
			const _foo = $mol_view_tree2_to_js_test_ex_structural_channel_localized_prop_value_foo
			const foo = _foo.make({ $ })

			$mol_assert_like(
				foo.bar(),
				{
					'loc': `$mol_view_tree2_to_js_test_ex_structural_channel_localized_prop_value_foo_bar_loc`,
					'baz': { 'loc2': `$mol_view_tree2_to_js_test_ex_structural_channel_localized_prop_value_foo_bar_baz_loc2` }
				},
			)
			
		},

		'Structural channel quoted props'( $ ) {
			const _foo = $mol_view_tree2_to_js_test_ex_structural_channel_quoted_props_foo

			$mol_assert_like(
				_foo.make({ $ }).bar(),
				{
					'$a': 1,
					'b-t': {},
				},
			)
			
		},

	})
	
}

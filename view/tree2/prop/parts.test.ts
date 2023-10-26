namespace $ {
	function get_parts(str: string) {
		return $$.$mol_view_tree2_prop_parts($mol_tree2.struct(str))
	}

	$mol_test({
		'wrong order'($) {
			$mol_assert_fail(() => {
				get_parts('some_bla?*')
			})
		},

		'empty'($) {
			$mol_assert_fail(() => {
				get_parts('')
			})
		},

		'prop with index'($) {
			const parts = get_parts('some_bla*')
			$mol_assert_equal(parts.name, 'some_bla')
			$mol_assert_equal(parts.key, '*')
			$mol_assert_equal(parts.next, '')
		},

		'prop with index and value'($) {
			const parts = get_parts('some_bla*?')
			$mol_assert_equal(parts.name, 'some_bla')
			$mol_assert_equal(parts.key, '*')
			$mol_assert_equal(parts.next, '?')
		},

		'legacy indexed'($) {
			const parts = get_parts('Some*default')
			$mol_assert_equal(parts.name, 'Some')
			$mol_assert_equal(parts.key, '*')
			$mol_assert_equal(parts.next, '')
		},

		'legacy indexed value'($) {
			const parts = get_parts('Some*k?v')
			$mol_assert_equal(parts.name, 'Some')
			$mol_assert_equal(parts.key, '*')
			$mol_assert_equal(parts.next, '?')
		}
	})
}

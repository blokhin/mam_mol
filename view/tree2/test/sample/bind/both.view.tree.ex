$mol_view_tree2_test_sample_bind_both $mol_view
	writable?val <=> writable_owner?val
	writable_default?val <=> writable_default_owner?val null
	class?val <=> class_owner?val $mol_view
	indexed!key?val <=> indexed_owner!key?val null
	twice null
	class_indexed!key?val $mol_view
		expanded <=> cell_expanded!key?val
	class_writable?val <=> class_writable_owner?val $mol_view
		some?val <=> twice?val
		localized?val <=> localized_owner?val @ \some1
		chain?v <=> chain1?v <=> chain2?v null
	arr /
		*
			loc?v <=> loc_outer?v @ \test localize
		*
			loc?v <=> loc_outer?v @ \test localize
	swipe_to_left?event <=> event_next?event null
	event_catch?val <=> event_next?val null

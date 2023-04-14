namespace $ {
	export class $mol_perf_dbmon extends $mol_scroll {
		
		/**
		 * ```tree
		 * title \dbmon ($mol)
		 * ```
		 */
		title() {
			return "dbmon ($mol)"
		}
		
		/**
		 * ```tree
		 * sub / <= Databases
		 * ```
		 */
		sub() {
			return [
				this.Databases()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Database* $mol_view sub <= database*
		 * ```
		 */
		@ $mol_mem_key
		Database(id: any) {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => this.database(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Query* $mol_perf_dbmon_query
		 * 	elapsed <= query_elapsed*
		 * 	elapsed_mod <= query_elapsed_mod*
		 * 	value <= query_value*
		 * ```
		 */
		@ $mol_mem_key
		Query(id: any) {
			const obj = new this.$.$mol_perf_dbmon_query()
			
			obj.elapsed = () => this.query_elapsed(id)
			obj.elapsed_mod = () => this.query_elapsed_mod(id)
			obj.value = () => this.query_value(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * databases /
		 * ```
		 */
		databases() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Databases $mol_list rows <= databases
		 * ```
		 */
		@ $mol_mem
		Databases() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.databases()
			
			return obj
		}
		
		/**
		 * ```tree
		 * name* \
		 * ```
		 */
		name(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * Name* $mol_view sub / <= name*
		 * ```
		 */
		@ $mol_mem_key
		Name(id: any) {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.name(id)
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * query_count_label_mod* \
		 * ```
		 */
		query_count_label_mod(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * query_count* 0
		 * ```
		 */
		query_count(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * Query_count* $mol_perf_dbmon_query_count
		 * 	label_mod <= query_count_label_mod*
		 * 	count <= query_count*
		 * ```
		 */
		@ $mol_mem_key
		Query_count(id: any) {
			const obj = new this.$.$mol_perf_dbmon_query_count()
			
			obj.label_mod = () => this.query_count_label_mod(id)
			obj.count = () => this.query_count(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * top_queries* /
		 * ```
		 */
		top_queries(id: any) {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * database* /
		 * 	<= Name*
		 * 	<= Query_count*
		 * 	<= top_queries*
		 * ```
		 */
		database(id: any) {
			return [
				this.Name(id),
				this.Query_count(id),
				this.top_queries(id)
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * query_elapsed* \
		 * ```
		 */
		query_elapsed(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * query_elapsed_mod* \
		 * ```
		 */
		query_elapsed_mod(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * query_value* \
		 * ```
		 */
		query_value(id: any) {
			return ""
		}
	}
	
	export class $mol_perf_dbmon_query_count extends $mol_view {
		
		/**
		 * ```tree
		 * sub / <= Label
		 * ```
		 */
		sub() {
			return [
				this.Label()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * label_mod \
		 * ```
		 */
		label_mod() {
			return ""
		}
		
		/**
		 * ```tree
		 * count 0
		 * ```
		 */
		count() {
			return 0
		}
		
		/**
		 * ```tree
		 * Label $mol_view
		 * 	attr * mol_perf_dbmon_query_count_label <= label_mod
		 * 	sub / <= count
		 * ```
		 */
		@ $mol_mem
		Label() {
			const obj = new this.$.$mol_view()
			
			obj.attr = () => ({
				mol_perf_dbmon_query_count_label: this.label_mod()
			} as Record< string, any >)
			obj.sub = () => [
				this.count()
			] as readonly any[]
			
			return obj
		}
	}
	
	export class $mol_perf_dbmon_query extends $mol_pop_over {
		
		/**
		 * ```tree
		 * minimal_height 40
		 * ```
		 */
		minimal_height() {
			return 40
		}
		
		/**
		 * ```tree
		 * Anchor <= Elapsed
		 * ```
		 */
		Anchor() {
			return this.Elapsed()
		}
		
		/**
		 * ```tree
		 * bubble_content / <= value
		 * ```
		 */
		bubble_content() {
			return [
				this.value()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * align \left_center
		 * ```
		 */
		align() {
			return "left_center"
		}
		
		/**
		 * ```tree
		 * elapsed_mod \
		 * ```
		 */
		elapsed_mod() {
			return ""
		}
		
		/**
		 * ```tree
		 * elapsed \
		 * ```
		 */
		elapsed() {
			return ""
		}
		
		/**
		 * ```tree
		 * Elapsed $mol_view
		 * 	attr * mol_perf_dbmon_query_elapsed <= elapsed_mod
		 * 	sub / <= elapsed
		 * ```
		 */
		@ $mol_mem
		Elapsed() {
			const obj = new this.$.$mol_view()
			
			obj.attr = () => ({
				mol_perf_dbmon_query_elapsed: this.elapsed_mod()
			} as Record< string, any >)
			obj.sub = () => [
				this.elapsed()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * value \
		 * ```
		 */
		value() {
			return ""
		}
	}
	
}


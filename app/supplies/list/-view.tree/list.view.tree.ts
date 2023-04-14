namespace $ {
	export class $mol_app_supplies_list extends $mol_page {
		
		/**
		 * ```tree
		 * supplies /$mol_app_supplies_domain_supply
		 * ```
		 */
		supplies() {
			return [
			] as readonly $mol_app_supplies_domain_supply[]
		}
		
		/**
		 * ```tree
		 * tools / <= Search
		 * ```
		 */
		tools() {
			return [
				this.Search()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * body / <= Supply_rows
		 * ```
		 */
		body() {
			return [
				this.Supply_rows()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Supply_row* $mol_app_supplies_card
		 * 	supply <= supply*
		 * 	arg <= supply_arg*
		 * ```
		 */
		@ $mol_mem_key
		Supply_row(id: any) {
			const obj = new this.$.$mol_app_supplies_card()
			
			obj.supply = () => this.supply(id)
			obj.arg = () => this.supply_arg(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * search_hint @ \Search supply by bar code
		 * ```
		 */
		search_hint() {
			return this.$.$mol_locale.text( '$mol_app_supplies_list_search_hint' )
		}
		
		/**
		 * ```tree
		 * search_query?val \
		 * ```
		 */
		@ $mol_mem
		search_query(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * Search $mol_code
		 * 	hint <= search_hint
		 * 	value?val <=> search_query?val
		 * ```
		 */
		@ $mol_mem
		Search() {
			const obj = new this.$.$mol_code()
			
			obj.hint = () => this.search_hint()
			obj.value = (val?: any) => this.search_query(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * supply_rows /$mol_view
		 * ```
		 */
		supply_rows() {
			return [
			] as readonly $mol_view[]
		}
		
		/**
		 * ```tree
		 * Supply_rows $mol_list rows <= supply_rows
		 * ```
		 */
		@ $mol_mem
		Supply_rows() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.supply_rows()
			
			return obj
		}
		
		/**
		 * ```tree
		 * supply* null
		 * ```
		 */
		supply(id: any) {
			return null as any
		}
		
		/**
		 * ```tree
		 * supply_id* \
		 * ```
		 */
		supply_id(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * supply_arg* * supply <= supply_id*
		 * ```
		 */
		supply_arg(id: any) {
			return {
				supply: this.supply_id(id)
			} as Record< string, any >
		}
	}
	
}


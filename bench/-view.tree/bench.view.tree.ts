namespace $ {
	export class $mol_bench extends $mol_grid {
		
		/**
		 * ```tree
		 * records <= result
		 * ```
		 */
		records() {
			return this.result()
		}
		
		/**
		 * ```tree
		 * col_sort?val \
		 * ```
		 */
		@ $mol_mem
		col_sort(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * Col_head!id $mol_bench_head
		 * 	event_click?val <=> event_sort_toggle!id?val
		 * 	sub <= col_head_content!id
		 * ```
		 */
		@ $mol_mem_key
		Col_head(id: any) {
			const obj = new this.$.$mol_bench_head()
			
			obj.event_click = (val?: any) => this.event_sort_toggle(id, val)
			obj.sub = () => this.col_head_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * cell_content_number!id /
		 * 	<= result_value!id
		 * 	<= Result_portion!id
		 * ```
		 */
		cell_content_number(id: any) {
			return [
				this.result_value(id),
				this.Result_portion(id)
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * result *
		 * ```
		 */
		result() {
			return {
			}
		}
		
		/**
		 * ```tree
		 * event_sort_toggle!id?val null
		 * ```
		 */
		@ $mol_mem_key
		event_sort_toggle(id: any, val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * col_head_title!id \
		 * ```
		 */
		col_head_title(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * Col_head_sort!id $mol_icon_sort_asc
		 * ```
		 */
		@ $mol_mem_key
		Col_head_sort(id: any) {
			const obj = new this.$.$mol_icon_sort_asc()
			
			return obj
		}
		
		/**
		 * ```tree
		 * col_head_content!id /
		 * 	<= col_head_title!id
		 * 	<= Col_head_sort!id
		 * ```
		 */
		col_head_content(id: any) {
			return [
				this.col_head_title(id),
				this.Col_head_sort(id)
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * result_value!id \
		 * ```
		 */
		result_value(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * result_portion!id 0
		 * ```
		 */
		result_portion(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * Result_portion!id $mol_portion portion <= result_portion!id
		 * ```
		 */
		@ $mol_mem_key
		Result_portion(id: any) {
			const obj = new this.$.$mol_portion()
			
			obj.portion = () => this.result_portion(id)
			
			return obj
		}
	}
	
	export class $mol_bench_head extends $mol_float {
		
		/**
		 * ```tree
		 * horizontal false
		 * ```
		 */
		horizontal() {
			return false
		}
		
		/**
		 * ```tree
		 * event *
		 * 	^
		 * 	click?val <=> event_click?val
		 * ```
		 */
		event() {
			return {
				...super.event(),
				click: (val?: any) => this.event_click(val)
			}
		}
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	title <= hint
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				title: this.hint()
			}
		}
		
		/**
		 * ```tree
		 * event_click?val null
		 * ```
		 */
		@ $mol_mem
		event_click(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * hint @ \Click to sort by this column
		 * ```
		 */
		hint() {
			return this.$.$mol_locale.text( '$mol_bench_head_hint' )
		}
	}
	
}

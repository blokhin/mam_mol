namespace $ {
	export class $mol_text_code extends $mol_stack {
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	mol_text_code_sidebar_showed <= sidebar_showed
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				mol_text_code_sidebar_showed: this.sidebar_showed()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * text \
		 * ```
		 */
		text() {
			return ""
		}
		
		/**
		 * ```tree
		 * text_lines /string
		 * ```
		 */
		text_lines() {
			return [
			] as readonly string[]
		}
		
		/**
		 * ```tree
		 * find_pos* null
		 * ```
		 */
		find_pos(id: any) {
			return null as any
		}
		
		/**
		 * ```tree
		 * uri_base \
		 * ```
		 */
		uri_base() {
			return ""
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Rows
		 * 	<= Copy
		 * ```
		 */
		sub() {
			return [
				this.Rows(),
				this.Copy()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * sidebar_showed false
		 * ```
		 */
		sidebar_showed() {
			return false
		}
		
		/**
		 * ```tree
		 * render_visible_only false
		 * ```
		 */
		render_visible_only() {
			return false
		}
		
		/**
		 * ```tree
		 * row_numb* 0
		 * ```
		 */
		row_numb(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * row_text* \
		 * ```
		 */
		row_text(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * syntax null
		 * ```
		 */
		syntax() {
			return null as any
		}
		
		/**
		 * ```tree
		 * uri_resolve* \
		 * ```
		 */
		uri_resolve(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * highlight \
		 * ```
		 */
		highlight() {
			return ""
		}
		
		/**
		 * ```tree
		 * Row*0 $mol_text_code_row
		 * 	numb_showed <= sidebar_showed
		 * 	numb <= row_numb*
		 * 	text <= row_text*
		 * 	syntax <= syntax
		 * 	uri_resolve* <= uri_resolve*
		 * 	highlight <= highlight
		 * ```
		 */
		@ $mol_mem_key
		Row(id: any) {
			const obj = new this.$.$mol_text_code_row()
			
			obj.numb_showed = () => this.sidebar_showed()
			obj.numb = () => this.row_numb(id)
			obj.text = () => this.row_text(id)
			obj.syntax = () => this.syntax()
			obj.uri_resolve = (id: any) => this.uri_resolve(id)
			obj.highlight = () => this.highlight()
			
			return obj
		}
		
		/**
		 * ```tree
		 * rows / <= Row*0
		 * ```
		 */
		rows() {
			return [
				this.Row("0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Rows $mol_list
		 * 	render_visible_only <= render_visible_only
		 * 	rows <= rows
		 * ```
		 */
		@ $mol_mem
		Rows() {
			const obj = new this.$.$mol_list()
			
			obj.render_visible_only = () => this.render_visible_only()
			obj.rows = () => this.rows()
			
			return obj
		}
		
		/**
		 * ```tree
		 * text_export \
		 * ```
		 */
		text_export() {
			return ""
		}
		
		/**
		 * ```tree
		 * Copy $mol_button_copy
		 * 	hint @ \Copy whole code
		 * 	text <= text_export
		 * ```
		 */
		@ $mol_mem
		Copy() {
			const obj = new this.$.$mol_button_copy()
			
			obj.hint = () => this.$.$mol_locale.text( '$mol_text_code_Copy_hint' )
			obj.text = () => this.text_export()
			
			return obj
		}
	}
	
}


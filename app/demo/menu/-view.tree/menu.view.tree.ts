namespace $ {
	export class $mol_app_demo_menu extends $mol_page {
		
		/**
		 * ```tree
		 * names /string
		 * ```
		 */
		names() {
			return [
			] as readonly string[]
		}
		
		/**
		 * ```tree
		 * widget_tags* /string
		 * ```
		 */
		widget_tags(id: any) {
			return [
			] as readonly string[]
		}
		
		/**
		 * ```tree
		 * widget_aspects* /string
		 * ```
		 */
		widget_aspects(id: any) {
			return [
			] as readonly string[]
		}
		
		/**
		 * ```tree
		 * widget_title* \
		 * ```
		 */
		widget_title(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * search_start? null
		 * ```
		 */
		@ $mol_mem
		search_start(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Body $mol_scroll sub / <= List
		 * ```
		 */
		@ $mol_mem
		Body() {
			const obj = new this.$.$mol_scroll()
			
			obj.sub = () => [
				this.List()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Option* $mol_link
		 * 	arg <= option_arg*
		 * 	sub / <= Option_title*
		 * ```
		 */
		@ $mol_mem_key
		Option(id: any) {
			const obj = new this.$.$mol_link()
			
			obj.arg = () => this.option_arg(id)
			obj.sub = () => [
				this.Option_title(id)
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * filter?val \
		 * ```
		 */
		@ $mol_mem
		filter(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * Filter $mol_search query?val <=> filter?val
		 * ```
		 */
		@ $mol_mem
		Filter() {
			const obj = new this.$.$mol_search()
			
			obj.query = (val?: any) => this.filter(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * ids_tags *
		 * ```
		 */
		ids_tags() {
			return {
			}
		}
		
		/**
		 * ```tree
		 * levels_expanded_default 1
		 * ```
		 */
		levels_expanded_default() {
			return 1
		}
		
		/**
		 * ```tree
		 * levels_expanded <= levels_expanded_default
		 * ```
		 */
		levels_expanded() {
			return this.levels_expanded_default()
		}
		
		/**
		 * ```tree
		 * Tree $mol_tag_tree
		 * 	Item* <= Option*
		 * 	ids_tags <= ids_tags
		 * 	levels_expanded <= levels_expanded
		 * 	tag_names *
		 * 		gui @ \GUI
		 * 		input @ \Input
		 * 		island @ \Island
		 * 		layout @ \Layout
		 * 		nav @ \Navigation
		 * 		menu @ \Menu
		 * 		string @ \Input strings
		 * 		button @ \Button
		 * ```
		 */
		@ $mol_mem
		Tree() {
			const obj = new this.$.$mol_tag_tree()
			
			obj.Item = (id: any) => this.Option(id)
			obj.ids_tags = () => this.ids_tags()
			obj.levels_expanded = () => this.levels_expanded()
			obj.tag_names = () => ({
				gui: this.$.$mol_locale.text( '$mol_app_demo_menu_Tree_tag_names_gui' ),
				input: this.$.$mol_locale.text( '$mol_app_demo_menu_Tree_tag_names_input' ),
				island: this.$.$mol_locale.text( '$mol_app_demo_menu_Tree_tag_names_island' ),
				layout: this.$.$mol_locale.text( '$mol_app_demo_menu_Tree_tag_names_layout' ),
				nav: this.$.$mol_locale.text( '$mol_app_demo_menu_Tree_tag_names_nav' ),
				menu: this.$.$mol_locale.text( '$mol_app_demo_menu_Tree_tag_names_menu' ),
				string: this.$.$mol_locale.text( '$mol_app_demo_menu_Tree_tag_names_string' ),
				button: this.$.$mol_locale.text( '$mol_app_demo_menu_Tree_tag_names_button' )
			})
			
			return obj
		}
		
		/**
		 * ```tree
		 * List $mol_list rows /
		 * 	<= Filter
		 * 	<= Tree
		 * ```
		 */
		@ $mol_mem
		List() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Filter(),
				this.Tree()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * option_arg* *
		 * ```
		 */
		option_arg(id: any) {
			return {
			}
		}
		
		/**
		 * ```tree
		 * option_title* \
		 * ```
		 */
		option_title(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * Option_title* $mol_dimmer
		 * 	haystack <= option_title*
		 * 	needle <= filter?val
		 * ```
		 */
		@ $mol_mem_key
		Option_title(id: any) {
			const obj = new this.$.$mol_dimmer()
			
			obj.haystack = () => this.option_title(id)
			obj.needle = () => this.filter()
			
			return obj
		}
	}
	
}


namespace $ {
	export class $mol_page_demo extends $mol_example_large {
		
		/**
		 * ```tree
		 * title \Page with header, body and footer
		 * ```
		 */
		title() {
			return "Page with header, body and footer"
		}
		
		/**
		 * ```tree
		 * sub / <= Page
		 * ```
		 */
		sub() {
			return [
				this.Page()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags /
		 * 	\container
		 * 	\header
		 * 	\footer
		 * 	\toolbar
		 * 	\app
		 * 	\bar
		 * 	\bottom
		 * 	\navigator
		 * ```
		 */
		tags() {
			return [
				"container",
				"header",
				"footer",
				"toolbar",
				"app",
				"bar",
				"bottom",
				"navigator"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * aspects / \Widget/Layout
		 * ```
		 */
		aspects() {
			return [
				"Widget/Layout"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Button_tools $mol_button_minor title \Toolbar Button
		 * ```
		 */
		@ $mol_mem
		Button_tools() {
			const obj = new this.$.$mol_button_minor()
			
			obj.title = () => "Toolbar Button"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Text $mol_filler
		 * ```
		 */
		@ $mol_mem
		Text() {
			const obj = new this.$.$mol_filler()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Button_foot $mol_button_minor title \Footer Button
		 * ```
		 */
		@ $mol_mem
		Button_foot() {
			const obj = new this.$.$mol_button_minor()
			
			obj.title = () => "Footer Button"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Page $mol_page
		 * 	tools / <= Button_tools
		 * 	body / <= Text
		 * 	foot / <= Button_foot
		 * ```
		 */
		@ $mol_mem
		Page() {
			const obj = new this.$.$mol_page()
			
			obj.tools = () => [
				this.Button_tools()
			] as readonly any[]
			obj.body = () => [
				this.Text()
			] as readonly any[]
			obj.foot = () => [
				this.Button_foot()
			] as readonly any[]
			
			return obj
		}
	}
	
}


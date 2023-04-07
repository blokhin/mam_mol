namespace $ {
	export class $mol_link_iconed_demo extends $mol_example_small {
		
		/**
		 * ```tree
		 * title \Link with icon
		 * ```
		 */
		title() {
			return "Link with icon"
		}
		
		/**
		 * ```tree
		 * sub / <= Blocks
		 * ```
		 */
		sub() {
			return [
				this.Blocks()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags /
		 * 	\$mol_link
		 * 	\$mol_icon
		 * 	\$mol_string
		 * 	\link
		 * 	\icon
		 * 	\url
		 * ```
		 */
		tags() {
			return [
				"$mol_link",
				"$mol_icon",
				"$mol_string",
				"link",
				"icon",
				"url"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * aspects / \Widget/Navigation
		 * ```
		 */
		aspects() {
			return [
				"Widget/Navigation"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * uri?val \https://www.google.com/search?q=%24mol
		 * ```
		 */
		@ $mol_mem
		uri(val?: any) {
			if ( val !== undefined ) return val as never
			return "https://www.google.com/search?q=%24mol"
		}
		
		/**
		 * ```tree
		 * Input $mol_string value?val <=> uri?val
		 * ```
		 */
		@ $mol_mem
		Input() {
			const obj = new this.$.$mol_string()
			
			obj.value = (val?: any) => this.uri(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Output $mol_link_iconed uri <= uri?val
		 * ```
		 */
		@ $mol_mem
		Output() {
			const obj = new this.$.$mol_link_iconed()
			
			obj.uri = () => this.uri()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Blocks $mol_list rows /
		 * 	<= Input
		 * 	<= Output
		 * ```
		 */
		@ $mol_mem
		Blocks() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Input(),
				this.Output()
			] as readonly any[]
			
			return obj
		}
	}
	
}


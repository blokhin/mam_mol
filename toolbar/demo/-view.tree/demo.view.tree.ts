namespace $ {
	export class $mol_toolbar_demo extends $mol_example_small {
		
		/**
		 * ```tree
		 * title \Foldable toolbar demo
		 * ```
		 */
		title() {
			return "Foldable toolbar demo"
		}
		
		/**
		 * ```tree
		 * sub / <= Toolbar
		 * ```
		 */
		sub() {
			return [
				this.Toolbar()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags /
		 * 	\$mol_string
		 * 	\$mol_button
		 * 	\$mol_icon
		 * 	\toolbar
		 * 	\button
		 * 	\icon
		 * ```
		 */
		tags() {
			return [
				"$mol_string",
				"$mol_button",
				"$mol_icon",
				"toolbar",
				"button",
				"icon"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * aspects / \Widget
		 * ```
		 */
		aspects() {
			return [
				"Widget"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * search_hint \Search...
		 * ```
		 */
		search_hint() {
			return "Search..."
		}
		
		/**
		 * ```tree
		 * Search $mol_string hint <= search_hint
		 * ```
		 */
		@ $mol_mem
		Search() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => this.search_hint()
			
			return obj
		}
		
		/**
		 * ```tree
		 * replace_hint \Replace...
		 * ```
		 */
		replace_hint() {
			return "Replace..."
		}
		
		/**
		 * ```tree
		 * Replace $mol_string hint <= replace_hint
		 * ```
		 */
		@ $mol_mem
		Replace() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => this.replace_hint()
			
			return obj
		}
		
		/**
		 * ```tree
		 * approve_label \Approve
		 * ```
		 */
		approve_label() {
			return "Approve"
		}
		
		/**
		 * ```tree
		 * Approve $mol_button_major title <= approve_label
		 * ```
		 */
		@ $mol_mem
		Approve() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => this.approve_label()
			
			return obj
		}
		
		/**
		 * ```tree
		 * decline_label \Decline
		 * ```
		 */
		decline_label() {
			return "Decline"
		}
		
		/**
		 * ```tree
		 * Decline $mol_button_minor title <= decline_label
		 * ```
		 */
		@ $mol_mem
		Decline() {
			const obj = new this.$.$mol_button_minor()
			
			obj.title = () => this.decline_label()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Copy_icon $mol_icon_content_copy
		 * ```
		 */
		@ $mol_mem
		Copy_icon() {
			const obj = new this.$.$mol_icon_content_copy()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Copy $mol_button_minor sub / <= Copy_icon
		 * ```
		 */
		@ $mol_mem
		Copy() {
			const obj = new this.$.$mol_button_minor()
			
			obj.sub = () => [
				this.Copy_icon()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Cut_icon $mol_icon_content_cut
		 * ```
		 */
		@ $mol_mem
		Cut_icon() {
			const obj = new this.$.$mol_icon_content_cut()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Cut $mol_button_minor sub / <= Cut_icon
		 * ```
		 */
		@ $mol_mem
		Cut() {
			const obj = new this.$.$mol_button_minor()
			
			obj.sub = () => [
				this.Cut_icon()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Paste_icon $mol_icon_content_paste
		 * ```
		 */
		@ $mol_mem
		Paste_icon() {
			const obj = new this.$.$mol_icon_content_paste()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Paste $mol_button_minor sub / <= Paste_icon
		 * ```
		 */
		@ $mol_mem
		Paste() {
			const obj = new this.$.$mol_button_minor()
			
			obj.sub = () => [
				this.Paste_icon()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Delete_icon $mol_icon_delete
		 * ```
		 */
		@ $mol_mem
		Delete_icon() {
			const obj = new this.$.$mol_icon_delete()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Delete $mol_button_minor sub / <= Delete_icon
		 * ```
		 */
		@ $mol_mem
		Delete() {
			const obj = new this.$.$mol_button_minor()
			
			obj.sub = () => [
				this.Delete_icon()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Toolbar $mol_toolbar items /
		 * 	<= Search
		 * 	<= Replace
		 * 	<= Approve
		 * 	<= Decline
		 * 	<= Copy
		 * 	<= Cut
		 * 	<= Paste
		 * 	<= Delete
		 * ```
		 */
		@ $mol_mem
		Toolbar() {
			const obj = new this.$.$mol_toolbar()
			
			obj.items = () => [
				this.Search(),
				this.Replace(),
				this.Approve(),
				this.Decline(),
				this.Copy(),
				this.Cut(),
				this.Paste(),
				this.Delete()
			] as readonly any[]
			
			return obj
		}
	}
	
}


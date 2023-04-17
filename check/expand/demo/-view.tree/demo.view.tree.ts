namespace $ {
	export class $mol_check_expand_demo extends $mol_example_small {
		
		/**
		 * ```tree
		 * title \Checkbox-expand in various states
		 * ```
		 */
		title() {
			return "Checkbox-expand in various states"
		}
		
		/**
		 * ```tree
		 * sub / <= Demo_items
		 * ```
		 */
		sub() {
			return [
				this.Demo_items()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags / \fold
		 * ```
		 */
		tags() {
			return [
				"fold"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * aspects /
		 * 	\Widget/Control/Button
		 * 	\Type/Boolean
		 * ```
		 */
		aspects() {
			return [
				"Widget/Control/Button",
				"Type/Boolean"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * base_expanded?val false
		 * ```
		 */
		@ $mol_mem
		base_expanded(val?: any) {
			if ( val !== undefined ) return val as never
			return false
		}
		
		/**
		 * ```tree
		 * c1Label \Base
		 * ```
		 */
		c1Label() {
			return "Base"
		}
		
		/**
		 * ```tree
		 * Labeled_base $mol_check_expand
		 * 	checked?val <=> base_expanded?val
		 * 	title <= c1Label
		 * ```
		 */
		@ $mol_mem
		Labeled_base() {
			const obj = new this.$.$mol_check_expand()
			
			obj.checked = (val?: any) => this.base_expanded(val)
			obj.title = () => this.c1Label()
			
			return obj
		}
		
		/**
		 * ```tree
		 * c2Label \Expanded
		 * ```
		 */
		c2Label() {
			return "Expanded"
		}
		
		/**
		 * ```tree
		 * expanded_expanded?val true
		 * ```
		 */
		@ $mol_mem
		expanded_expanded(val?: any) {
			if ( val !== undefined ) return val as never
			return true
		}
		
		/**
		 * ```tree
		 * Labeled_expanded $mol_check_expand
		 * 	title <= c2Label
		 * 	checked?val <=> expanded_expanded?val
		 * ```
		 */
		@ $mol_mem
		Labeled_expanded() {
			const obj = new this.$.$mol_check_expand()
			
			obj.title = () => this.c2Label()
			obj.checked = (val?: any) => this.expanded_expanded(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * c5Label \Non expandable
		 * ```
		 */
		c5Label() {
			return "Non expandable"
		}
		
		/**
		 * ```tree
		 * Disabled $mol_check_expand
		 * 	title <= c5Label
		 * 	disabled true
		 * ```
		 */
		@ $mol_mem
		Disabled() {
			const obj = new this.$.$mol_check_expand()
			
			obj.title = () => this.c5Label()
			obj.disabled = () => true
			
			return obj
		}
		
		/**
		 * ```tree
		 * Empty_base $mol_check_expand checked?val <=> base_expanded?val
		 * ```
		 */
		@ $mol_mem
		Empty_base() {
			const obj = new this.$.$mol_check_expand()
			
			obj.checked = (val?: any) => this.base_expanded(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Empty_expanded $mol_check_expand checked?val <=> expanded_expanded?val
		 * ```
		 */
		@ $mol_mem
		Empty_expanded() {
			const obj = new this.$.$mol_check_expand()
			
			obj.checked = (val?: any) => this.expanded_expanded(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Demo_items $mol_list rows /
		 * 	<= Labeled_base
		 * 	<= Labeled_expanded
		 * 	<= Disabled
		 * 	<= Empty_base
		 * 	<= Empty_expanded
		 * ```
		 */
		@ $mol_mem
		Demo_items() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Labeled_base(),
				this.Labeled_expanded(),
				this.Disabled(),
				this.Empty_base(),
				this.Empty_expanded()
			] as readonly any[]
			
			return obj
		}
	}
	
}


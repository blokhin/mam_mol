namespace $ {
	export class $mol_string_demo extends $mol_example_small {
		
		/**
		 * ```tree
		 * title \String input field in various states
		 * ```
		 */
		title() {
			return "String input field in various states"
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Simple
		 * 	<= Hint
		 * 	<= Filled
		 * 	<= Disabled
		 * 	<= Button
		 * ```
		 */
		sub() {
			return [
				this.Simple(),
				this.Hint(),
				this.Filled(),
				this.Disabled(),
				this.Button()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags /
		 * 	\input
		 * 	\string
		 * 	\text
		 * 	\field
		 * ```
		 */
		tags() {
			return [
				"input",
				"string",
				"text",
				"field"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * aspects /
		 * 	\Widget/Control
		 * 	\Type/String
		 * ```
		 */
		aspects() {
			return [
				"Widget/Control",
				"Type/String"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * name?val \
		 * ```
		 */
		@ $mol_mem
		name(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * Simple $mol_string value?val <=> name?val
		 * ```
		 */
		@ $mol_mem
		Simple() {
			const obj = new this.$.$mol_string()
			
			obj.value = (val?: any) => this.name(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Hint $mol_string
		 * 	hint \Batman
		 * 	value?val <=> name?val
		 * ```
		 */
		@ $mol_mem
		Hint() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => "Batman"
			obj.value = (val?: any) => this.name(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * name2?val \Jocker
		 * ```
		 */
		@ $mol_mem
		name2(val?: any) {
			if ( val !== undefined ) return val as never
			return "Jocker"
		}
		
		/**
		 * ```tree
		 * Filled $mol_string value?val <=> name2?val
		 * ```
		 */
		@ $mol_mem
		Filled() {
			const obj = new this.$.$mol_string()
			
			obj.value = (val?: any) => this.name2(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Disabled $mol_string
		 * 	disabled true
		 * 	value?val <=> name2?val
		 * ```
		 */
		@ $mol_mem
		Disabled() {
			const obj = new this.$.$mol_string()
			
			obj.disabled = () => true
			obj.value = (val?: any) => this.name2(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Button $mol_string_button value?val <=> name2?val
		 * ```
		 */
		@ $mol_mem
		Button() {
			const obj = new this.$.$mol_string_button()
			
			obj.value = (val?: any) => this.name2(val)
			
			return obj
		}
	}
	
}


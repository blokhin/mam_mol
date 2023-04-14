namespace $ {
	export class $mol_portion_indicator extends $mol_view {
		
		/**
		 * ```tree
		 * style *
		 * 	^
		 * 	width <= width_style
		 * ```
		 */
		style() {
			return {
				...super.style(),
				width: this.width_style()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * width_style \0
		 * ```
		 */
		width_style() {
			return "0"
		}
	}
	
	export class $mol_portion extends $mol_view {
		
		/**
		 * ```tree
		 * portion 0
		 * ```
		 */
		portion() {
			return 0
		}
		
		/**
		 * ```tree
		 * sub / <= indicator
		 * ```
		 */
		sub() {
			return [
				this.indicator()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * indicator_width_style \0
		 * ```
		 */
		indicator_width_style() {
			return "0"
		}
		
		/**
		 * ```tree
		 * indicator $mol_portion_indicator width_style <= indicator_width_style
		 * ```
		 */
		@ $mol_mem
		indicator() {
			const obj = new this.$.$mol_portion_indicator()
			
			obj.width_style = () => this.indicator_width_style()
			
			return obj
		}
	}
	
}


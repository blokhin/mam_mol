namespace $ {
	export class $mol_frame_demo extends $mol_example_large {
		
		/**
		 * ```tree
		 * sub / <= Frame
		 * ```
		 */
		sub() {
			return [
				this.Frame()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags /
		 * 	\frame
		 * 	\iframe
		 * 	\container
		 * ```
		 */
		tags() {
			return [
				"frame",
				"iframe",
				"container"
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
		 * Frame $mol_frame
		 * 	title \Another page inside that
		 * 	uri \https://mol.hyoo.ru/
		 * ```
		 */
		@ $mol_mem
		Frame() {
			const obj = new this.$.$mol_frame()
			
			obj.title = () => "Another page inside that"
			obj.uri = () => "https://mol.hyoo.ru/"
			
			return obj
		}
	}
	
}


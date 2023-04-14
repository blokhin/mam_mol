namespace $ {
	export class $mol_perf_uibench_anim extends $mol_view {
		
		/**
		 * ```tree
		 * state null
		 * ```
		 */
		state() {
			return null as any
		}
		
		/**
		 * ```tree
		 * attr_static *
		 * 	^
		 * 	class \Anim
		 * ```
		 */
		attr_static() {
			return {
				...super.attr_static(),
				class: "Anim"
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * sub <= boxes
		 * ```
		 */
		sub() {
			return this.boxes()
		}
		
		/**
		 * ```tree
		 * Box* $mol_perf_uibench_anim_box state <= box_state*
		 * ```
		 */
		@ $mol_mem_key
		Box(id: any) {
			const obj = new this.$.$mol_perf_uibench_anim_box()
			
			obj.state = () => this.box_state(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * boxes /
		 * ```
		 */
		boxes() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * box_state* null
		 * ```
		 */
		box_state(id: any) {
			return null as any
		}
	}
	
	export class $mol_perf_uibench_anim_box extends $mol_view {
		
		/**
		 * ```tree
		 * state null
		 * ```
		 */
		state() {
			return null as any
		}
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	class \AnimBox
		 * 	data-id <= id
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				class: "AnimBox",
				"data-id": this.id()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * style *
		 * 	^
		 * 	borderRadius <= style_radius
		 * 	background <= style_color
		 * ```
		 */
		style() {
			return {
				...super.style(),
				borderRadius: this.style_radius(),
				background: this.style_color()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * id \
		 * ```
		 */
		id() {
			return ""
		}
		
		/**
		 * ```tree
		 * style_radius \
		 * ```
		 */
		style_radius() {
			return ""
		}
		
		/**
		 * ```tree
		 * style_color \
		 * ```
		 */
		style_color() {
			return ""
		}
	}
	
}


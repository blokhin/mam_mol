namespace $ {
	export class $mol_plot_graph extends $mol_svg_group {
		
		/**
		 * ```tree
		 * series_x /number
		 * ```
		 */
		series_x() {
			return [
			] as readonly number[]
		}
		
		/**
		 * ```tree
		 * series_y /number
		 * ```
		 */
		series_y() {
			return [
			] as readonly number[]
		}
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	mol_plot_graph_type <= type
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				mol_plot_graph_type: this.type()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * style *
		 * 	^
		 * 	color <= color
		 * ```
		 */
		style() {
			return {
				...super.style(),
				color: this.color()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * viewport $mol_vector_2d /
		 * 	<= viewport_x
		 * 	<= viewport_y
		 * ```
		 */
		@ $mol_mem
		viewport() {
			const obj = new this.$.$mol_vector_2d(
				this.viewport_x(),
				this.viewport_y()
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * shift /number
		 * 	0
		 * 	0
		 * ```
		 */
		shift() {
			return [
				0,
				0
			] as readonly number[]
		}
		
		/**
		 * ```tree
		 * scale /number
		 * 	1
		 * 	1
		 * ```
		 */
		scale() {
			return [
				1,
				1
			] as readonly number[]
		}
		
		/**
		 * ```tree
		 * cursor_position $mol_vector_2d /
		 * 	NaN
		 * 	NaN
		 * ```
		 */
		@ $mol_mem
		cursor_position() {
			const obj = new this.$.$mol_vector_2d(
				NaN,
				NaN
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions_pane $mol_vector_2d /
		 * 	<= dimensions_pane_x
		 * 	<= dimensions_pane_y
		 * ```
		 */
		@ $mol_mem
		dimensions_pane() {
			const obj = new this.$.$mol_vector_2d(
				this.dimensions_pane_x(),
				this.dimensions_pane_y()
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions $mol_vector_2d /
		 * 	<= dimensions_x
		 * 	<= dimensions_y
		 * ```
		 */
		@ $mol_mem
		dimensions() {
			const obj = new this.$.$mol_vector_2d(
				this.dimensions_x(),
				this.dimensions_y()
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * size_real $mol_vector_2d /
		 * 	0
		 * 	0
		 * ```
		 */
		@ $mol_mem
		size_real() {
			const obj = new this.$.$mol_vector_2d(
				0,
				0
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * gap $mol_vector_2d /
		 * 	<= gap_x
		 * 	<= gap_y
		 * ```
		 */
		@ $mol_mem
		gap() {
			const obj = new this.$.$mol_vector_2d(
				this.gap_x(),
				this.gap_y()
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * repos_x* 0
		 * ```
		 */
		repos_x(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * repos_y* 0
		 * ```
		 */
		repos_y(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * indexes /number
		 * ```
		 */
		indexes() {
			return [
			] as readonly number[]
		}
		
		/**
		 * ```tree
		 * points /readonly(number)[]
		 * ```
		 */
		points() {
			return [
			] as readonly (readonly(number)[])[]
		}
		
		/**
		 * ```tree
		 * front /$mol_svg
		 * ```
		 */
		front() {
			return [
			] as readonly $mol_svg[]
		}
		
		/**
		 * ```tree
		 * back /$mol_svg
		 * ```
		 */
		back() {
			return [
			] as readonly $mol_svg[]
		}
		
		/**
		 * ```tree
		 * Hint $mol_svg_title title <= hint
		 * ```
		 */
		@ $mol_mem
		Hint() {
			const obj = new this.$.$mol_svg_title()
			
			obj.title = () => this.hint()
			
			return obj
		}
		
		/**
		 * ```tree
		 * hue +NaN
		 * ```
		 */
		hue() {
			return +NaN
		}
		
		/**
		 * ```tree
		 * Sample null
		 * ```
		 */
		Sample() {
			return null as any
		}
		
		/**
		 * ```tree
		 * type \solid
		 * ```
		 */
		type() {
			return "solid"
		}
		
		/**
		 * ```tree
		 * color \
		 * ```
		 */
		color() {
			return ""
		}
		
		/**
		 * ```tree
		 * viewport_x $mol_vector_range /
		 * 	Infinity
		 * 	-Infinity
		 * ```
		 */
		@ $mol_mem
		viewport_x() {
			const obj = new this.$.$mol_vector_range(
				Infinity,
				-Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * viewport_y $mol_vector_range /
		 * 	Infinity
		 * 	-Infinity
		 * ```
		 */
		@ $mol_mem
		viewport_y() {
			const obj = new this.$.$mol_vector_range(
				Infinity,
				-Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions_pane_x $mol_vector_range /
		 * 	Infinity
		 * 	-Infinity
		 * ```
		 */
		@ $mol_mem
		dimensions_pane_x() {
			const obj = new this.$.$mol_vector_range(
				Infinity,
				-Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions_pane_y $mol_vector_range /
		 * 	Infinity
		 * 	-Infinity
		 * ```
		 */
		@ $mol_mem
		dimensions_pane_y() {
			const obj = new this.$.$mol_vector_range(
				Infinity,
				-Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions_x $mol_vector_range /
		 * 	Infinity
		 * 	-Infinity
		 * ```
		 */
		@ $mol_mem
		dimensions_x() {
			const obj = new this.$.$mol_vector_range(
				Infinity,
				-Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * dimensions_y $mol_vector_range /
		 * 	Infinity
		 * 	-Infinity
		 * ```
		 */
		@ $mol_mem
		dimensions_y() {
			const obj = new this.$.$mol_vector_range(
				Infinity,
				-Infinity
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * gap_x $mol_vector_range /
		 * 	0
		 * 	0
		 * ```
		 */
		@ $mol_mem
		gap_x() {
			const obj = new this.$.$mol_vector_range(
				0,
				0
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * gap_y $mol_vector_range /
		 * 	0
		 * 	0
		 * ```
		 */
		@ $mol_mem
		gap_y() {
			const obj = new this.$.$mol_vector_range(
				0,
				0
			)
			
			return obj
		}
		
		/**
		 * ```tree
		 * title \
		 * ```
		 */
		title() {
			return ""
		}
		
		/**
		 * ```tree
		 * hint <= title
		 * ```
		 */
		hint() {
			return this.title()
		}
	}
	
	export class $mol_plot_graph_sample extends $mol_view {
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	mol_plot_graph_type <= type
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				mol_plot_graph_type: this.type()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * style *
		 * 	^
		 * 	color <= color
		 * ```
		 */
		style() {
			return {
				...super.style(),
				color: this.color()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * type \solid
		 * ```
		 */
		type() {
			return "solid"
		}
		
		/**
		 * ```tree
		 * color \black
		 * ```
		 */
		color() {
			return "black"
		}
	}
	
}


namespace $ {
	export class $mol_perf_dopes extends $mol_view {
		
		/**
		 * ```tree
		 * title \Dopes
		 * ```
		 */
		title() {
			return "Dopes"
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Speed
		 * 	<= Start
		 * 	<= Stop
		 * 	<= Labels
		 * ```
		 */
		sub() {
			return [
				this.Speed(),
				this.Start(),
				this.Stop(),
				this.Labels()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Label* $mol_view
		 * 	style *
		 * 		color <= label_color*
		 * 		transform <= label_transform*
		 * 	sub / \Dope
		 * ```
		 */
		@ $mol_mem_key
		Label(id: any) {
			const obj = new this.$.$mol_view()
			
			obj.style = () => ({
				color: this.label_color(id),
				transform: this.label_transform(id)
			} as Record< string, any >)
			obj.sub = () => [
				"Dope"
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * speed \{speed} Dopes/s
		 * ```
		 */
		speed() {
			return "{speed} Dopes/s"
		}
		
		/**
		 * ```tree
		 * Speed $mol_view sub / <= speed
		 * ```
		 */
		@ $mol_mem
		Speed() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.speed()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * start?event null
		 * ```
		 */
		@ $mol_mem
		start(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Start $mol_button_major
		 * 	title \@ Start
		 * 	click?event <=> start?event
		 * ```
		 */
		@ $mol_mem
		Start() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => "@ Start"
			obj.click = (event?: any) => this.start(event)
			
			return obj
		}
		
		/**
		 * ```tree
		 * stop?event null
		 * ```
		 */
		@ $mol_mem
		stop(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Stop $mol_button_major
		 * 	title \@ Stop
		 * 	click?event <=> stop?event
		 * ```
		 */
		@ $mol_mem
		Stop() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => "@ Stop"
			obj.click = (event?: any) => this.stop(event)
			
			return obj
		}
		
		/**
		 * ```tree
		 * labels /
		 * ```
		 */
		labels() {
			return [
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Labels $mol_view sub <= labels
		 * ```
		 */
		@ $mol_mem
		Labels() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => this.labels()
			
			return obj
		}
		
		/**
		 * ```tree
		 * label_color* \
		 * ```
		 */
		label_color(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * label_transform* \
		 * ```
		 */
		label_transform(id: any) {
			return ""
		}
	}
	
}


namespace $ {
	export class $mol_link extends $mol_view {
		
		/**
		 * ```tree
		 * dom_name \a
		 * ```
		 */
		dom_name() {
			return "a"
		}
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	href <= uri
		 * 	title <= hint
		 * 	target <= target
		 * 	download <= file_name
		 * 	mol_link_current <= current
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				href: this.uri(),
				title: this.hint(),
				target: this.target(),
				download: this.file_name(),
				mol_link_current: this.current()
			}
		}
		
		/**
		 * ```tree
		 * sub /$mol_view_content <= title
		 * ```
		 */
		sub() {
			return [
				this.title()
			] as readonly $mol_view_content[]
		}
		
		/**
		 * ```tree
		 * arg *
		 * ```
		 */
		arg() {
			return {
			}
		}
		
		/**
		 * ```tree
		 * event *
		 * 	^
		 * 	click?event <=> click?event
		 * ```
		 */
		event() {
			return {
				...super.event(),
				click: (event?: any) => this.click(event)
			}
		}
		
		/**
		 * ```tree
		 * uri \
		 * ```
		 */
		uri() {
			return ""
		}
		
		/**
		 * ```tree
		 * hint \
		 * ```
		 */
		hint() {
			return ""
		}
		
		/**
		 * ```tree
		 * target \_self
		 * ```
		 */
		target() {
			return "_self"
		}
		
		/**
		 * ```tree
		 * file_name \
		 * ```
		 */
		file_name() {
			return ""
		}
		
		/**
		 * ```tree
		 * current false
		 * ```
		 */
		current() {
			return false
		}
		
		/**
		 * ```tree
		 * event_click?event null
		 * ```
		 */
		@ $mol_mem
		event_click(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * click?event <=> event_click?event
		 * ```
		 */
		click(event?: any) {
			return this.event_click(event)
		}
	}
	
}

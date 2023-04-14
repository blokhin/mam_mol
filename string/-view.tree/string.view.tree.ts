namespace $ {
	export class $mol_string extends $mol_view {
		
		/**
		 * ```tree
		 * dom_name \input
		 * ```
		 */
		dom_name() {
			return "input"
		}
		
		/**
		 * ```tree
		 * enabled true
		 * ```
		 */
		enabled() {
			return true
		}
		
		/**
		 * ```tree
		 * minimal_height 40
		 * ```
		 */
		minimal_height() {
			return 40
		}
		
		/**
		 * ```tree
		 * autocomplete false
		 * ```
		 */
		autocomplete() {
			return false
		}
		
		/**
		 * ```tree
		 * selection?val /number
		 * 	0
		 * 	0
		 * ```
		 */
		@ $mol_mem
		selection(val?: any) {
			if ( val !== undefined ) return val as never
			return [
				0,
				0
			] as readonly number[]
		}
		
		/**
		 * ```tree
		 * auto / <= selection_watcher
		 * ```
		 */
		auto() {
			return [
				this.selection_watcher()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * field *
		 * 	^
		 * 	disabled <= disabled
		 * 	value <= value_changed?val
		 * 	placeholder <= hint_visible
		 * 	spellcheck <= spellcheck
		 * 	autocomplete <= autocomplete_native
		 * 	selectionEnd <= selection_end
		 * 	selectionStart <= selection_start
		 * 	inputMode <= keyboard
		 * 	enterkeyhint <= enter
		 * ```
		 */
		field() {
			return {
				...super.field(),
				disabled: this.disabled(),
				value: this.value_changed(),
				placeholder: this.hint_visible(),
				spellcheck: this.spellcheck(),
				autocomplete: this.autocomplete_native(),
				selectionEnd: this.selection_end(),
				selectionStart: this.selection_start(),
				inputMode: this.keyboard(),
				enterkeyhint: this.enter()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * attr *
		 * 	^
		 * 	maxlength <= length_max
		 * 	type <= type?val
		 * ```
		 */
		attr() {
			return {
				...super.attr(),
				maxlength: this.length_max(),
				type: this.type()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * event *
		 * 	^
		 * 	input?event <=> event_change?event
		 * ```
		 */
		event() {
			return {
				...super.event(),
				input: (event?: any) => this.event_change(event)
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * plugins / <= Submit
		 * ```
		 */
		plugins() {
			return [
				this.Submit()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * selection_watcher null
		 * ```
		 */
		selection_watcher() {
			return null as any
		}
		
		/**
		 * ```tree
		 * disabled false
		 * ```
		 */
		disabled() {
			return false
		}
		
		/**
		 * ```tree
		 * value?val \
		 * ```
		 */
		@ $mol_mem
		value(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * value_changed?val <=> value?val
		 * ```
		 */
		value_changed(val?: any) {
			return this.value(val)
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
		 * hint_visible <= hint
		 * ```
		 */
		hint_visible() {
			return this.hint()
		}
		
		/**
		 * ```tree
		 * spellcheck true
		 * ```
		 */
		spellcheck() {
			return true
		}
		
		/**
		 * ```tree
		 * autocomplete_native \
		 * ```
		 */
		autocomplete_native() {
			return ""
		}
		
		/**
		 * ```tree
		 * selection_end 0
		 * ```
		 */
		selection_end() {
			return 0
		}
		
		/**
		 * ```tree
		 * selection_start 0
		 * ```
		 */
		selection_start() {
			return 0
		}
		
		/**
		 * ```tree
		 * keyboard \text
		 * ```
		 */
		keyboard() {
			return "text"
		}
		
		/**
		 * ```tree
		 * enter \go
		 * ```
		 */
		enter() {
			return "go"
		}
		
		/**
		 * ```tree
		 * length_max +Infinity
		 * ```
		 */
		length_max() {
			return +Infinity
		}
		
		/**
		 * ```tree
		 * type?val \text
		 * ```
		 */
		@ $mol_mem
		type(val?: any) {
			if ( val !== undefined ) return val as never
			return "text"
		}
		
		/**
		 * ```tree
		 * event_change?event null
		 * ```
		 */
		@ $mol_mem
		event_change(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * submit_with_ctrl false
		 * ```
		 */
		submit_with_ctrl() {
			return false
		}
		
		/**
		 * ```tree
		 * submit?event null
		 * ```
		 */
		@ $mol_mem
		submit(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Submit $mol_hotkey
		 * 	mod_ctrl <= submit_with_ctrl
		 * 	key * enter?event <=> submit?event
		 * ```
		 */
		@ $mol_mem
		Submit() {
			const obj = new this.$.$mol_hotkey()
			
			obj.mod_ctrl = () => this.submit_with_ctrl()
			obj.key = () => ({
				enter: (event?: any) => this.submit(event)
			} as Record< string, any >)
			
			return obj
		}
	}
	
}


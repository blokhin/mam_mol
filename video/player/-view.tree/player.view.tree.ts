namespace $ {
	export class $mol_video_player extends $mol_view {
		
		/**
		 * ```tree
		 * dom_name \video
		 * ```
		 */
		dom_name() {
			return "video"
		}
		
		/**
		 * ```tree
		 * playing?val false
		 * ```
		 */
		@ $mol_mem
		playing(val?: any) {
			if ( val !== undefined ) return val as never
			return false
		}
		
		/**
		 * ```tree
		 * volume?val 0
		 * ```
		 */
		@ $mol_mem
		volume(val?: any) {
			if ( val !== undefined ) return val as never
			return 0
		}
		
		/**
		 * ```tree
		 * time?val 0
		 * ```
		 */
		@ $mol_mem
		time(val?: any) {
			if ( val !== undefined ) return val as never
			return 0
		}
		
		/**
		 * ```tree
		 * duration 0
		 * ```
		 */
		duration() {
			return 0
		}
		
		/**
		 * ```tree
		 * attr *
		 * 	src <= uri
		 * 	controls <= controls
		 * 	autoplay <= autoplay
		 * 	loop <= loop
		 * 	poster <= poster
		 * ```
		 */
		attr() {
			return {
				src: this.uri(),
				controls: this.controls(),
				autoplay: this.autoplay(),
				loop: this.loop(),
				poster: this.poster()
			} as Record< string, any >
		}
		
		/**
		 * ```tree
		 * event *
		 * 	volumechange?event <=> revolume?event
		 * 	timeupdate?event <=> retime?event
		 * 	durationchange?event <=> redurate?event
		 * 	playing?event <=> play_started?event
		 * 	play?event <=> play?event
		 * 	pause?event <=> pause?event
		 * ```
		 */
		event() {
			return {
				volumechange: (event?: any) => this.revolume(event),
				timeupdate: (event?: any) => this.retime(event),
				durationchange: (event?: any) => this.redurate(event),
				playing: (event?: any) => this.play_started(event),
				play: (event?: any) => this.play(event),
				pause: (event?: any) => this.pause(event)
			} as Record< string, any >
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
		 * controls true
		 * ```
		 */
		controls() {
			return true
		}
		
		/**
		 * ```tree
		 * autoplay true
		 * ```
		 */
		autoplay() {
			return true
		}
		
		/**
		 * ```tree
		 * loop false
		 * ```
		 */
		loop() {
			return false
		}
		
		/**
		 * ```tree
		 * poster \
		 * ```
		 */
		poster() {
			return ""
		}
		
		/**
		 * ```tree
		 * revolume?event null
		 * ```
		 */
		@ $mol_mem
		revolume(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * retime?event null
		 * ```
		 */
		@ $mol_mem
		retime(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * redurate?event null
		 * ```
		 */
		@ $mol_mem
		redurate(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * play_started?event null
		 * ```
		 */
		@ $mol_mem
		play_started(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * play?event null
		 * ```
		 */
		@ $mol_mem
		play(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
		
		/**
		 * ```tree
		 * pause?event null
		 * ```
		 */
		@ $mol_mem
		pause(event?: any) {
			if ( event !== undefined ) return event as never
			return null as any
		}
	}
	
}


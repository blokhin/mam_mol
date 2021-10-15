namespace $ {
	export class $mol_link_demo extends $mol_list {
		
		/**
		 * ```tree
		 * title @ \Some hyperlinks
		 * ```
		 */
		title() {
			return this.$.$mol_locale.text( '$mol_link_demo_title' )
		}
		
		/**
		 * ```tree
		 * rows /
		 * 	<= This
		 * 	<= Red
		 * 	<= Green
		 * 	<= Blue
		 * 	<= External
		 * 	<= Download
		 * ```
		 */
		rows() {
			return [
				this.This(),
				this.Red(),
				this.Green(),
				this.Blue(),
				this.External(),
				this.Download()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * this_label @ \This page
		 * ```
		 */
		this_label() {
			return this.$.$mol_locale.text( '$mol_link_demo_this_label' )
		}
		
		/**
		 * ```tree
		 * This $mol_link sub / <= this_label
		 * ```
		 */
		@ $mol_mem
		This() {
			const obj = new this.$.$mol_link()
			
			obj.sub = () => [
				this.this_label()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * red_label @ \Red
		 * ```
		 */
		red_label() {
			return this.$.$mol_locale.text( '$mol_link_demo_red_label' )
		}
		
		/**
		 * ```tree
		 * Red $mol_link
		 * 	arg * color \red
		 * 	sub / <= red_label
		 * ```
		 */
		@ $mol_mem
		Red() {
			const obj = new this.$.$mol_link()
			
			obj.arg = () => ({
				color: "red"
			})
			obj.sub = () => [
				this.red_label()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * green_label @ \Green
		 * ```
		 */
		green_label() {
			return this.$.$mol_locale.text( '$mol_link_demo_green_label' )
		}
		
		/**
		 * ```tree
		 * Green $mol_link
		 * 	arg * color \green
		 * 	sub / <= green_label
		 * ```
		 */
		@ $mol_mem
		Green() {
			const obj = new this.$.$mol_link()
			
			obj.arg = () => ({
				color: "green"
			})
			obj.sub = () => [
				this.green_label()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * blue_label @ \Blue
		 * ```
		 */
		blue_label() {
			return this.$.$mol_locale.text( '$mol_link_demo_blue_label' )
		}
		
		/**
		 * ```tree
		 * Blue $mol_link
		 * 	arg * color \blue
		 * 	sub / <= blue_label
		 * ```
		 */
		@ $mol_mem
		Blue() {
			const obj = new this.$.$mol_link()
			
			obj.arg = () => ({
				color: "blue"
			})
			obj.sub = () => [
				this.blue_label()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * external_hint @ \external link
		 * ```
		 */
		external_hint() {
			return this.$.$mol_locale.text( '$mol_link_demo_external_hint' )
		}
		
		/**
		 * ```tree
		 * External $mol_link
		 * 	uri \http://example.org
		 * 	title \example.org
		 * 	hint <= external_hint
		 * ```
		 */
		@ $mol_mem
		External() {
			const obj = new this.$.$mol_link()
			
			obj.uri = () => "http://example.org"
			obj.title = () => "example.org"
			obj.hint = () => this.external_hint()
			
			return obj
		}
		
		/**
		 * ```tree
		 * object_uri \
		 * ```
		 */
		object_uri() {
			return ""
		}
		
		/**
		 * ```tree
		 * Download_icon $mol_icon_download
		 * ```
		 */
		@ $mol_mem
		Download_icon() {
			const obj = new this.$.$mol_icon_download()
			
			return obj
		}
		
		/**
		 * ```tree
		 * download_label @ \Download
		 * ```
		 */
		download_label() {
			return this.$.$mol_locale.text( '$mol_link_demo_download_label' )
		}
		
		/**
		 * ```tree
		 * Download $mol_link
		 * 	uri <= object_uri
		 * 	file_name \file.csv
		 * 	sub /
		 * 		<= Download_icon
		 * 		<= download_label
		 * ```
		 */
		@ $mol_mem
		Download() {
			const obj = new this.$.$mol_link()
			
			obj.uri = () => this.object_uri()
			obj.file_name = () => "file.csv"
			obj.sub = () => [
				this.Download_icon(),
				this.download_label()
			] as readonly any[]
			
			return obj
		}
	}
	
}

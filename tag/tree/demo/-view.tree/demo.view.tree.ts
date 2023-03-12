namespace $ {
	export class $mol_tag_tree_demo extends $mol_example {
		
		/**
		 * ```tree
		 * title \Autoatic tag tree
		 * ```
		 */
		title() {
			return "Autoatic tag tree"
		}
		
		/**
		 * ```tree
		 * sub / <= Tree
		 * ```
		 */
		sub() {
			return [
				this.Tree()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * tags /
		 * 	\tags
		 * 	\tree
		 * 	\taxonomy
		 * 	\menu
		 * ```
		 */
		tags() {
			return [
				"tags",
				"tree",
				"taxonomy",
				"menu"
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * item_title* \
		 * ```
		 */
		item_title(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * Item* $mol_button_minor title <= item_title*
		 * ```
		 */
		@ $mol_mem_key
		Item(id: any) {
			const obj = new this.$.$mol_button_minor()
			
			obj.title = () => this.item_title(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Tree $mol_tag_tree
		 * 	Item* <= Item*
		 * 	ids_tags *
		 * 		batman /
		 * 			\side:good
		 * 			\universe:dc
		 * 			\sex:male
		 * 		superman /
		 * 			\side:good
		 * 			\universe:dc
		 * 			\sex:male
		 * 		aquaman /
		 * 			\side:good
		 * 			\universe:dc
		 * 			\sex:male
		 * 		flash /
		 * 			\side:good
		 * 			\universe:dc
		 * 			\sex:male
		 * 		jocker /
		 * 			\side:bad
		 * 			\universe:dc
		 * 			\sex:male
		 * 		harley /
		 * 			\side:bad
		 * 			\universe:dc
		 * 			\sex:female
		 * 		deadshot /
		 * 			\side:bad
		 * 			\universe:dc
		 * 			\sex:male
		 * 		wonderwoman /
		 * 			\side:good
		 * 			\universe:dc
		 * 			\sex:female
		 * 		ironman /
		 * 			\side:good
		 * 			\universe:marvel
		 * 			\sex:male
		 * 		hulk /
		 * 			\side:good
		 * 			\universe:marvel
		 * 			\sex:male
		 * 		thor /
		 * 			\side:good
		 * 			\universe:marvel
		 * 			\sex:male
		 * 		spiderman /
		 * 			\side:good
		 * 			\universe:marvel
		 * 			\sex:male
		 * 		thanos /
		 * 			\side:bad
		 * 			\universe:marvel
		 * 			\sex:male
		 * 		locky /
		 * 			\side:bad
		 * 			\universe:marvel
		 * 			\sex:male
		 * 		hela /
		 * 			\side:bad
		 * 			\universe:marvel
		 * 			\sex:female
		 * ```
		 */
		@ $mol_mem
		Tree() {
			const obj = new this.$.$mol_tag_tree()
			
			obj.Item = (id: any) => this.Item(id)
			obj.ids_tags = () => ({
				batman: [
					"side:good",
					"universe:dc",
					"sex:male"
				] as readonly any[],
				superman: [
					"side:good",
					"universe:dc",
					"sex:male"
				] as readonly any[],
				aquaman: [
					"side:good",
					"universe:dc",
					"sex:male"
				] as readonly any[],
				flash: [
					"side:good",
					"universe:dc",
					"sex:male"
				] as readonly any[],
				jocker: [
					"side:bad",
					"universe:dc",
					"sex:male"
				] as readonly any[],
				harley: [
					"side:bad",
					"universe:dc",
					"sex:female"
				] as readonly any[],
				deadshot: [
					"side:bad",
					"universe:dc",
					"sex:male"
				] as readonly any[],
				wonderwoman: [
					"side:good",
					"universe:dc",
					"sex:female"
				] as readonly any[],
				ironman: [
					"side:good",
					"universe:marvel",
					"sex:male"
				] as readonly any[],
				hulk: [
					"side:good",
					"universe:marvel",
					"sex:male"
				] as readonly any[],
				thor: [
					"side:good",
					"universe:marvel",
					"sex:male"
				] as readonly any[],
				spiderman: [
					"side:good",
					"universe:marvel",
					"sex:male"
				] as readonly any[],
				thanos: [
					"side:bad",
					"universe:marvel",
					"sex:male"
				] as readonly any[],
				locky: [
					"side:bad",
					"universe:marvel",
					"sex:male"
				] as readonly any[],
				hela: [
					"side:bad",
					"universe:marvel",
					"sex:female"
				] as readonly any[]
			})
			
			return obj
		}
	}
	
}

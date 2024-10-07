(() => {
	let __$$app$$__ = __$$hmAppManager$$__.currentApp;
	let __$$module$$__ = __$$app$$__.current;
	__$$module$$__.module = DeviceRuntimeCore.Page({
	  onInit() {

		// Create widgets, timers, call functions here
		hmUI.createWidget(hmUI.widget.IMG, {
			x: 29, 
			y: 50, 
			src: "roll/d20-adv.png",
		}).addEventListener(hmUI.event.CLICK_DOWN, (info) => {
			hmApp.gotoPage({
				url: "page/d20",
				param: "adv"
			});
		})
		
		hmUI.createWidget(hmUI.widget.IMG, {
			x: 49, 
			y: 193, 
			src: "roll/d20.png",
		}).addEventListener(hmUI.event.CLICK_DOWN, (info) => {
			hmApp.gotoPage({
				url: "page/d20",
				param: "d20"
			});
		})
		
		hmUI.createWidget(hmUI.widget.IMG, {
			x: 29, 
			y: 346, 
			src: "roll/d20-dis.png",
		}).addEventListener(hmUI.event.CLICK_DOWN, (info) => {
			hmApp.gotoPage({
				url: "page/d20",
				param: "dis"
			});
		})
	  },
	  onDestroy() {

		// On destroy, remove if not required

	  }
	});
})();
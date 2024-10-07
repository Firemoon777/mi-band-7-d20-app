(() => {
	let __$$app$$__ = __$$hmAppManager$$__.currentApp;
	let __$$module$$__ = __$$app$$__.current;
	__$$module$$__.module = DeviceRuntimeCore.Page({
	  onInit(arg) {
		if(arg == "adv" || arg === "dis") {
			const result = [
				Math.ceil((Math.random() * 20)),
				Math.ceil((Math.random() * 20))
			];
			console.log(result)
			let text_color = 0x000000;
			let dice_color = ["grey", "grey"];
			if(arg == "adv") {
				if(result[0] > result[1]) {
					dice_color[0] = "green";
					dice_color[1] = "grey";
				} else if (result[0] < result[1]) {
					dice_color[0] = "grey";
					dice_color[1] = "green";
				} else {
					dice_color[0] = "blue";
					dice_color[1] = "blue";
				}
			} else {
				if(result[0] > result[1]) {
					dice_color[0] = "grey";
					dice_color[1] = "red";
				} else if (result[0] < result[1]) {
					dice_color[0] = "red";
					dice_color[1] = "grey";
				} else {
					dice_color[0] = "blue";
					dice_color[1] = "blue";
				}
			}
			
			hmUI.createWidget(hmUI.widget.IMG, {
				x: 49, 
				y: 95, 
				src: "roll/d20-" + dice_color[0] + ".png",
			})
			hmUI.createWidget(hmUI.widget.TEXT, {
			  x: 49,
			  y: 95,
			  w: 93,
			  h: 103,
			  color: text_color,
			  text_size: 36,
			  align_h: hmUI.align.CENTER_H,
			  align_v: hmUI.align.CENTER_V,
			  text: result[0]
			})
			hmUI.createWidget(hmUI.widget.IMG, {
				x: 49, 
				y: 293, 
				src: "roll/d20-" + dice_color[1] + ".png",
			})
			hmUI.createWidget(hmUI.widget.TEXT, {
			  x: 49,
			  y: 293,
			  w: 93,
			  h: 103,
			  color: text_color,
			  text_size: 36,
			  align_h: hmUI.align.CENTER_H,
			  align_v: hmUI.align.CENTER_V,
			  text: result[1]
			})
		} else {
			hmUI.createWidget(hmUI.widget.IMG, {
				x: 49, 
				y: 193, 
				src: "roll/d20-blue.png",
			})
			const result = Math.ceil((Math.random() * 20));
			let color;
			if(result === 1) {
				color = 0xff0000; 
			} else if (result === 20) {
				color = 0x00ff00;
			} else {
				color = 0x000000; 
			}
			hmUI.createWidget(hmUI.widget.TEXT, {
			  x: 49,
			  y: 193,
			  w: 93,
			  h: 103,
			  color: color,
			  text_size: 36,
			  align_h: hmUI.align.CENTER_H,
			  align_v: hmUI.align.CENTER_V,
			  text: result
			})
		}
	  },
	  onDestroy() {

		// On destroy, remove if not required

	  }
	});
})();
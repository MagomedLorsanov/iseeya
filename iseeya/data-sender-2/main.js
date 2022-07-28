// generating canvas fingerprint
function canvasFingerprintGenerator() {
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var txt = "CANVAS-FINGERPRINT";
	ctx.textBaseline = "top";
	ctx.font = "14px 'Arial'";
	ctx.textBaseline = "tencent";
	ctx.fillStyle = "#f60";

	ctx.fillRect(125, 1, 62, 20);

	ctx.fillStyle = "#069";

	ctx.fillText(txt, 2, 15);

	ctx.fillStyle = "rgba(102, 204, 0, 0.7)";

	ctx.fillText(txt, 4, 17);

	var b64 = canvas.toDataURL().replace("data:image/png;base64,", "");
	var bin = atob(b64);
	var crc = bin2hex(bin.slice(-16, -12));

	return crc;

	// converting binary code to hex
	function bin2hex(str) {
		var result = "";

		for (i = 0; i < str.length; i++) {
			var c = str.charCodeAt(i);

			result += byte2Hex(c >> 8 & 0xff);
			result += byte2Hex(c & 0xff);
		}

		return result;
	}

	// converting byte code to hex
	function byte2Hex(b) {
		if (b < 0x10) {
			return "0" + b.toString(16)
		} else {
			return b.toString(16)
		}
	}
}
// getting the user's canvas fingerprint
let canvasFingerprint = canvasFingerprintGenerator();
// getting the user's screen resolution
let screenResolution = screen.width + 'x' + screen.height;

if (domainName != "" && canvasFingerprint != "" && screenResolution != "") {
	// initial user verification
	$.ajax({
		url: "./iseeya/data-sender-2/precheck.php",
		type: "post",
		data: {
			domainName,
			userReferer,
			sameusr,
			canvasFingerprint,
			screenResolution
		}
	});

	// tracking user click
	$(`a[href="tel:"]`).click(function() {
		$.ajax({
			url: "./iseeya/data-sender-2/precheck.php",
			type: "post",
			data: {
			   sameusr,
				domainName,
				canvasFingerprint
			}
		});
	});
}
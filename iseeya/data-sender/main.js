function include(url, callback) {
	let script = document.createElement('script');
	script.src = url;
	script.onload = () => callback(script);
	document.getElementsByTagName('body')[0].appendChild(script);
}

include("https://code.jquery.com/jquery-3.6.0.min.js", function () {
	include("https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js", function () {
		baseCode();
	})
});

function baseCode() {
	let sameusrFinger = '';
	let userReferer = document.referrer;
	let domainName = 'presentation_site';
	let sameusr = $.cookie('UserHash') ? $.cookie('UserHash') : 1;
	// getting the user's canvas fingerprint
	let canvasFingerprint = canvasFingerprintGenerator();
	// getting the user's screen resolution
	let screenResolution = screen.width + 'x' + screen.height;

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

	if (domainName != "" && canvasFingerprint != "" && screenResolution != "") {
		// initial user verification
		$.ajax({
			url: "/zerebro_sistem/iseeya/data-sender/precheck.php",
			type: "post",
			data: {
				domainName,
				userReferer,
				sameusr,
				canvasFingerprint,
				screenResolution
			}, success(data) {
				$('.decor').css('display', 'block')
				if (+data === 1) {
					$(document.activeElement).html(`
					<div style='display: flex;justify-content: center;font-size: 30px;height: 100vh;text-align:center;flex-wrap: wrap;align-items: center;'>
						<div>
							<p style='margin: 15px 0; color: #fff;'>404 !!!</p>
								<div style='width: 100%;'> 
									<img style='width: 50%;' src='./iseeya/image.gif' alt=''>
								</div> 
						</div>
					</div>
					`);
				} else if (data) {
					arrData = JSON.parse(data);
					sameusrFinger = arrData[0];
					$.cookie('UserHash', sameusrFinger, { expires: 60 });
					userText = arrData[1];
					if (userText !== 12) {
						if (userText != 0) {
							$('.form-inner h3').text(`Ваше имя: ${userText}`);
							$('input').remove();
						}
						if (userText == 0) {
							$('.form-inner h3').text(`Вы в прошлый раз не ввели свое имя`);
						}
					}
				}
			}
		});

		// tracking user click
		$(`input[type="submit"]`).click(function (e) {
			e.preventDefault();
			nameUser = $(`input[type="text"]`).val();

			if (nameUser.match(/^(?!.*\.\.)(?!\.)(?!.*\.$)(?!\d+$)[a-zA-Zа-яА-Я0-9.]{3,20}$/)) {
				$.ajax({
					url: "/zerebro_sistem/iseeya/data-sender/user-click.php",
					type: "post",
					data: {
						sameusrFinger,
						domainName,
						nameUser,
					}, success() {
						$('.form-inner h3').text(`Ваше имя: ${nameUser}`);
						$('input').remove();
					}
				});
			} else {
				$('.form-inner h3').text(`Ведите имя правильно`);
			}
		});
	}
}
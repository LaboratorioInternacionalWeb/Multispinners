const _0x27fe = [
	"text",
	"push",
	"process",
	"end",
	"abs",
	"warn",
	"4059FbYFWo",
	"map",
	"./spinners.js",
	"write",
	"181816jZPlqf",
	"add",
	"8858VIHfZI",
	"44jNcCtc",
	"succed",
	"log",
	"\x1b[?25l",
	"length",
	"19EGNJyi",
	"frames",
	"2175JhNVVq",
	"subtext",
	"69574bdqrwx",
	"\x1b[2J",
	"showSpinners",
	"dots",
	"tasks",
	"26KnnAZY",
	"update",
	"repeat",
	"start",
	"name",
	"\x1b[H",
	"createSpinner",
	"stdout",
	"index",
	"566653nGhWOl",
	"150161uyXUhA",
	"fail",
	"indexOf",
];
const _0x4e7c37 = _0x5b5d;
(function (_0x22f091, _0x38277d) {
	const _0x6aa83c = _0x5b5d;
	while (!![]) {
		try {
			const _0x4423e1 =
				-parseInt(_0x6aa83c(0x76)) +
				-parseInt(_0x6aa83c(0x7e)) * parseInt(_0x6aa83c(0x78)) +
				parseInt(_0x6aa83c(0x82)) +
				-parseInt(_0x6aa83c(0x79)) * parseInt(_0x6aa83c(0x72)) +
				parseInt(_0x6aa83c(0x69)) +
				-parseInt(_0x6aa83c(0x80)) * parseInt(_0x6aa83c(0x87)) +
				parseInt(_0x6aa83c(0x68));
			if (_0x4423e1 === _0x38277d) break;
			else _0x22f091["push"](_0x22f091["shift"]());
		} catch (_0x8cab5) {
			_0x22f091["push"](_0x22f091["shift"]());
		}
	}
})(_0x27fe, 0x311a4);
function _0x5b5d(_0x3ea244, _0x253933) {
	return (
		(_0x5b5d = function (_0x27fe23, _0x5b5d1d) {
			_0x27fe23 = _0x27fe23 - 0x65;
			let _0x6bc807 = _0x27fe[_0x27fe23];
			return _0x6bc807;
		}),
		_0x5b5d(_0x3ea244, _0x253933)
	);
}
const process = require(_0x4e7c37(0x6e)),
	spinners = require(_0x4e7c37(0x74));
module["exports"] = class multiSpinner {
	[_0x4e7c37(0x86)] = [];
	[_0x4e7c37(0x6f)] = ![];
	#createText(_0x1d0371) {
		let _0x535cb9 = "";
		return (
			_0x1d0371["forEach"]((_0x25e780) => {
				const _0x4fcc5d = _0x5b5d;
				_0x535cb9 +=
					"\x0a" +
					spinners[_0x25e780["name"]][_0x4fcc5d(0x7f)][
						(_0x25e780[_0x4fcc5d(0x67)] =
							_0x25e780[_0x4fcc5d(0x67)] %
							spinners[_0x25e780[_0x4fcc5d(0x8b)]][_0x4fcc5d(0x7f)][
								_0x4fcc5d(0x7d)
							])
					] +
					"\x20" +
					_0x25e780[_0x4fcc5d(0x6c)];
			}),
			_0x535cb9
		);
	}
	[_0x4e7c37(0x84)]() {
		const _0x5d6ce1 = _0x4e7c37;
		console[_0x5d6ce1(0x7b)](spinners);
	}
	[_0x4e7c37(0x65)](_0x4e4df7, _0x121194) {
		const _0x4f7a86 = _0x4e7c37;
		let _0x55fa7e = _0x121194[_0x4f7a86(0x7f)]["reduce"](
			(_0x4c1363, _0x17b29f) =>
				_0x4c1363["length"] > _0x17b29f["length"]
					? _0x4c1363["length"]
					: _0x17b29f[_0x4f7a86(0x7d)]
		);
		(_0x121194[_0x4f7a86(0x7f)] = _0x121194["frames"][_0x4f7a86(0x73)](
			(_0x48ead1) =>
				_0x48ead1[_0x4f7a86(0x7d)] !== _0x55fa7e
					? _0x48ead1 +
					  "\x20"[_0x4f7a86(0x89)](
							Math[_0x4f7a86(0x70)](_0x48ead1[_0x4f7a86(0x7d)] - _0x55fa7e)
					  )
					: _0x48ead1
		)),
			(spinners[_0x4e4df7] = _0x121194);
	}
	[_0x4e7c37(0x77)](_0x2ce90e, _0x573c51 = _0x4e7c37(0x85), _0x5f4bc7) {
		const _0x15ab0f = _0x4e7c37;
		this[_0x15ab0f(0x86)][_0x15ab0f(0x6d)]({
			id: _0x2ce90e,
			name: _0x573c51,
			text: _0x5f4bc7,
			index: 0x0,
		});
	}
	[_0x4e7c37(0x81)](_0xb5a788, _0x53a0dc) {
		const _0x290743 = _0x4e7c37;
		this[_0x290743(0x86)]["splice"](
			this[_0x290743(0x86)][_0x290743(0x6b)](_0xb5a788),
			0x0,
			{ name: _0x290743(0x81), text: _0x53a0dc, index: 0x0 }
		);
	}
	[_0x4e7c37(0x8a)]() {
		const _0x4a83ee = _0x4e7c37;
		process[_0x4a83ee(0x66)][_0x4a83ee(0x75)](_0x4a83ee(0x7c)),
			process[_0x4a83ee(0x66)][_0x4a83ee(0x75)](_0x4a83ee(0x83));
		let _0x2205cf = 0x0;
		const _0x3ae55e = setInterval(() => {
			const _0x49fa08 = _0x4a83ee;
			process[_0x49fa08(0x66)][_0x49fa08(0x75)](_0x49fa08(0x8c));
			let _0x1ef96e = "";
			(_0x1ef96e = this.#createText(this[_0x49fa08(0x86)])),
				process[_0x49fa08(0x66)][_0x49fa08(0x75)](_0x1ef96e),
				(this[_0x49fa08(0x86)] = this[_0x49fa08(0x86)][_0x49fa08(0x73)](
					(_0x41b14c) => {
						const _0x174ff7 = _0x49fa08;
						return (
							(_0x41b14c[_0x174ff7(0x67)] = _0x41b14c[_0x174ff7(0x67)] + 0x1),
							_0x41b14c
						);
					}
				)),
				this["end"] && clearInterval(_0x3ae55e),
				process[_0x49fa08(0x66)]["write"]("");
		}, 0xfa);
	}
	["info"](_0x7e6dd0, _0x4c7cba) {
		const _0x17b083 = _0x4e7c37;
		process["stdout"][_0x17b083(0x75)](_0x17b083(0x83));
		const _0x5d330b = this[_0x17b083(0x86)]
			[_0x17b083(0x73)]((_0x473a66) => _0x473a66["id"])
			[_0x17b083(0x6b)](_0x7e6dd0);
		(this["tasks"][_0x5d330b][_0x17b083(0x8b)] = "info"),
			(this[_0x17b083(0x86)][_0x5d330b]["text"] =
				_0x4c7cba || this[_0x17b083(0x86)][_0x5d330b][_0x17b083(0x6c)]);
	}
	[_0x4e7c37(0x88)](_0x4781e8, _0x1e1a3a) {
		const _0x1c1fa5 = _0x4e7c37;
		process[_0x1c1fa5(0x66)][_0x1c1fa5(0x75)](_0x1c1fa5(0x83));
		const _0x4b3413 = this[_0x1c1fa5(0x86)]
			[_0x1c1fa5(0x73)]((_0x5cfffb) => _0x5cfffb["id"])
			[_0x1c1fa5(0x6b)](_0x4781e8);
		this[_0x1c1fa5(0x86)][_0x4b3413]["text"] =
			_0x1e1a3a || this["tasks"][_0x4b3413][_0x1c1fa5(0x6c)];
	}
	[_0x4e7c37(0x71)](_0x221065, _0x35fa87) {
		const _0x5dca90 = _0x4e7c37;
		process[_0x5dca90(0x66)][_0x5dca90(0x75)](_0x5dca90(0x83));
		const _0x3ebb30 = this[_0x5dca90(0x86)]
			[_0x5dca90(0x73)]((_0x4afdc5) => _0x4afdc5["id"])
			["indexOf"](_0x221065);
		(this[_0x5dca90(0x86)][_0x3ebb30][_0x5dca90(0x8b)] = _0x5dca90(0x71)),
			(this[_0x5dca90(0x86)][_0x3ebb30][_0x5dca90(0x6c)] =
				_0x35fa87 || this[_0x5dca90(0x86)][_0x3ebb30][_0x5dca90(0x6c)]);
	}
	[_0x4e7c37(0x7a)](_0x4335ed, _0x20127c) {
		const _0x3ad0bf = _0x4e7c37;
		process[_0x3ad0bf(0x66)]["write"](_0x3ad0bf(0x83));
		const _0x23d109 = this["tasks"]
			[_0x3ad0bf(0x73)]((_0x43fe34) => _0x43fe34["id"])
			[_0x3ad0bf(0x6b)](_0x4335ed);
		(this[_0x3ad0bf(0x86)][_0x23d109][_0x3ad0bf(0x8b)] = _0x3ad0bf(0x7a)),
			(this[_0x3ad0bf(0x86)][_0x23d109]["text"] =
				_0x20127c || this[_0x3ad0bf(0x86)][_0x23d109][_0x3ad0bf(0x6c)]);
	}
	[_0x4e7c37(0x6a)](_0xc4fd61, _0x46251c) {
		const _0x516e82 = _0x4e7c37;
		process[_0x516e82(0x66)][_0x516e82(0x75)](_0x516e82(0x83));
		const _0x3a1175 = this[_0x516e82(0x86)]
			[_0x516e82(0x73)]((_0x457c17) => _0x457c17["id"])
			[_0x516e82(0x6b)](_0xc4fd61);
		(this[_0x516e82(0x86)][_0x3a1175]["name"] = "fail"),
			(this[_0x516e82(0x86)][_0x3a1175][_0x516e82(0x6c)] =
				_0x46251c || this[_0x516e82(0x86)][_0x3a1175][_0x516e82(0x6c)]);
	}
	["stop"]() {
		const _0xa83e33 = _0x4e7c37;
		this[_0xa83e33(0x6f)] = !![];
	}
};
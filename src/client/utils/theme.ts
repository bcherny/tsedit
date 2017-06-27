// /**
//  * Ripped out of https://github.com/Microsoft/vscode/blob/91a22a7/src/vs/editor/standalone/browser/standaloneThemeServiceImpl.ts
//  *
//  * TODO: npm install and consume it instead
//  */

// /*---------------------------------------------------------------------------------------------
//  *  Copyright (c) Microsoft Corporation. All rights reserved.
//  *  Licensed under the MIT License. See License.txt in the project root for license information.
//  *--------------------------------------------------------------------------------------------*/

// /**
//  * Open ended enum at runtime
//  * @internal
//  */
// export const enum ColorId {
//   None = 0,
//   DefaultForeground = 1,
//   DefaultBackground = 2
// }

// /**
//  * A font style. Values are 2^x such that a bit mask can be used.
//  * @internal
//  */
// export const enum FontStyle {
//   NotSet = -1,
//   None = 0,
//   Italic = 1,
//   Bold = 2,
//   Underline = 4
// }

// /**
//  * Helpers to manage the "collapsed" metadata of an entire StackElement stack.
//  * The following assumptions have been made:
//  *  - languageId < 256 => needs 8 bits
//  *  - unique color count < 512 => needs 9 bits
//  *
//  * The binary format is:
//  * - -------------------------------------------
//  *     3322 2222 2222 1111 1111 1100 0000 0000
//  *     1098 7654 3210 9876 5432 1098 7654 3210
//  * - -------------------------------------------
//  *     xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx
//  *     bbbb bbbb bfff ffff ffFF FTTT LLLL LLLL
//  * - -------------------------------------------
//  *  - L = LanguageId (8 bits)
//  *  - T = StandardTokenType (3 bits)
//  *  - F = FontStyle (3 bits)
//  *  - f = foreground color (9 bits)
//  *  - b = background color (9 bits)
//  *
//  * @internal
//  */
// export const enum MetadataConsts {
//   LANGUAGEID_MASK = 0b00000000000000000000000011111111,
//   TOKEN_TYPE_MASK = 0b00000000000000000000011100000000,
//   FONT_STYLE_MASK = 0b00000000000000000011100000000000,
//   FOREGROUND_MASK = 0b00000000011111111100000000000000,
//   BACKGROUND_MASK = 0b11111111100000000000000000000000,

//   LANGUAGEID_OFFSET = 0,
//   TOKEN_TYPE_OFFSET = 8,
//   FONT_STYLE_OFFSET = 11,
//   FOREGROUND_OFFSET = 14,
//   BACKGROUND_OFFSET = 23
// }

// /**
//  * Open ended enum at runtime
//  * @internal
//  */
// export const enum LanguageId {
//   Null = 0,
//   PlainText = 1
// }

// /**
//  * A standard token type. Values are 2^x such that a bit mask can be used.
//  * @internal
//  */
// export const enum StandardTokenType {
//   Other = 0,
//   Comment = 1,
//   String = 2,
//   RegEx = 4
// }

// /**
//  * An inlined enum containing useful character codes (to be used with String.charCodeAt).
//  * Please leave the const keyword such that it gets inlined when compiled to JavaScript!
//  */
// export const enum CharCode {
//   Null = 0,
//   /**
//    * The `\t` character.
//    */
//   Tab = 9,
//   /**
//    * The `\n` character.
//    */
//   LineFeed = 10,
//   /**
//    * The `\r` character.
//    */
//   CarriageReturn = 13,
//   Space = 32,
//   /**
//    * The `!` character.
//    */
//   ExclamationMark = 33,
//   /**
//    * The `"` character.
//    */
//   DoubleQuote = 34,
//   /**
//    * The `#` character.
//    */
//   Hash = 35,
//   /**
//    * The `$` character.
//    */
//   DollarSign = 36,
//   /**
//    * The `%` character.
//    */
//   PercentSign = 37,
//   /**
//    * The `&` character.
//    */
//   Ampersand = 38,
//   /**
//    * The `'` character.
//    */
//   SingleQuote = 39,
//   /**
//    * The `(` character.
//    */
//   OpenParen = 40,
//   /**
//    * The `)` character.
//    */
//   CloseParen = 41,
//   /**
//    * The `*` character.
//    */
//   Asterisk = 42,
//   /**
//    * The `+` character.
//    */
//   Plus = 43,
//   /**
//    * The `,` character.
//    */
//   Comma = 44,
//   /**
//    * The `-` character.
//    */
//   Dash = 45,
//   /**
//    * The `.` character.
//    */
//   Period = 46,
//   /**
//    * The `/` character.
//    */
//   Slash = 47,

//   Digit0 = 48,
//   Digit1 = 49,
//   Digit2 = 50,
//   Digit3 = 51,
//   Digit4 = 52,
//   Digit5 = 53,
//   Digit6 = 54,
//   Digit7 = 55,
//   Digit8 = 56,
//   Digit9 = 57,

//   /**
//    * The `:` character.
//    */
//   Colon = 58,
//   /**
//    * The `;` character.
//    */
//   Semicolon = 59,
//   /**
//    * The `<` character.
//    */
//   LessThan = 60,
//   /**
//    * The `=` character.
//    */
//   Equals = 61,
//   /**
//    * The `>` character.
//    */
//   GreaterThan = 62,
//   /**
//    * The `?` character.
//    */
//   QuestionMark = 63,
//   /**
//    * The `@` character.
//    */
//   AtSign = 64,

//   A = 65,
//   B = 66,
//   C = 67,
//   D = 68,
//   E = 69,
//   F = 70,
//   G = 71,
//   H = 72,
//   I = 73,
//   J = 74,
//   K = 75,
//   L = 76,
//   M = 77,
//   N = 78,
//   O = 79,
//   P = 80,
//   Q = 81,
//   R = 82,
//   S = 83,
//   T = 84,
//   U = 85,
//   V = 86,
//   W = 87,
//   X = 88,
//   Y = 89,
//   Z = 90,

//   /**
//    * The `[` character.
//    */
//   OpenSquareBracket = 91,
//   /**
//    * The `\` character.
//    */
//   Backslash = 92,
//   /**
//    * The `]` character.
//    */
//   CloseSquareBracket = 93,
//   /**
//    * The `^` character.
//    */
//   Caret = 94,
//   /**
//    * The `_` character.
//    */
//   Underline = 95,
//   /**
//    * The ``(`)`` character.
//    */
//   BackTick = 96,

//   a = 97,
//   b = 98,
//   c = 99,
//   d = 100,
//   e = 101,
//   f = 102,
//   g = 103,
//   h = 104,
//   i = 105,
//   j = 106,
//   k = 107,
//   l = 108,
//   m = 109,
//   n = 110,
//   o = 111,
//   p = 112,
//   q = 113,
//   r = 114,
//   s = 115,
//   t = 116,
//   u = 117,
//   v = 118,
//   w = 119,
//   x = 120,
//   y = 121,
//   z = 122,

//   /**
//    * The `{` character.
//    */
//   OpenCurlyBrace = 123,
//   /**
//    * The `|` character.
//    */
//   Pipe = 124,
//   /**
//    * The `}` character.
//    */
//   CloseCurlyBrace = 125,
//   /**
//    * The `~` character.
//    */
//   Tilde = 126,

//   U_Combining_Grave_Accent = 0x0300,    				// 	U+0300	Combining Grave Accent
//   U_Combining_Acute_Accent = 0x0301,								// 	U+0301	Combining Acute Accent
//   U_Combining_Circumflex_Accent = 0x0302,							// 	U+0302	Combining Circumflex Accent
//   U_Combining_Tilde = 0x0303,										// 	U+0303	Combining Tilde
//   U_Combining_Macron = 0x0304,									// 	U+0304	Combining Macron
//   U_Combining_Overline = 0x0305,									// 	U+0305	Combining Overline
//   U_Combining_Breve = 0x0306,										// 	U+0306	Combining Breve
//   U_Combining_Dot_Above = 0x0307,									// 	U+0307	Combining Dot Above
//   U_Combining_Diaeresis = 0x0308,									// 	U+0308	Combining Diaeresis
//   U_Combining_Hook_Above = 0x0309,								// 	U+0309	Combining Hook Above
//   U_Combining_Ring_Above = 0x030A,								// 	U+030A	Combining Ring Above
//   U_Combining_Double_Acute_Accent = 0x030B,						// 	U+030B	Combining Double Acute Accent
//   U_Combining_Caron = 0x030C,										// 	U+030C	Combining Caron
//   U_Combining_Vertical_Line_Above = 0x030D,						// 	U+030D	Combining Vertical Line Above
//   U_Combining_Double_Vertical_Line_Above = 0x030E,				// 	U+030E	Combining Double Vertical Line Above
//   U_Combining_Double_Grave_Accent = 0x030F,						// 	U+030F	Combining Double Grave Accent
//   U_Combining_Candrabindu = 0x0310,								// 	U+0310	Combining Candrabindu
//   U_Combining_Inverted_Breve = 0x0311,							// 	U+0311	Combining Inverted Breve
//   U_Combining_Turned_Comma_Above = 0x0312,						// 	U+0312	Combining Turned Comma Above
//   U_Combining_Comma_Above = 0x0313,								// 	U+0313	Combining Comma Above
//   U_Combining_Reversed_Comma_Above = 0x0314,						// 	U+0314	Combining Reversed Comma Above
//   U_Combining_Comma_Above_Right = 0x0315,							// 	U+0315	Combining Comma Above Right
//   U_Combining_Grave_Accent_Below = 0x0316,						// 	U+0316	Combining Grave Accent Below
//   U_Combining_Acute_Accent_Below = 0x0317,						// 	U+0317	Combining Acute Accent Below
//   U_Combining_Left_Tack_Below = 0x0318,							// 	U+0318	Combining Left Tack Below
//   U_Combining_Right_Tack_Below = 0x0319,							// 	U+0319	Combining Right Tack Below
//   U_Combining_Left_Angle_Above = 0x031A,							// 	U+031A	Combining Left Angle Above
//   U_Combining_Horn = 0x031B,										// 	U+031B	Combining Horn
//   U_Combining_Left_Half_Ring_Below = 0x031C,						// 	U+031C	Combining Left Half Ring Below
//   U_Combining_Up_Tack_Below = 0x031D,								// 	U+031D	Combining Up Tack Below
//   U_Combining_Down_Tack_Below = 0x031E,							// 	U+031E	Combining Down Tack Below
//   U_Combining_Plus_Sign_Below = 0x031F,							// 	U+031F	Combining Plus Sign Below
//   U_Combining_Minus_Sign_Below = 0x0320,							// 	U+0320	Combining Minus Sign Below
//   U_Combining_Palatalized_Hook_Below = 0x0321,					// 	U+0321	Combining Palatalized Hook Below
//   U_Combining_Retroflex_Hook_Below = 0x0322,						// 	U+0322	Combining Retroflex Hook Below
//   U_Combining_Dot_Below = 0x0323,									// 	U+0323	Combining Dot Below
//   U_Combining_Diaeresis_Below = 0x0324,							// 	U+0324	Combining Diaeresis Below
//   U_Combining_Ring_Below = 0x0325,								// 	U+0325	Combining Ring Below
//   U_Combining_Comma_Below = 0x0326,								// 	U+0326	Combining Comma Below
//   U_Combining_Cedilla = 0x0327,									// 	U+0327	Combining Cedilla
//   U_Combining_Ogonek = 0x0328,									// 	U+0328	Combining Ogonek
//   U_Combining_Vertical_Line_Below = 0x0329,						// 	U+0329	Combining Vertical Line Below
//   U_Combining_Bridge_Below = 0x032A,								// 	U+032A	Combining Bridge Below
//   U_Combining_Inverted_Double_Arch_Below = 0x032B,				// 	U+032B	Combining Inverted Double Arch Below
//   U_Combining_Caron_Below = 0x032C,								// 	U+032C	Combining Caron Below
//   U_Combining_Circumflex_Accent_Below = 0x032D,					// 	U+032D	Combining Circumflex Accent Below
//   U_Combining_Breve_Below = 0x032E,								// 	U+032E	Combining Breve Below
//   U_Combining_Inverted_Breve_Below = 0x032F,						// 	U+032F	Combining Inverted Breve Below
//   U_Combining_Tilde_Below = 0x0330,								// 	U+0330	Combining Tilde Below
//   U_Combining_Macron_Below = 0x0331,								// 	U+0331	Combining Macron Below
//   U_Combining_Low_Line = 0x0332,									// 	U+0332	Combining Low Line
//   U_Combining_Double_Low_Line = 0x0333,							// 	U+0333	Combining Double Low Line
//   U_Combining_Tilde_Overlay = 0x0334,								// 	U+0334	Combining Tilde Overlay
//   U_Combining_Short_Stroke_Overlay = 0x0335,						// 	U+0335	Combining Short Stroke Overlay
//   U_Combining_Long_Stroke_Overlay = 0x0336,						// 	U+0336	Combining Long Stroke Overlay
//   U_Combining_Short_Solidus_Overlay = 0x0337,						// 	U+0337	Combining Short Solidus Overlay
//   U_Combining_Long_Solidus_Overlay = 0x0338,						// 	U+0338	Combining Long Solidus Overlay
//   U_Combining_Right_Half_Ring_Below = 0x0339,						// 	U+0339	Combining Right Half Ring Below
//   U_Combining_Inverted_Bridge_Below = 0x033A,						// 	U+033A	Combining Inverted Bridge Below
//   U_Combining_Square_Below = 0x033B,								// 	U+033B	Combining Square Below
//   U_Combining_Seagull_Below = 0x033C,								// 	U+033C	Combining Seagull Below
//   U_Combining_X_Above = 0x033D,									// 	U+033D	Combining X Above
//   U_Combining_Vertical_Tilde = 0x033E,							// 	U+033E	Combining Vertical Tilde
//   U_Combining_Double_Overline = 0x033F,							// 	U+033F	Combining Double Overline
//   U_Combining_Grave_Tone_Mark = 0x0340,							// 	U+0340	Combining Grave Tone Mark
//   U_Combining_Acute_Tone_Mark = 0x0341,							// 	U+0341	Combining Acute Tone Mark
//   U_Combining_Greek_Perispomeni = 0x0342,							// 	U+0342	Combining Greek Perispomeni
//   U_Combining_Greek_Koronis = 0x0343,								// 	U+0343	Combining Greek Koronis
//   U_Combining_Greek_Dialytika_Tonos = 0x0344,						// 	U+0344	Combining Greek Dialytika Tonos
//   U_Combining_Greek_Ypogegrammeni = 0x0345,						// 	U+0345	Combining Greek Ypogegrammeni
//   U_Combining_Bridge_Above = 0x0346,								// 	U+0346	Combining Bridge Above
//   U_Combining_Equals_Sign_Below = 0x0347,							// 	U+0347	Combining Equals Sign Below
//   U_Combining_Double_Vertical_Line_Below = 0x0348,				// 	U+0348	Combining Double Vertical Line Below
//   U_Combining_Left_Angle_Below = 0x0349,							// 	U+0349	Combining Left Angle Below
//   U_Combining_Not_Tilde_Above = 0x034A,							// 	U+034A	Combining Not Tilde Above
//   U_Combining_Homothetic_Above = 0x034B,							// 	U+034B	Combining Homothetic Above
//   U_Combining_Almost_Equal_To_Above = 0x034C,						// 	U+034C	Combining Almost Equal To Above
//   U_Combining_Left_Right_Arrow_Below = 0x034D,					// 	U+034D	Combining Left Right Arrow Below
//   U_Combining_Upwards_Arrow_Below = 0x034E,						// 	U+034E	Combining Upwards Arrow Below
//   U_Combining_Grapheme_Joiner = 0x034F,							// 	U+034F	Combining Grapheme Joiner
//   U_Combining_Right_Arrowhead_Above = 0x0350,						// 	U+0350	Combining Right Arrowhead Above
//   U_Combining_Left_Half_Ring_Above = 0x0351,						// 	U+0351	Combining Left Half Ring Above
//   U_Combining_Fermata = 0x0352,									// 	U+0352	Combining Fermata
//   U_Combining_X_Below = 0x0353,									// 	U+0353	Combining X Below
//   U_Combining_Left_Arrowhead_Below = 0x0354,						// 	U+0354	Combining Left Arrowhead Below
//   U_Combining_Right_Arrowhead_Below = 0x0355,						// 	U+0355	Combining Right Arrowhead Below
//   U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 0x0356,	// 	U+0356	Combining Right Arrowhead And Up Arrowhead Below
//   U_Combining_Right_Half_Ring_Above = 0x0357,						// 	U+0357	Combining Right Half Ring Above
//   U_Combining_Dot_Above_Right = 0x0358,							// 	U+0358	Combining Dot Above Right
//   U_Combining_Asterisk_Below = 0x0359,							// 	U+0359	Combining Asterisk Below
//   U_Combining_Double_Ring_Below = 0x035A,							// 	U+035A	Combining Double Ring Below
//   U_Combining_Zigzag_Above = 0x035B,								// 	U+035B	Combining Zigzag Above
//   U_Combining_Double_Breve_Below = 0x035C,						// 	U+035C	Combining Double Breve Below
//   U_Combining_Double_Breve = 0x035D,								// 	U+035D	Combining Double Breve
//   U_Combining_Double_Macron = 0x035E,								// 	U+035E	Combining Double Macron
//   U_Combining_Double_Macron_Below = 0x035F,						// 	U+035F	Combining Double Macron Below
//   U_Combining_Double_Tilde = 0x0360,								// 	U+0360	Combining Double Tilde
//   U_Combining_Double_Inverted_Breve = 0x0361,						// 	U+0361	Combining Double Inverted Breve
//   U_Combining_Double_Rightwards_Arrow_Below = 0x0362,				// 	U+0362	Combining Double Rightwards Arrow Below
//   U_Combining_Latin_Small_Letter_A = 0x0363, 						// 	U+0363	Combining Latin Small Letter A
//   U_Combining_Latin_Small_Letter_E = 0x0364, 						// 	U+0364	Combining Latin Small Letter E
//   U_Combining_Latin_Small_Letter_I = 0x0365, 						// 	U+0365	Combining Latin Small Letter I
//   U_Combining_Latin_Small_Letter_O = 0x0366, 						// 	U+0366	Combining Latin Small Letter O
//   U_Combining_Latin_Small_Letter_U = 0x0367, 						// 	U+0367	Combining Latin Small Letter U
//   U_Combining_Latin_Small_Letter_C = 0x0368, 						// 	U+0368	Combining Latin Small Letter C
//   U_Combining_Latin_Small_Letter_D = 0x0369, 						// 	U+0369	Combining Latin Small Letter D
//   U_Combining_Latin_Small_Letter_H = 0x036A, 						// 	U+036A	Combining Latin Small Letter H
//   U_Combining_Latin_Small_Letter_M = 0x036B, 						// 	U+036B	Combining Latin Small Letter M
//   U_Combining_Latin_Small_Letter_R = 0x036C, 						// 	U+036C	Combining Latin Small Letter R
//   U_Combining_Latin_Small_Letter_T = 0x036D, 						// 	U+036D	Combining Latin Small Letter T
//   U_Combining_Latin_Small_Letter_V = 0x036E, 						// 	U+036E	Combining Latin Small Letter V
//   U_Combining_Latin_Small_Letter_X = 0x036F, 						// 	U+036F	Combining Latin Small Letter X

//   /**
// 	 * Unicode Character 'LINE SEPARATOR' (U+2028)
// 	 * http://www.fileformat.info/info/unicode/char/2028/index.htm
// 	 */
//   LINE_SEPARATOR_2028 = 8232,

//   // http://www.fileformat.info/info/unicode/category/Sk/list.htm
//   U_CIRCUMFLEX = 0x005E,									// U+005E	CIRCUMFLEX
//   U_GRAVE_ACCENT = 0x0060,								// U+0060	GRAVE ACCENT
//   U_DIAERESIS = 0x00A8,									// U+00A8	DIAERESIS
//   U_MACRON = 0x00AF,										// U+00AF	MACRON
//   U_ACUTE_ACCENT = 0x00B4,								// U+00B4	ACUTE ACCENT
//   U_CEDILLA = 0x00B8,										// U+00B8	CEDILLA
//   U_MODIFIER_LETTER_LEFT_ARROWHEAD = 0x02C2,				// U+02C2	MODIFIER LETTER LEFT ARROWHEAD
//   U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 0x02C3,				// U+02C3	MODIFIER LETTER RIGHT ARROWHEAD
//   U_MODIFIER_LETTER_UP_ARROWHEAD = 0x02C4,				// U+02C4	MODIFIER LETTER UP ARROWHEAD
//   U_MODIFIER_LETTER_DOWN_ARROWHEAD = 0x02C5,				// U+02C5	MODIFIER LETTER DOWN ARROWHEAD
//   U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 0x02D2,		// U+02D2	MODIFIER LETTER CENTRED RIGHT HALF RING
//   U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 0x02D3,		// U+02D3	MODIFIER LETTER CENTRED LEFT HALF RING
//   U_MODIFIER_LETTER_UP_TACK = 0x02D4,						// U+02D4	MODIFIER LETTER UP TACK
//   U_MODIFIER_LETTER_DOWN_TACK = 0x02D5,					// U+02D5	MODIFIER LETTER DOWN TACK
//   U_MODIFIER_LETTER_PLUS_SIGN = 0x02D6,					// U+02D6	MODIFIER LETTER PLUS SIGN
//   U_MODIFIER_LETTER_MINUS_SIGN = 0x02D7,					// U+02D7	MODIFIER LETTER MINUS SIGN
//   U_BREVE = 0x02D8,										// U+02D8	BREVE
//   U_DOT_ABOVE = 0x02D9,									// U+02D9	DOT ABOVE
//   U_RING_ABOVE = 0x02DA,									// U+02DA	RING ABOVE
//   U_OGONEK = 0x02DB,										// U+02DB	OGONEK
//   U_SMALL_TILDE = 0x02DC,									// U+02DC	SMALL TILDE
//   U_DOUBLE_ACUTE_ACCENT = 0x02DD,							// U+02DD	DOUBLE ACUTE ACCENT
//   U_MODIFIER_LETTER_RHOTIC_HOOK = 0x02DE,					// U+02DE	MODIFIER LETTER RHOTIC HOOK
//   U_MODIFIER_LETTER_CROSS_ACCENT = 0x02DF,				// U+02DF	MODIFIER LETTER CROSS ACCENT
//   U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 0x02E5,			// U+02E5	MODIFIER LETTER EXTRA-HIGH TONE BAR
//   U_MODIFIER_LETTER_HIGH_TONE_BAR = 0x02E6,				// U+02E6	MODIFIER LETTER HIGH TONE BAR
//   U_MODIFIER_LETTER_MID_TONE_BAR = 0x02E7,				// U+02E7	MODIFIER LETTER MID TONE BAR
//   U_MODIFIER_LETTER_LOW_TONE_BAR = 0x02E8,				// U+02E8	MODIFIER LETTER LOW TONE BAR
//   U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 0x02E9,			// U+02E9	MODIFIER LETTER EXTRA-LOW TONE BAR
//   U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 0x02EA,		// U+02EA	MODIFIER LETTER YIN DEPARTING TONE MARK
//   U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 0x02EB,	// U+02EB	MODIFIER LETTER YANG DEPARTING TONE MARK
//   U_MODIFIER_LETTER_UNASPIRATED = 0x02ED,					// U+02ED	MODIFIER LETTER UNASPIRATED
//   U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 0x02EF,			// U+02EF	MODIFIER LETTER LOW DOWN ARROWHEAD
//   U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 0x02F0,			// U+02F0	MODIFIER LETTER LOW UP ARROWHEAD
//   U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 0x02F1,			// U+02F1	MODIFIER LETTER LOW LEFT ARROWHEAD
//   U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 0x02F2,			// U+02F2	MODIFIER LETTER LOW RIGHT ARROWHEAD
//   U_MODIFIER_LETTER_LOW_RING = 0x02F3,					// U+02F3	MODIFIER LETTER LOW RING
//   U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 0x02F4,			// U+02F4	MODIFIER LETTER MIDDLE GRAVE ACCENT
//   U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 0x02F5,	// U+02F5	MODIFIER LETTER MIDDLE DOUBLE GRAVE ACCENT
//   U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 0x02F6,	// U+02F6	MODIFIER LETTER MIDDLE DOUBLE ACUTE ACCENT
//   U_MODIFIER_LETTER_LOW_TILDE = 0x02F7,					// U+02F7	MODIFIER LETTER LOW TILDE
//   U_MODIFIER_LETTER_RAISED_COLON = 0x02F8,				// U+02F8	MODIFIER LETTER RAISED COLON
//   U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 0x02F9,				// U+02F9	MODIFIER LETTER BEGIN HIGH TONE
//   U_MODIFIER_LETTER_END_HIGH_TONE = 0x02FA,				// U+02FA	MODIFIER LETTER END HIGH TONE
//   U_MODIFIER_LETTER_BEGIN_LOW_TONE = 0x02FB,				// U+02FB	MODIFIER LETTER BEGIN LOW TONE
//   U_MODIFIER_LETTER_END_LOW_TONE = 0x02FC,				// U+02FC	MODIFIER LETTER END LOW TONE
//   U_MODIFIER_LETTER_SHELF = 0x02FD,						// U+02FD	MODIFIER LETTER SHELF
//   U_MODIFIER_LETTER_OPEN_SHELF = 0x02FE,					// U+02FE	MODIFIER LETTER OPEN SHELF
//   U_MODIFIER_LETTER_LOW_LEFT_ARROW = 0x02FF,				// U+02FF	MODIFIER LETTER LOW LEFT ARROW
//   U_GREEK_LOWER_NUMERAL_SIGN = 0x0375,					// U+0375	GREEK LOWER NUMERAL SIGN
//   U_GREEK_TONOS = 0x0384,									// U+0384	GREEK TONOS
//   U_GREEK_DIALYTIKA_TONOS = 0x0385,						// U+0385	GREEK DIALYTIKA TONOS
//   U_GREEK_KORONIS = 0x1FBD,								// U+1FBD	GREEK KORONIS
//   U_GREEK_PSILI = 0x1FBF,									// U+1FBF	GREEK PSILI
//   U_GREEK_PERISPOMENI = 0x1FC0,							// U+1FC0	GREEK PERISPOMENI
//   U_GREEK_DIALYTIKA_AND_PERISPOMENI = 0x1FC1,				// U+1FC1	GREEK DIALYTIKA AND PERISPOMENI
//   U_GREEK_PSILI_AND_VARIA = 0x1FCD,						// U+1FCD	GREEK PSILI AND VARIA
//   U_GREEK_PSILI_AND_OXIA = 0x1FCE,						// U+1FCE	GREEK PSILI AND OXIA
//   U_GREEK_PSILI_AND_PERISPOMENI = 0x1FCF,					// U+1FCF	GREEK PSILI AND PERISPOMENI
//   U_GREEK_DASIA_AND_VARIA = 0x1FDD,						// U+1FDD	GREEK DASIA AND VARIA
//   U_GREEK_DASIA_AND_OXIA = 0x1FDE,						// U+1FDE	GREEK DASIA AND OXIA
//   U_GREEK_DASIA_AND_PERISPOMENI = 0x1FDF,					// U+1FDF	GREEK DASIA AND PERISPOMENI
//   U_GREEK_DIALYTIKA_AND_VARIA = 0x1FED,					// U+1FED	GREEK DIALYTIKA AND VARIA
//   U_GREEK_DIALYTIKA_AND_OXIA = 0x1FEE,					// U+1FEE	GREEK DIALYTIKA AND OXIA
//   U_GREEK_VARIA = 0x1FEF,									// U+1FEF	GREEK VARIA
//   U_GREEK_OXIA = 0x1FFD,									// U+1FFD	GREEK OXIA
//   U_GREEK_DASIA = 0x1FFE,									// U+1FFE	GREEK DASIA

//   U_OVERLINE = 0x203E, // Unicode Character 'OVERLINE'

//   /**
//    * UTF-8 BOM
//    * Unicode Character 'ZERO WIDTH NO-BREAK SPACE' (U+FEFF)
//    * http://www.fileformat.info/info/unicode/char/feff/index.htm
//    */
//   UTF8_BOM = 65279
// }

// export class RGBA {
//   _rgbaBrand: void

//   /**
//    * Red: integer in [0-255]
//    */
//   public readonly r: number
//   /**
//    * Green: integer in [0-255]
//    */
//   public readonly g: number
//   /**
//    * Blue: integer in [0-255]
//    */
//   public readonly b: number
//   /**
//    * Alpha: integer in [0-255]
//    */
//   public readonly a: number

//   constructor(r: number, g: number, b: number, a: number = 255) {
//     this.r = RGBA._clampInt_0_255(r)
//     this.g = RGBA._clampInt_0_255(g)
//     this.b = RGBA._clampInt_0_255(b)
//     this.a = RGBA._clampInt_0_255(a)
//   }

//   public static equals(a: RGBA, b: RGBA): boolean {
//     return (
//       a.r === b.r
//       && a.g === b.g
//       && a.b === b.b
//       && a.a === b.a
//     )
//   }

//   private static _clampInt_0_255(c: number): number {
//     if (c < 0) {
//       return 0
//     }
//     if (c > 255) {
//       return 255
//     }
//     return c | 0
//   }
// }

// /**
//  * http://en.wikipedia.org/wiki/HSL_color_space
//  */
// export class HSLA {
//   _hslaBrand: void

//   /**
//    * Hue: float in [0, 360]
//    */
//   public readonly h: number
//   /**
//    * Saturation: float in [0, 1]
//    */
//   public readonly s: number
//   /**
//    * Luminosity: float in [0, 1]
//    */
//   public readonly l: number
//   /**
//    * Alpha: float in [0, 1]
//    */
//   public readonly a: number

//   constructor(h: number, s: number, l: number, a: number) {
//     this.h = HSLA._clampFloat_0_360(h)
//     this.s = HSLA._clampFloat_0_1(s)
//     this.l = HSLA._clampFloat_0_1(l)
//     this.a = HSLA._clampFloat_0_1(a)
//   }

//   private static _clampFloat_0_360(hue: number): number {
//     if (hue < 0) {
//       return 0.0
//     }
//     if (hue > 360) {
//       return 360.0
//     }
//     return hue
//   }

//   private static _clampFloat_0_1(n: number): number {
//     if (n < 0) {
//       return 0.0
//     }
//     if (n > 1) {
//       return 1.0
//     }
//     return n
//   }
// }

// /**
//  * Converts an Hex color value to RGB.
//  * returns r, g, and b are contained in the set [0, 255]
//  * @param hex string (#RGB, #RGBA, #RRGGBB or #RRGGBBAA).
//  */
// function hex2rgba(hex: string): RGBA | null {
//   if (!hex) {
//     // Invalid color
//     return null
//   }
//   const length = hex.length

//   if (length === 0) {
//     // Invalid color
//     return null
//   }

//   if (hex.charCodeAt(0) !== CharCode.Hash) {
//     // Does not begin with a #
//     return null
//   }

//   if (length === 7) {
//     // #RRGGBB format
//     const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2))
//     const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4))
//     const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6))
//     return new RGBA(r, g, b, 255)
//   }

//   if (length === 9) {
//     // #RRGGBBAA format
//     const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2))
//     const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4))
//     const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6))
//     const a = 16 * _parseHexDigit(hex.charCodeAt(7)) + _parseHexDigit(hex.charCodeAt(8))
//     return new RGBA(r, g, b, a)
//   }

//   if (length === 4) {
//     // #RGB format
//     const r = _parseHexDigit(hex.charCodeAt(1))
//     const g = _parseHexDigit(hex.charCodeAt(2))
//     const b = _parseHexDigit(hex.charCodeAt(3))
//     return new RGBA(16 * r + r, 16 * g + g, 16 * b + b)
//   }

//   if (length === 5) {
//     // #RGBA format
//     const r = _parseHexDigit(hex.charCodeAt(1))
//     const g = _parseHexDigit(hex.charCodeAt(2))
//     const b = _parseHexDigit(hex.charCodeAt(3))
//     const a = _parseHexDigit(hex.charCodeAt(4))
//     return new RGBA(16 * r + r, 16 * g + g, 16 * b + b, 16 * a + a)
//   }

//   // Invalid color
//   return null
// }

// const colorPattern = /^#[0-9A-Fa-f]{3,8}$/i

// export function isValidHexColor(hex: string): boolean {
//   return colorPattern.test(hex) && hex.length !== 6 && hex.length !== 8
// }

// function _parseHexDigit(charCode: CharCode): number {
//   switch (charCode) {
//     case CharCode.Digit0: return 0
//     case CharCode.Digit1: return 1
//     case CharCode.Digit2: return 2
//     case CharCode.Digit3: return 3
//     case CharCode.Digit4: return 4
//     case CharCode.Digit5: return 5
//     case CharCode.Digit6: return 6
//     case CharCode.Digit7: return 7
//     case CharCode.Digit8: return 8
//     case CharCode.Digit9: return 9
//     case CharCode.a: return 10
//     case CharCode.A: return 10
//     case CharCode.b: return 11
//     case CharCode.B: return 11
//     case CharCode.c: return 12
//     case CharCode.C: return 12
//     case CharCode.d: return 13
//     case CharCode.D: return 13
//     case CharCode.e: return 14
//     case CharCode.E: return 14
//     case CharCode.f: return 15
//     case CharCode.F: return 15
//   }
//   return 0
// }

// /**
//  * Converts an RGB color value to HSL. Conversion formula
//  * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
//  * Assumes r, g, and b are contained in the set [0, 255] and
//  * returns h in the set [0, 360], s, and l in the set [0, 1].
//  */
// function rgba2hsla(rgba: RGBA): HSLA {
//   const r = rgba.r / 255
//   const g = rgba.g / 255
//   const b = rgba.b / 255
//   const a = rgba.a / 255

//   const max = Math.max(r, g, b)
//   const min = Math.min(r, g, b)
//   let h = 0
//   let s = 0
//   const l = Math.round(((min + max) / 2) * 1000) / 1000
//   const chroma = max - min

//   if (chroma > 0) {
//     s = Math.min(Math.round((l <= 0.5 ? chroma / (2 * l) : chroma / (2 - (2 * l))) * 1000) / 1000, 1)
//     switch (max) {
//       case r: h = (g - b) / chroma + (g < b ? 6 : 0); break
//       case g: h = (b - r) / chroma + 2; break
//       case b: h = (r - g) / chroma + 4; break
//     }
//     h *= 60
//     h = Math.round(h)
//   }
//   return new HSLA(h, s, l, a)
// }

// /**
//  * Converts an HSL color value to RGB. Conversion formula
//  * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
//  * Assumes h in the set [0, 360] s, and l are contained in the set [0, 1] and
//  * returns r, g, and b in the set [0, 255].
//  */
// function hsla2rgba(hsla: HSLA): RGBA {
//   const h = hsla.h / 360
//   const s = Math.min(hsla.s, 1)
//   const l = Math.min(hsla.l, 1)
//   const a = hsla.a
//   let r: number
//   let g: number
//   let b: number

//   if (s === 0) {
//     r = g = b = l // achromatic
//   } else {
//     const q = l < 0.5 ? l * (1 + s) : l + s - l * s
//     const p = 2 * l - q
//     r = _hue2rgb(p, q, h + 1 / 3)
//     g = _hue2rgb(p, q, h)
//     b = _hue2rgb(p, q, h - 1 / 3)
//   }

//   return new RGBA(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), Math.round(a * 255))
// }

// function _hue2rgb(p: number, q: number, t: number) {
//   if (t < 0) {
//     t += 1
//   }
//   if (t > 1) {
//     t -= 1
//   }
//   if (t < 1 / 6) {
//     return p + (q - p) * 6 * t
//   }
//   if (t < 1 / 2) {
//     return q
//   }
//   if (t < 2 / 3) {
//     return p + (q - p) * (2 / 3 - t) * 6
//   }
//   return p
// }

// export class Color {

//   public static fromRGBA(rgba: RGBA): Color {
//     return new Color(rgba)
//   }

//   /**
//    * Creates a color from a hex string (#RRGGBB or #RRGGBBAA).
//    */
//   public static fromHex(hex: string, parseErrorColor = Color.red): Color {
//     let rgba = hex2rgba(hex)
//     if (rgba) {
//       return new Color(rgba)
//     }
//     return parseErrorColor
//   }

//   public static fromHSLA(hsla: HSLA): Color {
//     return new Color(hsla2rgba(hsla))
//   }

//   private readonly rgba: RGBA

//   private constructor(arg: RGBA) {
//     this.rgba = arg
//   }

//   public equals(other: Color): boolean {
//     if (!other) {
//       return false
//     }
//     return RGBA.equals(this.rgba, other.rgba)
//   }

//   /**
//    * http://www.w3.org/TR/WCAG20/#relativeluminancedef
//    * Returns the number in the set [0, 1]. O => Darkest Black. 1 => Lightest white.
//    */
//   public getLuminosity(): number {
//     const R = Color._luminosityFor(this.rgba.r)
//     const G = Color._luminosityFor(this.rgba.g)
//     const B = Color._luminosityFor(this.rgba.b)
//     const luminosity = 0.2126 * R + 0.7152 * G + 0.0722 * B
//     return Math.round(luminosity * 10000) / 10000
//   }

//   private static _luminosityFor(color: number): number {
//     const c = color / 255
//     return (c <= 0.03928) ? c / 12.92 : Math.pow(((c + 0.055) / 1.055), 2.4)
//   }

//   /**
//    * http://www.w3.org/TR/WCAG20/#contrast-ratiodef
//    * Returns the contrast ration number in the set [1, 21].
//    */
//   public getContrast(another: Color): number {
//     const lum1 = this.getLuminosity()
//     const lum2 = another.getLuminosity()
//     return lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05)
//   }

//   /**
//    *  http://24ways.org/2010/calculating-color-contrast
//    *  Return 'true' if darker color otherwise 'false'
//    */
//   public isDarker(): boolean {
//     const yiq = (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1000
//     return yiq < 128
//   }

//   /**
//    *  http://24ways.org/2010/calculating-color-contrast
//    *  Return 'true' if lighter color otherwise 'false'
//    */
//   public isLighter(): boolean {
//     const yiq = (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1000
//     return yiq >= 128
//   }

//   public isLighterThan(another: Color): boolean {
//     const lum1 = this.getLuminosity()
//     const lum2 = another.getLuminosity()
//     return lum1 > lum2
//   }

//   public isDarkerThan(another: Color): boolean {
//     const lum1 = this.getLuminosity()
//     const lum2 = another.getLuminosity()
//     return lum1 < lum2
//   }

//   public lighten(factor: number): Color {
//     const hsl = this.toHSLA()
//     const result = new HSLA(hsl.h, hsl.s, hsl.l + hsl.l * factor, hsl.a)
//     return new Color(hsla2rgba(result))
//   }

//   public darken(factor: number): Color {
//     const hsl = this.toHSLA()
//     const result = new HSLA(hsl.h, hsl.s, hsl.l - hsl.l * factor, hsl.a)
//     return new Color(hsla2rgba(result))
//   }

//   public transparent(factor: number): Color {
//     const p = this.rgba
//     return new Color(new RGBA(p.r, p.g, p.b, Math.round(p.a * factor)))
//   }

//   public isTransparent(): boolean {
//     return this.rgba.a === 0
//   }

//   public opposite(): Color {
//     return new Color(new RGBA(
//       255 - this.rgba.r,
//       255 - this.rgba.g,
//       255 - this.rgba.b,
//       this.rgba.a
//     ))
//   }

//   public toString(): string {
//     const rgba = this.rgba
//     if (rgba.a === 255) {
//       return this.toRGBHex()
//     }
//     return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${+(rgba.a / 255).toFixed(2)})`
//   }

//   /**
//    * Prins the color as #RRGGBB
//    */
//   public toRGBHex(): string {
//     const rgba = this.rgba
//     return `#${Color._toTwoDigitHex(rgba.r)}${Color._toTwoDigitHex(rgba.g)}${Color._toTwoDigitHex(rgba.b)}`
//   }

//   /**
//    * Prins the color as #RRGGBBAA
//    * If 'compact' is set, colors without transparancy will be printed as #RRGGBB
//    */
//   public toRGBAHex(compact = false): string {
//     const rgba = this.rgba
//     if (compact && rgba.a === 0xFF) {
//       return this.toRGBHex()
//     }
//     return `#${Color._toTwoDigitHex(rgba.r)}${Color._toTwoDigitHex(rgba.g)}${Color._toTwoDigitHex(rgba.b)}${Color._toTwoDigitHex(rgba.a)}`
//   }

//   private static _toTwoDigitHex(n: number): string {
//     let r = n.toString(16)
//     if (r.length !== 2) {
//       return '0' + r
//     }
//     return r
//   }

//   public toHSLA(): HSLA {
//     return rgba2hsla(this.rgba)
//   }

//   public toRGBA(): RGBA {
//     return this.rgba
//   }

//   public static getLighterColor(of: Color, relative: Color, factor?: number): Color {
//     if (of.isLighterThan(relative)) {
//       return of
//     }
//     factor = factor ? factor : 0.5
//     const lum1 = of.getLuminosity()
//     const lum2 = relative.getLuminosity()
//     factor = factor * (lum2 - lum1) / lum2
//     return of.lighten(factor)
//   }

//   public static getDarkerColor(of: Color, relative: Color, factor?: number): Color {
//     if (of.isDarkerThan(relative)) {
//       return of
//     }
//     factor = factor ? factor : 0.5
//     const lum1 = of.getLuminosity()
//     const lum2 = relative.getLuminosity()
//     factor = factor * (lum1 - lum2) / lum1
//     return of.darken(factor)
//   }

//   public static readonly white = new Color(new RGBA(255, 255, 255, 255))
//   public static readonly black = new Color(new RGBA(0, 0, 0, 255))
//   public static readonly red = new Color(new RGBA(255, 0, 0, 255))
//   public static readonly blue = new Color(new RGBA(0, 0, 255, 255))
//   public static readonly green = new Color(new RGBA(0, 255, 0, 255))
//   public static readonly cyan = new Color(new RGBA(0, 255, 255, 255))
//   public static readonly lightgrey = new Color(new RGBA(211, 211, 211, 255))
//   public static readonly transparent = new Color(new RGBA(0, 0, 0, 0))
// }

// export interface ITokenThemeRule {
//   token: string
//   foreground?: string
//   background?: string
//   fontStyle?: string
// }

// export class ParsedTokenThemeRule {
//   _parsedThemeRuleBrand: void

//   readonly token: string
//   readonly index: number

//   /**
//    * -1 if not set. An or mask of `FontStyle` otherwise.
//    */
//   readonly fontStyle: FontStyle
//   readonly foreground: string | null
//   readonly background: string | null

//   constructor(
//     token: string,
//     index: number,
//     fontStyle: number,
//     foreground: string | null,
//     background: string | null
//   ) {
//     this.token = token
//     this.index = index
//     this.fontStyle = fontStyle
//     this.foreground = foreground
//     this.background = background
//   }
// }

// /**
//  * Parse a raw theme into rules.
//  */
// export function parseTokenTheme(source: ITokenThemeRule[]): ParsedTokenThemeRule[] {
//   if (!source || !Array.isArray(source)) {
//     return []
//   }
//   let result: ParsedTokenThemeRule[] = []
//   let resultLen = 0
//   for (let i = 0, len = source.length; i < len; i++) {
//     let entry = source[i]

//     let fontStyle: number = FontStyle.NotSet
//     if (typeof entry.fontStyle === 'string') {
//       fontStyle = FontStyle.None

//       let segments = entry.fontStyle.split(' ')
//       for (let j = 0, lenJ = segments.length; j < lenJ; j++) {
//         let segment = segments[j]
//         switch (segment) {
//           case 'italic':
//             fontStyle = fontStyle | FontStyle.Italic
//             break
//           case 'bold':
//             fontStyle = fontStyle | FontStyle.Bold
//             break
//           case 'underline':
//             fontStyle = fontStyle | FontStyle.Underline
//             break
//         }
//       }
//     }

//     let foreground: string | null = null
//     if (typeof entry.foreground === 'string') {
//       foreground = entry.foreground
//     }

//     let background: string | null = null
//     if (typeof entry.background === 'string') {
//       background = entry.background
//     }

//     result[resultLen++] = new ParsedTokenThemeRule(
//       entry.token || '',
//       i,
//       fontStyle,
//       foreground,
//       background
//     )
//   }

//   return result
// }

// /**
//  * Resolve rules (i.e. inheritance).
//  */
// function resolveParsedTokenThemeRules(parsedThemeRules: ParsedTokenThemeRule[]): TokenTheme {

//   // Sort rules lexicographically, and then by index if necessary
//   parsedThemeRules.sort((a, b) => {
//     let r = strcmp(a.token, b.token)
//     if (r !== 0) {
//       return r
//     }
//     return a.index - b.index
//   })

//   // Determine defaults
//   let defaultFontStyle = FontStyle.None
//   let defaultForeground = '000000'
//   let defaultBackground = 'ffffff'
//   while (parsedThemeRules.length >= 1 && parsedThemeRules[0].token === '') {
//     let incomingDefaults = parsedThemeRules.shift()!
//     if (incomingDefaults.fontStyle !== FontStyle.NotSet) {
//       defaultFontStyle = incomingDefaults.fontStyle
//     }
//     if (incomingDefaults.foreground !== null) {
//       defaultForeground = incomingDefaults.foreground
//     }
//     if (incomingDefaults.background !== null) {
//       defaultBackground = incomingDefaults.background
//     }
//   }
//   let colorMap = new ColorMap()
//   // ensure default foreground gets id 1 and default background gets id 2
//   let defaults = new ThemeTrieElementRule(defaultFontStyle, colorMap.getId(defaultForeground), colorMap.getId(defaultBackground))

//   let root = new ThemeTrieElement(defaults)
//   for (let i = 0, len = parsedThemeRules.length; i < len; i++) {
//     let rule = parsedThemeRules[i]
//     root.insert(rule.token, rule.fontStyle, colorMap.getId(rule.foreground), colorMap.getId(rule.background))
//   }

//   return new TokenTheme(colorMap, root)
// }

// export class ColorMap {

//   private _lastColorId: number
//   private _id2color: Color[]
//   private _color2id: Map<string, ColorId>

//   constructor() {
//     this._lastColorId = 0
//     this._id2color = []
//     this._color2id = new Map<string, ColorId>()
//   }

//   public getId(color: string | null): ColorId {
//     if (color === null) {
//       return 0
//     }
//     color = color.toUpperCase()
//     if (!/^[0-9A-F]{6}$/.test(color)) {
//       throw new Error('Illegal color name: ' + color)
//     }
//     let value = this._color2id.get(color)
//     if (value) {
//       return value
//     }
//     value = ++this._lastColorId
//     this._color2id.set(color, value)
//     this._id2color[value] = Color.fromHex('#' + color)
//     return value
//   }

//   public getColorMap(): Color[] {
//     return this._id2color.slice(0)
//   }

// }

// export class TokenTheme {

//   public static createFromRawTokenTheme(source: ITokenThemeRule[]): TokenTheme {
//     return this.createFromParsedTokenTheme(parseTokenTheme(source))
//   }

//   public static createFromParsedTokenTheme(source: ParsedTokenThemeRule[]): TokenTheme {
//     return resolveParsedTokenThemeRules(source)
//   }

//   private readonly _colorMap: ColorMap
//   private readonly _root: ThemeTrieElement
//   private readonly _cache: Map<string, number>

//   constructor(colorMap: ColorMap, root: ThemeTrieElement) {
//     this._colorMap = colorMap
//     this._root = root
//     this._cache = new Map<string, number>()
//   }

//   public getColorMap(): Color[] {
//     return this._colorMap.getColorMap()
//   }

//   /**
//    * used for testing purposes
//    */
//   public getThemeTrieElement(): ExternalThemeTrieElement {
//     return this._root.toExternalThemeTrieElement()
//   }

//   public _match(token: string): ThemeTrieElementRule {
//     return this._root.match(token)
//   }

//   public match(languageId: LanguageId, token: string): number {
//     // The cache contains the metadata without the language bits set.
//     let result = this._cache.get(token)
//     if (typeof result === 'undefined') {
//       let rule = this._match(token)
//       let standardToken = toStandardTokenType(token)
//       result = (
//         rule.metadata
//         | (standardToken << MetadataConsts.TOKEN_TYPE_OFFSET)
//       ) >>> 0
//       this._cache.set(token, result)
//     }

//     return (
//       result
//       | (languageId << MetadataConsts.LANGUAGEID_OFFSET)
//     ) >>> 0
//   }
// }

// const STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex)\b/
// export function toStandardTokenType(tokenType: string): StandardTokenType {
//   let m = tokenType.match(STANDARD_TOKEN_TYPE_REGEXP)
//   if (!m) {
//     return StandardTokenType.Other
//   }
//   switch (m[1]) {
//     case 'comment':
//       return StandardTokenType.Comment
//     case 'string':
//       return StandardTokenType.String
//     case 'regex':
//       return StandardTokenType.RegEx
//   }
//   throw new Error('Unexpected match for standard token type!')
// }

// export function strcmp(a: string, b: string): number {
//   if (a < b) {
//     return -1
//   }
//   if (a > b) {
//     return 1
//   }
//   return 0
// }

// export class ThemeTrieElementRule {
//   _themeTrieElementRuleBrand: void

//   private _fontStyle: FontStyle
//   private _foreground: ColorId
//   private _background: ColorId
//   public metadata: number

//   constructor(fontStyle: FontStyle, foreground: ColorId, background: ColorId) {
//     this._fontStyle = fontStyle
//     this._foreground = foreground
//     this._background = background
//     this.metadata = (
//       (this._fontStyle << MetadataConsts.FONT_STYLE_OFFSET)
//       | (this._foreground << MetadataConsts.FOREGROUND_OFFSET)
//       | (this._background << MetadataConsts.BACKGROUND_OFFSET)
//     ) >>> 0
//   }

//   public clone(): ThemeTrieElementRule {
//     return new ThemeTrieElementRule(this._fontStyle, this._foreground, this._background)
//   }

//   public static cloneArr(arr: ThemeTrieElementRule[]): ThemeTrieElementRule[] {
//     let r: ThemeTrieElementRule[] = []
//     for (let i = 0, len = arr.length; i < len; i++) {
//       r[i] = arr[i].clone()
//     }
//     return r
//   }

//   public acceptOverwrite(fontStyle: FontStyle, foreground: ColorId, background: ColorId): void {
//     if (fontStyle !== FontStyle.NotSet) {
//       this._fontStyle = fontStyle
//     }
//     if (foreground !== ColorId.None) {
//       this._foreground = foreground
//     }
//     if (background !== ColorId.None) {
//       this._background = background
//     }
//     this.metadata = (
//       (this._fontStyle << MetadataConsts.FONT_STYLE_OFFSET)
//       | (this._foreground << MetadataConsts.FOREGROUND_OFFSET)
//       | (this._background << MetadataConsts.BACKGROUND_OFFSET)
//     ) >>> 0
//   }
// }

// export class ExternalThemeTrieElement {

//   public readonly mainRule: ThemeTrieElementRule
//   public readonly children: { [segment: string]: ExternalThemeTrieElement }

//   constructor(mainRule: ThemeTrieElementRule, children?: { [segment: string]: ExternalThemeTrieElement }) {
//     this.mainRule = mainRule
//     this.children = children || Object.create(null)
//   }
// }

// export class ThemeTrieElement {
//   _themeTrieElementBrand: void

//   private readonly _mainRule: ThemeTrieElementRule
//   private readonly _children: Map<string, ThemeTrieElement>

//   constructor(mainRule: ThemeTrieElementRule) {
//     this._mainRule = mainRule
//     this._children = new Map<string, ThemeTrieElement>()
//   }

//   /**
//    * used for testing purposes
//    */
//   public toExternalThemeTrieElement(): ExternalThemeTrieElement {
//     let children: { [segment: string]: ExternalThemeTrieElement } = Object.create(null)
//     this._children.forEach((element, index) => {
//       children[index] = element.toExternalThemeTrieElement()
//     })
//     return new ExternalThemeTrieElement(this._mainRule, children)
//   }

//   public match(token: string): ThemeTrieElementRule {
//     if (token === '') {
//       return this._mainRule
//     }

//     let dotIndex = token.indexOf('.')
//     let head: string
//     let tail: string
//     if (dotIndex === -1) {
//       head = token
//       tail = ''
//     } else {
//       head = token.substring(0, dotIndex)
//       tail = token.substring(dotIndex + 1)
//     }

//     let child = this._children.get(head)
//     if (typeof child !== 'undefined') {
//       return child.match(tail)
//     }

//     return this._mainRule
//   }

//   public insert(token: string, fontStyle: FontStyle, foreground: ColorId, background: ColorId): void {
//     if (token === '') {
//       // Merge into the main rule
//       this._mainRule.acceptOverwrite(fontStyle, foreground, background)
//       return
//     }

//     let dotIndex = token.indexOf('.')
//     let head: string
//     let tail: string
//     if (dotIndex === -1) {
//       head = token
//       tail = ''
//     } else {
//       head = token.substring(0, dotIndex)
//       tail = token.substring(dotIndex + 1)
//     }

//     let child = this._children.get(head)
//     if (typeof child === 'undefined') {
//       child = new ThemeTrieElement(this._mainRule.clone())
//       this._children.set(head, child)
//     }

//     child.insert(tail, fontStyle, foreground, background)
//   }
// }

// export function generateTokensCSSForColorMap(colorMap: Color[]): string {
//   let rules: string[] = []
//   for (let i = 1, len = colorMap.length; i < len; i++) {
//     let color = colorMap[i]
//     rules[i] = `.mtk${i} { color: ${color.toString()}; }`
//   }
//   rules.push('.mtki { font-style: italic; }')
//   rules.push('.mtkb { font-weight: bold; }')
//   rules.push('.mtku { text-decoration: underline; }')
//   return rules.join('\n')
// }

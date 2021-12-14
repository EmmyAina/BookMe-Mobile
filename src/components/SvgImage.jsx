import React from "react";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-identicon-sprites";
import { SvgCss } from "react-native-svg";

const y = Math.random()
const x = y.toString()
console.log(x)
const xml = createAvatar(style, {
	seed: x,
});

const SvgComponent = (props) => {
	return <SvgCss xml={xml} width={props.width} height={props.height} />;
}

export default SvgComponent;
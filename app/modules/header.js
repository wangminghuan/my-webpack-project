/*
  M底部小黑条配置内容
 */

import local from "./header.scss";
import {browserInfo} from "../common/js/utils";

export default function() {
	let domStr='<div class='+local.wrapClass+'>';
	    domStr+='<span>当前浏览器标识为：'+browserInfo;
	    domStr+='</span><i class="close"></i></div>';
    return domStr
}

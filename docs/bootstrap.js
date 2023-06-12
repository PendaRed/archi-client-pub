/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./archi-client/archi_client_bg.wasm": function() {
/******/ 			return {
/******/ 				"./archi_client_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_in": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_in"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_abda76e883ba8a5f": function() {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_new_abda76e883ba8a5f"]();
/******/ 					},
/******/ 					"__wbg_stack_658279fe44541cf6": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_stack_658279fe44541cf6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_f851667af71bcfc6": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_error_f851667af71bcfc6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_jsval_loose_eq": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_jsval_loose_eq"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbg_getwithrefkey_15c62c2b8546208d": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_getwithrefkey_15c62c2b8546208d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_error_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_error_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_acc97ff9f5d2c7b4": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_instanceof_Window_acc97ff9f5d2c7b4"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_3ead31dbcad65886": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_document_3ead31dbcad65886"](p0i32);
/******/ 					},
/******/ 					"__wbg_performance_de9825f9a8678574": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_performance_de9825f9a8678574"](p0i32);
/******/ 					},
/******/ 					"__wbg_requestAnimationFrame_4181656476a7d86c": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_requestAnimationFrame_4181656476a7d86c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_fetch_0fe04905cccfc2aa": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_fetch_0fe04905cccfc2aa"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_settitle_7d2024d80235e54f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_settitle_7d2024d80235e54f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_createElement_976dbb84fe1661b5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_createElement_976dbb84fe1661b5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getElementById_3a708b83e4f034d7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_getElementById_3a708b83e4f034d7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_97761617af6ea089": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_97761617af6ea089"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_2f4b0cbbf1c850d9": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_width_2f4b0cbbf1c850d9"](p0i32);
/******/ 					},
/******/ 					"__wbg_height_a81d308a000d91d0": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_height_a81d308a000d91d0"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_4d5e97892c1b206a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_getContext_4d5e97892c1b206a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_textContent_77bd294928962f93": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_textContent_77bd294928962f93"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_settextContent_538ceb17614272d8": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_settextContent_538ceb17614272d8"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_appendChild_e513ef0e5098dfdd": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_appendChild_e513ef0e5098dfdd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_width_87b8dcd7cafaeec1": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_width_87b8dcd7cafaeec1"](p0i32);
/******/ 					},
/******/ 					"__wbg_actualBoundingBoxAscent_809564070d88ca57": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_actualBoundingBoxAscent_809564070d88ca57"](p0i32);
/******/ 					},
/******/ 					"__wbg_actualBoundingBoxDescent_cd1021274d0de14a": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_actualBoundingBoxDescent_cd1021274d0de14a"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlSelectElement_e8421685c2eaa299": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_instanceof_HtmlSelectElement_e8421685c2eaa299"](p0i32);
/******/ 					},
/******/ 					"__wbg_selectedOptions_37ac25dc0c1e3dec": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_selectedOptions_37ac25dc0c1e3dec"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_cbe4c6f619b032f3": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_addEventListener_cbe4c6f619b032f3"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_set_992c1d31586b2957": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_set_992c1d31586b2957"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_item_37cbb972da31ad43": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_item_37cbb972da31ad43"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Response_eaa426220848a39e": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_instanceof_Response_eaa426220848a39e"](p0i32);
/******/ 					},
/******/ 					"__wbg_json_eb16b12f372e850c": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_json_eb16b12f372e850c"](p0i32);
/******/ 					},
/******/ 					"__wbg_id_cd50e7899661ceb1": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_id_cd50e7899661ceb1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setid_d6ea60ebd257fe07": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_setid_d6ea60ebd257fe07"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_d8436c14a59ab1af": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_setAttribute_d8436c14a59ab1af"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_log_4b5638ad60bdc54a": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_log_4b5638ad60bdc54a"](p0i32);
/******/ 					},
/******/ 					"__wbg_setonchange_2f4b83827943de9b": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_setonchange_2f4b83827943de9b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622"](p0i32);
/******/ 					},
/******/ 					"__wbg_setstrokeStyle_899ea3720dae323b": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_setstrokeStyle_899ea3720dae323b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setfillStyle_53ccf2a9886c1c4d": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_setfillStyle_53ccf2a9886c1c4d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setlineWidth_64004648773fed7a": function(p0i32,p1f64) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_setlineWidth_64004648773fed7a"](p0i32,p1f64);
/******/ 					},
/******/ 					"__wbg_beginPath_4e91b7092d0d33d9": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_beginPath_4e91b7092d0d33d9"](p0i32);
/******/ 					},
/******/ 					"__wbg_fill_8ec436f419a0d161": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_fill_8ec436f419a0d161"](p0i32);
/******/ 					},
/******/ 					"__wbg_stroke_85dee7d87c4a6ead": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_stroke_85dee7d87c4a6ead"](p0i32);
/******/ 					},
/******/ 					"__wbg_arc_30e550c408f151ac": function(p0i32,p1f64,p2f64,p3f64,p4f64,p5f64) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_arc_30e550c408f151ac"](p0i32,p1f64,p2f64,p3f64,p4f64,p5f64);
/******/ 					},
/******/ 					"__wbg_closePath_d0ab75d4def749a2": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_closePath_d0ab75d4def749a2"](p0i32);
/******/ 					},
/******/ 					"__wbg_lineTo_dbe49320dd6e392a": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_lineTo_dbe49320dd6e392a"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_moveTo_15a09390bee05586": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_moveTo_15a09390bee05586"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_quadraticCurveTo_e9132aea37764526": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_quadraticCurveTo_e9132aea37764526"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_fillRect_c7a19e13c5242507": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_fillRect_c7a19e13c5242507"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_strokeRect_972fbfb664182aea": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_strokeRect_972fbfb664182aea"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_fillText_e5b1cef36b742bcc": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_fillText_e5b1cef36b742bcc"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_measureText_734acef1b5e2b3fd": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_measureText_734acef1b5e2b3fd"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_offsetX_8891849b36542d53": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_offsetX_8891849b36542d53"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetY_1f52082687af467b": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_offsetY_1f52082687af467b"](p0i32);
/******/ 					},
/******/ 					"__wbg_now_8172cd917e5eda6b": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_now_8172cd917e5eda6b"](p0i32);
/******/ 					},
/******/ 					"__wbg_headers_85824e993aa739bf": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_headers_85824e993aa739bf"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithstrandinit_05d7180788420c40": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_newwithstrandinit_05d7180788420c40"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_get_57245cc7d7c7619d": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_get_57245cc7d7c7619d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_length_6e3bbe7c8bd4dbd8": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_length_6e3bbe7c8bd4dbd8"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_b5b063fc6c2f0376": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_newnoargs_b5b063fc6c2f0376"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_next_579e583d33566a86": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_next_579e583d33566a86"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_aaef7c8aa5e212ac": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_next_aaef7c8aa5e212ac"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_1b73b0672e15f234": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_done_1b73b0672e15f234"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_1ccc36bc03462d71": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_value_1ccc36bc03462d71"](p0i32);
/******/ 					},
/******/ 					"__wbg_iterator_6f9d4f28845f426c": function() {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_iterator_6f9d4f28845f426c"]();
/******/ 					},
/******/ 					"__wbg_get_765201544a2b6869": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_get_765201544a2b6869"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_97ae9d8645dc388b": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_call_97ae9d8645dc388b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_0b9bfdd97583284e": function() {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_new_0b9bfdd97583284e"]();
/******/ 					},
/******/ 					"__wbg_self_6d479506f72c6a71": function() {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_self_6d479506f72c6a71"]();
/******/ 					},
/******/ 					"__wbg_window_f2557cc78490aceb": function() {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_window_f2557cc78490aceb"]();
/******/ 					},
/******/ 					"__wbg_globalThis_7f206bda628d5286": function() {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_globalThis_7f206bda628d5286"]();
/******/ 					},
/******/ 					"__wbg_global_ba75c50d1cf384f4": function() {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_global_ba75c50d1cf384f4"]();
/******/ 					},
/******/ 					"__wbg_isArray_27c46c67f498e15d": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_isArray_27c46c67f498e15d"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b"](p0i32);
/******/ 					},
/******/ 					"__wbg_call_168da88779e35f61": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_call_168da88779e35f61"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_isSafeInteger_dfa0593e8d7ac35a": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_isSafeInteger_dfa0593e8d7ac35a"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_9962f939219f1820": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_new_9962f939219f1820"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_99fe17964f31ffc0": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_resolve_99fe17964f31ffc0"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_11f7a54d67b4bfad": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_then_11f7a54d67b4bfad"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_cedad20fbbd9418a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_then_cedad20fbbd9418a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_buffer_3f3d764d4747d564": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_buffer_3f3d764d4747d564"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_8c3f0052272a457a": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_new_8c3f0052272a457a"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_83db9690f9353e79": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_set_83db9690f9353e79"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_9e1ae1900cb0fbd5": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_length_9e1ae1900cb0fbd5"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Uint8Array_971eeda69eb75003": function(p0i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_instanceof_Uint8Array_971eeda69eb75003"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_bf3f89b92d5a34bf": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbg_set_bf3f89b92d5a34bf"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper174": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_closure_wrapper174"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper176": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_closure_wrapper176"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper178": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_closure_wrapper178"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper512": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./archi-client/archi_client_bg.js"].exports["__wbindgen_closure_wrapper512"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["./archi-client/archi_client_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./archi-client/archi_client_bg.wasm":"34b9cedb98dc29d12071"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\r\n// asynchronously. This `bootstrap.js` file does the single async import, so\r\n// that no one else needs to worry about it again.\r\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\r\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\r\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });
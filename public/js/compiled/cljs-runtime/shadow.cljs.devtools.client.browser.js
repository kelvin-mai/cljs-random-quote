goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40118 = arguments.length;
var i__4790__auto___40119 = (0);
while(true){
if((i__4790__auto___40119 < len__4789__auto___40118)){
args__4795__auto__.push((arguments[i__4790__auto___40119]));

var G__40120 = (i__4790__auto___40119 + (1));
i__4790__auto___40119 = G__40120;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39922){
var G__39923 = cljs.core.first(seq39922);
var seq39922__$1 = cljs.core.next(seq39922);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39923,seq39922__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__39937){
var map__39938 = p__39937;
var map__39938__$1 = (((((!((map__39938 == null))))?(((((map__39938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39938):map__39938);
var src = map__39938__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39938__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39938__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39943 = cljs.core.seq(sources);
var chunk__39944 = null;
var count__39945 = (0);
var i__39946 = (0);
while(true){
if((i__39946 < count__39945)){
var map__39961 = chunk__39944.cljs$core$IIndexed$_nth$arity$2(null,i__39946);
var map__39961__$1 = (((((!((map__39961 == null))))?(((((map__39961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39961):map__39961);
var src = map__39961__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39961__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39961__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39961__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39961__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e39963){var e_40123 = e39963;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40123);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40123.message)].join('')));
}

var G__40124 = seq__39943;
var G__40125 = chunk__39944;
var G__40126 = count__39945;
var G__40127 = (i__39946 + (1));
seq__39943 = G__40124;
chunk__39944 = G__40125;
count__39945 = G__40126;
i__39946 = G__40127;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39943);
if(temp__5735__auto__){
var seq__39943__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39943__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39943__$1);
var G__40128 = cljs.core.chunk_rest(seq__39943__$1);
var G__40129 = c__4609__auto__;
var G__40130 = cljs.core.count(c__4609__auto__);
var G__40131 = (0);
seq__39943 = G__40128;
chunk__39944 = G__40129;
count__39945 = G__40130;
i__39946 = G__40131;
continue;
} else {
var map__39964 = cljs.core.first(seq__39943__$1);
var map__39964__$1 = (((((!((map__39964 == null))))?(((((map__39964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39964):map__39964);
var src = map__39964__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39964__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39964__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39964__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39964__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e39970){var e_40134 = e39970;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40134);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40134.message)].join('')));
}

var G__40135 = cljs.core.next(seq__39943__$1);
var G__40136 = null;
var G__40137 = (0);
var G__40138 = (0);
seq__39943 = G__40135;
chunk__39944 = G__40136;
count__39945 = G__40137;
i__39946 = G__40138;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39971 = cljs.core.seq(js_requires);
var chunk__39972 = null;
var count__39973 = (0);
var i__39974 = (0);
while(true){
if((i__39974 < count__39973)){
var js_ns = chunk__39972.cljs$core$IIndexed$_nth$arity$2(null,i__39974);
var require_str_40139 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40139);


var G__40140 = seq__39971;
var G__40141 = chunk__39972;
var G__40142 = count__39973;
var G__40143 = (i__39974 + (1));
seq__39971 = G__40140;
chunk__39972 = G__40141;
count__39973 = G__40142;
i__39974 = G__40143;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39971);
if(temp__5735__auto__){
var seq__39971__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39971__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39971__$1);
var G__40144 = cljs.core.chunk_rest(seq__39971__$1);
var G__40145 = c__4609__auto__;
var G__40146 = cljs.core.count(c__4609__auto__);
var G__40147 = (0);
seq__39971 = G__40144;
chunk__39972 = G__40145;
count__39973 = G__40146;
i__39974 = G__40147;
continue;
} else {
var js_ns = cljs.core.first(seq__39971__$1);
var require_str_40148 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40148);


var G__40149 = cljs.core.next(seq__39971__$1);
var G__40150 = null;
var G__40151 = (0);
var G__40152 = (0);
seq__39971 = G__40149;
chunk__39972 = G__40150;
count__39973 = G__40151;
i__39974 = G__40152;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__39977 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__39977) : callback.call(null,G__39977));
} else {
var G__39978 = shadow.cljs.devtools.client.env.files_url();
var G__39979 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__39980 = "POST";
var G__39981 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__39982 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__39978,G__39979,G__39980,G__39981,G__39982);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__39985){
var map__39987 = p__39985;
var map__39987__$1 = (((((!((map__39987 == null))))?(((((map__39987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39987):map__39987);
var msg = map__39987__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39987__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39987__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__39989 = info;
var map__39989__$1 = (((((!((map__39989 == null))))?(((((map__39989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39989):map__39989);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39989__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39989__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39991(s__39992){
return (new cljs.core.LazySeq(null,(function (){
var s__39992__$1 = s__39992;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39992__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__39998 = cljs.core.first(xs__6292__auto__);
var map__39998__$1 = (((((!((map__39998 == null))))?(((((map__39998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39998):map__39998);
var src = map__39998__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39998__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39998__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__39992__$1,map__39998,map__39998__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39989,map__39989__$1,sources,compiled,map__39987,map__39987__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39991_$_iter__39993(s__39994){
return (new cljs.core.LazySeq(null,((function (s__39992__$1,map__39998,map__39998__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39989,map__39989__$1,sources,compiled,map__39987,map__39987__$1,msg,info,reload_info){
return (function (){
var s__39994__$1 = s__39994;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39994__$1);
if(temp__5735__auto____$1){
var s__39994__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39994__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__39994__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__39996 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__39995 = (0);
while(true){
if((i__39995 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__39995);
cljs.core.chunk_append(b__39996,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40155 = (i__39995 + (1));
i__39995 = G__40155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39996),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39991_$_iter__39993(cljs.core.chunk_rest(s__39994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39996),null);
}
} else {
var warning = cljs.core.first(s__39994__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39991_$_iter__39993(cljs.core.rest(s__39994__$2)));
}
} else {
return null;
}
break;
}
});})(s__39992__$1,map__39998,map__39998__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39989,map__39989__$1,sources,compiled,map__39987,map__39987__$1,msg,info,reload_info))
,null,null));
});})(s__39992__$1,map__39998,map__39998__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39989,map__39989__$1,sources,compiled,map__39987,map__39987__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39991(cljs.core.rest(s__39992__$1)));
} else {
var G__40159 = cljs.core.rest(s__39992__$1);
s__39992__$1 = G__40159;
continue;
}
} else {
var G__40160 = cljs.core.rest(s__39992__$1);
s__39992__$1 = G__40160;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__40000_40161 = cljs.core.seq(warnings);
var chunk__40001_40162 = null;
var count__40002_40163 = (0);
var i__40003_40164 = (0);
while(true){
if((i__40003_40164 < count__40002_40163)){
var map__40008_40165 = chunk__40001_40162.cljs$core$IIndexed$_nth$arity$2(null,i__40003_40164);
var map__40008_40166__$1 = (((((!((map__40008_40165 == null))))?(((((map__40008_40165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40008_40165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40008_40165):map__40008_40165);
var w_40167 = map__40008_40166__$1;
var msg_40168__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40008_40166__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40008_40166__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40008_40166__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40008_40166__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40171)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40169),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40170),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40168__$1)].join(''));


var G__40174 = seq__40000_40161;
var G__40175 = chunk__40001_40162;
var G__40176 = count__40002_40163;
var G__40177 = (i__40003_40164 + (1));
seq__40000_40161 = G__40174;
chunk__40001_40162 = G__40175;
count__40002_40163 = G__40176;
i__40003_40164 = G__40177;
continue;
} else {
var temp__5735__auto___40178 = cljs.core.seq(seq__40000_40161);
if(temp__5735__auto___40178){
var seq__40000_40179__$1 = temp__5735__auto___40178;
if(cljs.core.chunked_seq_QMARK_(seq__40000_40179__$1)){
var c__4609__auto___40181 = cljs.core.chunk_first(seq__40000_40179__$1);
var G__40182 = cljs.core.chunk_rest(seq__40000_40179__$1);
var G__40183 = c__4609__auto___40181;
var G__40184 = cljs.core.count(c__4609__auto___40181);
var G__40185 = (0);
seq__40000_40161 = G__40182;
chunk__40001_40162 = G__40183;
count__40002_40163 = G__40184;
i__40003_40164 = G__40185;
continue;
} else {
var map__40010_40186 = cljs.core.first(seq__40000_40179__$1);
var map__40010_40187__$1 = (((((!((map__40010_40186 == null))))?(((((map__40010_40186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40010_40186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40010_40186):map__40010_40186);
var w_40188 = map__40010_40187__$1;
var msg_40189__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40010_40187__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40010_40187__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40010_40187__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40010_40187__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40192)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40190),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40191),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40189__$1)].join(''));


var G__40196 = cljs.core.next(seq__40000_40179__$1);
var G__40197 = null;
var G__40198 = (0);
var G__40199 = (0);
seq__40000_40161 = G__40196;
chunk__40001_40162 = G__40197;
count__40002_40163 = G__40198;
i__40003_40164 = G__40199;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40012){
var map__40013 = p__40012;
var map__40013__$1 = (((((!((map__40013 == null))))?(((((map__40013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40013):map__40013);
var src = map__40013__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40013__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40013__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40016){
var map__40017 = p__40016;
var map__40017__$1 = (((((!((map__40017 == null))))?(((((map__40017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40017):map__40017);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40017__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40019){
var map__40020 = p__40019;
var map__40020__$1 = (((((!((map__40020 == null))))?(((((map__40020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40020):map__40020);
var rc = map__40020__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40020__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__39984_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39984_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__40024){
var map__40025 = p__40024;
var map__40025__$1 = (((((!((map__40025 == null))))?(((((map__40025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40025):map__40025);
var msg = map__40025__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40025__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__40027 = cljs.core.seq(updates);
var chunk__40029 = null;
var count__40030 = (0);
var i__40031 = (0);
while(true){
if((i__40031 < count__40030)){
var path = chunk__40029.cljs$core$IIndexed$_nth$arity$2(null,i__40031);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40060_40208 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40063_40209 = null;
var count__40064_40210 = (0);
var i__40065_40211 = (0);
while(true){
if((i__40065_40211 < count__40064_40210)){
var node_40212 = chunk__40063_40209.cljs$core$IIndexed$_nth$arity$2(null,i__40065_40211);
var path_match_40213 = shadow.cljs.devtools.client.browser.match_paths(node_40212.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40213)){
var new_link_40214 = (function (){var G__40070 = node_40212.cloneNode(true);
G__40070.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40213),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40070;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40213], 0));

goog.dom.insertSiblingAfter(new_link_40214,node_40212);

goog.dom.removeNode(node_40212);


var G__40216 = seq__40060_40208;
var G__40217 = chunk__40063_40209;
var G__40218 = count__40064_40210;
var G__40219 = (i__40065_40211 + (1));
seq__40060_40208 = G__40216;
chunk__40063_40209 = G__40217;
count__40064_40210 = G__40218;
i__40065_40211 = G__40219;
continue;
} else {
var G__40220 = seq__40060_40208;
var G__40221 = chunk__40063_40209;
var G__40222 = count__40064_40210;
var G__40223 = (i__40065_40211 + (1));
seq__40060_40208 = G__40220;
chunk__40063_40209 = G__40221;
count__40064_40210 = G__40222;
i__40065_40211 = G__40223;
continue;
}
} else {
var temp__5735__auto___40224 = cljs.core.seq(seq__40060_40208);
if(temp__5735__auto___40224){
var seq__40060_40225__$1 = temp__5735__auto___40224;
if(cljs.core.chunked_seq_QMARK_(seq__40060_40225__$1)){
var c__4609__auto___40227 = cljs.core.chunk_first(seq__40060_40225__$1);
var G__40229 = cljs.core.chunk_rest(seq__40060_40225__$1);
var G__40230 = c__4609__auto___40227;
var G__40231 = cljs.core.count(c__4609__auto___40227);
var G__40232 = (0);
seq__40060_40208 = G__40229;
chunk__40063_40209 = G__40230;
count__40064_40210 = G__40231;
i__40065_40211 = G__40232;
continue;
} else {
var node_40234 = cljs.core.first(seq__40060_40225__$1);
var path_match_40235 = shadow.cljs.devtools.client.browser.match_paths(node_40234.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40235)){
var new_link_40236 = (function (){var G__40071 = node_40234.cloneNode(true);
G__40071.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40235),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40071;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40235], 0));

goog.dom.insertSiblingAfter(new_link_40236,node_40234);

goog.dom.removeNode(node_40234);


var G__40237 = cljs.core.next(seq__40060_40225__$1);
var G__40238 = null;
var G__40239 = (0);
var G__40240 = (0);
seq__40060_40208 = G__40237;
chunk__40063_40209 = G__40238;
count__40064_40210 = G__40239;
i__40065_40211 = G__40240;
continue;
} else {
var G__40241 = cljs.core.next(seq__40060_40225__$1);
var G__40242 = null;
var G__40243 = (0);
var G__40244 = (0);
seq__40060_40208 = G__40241;
chunk__40063_40209 = G__40242;
count__40064_40210 = G__40243;
i__40065_40211 = G__40244;
continue;
}
}
} else {
}
}
break;
}


var G__40246 = seq__40027;
var G__40247 = chunk__40029;
var G__40248 = count__40030;
var G__40249 = (i__40031 + (1));
seq__40027 = G__40246;
chunk__40029 = G__40247;
count__40030 = G__40248;
i__40031 = G__40249;
continue;
} else {
var G__40250 = seq__40027;
var G__40251 = chunk__40029;
var G__40252 = count__40030;
var G__40253 = (i__40031 + (1));
seq__40027 = G__40250;
chunk__40029 = G__40251;
count__40030 = G__40252;
i__40031 = G__40253;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40027);
if(temp__5735__auto__){
var seq__40027__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40027__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40027__$1);
var G__40254 = cljs.core.chunk_rest(seq__40027__$1);
var G__40255 = c__4609__auto__;
var G__40256 = cljs.core.count(c__4609__auto__);
var G__40257 = (0);
seq__40027 = G__40254;
chunk__40029 = G__40255;
count__40030 = G__40256;
i__40031 = G__40257;
continue;
} else {
var path = cljs.core.first(seq__40027__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40073_40260 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40076_40262 = null;
var count__40077_40263 = (0);
var i__40078_40264 = (0);
while(true){
if((i__40078_40264 < count__40077_40263)){
var node_40265 = chunk__40076_40262.cljs$core$IIndexed$_nth$arity$2(null,i__40078_40264);
var path_match_40266 = shadow.cljs.devtools.client.browser.match_paths(node_40265.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40266)){
var new_link_40267 = (function (){var G__40084 = node_40265.cloneNode(true);
G__40084.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40266),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40084;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40266], 0));

goog.dom.insertSiblingAfter(new_link_40267,node_40265);

goog.dom.removeNode(node_40265);


var G__40269 = seq__40073_40260;
var G__40270 = chunk__40076_40262;
var G__40271 = count__40077_40263;
var G__40272 = (i__40078_40264 + (1));
seq__40073_40260 = G__40269;
chunk__40076_40262 = G__40270;
count__40077_40263 = G__40271;
i__40078_40264 = G__40272;
continue;
} else {
var G__40273 = seq__40073_40260;
var G__40274 = chunk__40076_40262;
var G__40275 = count__40077_40263;
var G__40276 = (i__40078_40264 + (1));
seq__40073_40260 = G__40273;
chunk__40076_40262 = G__40274;
count__40077_40263 = G__40275;
i__40078_40264 = G__40276;
continue;
}
} else {
var temp__5735__auto___40277__$1 = cljs.core.seq(seq__40073_40260);
if(temp__5735__auto___40277__$1){
var seq__40073_40280__$1 = temp__5735__auto___40277__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40073_40280__$1)){
var c__4609__auto___40281 = cljs.core.chunk_first(seq__40073_40280__$1);
var G__40283 = cljs.core.chunk_rest(seq__40073_40280__$1);
var G__40284 = c__4609__auto___40281;
var G__40285 = cljs.core.count(c__4609__auto___40281);
var G__40286 = (0);
seq__40073_40260 = G__40283;
chunk__40076_40262 = G__40284;
count__40077_40263 = G__40285;
i__40078_40264 = G__40286;
continue;
} else {
var node_40287 = cljs.core.first(seq__40073_40280__$1);
var path_match_40288 = shadow.cljs.devtools.client.browser.match_paths(node_40287.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40288)){
var new_link_40289 = (function (){var G__40086 = node_40287.cloneNode(true);
G__40086.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40288),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40086;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40288], 0));

goog.dom.insertSiblingAfter(new_link_40289,node_40287);

goog.dom.removeNode(node_40287);


var G__40291 = cljs.core.next(seq__40073_40280__$1);
var G__40292 = null;
var G__40293 = (0);
var G__40294 = (0);
seq__40073_40260 = G__40291;
chunk__40076_40262 = G__40292;
count__40077_40263 = G__40293;
i__40078_40264 = G__40294;
continue;
} else {
var G__40295 = cljs.core.next(seq__40073_40280__$1);
var G__40296 = null;
var G__40297 = (0);
var G__40298 = (0);
seq__40073_40260 = G__40295;
chunk__40076_40262 = G__40296;
count__40077_40263 = G__40297;
i__40078_40264 = G__40298;
continue;
}
}
} else {
}
}
break;
}


var G__40299 = cljs.core.next(seq__40027__$1);
var G__40300 = null;
var G__40301 = (0);
var G__40302 = (0);
seq__40027 = G__40299;
chunk__40029 = G__40300;
count__40030 = G__40301;
i__40031 = G__40302;
continue;
} else {
var G__40305 = cljs.core.next(seq__40027__$1);
var G__40306 = null;
var G__40307 = (0);
var G__40308 = (0);
seq__40027 = G__40305;
chunk__40029 = G__40306;
count__40030 = G__40307;
i__40031 = G__40308;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__40088){
var map__40089 = p__40088;
var map__40089__$1 = (((((!((map__40089 == null))))?(((((map__40089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40089):map__40089);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40089__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40089__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__40092,done){
var map__40093 = p__40092;
var map__40093__$1 = (((((!((map__40093 == null))))?(((((map__40093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40093):map__40093);
var msg = map__40093__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40093__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40093__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40093__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40093__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40095){
var map__40096 = p__40095;
var map__40096__$1 = (((((!((map__40096 == null))))?(((((map__40096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40096):map__40096);
var src = map__40096__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40096__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e40098){var e = e40098;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__40100,done){
var map__40101 = p__40100;
var map__40101__$1 = (((((!((map__40101 == null))))?(((((map__40101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40101):map__40101);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40101__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40101__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__40103){
var map__40104 = p__40103;
var map__40104__$1 = (((((!((map__40104 == null))))?(((((map__40104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40104):map__40104);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40104__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40104__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__40106,done){
var map__40107 = p__40106;
var map__40107__$1 = (((((!((map__40107 == null))))?(((((map__40107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40107):map__40107);
var msg = map__40107__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40107__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__40109_40333 = type;
var G__40109_40334__$1 = (((G__40109_40333 instanceof cljs.core.Keyword))?G__40109_40333.fqn:null);
switch (G__40109_40334__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__40111 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__40112 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__40113 = "POST";
var G__40114 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__40115 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__40111,G__40112,G__40113,G__40114,G__40115);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e40116){var e = e40116;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___40355 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___40355)){
var s_40357 = temp__5735__auto___40355;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_40357.onclose = (function (e){
return null;
}));

s_40357.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

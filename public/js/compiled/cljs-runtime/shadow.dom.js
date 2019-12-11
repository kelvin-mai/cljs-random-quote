goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37952 = coll;
var G__37953 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37952,G__37953) : shadow.dom.lazy_native_coll_seq.call(null,G__37952,G__37953));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__38002 = arguments.length;
switch (G__38002) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__38006 = arguments.length;
switch (G__38006) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__38011 = arguments.length;
switch (G__38011) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__38035 = arguments.length;
switch (G__38035) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__38044 = arguments.length;
switch (G__38044) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__38047 = document;
var G__38048 = shadow.dom.dom_node(el);
return goog.dom.contains(G__38047,G__38048);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__38050 = shadow.dom.dom_node(parent);
var G__38051 = shadow.dom.dom_node(el);
return goog.dom.contains(G__38050,G__38051);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__38054 = shadow.dom.dom_node(el);
var G__38055 = cls;
return goog.dom.classlist.add(G__38054,G__38055);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__38061 = shadow.dom.dom_node(el);
var G__38062 = cls;
return goog.dom.classlist.remove(G__38061,G__38062);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__38065 = arguments.length;
switch (G__38065) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__38068 = shadow.dom.dom_node(el);
var G__38069 = cls;
return goog.dom.classlist.toggle(G__38068,G__38069);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e38070){if((e38070 instanceof Object)){
var e = e38070;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38070;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__38077 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38078 = null;
var count__38079 = (0);
var i__38080 = (0);
while(true){
if((i__38080 < count__38079)){
var el = chunk__38078.cljs$core$IIndexed$_nth$arity$2(null,i__38080);
var handler_38646__$1 = ((function (seq__38077,chunk__38078,count__38079,i__38080,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38077,chunk__38078,count__38079,i__38080,el))
;
var G__38095_38647 = el;
var G__38096_38648 = cljs.core.name(ev);
var G__38097_38649 = handler_38646__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38095_38647,G__38096_38648,G__38097_38649) : shadow.dom.dom_listen.call(null,G__38095_38647,G__38096_38648,G__38097_38649));


var G__38651 = seq__38077;
var G__38652 = chunk__38078;
var G__38653 = count__38079;
var G__38654 = (i__38080 + (1));
seq__38077 = G__38651;
chunk__38078 = G__38652;
count__38079 = G__38653;
i__38080 = G__38654;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38077);
if(temp__5735__auto__){
var seq__38077__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38077__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38077__$1);
var G__38655 = cljs.core.chunk_rest(seq__38077__$1);
var G__38656 = c__4609__auto__;
var G__38657 = cljs.core.count(c__4609__auto__);
var G__38658 = (0);
seq__38077 = G__38655;
chunk__38078 = G__38656;
count__38079 = G__38657;
i__38080 = G__38658;
continue;
} else {
var el = cljs.core.first(seq__38077__$1);
var handler_38659__$1 = ((function (seq__38077,chunk__38078,count__38079,i__38080,el,seq__38077__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38077,chunk__38078,count__38079,i__38080,el,seq__38077__$1,temp__5735__auto__))
;
var G__38103_38660 = el;
var G__38104_38661 = cljs.core.name(ev);
var G__38105_38662 = handler_38659__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38103_38660,G__38104_38661,G__38105_38662) : shadow.dom.dom_listen.call(null,G__38103_38660,G__38104_38661,G__38105_38662));


var G__38663 = cljs.core.next(seq__38077__$1);
var G__38664 = null;
var G__38665 = (0);
var G__38666 = (0);
seq__38077 = G__38663;
chunk__38078 = G__38664;
count__38079 = G__38665;
i__38080 = G__38666;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__38108 = arguments.length;
switch (G__38108) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__38111 = shadow.dom.dom_node(el);
var G__38112 = cljs.core.name(ev);
var G__38113 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38111,G__38112,G__38113) : shadow.dom.dom_listen.call(null,G__38111,G__38112,G__38113));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__38114 = shadow.dom.dom_node(el);
var G__38115 = cljs.core.name(ev);
var G__38116 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__38114,G__38115,G__38116) : shadow.dom.dom_listen_remove.call(null,G__38114,G__38115,G__38116));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__38117 = cljs.core.seq(events);
var chunk__38118 = null;
var count__38119 = (0);
var i__38120 = (0);
while(true){
if((i__38120 < count__38119)){
var vec__38127 = chunk__38118.cljs$core$IIndexed$_nth$arity$2(null,i__38120);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38127,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38674 = seq__38117;
var G__38675 = chunk__38118;
var G__38676 = count__38119;
var G__38677 = (i__38120 + (1));
seq__38117 = G__38674;
chunk__38118 = G__38675;
count__38119 = G__38676;
i__38120 = G__38677;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38117);
if(temp__5735__auto__){
var seq__38117__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38117__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38117__$1);
var G__38679 = cljs.core.chunk_rest(seq__38117__$1);
var G__38680 = c__4609__auto__;
var G__38681 = cljs.core.count(c__4609__auto__);
var G__38682 = (0);
seq__38117 = G__38679;
chunk__38118 = G__38680;
count__38119 = G__38681;
i__38120 = G__38682;
continue;
} else {
var vec__38130 = cljs.core.first(seq__38117__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38130,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38683 = cljs.core.next(seq__38117__$1);
var G__38684 = null;
var G__38685 = (0);
var G__38686 = (0);
seq__38117 = G__38683;
chunk__38118 = G__38684;
count__38119 = G__38685;
i__38120 = G__38686;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__38133 = cljs.core.seq(styles);
var chunk__38134 = null;
var count__38135 = (0);
var i__38136 = (0);
while(true){
if((i__38136 < count__38135)){
var vec__38151 = chunk__38134.cljs$core$IIndexed$_nth$arity$2(null,i__38136);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38151,(1),null);
var G__38154_38688 = dom;
var G__38155_38689 = cljs.core.name(k);
var G__38156_38690 = (((v == null))?"":v);
goog.style.setStyle(G__38154_38688,G__38155_38689,G__38156_38690);


var G__38691 = seq__38133;
var G__38692 = chunk__38134;
var G__38693 = count__38135;
var G__38694 = (i__38136 + (1));
seq__38133 = G__38691;
chunk__38134 = G__38692;
count__38135 = G__38693;
i__38136 = G__38694;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38133);
if(temp__5735__auto__){
var seq__38133__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38133__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38133__$1);
var G__38695 = cljs.core.chunk_rest(seq__38133__$1);
var G__38696 = c__4609__auto__;
var G__38697 = cljs.core.count(c__4609__auto__);
var G__38698 = (0);
seq__38133 = G__38695;
chunk__38134 = G__38696;
count__38135 = G__38697;
i__38136 = G__38698;
continue;
} else {
var vec__38159 = cljs.core.first(seq__38133__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38159,(1),null);
var G__38162_38701 = dom;
var G__38163_38702 = cljs.core.name(k);
var G__38164_38703 = (((v == null))?"":v);
goog.style.setStyle(G__38162_38701,G__38163_38702,G__38164_38703);


var G__38704 = cljs.core.next(seq__38133__$1);
var G__38705 = null;
var G__38706 = (0);
var G__38707 = (0);
seq__38133 = G__38704;
chunk__38134 = G__38705;
count__38135 = G__38706;
i__38136 = G__38707;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__38168_38709 = key;
var G__38168_38710__$1 = (((G__38168_38709 instanceof cljs.core.Keyword))?G__38168_38709.fqn:null);
switch (G__38168_38710__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38715 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_38715,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_38715,"aria-");
}
})())){
el.setAttribute(ks_38715,value);
} else {
(el[ks_38715] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__38176 = shadow.dom.dom_node(el);
var G__38177 = cls;
return goog.dom.classlist.contains(G__38176,G__38177);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38184){
var map__38185 = p__38184;
var map__38185__$1 = (((((!((map__38185 == null))))?(((((map__38185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38185):map__38185);
var props = map__38185__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38185__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38188 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38188,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38188,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38188,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38192 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38192,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38192;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38196 = arguments.length;
switch (G__38196) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38201){
var vec__38202 = p__38201;
var seq__38203 = cljs.core.seq(vec__38202);
var first__38204 = cljs.core.first(seq__38203);
var seq__38203__$1 = cljs.core.next(seq__38203);
var nn = first__38204;
var first__38204__$1 = cljs.core.first(seq__38203__$1);
var seq__38203__$2 = cljs.core.next(seq__38203__$1);
var np = first__38204__$1;
var nc = seq__38203__$2;
var node = vec__38202;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38209 = nn;
var G__38210 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38209,G__38210) : create_fn.call(null,G__38209,G__38210));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38211 = nn;
var G__38212 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38211,G__38212) : create_fn.call(null,G__38211,G__38212));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38215 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38215,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38215,(1),null);
var seq__38219_38728 = cljs.core.seq(node_children);
var chunk__38220_38729 = null;
var count__38221_38730 = (0);
var i__38222_38731 = (0);
while(true){
if((i__38222_38731 < count__38221_38730)){
var child_struct_38732 = chunk__38220_38729.cljs$core$IIndexed$_nth$arity$2(null,i__38222_38731);
var children_38733 = shadow.dom.dom_node(child_struct_38732);
if(cljs.core.seq_QMARK_(children_38733)){
var seq__38251_38734 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38733));
var chunk__38253_38735 = null;
var count__38254_38736 = (0);
var i__38255_38737 = (0);
while(true){
if((i__38255_38737 < count__38254_38736)){
var child_38738 = chunk__38253_38735.cljs$core$IIndexed$_nth$arity$2(null,i__38255_38737);
if(cljs.core.truth_(child_38738)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38738);


var G__38739 = seq__38251_38734;
var G__38740 = chunk__38253_38735;
var G__38741 = count__38254_38736;
var G__38742 = (i__38255_38737 + (1));
seq__38251_38734 = G__38739;
chunk__38253_38735 = G__38740;
count__38254_38736 = G__38741;
i__38255_38737 = G__38742;
continue;
} else {
var G__38744 = seq__38251_38734;
var G__38745 = chunk__38253_38735;
var G__38746 = count__38254_38736;
var G__38747 = (i__38255_38737 + (1));
seq__38251_38734 = G__38744;
chunk__38253_38735 = G__38745;
count__38254_38736 = G__38746;
i__38255_38737 = G__38747;
continue;
}
} else {
var temp__5735__auto___38749 = cljs.core.seq(seq__38251_38734);
if(temp__5735__auto___38749){
var seq__38251_38750__$1 = temp__5735__auto___38749;
if(cljs.core.chunked_seq_QMARK_(seq__38251_38750__$1)){
var c__4609__auto___38751 = cljs.core.chunk_first(seq__38251_38750__$1);
var G__38752 = cljs.core.chunk_rest(seq__38251_38750__$1);
var G__38753 = c__4609__auto___38751;
var G__38754 = cljs.core.count(c__4609__auto___38751);
var G__38755 = (0);
seq__38251_38734 = G__38752;
chunk__38253_38735 = G__38753;
count__38254_38736 = G__38754;
i__38255_38737 = G__38755;
continue;
} else {
var child_38756 = cljs.core.first(seq__38251_38750__$1);
if(cljs.core.truth_(child_38756)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38756);


var G__38758 = cljs.core.next(seq__38251_38750__$1);
var G__38759 = null;
var G__38760 = (0);
var G__38761 = (0);
seq__38251_38734 = G__38758;
chunk__38253_38735 = G__38759;
count__38254_38736 = G__38760;
i__38255_38737 = G__38761;
continue;
} else {
var G__38762 = cljs.core.next(seq__38251_38750__$1);
var G__38763 = null;
var G__38764 = (0);
var G__38765 = (0);
seq__38251_38734 = G__38762;
chunk__38253_38735 = G__38763;
count__38254_38736 = G__38764;
i__38255_38737 = G__38765;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38733);
}


var G__38767 = seq__38219_38728;
var G__38768 = chunk__38220_38729;
var G__38769 = count__38221_38730;
var G__38770 = (i__38222_38731 + (1));
seq__38219_38728 = G__38767;
chunk__38220_38729 = G__38768;
count__38221_38730 = G__38769;
i__38222_38731 = G__38770;
continue;
} else {
var temp__5735__auto___38771 = cljs.core.seq(seq__38219_38728);
if(temp__5735__auto___38771){
var seq__38219_38772__$1 = temp__5735__auto___38771;
if(cljs.core.chunked_seq_QMARK_(seq__38219_38772__$1)){
var c__4609__auto___38773 = cljs.core.chunk_first(seq__38219_38772__$1);
var G__38774 = cljs.core.chunk_rest(seq__38219_38772__$1);
var G__38775 = c__4609__auto___38773;
var G__38776 = cljs.core.count(c__4609__auto___38773);
var G__38777 = (0);
seq__38219_38728 = G__38774;
chunk__38220_38729 = G__38775;
count__38221_38730 = G__38776;
i__38222_38731 = G__38777;
continue;
} else {
var child_struct_38779 = cljs.core.first(seq__38219_38772__$1);
var children_38780 = shadow.dom.dom_node(child_struct_38779);
if(cljs.core.seq_QMARK_(children_38780)){
var seq__38264_38781 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38780));
var chunk__38266_38782 = null;
var count__38267_38783 = (0);
var i__38268_38784 = (0);
while(true){
if((i__38268_38784 < count__38267_38783)){
var child_38785 = chunk__38266_38782.cljs$core$IIndexed$_nth$arity$2(null,i__38268_38784);
if(cljs.core.truth_(child_38785)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38785);


var G__38786 = seq__38264_38781;
var G__38787 = chunk__38266_38782;
var G__38788 = count__38267_38783;
var G__38789 = (i__38268_38784 + (1));
seq__38264_38781 = G__38786;
chunk__38266_38782 = G__38787;
count__38267_38783 = G__38788;
i__38268_38784 = G__38789;
continue;
} else {
var G__38790 = seq__38264_38781;
var G__38791 = chunk__38266_38782;
var G__38792 = count__38267_38783;
var G__38793 = (i__38268_38784 + (1));
seq__38264_38781 = G__38790;
chunk__38266_38782 = G__38791;
count__38267_38783 = G__38792;
i__38268_38784 = G__38793;
continue;
}
} else {
var temp__5735__auto___38795__$1 = cljs.core.seq(seq__38264_38781);
if(temp__5735__auto___38795__$1){
var seq__38264_38796__$1 = temp__5735__auto___38795__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38264_38796__$1)){
var c__4609__auto___38797 = cljs.core.chunk_first(seq__38264_38796__$1);
var G__38798 = cljs.core.chunk_rest(seq__38264_38796__$1);
var G__38799 = c__4609__auto___38797;
var G__38800 = cljs.core.count(c__4609__auto___38797);
var G__38801 = (0);
seq__38264_38781 = G__38798;
chunk__38266_38782 = G__38799;
count__38267_38783 = G__38800;
i__38268_38784 = G__38801;
continue;
} else {
var child_38802 = cljs.core.first(seq__38264_38796__$1);
if(cljs.core.truth_(child_38802)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38802);


var G__38803 = cljs.core.next(seq__38264_38796__$1);
var G__38804 = null;
var G__38805 = (0);
var G__38806 = (0);
seq__38264_38781 = G__38803;
chunk__38266_38782 = G__38804;
count__38267_38783 = G__38805;
i__38268_38784 = G__38806;
continue;
} else {
var G__38807 = cljs.core.next(seq__38264_38796__$1);
var G__38808 = null;
var G__38809 = (0);
var G__38810 = (0);
seq__38264_38781 = G__38807;
chunk__38266_38782 = G__38808;
count__38267_38783 = G__38809;
i__38268_38784 = G__38810;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38780);
}


var G__38811 = cljs.core.next(seq__38219_38772__$1);
var G__38812 = null;
var G__38813 = (0);
var G__38814 = (0);
seq__38219_38728 = G__38811;
chunk__38220_38729 = G__38812;
count__38221_38730 = G__38813;
i__38222_38731 = G__38814;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__38275 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__38275);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__38278 = cljs.core.seq(node);
var chunk__38279 = null;
var count__38280 = (0);
var i__38281 = (0);
while(true){
if((i__38281 < count__38280)){
var n = chunk__38279.cljs$core$IIndexed$_nth$arity$2(null,i__38281);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38817 = seq__38278;
var G__38818 = chunk__38279;
var G__38819 = count__38280;
var G__38820 = (i__38281 + (1));
seq__38278 = G__38817;
chunk__38279 = G__38818;
count__38280 = G__38819;
i__38281 = G__38820;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38278);
if(temp__5735__auto__){
var seq__38278__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38278__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38278__$1);
var G__38821 = cljs.core.chunk_rest(seq__38278__$1);
var G__38822 = c__4609__auto__;
var G__38823 = cljs.core.count(c__4609__auto__);
var G__38824 = (0);
seq__38278 = G__38821;
chunk__38279 = G__38822;
count__38280 = G__38823;
i__38281 = G__38824;
continue;
} else {
var n = cljs.core.first(seq__38278__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38826 = cljs.core.next(seq__38278__$1);
var G__38827 = null;
var G__38828 = (0);
var G__38829 = (0);
seq__38278 = G__38826;
chunk__38279 = G__38827;
count__38280 = G__38828;
i__38281 = G__38829;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__38282 = shadow.dom.dom_node(new$);
var G__38283 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__38282,G__38283);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__38285 = arguments.length;
switch (G__38285) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__38287 = arguments.length;
switch (G__38287) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__38295 = arguments.length;
switch (G__38295) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38845 = arguments.length;
var i__4790__auto___38846 = (0);
while(true){
if((i__4790__auto___38846 < len__4789__auto___38845)){
args__4795__auto__.push((arguments[i__4790__auto___38846]));

var G__38847 = (i__4790__auto___38846 + (1));
i__4790__auto___38846 = G__38847;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__38305_38848 = cljs.core.seq(nodes);
var chunk__38306_38849 = null;
var count__38307_38850 = (0);
var i__38308_38851 = (0);
while(true){
if((i__38308_38851 < count__38307_38850)){
var node_38853 = chunk__38306_38849.cljs$core$IIndexed$_nth$arity$2(null,i__38308_38851);
fragment.appendChild(shadow.dom._to_dom(node_38853));


var G__38854 = seq__38305_38848;
var G__38855 = chunk__38306_38849;
var G__38856 = count__38307_38850;
var G__38857 = (i__38308_38851 + (1));
seq__38305_38848 = G__38854;
chunk__38306_38849 = G__38855;
count__38307_38850 = G__38856;
i__38308_38851 = G__38857;
continue;
} else {
var temp__5735__auto___38859 = cljs.core.seq(seq__38305_38848);
if(temp__5735__auto___38859){
var seq__38305_38860__$1 = temp__5735__auto___38859;
if(cljs.core.chunked_seq_QMARK_(seq__38305_38860__$1)){
var c__4609__auto___38861 = cljs.core.chunk_first(seq__38305_38860__$1);
var G__38862 = cljs.core.chunk_rest(seq__38305_38860__$1);
var G__38863 = c__4609__auto___38861;
var G__38864 = cljs.core.count(c__4609__auto___38861);
var G__38865 = (0);
seq__38305_38848 = G__38862;
chunk__38306_38849 = G__38863;
count__38307_38850 = G__38864;
i__38308_38851 = G__38865;
continue;
} else {
var node_38866 = cljs.core.first(seq__38305_38860__$1);
fragment.appendChild(shadow.dom._to_dom(node_38866));


var G__38867 = cljs.core.next(seq__38305_38860__$1);
var G__38868 = null;
var G__38869 = (0);
var G__38870 = (0);
seq__38305_38848 = G__38867;
chunk__38306_38849 = G__38868;
count__38307_38850 = G__38869;
i__38308_38851 = G__38870;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38302){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38302));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38317_38871 = cljs.core.seq(scripts);
var chunk__38318_38872 = null;
var count__38319_38873 = (0);
var i__38320_38874 = (0);
while(true){
if((i__38320_38874 < count__38319_38873)){
var vec__38331_38875 = chunk__38318_38872.cljs$core$IIndexed$_nth$arity$2(null,i__38320_38874);
var script_tag_38876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38331_38875,(0),null);
var script_body_38877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38331_38875,(1),null);
eval(script_body_38877);


var G__38878 = seq__38317_38871;
var G__38879 = chunk__38318_38872;
var G__38880 = count__38319_38873;
var G__38881 = (i__38320_38874 + (1));
seq__38317_38871 = G__38878;
chunk__38318_38872 = G__38879;
count__38319_38873 = G__38880;
i__38320_38874 = G__38881;
continue;
} else {
var temp__5735__auto___38882 = cljs.core.seq(seq__38317_38871);
if(temp__5735__auto___38882){
var seq__38317_38883__$1 = temp__5735__auto___38882;
if(cljs.core.chunked_seq_QMARK_(seq__38317_38883__$1)){
var c__4609__auto___38884 = cljs.core.chunk_first(seq__38317_38883__$1);
var G__38885 = cljs.core.chunk_rest(seq__38317_38883__$1);
var G__38886 = c__4609__auto___38884;
var G__38887 = cljs.core.count(c__4609__auto___38884);
var G__38888 = (0);
seq__38317_38871 = G__38885;
chunk__38318_38872 = G__38886;
count__38319_38873 = G__38887;
i__38320_38874 = G__38888;
continue;
} else {
var vec__38335_38889 = cljs.core.first(seq__38317_38883__$1);
var script_tag_38890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38335_38889,(0),null);
var script_body_38891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38335_38889,(1),null);
eval(script_body_38891);


var G__38892 = cljs.core.next(seq__38317_38883__$1);
var G__38893 = null;
var G__38894 = (0);
var G__38895 = (0);
seq__38317_38871 = G__38892;
chunk__38318_38872 = G__38893;
count__38319_38873 = G__38894;
i__38320_38874 = G__38895;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38340){
var vec__38341 = p__38340;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38341,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38341,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__38353 = shadow.dom.dom_node(el);
var G__38354 = cls;
return goog.dom.getAncestorByClass(G__38353,G__38354);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__38358 = arguments.length;
switch (G__38358) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__38361 = shadow.dom.dom_node(el);
var G__38362 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__38361,G__38362);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__38363 = shadow.dom.dom_node(el);
var G__38364 = cljs.core.name(tag);
var G__38365 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__38363,G__38364,G__38365);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__38367 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__38367);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__38369 = shadow.dom.dom_node(dom);
var G__38370 = value;
return goog.dom.forms.setValue(G__38369,G__38370);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__38376 = cljs.core.seq(style_keys);
var chunk__38377 = null;
var count__38378 = (0);
var i__38379 = (0);
while(true){
if((i__38379 < count__38378)){
var it = chunk__38377.cljs$core$IIndexed$_nth$arity$2(null,i__38379);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38902 = seq__38376;
var G__38903 = chunk__38377;
var G__38904 = count__38378;
var G__38905 = (i__38379 + (1));
seq__38376 = G__38902;
chunk__38377 = G__38903;
count__38378 = G__38904;
i__38379 = G__38905;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38376);
if(temp__5735__auto__){
var seq__38376__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38376__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38376__$1);
var G__38906 = cljs.core.chunk_rest(seq__38376__$1);
var G__38907 = c__4609__auto__;
var G__38908 = cljs.core.count(c__4609__auto__);
var G__38909 = (0);
seq__38376 = G__38906;
chunk__38377 = G__38907;
count__38378 = G__38908;
i__38379 = G__38909;
continue;
} else {
var it = cljs.core.first(seq__38376__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38910 = cljs.core.next(seq__38376__$1);
var G__38911 = null;
var G__38912 = (0);
var G__38913 = (0);
seq__38376 = G__38910;
chunk__38377 = G__38911;
count__38378 = G__38912;
i__38379 = G__38913;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k38383,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__38387 = k38383;
var G__38387__$1 = (((G__38387 instanceof cljs.core.Keyword))?G__38387.fqn:null);
switch (G__38387__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38383,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__38388){
var vec__38389 = p__38388;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38389,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38389,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38382){
var self__ = this;
var G__38382__$1 = this;
return (new cljs.core.RecordIter((0),G__38382__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__38397 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__38397(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38384,other38385){
var self__ = this;
var this38384__$1 = this;
return (((!((other38385 == null)))) && ((this38384__$1.constructor === other38385.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38384__$1.x,other38385.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38384__$1.y,other38385.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38384__$1.__extmap,other38385.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__38382){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__38406 = cljs.core.keyword_identical_QMARK_;
var expr__38407 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__38409 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__38410 = expr__38407;
return (pred__38406.cljs$core$IFn$_invoke$arity$2 ? pred__38406.cljs$core$IFn$_invoke$arity$2(G__38409,G__38410) : pred__38406.call(null,G__38409,G__38410));
})())){
return (new shadow.dom.Coordinate(G__38382,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38413 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__38414 = expr__38407;
return (pred__38406.cljs$core$IFn$_invoke$arity$2 ? pred__38406.cljs$core$IFn$_invoke$arity$2(G__38413,G__38414) : pred__38406.call(null,G__38413,G__38414));
})())){
return (new shadow.dom.Coordinate(self__.x,G__38382,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__38382),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__38382){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38382,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38386){
var extmap__4478__auto__ = (function (){var G__38419 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38386,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38386)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38419);
} else {
return G__38419;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38386),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38386),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__38424 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__38424);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__38426 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__38426);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__38428 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__38428);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k38430,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__38438 = k38430;
var G__38438__$1 = (((G__38438 instanceof cljs.core.Keyword))?G__38438.fqn:null);
switch (G__38438__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38430,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__38441){
var vec__38442 = p__38441;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38442,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38442,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38429){
var self__ = this;
var G__38429__$1 = this;
return (new cljs.core.RecordIter((0),G__38429__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__38448 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__38448(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38431,other38432){
var self__ = this;
var this38431__$1 = this;
return (((!((other38432 == null)))) && ((this38431__$1.constructor === other38432.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38431__$1.w,other38432.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38431__$1.h,other38432.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38431__$1.__extmap,other38432.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__38429){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__38452 = cljs.core.keyword_identical_QMARK_;
var expr__38453 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__38455 = new cljs.core.Keyword(null,"w","w",354169001);
var G__38456 = expr__38453;
return (pred__38452.cljs$core$IFn$_invoke$arity$2 ? pred__38452.cljs$core$IFn$_invoke$arity$2(G__38455,G__38456) : pred__38452.call(null,G__38455,G__38456));
})())){
return (new shadow.dom.Size(G__38429,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38457 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__38458 = expr__38453;
return (pred__38452.cljs$core$IFn$_invoke$arity$2 ? pred__38452.cljs$core$IFn$_invoke$arity$2(G__38457,G__38458) : pred__38452.call(null,G__38457,G__38458));
})())){
return (new shadow.dom.Size(self__.w,G__38429,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__38429),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__38429){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38429,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38435){
var extmap__4478__auto__ = (function (){var G__38474 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38435,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38435)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38474);
} else {
return G__38474;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38435),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38435),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__38475 = shadow.dom.dom_node(el);
return goog.style.getSize(G__38475);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__38936 = (i + (1));
var G__38937 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38936;
ret = G__38937;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38482){
var vec__38483 = p__38482;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38483,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38483,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38496 = arguments.length;
switch (G__38496) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__38497_38939 = new_node;
var G__38498_38940 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__38497_38939,G__38498_38940);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__38500_38945 = new_node;
var G__38501_38946 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__38500_38945,G__38501_38946);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38947 = ps;
var G__38948 = (i + (1));
el__$1 = G__38947;
i = G__38948;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__38514 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__38514);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__38515 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__38515);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__38516 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__38516);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38518 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38518,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38518,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38518,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38522_38955 = cljs.core.seq(props);
var chunk__38523_38956 = null;
var count__38524_38957 = (0);
var i__38525_38958 = (0);
while(true){
if((i__38525_38958 < count__38524_38957)){
var vec__38534_38959 = chunk__38523_38956.cljs$core$IIndexed$_nth$arity$2(null,i__38525_38958);
var k_38960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38534_38959,(0),null);
var v_38961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38534_38959,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_38960);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38960),v_38961);


var G__38965 = seq__38522_38955;
var G__38966 = chunk__38523_38956;
var G__38967 = count__38524_38957;
var G__38968 = (i__38525_38958 + (1));
seq__38522_38955 = G__38965;
chunk__38523_38956 = G__38966;
count__38524_38957 = G__38967;
i__38525_38958 = G__38968;
continue;
} else {
var temp__5735__auto___38969 = cljs.core.seq(seq__38522_38955);
if(temp__5735__auto___38969){
var seq__38522_38970__$1 = temp__5735__auto___38969;
if(cljs.core.chunked_seq_QMARK_(seq__38522_38970__$1)){
var c__4609__auto___38971 = cljs.core.chunk_first(seq__38522_38970__$1);
var G__38972 = cljs.core.chunk_rest(seq__38522_38970__$1);
var G__38973 = c__4609__auto___38971;
var G__38974 = cljs.core.count(c__4609__auto___38971);
var G__38975 = (0);
seq__38522_38955 = G__38972;
chunk__38523_38956 = G__38973;
count__38524_38957 = G__38974;
i__38525_38958 = G__38975;
continue;
} else {
var vec__38537_38976 = cljs.core.first(seq__38522_38970__$1);
var k_38977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38537_38976,(0),null);
var v_38978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38537_38976,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_38977);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38977),v_38978);


var G__38979 = cljs.core.next(seq__38522_38970__$1);
var G__38980 = null;
var G__38981 = (0);
var G__38982 = (0);
seq__38522_38955 = G__38979;
chunk__38523_38956 = G__38980;
count__38524_38957 = G__38981;
i__38525_38958 = G__38982;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38541 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38541,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38541,(1),null);
var seq__38544_38983 = cljs.core.seq(node_children);
var chunk__38546_38984 = null;
var count__38547_38985 = (0);
var i__38548_38986 = (0);
while(true){
if((i__38548_38986 < count__38547_38985)){
var child_struct_38987 = chunk__38546_38984.cljs$core$IIndexed$_nth$arity$2(null,i__38548_38986);
if((!((child_struct_38987 == null)))){
if(typeof child_struct_38987 === 'string'){
var text_38988 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38988),child_struct_38987].join(''));
} else {
var children_38989 = shadow.dom.svg_node(child_struct_38987);
if(cljs.core.seq_QMARK_(children_38989)){
var seq__38562_38990 = cljs.core.seq(children_38989);
var chunk__38564_38991 = null;
var count__38565_38992 = (0);
var i__38566_38993 = (0);
while(true){
if((i__38566_38993 < count__38565_38992)){
var child_38994 = chunk__38564_38991.cljs$core$IIndexed$_nth$arity$2(null,i__38566_38993);
if(cljs.core.truth_(child_38994)){
node.appendChild(child_38994);


var G__38995 = seq__38562_38990;
var G__38996 = chunk__38564_38991;
var G__38997 = count__38565_38992;
var G__38998 = (i__38566_38993 + (1));
seq__38562_38990 = G__38995;
chunk__38564_38991 = G__38996;
count__38565_38992 = G__38997;
i__38566_38993 = G__38998;
continue;
} else {
var G__38999 = seq__38562_38990;
var G__39000 = chunk__38564_38991;
var G__39001 = count__38565_38992;
var G__39002 = (i__38566_38993 + (1));
seq__38562_38990 = G__38999;
chunk__38564_38991 = G__39000;
count__38565_38992 = G__39001;
i__38566_38993 = G__39002;
continue;
}
} else {
var temp__5735__auto___39003 = cljs.core.seq(seq__38562_38990);
if(temp__5735__auto___39003){
var seq__38562_39004__$1 = temp__5735__auto___39003;
if(cljs.core.chunked_seq_QMARK_(seq__38562_39004__$1)){
var c__4609__auto___39005 = cljs.core.chunk_first(seq__38562_39004__$1);
var G__39006 = cljs.core.chunk_rest(seq__38562_39004__$1);
var G__39007 = c__4609__auto___39005;
var G__39008 = cljs.core.count(c__4609__auto___39005);
var G__39009 = (0);
seq__38562_38990 = G__39006;
chunk__38564_38991 = G__39007;
count__38565_38992 = G__39008;
i__38566_38993 = G__39009;
continue;
} else {
var child_39010 = cljs.core.first(seq__38562_39004__$1);
if(cljs.core.truth_(child_39010)){
node.appendChild(child_39010);


var G__39011 = cljs.core.next(seq__38562_39004__$1);
var G__39012 = null;
var G__39013 = (0);
var G__39014 = (0);
seq__38562_38990 = G__39011;
chunk__38564_38991 = G__39012;
count__38565_38992 = G__39013;
i__38566_38993 = G__39014;
continue;
} else {
var G__39015 = cljs.core.next(seq__38562_39004__$1);
var G__39016 = null;
var G__39017 = (0);
var G__39018 = (0);
seq__38562_38990 = G__39015;
chunk__38564_38991 = G__39016;
count__38565_38992 = G__39017;
i__38566_38993 = G__39018;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38989);
}
}


var G__39019 = seq__38544_38983;
var G__39020 = chunk__38546_38984;
var G__39021 = count__38547_38985;
var G__39022 = (i__38548_38986 + (1));
seq__38544_38983 = G__39019;
chunk__38546_38984 = G__39020;
count__38547_38985 = G__39021;
i__38548_38986 = G__39022;
continue;
} else {
var G__39023 = seq__38544_38983;
var G__39024 = chunk__38546_38984;
var G__39025 = count__38547_38985;
var G__39026 = (i__38548_38986 + (1));
seq__38544_38983 = G__39023;
chunk__38546_38984 = G__39024;
count__38547_38985 = G__39025;
i__38548_38986 = G__39026;
continue;
}
} else {
var temp__5735__auto___39027 = cljs.core.seq(seq__38544_38983);
if(temp__5735__auto___39027){
var seq__38544_39028__$1 = temp__5735__auto___39027;
if(cljs.core.chunked_seq_QMARK_(seq__38544_39028__$1)){
var c__4609__auto___39029 = cljs.core.chunk_first(seq__38544_39028__$1);
var G__39030 = cljs.core.chunk_rest(seq__38544_39028__$1);
var G__39031 = c__4609__auto___39029;
var G__39032 = cljs.core.count(c__4609__auto___39029);
var G__39033 = (0);
seq__38544_38983 = G__39030;
chunk__38546_38984 = G__39031;
count__38547_38985 = G__39032;
i__38548_38986 = G__39033;
continue;
} else {
var child_struct_39034 = cljs.core.first(seq__38544_39028__$1);
if((!((child_struct_39034 == null)))){
if(typeof child_struct_39034 === 'string'){
var text_39035 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39035),child_struct_39034].join(''));
} else {
var children_39036 = shadow.dom.svg_node(child_struct_39034);
if(cljs.core.seq_QMARK_(children_39036)){
var seq__38568_39037 = cljs.core.seq(children_39036);
var chunk__38570_39038 = null;
var count__38571_39039 = (0);
var i__38572_39040 = (0);
while(true){
if((i__38572_39040 < count__38571_39039)){
var child_39041 = chunk__38570_39038.cljs$core$IIndexed$_nth$arity$2(null,i__38572_39040);
if(cljs.core.truth_(child_39041)){
node.appendChild(child_39041);


var G__39042 = seq__38568_39037;
var G__39043 = chunk__38570_39038;
var G__39044 = count__38571_39039;
var G__39045 = (i__38572_39040 + (1));
seq__38568_39037 = G__39042;
chunk__38570_39038 = G__39043;
count__38571_39039 = G__39044;
i__38572_39040 = G__39045;
continue;
} else {
var G__39048 = seq__38568_39037;
var G__39049 = chunk__38570_39038;
var G__39050 = count__38571_39039;
var G__39051 = (i__38572_39040 + (1));
seq__38568_39037 = G__39048;
chunk__38570_39038 = G__39049;
count__38571_39039 = G__39050;
i__38572_39040 = G__39051;
continue;
}
} else {
var temp__5735__auto___39052__$1 = cljs.core.seq(seq__38568_39037);
if(temp__5735__auto___39052__$1){
var seq__38568_39053__$1 = temp__5735__auto___39052__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38568_39053__$1)){
var c__4609__auto___39063 = cljs.core.chunk_first(seq__38568_39053__$1);
var G__39064 = cljs.core.chunk_rest(seq__38568_39053__$1);
var G__39065 = c__4609__auto___39063;
var G__39066 = cljs.core.count(c__4609__auto___39063);
var G__39067 = (0);
seq__38568_39037 = G__39064;
chunk__38570_39038 = G__39065;
count__38571_39039 = G__39066;
i__38572_39040 = G__39067;
continue;
} else {
var child_39068 = cljs.core.first(seq__38568_39053__$1);
if(cljs.core.truth_(child_39068)){
node.appendChild(child_39068);


var G__39069 = cljs.core.next(seq__38568_39053__$1);
var G__39070 = null;
var G__39071 = (0);
var G__39072 = (0);
seq__38568_39037 = G__39069;
chunk__38570_39038 = G__39070;
count__38571_39039 = G__39071;
i__38572_39040 = G__39072;
continue;
} else {
var G__39073 = cljs.core.next(seq__38568_39053__$1);
var G__39074 = null;
var G__39075 = (0);
var G__39076 = (0);
seq__38568_39037 = G__39073;
chunk__38570_39038 = G__39074;
count__38571_39039 = G__39075;
i__38572_39040 = G__39076;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39036);
}
}


var G__39077 = cljs.core.next(seq__38544_39028__$1);
var G__39078 = null;
var G__39079 = (0);
var G__39080 = (0);
seq__38544_38983 = G__39077;
chunk__38546_38984 = G__39078;
count__38547_38985 = G__39079;
i__38548_38986 = G__39080;
continue;
} else {
var G__39081 = cljs.core.next(seq__38544_39028__$1);
var G__39082 = null;
var G__39083 = (0);
var G__39084 = (0);
seq__38544_38983 = G__39081;
chunk__38546_38984 = G__39082;
count__38547_38985 = G__39083;
i__38548_38986 = G__39084;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__38577_39085 = shadow.dom._to_svg;
var G__38578_39086 = "string";
var G__38579_39087 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__38577_39085,G__38578_39086,G__38579_39087);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__38585_39088 = shadow.dom._to_svg;
var G__38586_39089 = "null";
var G__38587_39090 = (function (_){
return null;
});
goog.object.set(G__38585_39088,G__38586_39089,G__38587_39090);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39091 = arguments.length;
var i__4790__auto___39092 = (0);
while(true){
if((i__4790__auto___39092 < len__4789__auto___39091)){
args__4795__auto__.push((arguments[i__4790__auto___39092]));

var G__39093 = (i__4790__auto___39092 + (1));
i__4790__auto___39092 = G__39093;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38589){
var G__38590 = cljs.core.first(seq38589);
var seq38589__$1 = cljs.core.next(seq38589);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38590,seq38589__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38595 = arguments.length;
switch (G__38595) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__38599_39095 = shadow.dom.dom_node(el);
var G__38600_39096 = cljs.core.name(event);
var G__38601_39097 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38599_39095,G__38600_39096,G__38601_39097) : shadow.dom.dom_listen.call(null,G__38599_39095,G__38600_39096,G__38601_39097));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__36322__auto___39098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_38606){
var state_val_38607 = (state_38606[(1)]);
if((state_val_38607 === (1))){
var state_38606__$1 = state_38606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38606__$1,(2),once_or_cleanup);
} else {
if((state_val_38607 === (2))){
var inst_38603 = (state_38606[(2)]);
var inst_38604 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38606__$1 = (function (){var statearr_38608 = state_38606;
(statearr_38608[(7)] = inst_38603);

return statearr_38608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38606__$1,inst_38604);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36232__auto__ = null;
var shadow$dom$state_machine__36232__auto____0 = (function (){
var statearr_38609 = [null,null,null,null,null,null,null,null];
(statearr_38609[(0)] = shadow$dom$state_machine__36232__auto__);

(statearr_38609[(1)] = (1));

return statearr_38609;
});
var shadow$dom$state_machine__36232__auto____1 = (function (state_38606){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_38606);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e38610){if((e38610 instanceof Object)){
var ex__36235__auto__ = e38610;
var statearr_38611_39102 = state_38606;
(statearr_38611_39102[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39106 = state_38606;
state_38606 = G__39106;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
shadow$dom$state_machine__36232__auto__ = function(state_38606){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36232__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36232__auto____1.call(this,state_38606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36232__auto____0;
shadow$dom$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36232__auto____1;
return shadow$dom$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_38613 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_38613[(6)] = c__36322__auto___39098);

return statearr_38613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41240){
var map__41241 = p__41240;
var map__41241__$1 = (((((!((map__41241 == null))))?(((((map__41241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41241):map__41241);
var m = map__41241__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41241__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41241__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41244_41483 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41245_41484 = null;
var count__41246_41485 = (0);
var i__41247_41486 = (0);
while(true){
if((i__41247_41486 < count__41246_41485)){
var f_41489 = chunk__41245_41484.cljs$core$IIndexed$_nth$arity$2(null,i__41247_41486);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41489], 0));


var G__41490 = seq__41244_41483;
var G__41491 = chunk__41245_41484;
var G__41492 = count__41246_41485;
var G__41493 = (i__41247_41486 + (1));
seq__41244_41483 = G__41490;
chunk__41245_41484 = G__41491;
count__41246_41485 = G__41492;
i__41247_41486 = G__41493;
continue;
} else {
var temp__5735__auto___41495 = cljs.core.seq(seq__41244_41483);
if(temp__5735__auto___41495){
var seq__41244_41496__$1 = temp__5735__auto___41495;
if(cljs.core.chunked_seq_QMARK_(seq__41244_41496__$1)){
var c__4609__auto___41497 = cljs.core.chunk_first(seq__41244_41496__$1);
var G__41498 = cljs.core.chunk_rest(seq__41244_41496__$1);
var G__41499 = c__4609__auto___41497;
var G__41500 = cljs.core.count(c__4609__auto___41497);
var G__41501 = (0);
seq__41244_41483 = G__41498;
chunk__41245_41484 = G__41499;
count__41246_41485 = G__41500;
i__41247_41486 = G__41501;
continue;
} else {
var f_41502 = cljs.core.first(seq__41244_41496__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41502], 0));


var G__41503 = cljs.core.next(seq__41244_41496__$1);
var G__41504 = null;
var G__41505 = (0);
var G__41506 = (0);
seq__41244_41483 = G__41503;
chunk__41245_41484 = G__41504;
count__41246_41485 = G__41505;
i__41247_41486 = G__41506;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41507 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41507], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41507)))?cljs.core.second(arglists_41507):arglists_41507)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41255_41508 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41256_41509 = null;
var count__41257_41510 = (0);
var i__41258_41511 = (0);
while(true){
if((i__41258_41511 < count__41257_41510)){
var vec__41272_41512 = chunk__41256_41509.cljs$core$IIndexed$_nth$arity$2(null,i__41258_41511);
var name_41513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41272_41512,(0),null);
var map__41275_41514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41272_41512,(1),null);
var map__41275_41515__$1 = (((((!((map__41275_41514 == null))))?(((((map__41275_41514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41275_41514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41275_41514):map__41275_41514);
var doc_41516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41275_41515__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41275_41515__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41513], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41517], 0));

if(cljs.core.truth_(doc_41516)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41516], 0));
} else {
}


var G__41518 = seq__41255_41508;
var G__41519 = chunk__41256_41509;
var G__41520 = count__41257_41510;
var G__41521 = (i__41258_41511 + (1));
seq__41255_41508 = G__41518;
chunk__41256_41509 = G__41519;
count__41257_41510 = G__41520;
i__41258_41511 = G__41521;
continue;
} else {
var temp__5735__auto___41522 = cljs.core.seq(seq__41255_41508);
if(temp__5735__auto___41522){
var seq__41255_41523__$1 = temp__5735__auto___41522;
if(cljs.core.chunked_seq_QMARK_(seq__41255_41523__$1)){
var c__4609__auto___41524 = cljs.core.chunk_first(seq__41255_41523__$1);
var G__41525 = cljs.core.chunk_rest(seq__41255_41523__$1);
var G__41526 = c__4609__auto___41524;
var G__41527 = cljs.core.count(c__4609__auto___41524);
var G__41528 = (0);
seq__41255_41508 = G__41525;
chunk__41256_41509 = G__41526;
count__41257_41510 = G__41527;
i__41258_41511 = G__41528;
continue;
} else {
var vec__41282_41529 = cljs.core.first(seq__41255_41523__$1);
var name_41530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41282_41529,(0),null);
var map__41285_41531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41282_41529,(1),null);
var map__41285_41532__$1 = (((((!((map__41285_41531 == null))))?(((((map__41285_41531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41285_41531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41285_41531):map__41285_41531);
var doc_41533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41285_41532__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41285_41532__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41530], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41534], 0));

if(cljs.core.truth_(doc_41533)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41533], 0));
} else {
}


var G__41536 = cljs.core.next(seq__41255_41523__$1);
var G__41537 = null;
var G__41538 = (0);
var G__41539 = (0);
seq__41255_41508 = G__41536;
chunk__41256_41509 = G__41537;
count__41257_41510 = G__41538;
i__41258_41511 = G__41539;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41287 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41288 = null;
var count__41289 = (0);
var i__41290 = (0);
while(true){
if((i__41290 < count__41289)){
var role = chunk__41288.cljs$core$IIndexed$_nth$arity$2(null,i__41290);
var temp__5735__auto___41540__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41540__$1)){
var spec_41541 = temp__5735__auto___41540__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41541)], 0));
} else {
}


var G__41542 = seq__41287;
var G__41543 = chunk__41288;
var G__41544 = count__41289;
var G__41545 = (i__41290 + (1));
seq__41287 = G__41542;
chunk__41288 = G__41543;
count__41289 = G__41544;
i__41290 = G__41545;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__41287);
if(temp__5735__auto____$1){
var seq__41287__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41287__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41287__$1);
var G__41546 = cljs.core.chunk_rest(seq__41287__$1);
var G__41547 = c__4609__auto__;
var G__41548 = cljs.core.count(c__4609__auto__);
var G__41549 = (0);
seq__41287 = G__41546;
chunk__41288 = G__41547;
count__41289 = G__41548;
i__41290 = G__41549;
continue;
} else {
var role = cljs.core.first(seq__41287__$1);
var temp__5735__auto___41550__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41550__$2)){
var spec_41551 = temp__5735__auto___41550__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41551)], 0));
} else {
}


var G__41553 = cljs.core.next(seq__41287__$1);
var G__41554 = null;
var G__41555 = (0);
var G__41556 = (0);
seq__41287 = G__41553;
chunk__41288 = G__41554;
count__41289 = G__41555;
i__41290 = G__41556;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__41561 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__41562 = cljs.core.ex_cause(t);
via = G__41561;
t = G__41562;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41306 = datafied_throwable;
var map__41306__$1 = (((((!((map__41306 == null))))?(((((map__41306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41306):map__41306);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41306__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41306__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41306__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41307 = cljs.core.last(via);
var map__41307__$1 = (((((!((map__41307 == null))))?(((((map__41307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41307):map__41307);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41307__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41307__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41307__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41308 = data;
var map__41308__$1 = (((((!((map__41308 == null))))?(((((map__41308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41308):map__41308);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41308__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41308__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41308__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41309 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41309__$1 = (((((!((map__41309 == null))))?(((((map__41309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41309):map__41309);
var top_data = map__41309__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41309__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41331 = phase;
var G__41331__$1 = (((G__41331 instanceof cljs.core.Keyword))?G__41331.fqn:null);
switch (G__41331__$1) {
case "read-source":
var map__41332 = data;
var map__41332__$1 = (((((!((map__41332 == null))))?(((((map__41332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41332):map__41332);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41332__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41332__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41334 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41334__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41334,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41334);
var G__41334__$2 = (cljs.core.truth_((function (){var fexpr__41342 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41342.cljs$core$IFn$_invoke$arity$1 ? fexpr__41342.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41342.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41334__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41334__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41334__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41334__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41343 = top_data;
var G__41343__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41343,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41343);
var G__41343__$2 = (cljs.core.truth_((function (){var fexpr__41344 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41344.cljs$core$IFn$_invoke$arity$1 ? fexpr__41344.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41344.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41343__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41343__$1);
var G__41343__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41343__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41343__$2);
var G__41343__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41343__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41343__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41343__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41343__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41350 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41350,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41350,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41350,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41350,(3),null);
var G__41359 = top_data;
var G__41359__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41359,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41359);
var G__41359__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41359__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41359__$1);
var G__41359__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41359__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41359__$2);
var G__41359__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41359__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41359__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41359__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41359__$4;
}

break;
case "execution":
var vec__41371 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41371,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41371,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41371,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41371,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41305_SHARP_){
var or__4185__auto__ = (p1__41305_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__41391 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41391.cljs$core$IFn$_invoke$arity$1 ? fexpr__41391.cljs$core$IFn$_invoke$arity$1(p1__41305_SHARP_) : fexpr__41391.call(null,p1__41305_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__41392 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41392__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41392,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41392);
var G__41392__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41392__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41392__$1);
var G__41392__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41392__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41392__$2);
var G__41392__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41392__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41392__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41392__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41392__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41331__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41417){
var map__41418 = p__41417;
var map__41418__$1 = (((((!((map__41418 == null))))?(((((map__41418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41418):map__41418);
var triage_data = map__41418__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41418__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41418__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41418__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41418__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41418__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41418__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41418__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41418__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41435 = phase;
var G__41435__$1 = (((G__41435 instanceof cljs.core.Keyword))?G__41435.fqn:null);
switch (G__41435__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41439 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41440 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41441 = loc;
var G__41442 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41443_41580 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41444_41581 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41445_41582 = true;
var _STAR_print_fn_STAR__temp_val__41446_41583 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41445_41582);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41446_41583);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41405_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41405_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41444_41581);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41443_41580);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41439,G__41440,G__41441,G__41442) : format.call(null,G__41439,G__41440,G__41441,G__41442));

break;
case "macroexpansion":
var G__41448 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41449 = cause_type;
var G__41450 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41451 = loc;
var G__41452 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41448,G__41449,G__41450,G__41451,G__41452) : format.call(null,G__41448,G__41449,G__41450,G__41451,G__41452));

break;
case "compile-syntax-check":
var G__41453 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41454 = cause_type;
var G__41455 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41456 = loc;
var G__41457 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41453,G__41454,G__41455,G__41456,G__41457) : format.call(null,G__41453,G__41454,G__41455,G__41456,G__41457));

break;
case "compilation":
var G__41459 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41460 = cause_type;
var G__41461 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41462 = loc;
var G__41463 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41459,G__41460,G__41461,G__41462,G__41463) : format.call(null,G__41459,G__41460,G__41461,G__41462,G__41463));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41464 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41465 = symbol;
var G__41466 = loc;
var G__41467 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41468_41584 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41469_41585 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41470_41586 = true;
var _STAR_print_fn_STAR__temp_val__41471_41587 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41470_41586);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41471_41587);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41408_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41408_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41469_41585);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41468_41584);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41464,G__41465,G__41466,G__41467) : format.call(null,G__41464,G__41465,G__41466,G__41467));
} else {
var G__41472 = "Execution error%s at %s(%s).\n%s\n";
var G__41473 = cause_type;
var G__41474 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41475 = loc;
var G__41476 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41472,G__41473,G__41474,G__41475,G__41476) : format.call(null,G__41472,G__41473,G__41474,G__41475,G__41476));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41435__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

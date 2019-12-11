goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__40714__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40715__i = 0, G__40715__a = new Array(arguments.length -  0);
while (G__40715__i < G__40715__a.length) {G__40715__a[G__40715__i] = arguments[G__40715__i + 0]; ++G__40715__i;}
  args = new cljs.core.IndexedSeq(G__40715__a,0,null);
} 
return G__40714__delegate.call(this,args);};
G__40714.cljs$lang$maxFixedArity = 0;
G__40714.cljs$lang$applyTo = (function (arglist__40716){
var args = cljs.core.seq(arglist__40716);
return G__40714__delegate(args);
});
G__40714.cljs$core$IFn$_invoke$arity$variadic = G__40714__delegate;
return G__40714;
})()
);

(o.error = (function() { 
var G__40717__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40718__i = 0, G__40718__a = new Array(arguments.length -  0);
while (G__40718__i < G__40718__a.length) {G__40718__a[G__40718__i] = arguments[G__40718__i + 0]; ++G__40718__i;}
  args = new cljs.core.IndexedSeq(G__40718__a,0,null);
} 
return G__40717__delegate.call(this,args);};
G__40717.cljs$lang$maxFixedArity = 0;
G__40717.cljs$lang$applyTo = (function (arglist__40719){
var args = cljs.core.seq(arglist__40719);
return G__40717__delegate(args);
});
G__40717.cljs$core$IFn$_invoke$arity$variadic = G__40717__delegate;
return G__40717;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

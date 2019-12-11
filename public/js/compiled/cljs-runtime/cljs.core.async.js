goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36392 = arguments.length;
switch (G__36392) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36393 = (function (f,blockable,meta36394){
this.f = f;
this.blockable = blockable;
this.meta36394 = meta36394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36395,meta36394__$1){
var self__ = this;
var _36395__$1 = this;
return (new cljs.core.async.t_cljs$core$async36393(self__.f,self__.blockable,meta36394__$1));
}));

(cljs.core.async.t_cljs$core$async36393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36395){
var self__ = this;
var _36395__$1 = this;
return self__.meta36394;
}));

(cljs.core.async.t_cljs$core$async36393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36394","meta36394",-949070756,null)], null);
}));

(cljs.core.async.t_cljs$core$async36393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36393");

(cljs.core.async.t_cljs$core$async36393.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36393.
 */
cljs.core.async.__GT_t_cljs$core$async36393 = (function cljs$core$async$__GT_t_cljs$core$async36393(f__$1,blockable__$1,meta36394){
return (new cljs.core.async.t_cljs$core$async36393(f__$1,blockable__$1,meta36394));
});

}

return (new cljs.core.async.t_cljs$core$async36393(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36398 = arguments.length;
switch (G__36398) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36400 = arguments.length;
switch (G__36400) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36402 = arguments.length;
switch (G__36402) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_37839 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37839) : fn1.call(null,val_37839));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37839) : fn1.call(null,val_37839));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36404 = arguments.length;
switch (G__36404) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___37850 = n;
var x_37851 = (0);
while(true){
if((x_37851 < n__4666__auto___37850)){
(a[x_37851] = x_37851);

var G__37853 = (x_37851 + (1));
x_37851 = G__37853;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36405 = (function (flag,meta36406){
this.flag = flag;
this.meta36406 = meta36406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36407,meta36406__$1){
var self__ = this;
var _36407__$1 = this;
return (new cljs.core.async.t_cljs$core$async36405(self__.flag,meta36406__$1));
}));

(cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36407){
var self__ = this;
var _36407__$1 = this;
return self__.meta36406;
}));

(cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36406","meta36406",557341672,null)], null);
}));

(cljs.core.async.t_cljs$core$async36405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36405");

(cljs.core.async.t_cljs$core$async36405.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36405.
 */
cljs.core.async.__GT_t_cljs$core$async36405 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36405(flag__$1,meta36406){
return (new cljs.core.async.t_cljs$core$async36405(flag__$1,meta36406));
});

}

return (new cljs.core.async.t_cljs$core$async36405(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36408 = (function (flag,cb,meta36409){
this.flag = flag;
this.cb = cb;
this.meta36409 = meta36409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36410,meta36409__$1){
var self__ = this;
var _36410__$1 = this;
return (new cljs.core.async.t_cljs$core$async36408(self__.flag,self__.cb,meta36409__$1));
}));

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36410){
var self__ = this;
var _36410__$1 = this;
return self__.meta36409;
}));

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36409","meta36409",-1369107432,null)], null);
}));

(cljs.core.async.t_cljs$core$async36408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36408");

(cljs.core.async.t_cljs$core$async36408.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36408.
 */
cljs.core.async.__GT_t_cljs$core$async36408 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36408(flag__$1,cb__$1,meta36409){
return (new cljs.core.async.t_cljs$core$async36408(flag__$1,cb__$1,meta36409));
});

}

return (new cljs.core.async.t_cljs$core$async36408(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36411_SHARP_){
var G__36413 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36411_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36413) : fret.call(null,G__36413));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36412_SHARP_){
var G__36414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36412_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36414) : fret.call(null,G__36414));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37872 = (i + (1));
i = G__37872;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37876 = arguments.length;
var i__4790__auto___37877 = (0);
while(true){
if((i__4790__auto___37877 < len__4789__auto___37876)){
args__4795__auto__.push((arguments[i__4790__auto___37877]));

var G__37878 = (i__4790__auto___37877 + (1));
i__4790__auto___37877 = G__37878;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36417){
var map__36418 = p__36417;
var map__36418__$1 = (((((!((map__36418 == null))))?(((((map__36418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36418):map__36418);
var opts = map__36418__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36415){
var G__36416 = cljs.core.first(seq36415);
var seq36415__$1 = cljs.core.next(seq36415);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36416,seq36415__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36421 = arguments.length;
switch (G__36421) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36322__auto___37892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_36445){
var state_val_36446 = (state_36445[(1)]);
if((state_val_36446 === (7))){
var inst_36441 = (state_36445[(2)]);
var state_36445__$1 = state_36445;
var statearr_36447_37893 = state_36445__$1;
(statearr_36447_37893[(2)] = inst_36441);

(statearr_36447_37893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (1))){
var state_36445__$1 = state_36445;
var statearr_36448_37895 = state_36445__$1;
(statearr_36448_37895[(2)] = null);

(statearr_36448_37895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (4))){
var inst_36424 = (state_36445[(7)]);
var inst_36424__$1 = (state_36445[(2)]);
var inst_36425 = (inst_36424__$1 == null);
var state_36445__$1 = (function (){var statearr_36449 = state_36445;
(statearr_36449[(7)] = inst_36424__$1);

return statearr_36449;
})();
if(cljs.core.truth_(inst_36425)){
var statearr_36450_37896 = state_36445__$1;
(statearr_36450_37896[(1)] = (5));

} else {
var statearr_36451_37897 = state_36445__$1;
(statearr_36451_37897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (13))){
var state_36445__$1 = state_36445;
var statearr_36452_37899 = state_36445__$1;
(statearr_36452_37899[(2)] = null);

(statearr_36452_37899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (6))){
var inst_36424 = (state_36445[(7)]);
var state_36445__$1 = state_36445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36445__$1,(11),to,inst_36424);
} else {
if((state_val_36446 === (3))){
var inst_36443 = (state_36445[(2)]);
var state_36445__$1 = state_36445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36445__$1,inst_36443);
} else {
if((state_val_36446 === (12))){
var state_36445__$1 = state_36445;
var statearr_36453_37903 = state_36445__$1;
(statearr_36453_37903[(2)] = null);

(statearr_36453_37903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (2))){
var state_36445__$1 = state_36445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36445__$1,(4),from);
} else {
if((state_val_36446 === (11))){
var inst_36434 = (state_36445[(2)]);
var state_36445__$1 = state_36445;
if(cljs.core.truth_(inst_36434)){
var statearr_36454_37904 = state_36445__$1;
(statearr_36454_37904[(1)] = (12));

} else {
var statearr_36455_37905 = state_36445__$1;
(statearr_36455_37905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (9))){
var state_36445__$1 = state_36445;
var statearr_36456_37906 = state_36445__$1;
(statearr_36456_37906[(2)] = null);

(statearr_36456_37906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (5))){
var state_36445__$1 = state_36445;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36457_37907 = state_36445__$1;
(statearr_36457_37907[(1)] = (8));

} else {
var statearr_36458_37908 = state_36445__$1;
(statearr_36458_37908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (14))){
var inst_36439 = (state_36445[(2)]);
var state_36445__$1 = state_36445;
var statearr_36459_37911 = state_36445__$1;
(statearr_36459_37911[(2)] = inst_36439);

(statearr_36459_37911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (10))){
var inst_36431 = (state_36445[(2)]);
var state_36445__$1 = state_36445;
var statearr_36460_37912 = state_36445__$1;
(statearr_36460_37912[(2)] = inst_36431);

(statearr_36460_37912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36446 === (8))){
var inst_36428 = cljs.core.async.close_BANG_(to);
var state_36445__$1 = state_36445;
var statearr_36461_37914 = state_36445__$1;
(statearr_36461_37914[(2)] = inst_36428);

(statearr_36461_37914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36232__auto__ = null;
var cljs$core$async$state_machine__36232__auto____0 = (function (){
var statearr_36462 = [null,null,null,null,null,null,null,null];
(statearr_36462[(0)] = cljs$core$async$state_machine__36232__auto__);

(statearr_36462[(1)] = (1));

return statearr_36462;
});
var cljs$core$async$state_machine__36232__auto____1 = (function (state_36445){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_36445);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e36463){if((e36463 instanceof Object)){
var ex__36235__auto__ = e36463;
var statearr_36464_37918 = state_36445;
(statearr_36464_37918[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37919 = state_36445;
state_36445 = G__37919;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$state_machine__36232__auto__ = function(state_36445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36232__auto____1.call(this,state_36445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36232__auto____0;
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36232__auto____1;
return cljs$core$async$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_36465 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_36465[(6)] = c__36322__auto___37892);

return statearr_36465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__36466){
var vec__36467 = p__36466;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36467,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36467,(1),null);
var job = vec__36467;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36322__auto___37924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_36474){
var state_val_36475 = (state_36474[(1)]);
if((state_val_36475 === (1))){
var state_36474__$1 = state_36474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36474__$1,(2),res,v);
} else {
if((state_val_36475 === (2))){
var inst_36471 = (state_36474[(2)]);
var inst_36472 = cljs.core.async.close_BANG_(res);
var state_36474__$1 = (function (){var statearr_36476 = state_36474;
(statearr_36476[(7)] = inst_36471);

return statearr_36476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36474__$1,inst_36472);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0 = (function (){
var statearr_36477 = [null,null,null,null,null,null,null,null];
(statearr_36477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__);

(statearr_36477[(1)] = (1));

return statearr_36477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1 = (function (state_36474){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_36474);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e36478){if((e36478 instanceof Object)){
var ex__36235__auto__ = e36478;
var statearr_36479_37928 = state_36474;
(statearr_36479_37928[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37931 = state_36474;
state_36474 = G__37931;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__ = function(state_36474){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1.call(this,state_36474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_36480 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_36480[(6)] = c__36322__auto___37924);

return statearr_36480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36481){
var vec__36482 = p__36481;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36482,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36482,(1),null);
var job = vec__36482;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___37936 = n;
var __37937 = (0);
while(true){
if((__37937 < n__4666__auto___37936)){
var G__36485_37938 = type;
var G__36485_37939__$1 = (((G__36485_37938 instanceof cljs.core.Keyword))?G__36485_37938.fqn:null);
switch (G__36485_37939__$1) {
case "compute":
var c__36322__auto___37941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37937,c__36322__auto___37941,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async){
return (function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = ((function (__37937,c__36322__auto___37941,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async){
return (function (state_36498){
var state_val_36499 = (state_36498[(1)]);
if((state_val_36499 === (1))){
var state_36498__$1 = state_36498;
var statearr_36500_37942 = state_36498__$1;
(statearr_36500_37942[(2)] = null);

(statearr_36500_37942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (2))){
var state_36498__$1 = state_36498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36498__$1,(4),jobs);
} else {
if((state_val_36499 === (3))){
var inst_36496 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36498__$1,inst_36496);
} else {
if((state_val_36499 === (4))){
var inst_36488 = (state_36498[(2)]);
var inst_36489 = process(inst_36488);
var state_36498__$1 = state_36498;
if(cljs.core.truth_(inst_36489)){
var statearr_36501_37943 = state_36498__$1;
(statearr_36501_37943[(1)] = (5));

} else {
var statearr_36502_37944 = state_36498__$1;
(statearr_36502_37944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (5))){
var state_36498__$1 = state_36498;
var statearr_36503_37945 = state_36498__$1;
(statearr_36503_37945[(2)] = null);

(statearr_36503_37945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (6))){
var state_36498__$1 = state_36498;
var statearr_36504_37946 = state_36498__$1;
(statearr_36504_37946[(2)] = null);

(statearr_36504_37946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36499 === (7))){
var inst_36494 = (state_36498[(2)]);
var state_36498__$1 = state_36498;
var statearr_36505_37947 = state_36498__$1;
(statearr_36505_37947[(2)] = inst_36494);

(statearr_36505_37947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37937,c__36322__auto___37941,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async))
;
return ((function (__37937,switch__36231__auto__,c__36322__auto___37941,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0 = (function (){
var statearr_36506 = [null,null,null,null,null,null,null];
(statearr_36506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__);

(statearr_36506[(1)] = (1));

return statearr_36506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1 = (function (state_36498){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_36498);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e36507){if((e36507 instanceof Object)){
var ex__36235__auto__ = e36507;
var statearr_36508_37948 = state_36498;
(statearr_36508_37948[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37949 = state_36498;
state_36498 = G__37949;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__ = function(state_36498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1.call(this,state_36498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__;
})()
;})(__37937,switch__36231__auto__,c__36322__auto___37941,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async))
})();
var state__36324__auto__ = (function (){var statearr_36509 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_36509[(6)] = c__36322__auto___37941);

return statearr_36509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
});})(__37937,c__36322__auto___37941,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async))
);


break;
case "async":
var c__36322__auto___37950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37937,c__36322__auto___37950,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async){
return (function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = ((function (__37937,c__36322__auto___37950,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async){
return (function (state_36522){
var state_val_36523 = (state_36522[(1)]);
if((state_val_36523 === (1))){
var state_36522__$1 = state_36522;
var statearr_36524_37951 = state_36522__$1;
(statearr_36524_37951[(2)] = null);

(statearr_36524_37951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (2))){
var state_36522__$1 = state_36522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36522__$1,(4),jobs);
} else {
if((state_val_36523 === (3))){
var inst_36520 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36522__$1,inst_36520);
} else {
if((state_val_36523 === (4))){
var inst_36512 = (state_36522[(2)]);
var inst_36513 = async(inst_36512);
var state_36522__$1 = state_36522;
if(cljs.core.truth_(inst_36513)){
var statearr_36525_37954 = state_36522__$1;
(statearr_36525_37954[(1)] = (5));

} else {
var statearr_36526_37955 = state_36522__$1;
(statearr_36526_37955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (5))){
var state_36522__$1 = state_36522;
var statearr_36527_37956 = state_36522__$1;
(statearr_36527_37956[(2)] = null);

(statearr_36527_37956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (6))){
var state_36522__$1 = state_36522;
var statearr_36528_37957 = state_36522__$1;
(statearr_36528_37957[(2)] = null);

(statearr_36528_37957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (7))){
var inst_36518 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
var statearr_36529_37958 = state_36522__$1;
(statearr_36529_37958[(2)] = inst_36518);

(statearr_36529_37958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37937,c__36322__auto___37950,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async))
;
return ((function (__37937,switch__36231__auto__,c__36322__auto___37950,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0 = (function (){
var statearr_36530 = [null,null,null,null,null,null,null];
(statearr_36530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__);

(statearr_36530[(1)] = (1));

return statearr_36530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1 = (function (state_36522){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_36522);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e36531){if((e36531 instanceof Object)){
var ex__36235__auto__ = e36531;
var statearr_36532_37959 = state_36522;
(statearr_36532_37959[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36531;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37960 = state_36522;
state_36522 = G__37960;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__ = function(state_36522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1.call(this,state_36522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__;
})()
;})(__37937,switch__36231__auto__,c__36322__auto___37950,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async))
})();
var state__36324__auto__ = (function (){var statearr_36533 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_36533[(6)] = c__36322__auto___37950);

return statearr_36533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
});})(__37937,c__36322__auto___37950,G__36485_37938,G__36485_37939__$1,n__4666__auto___37936,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36485_37939__$1)].join('')));

}

var G__37962 = (__37937 + (1));
__37937 = G__37962;
continue;
} else {
}
break;
}

var c__36322__auto___37963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_36555){
var state_val_36556 = (state_36555[(1)]);
if((state_val_36556 === (7))){
var inst_36551 = (state_36555[(2)]);
var state_36555__$1 = state_36555;
var statearr_36557_37964 = state_36555__$1;
(statearr_36557_37964[(2)] = inst_36551);

(statearr_36557_37964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (1))){
var state_36555__$1 = state_36555;
var statearr_36558_37966 = state_36555__$1;
(statearr_36558_37966[(2)] = null);

(statearr_36558_37966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (4))){
var inst_36536 = (state_36555[(7)]);
var inst_36536__$1 = (state_36555[(2)]);
var inst_36537 = (inst_36536__$1 == null);
var state_36555__$1 = (function (){var statearr_36559 = state_36555;
(statearr_36559[(7)] = inst_36536__$1);

return statearr_36559;
})();
if(cljs.core.truth_(inst_36537)){
var statearr_36560_37967 = state_36555__$1;
(statearr_36560_37967[(1)] = (5));

} else {
var statearr_36561_37968 = state_36555__$1;
(statearr_36561_37968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (6))){
var inst_36536 = (state_36555[(7)]);
var inst_36541 = (state_36555[(8)]);
var inst_36541__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36542 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36543 = [inst_36536,inst_36541__$1];
var inst_36544 = (new cljs.core.PersistentVector(null,2,(5),inst_36542,inst_36543,null));
var state_36555__$1 = (function (){var statearr_36562 = state_36555;
(statearr_36562[(8)] = inst_36541__$1);

return statearr_36562;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36555__$1,(8),jobs,inst_36544);
} else {
if((state_val_36556 === (3))){
var inst_36553 = (state_36555[(2)]);
var state_36555__$1 = state_36555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36555__$1,inst_36553);
} else {
if((state_val_36556 === (2))){
var state_36555__$1 = state_36555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36555__$1,(4),from);
} else {
if((state_val_36556 === (9))){
var inst_36548 = (state_36555[(2)]);
var state_36555__$1 = (function (){var statearr_36563 = state_36555;
(statearr_36563[(9)] = inst_36548);

return statearr_36563;
})();
var statearr_36564_37969 = state_36555__$1;
(statearr_36564_37969[(2)] = null);

(statearr_36564_37969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (5))){
var inst_36539 = cljs.core.async.close_BANG_(jobs);
var state_36555__$1 = state_36555;
var statearr_36565_37970 = state_36555__$1;
(statearr_36565_37970[(2)] = inst_36539);

(statearr_36565_37970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (8))){
var inst_36541 = (state_36555[(8)]);
var inst_36546 = (state_36555[(2)]);
var state_36555__$1 = (function (){var statearr_36566 = state_36555;
(statearr_36566[(10)] = inst_36546);

return statearr_36566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36555__$1,(9),results,inst_36541);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0 = (function (){
var statearr_36567 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__);

(statearr_36567[(1)] = (1));

return statearr_36567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1 = (function (state_36555){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_36555);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e36568){if((e36568 instanceof Object)){
var ex__36235__auto__ = e36568;
var statearr_36569_37980 = state_36555;
(statearr_36569_37980[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37981 = state_36555;
state_36555 = G__37981;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__ = function(state_36555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1.call(this,state_36555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_36570 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_36570[(6)] = c__36322__auto___37963);

return statearr_36570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


var c__36322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_36608){
var state_val_36609 = (state_36608[(1)]);
if((state_val_36609 === (7))){
var inst_36604 = (state_36608[(2)]);
var state_36608__$1 = state_36608;
var statearr_36610_37982 = state_36608__$1;
(statearr_36610_37982[(2)] = inst_36604);

(statearr_36610_37982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (20))){
var state_36608__$1 = state_36608;
var statearr_36611_37983 = state_36608__$1;
(statearr_36611_37983[(2)] = null);

(statearr_36611_37983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (1))){
var state_36608__$1 = state_36608;
var statearr_36612_37984 = state_36608__$1;
(statearr_36612_37984[(2)] = null);

(statearr_36612_37984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (4))){
var inst_36573 = (state_36608[(7)]);
var inst_36573__$1 = (state_36608[(2)]);
var inst_36574 = (inst_36573__$1 == null);
var state_36608__$1 = (function (){var statearr_36613 = state_36608;
(statearr_36613[(7)] = inst_36573__$1);

return statearr_36613;
})();
if(cljs.core.truth_(inst_36574)){
var statearr_36614_37985 = state_36608__$1;
(statearr_36614_37985[(1)] = (5));

} else {
var statearr_36615_37986 = state_36608__$1;
(statearr_36615_37986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (15))){
var inst_36586 = (state_36608[(8)]);
var state_36608__$1 = state_36608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36608__$1,(18),to,inst_36586);
} else {
if((state_val_36609 === (21))){
var inst_36599 = (state_36608[(2)]);
var state_36608__$1 = state_36608;
var statearr_36616_37987 = state_36608__$1;
(statearr_36616_37987[(2)] = inst_36599);

(statearr_36616_37987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (13))){
var inst_36601 = (state_36608[(2)]);
var state_36608__$1 = (function (){var statearr_36617 = state_36608;
(statearr_36617[(9)] = inst_36601);

return statearr_36617;
})();
var statearr_36618_37988 = state_36608__$1;
(statearr_36618_37988[(2)] = null);

(statearr_36618_37988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (6))){
var inst_36573 = (state_36608[(7)]);
var state_36608__$1 = state_36608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36608__$1,(11),inst_36573);
} else {
if((state_val_36609 === (17))){
var inst_36594 = (state_36608[(2)]);
var state_36608__$1 = state_36608;
if(cljs.core.truth_(inst_36594)){
var statearr_36619_37989 = state_36608__$1;
(statearr_36619_37989[(1)] = (19));

} else {
var statearr_36620_37990 = state_36608__$1;
(statearr_36620_37990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (3))){
var inst_36606 = (state_36608[(2)]);
var state_36608__$1 = state_36608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36608__$1,inst_36606);
} else {
if((state_val_36609 === (12))){
var inst_36583 = (state_36608[(10)]);
var state_36608__$1 = state_36608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36608__$1,(14),inst_36583);
} else {
if((state_val_36609 === (2))){
var state_36608__$1 = state_36608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36608__$1,(4),results);
} else {
if((state_val_36609 === (19))){
var state_36608__$1 = state_36608;
var statearr_36621_37991 = state_36608__$1;
(statearr_36621_37991[(2)] = null);

(statearr_36621_37991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (11))){
var inst_36583 = (state_36608[(2)]);
var state_36608__$1 = (function (){var statearr_36622 = state_36608;
(statearr_36622[(10)] = inst_36583);

return statearr_36622;
})();
var statearr_36623_37992 = state_36608__$1;
(statearr_36623_37992[(2)] = null);

(statearr_36623_37992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (9))){
var state_36608__$1 = state_36608;
var statearr_36624_37993 = state_36608__$1;
(statearr_36624_37993[(2)] = null);

(statearr_36624_37993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (5))){
var state_36608__$1 = state_36608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36625_37995 = state_36608__$1;
(statearr_36625_37995[(1)] = (8));

} else {
var statearr_36626_37996 = state_36608__$1;
(statearr_36626_37996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (14))){
var inst_36586 = (state_36608[(8)]);
var inst_36586__$1 = (state_36608[(2)]);
var inst_36587 = (inst_36586__$1 == null);
var inst_36588 = cljs.core.not(inst_36587);
var state_36608__$1 = (function (){var statearr_36627 = state_36608;
(statearr_36627[(8)] = inst_36586__$1);

return statearr_36627;
})();
if(inst_36588){
var statearr_36628_37997 = state_36608__$1;
(statearr_36628_37997[(1)] = (15));

} else {
var statearr_36629_37998 = state_36608__$1;
(statearr_36629_37998[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (16))){
var state_36608__$1 = state_36608;
var statearr_36630_37999 = state_36608__$1;
(statearr_36630_37999[(2)] = false);

(statearr_36630_37999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (10))){
var inst_36580 = (state_36608[(2)]);
var state_36608__$1 = state_36608;
var statearr_36631_38001 = state_36608__$1;
(statearr_36631_38001[(2)] = inst_36580);

(statearr_36631_38001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (18))){
var inst_36591 = (state_36608[(2)]);
var state_36608__$1 = state_36608;
var statearr_36632_38003 = state_36608__$1;
(statearr_36632_38003[(2)] = inst_36591);

(statearr_36632_38003[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (8))){
var inst_36577 = cljs.core.async.close_BANG_(to);
var state_36608__$1 = state_36608;
var statearr_36633_38004 = state_36608__$1;
(statearr_36633_38004[(2)] = inst_36577);

(statearr_36633_38004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0 = (function (){
var statearr_36634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__);

(statearr_36634[(1)] = (1));

return statearr_36634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1 = (function (state_36608){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_36608);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e36635){if((e36635 instanceof Object)){
var ex__36235__auto__ = e36635;
var statearr_36636_38007 = state_36608;
(statearr_36636_38007[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38008 = state_36608;
state_36608 = G__38008;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__ = function(state_36608){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1.call(this,state_36608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_36637 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_36637[(6)] = c__36322__auto__);

return statearr_36637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));

return c__36322__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36639 = arguments.length;
switch (G__36639) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36641 = arguments.length;
switch (G__36641) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36643 = arguments.length;
switch (G__36643) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__36322__auto___38019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_36669){
var state_val_36670 = (state_36669[(1)]);
if((state_val_36670 === (7))){
var inst_36665 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36671_38021 = state_36669__$1;
(statearr_36671_38021[(2)] = inst_36665);

(statearr_36671_38021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (1))){
var state_36669__$1 = state_36669;
var statearr_36672_38022 = state_36669__$1;
(statearr_36672_38022[(2)] = null);

(statearr_36672_38022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (4))){
var inst_36646 = (state_36669[(7)]);
var inst_36646__$1 = (state_36669[(2)]);
var inst_36647 = (inst_36646__$1 == null);
var state_36669__$1 = (function (){var statearr_36673 = state_36669;
(statearr_36673[(7)] = inst_36646__$1);

return statearr_36673;
})();
if(cljs.core.truth_(inst_36647)){
var statearr_36674_38024 = state_36669__$1;
(statearr_36674_38024[(1)] = (5));

} else {
var statearr_36675_38025 = state_36669__$1;
(statearr_36675_38025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (13))){
var state_36669__$1 = state_36669;
var statearr_36676_38026 = state_36669__$1;
(statearr_36676_38026[(2)] = null);

(statearr_36676_38026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (6))){
var inst_36646 = (state_36669[(7)]);
var inst_36652 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36646) : p.call(null,inst_36646));
var state_36669__$1 = state_36669;
if(cljs.core.truth_(inst_36652)){
var statearr_36677_38027 = state_36669__$1;
(statearr_36677_38027[(1)] = (9));

} else {
var statearr_36678_38028 = state_36669__$1;
(statearr_36678_38028[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (3))){
var inst_36667 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36669__$1,inst_36667);
} else {
if((state_val_36670 === (12))){
var state_36669__$1 = state_36669;
var statearr_36679_38030 = state_36669__$1;
(statearr_36679_38030[(2)] = null);

(statearr_36679_38030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (2))){
var state_36669__$1 = state_36669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36669__$1,(4),ch);
} else {
if((state_val_36670 === (11))){
var inst_36646 = (state_36669[(7)]);
var inst_36656 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36669__$1,(8),inst_36656,inst_36646);
} else {
if((state_val_36670 === (9))){
var state_36669__$1 = state_36669;
var statearr_36680_38031 = state_36669__$1;
(statearr_36680_38031[(2)] = tc);

(statearr_36680_38031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (5))){
var inst_36649 = cljs.core.async.close_BANG_(tc);
var inst_36650 = cljs.core.async.close_BANG_(fc);
var state_36669__$1 = (function (){var statearr_36681 = state_36669;
(statearr_36681[(8)] = inst_36649);

return statearr_36681;
})();
var statearr_36682_38032 = state_36669__$1;
(statearr_36682_38032[(2)] = inst_36650);

(statearr_36682_38032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (14))){
var inst_36663 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36683_38034 = state_36669__$1;
(statearr_36683_38034[(2)] = inst_36663);

(statearr_36683_38034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (10))){
var state_36669__$1 = state_36669;
var statearr_36684_38036 = state_36669__$1;
(statearr_36684_38036[(2)] = fc);

(statearr_36684_38036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (8))){
var inst_36658 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
if(cljs.core.truth_(inst_36658)){
var statearr_36685_38037 = state_36669__$1;
(statearr_36685_38037[(1)] = (12));

} else {
var statearr_36686_38038 = state_36669__$1;
(statearr_36686_38038[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36232__auto__ = null;
var cljs$core$async$state_machine__36232__auto____0 = (function (){
var statearr_36687 = [null,null,null,null,null,null,null,null,null];
(statearr_36687[(0)] = cljs$core$async$state_machine__36232__auto__);

(statearr_36687[(1)] = (1));

return statearr_36687;
});
var cljs$core$async$state_machine__36232__auto____1 = (function (state_36669){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_36669);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e36688){if((e36688 instanceof Object)){
var ex__36235__auto__ = e36688;
var statearr_36689_38041 = state_36669;
(statearr_36689_38041[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38042 = state_36669;
state_36669 = G__38042;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$state_machine__36232__auto__ = function(state_36669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36232__auto____1.call(this,state_36669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36232__auto____0;
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36232__auto____1;
return cljs$core$async$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_36690 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_36690[(6)] = c__36322__auto___38019);

return statearr_36690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_36711){
var state_val_36712 = (state_36711[(1)]);
if((state_val_36712 === (7))){
var inst_36707 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36713_38046 = state_36711__$1;
(statearr_36713_38046[(2)] = inst_36707);

(statearr_36713_38046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (1))){
var inst_36691 = init;
var state_36711__$1 = (function (){var statearr_36714 = state_36711;
(statearr_36714[(7)] = inst_36691);

return statearr_36714;
})();
var statearr_36715_38049 = state_36711__$1;
(statearr_36715_38049[(2)] = null);

(statearr_36715_38049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (4))){
var inst_36694 = (state_36711[(8)]);
var inst_36694__$1 = (state_36711[(2)]);
var inst_36695 = (inst_36694__$1 == null);
var state_36711__$1 = (function (){var statearr_36716 = state_36711;
(statearr_36716[(8)] = inst_36694__$1);

return statearr_36716;
})();
if(cljs.core.truth_(inst_36695)){
var statearr_36717_38052 = state_36711__$1;
(statearr_36717_38052[(1)] = (5));

} else {
var statearr_36718_38053 = state_36711__$1;
(statearr_36718_38053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (6))){
var inst_36691 = (state_36711[(7)]);
var inst_36698 = (state_36711[(9)]);
var inst_36694 = (state_36711[(8)]);
var inst_36698__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36691,inst_36694) : f.call(null,inst_36691,inst_36694));
var inst_36699 = cljs.core.reduced_QMARK_(inst_36698__$1);
var state_36711__$1 = (function (){var statearr_36719 = state_36711;
(statearr_36719[(9)] = inst_36698__$1);

return statearr_36719;
})();
if(inst_36699){
var statearr_36720_38056 = state_36711__$1;
(statearr_36720_38056[(1)] = (8));

} else {
var statearr_36721_38057 = state_36711__$1;
(statearr_36721_38057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (3))){
var inst_36709 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36711__$1,inst_36709);
} else {
if((state_val_36712 === (2))){
var state_36711__$1 = state_36711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36711__$1,(4),ch);
} else {
if((state_val_36712 === (9))){
var inst_36698 = (state_36711[(9)]);
var inst_36691 = inst_36698;
var state_36711__$1 = (function (){var statearr_36722 = state_36711;
(statearr_36722[(7)] = inst_36691);

return statearr_36722;
})();
var statearr_36723_38058 = state_36711__$1;
(statearr_36723_38058[(2)] = null);

(statearr_36723_38058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (5))){
var inst_36691 = (state_36711[(7)]);
var state_36711__$1 = state_36711;
var statearr_36724_38059 = state_36711__$1;
(statearr_36724_38059[(2)] = inst_36691);

(statearr_36724_38059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (10))){
var inst_36705 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36725_38060 = state_36711__$1;
(statearr_36725_38060[(2)] = inst_36705);

(statearr_36725_38060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (8))){
var inst_36698 = (state_36711[(9)]);
var inst_36701 = cljs.core.deref(inst_36698);
var state_36711__$1 = state_36711;
var statearr_36726_38063 = state_36711__$1;
(statearr_36726_38063[(2)] = inst_36701);

(statearr_36726_38063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36232__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36232__auto____0 = (function (){
var statearr_36727 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36727[(0)] = cljs$core$async$reduce_$_state_machine__36232__auto__);

(statearr_36727[(1)] = (1));

return statearr_36727;
});
var cljs$core$async$reduce_$_state_machine__36232__auto____1 = (function (state_36711){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_36711);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e36728){if((e36728 instanceof Object)){
var ex__36235__auto__ = e36728;
var statearr_36729_38066 = state_36711;
(statearr_36729_38066[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38067 = state_36711;
state_36711 = G__38067;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36232__auto__ = function(state_36711){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36232__auto____1.call(this,state_36711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36232__auto____0;
cljs$core$async$reduce_$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36232__auto____1;
return cljs$core$async$reduce_$_state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_36730 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_36730[(6)] = c__36322__auto__);

return statearr_36730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));

return c__36322__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_36736){
var state_val_36737 = (state_36736[(1)]);
if((state_val_36737 === (1))){
var inst_36731 = cljs.core.async.reduce(f__$1,init,ch);
var state_36736__$1 = state_36736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36736__$1,(2),inst_36731);
} else {
if((state_val_36737 === (2))){
var inst_36733 = (state_36736[(2)]);
var inst_36734 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36733) : f__$1.call(null,inst_36733));
var state_36736__$1 = state_36736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36736__$1,inst_36734);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36232__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36232__auto____0 = (function (){
var statearr_36738 = [null,null,null,null,null,null,null];
(statearr_36738[(0)] = cljs$core$async$transduce_$_state_machine__36232__auto__);

(statearr_36738[(1)] = (1));

return statearr_36738;
});
var cljs$core$async$transduce_$_state_machine__36232__auto____1 = (function (state_36736){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_36736);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e36739){if((e36739 instanceof Object)){
var ex__36235__auto__ = e36739;
var statearr_36740_38074 = state_36736;
(statearr_36740_38074[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36739;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38075 = state_36736;
state_36736 = G__38075;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36232__auto__ = function(state_36736){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36232__auto____1.call(this,state_36736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36232__auto____0;
cljs$core$async$transduce_$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36232__auto____1;
return cljs$core$async$transduce_$_state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_36741 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_36741[(6)] = c__36322__auto__);

return statearr_36741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));

return c__36322__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36743 = arguments.length;
switch (G__36743) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_36768){
var state_val_36769 = (state_36768[(1)]);
if((state_val_36769 === (7))){
var inst_36750 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36770_38081 = state_36768__$1;
(statearr_36770_38081[(2)] = inst_36750);

(statearr_36770_38081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (1))){
var inst_36744 = cljs.core.seq(coll);
var inst_36745 = inst_36744;
var state_36768__$1 = (function (){var statearr_36771 = state_36768;
(statearr_36771[(7)] = inst_36745);

return statearr_36771;
})();
var statearr_36772_38085 = state_36768__$1;
(statearr_36772_38085[(2)] = null);

(statearr_36772_38085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (4))){
var inst_36745 = (state_36768[(7)]);
var inst_36748 = cljs.core.first(inst_36745);
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36768__$1,(7),ch,inst_36748);
} else {
if((state_val_36769 === (13))){
var inst_36762 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36773_38086 = state_36768__$1;
(statearr_36773_38086[(2)] = inst_36762);

(statearr_36773_38086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (6))){
var inst_36753 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
if(cljs.core.truth_(inst_36753)){
var statearr_36774_38090 = state_36768__$1;
(statearr_36774_38090[(1)] = (8));

} else {
var statearr_36775_38091 = state_36768__$1;
(statearr_36775_38091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (3))){
var inst_36766 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36768__$1,inst_36766);
} else {
if((state_val_36769 === (12))){
var state_36768__$1 = state_36768;
var statearr_36776_38092 = state_36768__$1;
(statearr_36776_38092[(2)] = null);

(statearr_36776_38092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (2))){
var inst_36745 = (state_36768[(7)]);
var state_36768__$1 = state_36768;
if(cljs.core.truth_(inst_36745)){
var statearr_36777_38093 = state_36768__$1;
(statearr_36777_38093[(1)] = (4));

} else {
var statearr_36778_38094 = state_36768__$1;
(statearr_36778_38094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (11))){
var inst_36759 = cljs.core.async.close_BANG_(ch);
var state_36768__$1 = state_36768;
var statearr_36779_38098 = state_36768__$1;
(statearr_36779_38098[(2)] = inst_36759);

(statearr_36779_38098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (9))){
var state_36768__$1 = state_36768;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36780_38099 = state_36768__$1;
(statearr_36780_38099[(1)] = (11));

} else {
var statearr_36781_38100 = state_36768__$1;
(statearr_36781_38100[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (5))){
var inst_36745 = (state_36768[(7)]);
var state_36768__$1 = state_36768;
var statearr_36782_38101 = state_36768__$1;
(statearr_36782_38101[(2)] = inst_36745);

(statearr_36782_38101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (10))){
var inst_36764 = (state_36768[(2)]);
var state_36768__$1 = state_36768;
var statearr_36783_38102 = state_36768__$1;
(statearr_36783_38102[(2)] = inst_36764);

(statearr_36783_38102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36769 === (8))){
var inst_36745 = (state_36768[(7)]);
var inst_36755 = cljs.core.next(inst_36745);
var inst_36745__$1 = inst_36755;
var state_36768__$1 = (function (){var statearr_36784 = state_36768;
(statearr_36784[(7)] = inst_36745__$1);

return statearr_36784;
})();
var statearr_36785_38107 = state_36768__$1;
(statearr_36785_38107[(2)] = null);

(statearr_36785_38107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36232__auto__ = null;
var cljs$core$async$state_machine__36232__auto____0 = (function (){
var statearr_36786 = [null,null,null,null,null,null,null,null];
(statearr_36786[(0)] = cljs$core$async$state_machine__36232__auto__);

(statearr_36786[(1)] = (1));

return statearr_36786;
});
var cljs$core$async$state_machine__36232__auto____1 = (function (state_36768){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_36768);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e36787){if((e36787 instanceof Object)){
var ex__36235__auto__ = e36787;
var statearr_36788_38109 = state_36768;
(statearr_36788_38109[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38110 = state_36768;
state_36768 = G__38110;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$state_machine__36232__auto__ = function(state_36768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36232__auto____1.call(this,state_36768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36232__auto____0;
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36232__auto____1;
return cljs$core$async$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_36789 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_36789[(6)] = c__36322__auto__);

return statearr_36789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));

return c__36322__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36790 = (function (ch,cs,meta36791){
this.ch = ch;
this.cs = cs;
this.meta36791 = meta36791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36792,meta36791__$1){
var self__ = this;
var _36792__$1 = this;
return (new cljs.core.async.t_cljs$core$async36790(self__.ch,self__.cs,meta36791__$1));
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36792){
var self__ = this;
var _36792__$1 = this;
return self__.meta36791;
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36791","meta36791",-56374917,null)], null);
}));

(cljs.core.async.t_cljs$core$async36790.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36790");

(cljs.core.async.t_cljs$core$async36790.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36790");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36790.
 */
cljs.core.async.__GT_t_cljs$core$async36790 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36790(ch__$1,cs__$1,meta36791){
return (new cljs.core.async.t_cljs$core$async36790(ch__$1,cs__$1,meta36791));
});

}

return (new cljs.core.async.t_cljs$core$async36790(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__36322__auto___38149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_36927){
var state_val_36928 = (state_36927[(1)]);
if((state_val_36928 === (7))){
var inst_36923 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
var statearr_36929_38150 = state_36927__$1;
(statearr_36929_38150[(2)] = inst_36923);

(statearr_36929_38150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (20))){
var inst_36826 = (state_36927[(7)]);
var inst_36838 = cljs.core.first(inst_36826);
var inst_36839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36838,(0),null);
var inst_36840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36838,(1),null);
var state_36927__$1 = (function (){var statearr_36930 = state_36927;
(statearr_36930[(8)] = inst_36839);

return statearr_36930;
})();
if(cljs.core.truth_(inst_36840)){
var statearr_36931_38157 = state_36927__$1;
(statearr_36931_38157[(1)] = (22));

} else {
var statearr_36932_38158 = state_36927__$1;
(statearr_36932_38158[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (27))){
var inst_36875 = (state_36927[(9)]);
var inst_36795 = (state_36927[(10)]);
var inst_36868 = (state_36927[(11)]);
var inst_36870 = (state_36927[(12)]);
var inst_36875__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36868,inst_36870);
var inst_36876 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36875__$1,inst_36795,done);
var state_36927__$1 = (function (){var statearr_36933 = state_36927;
(statearr_36933[(9)] = inst_36875__$1);

return statearr_36933;
})();
if(cljs.core.truth_(inst_36876)){
var statearr_36934_38165 = state_36927__$1;
(statearr_36934_38165[(1)] = (30));

} else {
var statearr_36935_38166 = state_36927__$1;
(statearr_36935_38166[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (1))){
var state_36927__$1 = state_36927;
var statearr_36936_38167 = state_36927__$1;
(statearr_36936_38167[(2)] = null);

(statearr_36936_38167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (24))){
var inst_36826 = (state_36927[(7)]);
var inst_36845 = (state_36927[(2)]);
var inst_36846 = cljs.core.next(inst_36826);
var inst_36804 = inst_36846;
var inst_36805 = null;
var inst_36806 = (0);
var inst_36807 = (0);
var state_36927__$1 = (function (){var statearr_36937 = state_36927;
(statearr_36937[(13)] = inst_36805);

(statearr_36937[(14)] = inst_36804);

(statearr_36937[(15)] = inst_36807);

(statearr_36937[(16)] = inst_36806);

(statearr_36937[(17)] = inst_36845);

return statearr_36937;
})();
var statearr_36938_38169 = state_36927__$1;
(statearr_36938_38169[(2)] = null);

(statearr_36938_38169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (39))){
var state_36927__$1 = state_36927;
var statearr_36942_38170 = state_36927__$1;
(statearr_36942_38170[(2)] = null);

(statearr_36942_38170[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (4))){
var inst_36795 = (state_36927[(10)]);
var inst_36795__$1 = (state_36927[(2)]);
var inst_36796 = (inst_36795__$1 == null);
var state_36927__$1 = (function (){var statearr_36943 = state_36927;
(statearr_36943[(10)] = inst_36795__$1);

return statearr_36943;
})();
if(cljs.core.truth_(inst_36796)){
var statearr_36944_38171 = state_36927__$1;
(statearr_36944_38171[(1)] = (5));

} else {
var statearr_36945_38172 = state_36927__$1;
(statearr_36945_38172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (15))){
var inst_36805 = (state_36927[(13)]);
var inst_36804 = (state_36927[(14)]);
var inst_36807 = (state_36927[(15)]);
var inst_36806 = (state_36927[(16)]);
var inst_36822 = (state_36927[(2)]);
var inst_36823 = (inst_36807 + (1));
var tmp36939 = inst_36805;
var tmp36940 = inst_36804;
var tmp36941 = inst_36806;
var inst_36804__$1 = tmp36940;
var inst_36805__$1 = tmp36939;
var inst_36806__$1 = tmp36941;
var inst_36807__$1 = inst_36823;
var state_36927__$1 = (function (){var statearr_36946 = state_36927;
(statearr_36946[(13)] = inst_36805__$1);

(statearr_36946[(14)] = inst_36804__$1);

(statearr_36946[(15)] = inst_36807__$1);

(statearr_36946[(16)] = inst_36806__$1);

(statearr_36946[(18)] = inst_36822);

return statearr_36946;
})();
var statearr_36947_38173 = state_36927__$1;
(statearr_36947_38173[(2)] = null);

(statearr_36947_38173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (21))){
var inst_36849 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
var statearr_36951_38174 = state_36927__$1;
(statearr_36951_38174[(2)] = inst_36849);

(statearr_36951_38174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (31))){
var inst_36875 = (state_36927[(9)]);
var inst_36879 = done(null);
var inst_36880 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36875);
var state_36927__$1 = (function (){var statearr_36952 = state_36927;
(statearr_36952[(19)] = inst_36879);

return statearr_36952;
})();
var statearr_36953_38175 = state_36927__$1;
(statearr_36953_38175[(2)] = inst_36880);

(statearr_36953_38175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (32))){
var inst_36869 = (state_36927[(20)]);
var inst_36867 = (state_36927[(21)]);
var inst_36868 = (state_36927[(11)]);
var inst_36870 = (state_36927[(12)]);
var inst_36882 = (state_36927[(2)]);
var inst_36883 = (inst_36870 + (1));
var tmp36948 = inst_36869;
var tmp36949 = inst_36867;
var tmp36950 = inst_36868;
var inst_36867__$1 = tmp36949;
var inst_36868__$1 = tmp36950;
var inst_36869__$1 = tmp36948;
var inst_36870__$1 = inst_36883;
var state_36927__$1 = (function (){var statearr_36954 = state_36927;
(statearr_36954[(20)] = inst_36869__$1);

(statearr_36954[(21)] = inst_36867__$1);

(statearr_36954[(22)] = inst_36882);

(statearr_36954[(11)] = inst_36868__$1);

(statearr_36954[(12)] = inst_36870__$1);

return statearr_36954;
})();
var statearr_36955_38178 = state_36927__$1;
(statearr_36955_38178[(2)] = null);

(statearr_36955_38178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (40))){
var inst_36895 = (state_36927[(23)]);
var inst_36899 = done(null);
var inst_36900 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36895);
var state_36927__$1 = (function (){var statearr_36956 = state_36927;
(statearr_36956[(24)] = inst_36899);

return statearr_36956;
})();
var statearr_36957_38179 = state_36927__$1;
(statearr_36957_38179[(2)] = inst_36900);

(statearr_36957_38179[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (33))){
var inst_36886 = (state_36927[(25)]);
var inst_36888 = cljs.core.chunked_seq_QMARK_(inst_36886);
var state_36927__$1 = state_36927;
if(inst_36888){
var statearr_36958_38180 = state_36927__$1;
(statearr_36958_38180[(1)] = (36));

} else {
var statearr_36959_38181 = state_36927__$1;
(statearr_36959_38181[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (13))){
var inst_36816 = (state_36927[(26)]);
var inst_36819 = cljs.core.async.close_BANG_(inst_36816);
var state_36927__$1 = state_36927;
var statearr_36960_38182 = state_36927__$1;
(statearr_36960_38182[(2)] = inst_36819);

(statearr_36960_38182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (22))){
var inst_36839 = (state_36927[(8)]);
var inst_36842 = cljs.core.async.close_BANG_(inst_36839);
var state_36927__$1 = state_36927;
var statearr_36961_38183 = state_36927__$1;
(statearr_36961_38183[(2)] = inst_36842);

(statearr_36961_38183[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (36))){
var inst_36886 = (state_36927[(25)]);
var inst_36890 = cljs.core.chunk_first(inst_36886);
var inst_36891 = cljs.core.chunk_rest(inst_36886);
var inst_36892 = cljs.core.count(inst_36890);
var inst_36867 = inst_36891;
var inst_36868 = inst_36890;
var inst_36869 = inst_36892;
var inst_36870 = (0);
var state_36927__$1 = (function (){var statearr_36962 = state_36927;
(statearr_36962[(20)] = inst_36869);

(statearr_36962[(21)] = inst_36867);

(statearr_36962[(11)] = inst_36868);

(statearr_36962[(12)] = inst_36870);

return statearr_36962;
})();
var statearr_36963_38186 = state_36927__$1;
(statearr_36963_38186[(2)] = null);

(statearr_36963_38186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (41))){
var inst_36886 = (state_36927[(25)]);
var inst_36902 = (state_36927[(2)]);
var inst_36903 = cljs.core.next(inst_36886);
var inst_36867 = inst_36903;
var inst_36868 = null;
var inst_36869 = (0);
var inst_36870 = (0);
var state_36927__$1 = (function (){var statearr_36964 = state_36927;
(statearr_36964[(20)] = inst_36869);

(statearr_36964[(21)] = inst_36867);

(statearr_36964[(27)] = inst_36902);

(statearr_36964[(11)] = inst_36868);

(statearr_36964[(12)] = inst_36870);

return statearr_36964;
})();
var statearr_36965_38191 = state_36927__$1;
(statearr_36965_38191[(2)] = null);

(statearr_36965_38191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (43))){
var state_36927__$1 = state_36927;
var statearr_36966_38193 = state_36927__$1;
(statearr_36966_38193[(2)] = null);

(statearr_36966_38193[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (29))){
var inst_36911 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
var statearr_36967_38195 = state_36927__$1;
(statearr_36967_38195[(2)] = inst_36911);

(statearr_36967_38195[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (44))){
var inst_36920 = (state_36927[(2)]);
var state_36927__$1 = (function (){var statearr_36968 = state_36927;
(statearr_36968[(28)] = inst_36920);

return statearr_36968;
})();
var statearr_36969_38197 = state_36927__$1;
(statearr_36969_38197[(2)] = null);

(statearr_36969_38197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (6))){
var inst_36859 = (state_36927[(29)]);
var inst_36858 = cljs.core.deref(cs);
var inst_36859__$1 = cljs.core.keys(inst_36858);
var inst_36860 = cljs.core.count(inst_36859__$1);
var inst_36861 = cljs.core.reset_BANG_(dctr,inst_36860);
var inst_36866 = cljs.core.seq(inst_36859__$1);
var inst_36867 = inst_36866;
var inst_36868 = null;
var inst_36869 = (0);
var inst_36870 = (0);
var state_36927__$1 = (function (){var statearr_36970 = state_36927;
(statearr_36970[(20)] = inst_36869);

(statearr_36970[(21)] = inst_36867);

(statearr_36970[(30)] = inst_36861);

(statearr_36970[(29)] = inst_36859__$1);

(statearr_36970[(11)] = inst_36868);

(statearr_36970[(12)] = inst_36870);

return statearr_36970;
})();
var statearr_36971_38198 = state_36927__$1;
(statearr_36971_38198[(2)] = null);

(statearr_36971_38198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (28))){
var inst_36867 = (state_36927[(21)]);
var inst_36886 = (state_36927[(25)]);
var inst_36886__$1 = cljs.core.seq(inst_36867);
var state_36927__$1 = (function (){var statearr_36972 = state_36927;
(statearr_36972[(25)] = inst_36886__$1);

return statearr_36972;
})();
if(inst_36886__$1){
var statearr_36973_38199 = state_36927__$1;
(statearr_36973_38199[(1)] = (33));

} else {
var statearr_36974_38200 = state_36927__$1;
(statearr_36974_38200[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (25))){
var inst_36869 = (state_36927[(20)]);
var inst_36870 = (state_36927[(12)]);
var inst_36872 = (inst_36870 < inst_36869);
var inst_36873 = inst_36872;
var state_36927__$1 = state_36927;
if(cljs.core.truth_(inst_36873)){
var statearr_36975_38205 = state_36927__$1;
(statearr_36975_38205[(1)] = (27));

} else {
var statearr_36976_38206 = state_36927__$1;
(statearr_36976_38206[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (34))){
var state_36927__$1 = state_36927;
var statearr_36977_38207 = state_36927__$1;
(statearr_36977_38207[(2)] = null);

(statearr_36977_38207[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (17))){
var state_36927__$1 = state_36927;
var statearr_36978_38208 = state_36927__$1;
(statearr_36978_38208[(2)] = null);

(statearr_36978_38208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (3))){
var inst_36925 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36927__$1,inst_36925);
} else {
if((state_val_36928 === (12))){
var inst_36854 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
var statearr_36979_38213 = state_36927__$1;
(statearr_36979_38213[(2)] = inst_36854);

(statearr_36979_38213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (2))){
var state_36927__$1 = state_36927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36927__$1,(4),ch);
} else {
if((state_val_36928 === (23))){
var state_36927__$1 = state_36927;
var statearr_36980_38214 = state_36927__$1;
(statearr_36980_38214[(2)] = null);

(statearr_36980_38214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (35))){
var inst_36909 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
var statearr_36981_38218 = state_36927__$1;
(statearr_36981_38218[(2)] = inst_36909);

(statearr_36981_38218[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (19))){
var inst_36826 = (state_36927[(7)]);
var inst_36830 = cljs.core.chunk_first(inst_36826);
var inst_36831 = cljs.core.chunk_rest(inst_36826);
var inst_36832 = cljs.core.count(inst_36830);
var inst_36804 = inst_36831;
var inst_36805 = inst_36830;
var inst_36806 = inst_36832;
var inst_36807 = (0);
var state_36927__$1 = (function (){var statearr_36982 = state_36927;
(statearr_36982[(13)] = inst_36805);

(statearr_36982[(14)] = inst_36804);

(statearr_36982[(15)] = inst_36807);

(statearr_36982[(16)] = inst_36806);

return statearr_36982;
})();
var statearr_36983_38229 = state_36927__$1;
(statearr_36983_38229[(2)] = null);

(statearr_36983_38229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (11))){
var inst_36804 = (state_36927[(14)]);
var inst_36826 = (state_36927[(7)]);
var inst_36826__$1 = cljs.core.seq(inst_36804);
var state_36927__$1 = (function (){var statearr_36984 = state_36927;
(statearr_36984[(7)] = inst_36826__$1);

return statearr_36984;
})();
if(inst_36826__$1){
var statearr_36985_38230 = state_36927__$1;
(statearr_36985_38230[(1)] = (16));

} else {
var statearr_36986_38231 = state_36927__$1;
(statearr_36986_38231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (9))){
var inst_36856 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
var statearr_36987_38232 = state_36927__$1;
(statearr_36987_38232[(2)] = inst_36856);

(statearr_36987_38232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (5))){
var inst_36802 = cljs.core.deref(cs);
var inst_36803 = cljs.core.seq(inst_36802);
var inst_36804 = inst_36803;
var inst_36805 = null;
var inst_36806 = (0);
var inst_36807 = (0);
var state_36927__$1 = (function (){var statearr_36988 = state_36927;
(statearr_36988[(13)] = inst_36805);

(statearr_36988[(14)] = inst_36804);

(statearr_36988[(15)] = inst_36807);

(statearr_36988[(16)] = inst_36806);

return statearr_36988;
})();
var statearr_36989_38233 = state_36927__$1;
(statearr_36989_38233[(2)] = null);

(statearr_36989_38233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (14))){
var state_36927__$1 = state_36927;
var statearr_36990_38234 = state_36927__$1;
(statearr_36990_38234[(2)] = null);

(statearr_36990_38234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (45))){
var inst_36917 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
var statearr_36991_38235 = state_36927__$1;
(statearr_36991_38235[(2)] = inst_36917);

(statearr_36991_38235[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (26))){
var inst_36859 = (state_36927[(29)]);
var inst_36913 = (state_36927[(2)]);
var inst_36914 = cljs.core.seq(inst_36859);
var state_36927__$1 = (function (){var statearr_36992 = state_36927;
(statearr_36992[(31)] = inst_36913);

return statearr_36992;
})();
if(inst_36914){
var statearr_36993_38242 = state_36927__$1;
(statearr_36993_38242[(1)] = (42));

} else {
var statearr_36994_38243 = state_36927__$1;
(statearr_36994_38243[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (16))){
var inst_36826 = (state_36927[(7)]);
var inst_36828 = cljs.core.chunked_seq_QMARK_(inst_36826);
var state_36927__$1 = state_36927;
if(inst_36828){
var statearr_36995_38244 = state_36927__$1;
(statearr_36995_38244[(1)] = (19));

} else {
var statearr_36996_38245 = state_36927__$1;
(statearr_36996_38245[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (38))){
var inst_36906 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
var statearr_36997_38246 = state_36927__$1;
(statearr_36997_38246[(2)] = inst_36906);

(statearr_36997_38246[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (30))){
var state_36927__$1 = state_36927;
var statearr_36998_38247 = state_36927__$1;
(statearr_36998_38247[(2)] = null);

(statearr_36998_38247[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (10))){
var inst_36805 = (state_36927[(13)]);
var inst_36807 = (state_36927[(15)]);
var inst_36815 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36805,inst_36807);
var inst_36816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36815,(0),null);
var inst_36817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36815,(1),null);
var state_36927__$1 = (function (){var statearr_36999 = state_36927;
(statearr_36999[(26)] = inst_36816);

return statearr_36999;
})();
if(cljs.core.truth_(inst_36817)){
var statearr_37000_38248 = state_36927__$1;
(statearr_37000_38248[(1)] = (13));

} else {
var statearr_37001_38249 = state_36927__$1;
(statearr_37001_38249[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (18))){
var inst_36852 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
var statearr_37002_38250 = state_36927__$1;
(statearr_37002_38250[(2)] = inst_36852);

(statearr_37002_38250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (42))){
var state_36927__$1 = state_36927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36927__$1,(45),dchan);
} else {
if((state_val_36928 === (37))){
var inst_36895 = (state_36927[(23)]);
var inst_36886 = (state_36927[(25)]);
var inst_36795 = (state_36927[(10)]);
var inst_36895__$1 = cljs.core.first(inst_36886);
var inst_36896 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36895__$1,inst_36795,done);
var state_36927__$1 = (function (){var statearr_37003 = state_36927;
(statearr_37003[(23)] = inst_36895__$1);

return statearr_37003;
})();
if(cljs.core.truth_(inst_36896)){
var statearr_37004_38257 = state_36927__$1;
(statearr_37004_38257[(1)] = (39));

} else {
var statearr_37005_38258 = state_36927__$1;
(statearr_37005_38258[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (8))){
var inst_36807 = (state_36927[(15)]);
var inst_36806 = (state_36927[(16)]);
var inst_36809 = (inst_36807 < inst_36806);
var inst_36810 = inst_36809;
var state_36927__$1 = state_36927;
if(cljs.core.truth_(inst_36810)){
var statearr_37006_38259 = state_36927__$1;
(statearr_37006_38259[(1)] = (10));

} else {
var statearr_37007_38260 = state_36927__$1;
(statearr_37007_38260[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__36232__auto__ = null;
var cljs$core$async$mult_$_state_machine__36232__auto____0 = (function (){
var statearr_37008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37008[(0)] = cljs$core$async$mult_$_state_machine__36232__auto__);

(statearr_37008[(1)] = (1));

return statearr_37008;
});
var cljs$core$async$mult_$_state_machine__36232__auto____1 = (function (state_36927){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_36927);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e37009){if((e37009 instanceof Object)){
var ex__36235__auto__ = e37009;
var statearr_37010_38261 = state_36927;
(statearr_37010_38261[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38262 = state_36927;
state_36927 = G__38262;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36232__auto__ = function(state_36927){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36232__auto____1.call(this,state_36927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36232__auto____0;
cljs$core$async$mult_$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36232__auto____1;
return cljs$core$async$mult_$_state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_37011 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_37011[(6)] = c__36322__auto___38149);

return statearr_37011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37013 = arguments.length;
switch (G__37013) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38270 = arguments.length;
var i__4790__auto___38271 = (0);
while(true){
if((i__4790__auto___38271 < len__4789__auto___38270)){
args__4795__auto__.push((arguments[i__4790__auto___38271]));

var G__38272 = (i__4790__auto___38271 + (1));
i__4790__auto___38271 = G__38272;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37018){
var map__37019 = p__37018;
var map__37019__$1 = (((((!((map__37019 == null))))?(((((map__37019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37019):map__37019);
var opts = map__37019__$1;
var statearr_37021_38273 = state;
(statearr_37021_38273[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37022_38274 = state;
(statearr_37022_38274[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37023_38276 = state;
(statearr_37023_38276[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37014){
var G__37015 = cljs.core.first(seq37014);
var seq37014__$1 = cljs.core.next(seq37014);
var G__37016 = cljs.core.first(seq37014__$1);
var seq37014__$2 = cljs.core.next(seq37014__$1);
var G__37017 = cljs.core.first(seq37014__$2);
var seq37014__$3 = cljs.core.next(seq37014__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37015,G__37016,G__37017,seq37014__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37024 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37025){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37025 = meta37025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37026,meta37025__$1){
var self__ = this;
var _37026__$1 = this;
return (new cljs.core.async.t_cljs$core$async37024(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37025__$1));
}));

(cljs.core.async.t_cljs$core$async37024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37026){
var self__ = this;
var _37026__$1 = this;
return self__.meta37025;
}));

(cljs.core.async.t_cljs$core$async37024.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37024.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37024.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37024.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37024.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37024.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37024.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37025","meta37025",-101892496,null)], null);
}));

(cljs.core.async.t_cljs$core$async37024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37024");

(cljs.core.async.t_cljs$core$async37024.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37024.
 */
cljs.core.async.__GT_t_cljs$core$async37024 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37024(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37025){
return (new cljs.core.async.t_cljs$core$async37024(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37025));
});

}

return (new cljs.core.async.t_cljs$core$async37024(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36322__auto___38288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_37128){
var state_val_37129 = (state_37128[(1)]);
if((state_val_37129 === (7))){
var inst_37043 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37130_38289 = state_37128__$1;
(statearr_37130_38289[(2)] = inst_37043);

(statearr_37130_38289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (20))){
var inst_37055 = (state_37128[(7)]);
var state_37128__$1 = state_37128;
var statearr_37131_38290 = state_37128__$1;
(statearr_37131_38290[(2)] = inst_37055);

(statearr_37131_38290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (27))){
var state_37128__$1 = state_37128;
var statearr_37132_38291 = state_37128__$1;
(statearr_37132_38291[(2)] = null);

(statearr_37132_38291[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (1))){
var inst_37030 = (state_37128[(8)]);
var inst_37030__$1 = calc_state();
var inst_37032 = (inst_37030__$1 == null);
var inst_37033 = cljs.core.not(inst_37032);
var state_37128__$1 = (function (){var statearr_37133 = state_37128;
(statearr_37133[(8)] = inst_37030__$1);

return statearr_37133;
})();
if(inst_37033){
var statearr_37134_38292 = state_37128__$1;
(statearr_37134_38292[(1)] = (2));

} else {
var statearr_37135_38293 = state_37128__$1;
(statearr_37135_38293[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (24))){
var inst_37088 = (state_37128[(9)]);
var inst_37102 = (state_37128[(10)]);
var inst_37079 = (state_37128[(11)]);
var inst_37102__$1 = (inst_37079.cljs$core$IFn$_invoke$arity$1 ? inst_37079.cljs$core$IFn$_invoke$arity$1(inst_37088) : inst_37079.call(null,inst_37088));
var state_37128__$1 = (function (){var statearr_37136 = state_37128;
(statearr_37136[(10)] = inst_37102__$1);

return statearr_37136;
})();
if(cljs.core.truth_(inst_37102__$1)){
var statearr_37137_38296 = state_37128__$1;
(statearr_37137_38296[(1)] = (29));

} else {
var statearr_37138_38297 = state_37128__$1;
(statearr_37138_38297[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (4))){
var inst_37046 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
if(cljs.core.truth_(inst_37046)){
var statearr_37139_38298 = state_37128__$1;
(statearr_37139_38298[(1)] = (8));

} else {
var statearr_37140_38299 = state_37128__$1;
(statearr_37140_38299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (15))){
var inst_37073 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
if(cljs.core.truth_(inst_37073)){
var statearr_37141_38300 = state_37128__$1;
(statearr_37141_38300[(1)] = (19));

} else {
var statearr_37142_38301 = state_37128__$1;
(statearr_37142_38301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (21))){
var inst_37078 = (state_37128[(12)]);
var inst_37078__$1 = (state_37128[(2)]);
var inst_37079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37078__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37078__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37078__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37128__$1 = (function (){var statearr_37143 = state_37128;
(statearr_37143[(12)] = inst_37078__$1);

(statearr_37143[(13)] = inst_37080);

(statearr_37143[(11)] = inst_37079);

return statearr_37143;
})();
return cljs.core.async.ioc_alts_BANG_(state_37128__$1,(22),inst_37081);
} else {
if((state_val_37129 === (31))){
var inst_37110 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
if(cljs.core.truth_(inst_37110)){
var statearr_37144_38303 = state_37128__$1;
(statearr_37144_38303[(1)] = (32));

} else {
var statearr_37145_38304 = state_37128__$1;
(statearr_37145_38304[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (32))){
var inst_37087 = (state_37128[(14)]);
var state_37128__$1 = state_37128;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37128__$1,(35),out,inst_37087);
} else {
if((state_val_37129 === (33))){
var inst_37078 = (state_37128[(12)]);
var inst_37055 = inst_37078;
var state_37128__$1 = (function (){var statearr_37146 = state_37128;
(statearr_37146[(7)] = inst_37055);

return statearr_37146;
})();
var statearr_37147_38309 = state_37128__$1;
(statearr_37147_38309[(2)] = null);

(statearr_37147_38309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (13))){
var inst_37055 = (state_37128[(7)]);
var inst_37062 = inst_37055.cljs$lang$protocol_mask$partition0$;
var inst_37063 = (inst_37062 & (64));
var inst_37064 = inst_37055.cljs$core$ISeq$;
var inst_37065 = (cljs.core.PROTOCOL_SENTINEL === inst_37064);
var inst_37066 = ((inst_37063) || (inst_37065));
var state_37128__$1 = state_37128;
if(cljs.core.truth_(inst_37066)){
var statearr_37148_38310 = state_37128__$1;
(statearr_37148_38310[(1)] = (16));

} else {
var statearr_37149_38311 = state_37128__$1;
(statearr_37149_38311[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (22))){
var inst_37087 = (state_37128[(14)]);
var inst_37088 = (state_37128[(9)]);
var inst_37086 = (state_37128[(2)]);
var inst_37087__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37086,(0),null);
var inst_37088__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37086,(1),null);
var inst_37089 = (inst_37087__$1 == null);
var inst_37090 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37088__$1,change);
var inst_37091 = ((inst_37089) || (inst_37090));
var state_37128__$1 = (function (){var statearr_37150 = state_37128;
(statearr_37150[(14)] = inst_37087__$1);

(statearr_37150[(9)] = inst_37088__$1);

return statearr_37150;
})();
if(cljs.core.truth_(inst_37091)){
var statearr_37151_38312 = state_37128__$1;
(statearr_37151_38312[(1)] = (23));

} else {
var statearr_37152_38313 = state_37128__$1;
(statearr_37152_38313[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (36))){
var inst_37078 = (state_37128[(12)]);
var inst_37055 = inst_37078;
var state_37128__$1 = (function (){var statearr_37153 = state_37128;
(statearr_37153[(7)] = inst_37055);

return statearr_37153;
})();
var statearr_37154_38314 = state_37128__$1;
(statearr_37154_38314[(2)] = null);

(statearr_37154_38314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (29))){
var inst_37102 = (state_37128[(10)]);
var state_37128__$1 = state_37128;
var statearr_37155_38315 = state_37128__$1;
(statearr_37155_38315[(2)] = inst_37102);

(statearr_37155_38315[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (6))){
var state_37128__$1 = state_37128;
var statearr_37156_38316 = state_37128__$1;
(statearr_37156_38316[(2)] = false);

(statearr_37156_38316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (28))){
var inst_37098 = (state_37128[(2)]);
var inst_37099 = calc_state();
var inst_37055 = inst_37099;
var state_37128__$1 = (function (){var statearr_37157 = state_37128;
(statearr_37157[(15)] = inst_37098);

(statearr_37157[(7)] = inst_37055);

return statearr_37157;
})();
var statearr_37158_38324 = state_37128__$1;
(statearr_37158_38324[(2)] = null);

(statearr_37158_38324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (25))){
var inst_37124 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37159_38325 = state_37128__$1;
(statearr_37159_38325[(2)] = inst_37124);

(statearr_37159_38325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (34))){
var inst_37122 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37160_38329 = state_37128__$1;
(statearr_37160_38329[(2)] = inst_37122);

(statearr_37160_38329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (17))){
var state_37128__$1 = state_37128;
var statearr_37161_38330 = state_37128__$1;
(statearr_37161_38330[(2)] = false);

(statearr_37161_38330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (3))){
var state_37128__$1 = state_37128;
var statearr_37162_38334 = state_37128__$1;
(statearr_37162_38334[(2)] = false);

(statearr_37162_38334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (12))){
var inst_37126 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37128__$1,inst_37126);
} else {
if((state_val_37129 === (2))){
var inst_37030 = (state_37128[(8)]);
var inst_37035 = inst_37030.cljs$lang$protocol_mask$partition0$;
var inst_37036 = (inst_37035 & (64));
var inst_37037 = inst_37030.cljs$core$ISeq$;
var inst_37038 = (cljs.core.PROTOCOL_SENTINEL === inst_37037);
var inst_37039 = ((inst_37036) || (inst_37038));
var state_37128__$1 = state_37128;
if(cljs.core.truth_(inst_37039)){
var statearr_37163_38338 = state_37128__$1;
(statearr_37163_38338[(1)] = (5));

} else {
var statearr_37164_38339 = state_37128__$1;
(statearr_37164_38339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (23))){
var inst_37087 = (state_37128[(14)]);
var inst_37093 = (inst_37087 == null);
var state_37128__$1 = state_37128;
if(cljs.core.truth_(inst_37093)){
var statearr_37165_38344 = state_37128__$1;
(statearr_37165_38344[(1)] = (26));

} else {
var statearr_37166_38345 = state_37128__$1;
(statearr_37166_38345[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (35))){
var inst_37113 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
if(cljs.core.truth_(inst_37113)){
var statearr_37167_38346 = state_37128__$1;
(statearr_37167_38346[(1)] = (36));

} else {
var statearr_37168_38347 = state_37128__$1;
(statearr_37168_38347[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (19))){
var inst_37055 = (state_37128[(7)]);
var inst_37075 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37055);
var state_37128__$1 = state_37128;
var statearr_37169_38348 = state_37128__$1;
(statearr_37169_38348[(2)] = inst_37075);

(statearr_37169_38348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (11))){
var inst_37055 = (state_37128[(7)]);
var inst_37059 = (inst_37055 == null);
var inst_37060 = cljs.core.not(inst_37059);
var state_37128__$1 = state_37128;
if(inst_37060){
var statearr_37170_38349 = state_37128__$1;
(statearr_37170_38349[(1)] = (13));

} else {
var statearr_37171_38350 = state_37128__$1;
(statearr_37171_38350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (9))){
var inst_37030 = (state_37128[(8)]);
var state_37128__$1 = state_37128;
var statearr_37172_38351 = state_37128__$1;
(statearr_37172_38351[(2)] = inst_37030);

(statearr_37172_38351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (5))){
var state_37128__$1 = state_37128;
var statearr_37173_38352 = state_37128__$1;
(statearr_37173_38352[(2)] = true);

(statearr_37173_38352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (14))){
var state_37128__$1 = state_37128;
var statearr_37174_38355 = state_37128__$1;
(statearr_37174_38355[(2)] = false);

(statearr_37174_38355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (26))){
var inst_37088 = (state_37128[(9)]);
var inst_37095 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37088);
var state_37128__$1 = state_37128;
var statearr_37175_38357 = state_37128__$1;
(statearr_37175_38357[(2)] = inst_37095);

(statearr_37175_38357[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (16))){
var state_37128__$1 = state_37128;
var statearr_37176_38359 = state_37128__$1;
(statearr_37176_38359[(2)] = true);

(statearr_37176_38359[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (38))){
var inst_37118 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37177_38360 = state_37128__$1;
(statearr_37177_38360[(2)] = inst_37118);

(statearr_37177_38360[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (30))){
var inst_37080 = (state_37128[(13)]);
var inst_37088 = (state_37128[(9)]);
var inst_37079 = (state_37128[(11)]);
var inst_37105 = cljs.core.empty_QMARK_(inst_37079);
var inst_37106 = (inst_37080.cljs$core$IFn$_invoke$arity$1 ? inst_37080.cljs$core$IFn$_invoke$arity$1(inst_37088) : inst_37080.call(null,inst_37088));
var inst_37107 = cljs.core.not(inst_37106);
var inst_37108 = ((inst_37105) && (inst_37107));
var state_37128__$1 = state_37128;
var statearr_37178_38366 = state_37128__$1;
(statearr_37178_38366[(2)] = inst_37108);

(statearr_37178_38366[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (10))){
var inst_37030 = (state_37128[(8)]);
var inst_37051 = (state_37128[(2)]);
var inst_37052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37051,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37051,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37051,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37055 = inst_37030;
var state_37128__$1 = (function (){var statearr_37179 = state_37128;
(statearr_37179[(16)] = inst_37052);

(statearr_37179[(17)] = inst_37053);

(statearr_37179[(18)] = inst_37054);

(statearr_37179[(7)] = inst_37055);

return statearr_37179;
})();
var statearr_37180_38368 = state_37128__$1;
(statearr_37180_38368[(2)] = null);

(statearr_37180_38368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (18))){
var inst_37070 = (state_37128[(2)]);
var state_37128__$1 = state_37128;
var statearr_37181_38371 = state_37128__$1;
(statearr_37181_38371[(2)] = inst_37070);

(statearr_37181_38371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (37))){
var state_37128__$1 = state_37128;
var statearr_37182_38372 = state_37128__$1;
(statearr_37182_38372[(2)] = null);

(statearr_37182_38372[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37129 === (8))){
var inst_37030 = (state_37128[(8)]);
var inst_37048 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37030);
var state_37128__$1 = state_37128;
var statearr_37183_38373 = state_37128__$1;
(statearr_37183_38373[(2)] = inst_37048);

(statearr_37183_38373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__36232__auto__ = null;
var cljs$core$async$mix_$_state_machine__36232__auto____0 = (function (){
var statearr_37184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37184[(0)] = cljs$core$async$mix_$_state_machine__36232__auto__);

(statearr_37184[(1)] = (1));

return statearr_37184;
});
var cljs$core$async$mix_$_state_machine__36232__auto____1 = (function (state_37128){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_37128);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e37185){if((e37185 instanceof Object)){
var ex__36235__auto__ = e37185;
var statearr_37186_38374 = state_37128;
(statearr_37186_38374[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37185;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38375 = state_37128;
state_37128 = G__38375;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36232__auto__ = function(state_37128){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36232__auto____1.call(this,state_37128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36232__auto____0;
cljs$core$async$mix_$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36232__auto____1;
return cljs$core$async$mix_$_state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_37187 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_37187[(6)] = c__36322__auto___38288);

return statearr_37187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37189 = arguments.length;
switch (G__37189) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37192 = arguments.length;
switch (G__37192) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37190_SHARP_){
if(cljs.core.truth_((p1__37190_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37190_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37190_SHARP_.call(null,topic)))){
return p1__37190_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37190_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37193 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37194){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37194 = meta37194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37195,meta37194__$1){
var self__ = this;
var _37195__$1 = this;
return (new cljs.core.async.t_cljs$core$async37193(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37194__$1));
}));

(cljs.core.async.t_cljs$core$async37193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37195){
var self__ = this;
var _37195__$1 = this;
return self__.meta37194;
}));

(cljs.core.async.t_cljs$core$async37193.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37193.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37193.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37193.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async37193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37194","meta37194",1661209050,null)], null);
}));

(cljs.core.async.t_cljs$core$async37193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37193");

(cljs.core.async.t_cljs$core$async37193.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37193.
 */
cljs.core.async.__GT_t_cljs$core$async37193 = (function cljs$core$async$__GT_t_cljs$core$async37193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37194){
return (new cljs.core.async.t_cljs$core$async37193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37194));
});

}

return (new cljs.core.async.t_cljs$core$async37193(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36322__auto___38392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_37267){
var state_val_37268 = (state_37267[(1)]);
if((state_val_37268 === (7))){
var inst_37263 = (state_37267[(2)]);
var state_37267__$1 = state_37267;
var statearr_37269_38393 = state_37267__$1;
(statearr_37269_38393[(2)] = inst_37263);

(statearr_37269_38393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (20))){
var state_37267__$1 = state_37267;
var statearr_37270_38394 = state_37267__$1;
(statearr_37270_38394[(2)] = null);

(statearr_37270_38394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (1))){
var state_37267__$1 = state_37267;
var statearr_37271_38395 = state_37267__$1;
(statearr_37271_38395[(2)] = null);

(statearr_37271_38395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (24))){
var inst_37246 = (state_37267[(7)]);
var inst_37255 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37246);
var state_37267__$1 = state_37267;
var statearr_37272_38396 = state_37267__$1;
(statearr_37272_38396[(2)] = inst_37255);

(statearr_37272_38396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (4))){
var inst_37198 = (state_37267[(8)]);
var inst_37198__$1 = (state_37267[(2)]);
var inst_37199 = (inst_37198__$1 == null);
var state_37267__$1 = (function (){var statearr_37273 = state_37267;
(statearr_37273[(8)] = inst_37198__$1);

return statearr_37273;
})();
if(cljs.core.truth_(inst_37199)){
var statearr_37274_38398 = state_37267__$1;
(statearr_37274_38398[(1)] = (5));

} else {
var statearr_37275_38399 = state_37267__$1;
(statearr_37275_38399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (15))){
var inst_37240 = (state_37267[(2)]);
var state_37267__$1 = state_37267;
var statearr_37276_38400 = state_37267__$1;
(statearr_37276_38400[(2)] = inst_37240);

(statearr_37276_38400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (21))){
var inst_37260 = (state_37267[(2)]);
var state_37267__$1 = (function (){var statearr_37277 = state_37267;
(statearr_37277[(9)] = inst_37260);

return statearr_37277;
})();
var statearr_37278_38401 = state_37267__$1;
(statearr_37278_38401[(2)] = null);

(statearr_37278_38401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (13))){
var inst_37222 = (state_37267[(10)]);
var inst_37224 = cljs.core.chunked_seq_QMARK_(inst_37222);
var state_37267__$1 = state_37267;
if(inst_37224){
var statearr_37279_38402 = state_37267__$1;
(statearr_37279_38402[(1)] = (16));

} else {
var statearr_37280_38403 = state_37267__$1;
(statearr_37280_38403[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (22))){
var inst_37252 = (state_37267[(2)]);
var state_37267__$1 = state_37267;
if(cljs.core.truth_(inst_37252)){
var statearr_37281_38404 = state_37267__$1;
(statearr_37281_38404[(1)] = (23));

} else {
var statearr_37282_38405 = state_37267__$1;
(statearr_37282_38405[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (6))){
var inst_37198 = (state_37267[(8)]);
var inst_37246 = (state_37267[(7)]);
var inst_37248 = (state_37267[(11)]);
var inst_37246__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37198) : topic_fn.call(null,inst_37198));
var inst_37247 = cljs.core.deref(mults);
var inst_37248__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37247,inst_37246__$1);
var state_37267__$1 = (function (){var statearr_37283 = state_37267;
(statearr_37283[(7)] = inst_37246__$1);

(statearr_37283[(11)] = inst_37248__$1);

return statearr_37283;
})();
if(cljs.core.truth_(inst_37248__$1)){
var statearr_37284_38411 = state_37267__$1;
(statearr_37284_38411[(1)] = (19));

} else {
var statearr_37285_38412 = state_37267__$1;
(statearr_37285_38412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (25))){
var inst_37257 = (state_37267[(2)]);
var state_37267__$1 = state_37267;
var statearr_37286_38415 = state_37267__$1;
(statearr_37286_38415[(2)] = inst_37257);

(statearr_37286_38415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (17))){
var inst_37222 = (state_37267[(10)]);
var inst_37231 = cljs.core.first(inst_37222);
var inst_37232 = cljs.core.async.muxch_STAR_(inst_37231);
var inst_37233 = cljs.core.async.close_BANG_(inst_37232);
var inst_37234 = cljs.core.next(inst_37222);
var inst_37208 = inst_37234;
var inst_37209 = null;
var inst_37210 = (0);
var inst_37211 = (0);
var state_37267__$1 = (function (){var statearr_37287 = state_37267;
(statearr_37287[(12)] = inst_37211);

(statearr_37287[(13)] = inst_37209);

(statearr_37287[(14)] = inst_37210);

(statearr_37287[(15)] = inst_37208);

(statearr_37287[(16)] = inst_37233);

return statearr_37287;
})();
var statearr_37288_38416 = state_37267__$1;
(statearr_37288_38416[(2)] = null);

(statearr_37288_38416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (3))){
var inst_37265 = (state_37267[(2)]);
var state_37267__$1 = state_37267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37267__$1,inst_37265);
} else {
if((state_val_37268 === (12))){
var inst_37242 = (state_37267[(2)]);
var state_37267__$1 = state_37267;
var statearr_37289_38417 = state_37267__$1;
(statearr_37289_38417[(2)] = inst_37242);

(statearr_37289_38417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (2))){
var state_37267__$1 = state_37267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37267__$1,(4),ch);
} else {
if((state_val_37268 === (23))){
var state_37267__$1 = state_37267;
var statearr_37290_38418 = state_37267__$1;
(statearr_37290_38418[(2)] = null);

(statearr_37290_38418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (19))){
var inst_37198 = (state_37267[(8)]);
var inst_37248 = (state_37267[(11)]);
var inst_37250 = cljs.core.async.muxch_STAR_(inst_37248);
var state_37267__$1 = state_37267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37267__$1,(22),inst_37250,inst_37198);
} else {
if((state_val_37268 === (11))){
var inst_37222 = (state_37267[(10)]);
var inst_37208 = (state_37267[(15)]);
var inst_37222__$1 = cljs.core.seq(inst_37208);
var state_37267__$1 = (function (){var statearr_37291 = state_37267;
(statearr_37291[(10)] = inst_37222__$1);

return statearr_37291;
})();
if(inst_37222__$1){
var statearr_37292_38420 = state_37267__$1;
(statearr_37292_38420[(1)] = (13));

} else {
var statearr_37293_38421 = state_37267__$1;
(statearr_37293_38421[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (9))){
var inst_37244 = (state_37267[(2)]);
var state_37267__$1 = state_37267;
var statearr_37294_38422 = state_37267__$1;
(statearr_37294_38422[(2)] = inst_37244);

(statearr_37294_38422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (5))){
var inst_37205 = cljs.core.deref(mults);
var inst_37206 = cljs.core.vals(inst_37205);
var inst_37207 = cljs.core.seq(inst_37206);
var inst_37208 = inst_37207;
var inst_37209 = null;
var inst_37210 = (0);
var inst_37211 = (0);
var state_37267__$1 = (function (){var statearr_37295 = state_37267;
(statearr_37295[(12)] = inst_37211);

(statearr_37295[(13)] = inst_37209);

(statearr_37295[(14)] = inst_37210);

(statearr_37295[(15)] = inst_37208);

return statearr_37295;
})();
var statearr_37296_38423 = state_37267__$1;
(statearr_37296_38423[(2)] = null);

(statearr_37296_38423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (14))){
var state_37267__$1 = state_37267;
var statearr_37300_38425 = state_37267__$1;
(statearr_37300_38425[(2)] = null);

(statearr_37300_38425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (16))){
var inst_37222 = (state_37267[(10)]);
var inst_37226 = cljs.core.chunk_first(inst_37222);
var inst_37227 = cljs.core.chunk_rest(inst_37222);
var inst_37228 = cljs.core.count(inst_37226);
var inst_37208 = inst_37227;
var inst_37209 = inst_37226;
var inst_37210 = inst_37228;
var inst_37211 = (0);
var state_37267__$1 = (function (){var statearr_37301 = state_37267;
(statearr_37301[(12)] = inst_37211);

(statearr_37301[(13)] = inst_37209);

(statearr_37301[(14)] = inst_37210);

(statearr_37301[(15)] = inst_37208);

return statearr_37301;
})();
var statearr_37302_38427 = state_37267__$1;
(statearr_37302_38427[(2)] = null);

(statearr_37302_38427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (10))){
var inst_37211 = (state_37267[(12)]);
var inst_37209 = (state_37267[(13)]);
var inst_37210 = (state_37267[(14)]);
var inst_37208 = (state_37267[(15)]);
var inst_37216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37209,inst_37211);
var inst_37217 = cljs.core.async.muxch_STAR_(inst_37216);
var inst_37218 = cljs.core.async.close_BANG_(inst_37217);
var inst_37219 = (inst_37211 + (1));
var tmp37297 = inst_37209;
var tmp37298 = inst_37210;
var tmp37299 = inst_37208;
var inst_37208__$1 = tmp37299;
var inst_37209__$1 = tmp37297;
var inst_37210__$1 = tmp37298;
var inst_37211__$1 = inst_37219;
var state_37267__$1 = (function (){var statearr_37303 = state_37267;
(statearr_37303[(17)] = inst_37218);

(statearr_37303[(12)] = inst_37211__$1);

(statearr_37303[(13)] = inst_37209__$1);

(statearr_37303[(14)] = inst_37210__$1);

(statearr_37303[(15)] = inst_37208__$1);

return statearr_37303;
})();
var statearr_37304_38433 = state_37267__$1;
(statearr_37304_38433[(2)] = null);

(statearr_37304_38433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (18))){
var inst_37237 = (state_37267[(2)]);
var state_37267__$1 = state_37267;
var statearr_37305_38434 = state_37267__$1;
(statearr_37305_38434[(2)] = inst_37237);

(statearr_37305_38434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37268 === (8))){
var inst_37211 = (state_37267[(12)]);
var inst_37210 = (state_37267[(14)]);
var inst_37213 = (inst_37211 < inst_37210);
var inst_37214 = inst_37213;
var state_37267__$1 = state_37267;
if(cljs.core.truth_(inst_37214)){
var statearr_37306_38436 = state_37267__$1;
(statearr_37306_38436[(1)] = (10));

} else {
var statearr_37307_38437 = state_37267__$1;
(statearr_37307_38437[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36232__auto__ = null;
var cljs$core$async$state_machine__36232__auto____0 = (function (){
var statearr_37308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37308[(0)] = cljs$core$async$state_machine__36232__auto__);

(statearr_37308[(1)] = (1));

return statearr_37308;
});
var cljs$core$async$state_machine__36232__auto____1 = (function (state_37267){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_37267);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e37309){if((e37309 instanceof Object)){
var ex__36235__auto__ = e37309;
var statearr_37310_38439 = state_37267;
(statearr_37310_38439[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38440 = state_37267;
state_37267 = G__38440;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$state_machine__36232__auto__ = function(state_37267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36232__auto____1.call(this,state_37267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36232__auto____0;
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36232__auto____1;
return cljs$core$async$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_37311 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_37311[(6)] = c__36322__auto___38392);

return statearr_37311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37313 = arguments.length;
switch (G__37313) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37315 = arguments.length;
switch (G__37315) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__37317 = arguments.length;
switch (G__37317) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__36322__auto___38449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_37356){
var state_val_37357 = (state_37356[(1)]);
if((state_val_37357 === (7))){
var state_37356__$1 = state_37356;
var statearr_37358_38450 = state_37356__$1;
(statearr_37358_38450[(2)] = null);

(statearr_37358_38450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (1))){
var state_37356__$1 = state_37356;
var statearr_37359_38451 = state_37356__$1;
(statearr_37359_38451[(2)] = null);

(statearr_37359_38451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (4))){
var inst_37320 = (state_37356[(7)]);
var inst_37322 = (inst_37320 < cnt);
var state_37356__$1 = state_37356;
if(cljs.core.truth_(inst_37322)){
var statearr_37360_38459 = state_37356__$1;
(statearr_37360_38459[(1)] = (6));

} else {
var statearr_37361_38460 = state_37356__$1;
(statearr_37361_38460[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (15))){
var inst_37352 = (state_37356[(2)]);
var state_37356__$1 = state_37356;
var statearr_37362_38461 = state_37356__$1;
(statearr_37362_38461[(2)] = inst_37352);

(statearr_37362_38461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (13))){
var inst_37345 = cljs.core.async.close_BANG_(out);
var state_37356__$1 = state_37356;
var statearr_37363_38462 = state_37356__$1;
(statearr_37363_38462[(2)] = inst_37345);

(statearr_37363_38462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (6))){
var state_37356__$1 = state_37356;
var statearr_37364_38463 = state_37356__$1;
(statearr_37364_38463[(2)] = null);

(statearr_37364_38463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (3))){
var inst_37354 = (state_37356[(2)]);
var state_37356__$1 = state_37356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37356__$1,inst_37354);
} else {
if((state_val_37357 === (12))){
var inst_37342 = (state_37356[(8)]);
var inst_37342__$1 = (state_37356[(2)]);
var inst_37343 = cljs.core.some(cljs.core.nil_QMARK_,inst_37342__$1);
var state_37356__$1 = (function (){var statearr_37365 = state_37356;
(statearr_37365[(8)] = inst_37342__$1);

return statearr_37365;
})();
if(cljs.core.truth_(inst_37343)){
var statearr_37366_38464 = state_37356__$1;
(statearr_37366_38464[(1)] = (13));

} else {
var statearr_37367_38465 = state_37356__$1;
(statearr_37367_38465[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (2))){
var inst_37319 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37320 = (0);
var state_37356__$1 = (function (){var statearr_37368 = state_37356;
(statearr_37368[(7)] = inst_37320);

(statearr_37368[(9)] = inst_37319);

return statearr_37368;
})();
var statearr_37369_38466 = state_37356__$1;
(statearr_37369_38466[(2)] = null);

(statearr_37369_38466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (11))){
var inst_37320 = (state_37356[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37356,(10),Object,null,(9));
var inst_37329 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37320) : chs__$1.call(null,inst_37320));
var inst_37330 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37320) : done.call(null,inst_37320));
var inst_37331 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37329,inst_37330);
var state_37356__$1 = state_37356;
var statearr_37370_38467 = state_37356__$1;
(statearr_37370_38467[(2)] = inst_37331);


cljs.core.async.impl.ioc_helpers.process_exception(state_37356__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (9))){
var inst_37320 = (state_37356[(7)]);
var inst_37333 = (state_37356[(2)]);
var inst_37334 = (inst_37320 + (1));
var inst_37320__$1 = inst_37334;
var state_37356__$1 = (function (){var statearr_37371 = state_37356;
(statearr_37371[(7)] = inst_37320__$1);

(statearr_37371[(10)] = inst_37333);

return statearr_37371;
})();
var statearr_37372_38468 = state_37356__$1;
(statearr_37372_38468[(2)] = null);

(statearr_37372_38468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (5))){
var inst_37340 = (state_37356[(2)]);
var state_37356__$1 = (function (){var statearr_37373 = state_37356;
(statearr_37373[(11)] = inst_37340);

return statearr_37373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37356__$1,(12),dchan);
} else {
if((state_val_37357 === (14))){
var inst_37342 = (state_37356[(8)]);
var inst_37347 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37342);
var state_37356__$1 = state_37356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37356__$1,(16),out,inst_37347);
} else {
if((state_val_37357 === (16))){
var inst_37349 = (state_37356[(2)]);
var state_37356__$1 = (function (){var statearr_37374 = state_37356;
(statearr_37374[(12)] = inst_37349);

return statearr_37374;
})();
var statearr_37375_38469 = state_37356__$1;
(statearr_37375_38469[(2)] = null);

(statearr_37375_38469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (10))){
var inst_37324 = (state_37356[(2)]);
var inst_37325 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37356__$1 = (function (){var statearr_37376 = state_37356;
(statearr_37376[(13)] = inst_37324);

return statearr_37376;
})();
var statearr_37377_38470 = state_37356__$1;
(statearr_37377_38470[(2)] = inst_37325);


cljs.core.async.impl.ioc_helpers.process_exception(state_37356__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (8))){
var inst_37338 = (state_37356[(2)]);
var state_37356__$1 = state_37356;
var statearr_37378_38471 = state_37356__$1;
(statearr_37378_38471[(2)] = inst_37338);

(statearr_37378_38471[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36232__auto__ = null;
var cljs$core$async$state_machine__36232__auto____0 = (function (){
var statearr_37379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37379[(0)] = cljs$core$async$state_machine__36232__auto__);

(statearr_37379[(1)] = (1));

return statearr_37379;
});
var cljs$core$async$state_machine__36232__auto____1 = (function (state_37356){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_37356);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e37380){if((e37380 instanceof Object)){
var ex__36235__auto__ = e37380;
var statearr_37381_38472 = state_37356;
(statearr_37381_38472[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38473 = state_37356;
state_37356 = G__38473;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$state_machine__36232__auto__ = function(state_37356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36232__auto____1.call(this,state_37356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36232__auto____0;
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36232__auto____1;
return cljs$core$async$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_37382 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_37382[(6)] = c__36322__auto___38449);

return statearr_37382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37385 = arguments.length;
switch (G__37385) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36322__auto___38477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_37417){
var state_val_37418 = (state_37417[(1)]);
if((state_val_37418 === (7))){
var inst_37397 = (state_37417[(7)]);
var inst_37396 = (state_37417[(8)]);
var inst_37396__$1 = (state_37417[(2)]);
var inst_37397__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37396__$1,(0),null);
var inst_37398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37396__$1,(1),null);
var inst_37399 = (inst_37397__$1 == null);
var state_37417__$1 = (function (){var statearr_37419 = state_37417;
(statearr_37419[(7)] = inst_37397__$1);

(statearr_37419[(9)] = inst_37398);

(statearr_37419[(8)] = inst_37396__$1);

return statearr_37419;
})();
if(cljs.core.truth_(inst_37399)){
var statearr_37420_38486 = state_37417__$1;
(statearr_37420_38486[(1)] = (8));

} else {
var statearr_37421_38487 = state_37417__$1;
(statearr_37421_38487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (1))){
var inst_37386 = cljs.core.vec(chs);
var inst_37387 = inst_37386;
var state_37417__$1 = (function (){var statearr_37422 = state_37417;
(statearr_37422[(10)] = inst_37387);

return statearr_37422;
})();
var statearr_37423_38488 = state_37417__$1;
(statearr_37423_38488[(2)] = null);

(statearr_37423_38488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (4))){
var inst_37387 = (state_37417[(10)]);
var state_37417__$1 = state_37417;
return cljs.core.async.ioc_alts_BANG_(state_37417__$1,(7),inst_37387);
} else {
if((state_val_37418 === (6))){
var inst_37413 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
var statearr_37424_38489 = state_37417__$1;
(statearr_37424_38489[(2)] = inst_37413);

(statearr_37424_38489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (3))){
var inst_37415 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37417__$1,inst_37415);
} else {
if((state_val_37418 === (2))){
var inst_37387 = (state_37417[(10)]);
var inst_37389 = cljs.core.count(inst_37387);
var inst_37390 = (inst_37389 > (0));
var state_37417__$1 = state_37417;
if(cljs.core.truth_(inst_37390)){
var statearr_37426_38490 = state_37417__$1;
(statearr_37426_38490[(1)] = (4));

} else {
var statearr_37427_38491 = state_37417__$1;
(statearr_37427_38491[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (11))){
var inst_37387 = (state_37417[(10)]);
var inst_37406 = (state_37417[(2)]);
var tmp37425 = inst_37387;
var inst_37387__$1 = tmp37425;
var state_37417__$1 = (function (){var statearr_37428 = state_37417;
(statearr_37428[(11)] = inst_37406);

(statearr_37428[(10)] = inst_37387__$1);

return statearr_37428;
})();
var statearr_37429_38492 = state_37417__$1;
(statearr_37429_38492[(2)] = null);

(statearr_37429_38492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (9))){
var inst_37397 = (state_37417[(7)]);
var state_37417__$1 = state_37417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37417__$1,(11),out,inst_37397);
} else {
if((state_val_37418 === (5))){
var inst_37411 = cljs.core.async.close_BANG_(out);
var state_37417__$1 = state_37417;
var statearr_37430_38493 = state_37417__$1;
(statearr_37430_38493[(2)] = inst_37411);

(statearr_37430_38493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (10))){
var inst_37409 = (state_37417[(2)]);
var state_37417__$1 = state_37417;
var statearr_37431_38494 = state_37417__$1;
(statearr_37431_38494[(2)] = inst_37409);

(statearr_37431_38494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37418 === (8))){
var inst_37397 = (state_37417[(7)]);
var inst_37387 = (state_37417[(10)]);
var inst_37398 = (state_37417[(9)]);
var inst_37396 = (state_37417[(8)]);
var inst_37401 = (function (){var cs = inst_37387;
var vec__37392 = inst_37396;
var v = inst_37397;
var c = inst_37398;
return (function (p1__37383_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37383_SHARP_);
});
})();
var inst_37402 = cljs.core.filterv(inst_37401,inst_37387);
var inst_37387__$1 = inst_37402;
var state_37417__$1 = (function (){var statearr_37432 = state_37417;
(statearr_37432[(10)] = inst_37387__$1);

return statearr_37432;
})();
var statearr_37433_38499 = state_37417__$1;
(statearr_37433_38499[(2)] = null);

(statearr_37433_38499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36232__auto__ = null;
var cljs$core$async$state_machine__36232__auto____0 = (function (){
var statearr_37434 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37434[(0)] = cljs$core$async$state_machine__36232__auto__);

(statearr_37434[(1)] = (1));

return statearr_37434;
});
var cljs$core$async$state_machine__36232__auto____1 = (function (state_37417){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_37417);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e37435){if((e37435 instanceof Object)){
var ex__36235__auto__ = e37435;
var statearr_37436_38502 = state_37417;
(statearr_37436_38502[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38503 = state_37417;
state_37417 = G__38503;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$state_machine__36232__auto__ = function(state_37417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36232__auto____1.call(this,state_37417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36232__auto____0;
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36232__auto____1;
return cljs$core$async$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_37437 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_37437[(6)] = c__36322__auto___38477);

return statearr_37437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37439 = arguments.length;
switch (G__37439) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36322__auto___38505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_37463){
var state_val_37464 = (state_37463[(1)]);
if((state_val_37464 === (7))){
var inst_37445 = (state_37463[(7)]);
var inst_37445__$1 = (state_37463[(2)]);
var inst_37446 = (inst_37445__$1 == null);
var inst_37447 = cljs.core.not(inst_37446);
var state_37463__$1 = (function (){var statearr_37465 = state_37463;
(statearr_37465[(7)] = inst_37445__$1);

return statearr_37465;
})();
if(inst_37447){
var statearr_37466_38506 = state_37463__$1;
(statearr_37466_38506[(1)] = (8));

} else {
var statearr_37467_38507 = state_37463__$1;
(statearr_37467_38507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (1))){
var inst_37440 = (0);
var state_37463__$1 = (function (){var statearr_37468 = state_37463;
(statearr_37468[(8)] = inst_37440);

return statearr_37468;
})();
var statearr_37469_38508 = state_37463__$1;
(statearr_37469_38508[(2)] = null);

(statearr_37469_38508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (4))){
var state_37463__$1 = state_37463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37463__$1,(7),ch);
} else {
if((state_val_37464 === (6))){
var inst_37458 = (state_37463[(2)]);
var state_37463__$1 = state_37463;
var statearr_37470_38509 = state_37463__$1;
(statearr_37470_38509[(2)] = inst_37458);

(statearr_37470_38509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (3))){
var inst_37460 = (state_37463[(2)]);
var inst_37461 = cljs.core.async.close_BANG_(out);
var state_37463__$1 = (function (){var statearr_37471 = state_37463;
(statearr_37471[(9)] = inst_37460);

return statearr_37471;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37463__$1,inst_37461);
} else {
if((state_val_37464 === (2))){
var inst_37440 = (state_37463[(8)]);
var inst_37442 = (inst_37440 < n);
var state_37463__$1 = state_37463;
if(cljs.core.truth_(inst_37442)){
var statearr_37472_38510 = state_37463__$1;
(statearr_37472_38510[(1)] = (4));

} else {
var statearr_37473_38511 = state_37463__$1;
(statearr_37473_38511[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (11))){
var inst_37440 = (state_37463[(8)]);
var inst_37450 = (state_37463[(2)]);
var inst_37451 = (inst_37440 + (1));
var inst_37440__$1 = inst_37451;
var state_37463__$1 = (function (){var statearr_37474 = state_37463;
(statearr_37474[(10)] = inst_37450);

(statearr_37474[(8)] = inst_37440__$1);

return statearr_37474;
})();
var statearr_37475_38512 = state_37463__$1;
(statearr_37475_38512[(2)] = null);

(statearr_37475_38512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (9))){
var state_37463__$1 = state_37463;
var statearr_37476_38513 = state_37463__$1;
(statearr_37476_38513[(2)] = null);

(statearr_37476_38513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (5))){
var state_37463__$1 = state_37463;
var statearr_37477_38517 = state_37463__$1;
(statearr_37477_38517[(2)] = null);

(statearr_37477_38517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (10))){
var inst_37455 = (state_37463[(2)]);
var state_37463__$1 = state_37463;
var statearr_37478_38521 = state_37463__$1;
(statearr_37478_38521[(2)] = inst_37455);

(statearr_37478_38521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37464 === (8))){
var inst_37445 = (state_37463[(7)]);
var state_37463__$1 = state_37463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37463__$1,(11),out,inst_37445);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36232__auto__ = null;
var cljs$core$async$state_machine__36232__auto____0 = (function (){
var statearr_37479 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37479[(0)] = cljs$core$async$state_machine__36232__auto__);

(statearr_37479[(1)] = (1));

return statearr_37479;
});
var cljs$core$async$state_machine__36232__auto____1 = (function (state_37463){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_37463);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e37480){if((e37480 instanceof Object)){
var ex__36235__auto__ = e37480;
var statearr_37481_38529 = state_37463;
(statearr_37481_38529[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37480;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38533 = state_37463;
state_37463 = G__38533;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$state_machine__36232__auto__ = function(state_37463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36232__auto____1.call(this,state_37463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36232__auto____0;
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36232__auto____1;
return cljs$core$async$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_37482 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_37482[(6)] = c__36322__auto___38505);

return statearr_37482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37484 = (function (f,ch,meta37485){
this.f = f;
this.ch = ch;
this.meta37485 = meta37485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37486,meta37485__$1){
var self__ = this;
var _37486__$1 = this;
return (new cljs.core.async.t_cljs$core$async37484(self__.f,self__.ch,meta37485__$1));
}));

(cljs.core.async.t_cljs$core$async37484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37486){
var self__ = this;
var _37486__$1 = this;
return self__.meta37485;
}));

(cljs.core.async.t_cljs$core$async37484.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37484.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37484.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37487 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37487 = (function (f,ch,meta37485,_,fn1,meta37488){
this.f = f;
this.ch = ch;
this.meta37485 = meta37485;
this._ = _;
this.fn1 = fn1;
this.meta37488 = meta37488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37489,meta37488__$1){
var self__ = this;
var _37489__$1 = this;
return (new cljs.core.async.t_cljs$core$async37487(self__.f,self__.ch,self__.meta37485,self__._,self__.fn1,meta37488__$1));
}));

(cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37489){
var self__ = this;
var _37489__$1 = this;
return self__.meta37488;
}));

(cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37483_SHARP_){
var G__37490 = (((p1__37483_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37483_SHARP_) : self__.f.call(null,p1__37483_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37490) : f1.call(null,G__37490));
});
}));

(cljs.core.async.t_cljs$core$async37487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37485","meta37485",473035358,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37484","cljs.core.async/t_cljs$core$async37484",1934813903,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37488","meta37488",1814045029,null)], null);
}));

(cljs.core.async.t_cljs$core$async37487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37487");

(cljs.core.async.t_cljs$core$async37487.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37487.
 */
cljs.core.async.__GT_t_cljs$core$async37487 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37487(f__$1,ch__$1,meta37485__$1,___$2,fn1__$1,meta37488){
return (new cljs.core.async.t_cljs$core$async37487(f__$1,ch__$1,meta37485__$1,___$2,fn1__$1,meta37488));
});

}

return (new cljs.core.async.t_cljs$core$async37487(self__.f,self__.ch,self__.meta37485,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37491 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37491) : self__.f.call(null,G__37491));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37484.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37485","meta37485",473035358,null)], null);
}));

(cljs.core.async.t_cljs$core$async37484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37484");

(cljs.core.async.t_cljs$core$async37484.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37484.
 */
cljs.core.async.__GT_t_cljs$core$async37484 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37484(f__$1,ch__$1,meta37485){
return (new cljs.core.async.t_cljs$core$async37484(f__$1,ch__$1,meta37485));
});

}

return (new cljs.core.async.t_cljs$core$async37484(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37492 = (function (f,ch,meta37493){
this.f = f;
this.ch = ch;
this.meta37493 = meta37493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37494,meta37493__$1){
var self__ = this;
var _37494__$1 = this;
return (new cljs.core.async.t_cljs$core$async37492(self__.f,self__.ch,meta37493__$1));
}));

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37494){
var self__ = this;
var _37494__$1 = this;
return self__.meta37493;
}));

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37492.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37493","meta37493",1498281431,null)], null);
}));

(cljs.core.async.t_cljs$core$async37492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37492");

(cljs.core.async.t_cljs$core$async37492.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37492.
 */
cljs.core.async.__GT_t_cljs$core$async37492 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37492(f__$1,ch__$1,meta37493){
return (new cljs.core.async.t_cljs$core$async37492(f__$1,ch__$1,meta37493));
});

}

return (new cljs.core.async.t_cljs$core$async37492(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37495 = (function (p,ch,meta37496){
this.p = p;
this.ch = ch;
this.meta37496 = meta37496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37497,meta37496__$1){
var self__ = this;
var _37497__$1 = this;
return (new cljs.core.async.t_cljs$core$async37495(self__.p,self__.ch,meta37496__$1));
}));

(cljs.core.async.t_cljs$core$async37495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37497){
var self__ = this;
var _37497__$1 = this;
return self__.meta37496;
}));

(cljs.core.async.t_cljs$core$async37495.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37495.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37495.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37495.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37496","meta37496",-2052283283,null)], null);
}));

(cljs.core.async.t_cljs$core$async37495.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37495");

(cljs.core.async.t_cljs$core$async37495.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37495");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37495.
 */
cljs.core.async.__GT_t_cljs$core$async37495 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37495(p__$1,ch__$1,meta37496){
return (new cljs.core.async.t_cljs$core$async37495(p__$1,ch__$1,meta37496));
});

}

return (new cljs.core.async.t_cljs$core$async37495(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37499 = arguments.length;
switch (G__37499) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36322__auto___38575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_37520){
var state_val_37521 = (state_37520[(1)]);
if((state_val_37521 === (7))){
var inst_37516 = (state_37520[(2)]);
var state_37520__$1 = state_37520;
var statearr_37522_38576 = state_37520__$1;
(statearr_37522_38576[(2)] = inst_37516);

(statearr_37522_38576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (1))){
var state_37520__$1 = state_37520;
var statearr_37523_38580 = state_37520__$1;
(statearr_37523_38580[(2)] = null);

(statearr_37523_38580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (4))){
var inst_37502 = (state_37520[(7)]);
var inst_37502__$1 = (state_37520[(2)]);
var inst_37503 = (inst_37502__$1 == null);
var state_37520__$1 = (function (){var statearr_37524 = state_37520;
(statearr_37524[(7)] = inst_37502__$1);

return statearr_37524;
})();
if(cljs.core.truth_(inst_37503)){
var statearr_37525_38581 = state_37520__$1;
(statearr_37525_38581[(1)] = (5));

} else {
var statearr_37526_38582 = state_37520__$1;
(statearr_37526_38582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (6))){
var inst_37502 = (state_37520[(7)]);
var inst_37507 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37502) : p.call(null,inst_37502));
var state_37520__$1 = state_37520;
if(cljs.core.truth_(inst_37507)){
var statearr_37527_38583 = state_37520__$1;
(statearr_37527_38583[(1)] = (8));

} else {
var statearr_37528_38584 = state_37520__$1;
(statearr_37528_38584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (3))){
var inst_37518 = (state_37520[(2)]);
var state_37520__$1 = state_37520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37520__$1,inst_37518);
} else {
if((state_val_37521 === (2))){
var state_37520__$1 = state_37520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37520__$1,(4),ch);
} else {
if((state_val_37521 === (11))){
var inst_37510 = (state_37520[(2)]);
var state_37520__$1 = state_37520;
var statearr_37529_38588 = state_37520__$1;
(statearr_37529_38588[(2)] = inst_37510);

(statearr_37529_38588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (9))){
var state_37520__$1 = state_37520;
var statearr_37530_38591 = state_37520__$1;
(statearr_37530_38591[(2)] = null);

(statearr_37530_38591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (5))){
var inst_37505 = cljs.core.async.close_BANG_(out);
var state_37520__$1 = state_37520;
var statearr_37531_38592 = state_37520__$1;
(statearr_37531_38592[(2)] = inst_37505);

(statearr_37531_38592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (10))){
var inst_37513 = (state_37520[(2)]);
var state_37520__$1 = (function (){var statearr_37532 = state_37520;
(statearr_37532[(8)] = inst_37513);

return statearr_37532;
})();
var statearr_37533_38593 = state_37520__$1;
(statearr_37533_38593[(2)] = null);

(statearr_37533_38593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (8))){
var inst_37502 = (state_37520[(7)]);
var state_37520__$1 = state_37520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37520__$1,(11),out,inst_37502);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36232__auto__ = null;
var cljs$core$async$state_machine__36232__auto____0 = (function (){
var statearr_37534 = [null,null,null,null,null,null,null,null,null];
(statearr_37534[(0)] = cljs$core$async$state_machine__36232__auto__);

(statearr_37534[(1)] = (1));

return statearr_37534;
});
var cljs$core$async$state_machine__36232__auto____1 = (function (state_37520){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_37520);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e37535){if((e37535 instanceof Object)){
var ex__36235__auto__ = e37535;
var statearr_37536_38596 = state_37520;
(statearr_37536_38596[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38597 = state_37520;
state_37520 = G__38597;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$state_machine__36232__auto__ = function(state_37520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36232__auto____1.call(this,state_37520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36232__auto____0;
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36232__auto____1;
return cljs$core$async$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_37537 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_37537[(6)] = c__36322__auto___38575);

return statearr_37537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37539 = arguments.length;
switch (G__37539) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_37601){
var state_val_37602 = (state_37601[(1)]);
if((state_val_37602 === (7))){
var inst_37597 = (state_37601[(2)]);
var state_37601__$1 = state_37601;
var statearr_37603_38612 = state_37601__$1;
(statearr_37603_38612[(2)] = inst_37597);

(statearr_37603_38612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (20))){
var inst_37567 = (state_37601[(7)]);
var inst_37578 = (state_37601[(2)]);
var inst_37579 = cljs.core.next(inst_37567);
var inst_37553 = inst_37579;
var inst_37554 = null;
var inst_37555 = (0);
var inst_37556 = (0);
var state_37601__$1 = (function (){var statearr_37604 = state_37601;
(statearr_37604[(8)] = inst_37555);

(statearr_37604[(9)] = inst_37554);

(statearr_37604[(10)] = inst_37556);

(statearr_37604[(11)] = inst_37553);

(statearr_37604[(12)] = inst_37578);

return statearr_37604;
})();
var statearr_37605_38614 = state_37601__$1;
(statearr_37605_38614[(2)] = null);

(statearr_37605_38614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (1))){
var state_37601__$1 = state_37601;
var statearr_37606_38615 = state_37601__$1;
(statearr_37606_38615[(2)] = null);

(statearr_37606_38615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (4))){
var inst_37542 = (state_37601[(13)]);
var inst_37542__$1 = (state_37601[(2)]);
var inst_37543 = (inst_37542__$1 == null);
var state_37601__$1 = (function (){var statearr_37607 = state_37601;
(statearr_37607[(13)] = inst_37542__$1);

return statearr_37607;
})();
if(cljs.core.truth_(inst_37543)){
var statearr_37608_38616 = state_37601__$1;
(statearr_37608_38616[(1)] = (5));

} else {
var statearr_37609_38617 = state_37601__$1;
(statearr_37609_38617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (15))){
var state_37601__$1 = state_37601;
var statearr_37613_38618 = state_37601__$1;
(statearr_37613_38618[(2)] = null);

(statearr_37613_38618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (21))){
var state_37601__$1 = state_37601;
var statearr_37614_38619 = state_37601__$1;
(statearr_37614_38619[(2)] = null);

(statearr_37614_38619[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (13))){
var inst_37555 = (state_37601[(8)]);
var inst_37554 = (state_37601[(9)]);
var inst_37556 = (state_37601[(10)]);
var inst_37553 = (state_37601[(11)]);
var inst_37563 = (state_37601[(2)]);
var inst_37564 = (inst_37556 + (1));
var tmp37610 = inst_37555;
var tmp37611 = inst_37554;
var tmp37612 = inst_37553;
var inst_37553__$1 = tmp37612;
var inst_37554__$1 = tmp37611;
var inst_37555__$1 = tmp37610;
var inst_37556__$1 = inst_37564;
var state_37601__$1 = (function (){var statearr_37615 = state_37601;
(statearr_37615[(8)] = inst_37555__$1);

(statearr_37615[(9)] = inst_37554__$1);

(statearr_37615[(14)] = inst_37563);

(statearr_37615[(10)] = inst_37556__$1);

(statearr_37615[(11)] = inst_37553__$1);

return statearr_37615;
})();
var statearr_37616_38620 = state_37601__$1;
(statearr_37616_38620[(2)] = null);

(statearr_37616_38620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (22))){
var state_37601__$1 = state_37601;
var statearr_37617_38621 = state_37601__$1;
(statearr_37617_38621[(2)] = null);

(statearr_37617_38621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (6))){
var inst_37542 = (state_37601[(13)]);
var inst_37551 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37542) : f.call(null,inst_37542));
var inst_37552 = cljs.core.seq(inst_37551);
var inst_37553 = inst_37552;
var inst_37554 = null;
var inst_37555 = (0);
var inst_37556 = (0);
var state_37601__$1 = (function (){var statearr_37618 = state_37601;
(statearr_37618[(8)] = inst_37555);

(statearr_37618[(9)] = inst_37554);

(statearr_37618[(10)] = inst_37556);

(statearr_37618[(11)] = inst_37553);

return statearr_37618;
})();
var statearr_37619_38622 = state_37601__$1;
(statearr_37619_38622[(2)] = null);

(statearr_37619_38622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (17))){
var inst_37567 = (state_37601[(7)]);
var inst_37571 = cljs.core.chunk_first(inst_37567);
var inst_37572 = cljs.core.chunk_rest(inst_37567);
var inst_37573 = cljs.core.count(inst_37571);
var inst_37553 = inst_37572;
var inst_37554 = inst_37571;
var inst_37555 = inst_37573;
var inst_37556 = (0);
var state_37601__$1 = (function (){var statearr_37620 = state_37601;
(statearr_37620[(8)] = inst_37555);

(statearr_37620[(9)] = inst_37554);

(statearr_37620[(10)] = inst_37556);

(statearr_37620[(11)] = inst_37553);

return statearr_37620;
})();
var statearr_37621_38623 = state_37601__$1;
(statearr_37621_38623[(2)] = null);

(statearr_37621_38623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (3))){
var inst_37599 = (state_37601[(2)]);
var state_37601__$1 = state_37601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37601__$1,inst_37599);
} else {
if((state_val_37602 === (12))){
var inst_37587 = (state_37601[(2)]);
var state_37601__$1 = state_37601;
var statearr_37622_38625 = state_37601__$1;
(statearr_37622_38625[(2)] = inst_37587);

(statearr_37622_38625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (2))){
var state_37601__$1 = state_37601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37601__$1,(4),in$);
} else {
if((state_val_37602 === (23))){
var inst_37595 = (state_37601[(2)]);
var state_37601__$1 = state_37601;
var statearr_37623_38626 = state_37601__$1;
(statearr_37623_38626[(2)] = inst_37595);

(statearr_37623_38626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (19))){
var inst_37582 = (state_37601[(2)]);
var state_37601__$1 = state_37601;
var statearr_37624_38628 = state_37601__$1;
(statearr_37624_38628[(2)] = inst_37582);

(statearr_37624_38628[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (11))){
var inst_37567 = (state_37601[(7)]);
var inst_37553 = (state_37601[(11)]);
var inst_37567__$1 = cljs.core.seq(inst_37553);
var state_37601__$1 = (function (){var statearr_37625 = state_37601;
(statearr_37625[(7)] = inst_37567__$1);

return statearr_37625;
})();
if(inst_37567__$1){
var statearr_37626_38630 = state_37601__$1;
(statearr_37626_38630[(1)] = (14));

} else {
var statearr_37627_38631 = state_37601__$1;
(statearr_37627_38631[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (9))){
var inst_37589 = (state_37601[(2)]);
var inst_37590 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37601__$1 = (function (){var statearr_37628 = state_37601;
(statearr_37628[(15)] = inst_37589);

return statearr_37628;
})();
if(cljs.core.truth_(inst_37590)){
var statearr_37629_38632 = state_37601__$1;
(statearr_37629_38632[(1)] = (21));

} else {
var statearr_37630_38633 = state_37601__$1;
(statearr_37630_38633[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (5))){
var inst_37545 = cljs.core.async.close_BANG_(out);
var state_37601__$1 = state_37601;
var statearr_37631_38635 = state_37601__$1;
(statearr_37631_38635[(2)] = inst_37545);

(statearr_37631_38635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (14))){
var inst_37567 = (state_37601[(7)]);
var inst_37569 = cljs.core.chunked_seq_QMARK_(inst_37567);
var state_37601__$1 = state_37601;
if(inst_37569){
var statearr_37632_38636 = state_37601__$1;
(statearr_37632_38636[(1)] = (17));

} else {
var statearr_37633_38637 = state_37601__$1;
(statearr_37633_38637[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (16))){
var inst_37585 = (state_37601[(2)]);
var state_37601__$1 = state_37601;
var statearr_37634_38638 = state_37601__$1;
(statearr_37634_38638[(2)] = inst_37585);

(statearr_37634_38638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37602 === (10))){
var inst_37554 = (state_37601[(9)]);
var inst_37556 = (state_37601[(10)]);
var inst_37561 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37554,inst_37556);
var state_37601__$1 = state_37601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37601__$1,(13),out,inst_37561);
} else {
if((state_val_37602 === (18))){
var inst_37567 = (state_37601[(7)]);
var inst_37576 = cljs.core.first(inst_37567);
var state_37601__$1 = state_37601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37601__$1,(20),out,inst_37576);
} else {
if((state_val_37602 === (8))){
var inst_37555 = (state_37601[(8)]);
var inst_37556 = (state_37601[(10)]);
var inst_37558 = (inst_37556 < inst_37555);
var inst_37559 = inst_37558;
var state_37601__$1 = state_37601;
if(cljs.core.truth_(inst_37559)){
var statearr_37635_38640 = state_37601__$1;
(statearr_37635_38640[(1)] = (10));

} else {
var statearr_37636_38641 = state_37601__$1;
(statearr_37636_38641[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36232__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36232__auto____0 = (function (){
var statearr_37637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37637[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36232__auto__);

(statearr_37637[(1)] = (1));

return statearr_37637;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36232__auto____1 = (function (state_37601){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_37601);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e37638){if((e37638 instanceof Object)){
var ex__36235__auto__ = e37638;
var statearr_37639_38643 = state_37601;
(statearr_37639_38643[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37638;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38644 = state_37601;
state_37601 = G__38644;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36232__auto__ = function(state_37601){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36232__auto____1.call(this,state_37601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36232__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36232__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_37640 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_37640[(6)] = c__36322__auto__);

return statearr_37640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));

return c__36322__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37642 = arguments.length;
switch (G__37642) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37644 = arguments.length;
switch (G__37644) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37646 = arguments.length;
switch (G__37646) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36322__auto___38669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_37670){
var state_val_37671 = (state_37670[(1)]);
if((state_val_37671 === (7))){
var inst_37665 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
var statearr_37672_38670 = state_37670__$1;
(statearr_37672_38670[(2)] = inst_37665);

(statearr_37672_38670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (1))){
var inst_37647 = null;
var state_37670__$1 = (function (){var statearr_37673 = state_37670;
(statearr_37673[(7)] = inst_37647);

return statearr_37673;
})();
var statearr_37674_38671 = state_37670__$1;
(statearr_37674_38671[(2)] = null);

(statearr_37674_38671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (4))){
var inst_37650 = (state_37670[(8)]);
var inst_37650__$1 = (state_37670[(2)]);
var inst_37651 = (inst_37650__$1 == null);
var inst_37652 = cljs.core.not(inst_37651);
var state_37670__$1 = (function (){var statearr_37675 = state_37670;
(statearr_37675[(8)] = inst_37650__$1);

return statearr_37675;
})();
if(inst_37652){
var statearr_37676_38672 = state_37670__$1;
(statearr_37676_38672[(1)] = (5));

} else {
var statearr_37677_38673 = state_37670__$1;
(statearr_37677_38673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (6))){
var state_37670__$1 = state_37670;
var statearr_37678_38678 = state_37670__$1;
(statearr_37678_38678[(2)] = null);

(statearr_37678_38678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (3))){
var inst_37667 = (state_37670[(2)]);
var inst_37668 = cljs.core.async.close_BANG_(out);
var state_37670__$1 = (function (){var statearr_37679 = state_37670;
(statearr_37679[(9)] = inst_37667);

return statearr_37679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37670__$1,inst_37668);
} else {
if((state_val_37671 === (2))){
var state_37670__$1 = state_37670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37670__$1,(4),ch);
} else {
if((state_val_37671 === (11))){
var inst_37650 = (state_37670[(8)]);
var inst_37659 = (state_37670[(2)]);
var inst_37647 = inst_37650;
var state_37670__$1 = (function (){var statearr_37680 = state_37670;
(statearr_37680[(10)] = inst_37659);

(statearr_37680[(7)] = inst_37647);

return statearr_37680;
})();
var statearr_37681_38687 = state_37670__$1;
(statearr_37681_38687[(2)] = null);

(statearr_37681_38687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (9))){
var inst_37650 = (state_37670[(8)]);
var state_37670__$1 = state_37670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37670__$1,(11),out,inst_37650);
} else {
if((state_val_37671 === (5))){
var inst_37650 = (state_37670[(8)]);
var inst_37647 = (state_37670[(7)]);
var inst_37654 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37650,inst_37647);
var state_37670__$1 = state_37670;
if(inst_37654){
var statearr_37683_38699 = state_37670__$1;
(statearr_37683_38699[(1)] = (8));

} else {
var statearr_37684_38700 = state_37670__$1;
(statearr_37684_38700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (10))){
var inst_37662 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
var statearr_37685_38708 = state_37670__$1;
(statearr_37685_38708[(2)] = inst_37662);

(statearr_37685_38708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (8))){
var inst_37647 = (state_37670[(7)]);
var tmp37682 = inst_37647;
var inst_37647__$1 = tmp37682;
var state_37670__$1 = (function (){var statearr_37686 = state_37670;
(statearr_37686[(7)] = inst_37647__$1);

return statearr_37686;
})();
var statearr_37687_38712 = state_37670__$1;
(statearr_37687_38712[(2)] = null);

(statearr_37687_38712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36232__auto__ = null;
var cljs$core$async$state_machine__36232__auto____0 = (function (){
var statearr_37688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37688[(0)] = cljs$core$async$state_machine__36232__auto__);

(statearr_37688[(1)] = (1));

return statearr_37688;
});
var cljs$core$async$state_machine__36232__auto____1 = (function (state_37670){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_37670);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e37689){if((e37689 instanceof Object)){
var ex__36235__auto__ = e37689;
var statearr_37690_38713 = state_37670;
(statearr_37690_38713[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38714 = state_37670;
state_37670 = G__38714;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$state_machine__36232__auto__ = function(state_37670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36232__auto____1.call(this,state_37670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36232__auto____0;
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36232__auto____1;
return cljs$core$async$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_37691 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_37691[(6)] = c__36322__auto___38669);

return statearr_37691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37693 = arguments.length;
switch (G__37693) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36322__auto___38717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_37731){
var state_val_37732 = (state_37731[(1)]);
if((state_val_37732 === (7))){
var inst_37727 = (state_37731[(2)]);
var state_37731__$1 = state_37731;
var statearr_37733_38718 = state_37731__$1;
(statearr_37733_38718[(2)] = inst_37727);

(statearr_37733_38718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (1))){
var inst_37694 = (new Array(n));
var inst_37695 = inst_37694;
var inst_37696 = (0);
var state_37731__$1 = (function (){var statearr_37734 = state_37731;
(statearr_37734[(7)] = inst_37696);

(statearr_37734[(8)] = inst_37695);

return statearr_37734;
})();
var statearr_37735_38719 = state_37731__$1;
(statearr_37735_38719[(2)] = null);

(statearr_37735_38719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (4))){
var inst_37699 = (state_37731[(9)]);
var inst_37699__$1 = (state_37731[(2)]);
var inst_37700 = (inst_37699__$1 == null);
var inst_37701 = cljs.core.not(inst_37700);
var state_37731__$1 = (function (){var statearr_37736 = state_37731;
(statearr_37736[(9)] = inst_37699__$1);

return statearr_37736;
})();
if(inst_37701){
var statearr_37737_38720 = state_37731__$1;
(statearr_37737_38720[(1)] = (5));

} else {
var statearr_37738_38721 = state_37731__$1;
(statearr_37738_38721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (15))){
var inst_37721 = (state_37731[(2)]);
var state_37731__$1 = state_37731;
var statearr_37739_38722 = state_37731__$1;
(statearr_37739_38722[(2)] = inst_37721);

(statearr_37739_38722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (13))){
var state_37731__$1 = state_37731;
var statearr_37740_38723 = state_37731__$1;
(statearr_37740_38723[(2)] = null);

(statearr_37740_38723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (6))){
var inst_37696 = (state_37731[(7)]);
var inst_37717 = (inst_37696 > (0));
var state_37731__$1 = state_37731;
if(cljs.core.truth_(inst_37717)){
var statearr_37741_38724 = state_37731__$1;
(statearr_37741_38724[(1)] = (12));

} else {
var statearr_37742_38725 = state_37731__$1;
(statearr_37742_38725[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (3))){
var inst_37729 = (state_37731[(2)]);
var state_37731__$1 = state_37731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37731__$1,inst_37729);
} else {
if((state_val_37732 === (12))){
var inst_37695 = (state_37731[(8)]);
var inst_37719 = cljs.core.vec(inst_37695);
var state_37731__$1 = state_37731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37731__$1,(15),out,inst_37719);
} else {
if((state_val_37732 === (2))){
var state_37731__$1 = state_37731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37731__$1,(4),ch);
} else {
if((state_val_37732 === (11))){
var inst_37711 = (state_37731[(2)]);
var inst_37712 = (new Array(n));
var inst_37695 = inst_37712;
var inst_37696 = (0);
var state_37731__$1 = (function (){var statearr_37743 = state_37731;
(statearr_37743[(7)] = inst_37696);

(statearr_37743[(8)] = inst_37695);

(statearr_37743[(10)] = inst_37711);

return statearr_37743;
})();
var statearr_37744_38727 = state_37731__$1;
(statearr_37744_38727[(2)] = null);

(statearr_37744_38727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (9))){
var inst_37695 = (state_37731[(8)]);
var inst_37709 = cljs.core.vec(inst_37695);
var state_37731__$1 = state_37731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37731__$1,(11),out,inst_37709);
} else {
if((state_val_37732 === (5))){
var inst_37696 = (state_37731[(7)]);
var inst_37699 = (state_37731[(9)]);
var inst_37695 = (state_37731[(8)]);
var inst_37704 = (state_37731[(11)]);
var inst_37703 = (inst_37695[inst_37696] = inst_37699);
var inst_37704__$1 = (inst_37696 + (1));
var inst_37705 = (inst_37704__$1 < n);
var state_37731__$1 = (function (){var statearr_37745 = state_37731;
(statearr_37745[(12)] = inst_37703);

(statearr_37745[(11)] = inst_37704__$1);

return statearr_37745;
})();
if(cljs.core.truth_(inst_37705)){
var statearr_37746_38743 = state_37731__$1;
(statearr_37746_38743[(1)] = (8));

} else {
var statearr_37747_38748 = state_37731__$1;
(statearr_37747_38748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (14))){
var inst_37724 = (state_37731[(2)]);
var inst_37725 = cljs.core.async.close_BANG_(out);
var state_37731__$1 = (function (){var statearr_37749 = state_37731;
(statearr_37749[(13)] = inst_37724);

return statearr_37749;
})();
var statearr_37750_38757 = state_37731__$1;
(statearr_37750_38757[(2)] = inst_37725);

(statearr_37750_38757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (10))){
var inst_37715 = (state_37731[(2)]);
var state_37731__$1 = state_37731;
var statearr_37751_38766 = state_37731__$1;
(statearr_37751_38766[(2)] = inst_37715);

(statearr_37751_38766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37732 === (8))){
var inst_37695 = (state_37731[(8)]);
var inst_37704 = (state_37731[(11)]);
var tmp37748 = inst_37695;
var inst_37695__$1 = tmp37748;
var inst_37696 = inst_37704;
var state_37731__$1 = (function (){var statearr_37752 = state_37731;
(statearr_37752[(7)] = inst_37696);

(statearr_37752[(8)] = inst_37695__$1);

return statearr_37752;
})();
var statearr_37753_38778 = state_37731__$1;
(statearr_37753_38778[(2)] = null);

(statearr_37753_38778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36232__auto__ = null;
var cljs$core$async$state_machine__36232__auto____0 = (function (){
var statearr_37754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37754[(0)] = cljs$core$async$state_machine__36232__auto__);

(statearr_37754[(1)] = (1));

return statearr_37754;
});
var cljs$core$async$state_machine__36232__auto____1 = (function (state_37731){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_37731);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e37755){if((e37755 instanceof Object)){
var ex__36235__auto__ = e37755;
var statearr_37756_38794 = state_37731;
(statearr_37756_38794[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38815 = state_37731;
state_37731 = G__38815;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$state_machine__36232__auto__ = function(state_37731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36232__auto____1.call(this,state_37731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36232__auto____0;
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36232__auto____1;
return cljs$core$async$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_37757 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_37757[(6)] = c__36322__auto___38717);

return statearr_37757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37759 = arguments.length;
switch (G__37759) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36322__auto___38825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36323__auto__ = (function (){var switch__36231__auto__ = (function (state_37801){
var state_val_37802 = (state_37801[(1)]);
if((state_val_37802 === (7))){
var inst_37797 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37803_38830 = state_37801__$1;
(statearr_37803_38830[(2)] = inst_37797);

(statearr_37803_38830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (1))){
var inst_37760 = [];
var inst_37761 = inst_37760;
var inst_37762 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37801__$1 = (function (){var statearr_37804 = state_37801;
(statearr_37804[(7)] = inst_37762);

(statearr_37804[(8)] = inst_37761);

return statearr_37804;
})();
var statearr_37805_38832 = state_37801__$1;
(statearr_37805_38832[(2)] = null);

(statearr_37805_38832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (4))){
var inst_37765 = (state_37801[(9)]);
var inst_37765__$1 = (state_37801[(2)]);
var inst_37766 = (inst_37765__$1 == null);
var inst_37767 = cljs.core.not(inst_37766);
var state_37801__$1 = (function (){var statearr_37806 = state_37801;
(statearr_37806[(9)] = inst_37765__$1);

return statearr_37806;
})();
if(inst_37767){
var statearr_37807_38833 = state_37801__$1;
(statearr_37807_38833[(1)] = (5));

} else {
var statearr_37808_38835 = state_37801__$1;
(statearr_37808_38835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (15))){
var inst_37791 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37809_38836 = state_37801__$1;
(statearr_37809_38836[(2)] = inst_37791);

(statearr_37809_38836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (13))){
var state_37801__$1 = state_37801;
var statearr_37810_38837 = state_37801__$1;
(statearr_37810_38837[(2)] = null);

(statearr_37810_38837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (6))){
var inst_37761 = (state_37801[(8)]);
var inst_37786 = inst_37761.length;
var inst_37787 = (inst_37786 > (0));
var state_37801__$1 = state_37801;
if(cljs.core.truth_(inst_37787)){
var statearr_37811_38838 = state_37801__$1;
(statearr_37811_38838[(1)] = (12));

} else {
var statearr_37812_38839 = state_37801__$1;
(statearr_37812_38839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (3))){
var inst_37799 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37801__$1,inst_37799);
} else {
if((state_val_37802 === (12))){
var inst_37761 = (state_37801[(8)]);
var inst_37789 = cljs.core.vec(inst_37761);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37801__$1,(15),out,inst_37789);
} else {
if((state_val_37802 === (2))){
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37801__$1,(4),ch);
} else {
if((state_val_37802 === (11))){
var inst_37765 = (state_37801[(9)]);
var inst_37769 = (state_37801[(10)]);
var inst_37779 = (state_37801[(2)]);
var inst_37780 = [];
var inst_37781 = inst_37780.push(inst_37765);
var inst_37761 = inst_37780;
var inst_37762 = inst_37769;
var state_37801__$1 = (function (){var statearr_37813 = state_37801;
(statearr_37813[(11)] = inst_37779);

(statearr_37813[(12)] = inst_37781);

(statearr_37813[(7)] = inst_37762);

(statearr_37813[(8)] = inst_37761);

return statearr_37813;
})();
var statearr_37814_38840 = state_37801__$1;
(statearr_37814_38840[(2)] = null);

(statearr_37814_38840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (9))){
var inst_37761 = (state_37801[(8)]);
var inst_37777 = cljs.core.vec(inst_37761);
var state_37801__$1 = state_37801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37801__$1,(11),out,inst_37777);
} else {
if((state_val_37802 === (5))){
var inst_37765 = (state_37801[(9)]);
var inst_37762 = (state_37801[(7)]);
var inst_37769 = (state_37801[(10)]);
var inst_37769__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37765) : f.call(null,inst_37765));
var inst_37770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37769__$1,inst_37762);
var inst_37771 = cljs.core.keyword_identical_QMARK_(inst_37762,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37772 = ((inst_37770) || (inst_37771));
var state_37801__$1 = (function (){var statearr_37815 = state_37801;
(statearr_37815[(10)] = inst_37769__$1);

return statearr_37815;
})();
if(cljs.core.truth_(inst_37772)){
var statearr_37816_38842 = state_37801__$1;
(statearr_37816_38842[(1)] = (8));

} else {
var statearr_37817_38843 = state_37801__$1;
(statearr_37817_38843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (14))){
var inst_37794 = (state_37801[(2)]);
var inst_37795 = cljs.core.async.close_BANG_(out);
var state_37801__$1 = (function (){var statearr_37819 = state_37801;
(statearr_37819[(13)] = inst_37794);

return statearr_37819;
})();
var statearr_37820_38844 = state_37801__$1;
(statearr_37820_38844[(2)] = inst_37795);

(statearr_37820_38844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (10))){
var inst_37784 = (state_37801[(2)]);
var state_37801__$1 = state_37801;
var statearr_37821_38899 = state_37801__$1;
(statearr_37821_38899[(2)] = inst_37784);

(statearr_37821_38899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37802 === (8))){
var inst_37765 = (state_37801[(9)]);
var inst_37769 = (state_37801[(10)]);
var inst_37761 = (state_37801[(8)]);
var inst_37774 = inst_37761.push(inst_37765);
var tmp37818 = inst_37761;
var inst_37761__$1 = tmp37818;
var inst_37762 = inst_37769;
var state_37801__$1 = (function (){var statearr_37822 = state_37801;
(statearr_37822[(7)] = inst_37762);

(statearr_37822[(8)] = inst_37761__$1);

(statearr_37822[(14)] = inst_37774);

return statearr_37822;
})();
var statearr_37823_38914 = state_37801__$1;
(statearr_37823_38914[(2)] = null);

(statearr_37823_38914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36232__auto__ = null;
var cljs$core$async$state_machine__36232__auto____0 = (function (){
var statearr_37824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37824[(0)] = cljs$core$async$state_machine__36232__auto__);

(statearr_37824[(1)] = (1));

return statearr_37824;
});
var cljs$core$async$state_machine__36232__auto____1 = (function (state_37801){
while(true){
var ret_value__36233__auto__ = (function (){try{while(true){
var result__36234__auto__ = switch__36231__auto__(state_37801);
if(cljs.core.keyword_identical_QMARK_(result__36234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36234__auto__;
}
break;
}
}catch (e37825){if((e37825 instanceof Object)){
var ex__36235__auto__ = e37825;
var statearr_37826_38916 = state_37801;
(statearr_37826_38916[(5)] = ex__36235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38917 = state_37801;
state_37801 = G__38917;
continue;
} else {
return ret_value__36233__auto__;
}
break;
}
});
cljs$core$async$state_machine__36232__auto__ = function(state_37801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36232__auto____1.call(this,state_37801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36232__auto____0;
cljs$core$async$state_machine__36232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36232__auto____1;
return cljs$core$async$state_machine__36232__auto__;
})()
})();
var state__36324__auto__ = (function (){var statearr_37827 = (f__36323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36323__auto__.cljs$core$IFn$_invoke$arity$0() : f__36323__auto__.call(null));
(statearr_37827[(6)] = c__36322__auto___38825);

return statearr_37827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36324__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

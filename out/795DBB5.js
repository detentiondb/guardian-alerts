goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__3686__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3687__i = 0, G__3687__a = new Array(arguments.length -  0);
while (G__3687__i < G__3687__a.length) {G__3687__a[G__3687__i] = arguments[G__3687__i + 0]; ++G__3687__i;}
  args = new cljs.core.IndexedSeq(G__3687__a,0);
} 
return G__3686__delegate.call(this,args);};
G__3686.cljs$lang$maxFixedArity = 0;
G__3686.cljs$lang$applyTo = (function (arglist__3688){
var args = cljs.core.seq(arglist__3688);
return G__3686__delegate(args);
});
G__3686.cljs$core$IFn$_invoke$arity$variadic = G__3686__delegate;
return G__3686;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__3689__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__3689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3690__i = 0, G__3690__a = new Array(arguments.length -  0);
while (G__3690__i < G__3690__a.length) {G__3690__a[G__3690__i] = arguments[G__3690__i + 0]; ++G__3690__i;}
  args = new cljs.core.IndexedSeq(G__3690__a,0);
} 
return G__3689__delegate.call(this,args);};
G__3689.cljs$lang$maxFixedArity = 0;
G__3689.cljs$lang$applyTo = (function (arglist__3691){
var args = cljs.core.seq(arglist__3691);
return G__3689__delegate(args);
});
G__3689.cljs$core$IFn$_invoke$arity$variadic = G__3689__delegate;
return G__3689;
})()
;

return null;
});

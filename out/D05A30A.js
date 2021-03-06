goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1301__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1302__i = 0, G__1302__a = new Array(arguments.length -  0);
while (G__1302__i < G__1302__a.length) {G__1302__a[G__1302__i] = arguments[G__1302__i + 0]; ++G__1302__i;}
  args = new cljs.core.IndexedSeq(G__1302__a,0);
} 
return G__1301__delegate.call(this,args);};
G__1301.cljs$lang$maxFixedArity = 0;
G__1301.cljs$lang$applyTo = (function (arglist__1303){
var args = cljs.core.seq(arglist__1303);
return G__1301__delegate(args);
});
G__1301.cljs$core$IFn$_invoke$arity$variadic = G__1301__delegate;
return G__1301;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1304__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1305__i = 0, G__1305__a = new Array(arguments.length -  0);
while (G__1305__i < G__1305__a.length) {G__1305__a[G__1305__i] = arguments[G__1305__i + 0]; ++G__1305__i;}
  args = new cljs.core.IndexedSeq(G__1305__a,0);
} 
return G__1304__delegate.call(this,args);};
G__1304.cljs$lang$maxFixedArity = 0;
G__1304.cljs$lang$applyTo = (function (arglist__1306){
var args = cljs.core.seq(arglist__1306);
return G__1304__delegate(args);
});
G__1304.cljs$core$IFn$_invoke$arity$variadic = G__1304__delegate;
return G__1304;
})()
;

return null;
});

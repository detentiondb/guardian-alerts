goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1489__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1490__i = 0, G__1490__a = new Array(arguments.length -  0);
while (G__1490__i < G__1490__a.length) {G__1490__a[G__1490__i] = arguments[G__1490__i + 0]; ++G__1490__i;}
  args = new cljs.core.IndexedSeq(G__1490__a,0);
} 
return G__1489__delegate.call(this,args);};
G__1489.cljs$lang$maxFixedArity = 0;
G__1489.cljs$lang$applyTo = (function (arglist__1491){
var args = cljs.core.seq(arglist__1491);
return G__1489__delegate(args);
});
G__1489.cljs$core$IFn$_invoke$arity$variadic = G__1489__delegate;
return G__1489;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1492__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1493__i = 0, G__1493__a = new Array(arguments.length -  0);
while (G__1493__i < G__1493__a.length) {G__1493__a[G__1493__i] = arguments[G__1493__i + 0]; ++G__1493__i;}
  args = new cljs.core.IndexedSeq(G__1493__a,0);
} 
return G__1492__delegate.call(this,args);};
G__1492.cljs$lang$maxFixedArity = 0;
G__1492.cljs$lang$applyTo = (function (arglist__1494){
var args = cljs.core.seq(arglist__1494);
return G__1492__delegate(args);
});
G__1492.cljs$core$IFn$_invoke$arity$variadic = G__1492__delegate;
return G__1492;
})()
;

return null;
});

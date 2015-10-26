goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1339__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1340__i = 0, G__1340__a = new Array(arguments.length -  0);
while (G__1340__i < G__1340__a.length) {G__1340__a[G__1340__i] = arguments[G__1340__i + 0]; ++G__1340__i;}
  args = new cljs.core.IndexedSeq(G__1340__a,0);
} 
return G__1339__delegate.call(this,args);};
G__1339.cljs$lang$maxFixedArity = 0;
G__1339.cljs$lang$applyTo = (function (arglist__1341){
var args = cljs.core.seq(arglist__1341);
return G__1339__delegate(args);
});
G__1339.cljs$core$IFn$_invoke$arity$variadic = G__1339__delegate;
return G__1339;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1342__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1343__i = 0, G__1343__a = new Array(arguments.length -  0);
while (G__1343__i < G__1343__a.length) {G__1343__a[G__1343__i] = arguments[G__1343__i + 0]; ++G__1343__i;}
  args = new cljs.core.IndexedSeq(G__1343__a,0);
} 
return G__1342__delegate.call(this,args);};
G__1342.cljs$lang$maxFixedArity = 0;
G__1342.cljs$lang$applyTo = (function (arglist__1344){
var args = cljs.core.seq(arglist__1344);
return G__1342__delegate(args);
});
G__1342.cljs$core$IFn$_invoke$arity$variadic = G__1342__delegate;
return G__1342;
})()
;

return null;
});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by psc-bundle 0.9.3
var PS = {};
(function(exports) {
    "use strict";

  // module Control.Monad.Eff.Console

  exports.log = function (s) {
    return function () {
      console.log(s);
      return {};
    };
  };
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
    "use strict";

  // module Data.Unit

  exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
  // Generated by psc version 0.9.3
  "use strict";
  var $foreign = PS["Data.Unit"];
  var Data_Show = PS["Data.Show"];
  exports["unit"] = $foreign.unit;
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
  // Generated by psc version 0.9.3
  "use strict";
  var $foreign = PS["Control.Monad.Eff.Console"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  exports["log"] = $foreign.log;
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  // Generated by psc version 0.9.3
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Control_Category = PS["Control.Category"];        
  var Just = (function () {
      function Just(value0) {
          this.value0 = value0;
      };
      Just.create = function (value0) {
          return new Just(value0);
      };
      return Just;
  })();
  var Nothing = (function () {
      function Nothing() {

      };
      Nothing.value = new Nothing();
      return Nothing;
  })();
  exports["Just"] = Just;
  exports["Nothing"] = Nothing;
})(PS["Data.Maybe"] = PS["Data.Maybe"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.getCanvasElementByIdImpl = function(id, Just, Nothing) {
      return function() {
          var el = document.getElementById(id);
          if (el && el instanceof HTMLCanvasElement) {
              return Just(el);
          } else {
              return Nothing;
          }
      };
  };

  exports.getContext2D = function(c) {
      return function() {
          return c.getContext('2d');
      };
  };

  exports.getCanvasWidth = function(canvas) {
      return function() {
          return canvas.width;
      };
  };

  exports.getCanvasHeight = function(canvas) {
      return function() {
          return canvas.height;
      };
  };

  exports.setFillStyle = function(style) {
      return function(ctx) {
          return function() {
              ctx.fillStyle = style;
              return ctx;
          };
      };
  };

  exports.setStrokeStyle = function(style) {
      return function(ctx) {
          return function() {
              ctx.strokeStyle = style;
              return ctx;
          };
      };
  };

  exports.font = function(ctx) {
      return function() {
          return ctx.font;
      };
  };

  exports.setFont = function(fontspec) {
      return function(ctx) {
          return function() {
              ctx.font = fontspec;
              return ctx;
          };
      };
  };

  exports.fillText = function(ctx) {
      return function(text) {
          return function(x) {
              return function(y) {
                  return function() {
                      ctx.fillText(text, x, y);
                      return ctx;
                  };
              };
          };
      };
  };

  exports.strokeText = function(ctx) {
      return function(text) {
          return function(x) {
              return function(y) {
                  return function() {
                      ctx.strokeText(text, x, y);
                      return ctx;
                  };
              };
          };
      };
  };
})(PS["Graphics.Canvas"] = PS["Graphics.Canvas"] || {});
(function(exports) {
  // Generated by psc version 0.9.3
  "use strict";
  var $foreign = PS["Graphics.Canvas"];
  var Prelude = PS["Prelude"];
  var Data_ArrayBuffer_Types = PS["Data.ArrayBuffer.Types"];
  var Data_Function_Uncurried = PS["Data.Function.Uncurried"];
  var Data_Maybe = PS["Data.Maybe"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Exception_Unsafe = PS["Control.Monad.Eff.Exception.Unsafe"];
  var Data_Show = PS["Data.Show"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Applicative = PS["Control.Applicative"];
  var Data_Function = PS["Data.Function"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Functor = PS["Data.Functor"];
  var getCanvasElementById = function (elId) {
      return $foreign.getCanvasElementByIdImpl(elId, Data_Maybe.Just.create, Data_Maybe.Nothing.value);
  };
  var getCanvasDimensions = function (ce) {
      return function __do() {
          var v = $foreign.getCanvasWidth(ce)();
          var v1 = $foreign.getCanvasHeight(ce)();
          return {
              width: v, 
              height: v1
          };
      };
  };
  exports["getCanvasDimensions"] = getCanvasDimensions;
  exports["getCanvasElementById"] = getCanvasElementById;
  exports["fillText"] = $foreign.fillText;
  exports["getContext2D"] = $foreign.getContext2D;
  exports["setFillStyle"] = $foreign.setFillStyle;
  exports["setFont"] = $foreign.setFont;
  exports["setStrokeStyle"] = $foreign.setStrokeStyle;
  exports["strokeText"] = $foreign.strokeText;
})(PS["Graphics.Canvas"] = PS["Graphics.Canvas"] || {});
(function(exports) {
  
  /**
 * 
 *  build command:
 *   pulp browserify -O --to web/example1.1.js
 */  
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_Maybe = PS["Data.Maybe"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Graphics_Canvas = PS["Graphics.Canvas"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Ring = PS["Data.Ring"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Semiring = PS["Data.Semiring"];
  var Control_Applicative = PS["Control.Applicative"];
  var Data_Unit = PS["Data.Unit"];        
  var main = function __do() {
      Control_Monad_Eff_Console.log("Loaded")();
      var v = Graphics_Canvas.getCanvasElementById("canvas")();
      if (v instanceof Data_Maybe.Nothing) {
          return Control_Monad_Eff_Console.log("No canvas element")();
      };
      if (v instanceof Data_Maybe.Just) {
          var v1 = Graphics_Canvas.getCanvasDimensions(v.value0)();
          var w = v1.width / 2.0 - 150.0;
          var h = v1.height / 2.0 + 15.0;
          var v2 = Graphics_Canvas.getContext2D(v.value0)();
          Graphics_Canvas.setFont("38pt Arial")(v2)();
          Graphics_Canvas.setFillStyle("cornflowerblue")(v2)();
          Graphics_Canvas.setStrokeStyle("blue")(v2)();
          Graphics_Canvas.fillText(v2)("Hello Canvas")(w)(h)();
          Graphics_Canvas.strokeText(v2)("Hello Canvas")(w)(h)();
          return Data_Unit.unit;
      };
      throw new Error("Failed pattern match at Main line 29, column 3 - line 41, column 12: " + [ v.constructor.name ]);
  };
  exports["main"] = main;
})(PS["Main"] = PS["Main"] || {});
PS["Main"].main();

},{}]},{},[1]);

{-
 build command:
  pulp browserify -O --to web/example1.3.js
-}
module Main where

import Prelude
import Data.Maybe (Maybe(..))
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)
import Graphics.Canvas (strokeText
                       ,fillText
                       ,setStrokeStyle
                       ,setFillStyle
                       ,setFont
                       ,getCanvasDimensions
                       ,CANVAS
                       ,getCanvasElementById
                       ,getContext2D
                       )


main :: forall e. Eff ( console :: CONSOLE
                      , canvas  :: CANVAS | e )
                      Unit
main = do
  log "Loaded"
  mb_canvas <- getCanvasElementById "canvas"
  case mb_canvas of
    Nothing     -> log "No canvas element"
    Just canvas -> do
      {width: width, height: height} <- getCanvasDimensions canvas
      let w = width /2.0 - 150.0
          h = height/2.0 + 15.0
      context <- getContext2D canvas
      setFont        "38pt Arial"     context
      setFillStyle   "cornflowerblue" context
      setStrokeStyle "blue"           context
      fillText   context "Hello Canvas" w h
      strokeText context "Hello Canvas" w h
      pure unit

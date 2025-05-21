import React from "react";

import GenerativeArt from "./GenerativeArt";

function App() {
  const [numOfLines, setNumOfLines] = React.useState(5);
  const [colorTheme, setColorTheme] = React.useState("basic");
  const [shape, setShape] = React.useState("circles");

  return (
    <>
      <GenerativeArt numOfLines={numOfLines} colorTheme={colorTheme} shape={shape} />

      <form>
        <fieldset>
          <legend>Controls</legend>
          <div className="row">
            <div className="col">
              <label htmlFor="num-of-lines" className="control-heading">
                Number of Lines:
              </label>
              <input
                id="num-of-lines"
                type="range"
                min="1"
                max="15"
                value={numOfLines}
                onChange={(evt) => setNumOfLines(evt.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="control-heading" htmlFor="color-theme">
                Color Theme:
              </label>
              <select
                id="color-theme"
                value={colorTheme}
                onChange={(evt) => setColorTheme(evt.target.value)}
              >
                <option value="basic">Basic</option>
                <option value="monochrome">Monochrome</option>
                <option value="froot-loops">Froot Loops</option>
                <option value="spooky">Spooky Night</option>
              </select>
            </div>
            <div className="col">
              <div className="control-heading">Shape:</div>
              <div className="radio-wrapper">
                <div className="radio-option">
                  <input
                    type="radio"
                    name="shape-option"
                    id="circles-shape"
                    value="circles"
                    checked={shape === "circles"}
                    onChange={(evt) => setShape(evt.target.value)}
                  />
                  <label htmlFor="circles-shape">Circles</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    name="shape-option"
                    id="polygons-shape"
                    value="polygons"
                    checked={shape === "polygons"}
                    onChange={(evt) => setShape(evt.target.value)}
                  />
                  <label htmlFor="polygons-shape">Polygons</label>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;

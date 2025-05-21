import React from 'react';
function App() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
  ]);

  const [removedColor, setRemovedColor] = React.useState([]);
  
  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  function handleAddColor() {
    let color = '#FF0000';
    const newColors = [...colors];
    if (removedColor.length > 0) {
      color = removedColor.pop();
      setRemovedColor([...removedColor]);
    }
    newColors.push(color);
    setColors(newColors);
  }

  function handleRemoveColor() {
    const newColors = [...colors];
    const color = newColors.pop();

    setRemovedColor([...removedColor, color]);
    setColors(newColors);
  }

  return (
    <div className="wrapper">
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />
      
      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>
                Color {index + 1}:
              </label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  value={color}
                  type="color"
                  onChange={evt => {
                    const newColors = [...colors];
                    newColors[index] = evt.target.value;
                    setColors(newColors);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="actions">
        <button aria-labelledby='remove-button-tooltip' onClick={handleRemoveColor} disabled={colors.length <= 2}>
          Remove color
          <span className='tooltip' role='tooltip' id='remove-button-tooltip'>Cannot remove more than 2 colors</span>
        </button>
        <button onClick={handleAddColor} disabled={colors.length >= 5}>
          Add color
          <span className='tooltip' role='tooltip' id='add-button-tooltip'>Cannot add more than 5 colors</span>
        </button>
      </div>
    </div>
  );
}

export default App;
import React from "react";
import Button from "./Button";

console.log(Button);

export default function App() {
  return (
    <div>
      <Button status="cancel">Cancel</Button>
      <Button status="confirm">Confirm</Button>
    </div>
  );
}

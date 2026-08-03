import Product from "./Product";
import Mailbox from "./Mailbox";
import Alert from "./Alert.tsx";
import Button from "./Button.tsx";

import { useState } from "react";




export default function App() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0, z: 0 });

  const updateValue = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  return (
    <>
      <h1>Products with React</h1>

      <hr/>
      <div>
        <p>x: {values.x}, y: {values.y}, z: {values.z}</p>
        <button onClick={() => updateValue("x")}>Update x</button>
        <button onClick={() => updateValue("y")}>Update y</button>
        <button onClick={() => updateValue("z")}>Update z</button>
      </div>
      <hr/>

      <div>
        <hr/>
        <Alert />
        <Alert type="success"  />
        <Alert type="error" />
        <hr/>
        <Button variant="primary" text="Login" />
        <Button variant="secondary" text="Follow" />
        <Button variant="primary" text="Login Primary">
        <hr/>
      </div>

      <Product
        name="Tacos With Lime Change"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger Edited"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <Mailbox username={"John"} messages={['one', 'sasa']} />
    </>
  );
}

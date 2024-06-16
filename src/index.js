import React from "react";
import ReactDOM from "react-dom/client";
import { Nombre } from "./Nombre";
import { Saludar } from "./Saludar";
import { Prop } from "./Props";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { ListName } from "./ListName";
import { Counter } from "./Counter";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Nombre />
        <Saludar />
        <Prop titulo="primer titulo" />
        <Prop titulo="segundo titulo" />
        <Prop titulo="último titulo" />
        <Button text="click" />
        <Button text="cancel" />
        <Button text="go back" />
        <TaskCard />
        <input onChange={(e) => {
            console.log(e.target.value)
        }}></input>
        <ListName/>
        <Counter/>

    </>
);

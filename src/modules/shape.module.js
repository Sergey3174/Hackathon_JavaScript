import { Module } from "../core/module";

export class ShapeModule extends Module {
  trigger() {
    const figure = document.createElement("div");

    const randomColor = Math.floor(Math.random() * 16777215 + 100).toString(16);
    figure.style.background = `#${randomColor}`;

    const randomFigureHeight = Math.floor(Math.random() * 600);
    figure.style.height = `${randomFigureHeight}px`;
    console.log(randomFigureHeight);

    const randomFigureWidth = Math.floor(Math.random() * 800);
    figure.style.width = `${randomFigureWidth}px`;
    console.log(randomFigureWidth);

    const marginFromTop = Math.floor(Math.random() * 400);
    figure.style.marginTop = `${marginFromTop}px`;
    console.log(marginFromTop);

    const marginFromLeft = Math.floor(Math.random() * 1000);
    figure.style.marginLeft = `${marginFromLeft}px`;
    console.log(marginFromLeft);

    const randomBorder = Math.floor(Math.random() * 100);
    figure.style.borderRadius = `${randomBorder}px`;
    console.log(randomBorder);

    document.body.append(figure);
  }
}

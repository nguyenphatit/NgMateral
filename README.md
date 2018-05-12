# Welcome to NgMateral ELearning

## Get started with project (NPM)

### Install NPM
>`npm install`

### Install JQuery
>`npm install jquery --save`

### Install Bootstrap 4.0
>`npm install bootstrap --save`

### Install PoperJS
>`npm install popper.js --save`

## Install Angular Materal (NPM)
Homepage: [Angular Materal](https://material.angular.io)
### Install Angular Material and Angular CDK
>`npm install --save @angular/material @angular/cdk`

### Install Animations
Install the `@angular/animations` module and include the `BrowserAnimationsModule` in your app
>`npm install --save @angular/animations`

Note: `@angular/animations` uses the WebAnimation API that isn't supported by all browsers yet.

>`import {BrowserAnimationsModule} from '@angular/platform-browser/animations';`

>`@NgModule({
  imports: [BrowserAnimationsModule],
  ...
})`

>`export class PizzaPartyAppModule { }`

### Import the component modules
>`import {MatButtonModule, MatCheckboxModule} from '@angular/material';`

>`@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  ...
})`

>`export class PizzaPartyAppModule { }`

### Include a theme
>`@import "~@angular/material/prebuilt-themes/indigo-pink.css";`

### Gesture Support
>`npm install --save hammerjs`

### Add Material Icons
>`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

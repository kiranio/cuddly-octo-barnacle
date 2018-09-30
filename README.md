### The shopping cart application on angular and typescript.

#### The main features: 
1. There are Product and Cart containers. 
2. The products can be added to the cart through the action "Add to cart". 
3. The cart items can be removed, Products will be added back to Container.


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Angular 6+
Typescript 2.7+
Bootstrap 3.3.7
```

### Installing

A step by step procedure to get a development env running


```
git clone https://github.com/kiranio/cuddly-octo-barnacle.git
```

Goto the directory cuddly-octo-barnacle

```
cd cuddly-octo-barnacle
```

Execute the below command to install the project

```
npm install
```

## Running the tests

Explain how to run the automated tests for this system

```
ng test
```

### Run in your development environment

Execute the below command to run the project

```
ng serve
```

## Built With

* [Typescript]
* [Angular]
* [NPM]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.0.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run "ng serve" to see the app in action.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### The below items can be improved: 
1. Offline cart (saving the state in the localStorage)
2. Test coverage, inputs validation, error handlings 
3. Track how many product items, and total value in the cart etc.
4. Use the components styled by material, bootstrap4 etc.
5. Linting, stylecheckers etc.


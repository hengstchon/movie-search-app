# MovieSearchApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Project Setup

### Environment Configuration

1. In the `src/app/environments` directory, copy `environment.template.ts` and rename it to `environment.ts`
2. Get your API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)
3. In `environment.ts`, replace `your_api_key_here` with your actual API key

```typescript
// environment.ts
export const environment = {
  omdbApiKey: 'your_api_key_here'
};

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
```

# MovieSearchApp

## How to use

### Environment Setup

1. In the `src/app/environments` directory, copy `environment.template.ts` and rename it to `environment.ts`

```shell
cp src/app/environments/environment.template.ts src/app/environments/environment.ts
```

2. Get your API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)
3. In `environment.ts`, replace `YOUR_API_KEY` with your actual API key

```typescript
// environment.ts
export const environment = {
  omdbApiKey: "YOUR_API_KEY",
};
```

### Installing Dependencies

Install project dependencies using your preferred package manager, for example:

```bash
# Install project dependencies
pnpm install
```

### Development Server

Start the development server:

```bash
pnpm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

Enjoy exploring the application! 🚀

## Development Documentation

For detailed technical implementation and development decisions, please see [Development Documentation](./dev-doc.md).

# Pokemon Bulk Code Card Scanner

This project is a very small Svelte + SvelteKit app which streamlines the pokemon code card scanning process.

The basic goal is to make digitizing your physical pokemon code cards much faster and to be able to export codes to a CSV to be further managed/tracked in your spreadsheet software of choice.

One QoL feature is for the user to select the set the code card belongs to before scanning the code. And all subsequent scans will be categorized with that set. 

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Containers

To build a container of the app, build the `Dockerfile` found in the root of the project:

```bash
docker buildx build --platform linux/amd64 -t pokemon-scanner:latest .
```

## TODO Potential Features

- [x] Sound played when a new code is scanned
- [ ] Remove a scanned code from the list
- [ ] Export as text (simple list, separated by `\n` if `.csv` files are undesireable)
- [ ] TCGPlayer store integration (to increment your stock on the code cards automatically)
- [ ] Export to Google Sheets button

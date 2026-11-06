# Neel Das — Art & Design Portfolio

A static, responsive portfolio that presents two progression stories:

1. An original middle-school red-car drawing, the artwork made in the years after it,
   and a focused four-hour revision of the same page.
2. Persona as open-ended identity experimentation, followed by a focused identity
   system for Sunrise Systems.

## Local preview

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Production build

```sh
npm run build
```

The build copies the static site into `dist/` for publication. There are no runtime
JavaScript dependencies.

## Source and ownership

The lightweight, buildless delivery approach was inspired by `ddffx/nd-art`. This
portfolio's content architecture, interface, styling, interactions, assets, and
deployment live in a separate repository. The source repository was not modified.

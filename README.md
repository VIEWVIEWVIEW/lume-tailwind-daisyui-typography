# Lume + Tailwind + Plugins

So, imo the best way to view tailwind is as an pluggable stylesheet generator. You throw directives in, it reads your source files, and gives a stylesheet back. This project is an example on how to use it in deno's [lume](https://lume.land) SSG. Read more fore the reason why I created this here: https://github.com/saadeghi/daisyui/issues/932


[Check out the demo on netlify](https://lume-tailwind-daisyui-typography.netlify.app/)

Requirements:
- node.js + npm
- deno
- tailwind-standalone for your operating system. I've uploaded the current version of tailwind standalone for windows into this repo, but  you don't use *windows*, please replace tailwindcss.exe with the corresponding binary for your system. You can use the shell scripts to download the latest version. Find the downloads here: https://github.com/tailwindlabs/tailwindcss/releases/latest



You need to run ``npm i`` in order to install all dependencies: daisyui & @tailwindcss/typography



How to use for development (watches files continously): 
```
deno task serve
```

How to create a production build:
```
deno task start
```

----

## Internals

Tailwind works as follows:

1. It reads the directives from your input stylesheet, in this case it's in ``src/styles/input.css``
2. It reads all files which match the pattern from ``tailwind.config.js``: In this case all files in ``./src`` ending on ``{tsx,ts,md,html,njk}``
3. Now it matches all classnames it finds in .tsx, .ts, .md files etc. It notes every classname which is used
4. It generates css according to what classnames it finds. This is being output to ``_site/styles/tailwind.css``

Since Tailwind is so flexible and only outputs a static stylesheet, we can leverage this to use Tailwind any **any tailwind plugin** in any kind of project. Be it in node, deno, rust, c++ or whatever.
You can just ``npm install`` the tailwind plugin you want and use it straight away. There is no need to opt for other options like twind unless you want to JIT, which is probably the case for less then 0.0001% of the users.

Files you might want to take a look at:
- tailwind.config.js - for tailwind configuration
- /src/styles/input.css - all tailwind directives are stored here
- /src/index.md
- /src/_includes/layouts/main.njk
- deno.json - for how tailwind standalone is called
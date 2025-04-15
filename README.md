# meowpa.ws
[meowpa.ws](https://meowpa.ws) is my personal page written in [Next.js](https://nextjs.org).

## Development
In this example I'm gonna use [bun](https://bun.sh/) as a package manager and runtime as well as and [git](https://git-scm.com/) for cloning the repo.
```bash
# Clone repo
$ git clone https://github.com/meowabyte/meowabyte.github.io

# Navigate to the project directory
$ cd "meowabyte.github.io"

# Install requirements
$ bun install

# Run development server
$ bun dev
```
If you made everything correctly, your dev server should run on `http://localhost:3000` (Please check terminal if it's otherwise)

## Building
Considering you've followed [steps above](#development) you probably wonder how to build it? It's quite easy.
```bash
# Build the project
$ bun build
```
And to see final results (where unlike with `bun dev` you'd have dev enviornment - with `bun build` you have already optimized files) just run `bun serve` which I included myself to the project.
> [!IMPORTANT]  
> Since I'm using [static export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) in the project to be able to host it on GitHub Pages, you need to host it on static server. Built-in `bun start` won't work as it works only for standalone/next server.

## Licensing
As stated in [LICENSE file](/LICENSE), you can edit, modify or publish the code I included in here in any way as long as you provide any credit to it.
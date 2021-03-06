# webapp-template

Web application template using Webpack5, ReScript, TypeScript, and React.

This template is for minimalists who think create-react-app is too
complex.

The sample program is written in ReScript and TypeScript for explanation,
but you can use only one of them.

## How to use

### Production mode

```
$ yarn build
```

### Development mode

```
$ yarn start
```

## Use with [docker-buildenv](https://github.com/anyakichi/docker-buildenv)

Build and run from a container.

```
$ mkdir webapp-template-1 && cd $_
$ din anyakichi/webapp-template-builder
builder@webapp-template-1:/build$ extract
builder@webapp-template-1:/build$ build
builder@webapp-template-1:/build$ run
```

Or from your host machine.

```
$ din anyakichi/webapp-template-builder extract
$ din anyakichi/webapp-template-builder build
$ din anyakichi/webapp-template-builder run
```

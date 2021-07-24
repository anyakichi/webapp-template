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
$ din anyakichi/webapp-template:main
builder@webapp-template-1:/build$ extract
builder@webapp-template-1:/build$ build
builder@webapp-template-1:/build$ run
```

Or from your host machine.

```
$ din anyakichi/webapp-template:main extract
$ din anyakichi/webapp-template:main build
$ din anyakichi/webapp-template:main run
```

## Preview with Docker

Preview contents with the pre-built image. Python's http.server is used
as a web server and don't use it in production environment.

```
$ docker run --rm -it -p 8080:8080 anyakichi/webapp-template:main run -y
```

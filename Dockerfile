FROM anyakichi/yarn-builder:lts

ENV \
  GIT_REPO="https://github.com/anyakichi/webapp-template.git"

COPY \
  bsconfig.json \
  package.json \
  postcss.config.js \
  tsconfig.json \
  webpack.config.js \
  yarn.lock \
  /build/
COPY src /build/src/
RUN chown -R builder:builder /build

USER builder
RUN \
  (cd /build && yarn install && yarn build) \
  && mv /build/dist /home/builder/dist

USER root
WORKDIR /home/builder/dist
RUN \
  echo '$ if [[ $PWD == /home/builder/dist ]]; then python3 -m http.server 8080; exit 0; fi' \
    >/etc/buildenv.d/run.30.md \
  && rm -rf /build

EXPOSE 8000

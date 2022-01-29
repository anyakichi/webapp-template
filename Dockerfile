FROM anyakichi/yarn-builder:lts AS builder

COPY \
  *.config.js \
  *.json \
  yarn.lock \
  /build/
COPY src /build/src/
RUN chown -R builder:builder /build

WORKDIR /build
USER builder
RUN yarn install && yarn build


FROM anyakichi/yarn-builder:lts

ENV \
  GIT_REPO="https://github.com/anyakichi/webapp-template.git"

COPY --from=builder /build/dist /home/builder/dist
WORKDIR /home/builder/dist

RUN \
  echo '$ if [[ $PWD == /home/builder/dist ]]; then python3 -m http.server 8080; exit 0; fi' \
    >/etc/buildenv.d/run.30.md

EXPOSE 8000

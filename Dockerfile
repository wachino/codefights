FROM ruby:2.5-alpine

RUN apk add --no-cache build-base git cmake

WORKDIR /usr/src/app

COPY Gemfile* ./

RUN bundle install

COPY . .

EXPOSE 4000

CMD bundle exec jekyll serve -H 0.0.0.0 -P 4000
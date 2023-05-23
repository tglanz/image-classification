FROM node:20-alpine3.16

COPY . /backend
WORKDIR /backend

RUN npm install
RUN npm run build

# ENTRYPOINT /bin/bash
# CMD node /backend/dist/index.js

CMD ["npm", "start"]

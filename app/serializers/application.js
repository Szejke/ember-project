import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      posts: {
        id: payload.id,
        name: payload.title,
      },
    };

    console.log(payload);

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
}

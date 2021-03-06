import rest from 'rest';
import defaultRequest  from 'rest/interceptor/defaultRequest';
import mime  from 'rest/interceptor/mime';
import uriTemplateInterceptor  from './uriTemplateInterceptor';
import errorCode  from 'rest/interceptor/errorCode';
import baseRegistry  from 'rest/mime/registry';
import hal from 'rest/mime/type/application/hal';
import uriListConverter from "./uriListConverter";

const registry = baseRegistry.child();

registry.register('text/uri-list', uriListConverter);
registry.register('application/hal+json', hal);

module.exports = rest
		.wrap(mime, { registry: registry })
		.wrap(uriTemplateInterceptor)
		.wrap(errorCode)
		.wrap(defaultRequest, { headers: { 'Accept': 'application/hal+json' }});

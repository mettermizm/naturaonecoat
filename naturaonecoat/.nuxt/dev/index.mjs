globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'http';
import { tmpdir } from 'os';
import { join } from 'path';
import { mkdirSync } from 'fs';
import { parentPort, threadId } from 'worker_threads';
import { provider, isWindows } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/std-env/dist/index.mjs';
import { eventHandler, defineEventHandler, handleCacheHeaders, createEvent, createError, createApp, createRouter, lazyEventHandler, getQuery } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/h3/dist/index.mjs';
import { z, parseDataAs, parseParamsAs, parseBodyAs } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/@sidebase/nuxt-parse/dist/index.mjs';
import { createRenderer } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import devalue from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { renderToString } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/vue/server-renderer/index.mjs';
import { parseURL, withQuery, joinURL } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/ufo/dist/index.mjs';
import destr from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/destr/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/scule/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/ohmyfetch/dist/node.mjs';
import { createRouter as createRouter$1 } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/radix3/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/hookable/dist/index.mjs';
import { hash } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/ohash/dist/index.mjs';
import { createStorage } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/unstorage/dist/drivers/fs.mjs';
import { defineNitroPlugin } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/nitropack/dist/runtime/plugin.mjs';
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, DataSource } from 'file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/typeorm/index.mjs';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const serverAssets = [{"baseName":"server","dir":"C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\mehme\\Documents\\GitHub\\naturaonecoat\\naturaonecoat","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\mehme\\Documents\\GitHub\\naturaonecoat\\naturaonecoat\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\mehme\\Documents\\GitHub\\naturaonecoat\\naturaonecoat\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\mehme\\Documents\\GitHub\\naturaonecoat\\naturaonecoat\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.req.url.endsWith("/favicon.ico")) {
      event.res.setHeader("Content-Type", "image/x-icon");
      event.res.end("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.res.writableEnded) {
        event.res.statusCode = event.res.statusCode === 200 ? 500 : event.res.statusCode;
        event.res.end("No response returned from render handler: " + event.req.url);
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.res.setHeader(header, response.headers[header]);
      }
      if (response.statusCode) {
        event.res.statusCode = response.statusCode;
      }
      if (response.statusMessage) {
        event.res.statusMessage = response.statusMessage;
      }
    }
    if (!event.res.writableEnded) {
      event.res.end(typeof response.body === "string" ? response.body : JSON.stringify(response.body));
    }
  });
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
class Base extends BaseEntity {
  async update(object) {
    for (const [key, value] of Object.entries(object)) {
      this[key] = value;
    }
    await this.save();
    return this;
  }
  static async findOneOrThrow(options = {}) {
    let result;
    try {
      result = await this.getRepository().findOneOrFail(options);
    } catch (error) {
      console.error(error);
      throw createError({ statusCode: 404, statusMessage: "Failed to find desired record" });
    }
    return result;
  }
  static async findMany(options = {}) {
    const result = await this.getRepository().find(options);
    return result;
  }
}
__decorateClass$1([
  PrimaryGeneratedColumn("uuid")
], Base.prototype, "id", 2);

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let Example = class extends Base {
};
__decorateClass([
  Column("text")
], Example.prototype, "description", 2);
__decorateClass([
  Column("text")
], Example.prototype, "details", 2);
Example = __decorateClass([
  Entity()
], Example);
const exampleUpdate = z.object({
  description: z.string().optional(),
  details: z.string().optional()
});
const exampleFull = z.instanceof(Example);

const isProduction = false;

const AppDataSource = new DataSource({
  type: "sqlite",
  synchronize: !isProduction || true,
  logging: false,
  database: ":memory:",
  entities: [Example]
});
const initialize = async () => {
  console.log("DB: Initializing DB connection");
  if (AppDataSource.isInitialized) {
    console.log("DB: Already initialized");
    return;
  }
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.trace("DB: Failed to initialized database", error);
    if (isProduction) {
      process.exit(1);
    }
    throw error;
  }
  console.log("DB: Successfully initialized database connection");
};

const _otTrkcyJ7a = defineNitroPlugin(async () => initialize());

const plugins = [
  _otTrkcyJ7a
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/node_modules/@nuxt/ui-templates/dist/templates/error-dev.mjs') ;
    {
      errorObject.description = errorObject.message;
    }
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const _lazy_fpBFxI = () => Promise.resolve().then(function () { return healthz_get$1; });
const _lazy_ORa5yw = () => Promise.resolve().then(function () { return index$1; });
const _lazy_exoJaA = () => Promise.resolve().then(function () { return _id__patch$1; });
const _lazy_SYf2YH = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_lUTTBx = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/healthz', handler: _lazy_fpBFxI, lazy: true, middleware: false, method: "get" },
  { route: '/api/example', handler: _lazy_ORa5yw, lazy: true, middleware: false, method: undefined },
  { route: '/api/example/:id', handler: _lazy_exoJaA, lazy: true, middleware: false, method: "patch" },
  { route: '/api/example/:id', handler: _lazy_SYf2YH, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_lUTTBx, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_lUTTBx, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(nitroApp.h3App.nodeHandler);
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection]", err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException]", err));
}

const startupTime = new Date();
const healthz_get = defineEventHandler(() => {
  if (!AppDataSource.isInitialized) {
    console.error("Healthcheck failed: DB connection not initialized");
    throw createError({ statusCode: 500 });
  }
  return {
    status: "healthy",
    time: new Date(),
    startupTime,
    nuxtAppVersion: process.env.NUXT_APP_VERSION || process.env.npm_package_version || "unknown"
  };
});

const healthz_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': healthz_get
});

const index = defineEventHandler(async () => parseDataAs(Example.findMany(), z.array(exampleFull)));

const index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': index
});

const paramsSchema$1 = z.object({
  id: z.string().uuid()
});
const _id__patch = defineEventHandler(async (event) => {
  const params = parseParamsAs(event, paramsSchema$1);
  const exampleToUpdate = await Example.findOneOrThrow({ where: { id: params.id } });
  const payload = await parseBodyAs(event, exampleUpdate);
  const updatedExample = await exampleToUpdate.update(payload);
  return parseDataAs(updatedExample, exampleFull);
});

const _id__patch$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _id__patch
});

const paramsSchema = z.object({
  id: z.string().uuid()
});
const _id__get = defineEventHandler(async (event) => {
  const params = parseParamsAs(event, paramsSchema);
  return parseDataAs(Example.findOneOrThrow({ where: { id: params.id } }), exampleFull);
});

const _id__get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _id__get
});

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const getClientManifest = () => import('file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://C:/Users/mehme/Documents/GitHub/naturaonecoat/naturaonecoat/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<div id="__nuxt">${html}</div>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const options = {
    manifest,
    renderToString: () => '<div id="__nuxt"></div>',
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      },
      data: {},
      state: {}
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? (() => ({}));
    return Promise.resolve(result);
  };
  return { renderToString };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.js(\?.*)?$/;
const renderer = defineRenderHandler(async (event) => {
  const ssrError = event.req.url?.startsWith("/__nuxt_error") ? getQuery(event) : null;
  let url = ssrError?.url || event.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.req.url = url;
  }
  const ssrContext = {
    url,
    event,
    req: event.req,
    res: event.res,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!event.req.headers["x-nuxt-no-ssr"] || (false),
    error: !!ssrError,
    nuxt: void 0,
    payload: ssrError ? { error: ssrError } : {}
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch((err) => {
    if (!ssrError) {
      throw ssrContext.payload?.error || err;
    }
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext });
  if (!_rendered) {
    return void 0;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = "";
  const htmlContext = {
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null,
      _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPreprend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [
      _rendered.html
    ],
    bodyAppend: normalizeChunks([
      `<script>window.__NUXT__=${devalue(ssrContext.payload)}<\/script>`,
      _rendered.renderScripts(),
      renderedMeta.bodyScripts
    ])
  };
  const nitroApp = useNitroApp();
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.res.statusCode,
    statusMessage: event.res.statusMessage,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "X-Powered-By": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPreprend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: `export default ${devalue(splitPayload(ssrContext).payload)}`,
    statusCode: ssrContext.event.res.statusCode,
    statusMessage: ssrContext.event.res.statusMessage,
    headers: {
      "content-type": "text/javascript;charset=UTF-8",
      "x-powered-by": "Nuxt"
    }
  };
}
function splitPayload(ssrContext) {
  const { data, state, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, state, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': renderer
});
//# sourceMappingURL=index.mjs.map

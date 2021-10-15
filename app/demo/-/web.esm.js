"use strict";
function require( path ){ return $node[ path ] };
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || ( typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this )
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.js.map
;

$node[ "../mam" ] = $node[ "../mam.js" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_offline(uri = 'web.js') {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                self['skipWaiting']();
            });
            self.addEventListener('activate', (event) => {
                self['clients'].claim();
                console.info('$mol_offline activated');
            });
            self.addEventListener('fetch', (event) => {
                event.respondWith(fetch(event.request)
                    .then(response => {
                    if (event.request.method !== 'GET')
                        return response;
                    event.waitUntil(caches.open('v1')
                        .then(cache => cache.put(event.request, response)));
                    return response.clone();
                })
                    .catch(error => {
                    return caches.match(event.request)
                        .catch(error2 => $.$mol_fail_hidden(error));
                }));
            });
            self.addEventListener('beforeinstallprompt', (event) => {
                console.log(event);
                event.prompt();
            });
        }
        if (location.protocol !== 'about:') {
            if (navigator.serviceWorker)
                navigator.serviceWorker.register(uri);
            else if (location.protocol === 'http:')
                console.warn('HTTPS is required for service workers.');
            else
                console.warn('Service Worker is not supported.');
        }
    }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//offline.web.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_offline();
})($ || ($ = {}));
//install.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//delegate.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $.$mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
//writable.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [$.$mol_ambient_ref] = null;
        get $() {
            if (this[$.$mol_ambient_ref])
                return this[$.$mol_ambient_ref];
            const owner = $.$mol_owning_get(this);
            return this[$.$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$.$mol_ambient_ref])
                $.$mol_fail_hidden(new Error('Context already defined'));
            this[$.$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        [Symbol.toPrimitive](hint) {
            return hint === 'number' ? this.valueOf() : this.toString();
        }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $.$mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//tick.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//context.web.js.map
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $.$mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $.$mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//decor.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $.$mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//unit.js.map
;
"use strict";
var $;
(function ($) {
    const { per } = $.$mol_style_unit;
    class $mol_style_func extends $.$mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//func.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/theme/theme.css", "[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n[mol_theme=\"$mol_theme_light\"] , :root {\n\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t--mol_theme_text: hsl( 0 , 0% , 0% );\n\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t--mol_theme_focus: hsl( 290 , 70% , 50% );\n\t--mol_theme_field: white;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t--mol_theme_hover: rgba( 255 , 255 , 255 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 30% );\n\t--mol_theme_text: hsl( 0 , 0% , 80% );\n\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_focus: hsl( 60 , 100% , 70% );\n\t--mol_theme_field: black;\n\t--mol_theme_image: invert(1) hue-rotate(180deg);\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_hover: hsla( 210 , 60% , 20% , 1 );\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: white;\n\t--mol_theme_control: white;\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: hsl( 15 , 60% , 50% );\n\t--mol_theme_hover: hsl( 15 , 60% , 40% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_control: white;\n\t--mol_theme_focus: black;\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n\t--mol_theme_text: white;\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        current: vary('--mol_theme_current'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//theme.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/skin/skin.css", ":root {\n\t--mol_skin_font: 16px/24px Segoe UI, sans-serif;\n\t/* --mol_skin_font_monospace: Monaco, monospace; */\n\t--mol_skin_font_monospace: monospace;\n}\n\n/* Deprecated, use mol_theme instead */\n:root {\n\n\t--mol_skin_outline: 0 0 0 1px var(--mol_theme_line);\n\t\n\t--mol_skin_base: #3a8ccb;\n\t--mol_skin_base_text: white;\n\t\n\t--mol_skin_current: var(--mol_skin_base);\n\t--mol_skin_current_text: white;\n\t--mol_skin_current_line: #1471b8;\n\t\n\t--mol_skin_button: var(--mol_skin_card);\n\t--mol_skin_hover: rgba( 0 , 0 , 0 , .05 );\n\t\n\t--mol_skin_round: 0px;\n\t\n\t--mol_skin_focus_line: rgba( 0 , 0 , 0 , .2 );\n\t--mol_skin_focus_outline: 0 0 0 1px var(--mol_skin_focus_line);\n\t\n\t--mol_skin_float: var(--mol_skin_focus_outline);\n\n\t--mol_skin_passive: #eee;\n\t--mol_skin_passive_text: rgba( 0 , 0 , 0 , .5 );\n\t\n\t--mol_skin_light: #fcfcfc;\n\t--mol_skin_light_line: rgba( 230 , 230 , 230 , .75 );\n\t--mol_skin_light_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_skin_light_hover: #f7f7f7;\n\t--mol_skin_light_outline: 0 0 0 1px var(--mol_theme_line);\n\n\t--mol_skin_card: var(--mol_theme_back);\n\t--mol_skin_card_text: var(--mol_theme_text);\n\t\n\t--mol_skin_accent: #dd0e3e;\n\t--mol_skin_accent_text: white;\n\t--mol_skin_accent_hover: #c50d37;\n\n\t--mol_skin_warn: rgba( 255 , 50 , 50 , 0.75 );\n\t--mol_skin_warn_text: white;\n\t--mol_skin_warn_hover: color( var(--mol_skin_warn) lightness(-5%) );\n\n\t--mol_skin_good: #96DAA9;\n\t--mol_skin_good_text: black;\n\n\t--mol_skin_bad: #CC5252;\n\t--mol_skin_bad_text: white;\n}\n");
})($ || ($ = {}));
//skin.css.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $_1.$mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//log3.js.map
;
"use strict";
//extract.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_web_make(level, color) {
        return function $mol_log3_logger(event) {
            const pending = this.$mol_log3_stack.pop();
            if (pending)
                pending();
            let tpl = '%c';
            const chunks = Object.values(event);
            for (let i = 0; i < chunks.length; ++i) {
                tpl += (typeof chunks[i] === 'string') ? ' ⦙ %s' : ' ⦙ %o';
            }
            const style = `color:${color};font-weight:bolder`;
            this.console[level](tpl, style, ...chunks);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_web_make = $mol_log3_web_make;
    $.$mol_log3_come = $mol_log3_web_make('info', 'royalblue');
    $.$mol_log3_done = $mol_log3_web_make('info', 'forestgreen');
    $.$mol_log3_fail = $mol_log3_web_make('error', 'orangered');
    $.$mol_log3_warn = $mol_log3_web_make('warn', 'goldenrod');
    $.$mol_log3_rise = $mol_log3_web_make('log', 'magenta');
    $.$mol_log3_area = $mol_log3_web_make('group', 'cyan');
})($ || ($ = {}));
//log3.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $.$mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => requestAnimationFrame(() => {
                this._promise = null;
                done();
            }));
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.web.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if (Object.is(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!Object.is(source[i], target[i]))
                return target;
        }
        return source;
    }
    $.$mol_conform_array = $mol_conform_array;
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(({})['constructor'], (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!Object.is(conformed, target[key]))
                    equal = false;
            }
            if (!Object.is(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//format.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_func',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.func instead',
        });
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            fiber[Symbol.toStringTag] = wrapper[Symbol.toStringTag];
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_method',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.method instead',
        });
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_async(task) {
        return (...args) => new Promise($mol_fiber_root((done, fail) => {
            try {
                done(task(...args));
            }
            catch (error) {
                if ('then' in error)
                    return $.$mol_fail_hidden(error);
                fail(error);
            }
        }));
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then((next) => master.push(next), (error) => master.fail(error));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            return $mol_fiber.func(wrapped);
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber extends $.$mol_wrapper {
        static logs = false;
        static wrap(task) {
            return function $mol_fiber_wrapper(...args) {
                const slave = $mol_fiber.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber) {
                    master = new $mol_fiber;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static quant = 16;
        static deadline = 0;
        static liveline = 0;
        static current = null;
        static scheduled = null;
        static queue = [];
        static async tick() {
            while ($mol_fiber.queue.length > 0) {
                const now = Date.now();
                if (now >= $mol_fiber.deadline) {
                    $mol_fiber.schedule();
                    $mol_fiber.liveline = now;
                    return;
                }
                const task = $mol_fiber.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber.scheduled) {
                $mol_fiber.scheduled = new $.$mol_after_frame(async () => {
                    const now = Date.now();
                    let quant = $mol_fiber.quant;
                    if ($mol_fiber.liveline) {
                        quant = Math.max(quant, Math.floor((now - $mol_fiber.liveline) / 2));
                        $mol_fiber.liveline = 0;
                    }
                    $mol_fiber.deadline = now + quant;
                    $mol_fiber.scheduled = null;
                    await $mol_fiber.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(null), promise)));
            return promise;
        }
        cursor = 0;
        masters = [];
        calculate;
        _value = undefined;
        get value() { return this._value; }
        set value(next) {
            this._value = next;
        }
        _error = null;
        get error() { return this._error; }
        set error(next) {
            this._error = next;
        }
        schedule() {
            $mol_fiber.schedule().then(() => this.wake());
        }
        wake() {
            const unscoupe = this.$.$mol_log3_area_lazy({
                place: this,
                message: 'Wake'
            });
            try {
                if (this.cursor > -2)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
            finally {
                unscoupe();
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (this.error !== null || !Object.is(this.value, value)) {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Changed',
                        next: value,
                        value: this.value,
                        error: this.error,
                    });
                this.obsolete_slaves();
                this.forget();
            }
            else {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Same value',
                        value,
                    });
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            if ($mol_fiber.logs)
                this.$.$mol_log3_fail({
                    place: this,
                    message: error.message,
                });
            this.error = error;
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            if ($mol_fiber.logs)
                this.$.$mol_log3_warn({
                    place: this,
                    message: `Wait`,
                    hint: `Don't panic, it's normal`,
                    promise,
                });
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            if ($mol_fiber.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Pull',
                });
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber.current;
            try {
                $mol_fiber.current = this;
                this.pull();
            }
            catch (error) {
                if (Object(error) !== error)
                    error = new Error(error);
                if ('then' in error) {
                    if (!slave) {
                        const listener = () => this.wake();
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber.current = slave;
            }
        }
        get() {
            if (this.cursor > 0) {
                this.$.$mol_fail(new Error(`Cyclic dependency at ${this}`));
            }
            const slave = $mol_fiber.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error !== null)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber.deadline)
                return;
            if (!$mol_fiber.current)
                return;
            if (Date.now() < $mol_fiber.deadline)
                return;
            this.$.$mol_fail_hidden($mol_fiber.schedule());
        }
        get master() {
            return (this.cursor < this.masters.length ? this.masters[this.cursor] : undefined);
        }
        set master(next) {
            if (this.cursor === -1)
                return;
            const cursor = this.cursor;
            const prev = this.master;
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_fiber.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Destructed',
                });
            this.complete();
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_native(this);
        }
    }
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_value(task, next) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            $mol_atom2.cached_next = next;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    class $mol_atom2 extends $.$mol_fiber {
        static logs = false;
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2)
                return atom;
            return null;
        }
        static cached = false;
        static cached_next = undefined;
        static reap_task = null;
        static reap_queue = [];
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        slaves = [];
        rescue(master, cursor) {
            if (!(master instanceof $mol_atom2))
                return;
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        subscribe(promise) {
            const obsolete = () => this.obsolete();
            return promise.then(obsolete, obsolete);
        }
        get() {
            if ($mol_atom2.cached) {
                if ($mol_atom2.cached_next !== undefined) {
                    this.push($mol_atom2.cached_next);
                    $mol_atom2.cached_next = undefined;
                }
                return this.value;
            }
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0)
                return super.pull();
            if ($mol_atom2.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Check doubt masters',
                });
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                if ($mol_atom2.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Obsoleted while checking',
                    });
                return super.pull();
            }
            if ($mol_atom2.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Masters not changed',
                });
            this.cursor = -2;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                try {
                    next[Symbol.toStringTag] = this[Symbol.toStringTag];
                }
                catch { }
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._error = next;
        }
        put(next) {
            this.cursor = this.masters.length;
            next = this.push(next);
            this.cursor = -3;
            return next;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Leads',
                    slave,
                });
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Disleads',
                    slave: this.slaves[slave_index],
                });
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Obsoleted',
                });
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Doubted',
                });
            this.cursor = -1;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return () => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            };
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Destructed'
                });
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    }
    $.$mol_atom2 = $mol_atom2;
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
//param.js.map
;
"use strict";
//result.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() { super(); }
        $mol_mem_force = true;
        static $mol_mem_force = true;
        static toString() { return this.name; }
    }
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//force.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $.$mol_atom2_value;
    function $mol_mem_persist() {
        const atom = $.$mol_atom2.current;
        if (!atom)
            return;
        if (atom.hasOwnProperty('destructor'))
            return;
        atom.destructor = () => { };
    }
    $.$mol_mem_persist = $mol_mem_persist;
    function $mol_mem(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const orig = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2.calculate = orig.bind(host);
            cache2[Symbol.toStringTag] = `${host}.${name}()`;
            cache2.abort = () => {
                store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            store.set(host, cache2);
            return cache2;
        };
        function value(next, force) {
            if (next === undefined) {
                const cache = get_cache(this);
                if (force === $.$mol_mem_force_cache)
                    return cache.obsolete(Number.NaN);
                if ($.$mol_atom2.current)
                    return cache.get();
                else
                    return $.$mol_fiber.run(() => cache.get());
            }
            return $.$mol_fiber.run(() => {
                if (force === $.$mol_mem_force_fail)
                    return get_cache(this).fail(next);
                if (force !== $.$mol_mem_force_cache)
                    next = orig.call(this, next);
                return get_cache(this).put(next);
            });
        }
        return {
            ...descr || {},
            value: Object.assign(value, { orig })
        };
    }
    $.$mol_mem = $mol_mem;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next, force) {
            return next || {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_window, "size", null);
    $.$mol_window = $mol_window;
    const $mol_window_resize = () => {
        $mol_window.size(undefined, $.$mol_mem_force_cache);
    };
    self.addEventListener('resize', $.$mol_fiber_root($mol_window_resize));
})($ || ($ = {}));
//window.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        if (Array.isArray(value))
            return JSON.stringify(value);
        if (Object.getPrototypeOf(Object.getPrototypeOf(value)) === null)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem_key(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host, key) => {
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new Map);
            const key_str = $.$mol_key(key);
            let cache = dict.get(key_str);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2[Symbol.toStringTag] = `${host}.${name}(${key_str})`;
            cache2.calculate = value.bind(host, key);
            cache2.abort = () => {
                dict.delete(key_str);
                if (dict.size === 0)
                    store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            dict.set(key_str, cache2);
            return cache2;
        };
        return {
            value(key, next, force) {
                if (next === undefined) {
                    const cache = get_cache(this, key);
                    if (force === $.$mol_mem_force_cache)
                        return cache.obsolete();
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this, key).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, key, next);
                    return get_cache(this, key).put(next);
                });
            }
        };
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.create(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            if (Symbol.toStringTag in calculate) {
                atom[Symbol.toStringTag] = calculate[Symbol.toStringTag];
            }
            else {
                atom[Symbol.toStringTag] = calculate.name || '$mol_atom2_autorun';
            }
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            $.$mol_fiber_defer(() => {
                const element = $.$mol_mem_cached(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            });
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            const elements = $.$mol_mem_cached(() => this.focused());
            if (elements && elements[0] === event.target)
                this.focused([]);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        $.$mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            new $.$mol_after_tick($.$mol_fiber_root(() => $.$mol_view_selection.focus(event)));
        }, true);
        $.$mol_dom_context.document.documentElement.addEventListener('blur', (event) => {
            new $.$mol_after_timeout(0, $.$mol_fiber_root(() => $.$mol_view_selection.blur(event)));
        }, true);
    }
})($ || ($ = {}));
//selection.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//qname.js.map
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//catch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $.$mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//memo.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return (host, field, descr) => {
            const value = descr.value;
            let warned = false;
            descr.value = function $mol_deprecated_wrapper(...args) {
                if (!warned) {
                    $.$$.$mol_log3_warn({
                        place: `${host.constructor.name}::${field}`,
                        message: `Deprecated`,
                        hint: message,
                    });
                    warned = true;
                }
                return value.call(this, ...args);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
//pick.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            return $.$mol_atom2_autorun(() => {
                this.dom_tree();
                document.title = this.title();
                return this;
            });
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $.$mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            try {
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                }
                else if ($.$mol_fail_catch(error)) {
                    console.error(error);
                }
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                }
                else if ($.$mol_fail_catch(error)) {
                    console.error(error);
                }
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($.$mol_atom2.current)
                this.view_rect_watcher();
            return this.view_rect_cache();
        }
        view_rect_cache(next = null) {
            return next;
        }
        view_rect_watcher() {
            $mol_view.watchers.add(this);
            return { destructor: () => $mol_view.watchers.delete(this) };
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $.$mol_const('<#' + id + '>');
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $.$mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $.$mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                    return node;
                }
                if ($.$mol_fail_catch(error)) {
                    try {
                        void (node.innerText = error.message);
                    }
                    catch (e) { }
                    console.error(error);
                }
            }
            this.auto();
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $.$mol_dom_render_styles(node, {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            });
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $.$mol_dom_render_attributes(node, attr);
            $.$mol_dom_render_styles(node, style);
            return node;
        }
        auto() { }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $.$mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $.$mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $.$mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $.$mol_owning_get(this, $mol_view);
            if (owner instanceof $mol_view) {
                const suffix = this[$.$mol_object_field];
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto($.$mol_mem_cached(() => this.sub())));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            for (const item of this.sub()) {
                if (item instanceof $mol_view) {
                    yield* item.view_find(check, [...path, this]);
                }
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        async ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            await $.$mol_fiber_warp();
            view.dom_node().scrollIntoView({ block: align });
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_cache", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_deprecated('Use $mol_view::event instead.')
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\tcontain: style;\n\ttab-size: 4;\n}\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_current);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont: var(--mol_skin_font);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t135deg,\n\t\thsl(0, 30%, 60%),\n\t\thsl(0, 30%, 60%) 11px,\n\t\thsl(60, 100%, 90%) 10px,\n\t\thsl(60, 100%, 90%) 20px\n\t);\n\tbackground-size: 28px 28px;\n\tcolor: black;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//view.css.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        const event_name = self.cordova ? 'deviceready' : 'DOMContentLoaded';
        Promise.resolve().then($.$mol_fiber_root(() => {
            $.$mol_view.autobind();
            $.$mol_fiber_warp();
        }));
        function $mol_view_watch() {
            $.$mol_fiber_unlimit(() => {
                new $.$mol_after_frame(watch);
                for (const view of $.$mol_view.watchers) {
                    view.view_rect_cache(view.dom_node().getBoundingClientRect().toJSON());
                }
            });
        }
        const watch_task = $.$mol_fiber_root($mol_view_watch);
        const watch = () => {
            const logs = $.$mol_fiber.logs;
            $.$mol_fiber.logs = false;
            watch_task();
            $.$mol_fiber.logs = logs;
        };
        watch();
    }
})($ || ($ = {}));
//view.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_support_css_overflow_anchor() {
        return this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false;
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $.$mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//listener.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $.$mol_object {
        static before() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//print.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n \n[mol_list] > * {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//list.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window() {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                let [min, max] = $.$mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const rect = this.view_rect();
                const gap_before = $.$mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $.$mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        if (error instanceof Promise) {
                            $.$mol_atom2.current.subscribe(error);
                        }
                        else if ($.$mol_fail_catch(error)) {
                            console.error(error);
                        }
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        $.$mol_mem_cached(() => this.view_window(), [index, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_card extends $.$mol_list {
        attr() {
            return {
                ...super.attr(),
                mol_card_status_type: this.status()
            };
        }
        rows() {
            return [
                this.Content(),
                this.Status()
            ];
        }
        status() {
            return "";
        }
        content() {
            return [
                this.title()
            ];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.content();
            return obj;
        }
        status_text() {
            return this.status();
        }
        Status() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 30;
            obj.sub = () => [
                this.status_text()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_card.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_card.prototype, "Status", null);
    $.$mol_card = $mol_card;
})($ || ($ = {}));
//card.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n}\n");
})($ || ($ = {}));
//gap.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
    };
})($ || ($ = {}));
//gap.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/card/card.view.css", "[mol_card] {\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tborder-radius: var(--mol_gap_round);\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tflex-direction: column;\n}\n\n[mol_card_content] {\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tmargin: 0;\n\tpadding: var(--mol_gap_block);\n}\n\n[mol_card_status] {\n\tbackground: var(--mol_theme_line);\n\ttext-transform: capitalize;\n\tpadding: var(--mol_gap_text);\n\tmargin: 0;\n}\n\n[mol_card_status] {\n\tbackground: var(--mol_theme_line);\n}\n");
})($ || ($ = {}));
//card.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_card extends $.$mol_card {
            rows() {
                return [
                    this.Content(),
                    ...this.status_text() ? [this.Status()] : [],
                ];
            }
        }
        $$.$mol_card = $mol_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//card.view.js.map
;
"use strict";
//error.js.map
;
"use strict";
//override.js.map
;
"use strict";
//properties.js.map
;
"use strict";
//class.js.map
;
"use strict";
//element.js.map
;
"use strict";
//guard.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $.$mol_dom_qname($.$mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                return `${prefix ? prefix + ' ' : ''}[${block}_${path.join('_')}]`;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' [' + $.$mol_dom_qname(key) + ']', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > [' + $.$mol_dom_qname(type) + ']', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + '[' + name + '=' + JSON.stringify(val) + ']', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//sheet.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $.$mol_style_attach(Component.name, $.$mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//define.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri(),
                title: this.hint(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        prefix;
        static href(next, force) {
            if (next === undefined) {
                next = $.$mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                history.replaceState(history.state, $.$mol_dom_context.document.title, next);
            }
            if ($.$mol_dom_context.parent !== $.$mol_dom_context.self) {
                $.$mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    continue;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), $.$mol_dom_context.location.href).toString();
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
    const $mol_state_arg_change = (event) => {
        $mol_state_arg.href($.$mol_dom_context.location.href);
    };
    self.addEventListener('hashchange', $.$mol_fiber_root($mol_state_arg_change));
})($ || ($ = {}));
//arg.web.js.map
;
"use strict";
var $;
(function ($) {
    const { rem } = $.$mol_style_unit;
    $.$mol_style_define($.$mol_link, {
        textDecoration: 'none',
        color: $.$mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $.$mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        border: {
            radius: $.$mol_gap.round,
        },
        ':hover': {
            background: {
                color: $.$mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $.$mol_theme.focus,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                const arg = this.arg();
                const uri = new this.$.$mol_state_arg(this.state_key()).link(arg);
                if (uri !== this.$.$mol_state_arg.href())
                    return uri;
                const arg2 = {};
                for (let i in arg)
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                this.focused(false);
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 40);
            }
            target() {
                return (this.uri_native().origin === $.$mol_dom_context.location.origin) ? '_self' : '_blank';
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $.$mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//speck.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -.75em .5em;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: 2;\n    text-align: center;\n    line-height: 1;\n    display: inline-block;\n\ttext-shadow: 1px 1px 0 black;\n}\n");
})($ || ($ = {}));
//speck.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_or_error()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_or_error() {
            return this.hint();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//code.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n[mol_button]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));
//button.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            fiber(next = null) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.fiber($.$mol_fiber.current);
                this.event_click(next);
                this.click(next);
                if (this.fiber() === $.$mol_fiber.current) {
                    this.fiber(null);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $.$mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                try {
                    this.fiber()?.get();
                    return '';
                }
                catch (error) {
                    if (error instanceof Promise) {
                        return $.$mol_fail_hidden(error);
                    }
                    return String(error.message ?? error);
                }
            }
            hint_or_error() {
                return this.error() || super.hint_or_error();
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_button.prototype, "fiber", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//typed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\tdisplay: inline-block;\n\talign-content: center;\n\talign-items: center;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button_typed][disabled] {\n\tcolor: var(--mol_theme_text);\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tcursor: pointer;\n\tbackground-color: var(--mol_theme_hover);\n}\n");
})($ || ($ = {}));
//typed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//minor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n");
})($ || ($ = {}));
//minor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_work extends $.$mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = requestIdleCallback(task, { timeout: delay });
        }
        destructor() {
            cancelIdleCallback(this.id);
        }
    }
    $.$mol_after_work = $mol_after_work;
})($ || ($ = {}));
//work.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision = 0, next) {
            if (precision > 0) {
                new $.$mol_after_timeout(precision, $.$mol_atom2.current.fresh);
            }
            else {
                new $.$mol_after_work(16, $.$mol_atom2.current.fresh);
            }
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $.$mol_state_time.now();
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//root.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25em 0;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_attach extends $.$mol_icon {
        path() {
            return "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z";
        }
    }
    $.$mol_icon_attach = $mol_icon_attach;
})($ || ($ = {}));
//attach.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_attach extends $.$mol_card {
        Content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.content();
            return obj;
        }
        items(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        Add() {
            const obj = new this.$.$mol_attach_add();
            obj.file_new = (val) => this.attach_new(val);
            return obj;
        }
        Item(id) {
            const obj = new this.$.$mol_attach_item();
            obj.title = () => this.attach_title();
            return obj;
        }
        content() {
            return [];
        }
        attach_new(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        attach_title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_attach.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach.prototype, "items", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach.prototype, "Add", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_attach.prototype, "Item", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach.prototype, "attach_new", null);
    $.$mol_attach = $mol_attach;
    class $mol_attach_item extends $.$mol_link {
        url_thumb(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        uri(val) {
            return this.url_load(val);
        }
        style() {
            return {
                ...super.style(),
                backgroundImage: this.style_bg()
            };
        }
        attr() {
            return {
                ...super.attr(),
                download: this.title()
            };
        }
        url_load(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        style_bg() {
            return "";
        }
        title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_attach_item.prototype, "url_thumb", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_item.prototype, "url_load", null);
    $.$mol_attach_item = $mol_attach_item;
    class $mol_attach_add extends $.$mol_button_minor {
        minimal_height() {
            return 60;
        }
        file_new(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        sub() {
            return [
                this.Icon(),
                this.Input()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_attach();
            return obj;
        }
        event_capture(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_picked(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Input() {
            const obj = new this.$.$mol_attach_add_input();
            obj.event_capture = (val) => this.event_capture(val);
            obj.event_picked = (val) => this.event_picked(val);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_attach_add.prototype, "file_new", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_add.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_add.prototype, "event_capture", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_add.prototype, "event_picked", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_add.prototype, "Input", null);
    $.$mol_attach_add = $mol_attach_add;
    class $mol_attach_add_input extends $.$mol_view {
        dom_name() {
            return "input";
        }
        attr() {
            return {
                ...super.attr(),
                type: this.type(),
                accept: this.accept(),
                multiple: this.multiple()
            };
        }
        event_click(val) {
            return this.event_capture(val);
        }
        event() {
            return {
                ...super.event(),
                change: (val) => this.event_picked(val)
            };
        }
        type() {
            return "file";
        }
        accept() {
            return "image/*;capture=camera";
        }
        multiple() {
            return true;
        }
        event_capture(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_picked(val) {
            if (val !== undefined)
                return val;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_attach_add_input.prototype, "event_capture", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_add_input.prototype, "event_picked", null);
    $.$mol_attach_add_input = $mol_attach_add_input;
})($ || ($ = {}));
//attach.view.tree.js.map
;
"use strict";
var cordova;
var $;
(function ($) {
    $.$mol_cordova = cordova || {
        plugins: {
            barcodeScanner: null
        }
    };
    function $mol_cordova_camera() {
        return navigator['camera'];
    }
    $.$mol_cordova_camera = $mol_cordova_camera;
})($ || ($ = {}));
//cordova.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/attach/attach.view.css", "[mol_attach_content] {\n\tjustify-content: flex-start;\n\tflex-wrap: wrap;\n}\n\n[mol_attach_item] {\n\twidth: 5rem;\n\theight: 5rem;\n\tbackground: center no-repeat;\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tbackground-size: cover;\n\tflex: 0 0 5rem;\n}\n\n[mol_attach_add] {\n\tflex: 1 0 5rem;\n\twidth: 5rem;\n\theight: 5rem;\n\toverflow: hidden;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 0;\n\tposition: relative;\n\tmargin: 0;\n}\n\n[mol_attach_add_icon] {\n\twidth: 50%;\n\theight: 50%;\n}\n\n[mol_attach_add_input] {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcursor: pointer;\n\topacity: 0;\n}\n");
})($ || ($ = {}));
//attach.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_attach extends $.$mol_attach {
            attach_new(next) {
                const items = this.items();
                const item = this.Item(items.length);
                const url = URL.createObjectURL(next);
                item.url_thumb(url);
                item.url_load(url);
                this.items(items.concat(item));
            }
            content() {
                return [...this.items(), this.Add()];
            }
        }
        $$.$mol_attach = $mol_attach;
        class $mol_attach_item extends $.$mol_attach_item {
            style_bg() {
                return `url("${this.url_thumb()}")`;
            }
        }
        $$.$mol_attach_item = $mol_attach_item;
        class $mol_attach_add extends $.$mol_attach_add {
            file_new(next, force) {
                return next;
            }
            event_capture(next) {
                if (!$.$mol_cordova_camera())
                    return;
                next.preventDefault();
            }
            event_picked(next) {
                var files = [].slice.call(next.target.files);
                for (var file of files) {
                    this.file_new(file);
                }
            }
        }
        $$.$mol_attach_add = $mol_attach_add;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//attach.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $.$mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .375rem;\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmargin: .375rem;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_demo_small extends $.$mol_row {
    }
    $.$mol_demo_small = $mol_demo_small;
})($ || ($ = {}));
//small.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/demo/small/small.view.css", "/* [mol_demo_small] {\n\tmax-width: 100%;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\tbox-sizing: border-box;\n\tflex: 0 0 auto;\n\talign-self: flex-start;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n} */\n");
})($ || ($ = {}));
//small.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => {
        if (!event.key)
            return;
        $.$mol_state_local.value(event.key, undefined, $.$mol_mem_force_cache);
    });
})($ || ($ = {}));
//local.web.js.map
;
"use strict";
//node.js.map
;
"use strict";
var $node = $node || {};
//node.web.js.map
;
"use strict";
var $;
(function ($) {
    const TextDecoder = globalThis.TextDecoder ?? $node.util.TextDecoder;
    function $mol_charset_decode(value, code = 'utf8') {
        return new TextDecoder(code).decode(value);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//decode.js.map
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//encode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(undefined, $.$mol_mem_force_cache);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $.$mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next, force) {
            let exists = true;
            try {
                this.stat();
            }
            catch (error) {
                if (error instanceof $mol_file_not_found) {
                    exists = false;
                }
                else {
                    return $.$mol_fail_hidden(error);
                }
            }
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure(next);
            this.reset();
            return next;
        }
        type() {
            return this.stat().type;
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, force) {
            if (next === undefined) {
                return $.$mol_charset_decode(this.buffer(undefined, force));
            }
            else {
                const buffer = next === undefined ? undefined : $.$mol_charset_encode(next);
                this.buffer(buffer, force);
                return next;
            }
        }
        fail(error) {
            this.buffer(error, $.$mol_mem_force_fail);
            this.stat(error, $.$mol_mem_force_fail);
        }
        buffer_cached(buffer) {
            const ctime = new Date();
            const stat = {
                type: 'file',
                size: buffer.length,
                ctime,
                atime: ctime,
                mtime: ctime
            };
            this.buffer(buffer, $.$mol_mem_force_cache);
            this.stat(stat, $.$mol_mem_force_cache);
        }
        text_cached(content) {
            this.buffer_cached($.$mol_charset_encode(content));
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat().size;
                default: return 0;
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $.$mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//parse.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $.$mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.json);
            return parse.call(response);
        }
        buffer() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.arrayBuffer);
            return parse.call(response);
        }
        xml() {
            return $.$mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $.$mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $.$mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $.$mol_object2 {
        static request = $.$mol_fiber_sync((input, init = {}) => {
            if (typeof AbortController === 'function') {
                var controller = new AbortController();
                init.signal = controller.signal;
                const fiber = $.$mol_fiber.current;
                fiber.abort = () => {
                    if (fiber.cursor === -2)
                        return true;
                    controller.abort();
                    return true;
                };
            }
            let native = $.$mol_dom_context.fetch;
            if (!native)
                native = $node['node-fetch'];
            return native(input, init);
        });
        static response(input, init) {
            const response = this.request(input, init);
            if (Math.floor(response.status / 100) === 2)
                return new $mol_fetch_response(response);
            throw new Error(response.statusText || `HTTP Error ${response.status}`);
        }
        static stream(input, init) {
            return this.response(input, init).stream();
        }
        static text(input, init) {
            return this.response(input, init).text();
        }
        static json(input, init) {
            return this.response(input, init).json();
        }
        static buffer(input, init) {
            this.response(input, init).buffer();
        }
        static xml(input, init) {
            return this.response(input, init).xml();
        }
        static xhtml(input, init) {
            return this.response(input, init).xhtml();
        }
        static html(input, init) {
            return this.response(input, init).html();
        }
    }
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "response", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//fetch.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $.$mol_file {
        static absolute(path) {
            return this.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $.$mol_dom_context.document
            ? new URL('.', $.$mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next, force) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $.$mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $.$mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, force) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure(next) {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//file.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_attach_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_attach_demo_title');
        }
        sub() {
            return [
                this.Filled()
            ];
        }
        Item1() {
            const obj = new this.$.$mol_attach_item();
            obj.url_thumb = () => "https://thiscatdoesnotexist.com/";
            obj.url_load = () => "https://thiscatdoesnotexist.com/";
            return obj;
        }
        Item2() {
            const obj = new this.$.$mol_attach_item();
            obj.url_thumb = () => "https://thiscatdoesnotexist.com/";
            obj.url_load = () => "https://thiscatdoesnotexist.com/";
            return obj;
        }
        Item3() {
            const obj = new this.$.$mol_attach_item();
            obj.url_thumb = () => "https://thiscatdoesnotexist.com/";
            obj.url_load = () => "https://thiscatdoesnotexist.com/";
            return obj;
        }
        filled_items(val) {
            if (val !== undefined)
                return val;
            return [
                this.Item1(),
                this.Item2(),
                this.Item3()
            ];
        }
        Filled() {
            const obj = new this.$.$mol_attach();
            obj.items = (val) => this.filled_items(val);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_attach_demo.prototype, "Item1", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_demo.prototype, "Item2", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_demo.prototype, "Item3", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_demo.prototype, "filled_items", null);
    __decorate([
        $.$mol_mem
    ], $mol_attach_demo.prototype, "Filled", null);
    $.$mol_attach_demo = $mol_attach_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $.$mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//bar.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/bar/bar.view.css", "[mol_bar] {\n\tdisplay: flex;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_bar] > * {\n\tborder-radius: 0;\n}\n\n[mol_bar] > *:first-child {\n\tborder-top-left-radius: var(--mol_gap_round);\n\tborder-bottom-left-radius: var(--mol_gap_round);\n}\n\n[mol_bar] > *:last-child {\n\tborder-top-right-radius: var(--mol_gap_round);\n\tborder-bottom-right-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//bar.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_view {
        dom_node(next) {
            const node = next || $.$mol_owning_get(this, $.$mol_view).dom_node();
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $.$mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//hotkey.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $.$mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hotkey.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $.$mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return " ";
        }
        spellcheck() {
            return false;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        length_max() {
            return Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//string.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tz-index: 0;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: var(--mol_theme_hover);\n\tmin-width: 0;\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_string]:disabled {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:placeholder-shown {\n\tbackground: var(--mol_theme_field);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: 1;\n\tcolor: var(--mol_theme_text);\n\tbackground: var(--mol_theme_field);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]:not(:placeholder-shown):not(:focus):enabled:hover {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//string.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                this.value(next.target.value);
                this.selection_change(next);
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $.$mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', event => this.selection_change(event));
            }
            selection_change(event) {
                const el = this.dom_node();
                this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
            }
            selection_start() {
                return this.selection()[0];
            }
            selection_end() {
                return this.selection()[1];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//string.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n");
})($ || ($ = {}));
//check.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$.$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $.$mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//tick.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_box extends $.$mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_tick();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//box.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_check_box_title] {\n\tmargin-left: .5rem;\n}\n");
})($ || ($ = {}));
//box.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_bar_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_bar_demo_title');
        }
        sub() {
            return [
                this.Two(),
                this.Three()
            ];
        }
        mail_hint() {
            return "E-mail";
        }
        mail(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Two_mail() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.mail_hint();
            obj.value = (val) => this.mail(val);
            return obj;
        }
        submit_title() {
            return "Submit";
        }
        Two_submit() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.submit_title();
            return obj;
        }
        Two() {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Two_mail(),
                this.Two_submit()
            ];
            return obj;
        }
        Three_mail() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.mail_hint();
            obj.value = (val) => this.mail(val);
            return obj;
        }
        confirm_title() {
            return "Confirm";
        }
        confirmed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Three_confirm() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.confirm_title();
            obj.checked = (val) => this.confirmed(val);
            return obj;
        }
        Three_submit() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.submit_title();
            return obj;
        }
        Three() {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Three_mail(),
                this.Three_confirm(),
                this.Three_submit()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "mail", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Two_mail", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Two_submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Two", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Three_mail", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "confirmed", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Three_confirm", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Three_submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_bar_demo.prototype, "Three", null);
    $.$mol_bar_demo = $mol_bar_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
        style() {
            return {
                ...super.style(),
                minHeight: "auto"
            };
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//float.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        minimal_height() {
            return 40;
        }
        Icon() {
            const obj = new this.$.$mol_icon_chevron();
            return obj;
        }
        level() {
            return 0;
        }
        style() {
            return {
                ...super.style(),
                paddingLeft: this.level_style()
            };
        }
        checked(val) {
            return this.expanded(val);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n[mol_check_expand][disabled] [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin: .25rem 0;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n[mol_check_checked] > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//expand.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $.$mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return Infinity;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//paragraph.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $.$mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//paragraph.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
//equals.js.map
;
"use strict";
//merge.js.map
;
"use strict";
//intersect.js.map
;
"use strict";
//unicode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $.$mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $.$mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//regexp.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.66;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//dimmer.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const variants = { ...this.needle().split(/\s+/g).filter(Boolean) };
                const regexp = $.$mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $.$mol_view {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return {};
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        sub() {
            return [
                this.Head(),
                this.Table()
            ];
        }
        Head() {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.head_cells();
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.minimal_height = () => this.row_height();
            obj.cells = () => this.cells(id);
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.cell_content_text(id);
            return obj;
        }
        Cell_number(id) {
            const obj = new this.$.$mol_grid_number();
            obj.sub = () => this.cell_content_number(id);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        Cell_branch(id) {
            const obj = new this.$.$mol_check_expand();
            obj.level = () => this.cell_level(id);
            obj.label = () => this.cell_content(id);
            obj.expanded = (val) => this.cell_expanded(id, val);
            return obj;
        }
        Cell_content(id) {
            return [
                this.Cell_dimmer(id)
            ];
        }
        rows() {
            return [];
        }
        Table() {
            const obj = new this.$.$mol_grid_table();
            obj.sub = () => this.rows();
            return obj;
        }
        head_cells() {
            return [];
        }
        cells(id) {
            return [];
        }
        cell_content(id) {
            return [];
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        col_head_content(id) {
            return [];
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
        Cell_dimmer(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.needle();
            obj.haystack = () => this.cell_value(id);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $.$mol_list {
        dom_name() {
            return "table";
        }
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $.$mol_view {
        dom_name() {
            return "td";
        }
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 1 1 auto;\n\tposition: relative;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > * ,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n[mol_grid_head] > * {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_cell_number] {\n\ttext-align: right;\n}\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//grid.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_sort extends $.$mol_icon {
        path() {
            return "M10,13V11H18V13H10M10,19V17H14V19H10M10,7V5H22V7H10M6,17H8.5L5,20.5L1.5,17H4V7H1.5L5,3.5L8.5,7H6V17Z";
        }
    }
    $.$mol_icon_sort = $mol_icon_sort;
})($ || ($ = {}));
//sort.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_sort_asc extends $.$mol_icon {
        path() {
            return "M10,11V13H18V11H10M10,5V7H14V5H10M10,17V19H22V17H10M6,7H8.5L5,3.5L1.5,7H4V20H6V7Z";
        }
    }
    $.$mol_icon_sort_asc = $mol_icon_sort_asc;
})($ || ($ = {}));
//asc.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_portion_indicator extends $.$mol_view {
        style() {
            return {
                ...super.style(),
                width: this.width_style()
            };
        }
        width_style() {
            return "0";
        }
    }
    $.$mol_portion_indicator = $mol_portion_indicator;
    class $mol_portion extends $.$mol_view {
        portion() {
            return 0;
        }
        sub() {
            return [
                this.indicator()
            ];
        }
        indicator_width_style() {
            return "0";
        }
        indicator() {
            const obj = new this.$.$mol_portion_indicator();
            obj.width_style = () => this.indicator_width_style();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_portion.prototype, "indicator", null);
    $.$mol_portion = $mol_portion;
})($ || ($ = {}));
//portion.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/portion/portion.view.css", "[mol_portion] {\n\tdisplay: inline-flex;\n\tflex: 0 1 8rem;\n\twidth: 8rem;\n\tmax-height: calc( 1rem + 1.5em );\n\talign-self: stretch;\n\tvertical-align: inherit;\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_portion_indicator] {\n\tpadding: .25rem 0;\n\tbackground-color: var(--mol_skin_base);\n\tcolor: var(--mol_theme_control);\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//portion.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_portion extends $.$mol_portion {
            indicator_width_style() {
                return this.portion() * 100 + '%';
            }
        }
        $$.$mol_portion = $mol_portion;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//portion.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_bench extends $.$mol_grid {
        records() {
            return this.result();
        }
        col_sort(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Col_head(id) {
            const obj = new this.$.$mol_bench_head();
            obj.event_click = (val) => this.event_sort_toggle(id, val);
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        cell_content_number(id) {
            return [
                this.result_value(id),
                this.Result_portion(id)
            ];
        }
        result() {
            return {};
        }
        event_sort_toggle(id, val) {
            if (val !== undefined)
                return val;
            return null;
        }
        col_head_title(id) {
            return "";
        }
        Col_head_sort(id) {
            const obj = new this.$.$mol_icon_sort_asc();
            return obj;
        }
        col_head_content(id) {
            return [
                this.col_head_title(id),
                this.Col_head_sort(id)
            ];
        }
        result_value(id) {
            return "";
        }
        result_portion(id) {
            return 0;
        }
        Result_portion(id) {
            const obj = new this.$.$mol_portion();
            obj.portion = () => this.result_portion(id);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_bench.prototype, "col_sort", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_bench.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_bench.prototype, "event_sort_toggle", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_bench.prototype, "Col_head_sort", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_bench.prototype, "Result_portion", null);
    $.$mol_bench = $mol_bench;
    class $mol_bench_head extends $.$mol_float {
        horizontal() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                click: (val) => this.event_click(val)
            };
        }
        attr() {
            return {
                ...super.attr(),
                title: this.hint()
            };
        }
        event_click(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_bench_head_hint');
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_bench_head.prototype, "event_click", null);
    $.$mol_bench_head = $mol_bench_head;
})($ || ($ = {}));
//bench.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/bench/bench.view.css", "[mol_bench] {\n\toverflow: auto;\n}\n\n[mol_bench_col_head] {\n\tcursor: pointer;\n}\n\n[mol_bench_cell_number] {\n\twhite-space: nowrap;\n\ttext-align: right;\n}\n\n[mol_bench_result_portion] {\n\tmargin-left: 1rem;\n}\n\n[mol_bench_head] + [mol_bench_row] [mol_portion_indicator] {\n\tbackground: var(--mol_skin_accent);\n}\n");
})($ || ($ = {}));
//bench.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_bench extends $.$mol_bench {
            col_sort(next) {
                return $.$mol_state_arg.value(this.state_key('sort'), next) ?? '';
            }
            row_ids() {
                const result = this.result();
                const keys = Object.keys(result).map(key => ['', key]);
                const col = this.col_sort();
                if (col) {
                    keys.sort((a, b) => {
                        return this.result_number({ row: a, col }) - this.result_number({ row: b, col });
                    });
                }
                return keys;
            }
            result_value(id) {
                return this.result()[id.row[id.row.length - 1]][id.col];
            }
            result_number(id) {
                return parseInt(this.result_value(id), 10);
            }
            result_value_max(col) {
                let max = 0;
                const rows = this.row_ids();
                rows.forEach(row => {
                    const numb = this.result_number({ row, col });
                    if (numb > max)
                        max = numb;
                });
                return max;
            }
            result_portion(id) {
                return this.result_number(id) / this.result_value_max(id.col);
            }
            col_head_title(col) {
                return col;
            }
            event_sort_toggle(col, next) {
                this.col_sort(col);
            }
            col_type(col) {
                if (col === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col];
                if (!isNaN(parseFloat(val)))
                    return 'number';
                return 'text';
            }
            cell_content_number(id) {
                return [
                    this.result_value(id),
                    ...(this.col_sort() === id.col) ? [this.Result_portion(id)] : []
                ];
            }
            col_head_content(col) {
                return [
                    this.col_head_title(col),
                    ...(this.col_sort() === col) ? [this.Col_head_sort(col)] : []
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_bench.prototype, "col_sort", null);
        __decorate([
            $.$mol_mem
        ], $mol_bench.prototype, "row_ids", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_bench.prototype, "result_value_max", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_bench.prototype, "col_type", null);
        $$.$mol_bench = $mol_bench;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bench.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_bench_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_bench_demo_title');
        }
        sub() {
            return [
                this.View()
            ];
        }
        col_sort(val) {
            if (val !== undefined)
                return val;
            return "mid";
        }
        result() {
            return {};
        }
        View() {
            const obj = new this.$.$mol_bench();
            obj.col_sort = (val) => this.col_sort(val);
            obj.result = () => this.result();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_bench_demo.prototype, "col_sort", null);
    __decorate([
        $.$mol_mem
    ], $mol_bench_demo.prototype, "View", null);
    $.$mol_bench_demo = $mol_bench_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_bench_demo extends $.$mol_bench_demo {
            result() {
                return {
                    'bubble': {
                        'algorithm': 'bubble',
                        'min': '1 ms',
                        'mid': '11 ms',
                        'max': '99 ms',
                    },
                    'qsort': {
                        'algorithm': 'qsort',
                        'min': '2 ms',
                        'mid': '5 ms',
                        'max': '10 ms',
                    },
                };
            }
        }
        $$.$mol_bench_demo = $mol_bench_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        _event_scroll_timer(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        field() {
            return {
                ...super.field(),
                scrollTop: this.scroll_top(),
                scrollLeft: this.scroll_left(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "_event_scroll_timer", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_scroll, {
            overflow: 'auto',
        });
        $.$mol_style_define($$.$mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            scrollbar: {
                color: [$.$mol_theme.line, 'transparent'],
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            '::-webkit-scrollbar-corner': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '::-webkit-scrollbar-track': {
                background: {
                    color: 'transparent',
                },
            },
            '::-webkit-scrollbar-thumb': {
                background: {
                    color: $.$mol_theme.line,
                },
                border: {
                    radius: $.$mol_gap.round,
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next) {
                return $.$mol_state_session.value(`${this}.scroll_top()`, next) || 0;
            }
            scroll_left(next) {
                return $.$mol_state_session.value(`${this}.scroll_left()`, next) || 0;
            }
            _event_scroll_timer(next) {
                return next;
            }
            event_scroll(next) {
                this._event_scroll_timer()?.destructor();
                const el = this.dom_node();
                this._event_scroll_timer(new $.$mol_after_timeout(200, $.$mol_fiber_solid.func(() => {
                    this.scroll_top(Math.max(0, el.scrollTop));
                    this.scroll_left(Math.max(0, el.scrollLeft));
                })));
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        __decorate([
            $.$mol_memo.method
        ], $mol_scroll.prototype, "_event_scroll_timer", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $.$mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//book2.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x proximity;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\t/* z-index: 0; */\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\t/* background: var(--mol_theme_back); */\n}\n");
})($ || ($ = {}));
//book2.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => page?.title()).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages().slice(), this.Placeholder()];
                const prev = $.$mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    new $.$mol_after_timeout(100, () => n.dom_node().scrollIntoView({ behavior: 'smooth' }));
                    break;
                }
                return next;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book2.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_demo_large extends $.$mol_view {
    }
    $.$mol_demo_large = $mol_demo_large;
})($ || ($ = {}));
//large.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/demo/large/large.view.css", "[mol_demo_large] {\n\tflex: 1 1 auto;\n\tflex-direction: column;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n\tmargin: var(--mol_gap_block);\n\tmax-width: valc( 100% - 1.5rem );\n\tmax-height: valc( 100% - 1.5rem );\n\toverflow: hidden;\n\t/* height: 100%;\n\twidth: 100%;\n\toverflow: hidden;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: stretch;\n\tbox-sizing: border-box;\n\talign-self: stretch; */\n}\n");
})($ || ($ = {}));
//large.view.css.js.map
;
"use strict";
//large.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book2_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text('$mol_book2_demo_title');
        }
        sub() {
            return [
                this.View()
            ];
        }
        First() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                " First"
            ];
            return obj;
        }
        Second() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                " Second"
            ];
            return obj;
        }
        Third() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                " Third"
            ];
            return obj;
        }
        View() {
            const obj = new this.$.$mol_book2();
            obj.pages = () => [
                this.First(),
                this.Second(),
                this.Third()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book2_demo.prototype, "First", null);
    __decorate([
        $.$mol_mem
    ], $mol_book2_demo.prototype, "Second", null);
    __decorate([
        $.$mol_mem
    ], $mol_book2_demo.prototype, "Third", null);
    __decorate([
        $.$mol_mem
    ], $mol_book2_demo.prototype, "View", null);
    $.$mol_book2_demo = $mol_book2_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book2/demo/demo.view.css", "[mol_book2_demo_first], \n[mol_book2_demo_second], \n[mol_book2_demo_third] {\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 2rem;\n\tdisplay: flex;\n}\n\n\n[mol_book2_demo_first] {\n\tflex: 1 0 20rem;\n\tbackground-color: hsla(240, 100%, 50%, .2);\n}\n\n[mol_book2_demo_second] {\n\tflex: 1 0 100%;\n\tbackground-color: hsla(120, 100%, 50%, .2);\n}\n\n[mol_book2_demo_third] {\n\tflex: 1 0 60rem;\n\tbackground-color: hsla(0, 100%, 50%, .2);\n}\n");
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.sub = () => this.head();
            return obj;
        }
        body_scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        body() {
            return [];
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.scroll_top = (val) => this.body_scroll_top(val);
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $.$mol_style_unit;
        const { calc } = $.$mol_style_func;
        $.$mol_style_define($$.$mol_page, {
            display: 'flex',
            margin: 0,
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            background: {
                color: $.$mol_theme.back,
            },
            color: $.$mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $.$mol_gap.block,
                background: {
                    color: $.$mol_theme.back,
                },
                border: {
                    radius: $.$mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $.$mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 0,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $.$mol_theme.back,
                },
                border: {
                    radius: $.$mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $.$mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book2_catalog extends $.$mol_book2 {
        param() {
            return "";
        }
        spreads() {
            return {};
        }
        Spread() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [
                this.Menu()
            ];
        }
        Link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.arg(id);
            obj.sub = () => [
                this.spread_title(id)
            ];
            return obj;
        }
        Spread_close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.spread_close_arg();
            obj.sub = () => [
                this.Spread_close_icon()
            ];
            return obj;
        }
        menu_title() {
            return "";
        }
        menu_tools() {
            return [];
        }
        links() {
            return [];
        }
        Links() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.links();
            return obj;
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.menu_title();
            obj.tools = () => this.menu_tools();
            obj.body = () => [
                this.Links()
            ];
            return obj;
        }
        arg(id) {
            return {};
        }
        spread_title(id) {
            return "";
        }
        spread_close_arg() {
            return {};
        }
        Spread_close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book2_catalog.prototype, "Spread", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_book2_catalog.prototype, "Link", null);
    __decorate([
        $.$mol_mem
    ], $mol_book2_catalog.prototype, "Spread_close", null);
    __decorate([
        $.$mol_mem
    ], $mol_book2_catalog.prototype, "Links", null);
    __decorate([
        $.$mol_mem
    ], $mol_book2_catalog.prototype, "Menu", null);
    __decorate([
        $.$mol_mem
    ], $mol_book2_catalog.prototype, "Spread_close_icon", null);
    $.$mol_book2_catalog = $mol_book2_catalog;
})($ || ($ = {}));
//catalog.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book2/catalog/catalog.view.css", "[mol_book2_catalog_links] {\n\tpadding: var(--mol_gap_block);\n}\n");
})($ || ($ = {}));
//catalog.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2_catalog extends $.$mol_book2_catalog {
            pages() {
                return [
                    this.Menu(),
                    ...this.spread() ? [this.Spread()] : [],
                ];
            }
            links() {
                return Object.keys(this.spreads()).map(spread => this.Link(spread));
            }
            Spread() {
                return this.spreads()[this.spread()];
            }
            spread() {
                return this.$.$mol_state_arg.value(this.param()) ?? '';
            }
            arg(spread) {
                return { [this.param()]: spread };
            }
            spread_close_arg() {
                return { [this.param()]: null };
            }
            spread_title(spread) {
                return this.spreads()[spread].title();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book2_catalog.prototype, "pages", null);
        __decorate([
            $.$mol_mem
        ], $mol_book2_catalog.prototype, "links", null);
        __decorate([
            $.$mol_mem
        ], $mol_book2_catalog.prototype, "spread", null);
        $$.$mol_book2_catalog = $mol_book2_catalog;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//catalog.viwe.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book2_catalog_demo extends $.$mol_demo_large {
        title() {
            return "Catalog of pages";
        }
        sub() {
            return [
                this.Calatog()
            ];
        }
        Articles() {
            const obj = new this.$.$mol_page();
            obj.title = () => "Articles";
            obj.body = () => [
                "Articles content"
            ];
            return obj;
        }
        Images() {
            const obj = new this.$.$mol_page();
            obj.title = () => "Images";
            obj.body = () => [
                "Images content"
            ];
            return obj;
        }
        Maps() {
            const obj = new this.$.$mol_page();
            obj.title = () => "Maps";
            obj.body = () => [
                "Maps content"
            ];
            return obj;
        }
        Calatog() {
            const obj = new this.$.$mol_book2_catalog();
            obj.param = () => "mol_book2_catalog_demo";
            obj.menu_title = () => "Sections";
            obj.spreads = () => ({
                articles: this.Articles(),
                images: this.Images(),
                maps: this.Maps()
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book2_catalog_demo.prototype, "Articles", null);
    __decorate([
        $.$mol_mem
    ], $mol_book2_catalog_demo.prototype, "Images", null);
    __decorate([
        $.$mol_mem
    ], $mol_book2_catalog_demo.prototype, "Maps", null);
    __decorate([
        $.$mol_mem
    ], $mol_book2_catalog_demo.prototype, "Calatog", null);
    $.$mol_book2_catalog_demo = $mol_book2_catalog_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//major.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//major.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_button_demo_title');
        }
        sub() {
            return [
                this.Major_enabled(),
                this.Major_disabled(),
                this.Minor_enabled(),
                this.Minor_disabled()
            ];
        }
        major_label() {
            return this.$.$mol_locale.text('$mol_button_demo_major_label');
        }
        Major_enabled() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.major_label();
            return obj;
        }
        Major_disabled() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.major_label();
            obj.enabled = () => false;
            return obj;
        }
        minor_label() {
            return this.$.$mol_locale.text('$mol_button_demo_minor_label');
        }
        Minor_enabled() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.minor_label();
            return obj;
        }
        Minor_disabled() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.minor_label();
            obj.enabled = () => false;
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button_demo.prototype, "Major_enabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_button_demo.prototype, "Major_disabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_button_demo.prototype, "Minor_enabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_button_demo.prototype, "Minor_disabled", null);
    $.$mol_button_demo = $mol_button_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_share extends $.$mol_icon {
        path() {
            return "M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z";
        }
    }
    $.$mol_icon_share = $mol_icon_share;
})($ || ($ = {}));
//share.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_share_variant extends $.$mol_icon {
        path() {
            return "M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8C19.66,8 21,6.66 21,5C21,3.34 19.66,2 18,2C16.34,2 15,3.34 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9C4.34,9 3,10.34 3,12C3,13.66 4.34,15 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19C20.92,17.39 19.61,16.08 18,16.08Z";
        }
    }
    $.$mol_icon_share_variant = $mol_icon_share_variant;
})($ || ($ = {}));
//variant.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_share extends $.$mol_button_minor {
        uri() {
            return "";
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_share_variant();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button_share.prototype, "Icon", null);
    $.$mol_button_share = $mol_button_share;
})($ || ($ = {}));
//share.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_share extends $.$mol_button_share {
            click() {
                this.$.$mol_dom_context.navigator.share({ url: this.uri() });
            }
        }
        $$.$mol_button_share = $mol_button_share;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//share.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_share_demo extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_button_share_demo_title');
        }
        sub() {
            return [
                this.Share_self(),
                this.Share_hyoo()
            ];
        }
        Share_self() {
            const obj = new this.$.$mol_button_share();
            obj.title = () => "Share this page";
            return obj;
        }
        Share_hyoo() {
            const obj = new this.$.$mol_button_share();
            obj.title = () => "Share hyoo.ru";
            obj.uri = () => "https://hyoo.ru";
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button_share_demo.prototype, "Share_self", null);
    __decorate([
        $.$mol_mem
    ], $mol_button_share_demo.prototype, "Share_hyoo", null);
    $.$mol_button_share_demo = $mol_button_share_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_hor extends $.$mol_view {
    }
    $.$mol_hor = $mol_hor;
})($ || ($ = {}));
//hor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_define($.$mol_hor, {
        display: 'flex',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flex: {
            grow: 1,
            shrink: 0,
            basis: 'auto',
        },
    });
})($ || ($ = {}));
//hor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hor extends $.$mol_hor {
            minimal_width() {
                let min = 0;
                for (const view of this.sub()) {
                    if (!(view instanceof $.$mol_view))
                        continue;
                    min += view.minimal_width();
                }
                return min;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_hor.prototype, "minimal_width", null);
        $$.$mol_hor = $mol_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hor.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//base.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $.$mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//duration.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $.$mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $.$mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $.$mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $.$mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $.$mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $.$mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config) {
            const duration = new $.$mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
                return String(1000 + millisecond).slice(1);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//moment.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_calendar extends $.$mol_list {
        sub() {
            return [
                this.Head(),
                this.Weekdays()
            ];
        }
        weeks() {
            return [];
        }
        Weekday(index) {
            const obj = new this.$.$mol_calendar_day();
            obj.holiday = () => this.weekend(index);
            obj.sub = () => [
                this.weekday(index)
            ];
            return obj;
        }
        Week(row) {
            const obj = new this.$.$mol_hor();
            obj.sub = () => this.week_days(row);
            return obj;
        }
        Day(day) {
            const obj = new this.$.$mol_calendar_day();
            obj.ghost = () => this.day_ghost(day);
            obj.holiday = () => this.day_holiday(day);
            obj.selected = () => this.day_selected(day);
            obj.theme = () => this.day_theme(day);
            obj.sub = () => this.day_content(day);
            return obj;
        }
        month_string() {
            return "";
        }
        month_moment() {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        head() {
            return [
                this.Title()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.head();
            return obj;
        }
        weekdays() {
            return [];
        }
        Weekdays() {
            const obj = new this.$.$mol_hor();
            obj.sub = () => this.weekdays();
            return obj;
        }
        weekend(index) {
            return false;
        }
        weekday(index) {
            return "";
        }
        week_days(row) {
            return [];
        }
        day_ghost(day) {
            return false;
        }
        day_holiday(day) {
            return false;
        }
        day_selected(day) {
            return false;
        }
        day_theme(day) {
            return "";
        }
        day_text(day) {
            return "";
        }
        day_content(day) {
            return [
                this.day_text(day)
            ];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_calendar.prototype, "Weekday", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_calendar.prototype, "Week", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_calendar.prototype, "Day", null);
    __decorate([
        $.$mol_mem
    ], $mol_calendar.prototype, "month_moment", null);
    __decorate([
        $.$mol_mem
    ], $mol_calendar.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_calendar.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_calendar.prototype, "Weekdays", null);
    $.$mol_calendar = $mol_calendar;
    class $mol_calendar_day extends $.$mol_view {
        minimal_height() {
            return 24;
        }
        minimal_width() {
            return 36;
        }
        attr() {
            return {
                mol_calendar_holiday: this.holiday(),
                mol_calendar_ghost: this.ghost(),
                mol_calendar_selected: this.selected(),
                mol_theme: this.theme()
            };
        }
        holiday() {
            return false;
        }
        ghost() {
            return false;
        }
        selected() {
            return false;
        }
        theme() {
            return "";
        }
    }
    $.$mol_calendar_day = $mol_calendar_day;
})($ || ($ = {}));
//calendar.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $.$mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $.$mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $.$mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $.$mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $.$mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $.$mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $.$mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $.$mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $.$mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $.$mol_time_duration(config.duration);
        }
        _start;
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        _end;
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        _duration;
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $.$mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));
//interval.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/calendar/calendar.view.css", "[mol_calendar] {\n\tdisplay: table;\n\tfont-family: monospace;\n\tfont-family: var(--mol_skin_font_monospace);\n}\n\n[mol_calendar_head] {\n\tdisplay: table-caption;\n}\n\n[mol_calendar_title] {\n\tjustify-content: center;\n}\n\n[mol_calendar_weekdays] ,\n[mol_calendar_week] {\n\tdisplay: table-row;\n\tpadding: 0;\n}\n\n[mol_calendar_day] {\n\tdisplay: table-cell;\n\tpadding: .25rem .5rem;\n\ttext-align: center;\n\tword-break: normal;\n\tbox-shadow: none;\n}\n\n[mol_calendar_weekday] {\n\tborder-bottom: 1px solid var(--mol_theme_line);\n}\n\n[mol_calendar_holiday] {\n\tcolor: var(--mol_skin_base);\n}\n\n[mol_calendar_ghost] {\n\topacity: .25;\n}\n");
})($ || ($ = {}));
//calendar.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar extends $.$mol_calendar {
            month_moment() {
                const moment = new $.$mol_time_moment(this.month_string() || undefined);
                return new $.$mol_time_moment({ year: moment.year, month: moment.month });
            }
            title() {
                return this.month_moment().toString('Month YYYY');
            }
            day_first() {
                return this.month_moment().merge({ day: 0 });
            }
            day_last() {
                return this.day_first().shift('P1M');
            }
            day_draw_from() {
                let weekday = this.day_first().weekday;
                return this.day_first().shift({ day: -weekday });
            }
            weekdays() {
                const next = [];
                for (let index = 0; index < 7; ++index) {
                    next.push(this.Weekday(index));
                }
                return next;
            }
            weekday(index) {
                return this.day_draw_from().shift({ day: index }).toString('WD');
            }
            weekend(index) {
                return [5, 6].indexOf(index) >= 0;
            }
            weeks_count() {
                const interval = new $.$mol_time_interval({
                    start: this.day_draw_from(),
                    end: this.day_last(),
                });
                return Math.ceil(interval.duration.count({ day: 7 }));
            }
            sub() {
                return [
                    ...super.sub(),
                    ...this.weeks(),
                ];
            }
            weeks() {
                const weeks = [];
                let count = this.weeks_count();
                for (let i = 0; i < count; ++i) {
                    weeks.push(this.Week(i));
                }
                return weeks;
            }
            week_days(index) {
                const days = [];
                let start = this.day_draw_from().shift({ day: index * 7 });
                for (let i = 0; i < 7; ++i) {
                    days.push(this.Day(start.shift({ day: i }).toString('YYYY-MM-DD')));
                }
                return days;
            }
            day_text(day) {
                return new $.$mol_time_moment(day).toString("D");
            }
            day_holiday(day) {
                return this.weekend(new $.$mol_time_moment(day).weekday);
            }
            day_ghost(day) {
                return new $.$mol_time_moment(day).toString('YYYY-MM') !== this.day_first().toString('YYYY-MM');
            }
            day_selected(day) {
                return new $.$mol_time_moment().toString('YYYY-MM-DD') === day;
            }
            day_theme(day) {
                return this.day_selected(day) ? '$mol_theme_base' : super.day_theme(day);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "month_moment", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "day_first", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "day_last", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "day_draw_from", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "weekdays", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "weekday", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "weeks_count", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_calendar.prototype, "weeks", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "week_days", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "day_text", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "day_holiday", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "day_ghost", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar.prototype, "day_selected", null);
        $$.$mol_calendar = $mol_calendar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//calendar.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_calendar_demo_holiday extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_calendar_demo_holiday_title');
        }
        holidays() {
            return [
                "2018-01-01",
                "2018-01-02",
                "2018-01-03",
                "2018-01-04",
                "2018-01-05",
                "2018-01-06",
                "2018-01-07",
                "2018-01-08",
                "2018-01-13",
                "2018-01-14",
                "2018-01-20",
                "2018-01-21",
                "2018-01-27",
                "2018-01-28"
            ];
        }
        sub() {
            return [
                this.Calendar()
            ];
        }
        month() {
            return "2018-01";
        }
        holiday(day) {
            return false;
        }
        Calendar() {
            const obj = new this.$.$mol_calendar();
            obj.month_string = () => this.month();
            obj.day_holiday = (day) => this.holiday(day);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_calendar_demo_holiday.prototype, "Calendar", null);
    $.$mol_calendar_demo_holiday = $mol_calendar_demo_holiday;
})($ || ($ = {}));
//holiday.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar_demo_holiday extends $.$mol_calendar_demo_holiday {
            holiday(day) {
                return this.holidays().indexOf(day) >= 0;
            }
        }
        $$.$mol_calendar_demo_holiday = $mol_calendar_demo_holiday;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//holiday.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_calendar_demo_selection extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_calendar_demo_selection_title');
        }
        interval_config() {
            return {
                start: "2018-01-10",
                end: "2018-01-20"
            };
        }
        sub() {
            return [
                this.Calendar()
            ];
        }
        month() {
            return "2018-01";
        }
        selected(day) {
            return false;
        }
        Calendar() {
            const obj = new this.$.$mol_calendar();
            obj.month_string = () => this.month();
            obj.day_selected = (day) => this.selected(day);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_calendar_demo_selection.prototype, "Calendar", null);
    $.$mol_calendar_demo_selection = $mol_calendar_demo_selection;
})($ || ($ = {}));
//selection.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar_demo_selection extends $.$mol_calendar_demo_selection {
            interval() {
                return new $.$mol_time_interval(this.interval_config());
            }
            selected(day) {
                const interval = this.interval();
                return (day >= interval.start.toString()) && (day < interval.end.toString());
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_calendar_demo_selection.prototype, "interval", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_calendar_demo_selection.prototype, "selected", null);
        $$.$mol_calendar_demo_selection = $mol_calendar_demo_selection;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//selection.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_calendar_demo_simple extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_calendar_demo_simple_title');
        }
        sub() {
            return [
                this.Calendar()
            ];
        }
        today() {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        Calendar() {
            const obj = new this.$.$mol_calendar();
            obj.month_moment = () => this.today();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_calendar_demo_simple.prototype, "today", null);
    __decorate([
        $.$mol_mem
    ], $mol_calendar_demo_simple.prototype, "Calendar", null);
    $.$mol_calendar_demo_simple = $mol_calendar_demo_simple;
})($ || ($ = {}));
//simple.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar_demo_simple extends $.$mol_calendar_demo_simple {
            month_name() {
                return this.today().toString('Month YYYY');
            }
        }
        $$.$mol_calendar_demo_simple = $mol_calendar_demo_simple;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//simple.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_card_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_card_demo_title');
        }
        sub() {
            return [
                this.Simple(),
                this.Pending()
            ];
        }
        Simple() {
            const obj = new this.$.$mol_card();
            obj.content = () => [
                "Hello world!"
            ];
            return obj;
        }
        Pending() {
            const obj = new this.$.$mol_card();
            obj.title = () => "Hello pending!";
            obj.status = () => "pending";
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_card_demo.prototype, "Simple", null);
    __decorate([
        $.$mol_mem
    ], $mol_card_demo.prototype, "Pending", null);
    $.$mol_card_demo = $mol_card_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_group extends $.$mol_svg {
        dom_name() {
            return "g";
        }
    }
    $.$mol_svg_group = $mol_svg_group;
})($ || ($ = {}));
//group.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_vector extends Array {
        get length() {
            return super.length;
        }
        constructor(...values) { super(...values); }
        map(convert, self) {
            return super.map(convert, self);
        }
        merged(patches, combine) {
            return this.map((value, index) => combine(value, patches[index]));
        }
        limited(limits) {
            return this.merged(limits, (value, [min, max]) => (value < min) ? min : (value > max) ? max : value);
        }
        added0(diff) {
            return this.map(value => value + diff);
        }
        added1(diff) {
            return this.merged(diff, (a, b) => a + b);
        }
        multed0(mult) {
            return this.map(value => value * mult);
        }
        multed1(mults) {
            return this.merged(mults, (a, b) => a * b);
        }
        powered0(mult) {
            return this.map(value => value ** mult);
        }
        expanded1(point) {
            return this.merged(point, (range, value) => range.expanded0(value));
        }
        expanded2(point) {
            return this.merged(point, (range1, range2) => {
                let next = range1;
                const Range = range1.constructor;
                if (range1[0] > range2[0])
                    next = new Range(range2[0], next.max);
                if (range1[1] < range2[1])
                    next = new Range(next.min, range2[1]);
                return next;
            });
        }
        center() {
            const Result = this[0].constructor;
            return new Result(...this[0].map((_, i) => this.reduce((sum, point) => sum + point[i], 0) / this.length));
        }
        distance() {
            let distance = 0;
            for (let i = 1; i < this.length; ++i) {
                distance += this[i - 1].reduce((sum, min, j) => sum + (min - this[i][j]) ** 2, 0) ** (1 / this[i].length);
            }
            return distance;
        }
        get x() { return this[0]; }
        get y() { return this[1]; }
        get z() { return this[2]; }
    }
    $.$mol_vector = $mol_vector;
    class $mol_vector_1d extends $mol_vector {
    }
    $.$mol_vector_1d = $mol_vector_1d;
    class $mol_vector_2d extends $mol_vector {
    }
    $.$mol_vector_2d = $mol_vector_2d;
    class $mol_vector_3d extends $mol_vector {
    }
    $.$mol_vector_3d = $mol_vector_3d;
    class $mol_vector_range extends $mol_vector {
        get [0]() { return super[0]; }
        get [1]() { return super[1]; }
        get min() { return this[0]; }
        get max() { return this[1]; }
        get inversed() {
            return new this.constructor(this.max, this.min);
        }
        expanded0(value) {
            const Range = this.constructor;
            let range = this;
            if (value > range.max)
                range = new Range(range.min, value);
            if (value < range.min)
                range = new Range(value, range.max);
            return range;
        }
    }
    $.$mol_vector_range = $mol_vector_range;
    $.$mol_vector_range_full = new $mol_vector_range(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    class $mol_vector_matrix extends $mol_vector {
        added2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 + b[index]));
        }
        multed2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 * b[index]));
        }
    }
    $.$mol_vector_matrix = $mol_vector_matrix;
})($ || ($ = {}));
//vector.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_title extends $.$mol_svg {
        dom_name() {
            return "title";
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_svg_title = $mol_svg_title;
})($ || ($ = {}));
//title.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_graph extends $.$mol_svg_group {
        series_x() {
            return [];
        }
        series_y() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                mol_plot_graph_type: this.type()
            };
        }
        style() {
            return {
                ...super.style(),
                color: this.color()
            };
        }
        viewport() {
            const obj = new this.$.$mol_vector_2d(this.viewport_x(), this.viewport_y());
            return obj;
        }
        shift() {
            return [
                0,
                0
            ];
        }
        scale() {
            return [
                1,
                1
            ];
        }
        cursor_position() {
            const obj = new this.$.$mol_vector_2d(NaN, NaN);
            return obj;
        }
        dimensions_pane() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_pane_x(), this.dimensions_pane_y());
            return obj;
        }
        dimensions() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y());
            return obj;
        }
        size_real() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        gap() {
            const obj = new this.$.$mol_vector_2d(this.gap_x(), this.gap_y());
            return obj;
        }
        indexes() {
            return [];
        }
        points() {
            return [];
        }
        front() {
            return [];
        }
        back() {
            return [];
        }
        Hint() {
            const obj = new this.$.$mol_svg_title();
            obj.title = () => this.hint();
            return obj;
        }
        hue() {
            return NaN;
        }
        Sample() {
            return null;
        }
        type() {
            return "solid";
        }
        color() {
            return "";
        }
        viewport_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        viewport_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_pane_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_pane_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        gap_x() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        gap_y() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        title() {
            return "";
        }
        hint() {
            return this.title();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "viewport", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "cursor_position", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "size_real", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "gap", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "Hint", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "viewport_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "viewport_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions_pane_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "dimensions_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "gap_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_graph.prototype, "gap_y", null);
    $.$mol_plot_graph = $mol_plot_graph;
    class $mol_plot_graph_sample extends $.$mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_plot_graph_type: this.type()
            };
        }
        style() {
            return {
                ...super.style(),
                color: this.color()
            };
        }
        type() {
            return "solid";
        }
        color() {
            return "black";
        }
    }
    $.$mol_plot_graph_sample = $mol_plot_graph_sample;
})($ || ($ = {}));
//graph.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/graph/graph.view.css", "[mol_plot_graph] {\n\tstroke: currentColor;\n}\n\n[mol_plot_graph_sample] {\n\tborder-width: 0;\n\tborder-style: solid;\n}\n\n[mol_plot_graph_type=\"dashed\"] {\n\tstroke-dasharray: 4 4;\n\tborder-style: dashed;\n}\n");
})($ || ($ = {}));
//graph.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_graph extends $.$mol_plot_graph {
            viewport() {
                const size = this.size_real();
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(0, size.x), new this.$.$mol_vector_range(0, size.y));
            }
            indexes() {
                return this.series_x().map((_, i) => i);
            }
            points() {
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                const series_x = this.series_x();
                const series_y = this.series_y();
                return this.indexes().map(index => {
                    let point_x = Math.round(shift_x + series_x[index] * scale_x);
                    let point_y = Math.round(shift_y + series_y[index] * scale_y);
                    point_x = Math.max(Number.MIN_SAFE_INTEGER, Math.min(point_x, Number.MAX_SAFE_INTEGER));
                    point_y = Math.max(Number.MIN_SAFE_INTEGER, Math.min(point_y, Number.MAX_SAFE_INTEGER));
                    return [point_x, point_y];
                });
            }
            series_x() {
                return this.series_y().map((val, index) => index);
            }
            dimensions() {
                let next = new this.$.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
                const series_x = this.series_x();
                const series_y = this.series_y();
                for (let i = 0; i < series_x.length; i++) {
                    next = next.expanded1([series_x[i], series_y[i]]);
                }
                return next;
            }
            color() {
                const hue = this.hue();
                return hue ? `hsl( ${hue} , 100% , 35% )` : '';
            }
            front() {
                return [this];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_graph.prototype, "indexes", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_graph.prototype, "series_x", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_graph.prototype, "dimensions", null);
        $$.$mol_plot_graph = $mol_plot_graph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//graph.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_chart_legend extends $.$mol_scroll {
        graphs() {
            return [];
        }
        graphs_front() {
            return [];
        }
        sub() {
            return this.graph_legends();
        }
        Graph_legend(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Graph_sample_box(id),
                this.Graph_title(id)
            ];
            return obj;
        }
        graph_legends() {
            return [];
        }
        Graph_sample(id) {
            return null;
        }
        Graph_sample_box(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Graph_sample(id)
            ];
            return obj;
        }
        graph_title(id) {
            return "";
        }
        Graph_title(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.graph_title(id)
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_legend", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_sample_box", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_chart_legend.prototype, "Graph_title", null);
    $.$mol_chart_legend = $mol_chart_legend;
})($ || ($ = {}));
//legend.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/chart/legend/legend.view.css", "[mol_chart_legend] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex-direction: row;\n\tpadding: .5rem;\n\tmargin: .5rem;\n\tflex: 0 1 auto;\n}\n\n[mol_chart_legend_graph_legend] {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex: 1 1 8rem;\n\tpadding: .5rem;\n}\n\n[mol_chart_legend_graph_title] {\n\tmargin: 0 .25rem;\n\tflex: 1 1 auto;\n}\n\n[mol_chart_legend_graph_sample_box] {\n\tposition: relative;\n\twidth: 1.5rem;\n\tflex: none;\n}\n");
})($ || ($ = {}));
//legend.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chart_legend extends $.$mol_chart_legend {
            graphs_front() {
                return this.graphs().filter(graph => graph.Sample());
            }
            graph_legends() {
                return this.graphs_front().map((graph, index) => this.Graph_legend(index));
            }
            graph_title(index) {
                return this.graphs_front()[index].title();
            }
            Graph_sample(index) {
                return this.graphs_front()[index].Sample();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_chart_legend.prototype, "graphs_front", null);
        $$.$mol_chart_legend = $mol_chart_legend;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//legend.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_touch extends $.$mol_plugin {
        start_zoom(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        start_distance(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        zoom(val) {
            if (val !== undefined)
                return val;
            return 1;
        }
        action_type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        action_point(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_vector_2d(NaN, NaN);
            return obj;
        }
        start_pan(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        pan(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        pointer_center() {
            const obj = new this.$.$mol_vector_2d(NaN, NaN);
            return obj;
        }
        start_pos(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_precision() {
            return 16;
        }
        swipe_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        draw(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        style() {
            return {
                ...super.style(),
                "touch-action": "none",
                "overscroll-behavior": "none"
            };
        }
        event() {
            return {
                ...super.event(),
                pointerdown: (event) => this.event_start(event),
                pointermove: (event) => this.event_move(event),
                pointerup: (event) => this.event_end(event),
                pointerleave: (event) => this.event_end(event),
                wheel: (event) => this.event_wheel(event),
                contextmenu: (event) => this.event_menu(event)
            };
        }
        event_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_wheel(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_menu(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "action_type", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "action_point", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pointer_center", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "draw", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_menu", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//touch.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            auto() {
                this.view_rect();
            }
            pointer_events(next = []) {
                return next;
            }
            pointer_coords() {
                const events = this.pointer_events();
                const touches = events.filter(e => e.pointerType === 'touch');
                const pens = events.filter(e => e.pointerType === 'pen');
                const mouses = events.filter(e => e.pointerType === 'mouse');
                const choosen = touches.length ? touches : pens.length ? pens : mouses;
                return new $.$mol_vector(...choosen.map(event => this.event_coords(event)));
            }
            pointer_center() {
                const coords = this.pointer_coords();
                return coords.length ? coords.center() : new $.$mol_vector_2d(NaN, NaN);
            }
            event_coords(event) {
                const { left, top } = this.view_rect();
                return new $.$mol_vector_2d(Math.round(event.pageX - left), Math.round(event.pageY - top));
            }
            action_point() {
                const coord = this.pointer_center();
                if (!coord)
                    return null;
                const zoom = this.zoom();
                const pan = this.pan();
                return new $.$mol_vector_2d((coord.x - pan.x) / zoom, (coord.y - pan.y) / zoom);
            }
            event_eat(event) {
                if (event instanceof PointerEvent) {
                    const events = this.pointer_events().filter(e => e.pointerId !== event.pointerId);
                    if (event.type !== 'pointerleave')
                        events.push(event);
                    this.pointer_events(events);
                    if (events.filter(e => e.pointerType === 'touch').length === 2) {
                        return this.action_type('zoom');
                    }
                    if (events.length > 0) {
                        if (event.ctrlKey)
                            return this.action_type('zoom');
                        if (event.buttons === 2)
                            return this.action_type('pan');
                        if (event.buttons === 1)
                            return this.action_type('draw');
                    }
                    return this.action_type('');
                }
                if (event instanceof WheelEvent) {
                    if (event.ctrlKey)
                        return this.action_type('zoom');
                    return this.action_type('pan');
                }
                return this.action_type('');
            }
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                const action_type = this.event_eat(event);
                if (!action_type)
                    return;
                if (action_type === 'draw')
                    return;
                const coords = this.pointer_coords();
                this.start_pos(coords.center());
                this.start_distance(coords.distance());
                this.start_zoom(this.zoom());
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const rect = this.view_rect();
                if (!rect)
                    return;
                const start_pan = this.start_pan();
                const action_type = this.event_eat(event);
                let pos = this.pointer_center();
                if (!action_type)
                    return;
                if (action_type === 'draw') {
                    this.draw(event);
                    return;
                }
                const start_pos = this.start_pos();
                if (!start_pos)
                    return;
                if (action_type === 'pan') {
                    const distance = new $.$mol_vector(start_pos, pos).distance();
                    if (distance >= 4) {
                        this._menu_mute = true;
                        this.dom_node().setPointerCapture(event.pointerId);
                    }
                    this.pan(new $.$mol_vector_2d(start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]));
                }
                const precision = this.swipe_precision();
                if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                    || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                    || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                    && pos[0] - start_pos[0] > precision * 2
                    && Math.abs(pos[1] - start_pos[1]) < precision) {
                    this.swipe_right(event);
                }
                if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                    || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                    || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                    && start_pos[0] - pos[0] > precision * 2
                    && Math.abs(pos[1] - start_pos[1]) < precision) {
                    this.swipe_left(event);
                }
                if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                    || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                    || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                    && pos[1] - start_pos[1] > precision * 2
                    && Math.abs(pos[0] - start_pos[0]) < precision) {
                    this.swipe_bottom(event);
                }
                if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                    || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                    || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                    && start_pos[1] - pos[1] > precision * 2
                    && Math.abs(pos[0] - start_pos[0]) < precision) {
                    this.swipe_top(event);
                }
                if (action_type === 'zoom') {
                    const coords = this.pointer_coords();
                    const distance = coords.distance();
                    const start_distance = this.start_distance();
                    const center = coords.center();
                    const start_zoom = this.start_zoom();
                    let mult = Math.abs(distance - start_distance) < 32 ? 1 : distance / start_distance;
                    this.zoom(start_zoom * mult);
                    const pan = new $.$mol_vector_2d((start_pan[0] - center[0] + pos[0] - start_pos[0]) * mult + center[0], (start_pan[1] - center[1] + pos[1] - start_pos[1]) * mult + center[1]);
                    this.pan(pan);
                }
            }
            event_end(event) {
                this.event_eat(event);
                this.dom_node().releasePointerCapture(event.pointerId);
                if (!this.start_pos()) {
                    this.draw(event);
                    return;
                }
                this.start_pos(null);
                new $.$mol_after_timeout(0, () => this._menu_mute = false);
            }
            swipe_left(event) {
                if (this.view_rect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
                this.event_end(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.view_rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
                this.event_end(event);
            }
            swipe_top(event) {
                if (this.view_rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
                this.event_end(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.view_rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
                this.event_end(event);
            }
            _menu_mute = false;
            event_menu(event) {
                if (this._menu_mute)
                    event.preventDefault();
            }
            event_wheel(event) {
                if (this.pan === $mol_touch.prototype.pan && this.zoom === $mol_touch.prototype.zoom)
                    return;
                if (this.pan !== $mol_touch.prototype.pan) {
                    event.preventDefault();
                }
                const action_type = this.event_eat(event);
                if (action_type === 'zoom') {
                    const zoom_prev = this.zoom() || 0.001;
                    const zoom_next = zoom_prev * (1 - .1 * Math.sign(event.deltaY));
                    const mult = zoom_next / zoom_prev;
                    this.zoom(zoom_next);
                    const pan_prev = this.pan();
                    const center = this.pointer_center();
                    const pan_next = pan_prev.multed0(mult).added1(center.multed0(1 - mult));
                    this.pan(pan_next);
                }
                if (action_type === 'pan') {
                    const pan_prev = this.pan();
                    const pan_next = new $.$mol_vector_2d(pan_prev.x - (event.shiftKey ? event.deltaY : event.deltaX), pan_prev.y - (event.shiftKey ? event.deltaX : event.deltaY));
                    this.pan(pan_next);
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_touch.prototype, "pointer_events", null);
        __decorate([
            $.$mol_mem
        ], $mol_touch.prototype, "pointer_coords", null);
        __decorate([
            $.$mol_mem
        ], $mol_touch.prototype, "pointer_center", null);
        __decorate([
            $.$mol_mem
        ], $mol_touch.prototype, "action_point", null);
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//touch.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_pane extends $.$mol_svg_root {
        aspect() {
            return "none";
        }
        hue_base(val) {
            if (val !== undefined)
                return val;
            return NaN;
        }
        hue_shift(val) {
            if (val !== undefined)
                return val;
            return 111;
        }
        gap_hor() {
            return 48;
        }
        gap_vert() {
            return 24;
        }
        gap_left() {
            return this.gap_hor();
        }
        gap_right() {
            return this.gap_hor();
        }
        gap_top() {
            return this.gap_vert();
        }
        gap_bottom() {
            return this.gap_vert();
        }
        gap() {
            const obj = new this.$.$mol_vector_2d(this.gap_x(), this.gap_y());
            return obj;
        }
        shift_limit() {
            const obj = new this.$.$mol_vector_2d(this.shift_limit_x(), this.shift_limit_y());
            return obj;
        }
        shift_default() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        shift(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        scale_limit() {
            const obj = new this.$.$mol_vector_2d(this.scale_limit_x(), this.scale_limit_y());
            return obj;
        }
        scale_default() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        scale(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_vector_2d(1, -1);
            return obj;
        }
        scale_x(val) {
            if (val !== undefined)
                return val;
            return 1;
        }
        scale_y(val) {
            if (val !== undefined)
                return val;
            return -1;
        }
        size() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        size_real() {
            const obj = new this.$.$mol_vector_2d(1, 1);
            return obj;
        }
        dimensions() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y());
            return obj;
        }
        dimensions_viewport() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_viewport_x(), this.dimensions_viewport_y());
            return obj;
        }
        sub() {
            return this.graphs_sorted();
        }
        graphs_colored() {
            return this.graphs_positioned();
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Touch()
            ];
        }
        event() {
            return {
                ...super.event(),
                dblclick: (event) => this.reset(event)
            };
        }
        gap_x() {
            const obj = new this.$.$mol_vector_range(this.gap_left(), this.gap_right());
            return obj;
        }
        gap_y() {
            const obj = new this.$.$mol_vector_range(this.gap_bottom(), this.gap_top());
            return obj;
        }
        shift_limit_x() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        shift_limit_y() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        scale_limit_x() {
            const obj = new this.$.$mol_vector_range(0, Infinity);
            return obj;
        }
        scale_limit_y() {
            const obj = new this.$.$mol_vector_range(0, -Infinity);
            return obj;
        }
        dimensions_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_viewport_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_viewport_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        graphs_sorted() {
            return [];
        }
        graphs() {
            return [];
        }
        graphs_visible() {
            return this.graphs();
        }
        graphs_positioned() {
            return this.graphs_visible();
        }
        zoom(val) {
            if (val !== undefined)
                return val;
            return 1;
        }
        draw(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        cursor_position() {
            return this.Touch().pointer_center();
        }
        action_type() {
            return this.Touch().action_type();
        }
        action_point() {
            return this.Touch().action_point();
        }
        Touch() {
            const obj = new this.$.$mol_touch();
            obj.zoom = (val) => this.zoom(val);
            obj.pan = (val) => this.shift(val);
            obj.draw = (event) => this.draw(event);
            return obj;
        }
        reset(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "hue_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "hue_shift", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "gap", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "shift_limit", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "shift_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "shift", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_limit", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "size", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "size_real", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "gap_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "gap_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "shift_limit_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "shift_limit_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_limit_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "scale_limit_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "dimensions_viewport_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "draw", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "Touch", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_pane.prototype, "reset", null);
    $.$mol_plot_pane = $mol_plot_pane;
})($ || ($ = {}));
//pane.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/pane/pane.view.css", "[mol_plot_pane] {\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tstroke-width: 2px;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//pane.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_pane extends $.$mol_plot_pane {
            dimensions() {
                const graphs = this.graphs();
                let next = new this.$.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
                for (let graph of graphs) {
                    next = next.expanded2(graph.dimensions());
                }
                return next;
            }
            size() {
                const dims = this.dimensions();
                return new this.$.$mol_vector_2d((dims.x.max - dims.x.min) || 1, (dims.y.max - dims.y.min) || 1);
            }
            graph_hue(index) {
                return (360 + (this.hue_base() + this.hue_shift() * index) % 360) % 360;
            }
            graphs_colored() {
                const graphs = this.graphs_positioned();
                for (let index = 0; index < graphs.length; index++) {
                    graphs[index].hue = () => this.graph_hue(index);
                }
                return graphs;
            }
            size_real() {
                const rect = this.view_rect();
                if (!rect)
                    return new this.$.$mol_vector_2d(1, 1);
                return new this.$.$mol_vector_2d(rect.width, rect.height);
            }
            view_box() {
                const size = this.size_real();
                return `0 0 ${size.x} ${size.y}`;
            }
            scale_limit() {
                const { x: { max: right }, y: { max: top } } = super.scale_limit();
                const gap = this.gap();
                const size = this.size();
                const real = this.size_real();
                const left = +(real.x - gap.x.min - gap.x.max) / size.x;
                const bottom = -(real.y - gap.y.max - gap.y.min) / size.y;
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(left, right), new this.$.$mol_vector_range(top, bottom));
            }
            scale_default() {
                const limits = this.scale_limit();
                return new $.$mol_vector_2d(limits.x.min, limits.y.max);
            }
            scale(next) {
                if (next === undefined) {
                    if (!this.graph_touched)
                        return this.scale_default();
                    next = $.$mol_mem_cached(() => this.scale()) ?? this.scale_default();
                }
                this.graph_touched = true;
                return next.limited(this.scale_limit());
            }
            scale_x(next) {
                return this.scale(next === undefined
                    ? undefined
                    : new $.$mol_vector_2d(next, this.scale().y)).x;
            }
            scale_y(next) {
                return this.scale(next === undefined
                    ? undefined
                    : new $.$mol_vector_2d(this.scale().x, next)).y;
            }
            shift_limit() {
                const dims = this.dimensions();
                const [scale_x, scale_y] = this.scale();
                const size = this.size_real();
                const gap = this.gap();
                const left = gap.x.min - dims.x.min * scale_x;
                const right = size.x - gap.x.max - dims.x.max * scale_x;
                const top = gap.y.max - dims.y.max * scale_y;
                const bottom = size.y - gap.y.min - dims.y.min * scale_y;
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(right, left), new this.$.$mol_vector_range(bottom, top));
            }
            shift_default() {
                const limits = this.shift_limit();
                return new $.$mol_vector_2d(limits.x.min, limits.y.min);
            }
            graph_touched = false;
            shift(next) {
                if (next === undefined) {
                    if (!this.graph_touched)
                        return this.shift_default();
                    next = $.$mol_mem_cached(() => this.shift()) ?? this.shift_default();
                }
                this.graph_touched = true;
                return next.limited(this.shift_limit());
            }
            reset(event) {
                this.graph_touched = false;
                this.scale(this.scale_default());
                this.shift(this.shift_default());
            }
            graphs_visible() {
                const viewport = this.dimensions_viewport();
                const size_real = this.size_real();
                const max_x = (viewport.x.max - viewport.x.min) / size_real.x;
                const max_y = (viewport.y.max - viewport.y.min) / size_real.y;
                return this.graphs().filter(graph => {
                    const dims = graph.dimensions();
                    if (dims.x.min > dims.x.max)
                        return true;
                    if (dims.y.min > dims.y.max)
                        return true;
                    if (dims.x.max - dims.x.min < max_x && dims.y.max - dims.y.min < max_y)
                        return false;
                    if (dims.x.min > viewport.x.max)
                        return false;
                    if (dims.x.max < viewport.x.min)
                        return false;
                    if (dims.y.min > viewport.y.max)
                        return false;
                    if (dims.y.max < viewport.y.min)
                        return false;
                    return true;
                });
            }
            graphs_positioned() {
                const graphs = this.graphs_visible();
                for (let graph of graphs) {
                    graph.shift = () => this.shift();
                    graph.scale = () => this.scale();
                    graph.dimensions_pane = () => this.dimensions_viewport();
                    graph.viewport = () => this.viewport();
                    graph.size_real = () => this.size_real();
                    graph.cursor_position = () => this.cursor_position();
                    graph.gap = () => this.gap();
                }
                return graphs;
            }
            dimensions_viewport() {
                const shift = this.shift().multed0(-1);
                const scale = this.scale().powered0(-1);
                return this.viewport().map((range, i) => range.added0(shift[i]).multed0(scale[i]).sort((a, b) => a - b));
            }
            viewport() {
                const size = this.size_real();
                return new this.$.$mol_vector_2d(new this.$.$mol_vector_range(0, size.x), new this.$.$mol_vector_range(0, size.y));
            }
            graphs_sorted() {
                const graphs = this.graphs_colored();
                const sorted = [];
                for (let graph of graphs)
                    sorted.push(...graph.back());
                for (let graph of graphs)
                    sorted.push(...graph.front());
                return sorted;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "dimensions", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "size", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "graphs_colored", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "scale_limit", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "scale", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "shift_limit", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "shift_default", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "shift", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "graphs_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "graphs_positioned", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "dimensions_viewport", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "viewport", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_pane.prototype, "graphs_sorted", null);
        $$.$mol_plot_pane = $mol_plot_pane;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pane.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_chart extends $.$mol_view {
        gap_hor() {
            return 48;
        }
        gap_vert() {
            return 24;
        }
        gap_left() {
            return this.gap_hor();
        }
        gap_right() {
            return this.gap_hor();
        }
        gap_bottom() {
            return this.gap_vert();
        }
        gap_top() {
            return this.gap_vert();
        }
        graphs() {
            return [];
        }
        sub() {
            return [
                this.Legend(),
                this.Plot()
            ];
        }
        Legend() {
            const obj = new this.$.$mol_chart_legend();
            obj.graphs = () => this.graphs_colored();
            return obj;
        }
        hue_base() {
            return 140;
        }
        hue_shift() {
            return 111;
        }
        zoom(val) {
            return this.Plot().scale_x(val);
        }
        graphs_colored() {
            return this.Plot().graphs_colored();
        }
        Plot() {
            const obj = new this.$.$mol_plot_pane();
            obj.zoom = (val) => this.zoom(val);
            obj.gap_left = () => this.gap_left();
            obj.gap_right = () => this.gap_right();
            obj.gap_bottom = () => this.gap_bottom();
            obj.gap_top = () => this.gap_top();
            obj.graphs = () => this.graphs();
            obj.hue_base = () => this.hue_base();
            obj.hue_shift = () => this.hue_shift();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chart.prototype, "Legend", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart.prototype, "Plot", null);
    $.$mol_chart = $mol_chart;
})($ || ($ = {}));
//chart.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/chart/chart.view.css", "[mol_chart] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-self: stretch;\n\tflex: 1 1 auto;\n}\n\n[mol_chart_plot] {\n\tflex: 1 0 50%;\n\tmargin: .5rem;\n}\n");
})($ || ($ = {}));
//chart.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_bar extends $.$mol_plot_graph {
        style() {
            return {
                ...super.style(),
                "stroke-width": this.stroke_width()
            };
        }
        sub() {
            return [
                this.Hint(),
                this.Curve()
            ];
        }
        Sample() {
            const obj = new this.$.$mol_plot_graph_sample();
            obj.color = () => this.color();
            return obj;
        }
        stroke_width() {
            return "1rem";
        }
        curve() {
            return "";
        }
        Curve() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.curve();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_bar.prototype, "Sample", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_bar.prototype, "Curve", null);
    $.$mol_plot_bar = $mol_plot_bar;
})($ || ($ = {}));
//bar.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/bar/bar.view.css", "[mol_plot_bar] {\n\tcolor: var(--mol_skin_base);\n\tstroke-linecap: butt;\n\tstroke-width: 1rem;\n}\n\n[mol_plot_bar_sample] {\n\tbackground: currentColor;\n\tposition: absolute;\n\ttop:0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n}\n");
})($ || ($ = {}));
//bar.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_bar extends $.$mol_plot_bar {
            indexes() {
                const { x: { min: viewport_left, max: viewport_right }, y: { min: viewport_bottom, max: viewport_top }, } = this.viewport();
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                const indexes = [];
                const series_x = this.series_x();
                const series_y = this.series_y();
                let first_x = null;
                let last_x = null;
                for (let i = 0; i < series_x.length; i++) {
                    const scaled = [
                        Math.round(shift_x + series_x[i] * scale_x),
                        Math.round(shift_y + series_y[i] * scale_y),
                    ];
                    if (scaled[0] < viewport_left) {
                        first_x = i;
                        continue;
                    }
                    if (scaled[0] > viewport_right) {
                        if (last_x === null)
                            last_x = i;
                        continue;
                    }
                    if (scaled[1] < viewport_bottom)
                        continue;
                    if (scaled[1] > viewport_top)
                        continue;
                    if (first_x !== null)
                        indexes.push(first_x);
                    indexes.push(i);
                    if (last_x !== null)
                        indexes.push(last_x);
                    first_x = last_x = null;
                }
                if (first_x !== null)
                    indexes.push(first_x);
                if (last_x !== null)
                    indexes.push(last_x);
                return indexes;
            }
            curve() {
                const points = this.points();
                if (points.length === 0)
                    return '';
                const [, shift_y] = this.shift();
                return points.map(point => `M ${point[0]} ${shift_y} V ${point[1]}`).join(' ');
            }
            stroke_width() {
                return (8 / Math.sqrt(this.indexes().length)).toPrecision(2) + '%';
            }
            color() {
                return `hsl( ${this.hue()} , 70% , 85% )`;
            }
            dimensions() {
                let next = new this.$.$mol_vector_2d($.$mol_vector_range_full.inversed, new this.$.$mol_vector_range(0, 0));
                const series_x = this.series_x();
                const series_y = this.series_y();
                for (let i = 0; i < series_x.length; i++) {
                    next = next.expanded1([series_x[i], series_y[i]]);
                }
                const gap = (next.x.max - next.x.min) / series_x.length || 0.00000001;
                next[0] = next.x.added1([-gap, gap]);
                return next;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_bar.prototype, "indexes", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_bar.prototype, "dimensions", null);
        $$.$mol_plot_bar = $mol_plot_bar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bar.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_line extends $.$mol_plot_graph {
        threshold() {
            return 1;
        }
        spacing() {
            return 2;
        }
        color_fill() {
            return "none";
        }
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.curve()
            };
        }
        sub() {
            return [
                this.Hint()
            ];
        }
        Sample() {
            const obj = new this.$.$mol_plot_graph_sample();
            obj.color = () => this.color();
            obj.type = () => this.type();
            return obj;
        }
        curve() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_line.prototype, "Sample", null);
    $.$mol_plot_line = $mol_plot_line;
})($ || ($ = {}));
//line.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/line/line.view.css", "[mol_plot_line] {\n\tcolor: var(--mol_skin_base);\n\tfill: none;\n\tstroke-linejoin: round;\n}\n\n[mol_plot_line_sample] {\n\theight: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tborder-width: 2px 0 0;\n\tposition: absolute;\n\ttop: .75em;\n\ttransform: translateY(-50%);\n}\n");
})($ || ($ = {}));
//line.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_line extends $.$mol_plot_line {
            sub() {
                return this.hint() ? super.sub() : [];
            }
            indexes() {
                const threshold = this.threshold();
                const { x: { min: viewport_left, max: viewport_right }, y: { min: viewport_bottom, max: viewport_top }, } = this.viewport();
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                const indexes = [];
                let last = new $.$mol_vector_2d(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
                let last_zone = new $.$mol_vector_2d(0, 0);
                const series_x = this.series_x();
                const series_y = this.series_y();
                const zone_of = (point) => new $.$mol_vector_2d(point.x < viewport_left ? -1
                    : point.x > viewport_right ? 1
                        : 0, point.y < viewport_bottom ? -1
                    : point.y > viewport_top ? 1
                        : 0);
                for (let i = 0; i < series_x.length - 1; i++) {
                    const scaled = new $.$mol_vector_2d(Math.round(shift_x + series_x[i] * scale_x), Math.round(shift_y + series_y[i] * scale_y));
                    if (Math.abs(scaled.x - last.x) < threshold
                        && Math.abs(scaled.y - last.y) < threshold)
                        continue;
                    const zone = zone_of(scaled);
                    last = scaled;
                    if (zone.x !== 0 && zone.x === last_zone.x || zone.y !== 0 && zone.y === last_zone.y) {
                        continue;
                    }
                    if (last_zone.x !== 0 || last_zone.y !== 0) {
                        indexes.push(i - 1);
                    }
                    last_zone = zone;
                    indexes.push(i);
                }
                indexes.push(series_x.length - 1);
                return indexes;
            }
            curve() {
                const points = this.points();
                if (points.length === 0)
                    return '';
                const main = points.map(point => `L ${point.join(' ')}`).join(' ');
                return `M ${points[0].join(' ')} ${main}`;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_line.prototype, "indexes", null);
        $$.$mol_plot_line = $mol_plot_line;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//line.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_dot extends $.$mol_plot_graph {
        points_max() {
            return Infinity;
        }
        aspect() {
            return 1;
        }
        style() {
            return {
                ...super.style(),
                "stroke-width": this.diameter()
            };
        }
        sub() {
            return [
                this.Hint(),
                this.Curve()
            ];
        }
        Sample() {
            const obj = new this.$.$mol_plot_graph_sample();
            obj.color = () => this.color();
            return obj;
        }
        diameter() {
            return 8;
        }
        curve() {
            return "";
        }
        Curve() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.curve();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_dot.prototype, "Sample", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_dot.prototype, "Curve", null);
    $.$mol_plot_dot = $mol_plot_dot;
})($ || ($ = {}));
//dot.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_coord_pack(a, b) {
        return a << 16 | b & 0xFFFF;
    }
    $.$mol_coord_pack = $mol_coord_pack;
    function $mol_coord_high(key) {
        return key >> 16;
    }
    $.$mol_coord_high = $mol_coord_high;
    function $mol_coord_low(key) {
        return (key & 0xFFFF) << 16 >> 16;
    }
    $.$mol_coord_low = $mol_coord_low;
})($ || ($ = {}));
//coord.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/dot/dot.view.css", "[mol_plot_dot] {\n\tcolor: var(--mol_skin_base);\n\tstroke-linecap: round;\n\tfill: none;\n}\n\n[mol_plot_dot_sample] {\n\twidth: .5rem;\n\theight: .5rem;\n\tborder-radius: 1rem;\n\tbackground: currentColor;\n\tposition: absolute;\n\ttop: .75em;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n}\n");
})($ || ($ = {}));
//dot.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_dot extends $.$mol_plot_dot {
            filled() {
                return new Set();
            }
            indexes() {
                const radius = this.diameter() / 2;
                const points_max = this.points_max();
                const viewport = this.viewport();
                const viewport_left = viewport.x.min - radius;
                const viewport_right = viewport.x.max + radius;
                const viewport_bottom = viewport.y.min - radius;
                const viewport_top = viewport.y.max + radius;
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                let last_x = Number.NEGATIVE_INFINITY;
                let last_y = Number.NEGATIVE_INFINITY;
                let spacing = 0;
                let filled = this.filled();
                let indexes;
                const series_x = this.series_x();
                const series_y = this.series_y();
                do {
                    indexes = [];
                    for (let i = 0; i < series_x.length; i++) {
                        const point_x = series_x[i];
                        const point_y = series_y[i];
                        const scaled_x = Math.round(shift_x + point_x * scale_x);
                        const scaled_y = Math.round(shift_y + point_y * scale_y);
                        if (Math.abs(scaled_x - last_x) < radius
                            && Math.abs(scaled_y - last_y) < radius)
                            continue;
                        last_x = scaled_x;
                        last_y = scaled_y;
                        if (scaled_x < viewport_left)
                            continue;
                        if (scaled_y < viewport_bottom)
                            continue;
                        if (scaled_x > viewport_right)
                            continue;
                        if (scaled_y > viewport_top)
                            continue;
                        if (spacing !== 0) {
                            const key = $.$mol_coord_pack(Math.round(point_x * scale_x / spacing) * spacing, Math.round(point_y * scale_y / spacing) * spacing);
                            if (filled.has(key))
                                continue;
                            filled.add(key);
                        }
                        indexes.push(i);
                        if (indexes.length > points_max)
                            break;
                    }
                    spacing += Math.ceil(radius);
                    filled.clear();
                } while (indexes.length > points_max);
                return indexes;
            }
            curve() {
                const points = this.points();
                if (points.length === 0)
                    return '';
                const diameter = this.diameter();
                const aspect = this.aspect();
                const shift_y = Math.max(0, Math.floor((aspect - 1) * diameter / 2));
                const shift_x = Math.max(0, Math.floor((1 / aspect - 1) * diameter / 2));
                const size_y = Math.max(0, Math.ceil((aspect - 1) * diameter));
                const size_x = Math.max(0, Math.ceil((1 / aspect - 1) * diameter));
                return points.map(point => `M ${point[0] - shift_x} ${point[1] - shift_y} l ${size_x} ${size_y}`).join(' ');
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_dot.prototype, "filled", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_dot.prototype, "indexes", null);
        $$.$mol_plot_dot = $mol_plot_dot;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dot.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_group extends $.$mol_plot_graph {
        sub() {
            return this.graphs_enriched();
        }
        Sample() {
            const obj = new this.$.$mol_plot_graph_sample();
            obj.sub = () => this.graph_samples();
            return obj;
        }
        graphs() {
            return [];
        }
        graphs_enriched() {
            return this.graphs();
        }
        graph_samples() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_group.prototype, "Sample", null);
    $.$mol_plot_group = $mol_plot_group;
})($ || ($ = {}));
//group.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_group extends $.$mol_plot_group {
            graphs_enriched() {
                const graphs = this.graphs();
                for (let graph of graphs) {
                    graph.shift = () => this.shift();
                    graph.scale = () => this.scale();
                    graph.size_real = () => this.size_real();
                    graph.hue = () => this.hue();
                    graph.series_x = () => this.series_x();
                    graph.series_y = () => this.series_y();
                    graph.dimensions_pane = () => this.dimensions_pane();
                    graph.viewport = () => this.viewport();
                    graph.cursor_position = () => this.cursor_position();
                    graph.gap = () => this.gap();
                    graph.title = () => this.title();
                }
                return graphs;
            }
            dimensions() {
                const graphs = this.graphs_enriched();
                let next = new this.$.$mol_vector_2d($.$mol_vector_range_full.inversed, $.$mol_vector_range_full.inversed);
                for (let graph of graphs) {
                    next = next.expanded2(graph.dimensions());
                }
                return next;
            }
            graph_samples() {
                return this.graphs_enriched().map(graph => graph.Sample());
            }
            back() {
                const graphs = this.graphs_enriched();
                const next = [];
                for (let graph of graphs)
                    next.push(...graph.back());
                return next;
            }
            front() {
                const graphs = this.graphs_enriched();
                const next = [];
                for (let graph of graphs)
                    next.push(...graph.front());
                return next;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_group.prototype, "graphs_enriched", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_group.prototype, "dimensions", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_group.prototype, "graph_samples", null);
        $$.$mol_plot_group = $mol_plot_group;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//group.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_text extends $.$mol_svg {
        dom_name() {
            return "text";
        }
        pos() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                x: this.pos_x(),
                y: this.pos_y(),
                "text-anchor": this.align()
            };
        }
        sub() {
            return [
                this.text()
            ];
        }
        pos_x() {
            return "";
        }
        pos_y() {
            return "";
        }
        align() {
            return "middle";
        }
        text() {
            return "";
        }
    }
    $.$mol_svg_text = $mol_svg_text;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/text/text.view.css", "[mol_svg_text] {\n\tfill: currentColor;\n\tstroke: none;\n}\n");
})($ || ($ = {}));
//text.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_text extends $.$mol_svg_text {
            pos_x() {
                return this.pos()[0];
            }
            pos_y() {
                return this.pos()[1];
            }
        }
        $$.$mol_svg_text = $mol_svg_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_rect extends $.$mol_svg {
        dom_name() {
            return "rect";
        }
        pos() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                width: this.width(),
                height: this.height(),
                x: this.pos_x(),
                y: this.pos_y()
            };
        }
        width() {
            return "0";
        }
        height() {
            return "0";
        }
        pos_x() {
            return "";
        }
        pos_y() {
            return "";
        }
    }
    $.$mol_svg_rect = $mol_svg_rect;
})($ || ($ = {}));
//rect.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_rect extends $.$mol_svg_rect {
            pos_x() {
                return this.pos()[0];
            }
            pos_y() {
                return this.pos()[1];
            }
        }
        $$.$mol_svg_rect = $mol_svg_rect;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//rect.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_text_box extends $.$mol_svg_group {
        font_size() {
            return 16;
        }
        width() {
            return 0;
        }
        sub() {
            return [
                this.Back(),
                this.Text()
            ];
        }
        box_width() {
            return "0.5rem";
        }
        box_height() {
            return "1rem";
        }
        box_pos_x() {
            return this.pos_x();
        }
        box_pos_y() {
            return "0";
        }
        Back() {
            const obj = new this.$.$mol_svg_rect();
            obj.width = () => this.box_width();
            obj.height = () => this.box_height();
            obj.pos = () => [
                this.box_pos_x(),
                this.box_pos_y()
            ];
            return obj;
        }
        pos_x() {
            return "0";
        }
        pos_y() {
            return "100%";
        }
        align() {
            return "start";
        }
        text() {
            return "";
        }
        Text() {
            const obj = new this.$.$mol_svg_text();
            obj.pos = () => [
                this.pos_x(),
                this.pos_y()
            ];
            obj.align = () => this.align();
            obj.sub = () => [
                this.text()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_svg_text_box.prototype, "Back", null);
    __decorate([
        $.$mol_mem
    ], $mol_svg_text_box.prototype, "Text", null);
    $.$mol_svg_text_box = $mol_svg_text_box;
})($ || ($ = {}));
//box.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    let canvas;
    function $mol_font_canvas(next = canvas) {
        if (!next)
            next = $.$mol_dom_context.document.createElement('canvas').getContext('2d');
        return canvas = next;
    }
    $.$mol_font_canvas = $mol_font_canvas;
})($ || ($ = {}));
//canvas.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_font_measure(size, face, text) {
        const canvas = $.$mol_font_canvas();
        canvas.font = size + 'px ' + face;
        return canvas.measureText(text).width;
    }
    $.$mol_font_measure = $mol_font_measure;
})($ || ($ = {}));
//measure.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/text/box/box.view.css", "[mol_svg_text_box_back] {\n\tstroke: none;\n\tfill: var(--mol_theme_back);\n}\n");
})($ || ($ = {}));
//box.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg_text_box extends $.$mol_svg_text_box {
            box_width() {
                return `${this.width()}px`;
            }
            width() {
                return $.$mol_font_measure(this.font_size(), this.font_family(), this.text());
            }
            box_pos_x() {
                const align = this.align();
                if (align === 'end')
                    return `calc(${this.pos_x()} - ${this.width()})`;
                if (align === 'middle')
                    return `calc(${this.pos_x()} - ${Math.round(this.width() / 2)})`;
                return this.pos_x();
            }
            box_pos_y() {
                return `calc(${this.pos_y()} - ${this.font_size() - 2})`;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg_text_box.prototype, "width", null);
        $$.$mol_svg_text_box = $mol_svg_text_box;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//box.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_ruler extends $.$mol_plot_graph {
        step() {
            return 0;
        }
        scale_axis() {
            return 1;
        }
        scale_step() {
            return 1;
        }
        shift_axis() {
            return 1;
        }
        dimensions_axis() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        viewport_axis() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        axis_points() {
            return [];
        }
        normalize(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        precision() {
            return 1;
        }
        sub() {
            return [
                this.Background(),
                this.Curve(),
                this.labels_formatted(),
                this.Title()
            ];
        }
        Label(index) {
            const obj = new this.$.$mol_svg_text();
            obj.pos = () => this.label_pos(index);
            obj.text = () => this.label_text(index);
            obj.align = () => this.label_align();
            return obj;
        }
        background_x() {
            return "0";
        }
        background_y() {
            return "0";
        }
        background_width() {
            return "100%";
        }
        background_height() {
            return "14";
        }
        Background() {
            const obj = new this.$.$mol_svg_rect();
            obj.pos_x = () => this.background_x();
            obj.pos_y = () => this.background_y();
            obj.width = () => this.background_width();
            obj.height = () => this.background_height();
            return obj;
        }
        curve() {
            return "";
        }
        Curve() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.curve();
            return obj;
        }
        labels_formatted() {
            return [];
        }
        title_pos_x() {
            return "0";
        }
        title_pos_y() {
            return "100%";
        }
        title_align() {
            return "start";
        }
        Title() {
            const obj = new this.$.$mol_svg_text_box();
            obj.pos_x = () => this.title_pos_x();
            obj.pos_y = () => this.title_pos_y();
            obj.align = () => this.title_align();
            obj.text = () => this.title();
            return obj;
        }
        label_pos_x(index) {
            return "";
        }
        label_pos_y(index) {
            return "";
        }
        label_pos(index) {
            return [
                this.label_pos_x(index),
                this.label_pos_y(index)
            ];
        }
        label_text(index) {
            return "";
        }
        label_align() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "dimensions_axis", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "viewport_axis", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "normalize", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_plot_ruler.prototype, "Label", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "Background", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "Curve", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_ruler.prototype, "Title", null);
    $.$mol_plot_ruler = $mol_plot_ruler;
})($ || ($ = {}));
//ruler.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_math_round_expand(val, gap = 1) {
        if (val === 0)
            return 0;
        const val_abs = Math.abs(val);
        const val_sign = val ? Math.round(val / val_abs) : 0;
        const digits = Math.floor(Math.log(val_abs) / Math.log(10));
        const precission = Math.pow(10, digits - gap);
        const val_expanded = precission * Math.ceil(val_abs / precission);
        return val_sign * val_expanded;
    }
    $.$mol_math_round_expand = $mol_math_round_expand;
})($ || ($ = {}));
//expand.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/ruler/ruler.view.css", "[mol_plot_ruler_curve] {\n\tcolor: var(--mol_theme_line);\n\tstroke-width: 1px;\n\tstroke: currentColor;\n}\n\n[mol_plot_ruler_label] {\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_plot_ruler_title] {\n\tcolor: var(--mol_theme_shade);\n\tbackground-color: var(--mol_theme_back);\n}\n\n[mol_plot_ruler_background] {\n\tstroke: none;\n\tfill: var(--mol_theme_back);\n\topacity: 0.8;\n}\n");
})($ || ($ = {}));
//ruler.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler extends $.$mol_plot_ruler {
            labels_formatted() {
                return this.axis_points().map((point, index) => this.Label(index));
            }
            step() {
                const scale = Math.abs(this.scale_step());
                const dims = this.dimensions_axis();
                const range = dims.max - dims.min;
                const min_width = (Math.abs(Math.log10(range)) + 2) * 15;
                const size = $.$mol_math_round_expand(range, -1);
                const count = Math.max(1, Math.pow(10, Math.floor(Math.log(size * scale / min_width) / Math.log(10))));
                let step = size / count;
                const step_max = min_width * 2 / scale;
                if (step > step_max)
                    step /= 2;
                if (step > step_max)
                    step /= 2;
                return Math.max(step, Math.abs(dims.min) / 1e10, Math.abs(dims.max) / 1e10);
            }
            snap_to_grid(coord) {
                const viewport = this.viewport_axis();
                const scale = this.scale_axis();
                const shift = this.shift_axis();
                const step = this.step();
                const val = Math.round(coord / step) * step;
                if (scale == 0)
                    return val;
                const step_scaled = step * scale;
                const scaled = val * scale + shift;
                let count = 0;
                if (scaled < viewport.min)
                    count = (scaled - viewport.min) / step_scaled;
                if (scaled > viewport.max)
                    count = (scaled - viewport.max) / step_scaled;
                return val - Math.floor(count) * step;
            }
            axis_points() {
                const dims = this.dimensions_axis();
                const start = this.snap_to_grid(dims.min);
                const end = this.snap_to_grid(dims.max);
                const step = this.step();
                const next = [];
                for (let val = start; val <= end; val += step) {
                    next.push(val);
                }
                return next;
            }
            precision() {
                const step = this.step();
                return Math.max(0, Math.min(15, (step - Math.floor(step)).toString().length - 2));
            }
            label_text(index) {
                const point = this.axis_points()[index];
                return point.toFixed(this.precision());
            }
            font_size() {
                return this.Background().font_size();
            }
            back() {
                return [this.Curve()];
            }
            front() {
                return [this.Background(), ...this.labels_formatted(), this.Title()];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_ruler.prototype, "step", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_ruler.prototype, "axis_points", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_ruler.prototype, "precision", null);
        $$.$mol_plot_ruler = $mol_plot_ruler;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ruler.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_ruler_vert extends $.$mol_plot_ruler {
        title_align() {
            return "end";
        }
        label_align() {
            return "end";
        }
        title_pos_y() {
            return "14";
        }
        label_pos_x(v) {
            return this.title_pos_x();
        }
        background_height() {
            return "100%";
        }
        background_width() {
            return this.title_pos_x();
        }
    }
    $.$mol_plot_ruler_vert = $mol_plot_ruler_vert;
})($ || ($ = {}));
//vert.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/ruler/vert/vert.view.css", "[mol_plot_ruler_vert_label] {\n\ttransform: translateY( 4px );\n}\n");
})($ || ($ = {}));
//vert.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
            dimensions_axis() {
                return this.dimensions_pane().y;
            }
            viewport_axis() {
                return new this.$.$mol_vector_range(0, this.size_real().y);
            }
            scale_axis() {
                return this.scale()[1];
            }
            scale_step() {
                return -this.scale()[1];
            }
            shift_axis() {
                return this.shift()[1];
            }
            curve() {
                const [, shift] = this.shift();
                const [, scale] = this.scale();
                return this.axis_points().map(point => {
                    let scaled = Math.round(point * scale + shift);
                    scaled = Math.max(Number.MIN_SAFE_INTEGER, Math.min(scaled, Number.MAX_SAFE_INTEGER));
                    return `M 0 ${scaled} H 2000`;
                }).join(' ');
            }
            title_pos_x() {
                return String(this.gap().x.min);
            }
            label_pos_y(index) {
                return (this.axis_points()[index] * this.scale()[1] + this.shift()[1]).toFixed(3);
            }
        }
        $$.$mol_plot_ruler_vert = $mol_plot_ruler_vert;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//vert.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_ruler_hor extends $.$mol_plot_ruler {
        title_align() {
            return "start";
        }
        label_align() {
            return "middle";
        }
        title_pos_x() {
            return "0";
        }
        title_pos_y() {
            return "100%";
        }
        label_pos_y(v) {
            return this.title_pos_y();
        }
        background_width() {
            return "100%";
        }
    }
    $.$mol_plot_ruler_hor = $mol_plot_ruler_hor;
})($ || ($ = {}));
//hor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/ruler/hor/hor.view.css", "[mol_plot_ruler_hor_label] {\n\ttransform: translateY( -4px );\n}\n\n[mol_plot_ruler_hor_title] {\n\ttransform: translateY( -4px );\n}\n");
})($ || ($ = {}));
//hor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
            dimensions_axis() {
                return this.dimensions_pane().x;
            }
            viewport_axis() {
                return new this.$.$mol_vector_range(0, this.size_real().x);
            }
            scale_axis() {
                return this.scale()[0];
            }
            scale_step() {
                return this.scale()[0];
            }
            shift_axis() {
                return this.shift()[0];
            }
            curve() {
                const [shift] = this.shift();
                const [scale] = this.scale();
                return this.axis_points().map(point => {
                    let scaled = Math.round(point * scale + shift);
                    scaled = Math.max(Number.MIN_SAFE_INTEGER, Math.min(scaled, Number.MAX_SAFE_INTEGER));
                    return `M ${scaled} 1000 V 0`;
                }).join(' ');
            }
            label_pos_x(index) {
                return (this.axis_points()[index] * this.scale()[0] + this.shift()[0]).toFixed(3);
            }
            background_y() {
                return String(this.size_real()[1] - this.font_size());
            }
            title_pos_y() {
                return String(this.size_real()[1]);
            }
            background_height() {
                return String(this.font_size());
            }
        }
        $$.$mol_plot_ruler_hor = $mol_plot_ruler_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hor.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_mark_hor extends $.$mol_plot_ruler_hor {
        labels() {
            return [];
        }
    }
    $.$mol_plot_mark_hor = $mol_plot_mark_hor;
})($ || ($ = {}));
//hor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/mark/hor/hor.view.css", "[mol_plot_mark_hor_curve] {\n\tcolor: var(--mol_theme_line);\n\tstroke-width: .1%;\n\tstroke: currentColor;\n\tpointer-events: none;\n}\n\n[mol_plot_mark_hor_label] {\n\tcolor: var(--mol_theme_text);\n\ttransform: translateY( -4px );\n}\n\n[mol_plot_mark_hor_title] {\n\tcolor: var(--mol_theme_shade);\n\ttransform: translateY( -4px );\n}\n");
})($ || ($ = {}));
//hor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_mark_hor extends $.$mol_plot_mark_hor {
            series_x() {
                return this.labels().map((val, index) => index);
            }
            labels() {
                return this.series_x().map(val => String(val));
            }
            visible_indexes() {
                const series_x = this.series_x();
                const labels = this.labels();
                const [shift_x,] = this.shift();
                const [scale_x,] = this.scale();
                let step = this.step() * scale_x;
                const [[viewport_left, viewport_right]] = this.viewport();
                const size_x = viewport_right - viewport_left;
                const font_size = this.font_size();
                let indexes;
                let labels_width;
                do {
                    indexes = [];
                    labels_width = 0;
                    let last = 0;
                    let current = 0;
                    for (let i = 0; i < series_x.length; i++) {
                        const point_x = series_x[i];
                        const scaled_x = (shift_x + point_x * scale_x);
                        if (scaled_x < viewport_left)
                            continue;
                        if (scaled_x > viewport_right)
                            continue;
                        if (current === 0)
                            current = scaled_x;
                        if (scaled_x < current) {
                            last = i;
                            continue;
                        }
                        indexes.push(i);
                        current += step;
                        last = 0;
                        labels_width += font_size * (labels[i].length + 1);
                        if (labels_width > size_x)
                            break;
                    }
                    if (last !== 0) {
                        indexes.push(last);
                        labels_width += font_size * (labels[last].length + 1);
                    }
                    step *= 1.5;
                } while (labels_width > size_x && indexes.length > 2);
                return indexes;
            }
            curve() {
                const [shift] = this.shift();
                const [scale] = this.scale();
                const series_x = this.series_x();
                return this.visible_indexes().map(index => {
                    const scaled = series_x[index] * scale + shift;
                    return `M ${scaled.toFixed(3)} 1000 V 0`;
                }).join(' ');
            }
            label_text(index) {
                return this.labels()[index];
            }
            labels_formatted() {
                return this.visible_indexes().map(index => this.Label(index));
            }
            label_pos_x(index) {
                return (this.series_x()[index] * this.scale()[0] + this.shift()[0]).toFixed(3);
            }
            label_pos_y(index) {
                return this.title_pos_y();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_mark_hor.prototype, "series_x", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_mark_hor.prototype, "labels", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_mark_hor.prototype, "visible_indexes", null);
        $$.$mol_plot_mark_hor = $mol_plot_mark_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hor.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_mark_cross extends $.$mol_plot_graph {
        labels() {
            return [];
        }
        title_x_gap() {
            return 4;
        }
        threshold() {
            return 16;
        }
        graphs() {
            return [];
        }
        dimensions() {
            const obj = new this.$.$mol_vector_2d(this.dimensions_x(), this.dimensions_y());
            return obj;
        }
        sub() {
            return [
                this.Curve(),
                this.Label_x(),
                this.Label_y()
            ];
        }
        dimensions_x() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        dimensions_y() {
            const obj = new this.$.$mol_vector_range(Infinity, -Infinity);
            return obj;
        }
        curve() {
            return "";
        }
        Curve() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.curve();
            return obj;
        }
        title_x_pos_x() {
            return "0";
        }
        title_x_pos_y() {
            return "100%";
        }
        title_x() {
            return "";
        }
        Label_x() {
            const obj = new this.$.$mol_svg_text_box();
            obj.pos_x = () => this.title_x_pos_x();
            obj.pos_y = () => this.title_x_pos_y();
            obj.text = () => this.title_x();
            return obj;
        }
        title_y_pos_x() {
            return "0";
        }
        title_y_pos_y() {
            return "0";
        }
        title_y() {
            return "";
        }
        Label_y() {
            const obj = new this.$.$mol_svg_text_box();
            obj.pos_x = () => this.title_y_pos_x();
            obj.pos_y = () => this.title_y_pos_y();
            obj.text = () => this.title_y();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "dimensions_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "Curve", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "Label_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_mark_cross.prototype, "Label_y", null);
    $.$mol_plot_mark_cross = $mol_plot_mark_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/mark/cross/cross.view.css", "[mol_plot_mark_cross_curve] {\n\tcolor: var(--mol_theme_focus);\n\tstroke-width: 1px;\n\tstroke: currentColor;\n\tpointer-events: none;\n}\n\n[mol_plot_mark_cross_label_x], [mol_plot_mark_cross_label_y] {\n\tcolor: var(--mol_theme_focus);\n\tfont-weight: bold;\n\tpointer-events: none;\n}\n\n[mol_plot_mark_cross_label_y] {\n\ttransform: translateY( 4px );\n}\n");
})($ || ($ = {}));
//cross.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_mark_cross extends $.$mol_plot_mark_cross {
            nearest() {
                let delta = this.threshold() ** 2;
                const [cursor_x, cursor_y] = this.cursor_position();
                if (Number.isNaN(cursor_x) || Number.isNaN(cursor_y))
                    return null;
                const graphs = this.graphs();
                let index = 0;
                let graph = null;
                const [shift_x, shift_y] = this.shift();
                const [scale_x, scale_y] = this.scale();
                for (let current of graphs) {
                    const indexes = current.indexes();
                    const series_x = current.series_x();
                    const series_y = current.series_y();
                    for (let i of indexes) {
                        const point_x = shift_x + series_x[i] * scale_x;
                        const point_y = shift_y + series_y[i] * scale_y;
                        const diff = (point_x - cursor_x) ** 2 + (point_y - cursor_y) ** 2;
                        if (diff < delta) {
                            delta = diff;
                            index = i;
                            graph = current;
                        }
                    }
                }
                if (!graph)
                    return null;
                const value = new $.$mol_vector_2d(graph.series_x()[index], graph.series_y()[index]);
                const scaled = new $.$mol_vector_2d(shift_x + value.x * scale_x, shift_y + value.y * scale_y);
                return { value, scaled, index };
            }
            curve() {
                const nearest = this.nearest();
                if (!nearest)
                    return '';
                return `M ${nearest.scaled.x.toFixed(3)} 1000 V 0 M 0 ${nearest.scaled.y.toFixed(3)} H 2000`;
            }
            title_x() {
                const nearest = this.nearest();
                if (!nearest)
                    return '';
                const labels = this.labels();
                if (labels.length > nearest.index)
                    return labels[nearest.index];
                return String(nearest.value.x);
            }
            title_x_pos_x() {
                const nearest = this.nearest();
                if (!nearest)
                    return '0';
                const width = this.Label_x().width();
                return (nearest.scaled.x - width / 2).toFixed(3);
            }
            title_x_pos_y() {
                const nearest = this.nearest();
                if (!nearest)
                    return '0';
                const pos = this.size_real().y - this.title_x_gap();
                return pos.toFixed(3);
            }
            title_y() {
                const nearest = this.nearest();
                if (!nearest)
                    return '';
                return String(nearest.value.y);
            }
            title_y_pos_y() {
                const nearest = this.nearest();
                if (!nearest)
                    return '0';
                return nearest.scaled.y.toFixed(3);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_mark_cross.prototype, "nearest", null);
        $$.$mol_plot_mark_cross = $mol_plot_mark_cross;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//cross.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_chart_demo_simple extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text('$mol_chart_demo_simple_title');
        }
        sub() {
            return [
                this.Chart()
            ];
        }
        plan_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_simple_plan_title');
        }
        plan() {
            return [
                10,
                20,
                30,
                40
            ];
        }
        Plan() {
            const obj = new this.$.$mol_plot_bar();
            obj.title = () => this.plan_title();
            obj.series_y = () => this.plan();
            return obj;
        }
        fact_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_simple_fact_title');
        }
        facts() {
            return [
                5,
                10,
                30
            ];
        }
        Fact_line() {
            const obj = new this.$.$mol_plot_line();
            return obj;
        }
        Fact_dots() {
            const obj = new this.$.$mol_plot_dot();
            return obj;
        }
        Fact() {
            const obj = new this.$.$mol_plot_group();
            obj.title = () => this.fact_title();
            obj.series_y = () => this.facts();
            obj.graphs = () => [
                this.Fact_line(),
                this.Fact_dots()
            ];
            return obj;
        }
        vert_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_simple_vert_title');
        }
        Vert_ruler() {
            const obj = new this.$.$mol_plot_ruler_vert();
            obj.title = () => this.vert_title();
            return obj;
        }
        marker_hor_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_simple_marker_hor_title');
        }
        months() {
            return [
                "January",
                "February",
                "March",
                "April"
            ];
        }
        Marker_hor() {
            const obj = new this.$.$mol_plot_mark_hor();
            obj.title = () => this.marker_hor_title();
            obj.labels = () => this.months();
            return obj;
        }
        Marker_cross() {
            const obj = new this.$.$mol_plot_mark_cross();
            obj.labels = () => this.months();
            obj.graphs = () => [
                this.Plan(),
                this.Fact_dots()
            ];
            return obj;
        }
        Chart() {
            const obj = new this.$.$mol_chart();
            obj.graphs = () => [
                this.Plan(),
                this.Fact(),
                this.Vert_ruler(),
                this.Marker_hor(),
                this.Marker_cross()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Plan", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Fact_line", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Fact_dots", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Fact", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Vert_ruler", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Marker_hor", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Marker_cross", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_simple.prototype, "Chart", null);
    $.$mol_chart_demo_simple = $mol_chart_demo_simple;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_fill extends $.$mol_plot_line {
        threshold() {
            return 4;
        }
    }
    $.$mol_plot_fill = $mol_plot_fill;
})($ || ($ = {}));
//fill.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/fill/fill.view.css", "[mol_plot_fill] {\n\tstroke: none;\n\tstroke-width: 0;\n\topacity: .1;\n\tfill: currentColor;\n\tpointer-events: none;\n}\n\n[mol_plot_fill_sample] {\n\topacity: .1;\n\tbackground: currentColor;\n\tposition: absolute;\n\tbottom: 0;\n\ttop: .75em;\n\tleft: 0;\n\tright: 0;\n}\n");
})($ || ($ = {}));
//fill.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_fill extends $.$mol_plot_fill {
            curve() {
                const points = this.points();
                if (points.length === 0)
                    return '';
                const [, shift_y] = this.shift();
                const main = points.map(point => `L ${point.join(' ')}`).join(' ');
                return `M ${points[0].join(' ')} ${main} V ${shift_y} H ${points[0][0]}`;
            }
            front() {
                return [];
            }
            back() {
                return [this];
            }
        }
        $$.$mol_plot_fill = $mol_plot_fill;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//fill.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_chart_demo_styles extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text('$mol_chart_demo_styles_title');
        }
        samples_count() {
            return 15;
        }
        sub() {
            return [
                this.Chart()
            ];
        }
        receipts_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_styles_receipts_title');
        }
        series_x() {
            return [];
        }
        series_2_y() {
            return [];
        }
        Receipts() {
            const obj = new this.$.$mol_plot_bar();
            obj.title = () => this.receipts_title();
            obj.series_x = () => this.series_x();
            obj.series_y = () => this.series_2_y();
            return obj;
        }
        receipts_confirmed_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_styles_receipts_confirmed_title');
        }
        series_3_y() {
            return [];
        }
        Receipts_confirmed() {
            const obj = new this.$.$mol_plot_bar();
            obj.title = () => this.receipts_confirmed_title();
            obj.series_x = () => this.series_x();
            obj.series_y = () => this.series_3_y();
            return obj;
        }
        maximum_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_styles_maximum_title');
        }
        series_1_y() {
            return [];
        }
        Maximum() {
            const obj = new this.$.$mol_plot_dot();
            obj.title = () => this.maximum_title();
            obj.series_x = () => this.series_x();
            obj.series_y = () => this.series_1_y();
            return obj;
        }
        waste_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_styles_waste_title');
        }
        series_4_y() {
            return [];
        }
        Waste() {
            const obj = new this.$.$mol_plot_line();
            obj.type = () => "dashed";
            obj.title = () => this.waste_title();
            obj.series_x = () => this.series_x();
            obj.series_y = () => this.series_4_y();
            return obj;
        }
        purchases_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_styles_purchases_title');
        }
        series_5_y() {
            return [];
        }
        Purchases_fill() {
            const obj = new this.$.$mol_plot_fill();
            return obj;
        }
        Purchases_line() {
            const obj = new this.$.$mol_plot_line();
            return obj;
        }
        Purchases_dots() {
            const obj = new this.$.$mol_plot_dot();
            return obj;
        }
        Purchases() {
            const obj = new this.$.$mol_plot_group();
            obj.title = () => this.purchases_title();
            obj.series_x = () => this.series_x();
            obj.series_y = () => this.series_5_y();
            obj.graphs = () => [
                this.Purchases_fill(),
                this.Purchases_line(),
                this.Purchases_dots()
            ];
            return obj;
        }
        taxes_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_styles_taxes_title');
        }
        series_6_y() {
            return [];
        }
        Taxes_fill() {
            const obj = new this.$.$mol_plot_fill();
            return obj;
        }
        Taxes_line() {
            const obj = new this.$.$mol_plot_line();
            obj.type = () => "dashed";
            return obj;
        }
        Taxes_dots() {
            const obj = new this.$.$mol_plot_dot();
            return obj;
        }
        Taxes() {
            const obj = new this.$.$mol_plot_group();
            obj.title = () => this.taxes_title();
            obj.series_x = () => this.series_x();
            obj.series_y = () => this.series_6_y();
            obj.graphs = () => [
                this.Taxes_fill(),
                this.Taxes_line(),
                this.Taxes_dots()
            ];
            return obj;
        }
        energy_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_styles_energy_title');
        }
        Energy() {
            const obj = new this.$.$mol_plot_ruler_vert();
            obj.title = () => this.energy_title();
            return obj;
        }
        day_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_styles_day_title');
        }
        Day() {
            const obj = new this.$.$mol_plot_mark_hor();
            obj.title = () => this.day_title();
            obj.series_x = () => this.series_x();
            return obj;
        }
        graphs() {
            return [
                this.Receipts(),
                this.Receipts_confirmed(),
                this.Maximum(),
                this.Waste(),
                this.Purchases(),
                this.Taxes(),
                this.Energy(),
                this.Day()
            ];
        }
        Chart() {
            const obj = new this.$.$mol_chart();
            obj.graphs = () => this.graphs();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Receipts", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Receipts_confirmed", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Maximum", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Waste", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Purchases_fill", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Purchases_line", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Purchases_dots", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Purchases", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Taxes_fill", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Taxes_line", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Taxes_dots", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Taxes", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Energy", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Day", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_styles.prototype, "Chart", null);
    $.$mol_chart_demo_styles = $mol_chart_demo_styles;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chart_demo_styles extends $.$mol_chart_demo_styles {
            limit() {
                const shift = 10;
                return [shift, shift + this.samples_count()];
            }
            series_x() {
                const next = [];
                const [shift, limit] = this.limit();
                for (let i = shift; i < limit; i++)
                    next.push(i);
                return next;
            }
            series_y() {
                const [, limit] = this.limit();
                return this.series_x().map(i => Number((6.5 + Math.sin(8 * i / limit)).toFixed(3)));
            }
            series_1_y() {
                return this.series_y().map(val => (val - 1).toFixed(3)).map(Number);
            }
            series_2_y() {
                return this.series_y().map(val => (val - 2).toFixed(3)).map(Number);
            }
            series_3_y() {
                return this.series_y().map(val => (val - 3).toFixed(3)).map(Number);
            }
            series_4_y() {
                return this.series_y().map(val => (val - 4).toFixed(3)).map(Number);
            }
            series_5_y() {
                return this.series_y().map(val => (val - 5).toFixed(3)).map(Number);
            }
            series_6_y() {
                return this.series_y().map(val => (val - 6).toFixed(3)).map(Number);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_x", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_y", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_1_y", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_2_y", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_3_y", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_4_y", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_5_y", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_styles.prototype, "series_6_y", null);
        $$.$mol_chart_demo_styles = $mol_chart_demo_styles;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_chart_demo_forces extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text('$mol_chart_demo_forces_title');
        }
        samples_count() {
            return 10000;
        }
        points_max() {
            return 1000;
        }
        sub() {
            return [
                this.Chart()
            ];
        }
        forces_left_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_forces_forces_left_title');
        }
        forces_left_x() {
            return [];
        }
        forces_left_y() {
            return [];
        }
        Forces_left() {
            const obj = new this.$.$mol_plot_dot();
            obj.title = () => this.forces_left_title();
            obj.series_x = () => this.forces_left_x();
            obj.series_y = () => this.forces_left_y();
            obj.points_max = () => this.points_max();
            return obj;
        }
        forces_right_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_forces_forces_right_title');
        }
        forces_right_x() {
            return [];
        }
        forces_right_y() {
            return [];
        }
        Forces_right() {
            const obj = new this.$.$mol_plot_dot();
            obj.title = () => this.forces_right_title();
            obj.series_x = () => this.forces_right_x();
            obj.series_y = () => this.forces_right_y();
            obj.points_max = () => this.points_max();
            return obj;
        }
        vert_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_forces_vert_title');
        }
        Vert_ruler() {
            const obj = new this.$.$mol_plot_ruler_vert();
            obj.title = () => this.vert_title();
            return obj;
        }
        hor_title() {
            return this.$.$mol_locale.text('$mol_chart_demo_forces_hor_title');
        }
        Hor_ruler() {
            const obj = new this.$.$mol_plot_ruler_hor();
            obj.title = () => this.hor_title();
            obj.series_x = () => this.forces_left_x();
            return obj;
        }
        Cross() {
            const obj = new this.$.$mol_plot_mark_cross();
            obj.graphs = () => [
                this.Forces_left(),
                this.Forces_right()
            ];
            return obj;
        }
        Chart() {
            const obj = new this.$.$mol_chart();
            obj.graphs = () => [
                this.Forces_left(),
                this.Forces_right(),
                this.Vert_ruler(),
                this.Hor_ruler(),
                this.Cross()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_forces.prototype, "Forces_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_forces.prototype, "Forces_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_forces.prototype, "Vert_ruler", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_forces.prototype, "Hor_ruler", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_forces.prototype, "Cross", null);
    __decorate([
        $.$mol_mem
    ], $mol_chart_demo_forces.prototype, "Chart", null);
    $.$mol_chart_demo_forces = $mol_chart_demo_forces;
})($ || ($ = {}));
//forces.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chart_demo_forces extends $.$mol_chart_demo_forces {
            generate_forces() {
                const samples_count = this.samples_count();
                const max_x = 600;
                const base_y = 80;
                const amplitude = 5;
                const freq = 50;
                const series_x = [];
                const series_y = [];
                const ratio = max_x / samples_count;
                for (let i = 0; i < samples_count; i++) {
                    const deviation = Math.random() > 0.6 ? (Math.random() * 3) : Math.random();
                    const value = Number((base_y + Math.sin((freq / samples_count) * i) * amplitude * deviation).toFixed(3));
                    series_x.push(Number(Number(i * ratio).toFixed(3)));
                    series_y.push(value);
                }
                return [series_x, series_y];
            }
            forces_left() {
                return this.generate_forces();
            }
            forces_right() {
                return this.generate_forces();
            }
            forces_left_x() {
                return this.forces_left()[0];
            }
            forces_left_y() {
                return this.forces_left()[1];
            }
            forces_right_x() {
                return this.forces_right()[0];
            }
            forces_right_y() {
                return this.forces_right()[1];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_forces.prototype, "forces_left", null);
        __decorate([
            $.$mol_mem
        ], $mol_chart_demo_forces.prototype, "forces_right", null);
        $$.$mol_chart_demo_forces = $mol_chart_demo_forces;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//forces.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_forum extends $.$mol_icon {
        path() {
            return "M17,12V3C17,2.45 16.55,2 16,2H3C2.45,2 2,2.45 2,3V17L6,13H16C16.55,13 17,12.55 17,12M21,6H19V15H6V17C6,17.55 6.45,18 7,18H18L22,22V7C22,6.45 21.55,6 21,6Z";
        }
    }
    $.$mol_icon_forum = $mol_icon_forum;
})($ || ($ = {}));
//forum.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_forum_outline extends $.$mol_icon {
        path() {
            return "M15,4V11H5.17L4,12.17V4H15M16,2H3C2.45,2 2,2.45 2,3V17L6,13H16C16.55,13 17,12.55 17,12V3C17,2.45 16.55,2 16,2M21,6H19V15H6V17C6,17.55 6.45,18 7,18H18L22,22V7C22,6.45 21.55,6 21,6Z";
        }
    }
    $.$mol_icon_forum_outline = $mol_icon_forum_outline;
})($ || ($ = {}));
//outline.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_open_in_new extends $.$mol_icon {
        path() {
            return "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V12H19V19Z";
        }
    }
    $.$mol_icon_open_in_new = $mol_icon_open_in_new;
})($ || ($ = {}));
//new.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_frame extends $.$mol_scroll {
        dom_name() {
            return "iframe";
        }
        attr() {
            return {
                src: this.uri(),
                srcdoc: this.html(),
                allow: this.allow()
            };
        }
        fullscreen() {
            return true;
        }
        accelerometer() {
            return true;
        }
        autoplay() {
            return true;
        }
        encription() {
            return true;
        }
        gyroscope() {
            return true;
        }
        pip() {
            return true;
        }
        uri(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        html() {
            return null;
        }
        allow() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_frame.prototype, "uri", null);
    $.$mol_frame = $mol_frame;
})($ || ($ = {}));
//frame.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_wait_timeout = $.$mol_fiber_sync((timeout) => new Promise(done => new $.$mol_after_timeout(timeout, () => done(null))));
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_define($.$mol_frame, {
        border: {
            style: 'none',
        },
        flex: 'auto',
    });
})($ || ($ = {}));
//frame.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_frame extends $.$mol_frame {
            window() {
                const node = this.dom_node();
                this.uri_resource();
                return $.$mol_fiber_sync(() => new Promise((done, fail) => {
                    new $.$mol_after_timeout(3_000, () => {
                        try {
                            if (node.contentWindow.location.href === 'about:blank') {
                                done(node.contentWindow);
                            }
                        }
                        catch { }
                    });
                    node.onload = () => {
                        done(node.contentWindow);
                    };
                    node.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                }))();
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            _uri_sync;
            uri_listener() {
                const node = this.dom_node();
                return new $.$mol_dom_listener($.$mol_dom_context, 'message', $.$mol_fiber_root((event) => {
                    if (event.source !== node.contentWindow)
                        return;
                    if (!Array.isArray(event.data))
                        return;
                    if (event.data[0] !== 'hashchange')
                        return;
                    this._uri_sync?.destructor();
                    this._uri_sync = $.$mol_fiber.current;
                    $.$mol_wait_timeout(1000);
                    this.uri(event.data[1]);
                }));
            }
            render() {
                const node = super.render();
                this.uri_listener();
                this.window();
                return node;
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                ].join(';');
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_frame.prototype, "window", null);
        __decorate([
            $.$mol_mem
        ], $mol_frame.prototype, "uri_resource", null);
        __decorate([
            $.$mol_mem
        ], $mol_frame.prototype, "uri_listener", null);
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//frame.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_chat extends $.$mol_link {
        seed() {
            return "";
        }
        opened() {
            return false;
        }
        arg() {
            return {
                mol_chat: ""
            };
        }
        hint() {
            return this.title();
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        pages() {
            return [
                this.Page()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_forum_outline();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$mol_chat_title');
        }
        external() {
            return "";
        }
        External_icon() {
            const obj = new this.$.$mol_icon_open_in_new();
            return obj;
        }
        Esternal() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.external();
            obj.sub = () => [
                this.External_icon()
            ];
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                mol_chat: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        embed() {
            return "";
        }
        Embed() {
            const obj = new this.$.$mol_frame();
            obj.uri = () => this.embed();
            return obj;
        }
        Page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.title();
            obj.tools = () => [
                this.Esternal(),
                this.Close()
            ];
            obj.Body = () => this.Embed();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "External_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "Esternal", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "Embed", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "Page", null);
    $.$mol_chat = $mol_chat;
})($ || ($ = {}));
//chat.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_media extends $.$mol_object2 {
        static match(query) {
            const res = this.$.$mol_dom_context.matchMedia(query);
            res.onchange = () => $.$mol_mem_cached(() => this.match(query), res.matches);
            return res.matches;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_media, "match", null);
    $.$mol_media = $mol_media;
})($ || ($ = {}));
//media.js.map
;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = this.$mol_media.match('(prefers-color-scheme: light)');
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//lights.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/chat/chat.view.css", "[mol_chat_page] {\n\tflex: 1 0 30rem;\n}\n");
})($ || ($ = {}));
//chat.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chat extends $.$mol_chat {
            opened() {
                return this.$.$mol_state_arg.value('mol_chat') !== null;
            }
            pages() {
                return this.opened() ? [this.Page()] : [];
            }
            external() {
                const seed = this.seed();
                const origin = new URL(this.$.$mol_state_arg.href()).origin;
                return `https://talks.hyoo.ru/#!chat=${encodeURIComponent(origin + '/' + seed)}`;
            }
            embed() {
                const seed = this.seed();
                const lights = String(this.$.$mol_lights());
                const embed = this.$.$mol_state_arg.href();
                return `https://talks.hyoo.ru/#!chat=${encodeURIComponent(seed)}/embed=${encodeURIComponent(embed)}/mol_lights=${lights}`;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_chat.prototype, "external", null);
        __decorate([
            $.$mol_mem
        ], $mol_chat.prototype, "embed", null);
        $$.$mol_chat = $mol_chat;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//chat.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_chat_demo extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_chat_demo_title');
        }
        sub() {
            return [
                this.Chat()
            ];
        }
        chat_pages() {
            return this.Chat().pages();
        }
        Chat() {
            const obj = new this.$.$mol_chat();
            obj.seed = () => "mol_chat_demo";
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chat_demo.prototype, "Chat", null);
    $.$mol_chat_demo = $mol_chat_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/chat/demo/demo.view.css", "[mol_chat_demo_pages] {\n\tflex: 1 1 auto;\n}\n");
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_box_demo extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_check_box_demo_title');
        }
        rows() {
            return [
                this.Labeled_base(),
                this.Labeled_checked(),
                this.Labeled_disabled(),
                this.Alone_base(),
                this.Alone_checked(),
                this.Alone_disabled()
            ];
        }
        base_checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        c1Label() {
            return this.$.$mol_locale.text('$mol_check_box_demo_c1Label');
        }
        Labeled_base() {
            const obj = new this.$.$mol_check_box();
            obj.checked = (val) => this.base_checked(val);
            obj.title = () => this.c1Label();
            return obj;
        }
        c2Label() {
            return this.$.$mol_locale.text('$mol_check_box_demo_c2Label');
        }
        checked_checked(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Labeled_checked() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.c2Label();
            obj.checked = (val) => this.checked_checked(val);
            return obj;
        }
        c6Label() {
            return this.$.$mol_locale.text('$mol_check_box_demo_c6Label');
        }
        Labeled_disabled() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.c6Label();
            obj.checked = () => true;
            obj.enabled = () => false;
            return obj;
        }
        Alone_base() {
            const obj = new this.$.$mol_check_box();
            obj.checked = (val) => this.base_checked(val);
            return obj;
        }
        Alone_checked() {
            const obj = new this.$.$mol_check_box();
            obj.checked = (val) => this.checked_checked(val);
            return obj;
        }
        Alone_disabled() {
            const obj = new this.$.$mol_check_box();
            obj.checked = () => true;
            obj.enabled = () => false;
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "base_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Labeled_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "checked_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Labeled_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Labeled_disabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Alone_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Alone_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_box_demo.prototype, "Alone_disabled", null);
    $.$mol_check_box_demo = $mol_check_box_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand_demo extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_check_expand_demo_title');
        }
        rows() {
            return [
                this.Labeled_base(),
                this.Labeled_expanded(),
                this.Disabled(),
                this.Empty_base(),
                this.Empty_expanded()
            ];
        }
        base_expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        c1Label() {
            return this.$.$mol_locale.text('$mol_check_expand_demo_c1Label');
        }
        Labeled_base() {
            const obj = new this.$.$mol_check_expand();
            obj.checked = (val) => this.base_expanded(val);
            obj.title = () => this.c1Label();
            return obj;
        }
        c2Label() {
            return this.$.$mol_locale.text('$mol_check_expand_demo_c2Label');
        }
        expanded_expanded(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Labeled_expanded() {
            const obj = new this.$.$mol_check_expand();
            obj.title = () => this.c2Label();
            obj.checked = (val) => this.expanded_expanded(val);
            return obj;
        }
        c5Label() {
            return this.$.$mol_locale.text('$mol_check_expand_demo_c5Label');
        }
        Disabled() {
            const obj = new this.$.$mol_check_expand();
            obj.title = () => this.c5Label();
            obj.disabled = () => true;
            return obj;
        }
        Empty_base() {
            const obj = new this.$.$mol_check_expand();
            obj.checked = (val) => this.base_expanded(val);
            return obj;
        }
        Empty_expanded() {
            const obj = new this.$.$mol_check_expand();
            obj.checked = (val) => this.expanded_expanded(val);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "base_expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "Labeled_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "expanded_expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "Labeled_expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "Disabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "Empty_base", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand_demo.prototype, "Empty_expanded", null);
    $.$mol_check_expand_demo = $mol_check_expand_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_group extends $.$mol_check_box {
        checks() {
            return [];
        }
        full() {
            return true;
        }
    }
    $.$mol_check_group = $mol_check_group;
})($ || ($ = {}));
//group.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_check extends $.$mol_icon {
        path() {
            return "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";
        }
    }
    $.$mol_icon_check = $mol_icon_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_check_all extends $.$mol_icon {
        path() {
            return "M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z";
        }
    }
    $.$mol_icon_check_all = $mol_icon_check_all;
})($ || ($ = {}));
//all.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_group extends $.$mol_check_group {
            checked(next) {
                if (next !== undefined) {
                    for (const check of this.checks()) {
                        check.checked(next);
                    }
                }
                return this.checks().some(check => check.checked());
            }
            full() {
                return this.checks().every(check => check.checked());
            }
            Icon() {
                return this.full() ? new $.$mol_icon_check_all : new $.$mol_icon_tick;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_check_group.prototype, "checked", null);
        __decorate([
            $.$mol_mem
        ], $mol_check_group.prototype, "full", null);
        __decorate([
            $.$mol_mem
        ], $mol_check_group.prototype, "Icon", null);
        $$.$mol_check_group = $mol_check_group;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//group.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_group_demo extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_check_group_demo_title');
        }
        rows() {
            return [
                this.All(),
                this.Partial()
            ];
        }
        All() {
            const obj = new this.$.$mol_check_group();
            obj.title = () => "SPECIAL";
            obj.checks = () => [
                this.Strength(),
                this.Perception(),
                this.Endurance(),
                this.Charisma(),
                this.Intelligence(),
                this.Agility(),
                this.Luck()
            ];
            return obj;
        }
        strength_title() {
            return "Strength";
        }
        strength(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Strength() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.strength_title();
            obj.checked = (val) => this.strength(val);
            return obj;
        }
        perception_title() {
            return "Perception";
        }
        perception(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Perception() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.perception_title();
            obj.checked = (val) => this.perception(val);
            return obj;
        }
        endurance_title() {
            return "Endurance";
        }
        endurance(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Endurance() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.endurance_title();
            obj.checked = (val) => this.endurance(val);
            return obj;
        }
        charisma_title() {
            return "Charisma";
        }
        charisma(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Charisma() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.charisma_title();
            obj.checked = (val) => this.charisma(val);
            return obj;
        }
        intelligence_title() {
            return "Intelligence";
        }
        intelligence(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Intelligence() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.intelligence_title();
            obj.checked = (val) => this.intelligence(val);
            return obj;
        }
        agility_title() {
            return "Agility";
        }
        agility(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Agility() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.agility_title();
            obj.checked = (val) => this.agility(val);
            return obj;
        }
        luck_title() {
            return "Luck";
        }
        luck(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Luck() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.luck_title();
            obj.checked = (val) => this.luck(val);
            return obj;
        }
        Partial() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Strength(),
                this.Perception(),
                this.Endurance(),
                this.Charisma(),
                this.Intelligence(),
                this.Agility(),
                this.Luck()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "All", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "strength", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "Strength", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "perception", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "Perception", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "endurance", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "Endurance", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "charisma", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "Charisma", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "intelligence", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "Intelligence", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "agility", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "Agility", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "luck", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "Luck", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_group_demo.prototype, "Partial", null);
    $.$mol_check_group_demo = $mol_check_group_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/group/demo/demo.view.css", "[mol_check_group_demo] {\n\talign-items: flex-start;\n}\n\n[mol_check_group_demo_all] {\n\tbox-shadow: 0 1px 0 0px var(--mol_theme_line);\n}\n");
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $.$mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon][mol_check_checked] {\n\tcolor: var(--mol_theme_focus);\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_microphone extends $.$mol_icon {
        path() {
            return "M12,2C13.66,2 15,3.34 15,5V11C15,12.66 13.66,14 12,14C10.34,14 9,12.66 9,11V5C9,3.34 10.34,2 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7C7,13.76 9.24,16 12,16C14.76,16 17,13.76 17,11H19Z";
        }
    }
    $.$mol_icon_microphone = $mol_icon_microphone;
})($ || ($ = {}));
//microphone.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon_demo extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_check_icon_demo_title');
        }
        rows() {
            return [
                this.Base(),
                this.Checked(),
                this.Disabled()
            ];
        }
        Base_icon() {
            const obj = new this.$.$mol_icon_microphone();
            return obj;
        }
        base_checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Base() {
            const obj = new this.$.$mol_check_icon();
            obj.Icon = () => this.Base_icon();
            obj.checked = (val) => this.base_checked(val);
            return obj;
        }
        Checked_icon() {
            const obj = new this.$.$mol_icon_microphone();
            return obj;
        }
        checked_checked(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Checked() {
            const obj = new this.$.$mol_check_icon();
            obj.Icon = () => this.Checked_icon();
            obj.checked = (val) => this.checked_checked(val);
            return obj;
        }
        Disabled_icon() {
            const obj = new this.$.$mol_icon_microphone();
            return obj;
        }
        Disabled() {
            const obj = new this.$.$mol_check_box();
            obj.Icon = () => this.Disabled_icon();
            obj.checked = () => true;
            obj.enabled = () => false;
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Base_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "base_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Base", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Checked_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "checked_checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Disabled_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_icon_demo.prototype, "Disabled", null);
    $.$mol_check_icon_demo = $mol_check_icon_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $.$mol_view {
        event() {
            return {
                keydown: (event) => this.keydown(event)
            };
        }
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "keydown", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $.$mol_scroll {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//pop.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop]:hover {\n\tz-index: 4;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: 3;\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\toverflow: hidden;\n\toverflow-y: overlay;\n\tword-break: normal;\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense\"] {\n\tdisplay: none;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//pop.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                return `${this.align_vert()}_${this.align_hor()}`;
            }
            align_vert() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                if (!rect_bubble)
                    return 'suspense';
                return rect_bubble.top > (viewport.height - rect_bubble.bottom) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                if (!rect_bubble)
                    return 'suspense';
                return rect_bubble.left > (viewport.width - rect_bubble.right) ? 'left' : 'right';
            }
            keydown(event) {
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $.$mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $.$mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $.$mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $.$mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $.$mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pop.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $.$mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//nav.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.up: return this.event_up(event);
                    case $.$mol_keyboard_code.down: return this.event_down(event);
                    case $.$mol_keyboard_code.left: return this.event_left(event);
                    case $.$mol_keyboard_code.right: return this.event_right(event);
                    case $.$mol_keyboard_code.pageUp: return this.event_up(event);
                    case $.$mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//nav.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_search extends $.$mol_pop {
        query(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        suggests() {
            return [];
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Hotkey(),
                this.Nav()
            ];
        }
        showed(val) {
            return this.suggests_showed(val);
        }
        align_hor() {
            return "right";
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.anchor_content();
            return obj;
        }
        bubble_content() {
            return [
                this.Menu()
            ];
        }
        Suggest(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.suggest_select(id, event);
            obj.sub = () => this.suggest_content(id);
            return obj;
        }
        clear(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Hotkey() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                escape: (val) => this.clear(val)
            });
            return obj;
        }
        nav_components() {
            return [];
        }
        nav_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.nav_focused(component);
            return obj;
        }
        suggests_showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_search_hint');
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        Query() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.query(val);
            obj.hint = () => this.hint();
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Clear_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Clear() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$mol_search_Clear_hint');
            obj.click = (event) => this.clear(event);
            obj.sub = () => [
                this.Clear_icon()
            ];
            return obj;
        }
        anchor_content() {
            return [
                this.Query(),
                this.Clear()
            ];
        }
        menu_items() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        suggest_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        suggest_label(id) {
            return "";
        }
        Suggest_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.suggest_label(id);
            obj.needle = () => this.query();
            return obj;
        }
        suggest_content(id) {
            return [
                this.Suggest_label(id)
            ];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Anchor", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "clear", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Hotkey", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "nav_focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Nav", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "suggests_showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Query", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Menu", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_search.prototype, "suggest_select", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_search.prototype, "Suggest_label", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//search.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n");
})($ || ($ = {}));
//search.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                $.$mol_fiber_defer(() => {
                    this.Query().focused(true);
                });
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().focused(false);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $.$mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $.$mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//search.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_code extends $.$mol_view {
        sub() {
            return [
                this.Manual(),
                this.Scan()
            ];
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        format() {
            return "";
        }
        hint() {
            return this.format();
        }
        Manual() {
            const obj = new this.$.$mol_search();
            obj.query = (val) => this.value(val);
            obj.hint = () => this.hint();
            return obj;
        }
        event_scan(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        scan_label() {
            return this.$.$mol_locale.text('$mol_code_scan_label');
        }
        Scan() {
            const obj = new this.$.$mol_button();
            obj.event_click = (val) => this.event_scan(val);
            obj.sub = () => [
                this.scan_label()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_code.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_code.prototype, "Manual", null);
    __decorate([
        $.$mol_mem
    ], $mol_code.prototype, "event_scan", null);
    __decorate([
        $.$mol_mem
    ], $mol_code.prototype, "Scan", null);
    $.$mol_code = $mol_code;
})($ || ($ = {}));
//code.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/code/code.view.css", "[mol_code] {\n\tdisplay: inline-flex;\n\tflex: 1 1 8rem;\n}\n\n[mol_code_manual] {\n\tflex: 1 1 auto;\n}\n");
})($ || ($ = {}));
//code.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_code extends $.$mol_code {
            scan_support() {
                return Boolean($.$mol_cordova.plugins.barcodeScanner);
            }
            sub() {
                return [
                    this.Manual(),
                    ...this.scan_support() ? [this.Scan()] : [],
                ];
            }
            event_scan() {
                $.$mol_cordova.plugins.barcodeScanner.scan((result) => {
                    if (result.cancelled)
                        return;
                    this.value(result.text);
                }, (error) => {
                    alert("Scanning failed: " + error);
                });
            }
        }
        $$.$mol_code = $mol_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_code_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_code_demo_title');
        }
        sub() {
            return [
                this.Qr(),
                this.Matrix(),
                this.Upc_e(),
                this.Upc_a(),
                this.Ean_8(),
                this.Ean_13(),
                this.Code_128(),
                this.Code_39(),
                this.Itf()
            ];
        }
        Qr() {
            const obj = new this.$.$mol_code();
            obj.format = () => "QR_CODE";
            return obj;
        }
        Matrix() {
            const obj = new this.$.$mol_code();
            obj.format = () => "DATA_MATRIX";
            return obj;
        }
        Upc_e() {
            const obj = new this.$.$mol_code();
            obj.format = () => "UPC_E";
            return obj;
        }
        Upc_a() {
            const obj = new this.$.$mol_code();
            obj.format = () => "UPC_A";
            return obj;
        }
        Ean_8() {
            const obj = new this.$.$mol_code();
            obj.format = () => "EAN_8";
            return obj;
        }
        Ean_13() {
            const obj = new this.$.$mol_code();
            obj.format = () => "EAN_13";
            return obj;
        }
        Code_128() {
            const obj = new this.$.$mol_code();
            obj.format = () => "CODE_128";
            return obj;
        }
        Code_39() {
            const obj = new this.$.$mol_code();
            obj.format = () => "CODE_39";
            return obj;
        }
        Itf() {
            const obj = new this.$.$mol_code();
            obj.format = () => "ITF";
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Qr", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Matrix", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Upc_e", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Upc_a", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Ean_8", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Ean_13", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Code_128", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Code_39", null);
    __decorate([
        $.$mol_mem
    ], $mol_code_demo.prototype, "Itf", null);
    $.$mol_code_demo = $mol_code_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_pick extends $.$mol_pop {
        Anchor() {
            return this.Trigger();
        }
        trigger_enabled() {
            return true;
        }
        trigger_content() {
            return [];
        }
        hint() {
            return "";
        }
        Trigger() {
            const obj = new this.$.$mol_check();
            obj.minimal_width = () => 40;
            obj.minimal_height = () => 40;
            obj.enabled = () => this.trigger_enabled();
            obj.checked = (event) => this.showed(event);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pick.prototype, "Trigger", null);
    $.$mol_pick = $mol_pick;
})($ || ($ = {}));
//pick.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n}\n");
})($ || ($ = {}));
//pick.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_calendar extends $.$mol_icon {
        path() {
            return "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z";
        }
    }
    $.$mol_icon_calendar = $mol_icon_calendar;
})($ || ($ = {}));
//calendar.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_left extends $.$mol_icon {
        path() {
            return "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
        }
    }
    $.$mol_icon_chevron_left = $mol_icon_chevron_left;
})($ || ($ = {}));
//left.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_right extends $.$mol_icon {
        path() {
            return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
        }
    }
    $.$mol_icon_chevron_right = $mol_icon_chevron_right;
})($ || ($ = {}));
//right.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_date extends $.$mol_pick {
        Icon() {
            const obj = new this.$.$mol_icon_calendar();
            return obj;
        }
        bubble_content() {
            return [
                this.Input(),
                this.Calendar()
            ];
        }
        value_number(val) {
            if (val !== undefined)
                return val;
            return NaN;
        }
        value_moment(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return "YYYY-MM-DD hh:mm";
        }
        enabled() {
            return true;
        }
        Input() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.value(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            return obj;
        }
        month_moment() {
            return this.value_moment();
        }
        day_selected(day) {
            return false;
        }
        day_click(day, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        prev_hint() {
            return this.$.$mol_locale.text('$mol_date_prev_hint');
        }
        prev(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Prev_icon() {
            const obj = new this.$.$mol_icon_chevron_left();
            return obj;
        }
        Prev() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.prev_hint();
            obj.click = (event) => this.prev(event);
            obj.sub = () => [
                this.Prev_icon()
            ];
            return obj;
        }
        next_hint() {
            return this.$.$mol_locale.text('$mol_date_next_hint');
        }
        next(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Next_icon() {
            const obj = new this.$.$mol_icon_chevron_right();
            return obj;
        }
        Next() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.next_hint();
            obj.click = (event) => this.next(event);
            obj.sub = () => [
                this.Next_icon()
            ];
            return obj;
        }
        Calendar_tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Prev(),
                this.Calendar_title(),
                this.Next()
            ];
            return obj;
        }
        Calendar_title() {
            return this.Calendar().Title();
        }
        Calendar() {
            const obj = new this.$.$mol_date_calendar();
            obj.month_moment = () => this.month_moment();
            obj.day_selected = (day) => this.day_selected(day);
            obj.day_click = (day, event) => this.day_click(day, event);
            obj.head = () => [
                this.Calendar_tools()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "value_number", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "value_moment", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "Input", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_date.prototype, "day_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "prev", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "Prev_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "Prev", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "next", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "Next_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "Next", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "Calendar_tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_date.prototype, "Calendar", null);
    $.$mol_date = $mol_date;
    class $mol_date_calendar extends $.$mol_calendar {
        day_content(day) {
            return [
                this.Day_button(day)
            ];
        }
        day_click(day, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Day_button(day) {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.day_text(day);
            obj.event_click = (event) => this.day_click(day, event);
            obj.minimal_height = () => 24;
            return obj;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_date_calendar.prototype, "day_click", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_date_calendar.prototype, "Day_button", null);
    $.$mol_date_calendar = $mol_date_calendar;
})($ || ($ = {}));
//date.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    let error;
    let result;
    let handler;
    function $mol_try(handler2) {
        handler = handler2;
        error = undefined;
        result = undefined;
        window.dispatchEvent(new Event('$mol_try'));
        const error2 = error;
        const result2 = result;
        error = undefined;
        result = undefined;
        return error2 || result2;
    }
    $.$mol_try = $mol_try;
    self.addEventListener('$mol_try', (event) => {
        result = handler();
    }, true);
    self.addEventListener('error', (event) => {
        error = event.error;
    }, true);
})($ || ($ = {}));
//try.web.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/date/date.view.css", "[mol_date_bubble] {\n\tpadding: .5rem;\n}\n\n[mol_date_prev] ,\n[mol_date_next] {\n\tflex-grow: 1;\n}\n\n[mol_date_calendar_title] {\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_date_calendar_day] {\n\tpadding: 0;\n}\n\n[mol_date_calendar_day_button] {\n\twidth: 100%;\n\tpadding: .25rem .5rem;\n\tjustify-content: center;\n\tcursor: pointer;\n\tcolor: inherit;\n}\n");
})($ || ($ = {}));
//date.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_date extends $.$mol_date {
            trigger_content() {
                return [this.value_moment()?.toString('YYYY-MM-DD hh:mm') ?? this.Icon()];
            }
            value(val) {
                const moment = this.value_moment();
                if (val === undefined)
                    return moment?.toString('YYYY-MM-DD hh:mm') ?? '';
                const moment2 = $.$mol_try(() => val && new $.$mol_time_moment(val)) || null;
                if (moment2 instanceof Error)
                    return val;
                this.value_moment(moment2);
                return val;
            }
            value_moment(val) {
                const stamp = this.value_number(val && val.valueOf());
                return isNaN(stamp) ? null : new $.$mol_time_moment(stamp);
            }
            month_moment(next) {
                if (next)
                    return next;
                let moment = $.$mol_try(() => new $.$mol_time_moment(this.value()));
                if (moment instanceof Error || !moment.year)
                    return new $.$mol_time_moment;
                if (moment.month === undefined) {
                    moment = moment.merge({ month: 0 });
                }
                return moment;
            }
            day_selected(day) {
                return this.value_moment()?.toString('YYYY-MM-DD') === day;
            }
            day_click(day) {
                const moment = new $.$mol_time_moment(day);
                this.value_moment(this.value_moment()?.merge(moment) ?? moment);
                this.showed(false);
            }
            prev() {
                this.month_moment(this.month_moment().shift({ month: -1 }));
            }
            next() {
                this.month_moment(this.month_moment().shift({ month: +1 }));
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_date.prototype, "value", null);
        __decorate([
            $.$mol_mem
        ], $mol_date.prototype, "value_moment", null);
        __decorate([
            $.$mol_mem
        ], $mol_date.prototype, "month_moment", null);
        $$.$mol_date = $mol_date;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//date.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_date_demo extends $.$mol_view {
        sub() {
            return [
                this.Date(),
                this.Formatted()
            ];
        }
        date(val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        Date() {
            const obj = new this.$.$mol_date();
            obj.value_moment = (val) => this.date(val);
            return obj;
        }
        formatted() {
            return "";
        }
        Formatted() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.formatted()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_date_demo.prototype, "date", null);
    __decorate([
        $.$mol_mem
    ], $mol_date_demo.prototype, "Date", null);
    __decorate([
        $.$mol_mem
    ], $mol_date_demo.prototype, "Formatted", null);
    $.$mol_date_demo = $mol_date_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/date/demo/demo.view.css", "[mol_date_demo_formatted] {\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_date_demo extends $.$mol_date_demo {
            formatted() {
                return this.date()?.toString('DD Month YYYY');
            }
        }
        $$.$mol_date_demo = $mol_date_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_switch extends $.$mol_view {
        Option(id) {
            const obj = new this.$.$mol_check();
            obj.checked = (val) => this.option_checked(id, val);
            obj.label = () => this.option_label(id);
            obj.enabled = () => this.option_enabled(id);
            obj.hint = () => this.option_hint(id);
            obj.minimal_height = () => 24;
            return obj;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        options() {
            return {};
        }
        keys() {
            return [];
        }
        sub() {
            return this.items();
        }
        option_checked(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        option_title(id) {
            return "";
        }
        option_label(id) {
            return [
                this.option_title(id)
            ];
        }
        enabled() {
            return true;
        }
        option_enabled(id) {
            return this.enabled();
        }
        option_hint(id) {
            return "";
        }
        items() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_switch.prototype, "Option", null);
    __decorate([
        $.$mol_mem
    ], $mol_switch.prototype, "value", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_switch.prototype, "option_checked", null);
    $.$mol_switch = $mol_switch;
})($ || ($ = {}));
//switch.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/switch/switch.view.css", "[mol_switch] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_switch_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_switch_option][mol_check_checked=\"true\"] {\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//switch.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $.$mol_state_session.value(`${this}.value()`, next);
            }
            options() {
                return {};
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key];
            }
            option_checked(key, next) {
                if (next === void 0)
                    return this.value() == key;
                this.value(next ? key : null);
                return next;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_switch.prototype, "keys", null);
        __decorate([
            $.$mol_mem
        ], $mol_switch.prototype, "items", null);
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//switch.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_deck extends $.$mol_list {
        items() {
            return [];
        }
        rows() {
            return [
                this.Switch(),
                this.Content()
            ];
        }
        current(val) {
            if (val !== undefined)
                return val;
            return "0";
        }
        switch_options() {
            return {};
        }
        Switch() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.current(val);
            obj.options = () => this.switch_options();
            return obj;
        }
        Content() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_deck.prototype, "current", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck.prototype, "Switch", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck.prototype, "Content", null);
    $.$mol_deck = $mol_deck;
})($ || ($ = {}));
//deck.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_deck extends $.$mol_deck {
            current(next) {
                return $.$mol_state_session.value(`${this}.current()`, next) || '0';
            }
            switch_options() {
                let options = {};
                this.items().forEach((item, index) => {
                    options[String(index)] = item.title();
                });
                return options;
            }
            Content() {
                return this.items()[this.current()];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_deck.prototype, "Content", null);
        $$.$mol_deck = $mol_deck;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//deck.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_deck_demo extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_deck_demo_title');
        }
        sub() {
            return [
                this.Deck()
            ];
        }
        greet_message() {
            return this.$.$mol_locale.text('$mol_deck_demo_greet_message');
        }
        Greeter() {
            const obj = new this.$.$mol_card();
            obj.title = () => this.$.$mol_locale.text('$mol_deck_demo_Greeter_title');
            obj.content = () => [
                this.greet_message()
            ];
            return obj;
        }
        quest_message() {
            return this.$.$mol_locale.text('$mol_deck_demo_quest_message');
        }
        Quester() {
            const obj = new this.$.$mol_card();
            obj.title = () => this.$.$mol_locale.text('$mol_deck_demo_Quester_title');
            obj.content = () => [
                this.quest_message()
            ];
            return obj;
        }
        command_message() {
            return this.$.$mol_locale.text('$mol_deck_demo_command_message');
        }
        Commander() {
            const obj = new this.$.$mol_card();
            obj.title = () => this.$.$mol_locale.text('$mol_deck_demo_Commander_title');
            obj.content = () => [
                this.command_message()
            ];
            return obj;
        }
        Deck() {
            const obj = new this.$.$mol_deck();
            obj.items = () => [
                this.Greeter(),
                this.Quester(),
                this.Commander()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_deck_demo.prototype, "Greeter", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck_demo.prototype, "Quester", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck_demo.prototype, "Commander", null);
    __decorate([
        $.$mol_mem
    ], $mol_deck_demo.prototype, "Deck", null);
    $.$mol_deck_demo = $mol_deck_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer_demo extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_dimmer_demo_title');
        }
        rows() {
            return [
                this.One(),
                this.Two(),
                this.Three(),
                this.Four(),
                this.Five(),
                this.Six()
            ];
        }
        One() {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => "Don't put all your eggs in one basket";
            obj.needle = () => "eggs";
            return obj;
        }
        Two() {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => "Don't look a gift horse in the mouth.";
            obj.needle = () => "oo";
            return obj;
        }
        Three() {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => "There is no word you are looking for";
            obj.needle = () => "luck";
            return obj;
        }
        Four() {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => "ooAAooAAoo";
            obj.needle = () => "oo";
            return obj;
        }
        Five() {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => "Let's search this string";
            obj.needle = () => "Let's search this string";
            return obj;
        }
        Six() {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => "Let's search nothing";
            obj.needle = () => "";
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "One", null);
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "Two", null);
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "Three", null);
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "Four", null);
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "Five", null);
    __decorate([
        $.$mol_mem
    ], $mol_dimmer_demo.prototype, "Six", null);
    $.$mol_dimmer_demo = $mol_dimmer_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/dimmer/demo/demo.view.css", "[mol_dimmer_demo] {\n\tpadding: var(--mol_gap_block);\n}\n");
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $.$mol_view {
        Sub() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//ghost.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//events.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node() {
                const node = this.Sub().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $.$mol_dom_render_attributes(node, attr);
                $.$mol_dom_render_styles(node, style);
                $.$mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                this.dom_node_actual();
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ghost.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_drag extends $.$mol_ghost {
        event() {
            return {
                dragstart: (event) => this.start(event),
                drag: (event) => this.move(event),
                dragend: (event) => this.end(event)
            };
        }
        attr() {
            return {
                draggable: true,
                mol_drag_status: this.status()
            };
        }
        transfer() {
            return {
                "text/plain": "",
                "text/html": "",
                "text/uri-list": ""
            };
        }
        allow_copy() {
            return true;
        }
        allow_link() {
            return true;
        }
        allow_move() {
            return true;
        }
        image() {
            return this.dom_node();
        }
        start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        status(val) {
            if (val !== undefined)
                return val;
            return "ready";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_drag.prototype, "start", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag.prototype, "move", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag.prototype, "end", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag.prototype, "status", null);
    $.$mol_drag = $mol_drag;
})($ || ($ = {}));
//drag.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_drag extends $.$mol_drag {
            status(next = 'ready') { return next; }
            start(event) {
                setTimeout(() => this.status('drag'));
                const transfer = this.transfer();
                for (let type in transfer) {
                    event.dataTransfer.setData(type, transfer[type]);
                }
                event.dataTransfer.setDragImage(this.image(), 0, -32);
                const effects = [];
                if (this.allow_copy())
                    effects.push('Copy');
                if (this.allow_link())
                    effects.push('Link');
                if (this.allow_move())
                    effects.push('Move');
                let effectAllowed = effects[0].toLowerCase() + effects.slice(1).join('');
                if (effectAllowed === 'copyLinkMove')
                    effectAllowed = 'all';
                event.dataTransfer.effectAllowed = effectAllowed;
            }
            end(event) {
                setTimeout(() => this.status('ready'));
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_drag.prototype, "status", null);
        $$.$mol_drag = $mol_drag;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//drag.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_trash_can extends $.$mol_icon {
        path() {
            return "M9,3V4H4V6H5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z";
        }
    }
    $.$mol_icon_trash_can = $mol_icon_trash_can;
})($ || ($ = {}));
//can.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_trash_can_outline extends $.$mol_icon {
        path() {
            return "M9,3V4H4V6H5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z";
        }
    }
    $.$mol_icon_trash_can_outline = $mol_icon_trash_can_outline;
})($ || ($ = {}));
//outline.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_drop extends $.$mol_ghost {
        event() {
            return {
                dragenter: (event) => this.enter(event),
                dragover: (event) => this.move(event),
                dragleave: (event) => this.leave(event),
                drop: (event) => this.drop(event)
            };
        }
        attr() {
            return {
                mol_drop_status: this.status()
            };
        }
        adopt(transfer) {
            if (transfer !== undefined)
                return transfer;
            return {};
        }
        receive(transfer) {
            if (transfer !== undefined)
                return transfer;
            return null;
        }
        enter(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        leave(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        drop(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        status(val) {
            if (val !== undefined)
                return val;
            return "ready";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_drop.prototype, "adopt", null);
    __decorate([
        $.$mol_mem
    ], $mol_drop.prototype, "receive", null);
    __decorate([
        $.$mol_mem
    ], $mol_drop.prototype, "enter", null);
    __decorate([
        $.$mol_mem
    ], $mol_drop.prototype, "move", null);
    __decorate([
        $.$mol_mem
    ], $mol_drop.prototype, "leave", null);
    __decorate([
        $.$mol_mem
    ], $mol_drop.prototype, "drop", null);
    __decorate([
        $.$mol_mem
    ], $mol_drop.prototype, "status", null);
    $.$mol_drop = $mol_drop;
})($ || ($ = {}));
//drop.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_drop extends $.$mol_drop {
            status(next = 'ready') { return next; }
            _target = null;
            enter(event) {
                if (event.defaultPrevented)
                    return;
                this.status('drag');
                this._target = event.target;
                event.dataTransfer.dropEffect = 'move';
                event.preventDefault();
            }
            move(event) {
                if (event.defaultPrevented)
                    return;
                event.dataTransfer.dropEffect = 'move';
                event.preventDefault();
            }
            leave(event) {
                if (this._target === event.target) {
                    this.status('ready');
                }
            }
            receive(transfer) {
                return transfer;
            }
            drop(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                setTimeout(() => this.status('ready'));
                const obj = this.adopt(event.dataTransfer);
                if (!obj)
                    return;
                this.receive(obj);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_drop.prototype, "status", null);
        $$.$mol_drop = $mol_drop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//drop.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_drag_demo extends $.$mol_demo_large {
        task_count() {
            return 100;
        }
        sub() {
            return [
                this.List_drop()
            ];
        }
        Task_row(task) {
            const obj = new this.$.$mol_drag();
            obj.transfer = () => ({
                "text/plain": this.task_title(task),
                "text/html": this.task_html(task),
                "text/uri-list": this.task_uri(task)
            });
            obj.Sub = () => this.Task_drop(task);
            return obj;
        }
        transfer_adopt(transfer) {
            if (transfer !== undefined)
                return transfer;
            return null;
        }
        receive(obj) {
            if (obj !== undefined)
                return obj;
            return null;
        }
        receive_trash(obj) {
            if (obj !== undefined)
                return obj;
            return null;
        }
        Trash_icon() {
            const obj = new this.$.$mol_icon_trash_can_outline();
            return obj;
        }
        Trash() {
            const obj = new this.$.$mol_float();
            obj.sub = () => [
                this.Trash_icon(),
                "Trash"
            ];
            return obj;
        }
        Trash_drop() {
            const obj = new this.$.$mol_drop();
            obj.adopt = (transfer) => this.transfer_adopt(transfer);
            obj.receive = (obj) => this.receive_trash(obj);
            obj.Sub = () => this.Trash();
            return obj;
        }
        task_rows() {
            return [];
        }
        List() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.task_rows();
            return obj;
        }
        Scroll() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Trash_drop(),
                this.List()
            ];
            return obj;
        }
        List_drop() {
            const obj = new this.$.$mol_drop();
            obj.adopt = (transfer) => this.transfer_adopt(transfer);
            obj.receive = (obj) => this.receive(obj);
            obj.Sub = () => this.Scroll();
            return obj;
        }
        task_title(task) {
            return "";
        }
        task_html(task) {
            return "";
        }
        task_uri(task) {
            return "";
        }
        receive_before(task, obj) {
            if (obj !== undefined)
                return obj;
            return null;
        }
        Task_link(task) {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.task_uri(task);
            obj.sub = () => [
                this.task_title(task)
            ];
            return obj;
        }
        Task_drop(task) {
            const obj = new this.$.$mol_drop();
            obj.adopt = (transfer) => this.transfer_adopt(transfer);
            obj.receive = (obj) => this.receive_before(task, obj);
            obj.Sub = () => this.Task_link(task);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_drag_demo.prototype, "Task_row", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag_demo.prototype, "transfer_adopt", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag_demo.prototype, "receive", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag_demo.prototype, "receive_trash", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag_demo.prototype, "Trash_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag_demo.prototype, "Trash", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag_demo.prototype, "Trash_drop", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag_demo.prototype, "List", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag_demo.prototype, "Scroll", null);
    __decorate([
        $.$mol_mem
    ], $mol_drag_demo.prototype, "List_drop", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_drag_demo.prototype, "receive_before", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_drag_demo.prototype, "Task_link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_drag_demo.prototype, "Task_drop", null);
    $.$mol_drag_demo = $mol_drag_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_range2(item = index => index, size = () => Number.POSITIVE_INFINITY) {
        return new Proxy(new $mol_range2_array(), {
            get(target, field) {
                if (typeof field === 'string') {
                    if (field === 'length')
                        return size();
                    const index = Number(field);
                    if (index === Math.trunc(index))
                        return item(index);
                }
                return target[field];
            },
            set(target, field) {
                return $.$mol_fail(new TypeError('Lazy range is read only'));
            },
            ownKeys(target) {
                return [...Array(size())].map((v, i) => String(i)).concat('length');
            },
            getOwnPropertyDescriptor(target, field) {
                if (field === "length")
                    return {
                        value: size(),
                        writable: true,
                        enumerable: false,
                        configurable: false,
                    };
                const index = Number(field);
                if (index === Math.trunc(index))
                    return {
                        get: () => this.get(target, field, this),
                        enumerable: true,
                        configurable: true,
                    };
                return Object.getOwnPropertyDescriptor(target, field);
            }
        });
    }
    $.$mol_range2 = $mol_range2;
    class $mol_range2_array extends Array {
        concat(...tail) {
            if (tail.length === 0)
                return this;
            if (tail.length > 1) {
                let list = this;
                for (let item of tail)
                    list = list.concat(item);
                return list;
            }
            return $mol_range2(index => index < this.length ? this[index] : tail[0][index - this.length], () => this.length + tail[0].length);
        }
        filter(check, context) {
            const filtered = new $mol_range2_array();
            for (let index = 0; index < this.length; ++index) {
                const item = this[index];
                if (check.call(context, item, index, this))
                    filtered.push(item);
            }
            return filtered;
        }
        forEach(proceed, context) {
            for (let [key, value] of this.entries())
                proceed.call(context, value, key, this);
        }
        map(proceed, context) {
            return $mol_range2(index => proceed.call(context, this[index], index, this), () => this.length);
        }
        reduce(merge, result) {
            let index = 0;
            if (arguments.length === 1) {
                result = this[index++];
            }
            for (; index < this.length; ++index) {
                result = merge(result, this[index], index, this);
            }
            return result;
        }
        slice(from = 0, to = this.length) {
            return $mol_range2(index => this[from + index], () => Math.min(to, this.length) - from);
        }
        some(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (check.call(context, this[index], index, this))
                    return true;
            }
            return false;
        }
        every(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (!check.call(context, this[index], index, this))
                    return false;
            }
            return true;
        }
    }
    $.$mol_range2_array = $mol_range2_array;
})($ || ($ = {}));
//range2.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_drag_demo, {
            Task_drop: {
                '@': {
                    mol_drop_status: {
                        drag: {
                            boxShadow: `0 -1px 0 0px ${$.$mol_theme.focus}`,
                        },
                    },
                },
            },
            List_drop: {
                '@': {
                    mol_drop_status: {
                        drag: {
                            '>': {
                                $mol_view: {
                                    ':last-child': {
                                        boxShadow: `0 1px 0 0px ${$.$mol_theme.focus}`,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            Trash: {
                padding: $.$mol_gap.block,
                display: 'block',
            },
            Trash_drop: {
                '@': {
                    mol_drop_status: {
                        drag: {
                            background: {
                                color: $.$mol_theme.hover,
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_drag_demo extends $.$mol_drag_demo {
            task_list(next) {
                return next ?? [...$.$mol_range2(index => this.Task(String(index + 1)), () => this.task_count())];
            }
            Task(id) {
                return {
                    id: id,
                    title: `Task #${id}`,
                    toJSON: () => id,
                };
            }
            task_rows() {
                return this.task_list().map(task => this.Task_row(task));
            }
            task_title(task) {
                return task.title;
            }
            task_uri(task) {
                return this.$.$mol_state_arg.make_link({
                    ...this.$.$mol_state_arg.dict(),
                    'product': task.id,
                });
            }
            transfer_adopt(transfer) {
                const uri = transfer.getData("text/uri-list");
                if (!uri)
                    return;
                return this.task_list().find(task => this.task_uri(task) === uri);
            }
            receive_before(anchor, task) {
                if (anchor === task)
                    return;
                const tasks = this.task_list().filter(p => p !== task);
                const index = tasks.indexOf(anchor);
                tasks.splice(index, 0, task);
                this.task_list(tasks);
            }
            receive(task) {
                const tasks = this.task_list().filter(p => p !== task);
                tasks.push(task);
                this.task_list(tasks);
            }
            receive_trash(task) {
                this.task_list(this.task_list().filter(p => p !== task));
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_drag_demo.prototype, "task_list", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_drag_demo.prototype, "Task", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_drag_demo.prototype, "task_uri", null);
        $$.$mol_drag_demo = $mol_drag_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_expander extends $.$mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        label() {
            return [
                this.title()
            ];
        }
        Trigger() {
            const obj = new this.$.$mol_check_expand();
            obj.checked = (val) => this.expanded(val);
            obj.label = () => this.label();
            return obj;
        }
        Tools() {
            return null;
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Trigger(),
                this.Tools()
            ];
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "Trigger", null);
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "Label", null);
    __decorate([
        $.$mol_mem
    ], $mol_expander.prototype, "Content", null);
    $.$mol_expander = $mol_expander;
})($ || ($ = {}));
//expander.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n\tflex: 1 1 auto;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n\tposition: relative;\n}\n\n[mol_expander_trigger_icon] {\n\tposition: absolute;\n\tmargin-left: -1rem;\n}\n");
})($ || ($ = {}));
//expander.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
        }
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expander.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_filler extends $.$mol_view {
        minimal_height() {
            return 500;
        }
        sub() {
            return [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
                "Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.",
                "Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.",
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
                "Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.",
                "Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.",
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel."
            ];
        }
    }
    $.$mol_filler = $mol_filler;
})($ || ($ = {}));
//filler.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/filler/filler.view.css", "[mol_filler] {\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tflex-shrink: 0;\n}\n");
})($ || ($ = {}));
//filler.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_expander_demo extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_expander_demo_title');
        }
        sub() {
            return [
                this.Expander()
            ];
        }
        Content() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Expander() {
            const obj = new this.$.$mol_expander();
            obj.title = () => "Lorem Ipsum";
            obj.Content = () => this.Content();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_expander_demo.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_expander_demo.prototype, "Expander", null);
    $.$mol_expander_demo = $mol_expander_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text('$mol_float_demo_title');
        }
        sub() {
            return [
                this.Scroll()
            ];
        }
        Head_content() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => "Float header";
            return obj;
        }
        Head_row() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Head_content()
            ];
            return obj;
        }
        Head() {
            const obj = new this.$.$mol_float();
            obj.sub = () => [
                this.Head_row()
            ];
            return obj;
        }
        Filler1() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Filler2() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Filler1(),
                this.Filler2()
            ];
            return obj;
        }
        Scroll() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Head(),
                this.Content()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Head_content", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Head_row", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Filler1", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Filler2", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_float_demo.prototype, "Scroll", null);
    $.$mol_float_demo = $mol_float_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $.$mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 16;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//labeler.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tcolor: var(--mol_theme_shade);\n\tline-height: 1rem;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//labeler.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $.$mol_labeler {
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        Content() {
            return this.control();
        }
        name() {
            return "";
        }
        bid() {
            return "";
        }
        Bid() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.bid()
            ];
            return obj;
        }
        control() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//field.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tmargin-left: 1rem;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//field.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $.$mol_view {
        submit_blocked() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        sub() {
            return [
                this.Bar_fields(),
                this.Bar_buttons()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        form_fields() {
            return [];
        }
        Bar_fields() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.form_fields();
            return obj;
        }
        buttons() {
            return [];
        }
        Bar_buttons() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.buttons();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_fields", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_buttons", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//form.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/form/form.css", "[mol_form] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[mol_form_bar_fields] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[mol_form_bar_fields] > * {\n\tmargin: var(--mol_gap_block);\n}\n\n[mol_form_bar_buttons] {\n\tbox-shadow: none;\n\tpadding: 0;\n}\n\n[mol_form_bar_buttons] > * {\n\tflex: 1 1 auto;\n\tmargin: var(--mol_gap_block);\n}\n");
})($ || ($ = {}));
//form.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            submit_blocked() {
                return this.form_fields().some(field => field.bid());
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $.$mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_form.prototype, "submit_blocked", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//form.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_form_demo_bids extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_title');
        }
        message_required() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_message_required');
        }
        message_no_spaces() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_message_no_spaces');
        }
        message_need_more_letters() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_message_need_more_letters');
        }
        message_need_at() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_message_need_at');
        }
        message_only_one_at() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_message_only_one_at');
        }
        message_no_tld() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_message_no_tld');
        }
        message_dots_inside() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_message_dots_inside');
        }
        message_no_space_domain() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_message_no_space_domain');
        }
        message_need_username() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_message_need_username');
        }
        sub() {
            return [
                this.Form(),
                this.Message()
            ];
        }
        submit(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        name_first_label() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_name_first_label');
        }
        name_first_bid() {
            return "";
        }
        name_first_hint() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_name_first_hint');
        }
        name_first(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Name_first_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.name_first_hint();
            obj.value = (val) => this.name_first(val);
            return obj;
        }
        Name_first_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.name_first_label();
            obj.bid = () => this.name_first_bid();
            obj.control = () => this.Name_first_control();
            return obj;
        }
        name_nick_label() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_name_nick_label');
        }
        name_nick_bid() {
            return "";
        }
        name_nick_hint() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_name_nick_hint');
        }
        name_nick(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Name_nick_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.name_nick_hint();
            obj.value = (val) => this.name_nick(val);
            return obj;
        }
        Name_nick_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.name_nick_label();
            obj.bid = () => this.name_nick_bid();
            obj.control = () => this.Name_nick_control();
            return obj;
        }
        name_second_label() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_name_second_label');
        }
        name_second_bid() {
            return "";
        }
        name_second_hint() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_name_second_hint');
        }
        name_second(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Name_second_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.name_second_hint();
            obj.value = (val) => this.name_second(val);
            return obj;
        }
        Name_second_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.name_second_label();
            obj.bid = () => this.name_second_bid();
            obj.control = () => this.Name_second_control();
            return obj;
        }
        sex_label() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_sex_label');
        }
        sex_bid() {
            return "";
        }
        sex(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        sex_option_male() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_sex_option_male');
        }
        sex_option_intersex() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_sex_option_intersex');
        }
        sex_option_female() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_sex_option_female');
        }
        sex_options() {
            return {
                male: this.sex_option_male(),
                intersex: this.sex_option_intersex(),
                female: this.sex_option_female()
            };
        }
        Sex_control() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.sex(val);
            obj.options = () => this.sex_options();
            return obj;
        }
        Sex_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.sex_label();
            obj.bid = () => this.sex_bid();
            obj.control = () => this.Sex_control();
            return obj;
        }
        mail_label() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_mail_label');
        }
        mail_bid() {
            return "";
        }
        mail_hint() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_mail_hint');
        }
        mail(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Mail_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.mail_hint();
            obj.value = (val) => this.mail(val);
            return obj;
        }
        Mail_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.mail_label();
            obj.bid = () => this.mail_bid();
            obj.control = () => this.Mail_control();
            return obj;
        }
        submit_text() {
            return this.$.$mol_locale.text('$mol_form_demo_bids_submit_text');
        }
        submit_allowed() {
            return true;
        }
        Submit() {
            const obj = new this.$.$mol_button_major();
            obj.sub = () => [
                this.submit_text()
            ];
            obj.click = (val) => this.submit(val);
            obj.enabled = () => this.submit_allowed();
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.submit = (val) => this.submit(val);
            obj.form_fields = () => [
                this.Name_first_field(),
                this.Name_nick_field(),
                this.Name_second_field(),
                this.Sex_field(),
                this.Mail_field()
            ];
            obj.buttons = () => [
                this.Submit()
            ];
            return obj;
        }
        message(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Message() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.message()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "name_first", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Name_first_control", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Name_first_field", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "name_nick", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Name_nick_control", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Name_nick_field", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "name_second", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Name_second_control", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Name_second_field", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "sex", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Sex_control", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Sex_field", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "mail", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Mail_control", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Mail_field", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Form", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "message", null);
    __decorate([
        $.$mol_mem
    ], $mol_form_demo_bids.prototype, "Message", null);
    $.$mol_form_demo_bids = $mol_form_demo_bids;
})($ || ($ = {}));
//bids.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/form/demo/bids/bids.view.css", "[mol_form_demo_bids_form] {\n\tmax-width: 20rem;\n}\n");
})($ || ($ = {}));
//bids.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form_demo_bids extends $.$mol_form_demo_bids {
            name_first(next) {
                return $.$mol_state_local.value(this.state_key('name_first'), next) || '';
            }
            name_first_bid() {
                const value = this.name_first();
                if (!value)
                    return this.message_required();
                if (value.indexOf(' ') !== -1)
                    return this.message_no_spaces();
                return '';
            }
            name_nick(next) {
                return $.$mol_state_local.value(this.state_key('name_nick'), next) || '';
            }
            name_second(next) {
                return $.$mol_state_local.value(this.state_key('name_second'), next) || '';
            }
            name_second_bid() {
                const value = this.name_second();
                if (!value)
                    return this.message_required();
                if (value.indexOf(' ') !== -1)
                    return this.message_no_spaces();
                if (value.length < 3)
                    return this.message_need_more_letters().replace('{count}', '3');
                return '';
            }
            mail(next) {
                return $.$mol_state_local.value(this.state_key('mail'), next) || '';
            }
            mail_bid() {
                const value = this.mail().trim();
                if (!value)
                    return this.message_required();
                const parts = value.split('@');
                if (parts.length < 2)
                    return this.message_need_at();
                if (parts.length > 2)
                    return this.message_only_one_at();
                if (!parts[0])
                    return this.message_need_username();
                if (parts[1].indexOf(' ') !== -1)
                    return this.message_no_space_domain();
                const domains = parts[1].split('.');
                if (domains.length < 2)
                    return this.message_no_tld();
                if (!domains.every(Boolean))
                    return this.message_dots_inside();
                return '';
            }
            sex(next) {
                return $.$mol_state_local.value(this.state_key('sex'), next) || '';
            }
            sex_bid() {
                if (!this.sex())
                    return this.message_required();
                return '';
            }
            submit(next) {
                this.message(`Hello, ${this.sex()} ${this.name_first()} (${this.name_nick()}) ${this.name_second()} from  ${this.mail()}!`);
            }
            submit_allowed() {
                return !this.Form().submit_blocked();
            }
        }
        $$.$mol_form_demo_bids = $mol_form_demo_bids;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bids.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_frame_demo extends $.$mol_demo_large {
        sub() {
            return [
                this.Frame()
            ];
        }
        Frame() {
            const obj = new this.$.$mol_frame();
            obj.title = () => this.$.$mol_locale.text('$mol_frame_demo_Frame_title');
            obj.uri = () => "https://mol.js.org/";
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_frame_demo.prototype, "Frame", null);
    $.$mol_frame_demo = $mol_frame_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_gallery extends $.$mol_view {
        sub() {
            return this.items();
        }
        Side(id) {
            const obj = new this.$.$mol_gallery();
            obj.style = () => ({
                flexGrow: this.side_size(id)
            });
            obj.items = () => this.side_items(id);
            return obj;
        }
        items() {
            return [];
        }
        side_size(id) {
            return "1";
        }
        side_items(id) {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_gallery.prototype, "Side", null);
    $.$mol_gallery = $mol_gallery;
})($ || ($ = {}));
//gallery.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/gallery/gallery.view.css", "[mol_gallery] {\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\talign-items: flex-start;\n    align-content: flex-start;\n}\n");
})($ || ($ = {}));
//gallery.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_gallery extends $.$mol_gallery {
            sub() {
                const items = this.items();
                if (items.length <= 3)
                    return items;
                return [
                    this.Side(0),
                    this.Side(1),
                ];
            }
            side_items(id) {
                const items = this.items();
                const middle = items.length % 2
                    ? Math.ceil(items.length / 3)
                    : items.length / 2;
                return id
                    ? items.slice(middle)
                    : items.slice(0, middle);
            }
            side_size(id) {
                return String(this.side_items(id).length);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_gallery.prototype, "sub", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_gallery.prototype, "side_items", null);
        $$.$mol_gallery = $mol_gallery;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//gallery.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_gallery_demo extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_gallery_demo_title');
        }
        count() {
            return 101;
        }
        sub() {
            return [
                this.App()
            ];
        }
        Item(id) {
            const obj = new this.$.$mol_link();
            obj.minimal_width = () => 100;
            obj.uri = () => "https://thiscatdoesnotexist.com/";
            obj.style = () => ({
                backgroundImage: "url('https://thiscatdoesnotexist.com/')"
            });
            obj.sub = () => [
                this.Item_title(id)
            ];
            return obj;
        }
        items() {
            return [];
        }
        App() {
            const obj = new this.$.$mol_gallery();
            obj.items = () => this.items();
            return obj;
        }
        item_title(id) {
            return "";
        }
        Item_title(id) {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.item_title(id);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_gallery_demo.prototype, "Item", null);
    __decorate([
        $.$mol_mem
    ], $mol_gallery_demo.prototype, "App", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_gallery_demo.prototype, "Item_title", null);
    $.$mol_gallery_demo = $mol_gallery_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_unit extends $.$mol_object {
        'valueOf()';
        constructor(value) {
            super();
            if (value !== undefined)
                this['valueOf()'] = value;
        }
        prefix() {
            return '';
        }
        postfix() {
            return '';
        }
        valueOf() {
            return this['valueOf()'];
        }
        delimiter() {
            return ' ';
        }
        value_view() {
            return this.valueOf().toLocaleString();
        }
        toString() {
            return this.prefix() + this.value_view() + this.postfix();
        }
        static summ(a, b) {
            var Class = a.constructor;
            if (Class !== b.constructor)
                throw new Error(`Not same measure: ${Class} , ${b.constructor}`);
            return new Class(a.valueOf() + b.valueOf());
        }
        mult(m) {
            var Class = this.constructor;
            return new Class(this.valueOf() * m);
        }
    }
    $.$mol_unit = $mol_unit;
})($ || ($ = {}));
//unit.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_unit_money extends $.$mol_unit {
    }
    $.$mol_unit_money = $mol_unit_money;
    class $mol_unit_money_usd extends $mol_unit_money {
        prefix() {
            return '$';
        }
    }
    $.$mol_unit_money_usd = $mol_unit_money_usd;
    class $mol_unit_money_rur extends $mol_unit_money {
        postfix() {
            return ' ₽';
        }
    }
    $.$mol_unit_money_rur = $mol_unit_money_rur;
})($ || ($ = {}));
//money.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_stub_select_random(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
    $.$mol_stub_select_random = $mol_stub_select_random;
    function $mol_stub_strings(prefix = '', count = 10, length = 10) {
        if (prefix.length >= length)
            return [];
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
        let strings = [];
        for (let i = 0; i < count; i++) {
            let text = prefix;
            for (let j = prefix.length; j < length; j++) {
                text += $mol_stub_select_random(possible);
            }
            strings.push(text);
        }
        return strings;
    }
    $.$mol_stub_strings = $mol_stub_strings;
    function $mol_stub_code(length = 8) {
        var max = Math.pow(16, length);
        var min = Math.pow(16, length - 1);
        var value = min + Math.floor(Math.random() * (max - min));
        return value.toString(16).toUpperCase();
    }
    $.$mol_stub_code = $mol_stub_code;
    function $mol_stub_price(max = 1000) {
        var min = Math.floor(max / 16 / 16);
        var value = min + Math.floor(Math.random() * (max - min));
        return new $.$mol_unit_money_usd(value);
    }
    $.$mol_stub_price = $mol_stub_price;
    function $mol_stub_product_name() {
        var name = $mol_stub_select_random([
            'Monitor 15"',
            'Monitor 17"',
            'Monitor 19"',
            'Graphics card',
            'Frame grabber card'
        ]);
        var port = $mol_stub_select_random(['D-SUB', 'DVI', 'HDMI']);
        var resolution = $mol_stub_select_random(['VGA', 'Full HD', '4K']);
        return [name, port, resolution].join(', ');
    }
    $.$mol_stub_product_name = $mol_stub_product_name;
    function $mol_stub_company_name_big() {
        var product = $mol_stub_select_random(['Everything', 'Something', 'Anything', 'Nothing']);
        var type = $mol_stub_select_random(['Company', 'Corporation', 'Holding']);
        return `A ${type} that makes ${product}`;
    }
    $.$mol_stub_company_name_big = $mol_stub_company_name_big;
    function $mol_stub_company_name_small() {
        return $mol_stub_select_random(['ACME inc.', 'Dream Company', 'Just Company']);
    }
    $.$mol_stub_company_name_small = $mol_stub_company_name_small;
    function $mol_stub_company_name() {
        return $mol_stub_select_random([$mol_stub_company_name_small, $mol_stub_company_name_big])();
    }
    $.$mol_stub_company_name = $mol_stub_company_name;
    function $mol_stub_person_name() {
        var first = $mol_stub_select_random(['Ivan', 'Petr', 'Sidor', 'John', 'Sam']);
        var last = $mol_stub_select_random(['Ivanov', 'Petrov', 'Sidorov', 'Johnson', 'Smith']);
        return `${first} ${last}`;
    }
    $.$mol_stub_person_name = $mol_stub_person_name;
    function $mol_stub_person_avatar(size = 80) {
        const id = Math.random().toString(16).slice(2);
        return `https://gravatar.com/avatar/${id}?d=robohash&s=${size}`;
    }
    $.$mol_stub_person_avatar = $mol_stub_person_avatar;
    function $mol_stub_city() {
        return $mol_stub_select_random(['Moscow', 'London', 'Washington', 'Buenos Aires']);
    }
    $.$mol_stub_city = $mol_stub_city;
    function $mol_stub_time(maxShift = 60 * 24 * 365) {
        return new $.$mol_time_moment().shift({ minute: Math.round(Math.random() * maxShift) });
    }
    $.$mol_stub_time = $mol_stub_time;
    function $mol_stub_message(max_length) {
        const text = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.';
        return text.substring(0, Math.ceil(Math.random() * max_length - 5) + 5);
    }
    $.$mol_stub_message = $mol_stub_message;
})($ || ($ = {}));
//stub.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/gallery/demo/demo.view.css", "[mol_gallery_demo_item] {\n\tmargin: var(--mol_gap_block);\n\tflex: 1 1 auto;\n\tflex-direction: column;\n\tposition: relative;\n\taspect-ratio: 1;\n\tbackground-size: cover;\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n}\n\n[mol_gallery_demo_item]:hover {\n\topacity: .9;\n}\n\n[mol_gallery_demo_item_title] {\n\ttext-align: center;\n\tdisplay: block;\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100%;\n\tbackground: hsla( 0, 0%, 100%, .25 );\n\tbackdrop-filter: blur(.25rem);\n\tcolor: black;\n}\n");
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_gallery_demo extends $.$mol_gallery_demo {
            items() {
                return Array.from({ length: this.count() }, (_, id) => this.Item(id));
            }
            item_title(id) {
                return $.$mol_stub_person_name();
            }
            item_uri(id) {
                return $.$mol_stub_person_avatar(80);
            }
        }
        __decorate([
            $.$mol_mem_key
        ], $mol_gallery_demo.prototype, "item_title", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_gallery_demo.prototype, "item_uri", null);
        $$.$mol_gallery_demo = $mol_gallery_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title(),
                loading: this.loading()
            };
        }
        uri() {
            return "";
        }
        loading() {
            return "lazy";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n}\n");
})($ || ($ = {}));
//image.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $.$mol_link {
        sub() {
            return [
                this.Icon()
            ];
        }
        content() {
            return [
                this.title()
            ];
        }
        host() {
            return "";
        }
        icon() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.icon();
            obj.title = () => "";
            return obj;
        }
        title() {
            return this.uri();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//iconed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: center;\n\tcolor: var(--mol_theme_control);\n\tdisplay: inline;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1em;\n\twidth: 1em;\n\tdisplay: inline-block;\n\tmargin: .125rem 0;\n\tvertical-align: text-bottom;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: invert(1) hue-rotate(180deg);\n}\n");
})($ || ($ = {}));
//iconed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://api.faviconkit.com/${this.host()}/16`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                return decodeURIComponent(this.uri().split(this.host(), 2)[1]).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//iconed.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_html_view extends $.$mol_list {
        html() {
            return "";
        }
        dom() {
            return null;
        }
        safe_link(uri) {
            return "";
        }
        xss_uri() {
            return "https://en.wikipedia.org/wiki/XSS#";
        }
        Heading(id) {
            const obj = new this.$.$mol_html_view_heading();
            obj.level = () => this.heading_level(id);
            obj.sub = () => this.content(id);
            return obj;
        }
        Paragraph(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.content(id);
            return obj;
        }
        List(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.content(id);
            return obj;
        }
        Quote(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.content(id);
            return obj;
        }
        Strong(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.content(id);
            return obj;
        }
        Emphasis(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.content(id);
            return obj;
        }
        Deleted(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.content(id);
            return obj;
        }
        Inserted(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.content(id);
            return obj;
        }
        Code(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.content(id);
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.link_uri(id);
            obj.content = () => this.content(id);
            return obj;
        }
        Image(id) {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.image_uri(id);
            return obj;
        }
        Break(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [];
            return obj;
        }
        Text(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.highlight();
            obj.haystack = () => this.text(id);
            return obj;
        }
        heading_level(id) {
            return 1;
        }
        content(id) {
            return [];
        }
        link_uri(id) {
            return "";
        }
        image_uri(id) {
            return "";
        }
        highlight() {
            return "";
        }
        text(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Heading", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Paragraph", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "List", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Strong", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Emphasis", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Deleted", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Inserted", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Code", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Break", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_html_view.prototype, "Text", null);
    $.$mol_html_view = $mol_html_view;
    class $mol_html_view_heading extends $.$mol_paragraph {
        attr() {
            return {
                ...super.attr(),
                mol_html_view_heading: this.level()
            };
        }
        level() {
            return 1;
        }
    }
    $.$mol_html_view_heading = $mol_html_view_heading;
})($ || ($ = {}));
//view.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    const { rem } = $.$mol_style_unit;
    $.$mol_style_define($.$mol_html_view, {
        padding: $.$mol_gap.block,
        Heading: {
            padding: $.$mol_gap.block,
            '@': {
                'mol_html_view_heading': {
                    '1': {
                        font: {
                            size: rem(2),
                        },
                    },
                    '2': {
                        font: {
                            size: rem(2),
                            style: 'italic',
                        },
                    },
                    '3': {
                        font: {
                            size: rem(1.5),
                        },
                    },
                    '4': {
                        font: {
                            size: rem(1.5),
                            style: 'italic',
                        },
                    },
                    '5': {
                        font: {
                            size: rem(1.25),
                        },
                    },
                    '6': {
                        font: {
                            size: rem(1.25),
                            style: 'italic',
                        },
                    },
                },
            },
        },
        Paragraph: {
            display: 'block',
            flex: {
                wrap: 'wrap',
            },
            padding: $.$mol_gap.text,
        },
        List: {
            display: 'block',
            flex: {
                wrap: 'wrap',
            },
            padding: $.$mol_gap.block,
        },
        Quote: {
            display: 'block',
            flex: {
                'wrap': 'wrap',
            },
            padding: $.$mol_gap.block,
            margin: {
                left: rem(.75),
            },
            box: {
                shadow: [{
                        inset: true,
                        x: rem(.25),
                        y: 0,
                        blur: 0,
                        spread: 0,
                        color: $.$mol_theme.line,
                    }],
            },
        },
        Strong: {
            display: 'inline',
            color: $.$mol_theme.focus,
        },
        Emphasis: {
            display: 'inline',
            font: {
                style: 'italic',
            },
        },
        Deleted: {
            display: 'inline',
            color: $.$mol_theme.shade,
        },
        Inserted: {
            display: 'inline',
            font: {
                weight: 'bolder',
            },
        },
        Link: {
            margin: rem(-.5),
        },
        Code: {
            display: 'inline',
            font: {
                family: 'monospace',
            },
            whiteSpace: 'pre-wrap',
        },
        Image: {
            display: 'inline-block',
        },
        Break: {
            display: 'block',
            height: $.$mol_gap.block,
        },
        Text: {
            display: 'inline',
        },
    });
})($ || ($ = {}));
//view.view.tree.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const warned = new Set();
        class $mol_html_view extends $.$mol_html_view {
            dom() {
                return this.$.$mol_dom_parse(this.html(), 'text/html').body;
            }
            sub() {
                return this.content(this.dom());
            }
            content(node) {
                const res = [];
                for (const child of node.childNodes) {
                    res.push(...this.views(child));
                }
                return res;
            }
            views(node) {
                switch (node.nodeName) {
                    case '#comment':
                        return [];
                    case '#text':
                    case '#cdata-section':
                        if (!node.textContent.trim())
                            return [];
                        return [this.Text(node)];
                    case 'H1':
                    case 'H2':
                    case 'H3':
                    case 'H4':
                    case 'H5':
                    case 'H6':
                        return [this.Heading(node)];
                    case 'P':
                    case 'LI':
                    case 'PRE':
                    case 'DIV':
                        return [this.Paragraph(node)];
                    case 'UL':
                    case 'OL':
                        return [this.List(node)];
                    case 'BLOCKQUOTE':
                        return [this.Quote(node)];
                    case 'STRONG':
                    case 'B':
                        return [this.Strong(node)];
                    case 'EM':
                    case 'I':
                        return [this.Emphasis(node)];
                    case 'DEL':
                    case 'S':
                        return [this.Deleted(node)];
                    case 'INS':
                    case 'U':
                        return [this.Inserted(node)];
                    case 'A':
                        return [this.Link(node)];
                    case 'PRE':
                    case 'CODE':
                        return [this.Code(node)];
                    case 'IMG':
                        return [this.Image(node)];
                    case 'BR':
                        return [this.Break(node)];
                    default:
                        if (!warned.has(node.nodeName)) {
                            this.$.$mol_log3_warn({
                                place: `${this}.views()`,
                                message: 'Unsupported tag',
                                tag: node.nodeName,
                                hint: 'Add support to $mol_html_view',
                            });
                            warned.add(node.nodeName);
                        }
                        return this.content(node);
                }
            }
            text(node) {
                return node.textContent ?? '???';
            }
            safe_link(uri) {
                const base = $.$mol_dom_context.location.href;
                const url = new $.$mol_dom_context.URL(uri, base);
                if (/^\w*script:/i.test(url.protocol)) {
                    return this.xss_uri() + uri;
                }
                return uri;
            }
            link_uri(node) {
                return this.safe_link(node.href);
            }
            image_uri(node) {
                return this.safe_link(node.src);
            }
            heading_level(node) {
                return Number(node.nodeName.substring(1));
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_html_view.prototype, "dom", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_html_view.prototype, "content", null);
        $$.$mol_html_view = $mol_html_view;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//view.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_html_view_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text('$mol_html_view_demo_title');
        }
        sub() {
            return [
                this.Scroll()
            ];
        }
        Html() {
            const obj = new this.$.$mol_html_view();
            obj.html = () => " <h1>HTML Example</h1>\n <h2>Headings</h2>\n \t<h3>Level 3</h3>\n \t<h4>Level 4</h4>\n \t<h5>Level 5</h5>\n \t<h6>Level 6</h6>\n <h2>Inline elements</h2>\n <p>\n \t<strong>strong</strong>,\n \t<em>emphasis</em>,\n \t<ins>inserted</ins>,\n \t<del>deleted</del>,\n \t<br />\n \t<b>bold</b>,\n \t<i>italic</i>,\n \t<u>underlined</u>,\n \t<s>strikethrough</s>,\n \t<br />\n \t<code>code</code>,\n \t<a href=\"#\">safe link</a>,\n \t<a href=\"javascript:alert(1)\">unsafe link</a>,\n \tnormal text.\n </p>\n <h2>Media elements</h2>\n <p>\n \t<img src=\"https://mol.hyoo.ru/mol/logo/logo.svg\" />\n </p>\n <h2>Block elements</h2>\n <blockquote><p>Block quotation</p></blockquote>\n <pre><code>Block code</code></pre>";
            return obj;
        }
        Scroll() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Html()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_html_view_demo.prototype, "Html", null);
    __decorate([
        $.$mol_mem
    ], $mol_html_view_demo.prototype, "Scroll", null);
    $.$mol_html_view_demo = $mol_html_view_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_infinite extends $.$mol_list {
        after(id) {
            return [];
        }
        Row(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_infinite.prototype, "Row", null);
    $.$mol_infinite = $mol_infinite;
})($ || ($ = {}));
//infinite.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_infinite extends $.$mol_infinite {
            row_ids() {
                let ids = $.$mol_mem_cached(() => this.row_ids()) ?? [];
                if (ids.length === 0)
                    ids = this.after(undefined);
                if (ids.length === 0)
                    return [];
                const rect = this.view_rect();
                if (!rect)
                    return ids;
                const window_height = $.$mol_window.size().height;
                if (rect.bottom < window_height * 3) {
                    ids = [...ids, ...this.after(ids[ids.length - 1])];
                }
                return ids;
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_infinite.prototype, "row_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_infinite.prototype, "rows", null);
        $$.$mol_infinite = $mol_infinite;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//infinite.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_infinite_demo extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_infinite_demo_title');
        }
        chunk_size() {
            return 20;
        }
        sub() {
            return [
                this.List()
            ];
        }
        after(anchor_id) {
            return [];
        }
        Item(id) {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        List() {
            const obj = new this.$.$mol_infinite();
            obj.after = (anchor_id) => this.after(anchor_id);
            obj.Row = (id) => this.Item(id);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_infinite_demo.prototype, "Item", null);
    __decorate([
        $.$mol_mem
    ], $mol_infinite_demo.prototype, "List", null);
    $.$mol_infinite_demo = $mol_infinite_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_infinite_demo extends $.$mol_infinite_demo {
            after(anchor_id = 0) {
                return [...$.$mol_range2(index => anchor_id + index, () => this.chunk_size())];
            }
            item_title(id) {
                return `Row #${id}`;
            }
        }
        __decorate([
            $.$mol_fiber.method
        ], $mol_infinite_demo.prototype, "after", null);
        $$.$mol_infinite_demo = $mol_infinite_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_labeler_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_labeler_demo_title');
        }
        sub() {
            return [
                this.Provider(),
                this.Name()
            ];
        }
        Provider() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Provider";
            obj.content = () => [
                "ACME Provider Inc."
            ];
            return obj;
        }
        user_name(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Name_control() {
            const obj = new this.$.$mol_string();
            obj.hint = () => "Jack Sparrow";
            obj.value = (val) => this.user_name(val);
            return obj;
        }
        Name() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "User name";
            obj.Content = () => this.Name_control();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_labeler_demo.prototype, "Provider", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler_demo.prototype, "user_name", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler_demo.prototype, "Name_control", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler_demo.prototype, "Name", null);
    $.$mol_labeler_demo = $mol_labeler_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_download extends $.$mol_icon {
        path() {
            return "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z";
        }
    }
    $.$mol_icon_download = $mol_icon_download;
})($ || ($ = {}));
//download.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_demo extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_link_demo_title');
        }
        rows() {
            return [
                this.This(),
                this.Red(),
                this.Green(),
                this.Blue(),
                this.External(),
                this.Download()
            ];
        }
        this_label() {
            return this.$.$mol_locale.text('$mol_link_demo_this_label');
        }
        This() {
            const obj = new this.$.$mol_link();
            obj.sub = () => [
                this.this_label()
            ];
            return obj;
        }
        red_label() {
            return this.$.$mol_locale.text('$mol_link_demo_red_label');
        }
        Red() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                color: "red"
            });
            obj.sub = () => [
                this.red_label()
            ];
            return obj;
        }
        green_label() {
            return this.$.$mol_locale.text('$mol_link_demo_green_label');
        }
        Green() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                color: "green"
            });
            obj.sub = () => [
                this.green_label()
            ];
            return obj;
        }
        blue_label() {
            return this.$.$mol_locale.text('$mol_link_demo_blue_label');
        }
        Blue() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                color: "blue"
            });
            obj.sub = () => [
                this.blue_label()
            ];
            return obj;
        }
        external_hint() {
            return this.$.$mol_locale.text('$mol_link_demo_external_hint');
        }
        External() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "http://example.org";
            obj.title = () => "example.org";
            obj.hint = () => this.external_hint();
            return obj;
        }
        object_uri() {
            return "";
        }
        Download_icon() {
            const obj = new this.$.$mol_icon_download();
            return obj;
        }
        download_label() {
            return this.$.$mol_locale.text('$mol_link_demo_download_label');
        }
        Download() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.object_uri();
            obj.file_name = () => "file.csv";
            obj.sub = () => [
                this.Download_icon(),
                this.download_label()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "This", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "Red", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "Green", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "Blue", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "External", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "Download_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_demo.prototype, "Download", null);
    $.$mol_link_demo = $mol_link_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_demo extends $.$mol_link_demo {
            object_uri() {
                const blob = new Blob(['hello;world\nhello1;world2'], { type: 'text/csv' });
                return $.$mol_dom_context.URL.createObjectURL(blob);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link_demo.prototype, "object_uri", null);
        $$.$mol_link_demo = $mol_link_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed_demo extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_link_iconed_demo_title');
        }
        rows() {
            return [
                this.Input(),
                this.Output()
            ];
        }
        uri(val) {
            if (val !== undefined)
                return val;
            return "https://www.google.com/search?q=%24mol";
        }
        Input() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.uri(val);
            return obj;
        }
        Output() {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.uri();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed_demo.prototype, "uri", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed_demo.prototype, "Input", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed_demo.prototype, "Output", null);
    $.$mol_link_iconed_demo = $mol_link_iconed_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/link/iconed/demo/demo.view.css", "[mol_link_iconed_demo_input] {\n\tdisplay: block;\n}\n\n[mol_link_iconed_demo_output] {\n\tdisplay: block;\n}\n");
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list_demo_table extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_list_demo_table_title');
        }
        count() {
            return 1000;
        }
        sub() {
            return [
                this.Rows()
            ];
        }
        Row(id) {
            const obj = new this.$.$mol_row();
            obj.minimal_height = () => 40;
            obj.sub = () => this.row_content(id);
            return obj;
        }
        rows() {
            return [];
        }
        Rows() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.rows();
            return obj;
        }
        row_id(id) {
            return "";
        }
        Id(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.row_id(id)
            ];
            return obj;
        }
        row_title(id) {
            return "";
        }
        Title(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.row_title(id)
            ];
            return obj;
        }
        editable_title() {
            return this.$.$mol_locale.text('$mol_list_demo_table_editable_title');
        }
        row_editable(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Editable(id) {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.editable_title();
            obj.checked = (val) => this.row_editable(id, val);
            return obj;
        }
        row_priority(id, val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Priority(id) {
            const obj = new this.$.$mol_switch();
            obj.enabled = () => this.row_editable(id);
            obj.value = (val) => this.row_priority(id, val);
            obj.options = () => ({
                minor: "Minor",
                major: "Major",
                critical: "Critical"
            });
            return obj;
        }
        row_moment(id, val) {
            if (val !== undefined)
                return val;
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        Date(id) {
            const obj = new this.$.$mol_date();
            obj.value_moment = (val) => this.row_moment(id, val);
            obj.enabled = () => this.row_editable(id);
            return obj;
        }
        row_uri(id) {
            return "";
        }
        Link(id) {
            const obj = new this.$.$mol_link_iconed();
            obj.uri = () => this.row_uri(id);
            return obj;
        }
        row_content(id) {
            return [
                this.Id(id),
                this.Title(id),
                this.Editable(id),
                this.Priority(id),
                this.Date(id),
                this.Link(id)
            ];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_table.prototype, "Row", null);
    __decorate([
        $.$mol_mem
    ], $mol_list_demo_table.prototype, "Rows", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_table.prototype, "Id", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_table.prototype, "Title", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_table.prototype, "row_editable", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_table.prototype, "Editable", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_table.prototype, "row_priority", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_table.prototype, "Priority", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_table.prototype, "row_moment", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_table.prototype, "Date", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_table.prototype, "Link", null);
    $.$mol_list_demo_table = $mol_list_demo_table;
})($ || ($ = {}));
//table.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_list_demo_table, {
            Row: {
                padding: 0,
                '>': {
                    $mol_view: {
                        margin: 0,
                    },
                },
            },
            Id: {
                justifyContent: 'flex-end',
                padding: $.$mol_gap.text,
                flex: {
                    grow: 0,
                    shrink: 0,
                    basis: rem(4),
                },
            },
            Title: {
                fontWeight: 'bolder',
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: rem(10),
                },
                padding: $.$mol_gap.text,
            },
            Link: {
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: rem(3),
                },
            },
            Editable: {
                Title: {
                    verticalAlign: 'top',
                },
            },
            Priority: {
                flex: 'none',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//table.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list_demo_table extends $.$mol_list_demo_table {
            rows() {
                $.$mol_mem_persist();
                return [...$.$mol_range2(index => this.Row(index), () => this.count())];
            }
            row_id(id) {
                return String(id);
            }
            row_title(id) {
                $.$mol_mem_persist();
                return $.$mol_stub_product_name();
            }
            row_number(id, next) {
                $.$mol_mem_persist();
                return next ?? id + 1;
            }
            row_uri(id) {
                $.$mol_mem_persist();
                return `http://xkcd.com/${this.row_number(id)}`;
            }
            row_moment(id, next) {
                $.$mol_mem_persist();
                return next ?? new $.$mol_time_moment().shift({ day: this.row_number(id) });
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list_demo_table.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_list_demo_table.prototype, "row_title", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_list_demo_table.prototype, "row_number", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_list_demo_table.prototype, "row_uri", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_list_demo_table.prototype, "row_moment", null);
        $$.$mol_list_demo_table = $mol_list_demo_table;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//table.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list_demo_tree extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_list_demo_tree_title');
        }
        sub() {
            return [
                this.Content()
            ];
        }
        Row(id) {
            const obj = new this.$.$mol_expander();
            obj.label = () => [
                this.Row_title(id)
            ];
            obj.expanded = (val) => this.row_expanded(id, val);
            obj.Content = () => this.Row_content(id);
            return obj;
        }
        root_rows() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.root_rows();
            return obj;
        }
        row_title(id) {
            return "";
        }
        Row_title(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.row_title(id)
            ];
            return obj;
        }
        row_expanded(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        row_content(id) {
            return [];
        }
        Row_content(id) {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.row_content(id);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_tree.prototype, "Row", null);
    __decorate([
        $.$mol_mem
    ], $mol_list_demo_tree.prototype, "Content", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_tree.prototype, "Row_title", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_tree.prototype, "row_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_list_demo_tree.prototype, "Row_content", null);
    $.$mol_list_demo_tree = $mol_list_demo_tree;
})($ || ($ = {}));
//tree.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/list/demo/tree/tree.view.css", "[mol_list_demo_tree_row_content] {\n\tpadding-left: .75rem;\n\tdisplay: block;\n}\n\n[mol_list_demo_tree_row] [mol_list_demo_tree_row] {\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tbackground: hsla( 0deg , 0% , 50% , .05 );\n}\n");
})($ || ($ = {}));
//tree.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list_demo_tree extends $.$mol_list_demo_tree {
            root_rows() {
                return this.row_content([]);
            }
            row_title(id) {
                $.$mol_mem_persist();
                return `Node ${id.join('.')}: ${$.$mol_stub_message(512)} `;
            }
            row_content(id) {
                $.$mol_mem_persist();
                return [...$.$mol_range2(index => this.Row([...id, index]), () => Math.floor(Math.random() * 10 + 5))];
            }
            row_expanded(id, next = id.length < 4) {
                return next;
            }
        }
        __decorate([
            $.$mol_mem_key
        ], $mol_list_demo_tree.prototype, "row_title", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_list_demo_tree.prototype, "row_content", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_list_demo_tree.prototype, "row_expanded", null);
        $$.$mol_list_demo_tree = $mol_list_demo_tree;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//tree.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_map_yandex_mark extends $.$mol_object {
        pos() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        box() {
            const obj = new this.$.$mol_vector_2d(this.box_lat(), this.box_lon());
            return obj;
        }
        hint() {
            return "";
        }
        title() {
            return this.address();
        }
        content() {
            return "";
        }
        object() {
            return null;
        }
        box_lat() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        box_lon() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        address() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "box", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "box_lat", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "box_lon", null);
    $.$mol_map_yandex_mark = $mol_map_yandex_mark;
})($ || ($ = {}));
//mark.view.tree.js.map
;
"use strict";
//unary.js.map
;
"use strict";
//tail.js.map
;
"use strict";
//value.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//setup.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        return Object.getOwnPropertyDescriptor(func, 'prototype')?.writable === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));
//class.js.map
;
"use strict";
//foot.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_pipe(...funcs) {
        return $.$mol_data_setup(function (input) {
            let value = input;
            for (const func of funcs)
                value = $.$mol_func_is_class(func) ? new func(value) : func.call(this, value);
            return value;
        }, { funcs });
    }
    $.$mol_data_pipe = $mol_data_pipe;
})($ || ($ = {}));
//pipe.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//path.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        errors;
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.stack), this.stack];
                const diff = $.$mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mix.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $.$mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//error.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));
//string.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_array(sub) {
        return $.$mol_data_setup((val) => {
            if (!Array.isArray(val))
                return $.$mol_fail(new $.$mol_data_error(`${val} is not an array`));
            return val.map((item, index) => {
                try {
                    return sub(item);
                }
                catch (error) {
                    if ('then' in error)
                        return $.$mol_fail_hidden(error);
                    error.message = `[${index}] ${error.message}`;
                    return $.$mol_fail(error);
                }
            });
        }, sub);
    }
    $.$mol_data_array = $mol_data_array;
})($ || ($ = {}));
//array.js.map
;
"use strict";
//undefined.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_record(sub) {
        return $.$mol_data_setup((val) => {
            let res = {};
            for (const field in sub) {
                try {
                    res[field] = sub[field](val[field]);
                }
                catch (error) {
                    if ('then' in error)
                        return $.$mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $.$mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_record = $mol_data_record;
})($ || ($ = {}));
//record.js.map
;
"use strict";
var $;
(function ($) {
    const Numb = $.$mol_data_pipe($.$mol_data_string, parseFloat);
    const Response = $.$mol_data_array($.$mol_data_record({
        boundingbox: $.$mol_data_array(Numb),
        lat: Numb,
        lon: Numb,
    }));
    $.$mol_geo_search_attribution = 'https://osm.org/copyright';
    function $mol_geo_search({ query, count = 1 }) {
        const url = new URL('https://nominatim.openstreetmap.org/search');
        url.searchParams.set('q', query);
        url.searchParams.set('limit', count.toString());
        url.searchParams.set('format', 'jsonv2');
        const json = $.$mol_fetch.json(url.toString());
        return Response(json).map(({ lon, lat, boundingbox: box }) => {
            return {
                coord: new $.$mol_vector_2d(lat, lon),
                box: new $.$mol_vector_2d(new $.$mol_vector_range(box[0], box[1]), new $.$mol_vector_range(box[2], box[3])),
            };
        });
    }
    $.$mol_geo_search = $mol_geo_search;
})($ || ($ = {}));
//search.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_map_yandex_mark extends $.$mol_map_yandex_mark {
            object() {
                const ymaps = $$.$mol_map_yandex.api();
                return new ymaps.Placemark(this.pos(), {
                    hintContent: this.hint(),
                    iconContent: this.title(),
                    balloonContent: this.content(),
                }, {
                    preset: "islands#redStretchyIcon",
                });
            }
            found() {
                return $.$mol_geo_search({ query: this.address() })[0] ?? null;
            }
            pos() {
                return this.found()?.coord ?? super.pos();
            }
            box() {
                return this.found()?.box ?? super.pos();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex_mark.prototype, "object", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex_mark.prototype, "found", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex_mark.prototype, "box", null);
        $$.$mol_map_yandex_mark = $mol_map_yandex_mark;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mark.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_map_yandex extends $.$mol_view {
        zoom(val) {
            if (val !== undefined)
                return val;
            return 2;
        }
        center(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        objects() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex.prototype, "center", null);
    $.$mol_map_yandex = $mol_map_yandex;
})($ || ($ = {}));
//yandex.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_import extends $.$mol_object2 {
        static module(uri) {
            return $.$mol_fiber_sync(() => import(uri))();
        }
        static script(uri) {
            return $.$mol_fiber_sync(() => {
                const doc = $.$mol_dom_context.document;
                const script = doc.createElement('script');
                script.src = uri;
                doc.head.appendChild(script);
                return new Promise((done, fail) => {
                    script.onload = () => done($.$mol_dom_context);
                    script.onerror = () => fail(new Error(`Can not import ${uri}`));
                });
            })();
        }
        static style(uri) {
            return $.$mol_fiber_sync(() => {
                const doc = $.$mol_dom_context.document;
                const style = doc.createElement('link');
                style.rel = 'stylesheet';
                style.href = uri;
                doc.head.appendChild(style);
                return new Promise((done, fail) => {
                    style.onload = () => done(style.sheet);
                    style.onerror = () => fail(new Error(`Can not import ${uri}`));
                });
            })();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_import, "module", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_import, "script", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_import, "style", null);
    $.$mol_import = $mol_import;
})($ || ($ = {}));
//import.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/map/yandex/yandex.view.css", "[mol_map_yandex] {\n\tflex: auto;\n\talign-self: stretch;\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));
//yandex.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_map_yandex extends $.$mol_map_yandex {
            static api() {
                return $.$mol_import.script(`https://api-maps.yandex.ru/2.1/?lang=${$.$mol_locale.lang()}`).ymaps;
            }
            api(next, force) {
                const ymaps = $mol_map_yandex.api();
                const load_map = $.$mol_fiber_sync(() => new Promise(done => ymaps.ready(done)));
                load_map();
                const api = new ymaps.Map(this.dom_node(), {
                    center: [0, 0],
                    zoom: 0,
                });
                api.copyrights.add($.$mol_geo_search_attribution);
                api.controls.remove('fullscreenControl');
                api.controls.remove('typeSelector');
                api.events.add(['actionend'], (event) => {
                    new $.$mol_after_frame($.$mol_fiber_root(() => {
                        this.update(event);
                    }));
                });
                return api;
            }
            update(event) {
                this.zoom(this.api().getZoom());
                this.center(this.api().getCenter());
            }
            bounds_updated() {
                const box = this.objects()[0]?.box();
                if (box) {
                    this.api().setBounds([
                        [box.x.min, box.y.min],
                        [box.x.max, box.y.max],
                    ]);
                }
                return true;
            }
            center(next, force) {
                if (next !== undefined)
                    return next;
                const pos = this.objects()[0]?.pos();
                if (pos)
                    return pos;
                return [0, 0];
            }
            render() {
                const api = this.api();
                api.setCenter(this.center(), this.zoom());
                api.geoObjects.removeAll();
                for (let obj of this.objects()) {
                    api.geoObjects.add(obj.object());
                }
                this.dom_node_actual();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex.prototype, "api", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex.prototype, "bounds_updated", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex.prototype, "center", null);
        $$.$mol_map_yandex = $mol_map_yandex;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//yandex.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_map_yandex_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text('$mol_map_yandex_demo_title');
        }
        sub() {
            return [
                this.Map()
            ];
        }
        place_title() {
            return "";
        }
        place_addres() {
            return "Saint-Petersburg";
        }
        place_content() {
            return "It is Russia's second-largest city after Moscow";
        }
        Place() {
            const obj = new this.$.$mol_map_yandex_mark();
            obj.title = () => this.place_title();
            obj.address = () => this.place_addres();
            obj.content = () => this.place_content();
            return obj;
        }
        Map() {
            const obj = new this.$.$mol_map_yandex();
            obj.objects = () => [
                this.Place()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_demo.prototype, "Place", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_demo.prototype, "Map", null);
    $.$mol_map_yandex_demo = $mol_map_yandex_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_nav_demo extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_nav_demo_title');
        }
        plugins() {
            return [
                this.Nav()
            ];
        }
        rows() {
            return [
                this.Hint(),
                this.Tab_list(),
                this.Row_list()
            ];
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_x = () => this.tab_list();
            obj.current_x = (val) => this.tab_current(val);
            obj.keys_y = () => this.row_list();
            obj.current_y = (val) => this.row_current(val);
            return obj;
        }
        Hint() {
            const obj = new this.$.$mol_card();
            obj.title = () => this.$.$mol_locale.text('$mol_nav_demo_Hint_title');
            return obj;
        }
        tab_current(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        tab_list() {
            return this.Tab_list().keys();
        }
        Tab_list() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.tab_current(val);
            obj.options = () => ({
                first: "First",
                second: "Second",
                third: "Third"
            });
            return obj;
        }
        row_current(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        row_list() {
            return this.Row_list().keys();
        }
        Row_list() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.row_current(val);
            obj.options = () => ({
                first: "First",
                second: "Second",
                third: "Third"
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_nav_demo.prototype, "Nav", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav_demo.prototype, "Hint", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav_demo.prototype, "tab_current", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav_demo.prototype, "Tab_list", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav_demo.prototype, "row_current", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav_demo.prototype, "Row_list", null);
    $.$mol_nav_demo = $mol_nav_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_define($.$mol_nav_demo, {
        display: 'flex',
        flexDirection: 'column',
        Row_list: {
            display: 'flex',
            flexDirection: 'column',
        },
    });
})($ || ($ = {}));
//demo.view.tree.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_minus extends $.$mol_icon {
        path() {
            return "M19,13H5V11H19V13Z";
        }
    }
    $.$mol_icon_minus = $mol_icon_minus;
})($ || ($ = {}));
//minus.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $.$mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//plus.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_number extends $.$mol_view {
        precision_view() {
            return this.precision();
        }
        precision_change() {
            return this.precision();
        }
        value(val) {
            if (val !== undefined)
                return val;
            return NaN;
        }
        sub() {
            return [
                this.String(),
                this.Dec(),
                this.Inc()
            ];
        }
        precision() {
            return 1;
        }
        value_string(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return " ";
        }
        enabled() {
            return true;
        }
        string_enabled() {
            return this.enabled();
        }
        String() {
            const obj = new this.$.$mol_string();
            obj.type = () => "tel";
            obj.value = (val) => this.value_string(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.string_enabled();
            return obj;
        }
        event_dec(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        dec_enabled() {
            return this.enabled();
        }
        dec_icon() {
            const obj = new this.$.$mol_icon_minus();
            return obj;
        }
        Dec() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (val) => this.event_dec(val);
            obj.enabled = () => this.dec_enabled();
            obj.sub = () => [
                this.dec_icon()
            ];
            return obj;
        }
        event_inc(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        inc_enabled() {
            return this.enabled();
        }
        inc_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Inc() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (val) => this.event_inc(val);
            obj.enabled = () => this.inc_enabled();
            obj.sub = () => [
                this.inc_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "value_string", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "String", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "event_dec", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "dec_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "Dec", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "event_inc", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "inc_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_number.prototype, "Inc", null);
    $.$mol_number = $mol_number;
})($ || ($ = {}));
//number.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/number/number.css", "[mol_number] {\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tposition: relative;\n\talign-items: stretch;\n\tmax-width: 100%;\n}\n\n[mol_number]:hover {\n\tz-index: 2;\n}\n\n[mol_number_string] {\n\tappearance: textfield;\n\tflex: 1 1 7rem;\n\twidth: 7rem;\n\ttext-align: right;\n}\n\n[mol_number_string]::-webkit-inner-spin-button {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//number.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_number extends $.$mol_number {
            event_dec(next) {
                this.value((Number(this.value()) || 0) - this.precision_change());
            }
            event_inc(next) {
                this.value((Number(this.value()) || 0) + this.precision_change());
            }
            value_string(next) {
                if (next !== void 0) {
                    this.value(next === '' ? null : Number(next));
                }
                const precisionView = this.precision_view();
                const value = next ? Number(next) : this.value();
                if (value === 0)
                    return '0';
                if (!value)
                    return '';
                if (precisionView >= 1) {
                    return (value / precisionView).toFixed();
                }
                else {
                    const fixedNumber = Math.log10(1 / precisionView);
                    return value.toFixed(fixedNumber);
                }
            }
        }
        $$.$mol_number = $mol_number;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//number.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_number_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_number_demo_title');
        }
        sub() {
            return [
                this.zero(),
                this.one(),
                this.two(),
                this.three(),
                this.four(),
                this.five(),
                this.six(),
                this.seven(),
                this.eight(),
                this.nine()
            ];
        }
        zero() {
            const obj = new this.$.$mol_number();
            return obj;
        }
        year(val) {
            if (val !== undefined)
                return val;
            return NaN;
        }
        one() {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.year(val);
            return obj;
        }
        two() {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.year(val);
            obj.hint = () => "2016";
            return obj;
        }
        age(val) {
            if (val !== undefined)
                return val;
            return 32;
        }
        three() {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.age(val);
            obj.hint = () => "18-99";
            obj.enabled = () => false;
            return obj;
        }
        four() {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.year(val);
            obj.string_enabled = () => false;
            return obj;
        }
        five() {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.age(val);
            obj.dec_enabled = () => false;
            return obj;
        }
        six() {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.year(val);
            obj.inc_enabled = () => false;
            return obj;
        }
        seven() {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.year(val);
            obj.precision_change = () => 10;
            return obj;
        }
        eight() {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.year(val);
            obj.precision_view = () => 0.01;
            return obj;
        }
        nine() {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.year(val);
            obj.precision = () => 1000;
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "zero", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "year", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "one", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "two", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "age", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "three", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "four", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "five", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "six", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "seven", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "eight", null);
    __decorate([
        $.$mol_mem
    ], $mol_number_demo.prototype, "nine", null);
    $.$mol_number_demo = $mol_number_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_page_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text('$mol_page_demo_title');
        }
        sub() {
            return [
                this.Page()
            ];
        }
        Button_tools() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => "Toolbar Button";
            return obj;
        }
        Text() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Button_foot() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => "Footer Button";
            return obj;
        }
        Foot_content() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Button_foot()
            ];
            return obj;
        }
        Page() {
            const obj = new this.$.$mol_page();
            obj.tools = () => [
                this.Button_tools()
            ];
            obj.body = () => [
                this.Text()
            ];
            obj.foot = () => [
                this.Foot_content()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page_demo.prototype, "Button_tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page_demo.prototype, "Text", null);
    __decorate([
        $.$mol_mem
    ], $mol_page_demo.prototype, "Button_foot", null);
    __decorate([
        $.$mol_mem
    ], $mol_page_demo.prototype, "Foot_content", null);
    __decorate([
        $.$mol_mem
    ], $mol_page_demo.prototype, "Page", null);
    $.$mol_page_demo = $mol_page_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_paginator extends $.$mol_view {
        sub() {
            return [
                this.Backward(),
                this.Value(),
                this.Forward()
            ];
        }
        backward_hint() {
            return this.$.$mol_locale.text('$mol_paginator_backward_hint');
        }
        backward(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Backward_icon() {
            const obj = new this.$.$mol_icon_chevron_left();
            return obj;
        }
        Backward() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.backward_hint();
            obj.click = (event) => this.backward(event);
            obj.sub = () => [
                this.Backward_icon()
            ];
            return obj;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        Value() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.value()
            ];
            return obj;
        }
        forward_hint() {
            return this.$.$mol_locale.text('$mol_paginator_forward_hint');
        }
        forward(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Forward_icon() {
            const obj = new this.$.$mol_icon_chevron_right();
            return obj;
        }
        Forward() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.forward_hint();
            obj.click = (event) => this.forward(event);
            obj.sub = () => [
                this.Forward_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "backward", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Backward_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Backward", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Value", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "forward", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Forward_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Forward", null);
    $.$mol_paginator = $mol_paginator;
})($ || ($ = {}));
//paginator.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/paginator/paginator.view.css", "[mol_paginator_value] {\n\tpadding: .5rem 0;\n}\n");
})($ || ($ = {}));
//paginator.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paginator extends $.$mol_paginator {
            backward(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                this.value(this.value() - 1);
            }
            forward(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                this.value(this.value() + 1);
            }
        }
        $$.$mol_paginator = $mol_paginator;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//paginator.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_paginator_demo extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_paginator_demo_title');
        }
        sub() {
            return [
                this.Pages()
            ];
        }
        page(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        Pages() {
            const obj = new this.$.$mol_paginator();
            obj.value = (val) => this.page(val);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_paginator_demo.prototype, "page", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator_demo.prototype, "Pages", null);
    $.$mol_paginator_demo = $mol_paginator_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text('$mol_plot_demo_title');
        }
        count(val) {
            if (val !== undefined)
                return val;
            return 20;
        }
        sub() {
            return [
                this.Plot()
            ];
        }
        saturation_series() {
            return [];
        }
        Saturation_fill() {
            const obj = new this.$.$mol_plot_fill();
            return obj;
        }
        Saturation_line() {
            const obj = new this.$.$mol_plot_line();
            obj.type = () => "dashed";
            return obj;
        }
        Saturation() {
            const obj = new this.$.$mol_plot_group();
            obj.series_y = () => this.saturation_series();
            obj.graphs = () => [
                this.Saturation_fill(),
                this.Saturation_line()
            ];
            return obj;
        }
        input_series() {
            return [];
        }
        Input_line() {
            const obj = new this.$.$mol_plot_line();
            return obj;
        }
        Input_dots() {
            const obj = new this.$.$mol_plot_dot();
            return obj;
        }
        Input() {
            const obj = new this.$.$mol_plot_group();
            obj.series_y = () => this.input_series();
            obj.graphs = () => [
                this.Input_line(),
                this.Input_dots()
            ];
            return obj;
        }
        output_series() {
            return [];
        }
        Output() {
            const obj = new this.$.$mol_plot_bar();
            obj.series_y = () => this.output_series();
            return obj;
        }
        Voltage_title() {
            return this.$.$mol_locale.text('$mol_plot_demo_Voltage_title');
        }
        Voltage() {
            const obj = new this.$.$mol_plot_ruler_vert();
            obj.title = () => this.Voltage_title();
            return obj;
        }
        Time_title() {
            return this.$.$mol_locale.text('$mol_plot_demo_Time_title');
        }
        Time() {
            const obj = new this.$.$mol_plot_ruler_hor();
            obj.title = () => this.Time_title();
            return obj;
        }
        Plot() {
            const obj = new this.$.$mol_plot_pane();
            obj.graphs = () => [
                this.Saturation(),
                this.Input(),
                this.Output(),
                this.Voltage(),
                this.Time()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "count", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Saturation_fill", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Saturation_line", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Saturation", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Input_line", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Input_dots", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Input", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Output", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Voltage", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Time", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_demo.prototype, "Plot", null);
    $.$mol_plot_demo = $mol_plot_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/demo/demo.view.css", "[mol_plot_demo_saturation] {\n\tstroke-dasharray: .5% .5%;\n}\n");
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_demo extends $.$mol_plot_demo {
            series_x() {
                const next = [];
                for (let i = 0, count = this.count(); i < count; i++)
                    next.push(i);
                return next;
            }
            input_series() {
                return this.series_x().map(i => Math.sin(i / 2) * 2);
            }
            output_series() {
                $.$mol_state_time.now(125);
                return this.input_series().map(input => input * Math.random());
            }
            saturation_series() {
                const input = this.output_series();
                const prev = ($.$mol_mem_cached(() => this.saturation_series())) ?? [];
                return input.map((val, i) => {
                    const next = (val + 9 * (prev[i] || 0)) / 10;
                    return (Math.abs(next) > Math.abs(val)) ? next : val;
                });
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_demo.prototype, "series_x", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_demo.prototype, "input_series", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_demo.prototype, "output_series", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_demo.prototype, "saturation_series", null);
        $$.$mol_plot_demo = $mol_plot_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_map_heat extends $.$mol_plot_group {
        series_z() {
            return [];
        }
        graphs() {
            return this.level_graphs();
        }
        Level(z) {
            const obj = new this.$.$mol_plot_map_heat_level();
            obj.hint = () => this.level_hint(z);
            obj.points = () => this.level_points(z);
            obj.opacity = () => this.level_opacity(z);
            obj.diameter = () => this.level_diameter();
            obj.aspect = () => this.level_aspect();
            return obj;
        }
        Sample() {
            const obj = new this.$.$mol_plot_graph_sample();
            obj.color = () => this.color();
            return obj;
        }
        level_graphs() {
            return [];
        }
        level_hint(z) {
            return "";
        }
        level_points(z) {
            return [];
        }
        level_opacity(z) {
            return "1";
        }
        level_diameter() {
            return 10;
        }
        level_aspect() {
            return 1;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_plot_map_heat.prototype, "Level", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_map_heat.prototype, "Sample", null);
    $.$mol_plot_map_heat = $mol_plot_map_heat;
    class $mol_plot_map_heat_level extends $.$mol_plot_dot {
        style() {
            return {
                ...super.style(),
                opacity: this.opacity()
            };
        }
        opacity() {
            return "1";
        }
    }
    $.$mol_plot_map_heat_level = $mol_plot_map_heat_level;
})($ || ($ = {}));
//heat.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/plot/map/heat/heat.view.css", "[mol_plot_map_heat_level_curve] {\n\tstroke-linecap: square;\n\tfill: none;\n}\n");
})($ || ($ = {}));
//heat.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_map_heat extends $.$mol_plot_map_heat {
            levels() {
                return [...new Set(this.series_z())].sort((a, b) => a - b);
            }
            level_graphs() {
                return this.levels().map((_, i) => this.Level(i));
            }
            level_points(level) {
                const value = this.levels()[level];
                const series_z = this.series_z();
                const res = [];
                for (const [index, point] of this.points().entries()) {
                    if (series_z[index] !== value)
                        continue;
                    res.push(point);
                }
                return res;
            }
            level_opacity(level) {
                return String(level / this.levels().length);
            }
            level_diameter() {
                return Math.min(...this.scale().map(Math.abs));
            }
            level_aspect() {
                const scale = this.scale().map(Math.abs);
                return scale[1] / scale[0];
            }
            level_hint(index) {
                return this.levels()[index].toLocaleString();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_map_heat.prototype, "levels", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_map_heat.prototype, "level_graphs", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_plot_map_heat.prototype, "level_points", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_map_heat.prototype, "level_opacity", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_map_heat.prototype, "level_diameter", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_map_heat.prototype, "level_aspect", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_map_heat.prototype, "level_hint", null);
        $$.$mol_plot_map_heat = $mol_plot_map_heat;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//heat.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plot_map_heat_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text('$mol_plot_map_heat_demo_title');
        }
        count_x() {
            return 20;
        }
        count_y() {
            return 200;
        }
        count_z() {
            return 20;
        }
        sub() {
            return [
                this.Plot()
            ];
        }
        terrain_x() {
            return [];
        }
        terrain_y() {
            return [];
        }
        terrain_z() {
            return [];
        }
        Terrain() {
            const obj = new this.$.$mol_plot_map_heat();
            obj.series_x = () => this.terrain_x();
            obj.series_y = () => this.terrain_y();
            obj.series_z = () => this.terrain_z();
            return obj;
        }
        zoom(val) {
            return this.Plot().scale_y(val);
        }
        Plot() {
            const obj = new this.$.$mol_plot_pane();
            obj.zoom = (val) => this.zoom(val);
            obj.graphs = () => [
                this.Terrain()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plot_map_heat_demo.prototype, "Terrain", null);
    __decorate([
        $.$mol_mem
    ], $mol_plot_map_heat_demo.prototype, "Plot", null);
    $.$mol_plot_map_heat_demo = $mol_plot_map_heat_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plot_map_heat_demo extends $.$mol_plot_map_heat_demo {
            terrain_x() {
                const count_x = this.count_x();
                const count_y = this.count_y();
                return Array.from({ length: count_x * count_y }, (_, i) => i % count_x);
            }
            terrain_y() {
                const count_x = this.count_x();
                const count_y = this.count_y();
                return Array.from({ length: count_x * count_y }, (_, i) => Math.floor(i / count_x));
            }
            terrain_z() {
                const count_x = this.count_x();
                const count_y = this.count_y();
                const count_z = this.count_z();
                return Array.from({ length: count_x * count_y }, () => Math.floor(Math.random() * count_z) * 1000);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plot_map_heat_demo.prototype, "terrain_x", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_map_heat_demo.prototype, "terrain_y", null);
        __decorate([
            $.$mol_mem
        ], $mol_plot_map_heat_demo.prototype, "terrain_z", null);
        $$.$mol_plot_map_heat_demo = $mol_plot_map_heat_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_pop_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_pop_demo_title');
        }
        sub() {
            return [
                this.Pop()
            ];
        }
        show_text() {
            return this.$.$mol_locale.text('$mol_pop_demo_show_text');
        }
        Show() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.show_text();
            return obj;
        }
        showed() {
            return this.focused();
        }
        bubble_hint() {
            return this.$.$mol_locale.text('$mol_pop_demo_bubble_hint');
        }
        Content() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.bubble_hint()
            ];
            return obj;
        }
        Pop() {
            const obj = new this.$.$mol_pop();
            obj.Anchor = () => this.Show();
            obj.showed = () => this.showed();
            obj.bubble_content = () => [
                this.Content()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop_demo.prototype, "Show", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_demo.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_demo.prototype, "Pop", null);
    $.$mol_pop_demo = $mol_pop_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_pop_over extends $.$mol_pop {
        showed() {
            return this.hovered();
        }
        attr() {
            return {
                ...super.attr(),
                tabindex: 0
            };
        }
        event() {
            return {
                ...super.event(),
                mouseenter: (event) => this.event_show(event),
                mouseleave: (event) => this.event_hide(event)
            };
        }
        hovered(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        event_show(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_hide(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop_over.prototype, "hovered", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over.prototype, "event_show", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over.prototype, "event_hide", null);
    $.$mol_pop_over = $mol_pop_over;
})($ || ($ = {}));
//over.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/pop/over/over.view.css", "[mol_pop_over]:focus {\r\n\toutline: none;\r\n}");
})($ || ($ = {}));
//over.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop_over extends $.$mol_pop_over {
            event_show(event) {
                this.hovered(true);
            }
            event_hide(event) {
                this.hovered(false);
            }
            showed() {
                return this.focused() || this.hovered();
            }
        }
        $$.$mol_pop_over = $mol_pop_over;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//over.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_pop_over_demo extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_pop_over_demo_title');
        }
        sub() {
            return [
                this.Menu()
            ];
        }
        file_title() {
            return this.$.$mol_locale.text('$mol_pop_over_demo_file_title');
        }
        open_title() {
            return this.$.$mol_locale.text('$mol_pop_over_demo_open_title');
        }
        Open() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.open_title();
            return obj;
        }
        export_title() {
            return this.$.$mol_locale.text('$mol_pop_over_demo_export_title');
        }
        Export() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.export_title();
            return obj;
        }
        save_title() {
            return this.$.$mol_locale.text('$mol_pop_over_demo_save_title');
        }
        Save() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.save_title();
            return obj;
        }
        File_menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Open(),
                this.Export(),
                this.Save()
            ];
            return obj;
        }
        File() {
            const obj = new this.$.$mol_pop_over();
            obj.align = () => "bottom_right";
            obj.Anchor = () => this.file_title();
            obj.bubble_content = () => [
                this.File_menu()
            ];
            return obj;
        }
        help_title() {
            return this.$.$mol_locale.text('$mol_pop_over_demo_help_title');
        }
        updates_title() {
            return this.$.$mol_locale.text('$mol_pop_over_demo_updates_title');
        }
        Updates() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.updates_title();
            return obj;
        }
        about_title() {
            return this.$.$mol_locale.text('$mol_pop_over_demo_about_title');
        }
        About() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.about_title();
            return obj;
        }
        Help_menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Updates(),
                this.About()
            ];
            return obj;
        }
        Help() {
            const obj = new this.$.$mol_pop_over();
            obj.align = () => "bottom_right";
            obj.Anchor = () => this.help_title();
            obj.bubble_content = () => [
                this.Help_menu()
            ];
            return obj;
        }
        Menu() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.File(),
                this.Help()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Open", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Export", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Save", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "File_menu", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "File", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Updates", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "About", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Help_menu", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Help", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop_over_demo.prototype, "Menu", null);
    $.$mol_pop_over_demo = $mol_pop_over_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/pop/over/demo/over.view.css", "[mol_pop_over_demo_file_menu] ,\n[mol_pop_over_demo_help_menu] {\n\talign-items: stretch;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n");
})($ || ($ = {}));
//over.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_portion_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_portion_demo_title');
        }
        sub() {
            return [
                this.Empty(),
                this.Partial(),
                this.Full()
            ];
        }
        fist() {
            return 0;
        }
        Empty() {
            const obj = new this.$.$mol_portion();
            obj.portion = () => this.fist();
            return obj;
        }
        second() {
            return 0.5;
        }
        Partial() {
            const obj = new this.$.$mol_portion();
            obj.portion = () => this.second();
            return obj;
        }
        third() {
            return 1;
        }
        Full() {
            const obj = new this.$.$mol_portion();
            obj.portion = () => this.third();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_portion_demo.prototype, "Empty", null);
    __decorate([
        $.$mol_mem
    ], $mol_portion_demo.prototype, "Partial", null);
    __decorate([
        $.$mol_mem
    ], $mol_portion_demo.prototype, "Full", null);
    $.$mol_portion_demo = $mol_portion_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_row_demo_form extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_row_demo_form_title');
        }
        sub() {
            return [
                this.Row()
            ];
        }
        name_hint() {
            return this.$.$mol_locale.text('$mol_row_demo_form_name_hint');
        }
        name(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        suggest1() {
            return this.$.$mol_locale.text('$mol_row_demo_form_suggest1');
        }
        suggest2() {
            return this.$.$mol_locale.text('$mol_row_demo_form_suggest2');
        }
        Name() {
            const obj = new this.$.$mol_search();
            obj.hint = () => this.name_hint();
            obj.query = (val) => this.name(val);
            obj.suggests = () => [
                this.suggest1(),
                this.suggest2()
            ];
            return obj;
        }
        count_hint() {
            return this.$.$mol_locale.text('$mol_row_demo_form_count_hint');
        }
        count(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Count() {
            const obj = new this.$.$mol_number();
            obj.hint = () => this.count_hint();
            obj.value = (val) => this.count(val);
            return obj;
        }
        progress() {
            return 0.33;
        }
        Progress() {
            const obj = new this.$.$mol_portion();
            obj.portion = () => this.progress();
            return obj;
        }
        publish_label() {
            return this.$.$mol_locale.text('$mol_row_demo_form_publish_label');
        }
        publish(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Publish() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => this.publish_label();
            obj.checked = (val) => this.publish(val);
            return obj;
        }
        drop_title() {
            return this.$.$mol_locale.text('$mol_row_demo_form_drop_title');
        }
        Drop() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.drop_title();
            return obj;
        }
        Row() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Name(),
                this.Count(),
                this.Progress(),
                this.Publish(),
                this.Drop()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_row_demo_form.prototype, "name", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo_form.prototype, "Name", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo_form.prototype, "count", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo_form.prototype, "Count", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo_form.prototype, "Progress", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo_form.prototype, "publish", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo_form.prototype, "Publish", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo_form.prototype, "Drop", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo_form.prototype, "Row", null);
    $.$mol_row_demo_form = $mol_row_demo_form;
})($ || ($ = {}));
//form.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_row_demo_products extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_row_demo_products_title');
        }
        count() {
            return 100;
        }
        Product(id) {
            const obj = new this.$.$mol_card();
            obj.minimal_width = () => 140;
            obj.minimal_height = () => 100;
            obj.title = () => this.product_title(id);
            return obj;
        }
        sub() {
            return [
                this.Products()
            ];
        }
        product_title(id) {
            return "";
        }
        products() {
            return [];
        }
        Products() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.products();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_row_demo_products.prototype, "Product", null);
    __decorate([
        $.$mol_mem
    ], $mol_row_demo_products.prototype, "Products", null);
    $.$mol_row_demo_products = $mol_row_demo_products;
})($ || ($ = {}));
//products.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/row/demo/products/products.view.css", "\n[mol_row_demo_products_products] {\n\tdisplay: grid;\n\tgrid-template-columns: repeat( auto-fit, minmax( 8rem, 1fr ) );\n}\n\n[mol_row_demo_products_product] {\n\tmin-height: 8rem;\n}\n");
})($ || ($ = {}));
//products.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_row_demo_products extends $.$mol_row_demo_products {
            products() {
                return $.$mol_range2(id => this.Product(id), () => this.count());
            }
            product_title(id) {
                return $.$mol_stub_product_name();
            }
        }
        __decorate([
            $.$mol_mem_key
        ], $mol_row_demo_products.prototype, "product_title", null);
        $$.$mol_row_demo_products = $mol_row_demo_products;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//products.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_scroll_demo extends $.$mol_demo_large {
        title() {
            return this.$.$mol_locale.text('$mol_scroll_demo_title');
        }
        sub() {
            return [
                this.Scroll()
            ];
        }
        Filler0() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Filler1() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Filler2() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Filler3() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Filler4() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Filler5() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Filler6() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Filler7() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Filler8() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Filler9() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Content() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Filler0(),
                this.Filler1(),
                this.Filler2(),
                this.Filler3(),
                this.Filler4(),
                this.Filler5(),
                this.Filler6(),
                this.Filler7(),
                this.Filler8(),
                this.Filler9()
            ];
            return obj;
        }
        Scroll() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Content()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Filler0", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Filler1", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Filler2", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Filler3", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Filler4", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Filler5", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Filler6", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Filler7", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Filler8", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Filler9", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Content", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll_demo.prototype, "Scroll", null);
    $.$mol_scroll_demo = $mol_scroll_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_search_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_search_demo_title');
        }
        sub() {
            return [
                this.Search()
            ];
        }
        suggests() {
            return [];
        }
        query() {
            return this.Search().query();
        }
        Search() {
            const obj = new this.$.$mol_search();
            obj.suggests = () => this.suggests();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_search_demo.prototype, "Search", null);
    $.$mol_search_demo = $mol_search_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search_demo extends $.$mol_search_demo {
            suggests() {
                const query = this.query();
                if (query.length < 2)
                    return [];
                this.$.$mol_wait_timeout(500);
                return $.$mol_stub_strings(query, 30);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_search_demo.prototype, "suggests", null);
        $$.$mol_search_demo = $mol_search_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_section extends $.$mol_list {
        rows() {
            return [
                this.Head(),
                this.Content()
            ];
        }
        head() {
            return [
                this.title()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.head();
            return obj;
        }
        Content() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_section.prototype, "Head", null);
    $.$mol_section = $mol_section;
})($ || ($ = {}));
//section.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/section/section.view.css", "[mol_section_head] {\n\tpadding: var(--mol_gap_text);\n\tfont-weight: bolder;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: flex-end;\n\tflex-wrap: wrap;\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//section.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_section_demo extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_section_demo_title');
        }
        sub() {
            return [
                this.Section()
            ];
        }
        Section_content() {
            const obj = new this.$.$mol_filler();
            return obj;
        }
        Section() {
            const obj = new this.$.$mol_section();
            obj.head = () => [
                "Section header"
            ];
            obj.Content = () => this.Section_content();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_section_demo.prototype, "Section_content", null);
    __decorate([
        $.$mol_mem
    ], $mol_section_demo.prototype, "Section", null);
    $.$mol_section_demo = $mol_section_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_vertical extends $.$mol_icon {
        path() {
            return "M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z";
        }
    }
    $.$mol_icon_dots_vertical = $mol_icon_dots_vertical;
})($ || ($ = {}));
//vertical.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_select extends $.$mol_pick {
        dictionary(val) {
            if (val !== undefined)
                return val;
            return {};
        }
        options() {
            return [];
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Option_row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.event_select(id, event);
            obj.sub = () => this.option_content(id);
            return obj;
        }
        No_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.no_options_message()
            ];
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Nav()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mol_select_hint');
        }
        bubble_content() {
            return [
                this.Filter(),
                this.Menu()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.filter_pattern(val);
            obj.hint = () => this.$.$mol_locale.text('$mol_select_Filter_hint');
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trigger_icon() {
            const obj = new this.$.$mol_icon_dots_vertical();
            return obj;
        }
        event_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        option_label(id) {
            return "";
        }
        filter_pattern(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Option_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_label(id);
            obj.needle = () => this.filter_pattern();
            return obj;
        }
        option_content(id) {
            return [
                this.Option_label(id)
            ];
        }
        no_options_message() {
            return this.$.$mol_locale.text('$mol_select_no_options_message');
        }
        nav_components() {
            return [];
        }
        option_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        nav_cycle(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.option_focused(component);
            obj.cycle = (val) => this.nav_cycle(val);
            return obj;
        }
        menu_content() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_content();
            return obj;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "dictionary", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $.$mol_mem
    ], $mol_select.prototype, "submit", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//select.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//text.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tz-index: 2;\n\topacity: 1 !important;\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -.75rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//select.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($.$mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return value == null ? id : value;
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.focused(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    ...!this.value() ? [this.Trigger_icon()] : [],
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $.$mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//select.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_select_demo_colors extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_select_demo_colors_title');
        }
        sub() {
            return [
                this.Color()
            ];
        }
        color(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        colors() {
            return {};
        }
        color_name(id) {
            return "";
        }
        option_color(id) {
            return "";
        }
        Color_preview(id) {
            const obj = new this.$.$mol_select_colors_color_preview();
            obj.color = () => this.option_color(id);
            return obj;
        }
        Color_name(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.color_name(id);
            obj.needle = () => this.color_filter();
            return obj;
        }
        Color_option(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Color_preview(id),
                this.Color_name(id)
            ];
            obj.minimal_height = () => 40;
            return obj;
        }
        option_content(id) {
            return [
                this.Color_option(id)
            ];
        }
        color_filter() {
            return this.Color().filter_pattern();
        }
        Color() {
            const obj = new this.$.$mol_select();
            obj.value = (val) => this.color(val);
            obj.dictionary = () => this.colors();
            obj.option_label = (id) => this.color_name(id);
            obj.option_content = (id) => this.option_content(id);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_colors.prototype, "color", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select_demo_colors.prototype, "Color_preview", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select_demo_colors.prototype, "Color_name", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select_demo_colors.prototype, "Color_option", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_colors.prototype, "Color", null);
    $.$mol_select_demo_colors = $mol_select_demo_colors;
    class $mol_select_colors_color_preview extends $.$mol_view {
        style() {
            return {
                ...super.style(),
                background: this.color()
            };
        }
        color() {
            return "";
        }
    }
    $.$mol_select_colors_color_preview = $mol_select_colors_color_preview;
})($ || ($ = {}));
//colors.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_colors = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
    };
})($ || ($ = {}));
//colors.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/select/demo/colors/colors.view.css", "[mol_select_demo_colors_color_option] {\n\tflex-wrap: nowrap;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n[mol_select_demo_colors_color_option] {\n\tpadding: .5rem;\n}\n\n[mol_select_demo_colors_color_option] > * {\n\tmargin: 0 .25rem;\n}\n\n[mol_select_demo_colors_color_preview] {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\ttext-align: start;\n\tpadding: .5rem;\n}\n");
})($ || ($ = {}));
//colors.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select_demo_colors extends $.$mol_select_demo_colors {
            color_name(id) {
                return id || this.colors()[id];
            }
            option_color(id) {
                return this.colors()[id];
            }
            colors() {
                return { '': 'transparent', ...$.$mol_colors };
            }
        }
        $$.$mol_select_demo_colors = $mol_select_demo_colors;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//colors.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_select_demo_month extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_select_demo_month_title');
        }
        sub() {
            return [
                this.Month()
            ];
        }
        month(val) {
            if (val !== undefined)
                return val;
            return "jan";
        }
        months() {
            return {
                jan: "January",
                feb: "February",
                mar: "March",
                apr: "April",
                may: "May",
                jun: "June",
                jul: "July",
                aug: "August",
                sep: "September",
                oct: "October",
                nov: "November",
                dec: "December"
            };
        }
        Month() {
            const obj = new this.$.$mol_select();
            obj.no_options_message = () => "Not found";
            obj.value = (val) => this.month(val);
            obj.dictionary = () => this.months();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_month.prototype, "month", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_month.prototype, "Month", null);
    $.$mol_select_demo_month = $mol_select_demo_month;
})($ || ($ = {}));
//month.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_select_demo_priority extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_select_demo_priority_title');
        }
        sub() {
            return [
                this.Priority()
            ];
        }
        priority(val) {
            if (val !== undefined)
                return val;
            return "Lowest";
        }
        Priority() {
            const obj = new this.$.$mol_select();
            obj.Filter = () => null;
            obj.value = (val) => this.priority(val);
            obj.options = () => [
                "Highest ",
                "High",
                "Medium",
                "Low",
                "Lowest"
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_priority.prototype, "priority", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_demo_priority.prototype, "Priority", null);
    $.$mol_select_demo_priority = $mol_select_demo_priority;
})($ || ($ = {}));
//priority.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_select_list extends $.$mol_view {
        value(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        dictionary() {
            return {};
        }
        Badge(index) {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.badge_title(index);
            obj.click = (event) => this.remove(index, event);
            obj.hint = () => this.badge_hint();
            obj.enabled = () => this.drop_enabled();
            return obj;
        }
        Pick() {
            const obj = new this.$.$mol_select();
            obj.options = () => this.options_pickable();
            obj.value = (val) => this.pick(val);
            obj.option_label = (key) => this.option_title(key);
            obj.trigger_enabled = () => this.pick_enabled();
            obj.hint = () => this.pick_hint();
            obj.Trigger_icon = () => this.Pick_icon();
            return obj;
        }
        badge_title(index) {
            return "badge";
        }
        remove(index, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        badge_hint() {
            return this.$.$mol_locale.text('$mol_select_list_badge_hint');
        }
        enabled() {
            return true;
        }
        drop_enabled() {
            return this.enabled();
        }
        options() {
            return [];
        }
        options_pickable() {
            return this.options();
        }
        pick(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        option_title(key) {
            return "";
        }
        pick_enabled() {
            return this.enabled();
        }
        pick_hint() {
            return this.$.$mol_locale.text('$mol_select_list_pick_hint');
        }
        Pick_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select_list.prototype, "value", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select_list.prototype, "Badge", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_list.prototype, "Pick", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_select_list.prototype, "remove", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_list.prototype, "pick", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_list.prototype, "Pick_icon", null);
    $.$mol_select_list = $mol_select_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_select_list, {
            flex: {
                wrap: 'wrap',
                shrink: 1,
                grow: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select_list extends $.$mol_select_list {
            value(val) {
                return super.value(val);
            }
            pick(key) {
                if (!key)
                    return '';
                this.value([...this.value(), key]);
                $.$mol_fiber_defer(() => {
                    if (!this.pick_enabled())
                        return;
                    this.Pick().Trigger().focused(true);
                    this.Pick().open();
                });
                return '';
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_pickable() {
                if (!this.enabled())
                    return [];
                const exists = new Set(this.value());
                return this.options().filter(key => !exists.has(key));
            }
            option_title(key) {
                const value = this.dictionary()[key];
                return value == null ? key : value;
            }
            badge_title(index) {
                return this.option_title(this.value()[index]);
            }
            pick_enabled() {
                return this.options_pickable().length > 0;
            }
            sub() {
                return [
                    ...this.value().map((_, index) => this.Badge(index)),
                    this.Pick(),
                ];
            }
            title() {
                return this.value().map(key => this.option_title(key)).join(' + ');
            }
            remove(index) {
                const value = this.value();
                this.value([
                    ...value.slice(0, index),
                    ...value.slice(index + 1),
                ]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_select_list.prototype, "options", null);
        __decorate([
            $.$mol_mem
        ], $mol_select_list.prototype, "options_pickable", null);
        __decorate([
            $.$mol_mem
        ], $mol_select_list.prototype, "pick_enabled", null);
        __decorate([
            $.$mol_mem
        ], $mol_select_list.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_select_list.prototype, "title", null);
        $$.$mol_select_list = $mol_select_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_select_list_demo extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_select_list_demo_title');
        }
        rows() {
            return [
                this.Friends(),
                this.Friends_disabled()
            ];
        }
        friends(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        suggestions() {
            return {
                jocker: "Jocker",
                harley: "Harley Quinn",
                penguin: "Penguin",
                riddler: "Riddler",
                bane: "Bane",
                freeze: "Mister Freeze",
                clay: "Clayface",
                mask: "Black Mask"
            };
        }
        Friends() {
            const obj = new this.$.$mol_select_list();
            obj.value = (val) => this.friends(val);
            obj.dictionary = () => this.suggestions();
            return obj;
        }
        Friends_disabled() {
            const obj = new this.$.$mol_select_list();
            obj.value = (val) => this.friends(val);
            obj.dictionary = () => this.suggestions();
            obj.enabled = () => false;
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_select_list_demo.prototype, "friends", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_list_demo.prototype, "Friends", null);
    __decorate([
        $.$mol_mem
    ], $mol_select_list_demo.prototype, "Friends_disabled", null);
    $.$mol_select_list_demo = $mol_select_list_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_settings extends $.$mol_icon {
        path() {
            return "M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z";
        }
    }
    $.$mol_icon_settings = $mol_icon_settings;
})($ || ($ = {}));
//settings.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_menu extends $.$mol_icon {
        path() {
            return "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z";
        }
    }
    $.$mol_icon_menu = $mol_icon_menu;
})($ || ($ = {}));
//menu.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speck_demo extends $.$mol_demo_small {
        sub() {
            return [
                this.Link(),
                this.String(),
                this.Button(),
                this.Message()
            ];
        }
        Link_speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => "β";
            return obj;
        }
        Link_icon() {
            const obj = new this.$.$mol_icon_settings();
            return obj;
        }
        Link() {
            const obj = new this.$.$mol_link();
            obj.sub = () => [
                this.Link_speck(),
                this.Link_icon()
            ];
            return obj;
        }
        string_speck() {
            return this.$.$mol_locale.text('$mol_speck_demo_string_speck');
        }
        String_speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.string_speck();
            return obj;
        }
        String_field() {
            const obj = new this.$.$mol_string();
            return obj;
        }
        String() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.String_speck(),
                this.String_field()
            ];
            return obj;
        }
        notification_count() {
            return 8;
        }
        Button_speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.notification_count();
            return obj;
        }
        Button_icon() {
            const obj = new this.$.$mol_icon_menu();
            return obj;
        }
        Button() {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Button_speck(),
                this.Button_icon()
            ];
            return obj;
        }
        Message_speck() {
            const obj = new this.$.$mol_speck();
            return obj;
        }
        message_text() {
            return this.$.$mol_locale.text('$mol_speck_demo_message_text');
        }
        Message() {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.Message_speck(),
                this.message_text()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Link_speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Link_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Link", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "String_speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "String_field", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "String", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Button_speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Button_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Button", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Message_speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_speck_demo.prototype, "Message", null);
    $.$mol_speck_demo = $mol_speck_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        run;
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static all = [];
        static timer = null;
        static scheduleNative = (typeof requestAnimationFrame == 'function')
            ? handler => requestAnimationFrame(handler)
            : handler => setTimeout(handler, 16);
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speech extends $.$mol_plugin {
        static speaker() {
            return $.$mol_fiber_sync(() => new Promise(done => {
                const API = $.$mol_dom_context.speechSynthesis;
                if (API.getVoices().length)
                    return done(API);
                const on_voices = (event) => {
                    if (!API.getVoices().length)
                        return;
                    API.removeEventListener('voiceschanged', on_voices);
                    done(API);
                };
                API.addEventListener('voiceschanged', on_voices);
            }))();
        }
        static voices() {
            const lang = this.$.$mol_locale.lang();
            return this.speaker().getVoices().filter(voice => voice.lang.split('-')[0] === lang);
        }
        static say(text) {
            const speaker = this.speaker();
            speaker.cancel();
            speaker.resume();
            const rate = 1;
            const voice = this.voices()[this.voices().length - 1];
            const pitch = 1;
            var utter = new SpeechSynthesisUtterance(text);
            utter.voice = voice;
            utter.rate = rate;
            utter.pitch = pitch;
            speaker.speak(utter);
            return null;
        }
        static speaking(next = true) {
            if (next)
                this.speaker().resume();
            else
                this.speaker().pause();
            return next;
        }
        static hearer() {
            const API = window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition'];
            const api = new API;
            api.interimResults = true;
            api.maxAlternatives = 1;
            api.continuous = true;
            api.lang = $.$mol_locale.lang();
            api.onnomatch = $.$mol_fiber_root((event) => {
                this.event_result(null);
                return null;
            });
            api.onresult = $.$mol_fiber_root((event) => {
                this.event_result(event);
                return null;
            });
            api.onerror = $.$mol_fiber_root((event) => {
                console.error(new Error(event.error || event));
                this.event_result(null);
                return null;
            });
            api.onend = (event) => {
                if (this.hearing())
                    api.start();
            };
            return api;
        }
        static hearing(next) {
            if (next === undefined)
                return false;
            if (next) {
                this.hearer().start();
            }
            else {
                this.hearer().stop();
            }
            return next;
        }
        static event_result(event) {
            return event || null;
        }
        static recognitions() {
            if (!this.hearing())
                return [];
            const result = this.event_result();
            if (!result)
                return [];
            const results = this.event_result()?.results ?? [];
            return [].slice.call(results);
        }
        static commands() {
            return this.recognitions().map(result => result[0].transcript.toLowerCase().trim().replace(/[,\.]/g, ''));
        }
        static text() {
            return this.recognitions().map(result => result[0].transcript).join('');
        }
        commands_skip(next = 0) {
            $mol_speech.hearing();
            return next;
        }
        render() {
            const matchers = this.matchers();
            const commands = $mol_speech.commands();
            for (let i = this.commands_skip(); i < commands.length; ++i) {
                for (let matcher of matchers) {
                    const found = commands[i].match(matcher);
                    if (!found)
                        continue;
                    new $.$mol_defer(() => {
                        if (this.event_catch(found.slice(1))) {
                            this.commands_skip(i + 1);
                        }
                    });
                    return null;
                }
            }
            return null;
        }
        event_catch(found) {
            console.log(found);
            return false;
        }
        patterns() {
            return [];
        }
        matchers() {
            return this.patterns().map(pattern => {
                return new RegExp(this.prefix() + pattern + this.suffix(), 'i');
            });
        }
        prefix() {
            return '';
        }
        suffix() {
            return '[,\\s]+(?:please|would you kindly|пожалуйста|пожалуй 100|будь любезен|будь любезна|будь добра?)\.?$';
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_speech.prototype, "commands_skip", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech.prototype, "render", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech.prototype, "matchers", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "speaker", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "voices", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_speech, "say", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "speaking", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "hearer", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "hearing", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "event_result", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "recognitions", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "commands", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "text", null);
    $.$mol_speech = $mol_speech;
})($ || ($ = {}));
//speech.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speech_demo extends $.$mol_demo_small {
        sub() {
            return [
                this.Toggle(),
                this.Message(),
                this.Speak()
            ];
        }
        Toggle_icon() {
            const obj = new this.$.$mol_icon_microphone();
            return obj;
        }
        hearing(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Toggle() {
            const obj = new this.$.$mol_check_icon();
            obj.Icon = () => this.Toggle_icon();
            obj.checked = (val) => this.hearing(val);
            return obj;
        }
        message() {
            return "";
        }
        Message() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.message()
            ];
            return obj;
        }
        speak(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Speak() {
            const obj = new this.$.$mol_button_major();
            obj.click = (val) => this.speak(val);
            obj.sub = () => [
                "Speak"
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_speech_demo.prototype, "Toggle_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech_demo.prototype, "hearing", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech_demo.prototype, "Toggle", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech_demo.prototype, "Message", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech_demo.prototype, "speak", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech_demo.prototype, "Speak", null);
    $.$mol_speech_demo = $mol_speech_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_speech_demo extends $.$mol_speech_demo {
            hearing(next) {
                return $.$mol_speech.hearing(next);
            }
            message() {
                let text = $.$mol_speech.text()
                    .replace(/ё/g, 'е')
                    .replace(/^.*? сотри все (пожалуйста|приз|please)\s*/, '')
                    .replace(/\s*точка/g, '.')
                    .replace(/\s*запятая/g, ',')
                    .replace(/\s*восклицательный знак/g, '!')
                    .replace(/\s*вопросительный знак/g, '?')
                    .replace(/\s*точка с запятой/g, ';')
                    .replace(/\s*двоеточие/g, ':')
                    .replace(/\s*тире/g, ' -')
                    .replace(/\s*новая строка/g, ' \n');
                while (true) {
                    let text2 = text
                        .replace(/\s+?\S+ сотри слово (пожалуйста|плиз|please)/i, '')
                        .replace(/^(.*?) сотри (\d+) (слово|слова|слов) (пожалуйста|плиз|please)/i, (str, text, count) => text.replace(new RegExp(`(\\s\\S+){${count}}$`), ''));
                    if (text === text2)
                        break;
                    text = text2;
                }
                return text
                    .replace(/цитата (.*?) конец цитаты/g, ' "$1"')
                    .replace(/(?:^|[.!?]\s)\S/g, str => str.toUpperCase());
            }
            speak() {
                $.$mol_speech.say(this.message());
            }
        }
        $$.$mol_speech_demo = $mol_speech_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_string_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_string_demo_title');
        }
        sub() {
            return [
                this.Simple(),
                this.Hint(),
                this.Filled(),
                this.Disabled()
            ];
        }
        name(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Simple() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.name(val);
            return obj;
        }
        Hint() {
            const obj = new this.$.$mol_string();
            obj.hint = () => "Batman";
            obj.value = (val) => this.name(val);
            return obj;
        }
        name2(val) {
            if (val !== undefined)
                return val;
            return "Jocker";
        }
        Filled() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.name2(val);
            return obj;
        }
        Disabled() {
            const obj = new this.$.$mol_string();
            obj.disabled = () => true;
            obj.value = (val) => this.name2(val);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "name", null);
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "Simple", null);
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "Hint", null);
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "name2", null);
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "Filled", null);
    __decorate([
        $.$mol_mem
    ], $mol_string_demo.prototype, "Disabled", null);
    $.$mol_string_demo = $mol_string_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/string/demo/demo.view.css", "[mol_string_demo]>* {\n\tmargin: .5rem\n}\n");
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_string_button extends $.$mol_string {
    }
    $.$mol_string_button = $mol_string_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_switch_demo extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_switch_demo_title');
        }
        rows() {
            return [
                this.Enabled(),
                this.Disabled()
            ];
        }
        color(val) {
            if (val !== undefined)
                return val;
            return "red";
        }
        option_red() {
            return this.$.$mol_locale.text('$mol_switch_demo_option_red');
        }
        option_green() {
            return this.$.$mol_locale.text('$mol_switch_demo_option_green');
        }
        option_blue() {
            return this.$.$mol_locale.text('$mol_switch_demo_option_blue');
        }
        Enabled() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.color(val);
            obj.options = () => ({
                red: this.option_red(),
                green: this.option_green(),
                blue: this.option_blue()
            });
            return obj;
        }
        Disabled() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.color(val);
            obj.enabled = () => false;
            obj.options = () => ({
                red: this.option_red(),
                green: this.option_green(),
                blue: this.option_blue()
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_switch_demo.prototype, "color", null);
    __decorate([
        $.$mol_mem
    ], $mol_switch_demo.prototype, "Enabled", null);
    __decorate([
        $.$mol_mem
    ], $mol_switch_demo.prototype, "Disabled", null);
    $.$mol_switch_demo = $mol_switch_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $.$mol_dimmer {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_token_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_code_token = $mol_text_code_token;
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name() {
            return "a";
        }
        type() {
            return "code-link";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.haystack(),
                target: "_blank"
            };
        }
        haystack() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//token.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $.$mol_style_func;
        $.$mol_style_define($.$mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 50, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(60, 70, 50, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//token.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $.$mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        Numb() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.numb()
            ];
            return obj;
        }
        Token(id) {
            const obj = new this.$.$mol_text_code_token();
            obj.type = () => this.token_type(id);
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        Token_link(id) {
            const obj = new this.$.$mol_text_code_token_link();
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        numb() {
            return 0;
        }
        token_type(id) {
            return "";
        }
        token_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gm');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $.$mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//syntax2.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $.$mol_syntax2({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $.$mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax2_md_code = new $.$mol_syntax2({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:|#|\?|\/)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*\b|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:(?!\/\/))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#%&\*_\+\\\/\|'";:\.,\^]+/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_text_code_row, {
            display: 'block',
            Numb: {
                textAlign: 'right',
                color: $.$mol_theme.shade,
                width: rem(3),
                padding: {
                    right: rem(1.5),
                },
                margin: {
                    left: rem(-3),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $.$mol_list {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_sidebar_showed: this.sidebar_showed()
            };
        }
        text() {
            return "";
        }
        text_lines() {
            return [];
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        sidebar_showed() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//code.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_text_code, {
            padding: $.$mol_gap.text,
            whiteSpace: 'pre-wrap',
            font: {
                family: 'monospace',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        margin: {
                            left: rem(3),
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            text_lines() {
                return this.text().split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $.$mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_demo extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_text_code_demo_title');
        }
        sub() {
            return [
                this.Text()
            ];
        }
        source() {
            return "";
        }
        Text() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.source();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_code_demo.prototype, "Text", null);
    $.$mol_text_code_demo = $mol_text_code_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_demo extends $.$mol_text_code_demo {
            source() {
                return this.$.$mol_fetch.text('web.js');
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text_code_demo.prototype, "source", null);
        $$.$mol_text_code_demo = $mol_text_code_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [];
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.text = () => this.quote_text(id);
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_text_row();
            obj.sub = () => this.block_content(id);
            obj.type = () => this.block_type(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            return obj;
        }
        String(id) {
            const obj = new this.$.$mol_text_string();
            obj.needle = () => this.highlight();
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_text_link();
            obj.target = () => this.link_target(id);
            return obj;
        }
        Image(id) {
            const obj = new this.$.$mol_text_image();
            return obj;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.level = () => this.header_level(id);
            obj.content = () => this.header_content(id);
            return obj;
        }
        Code(id) {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.code_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        Table(id) {
            const obj = new this.$.$mol_grid();
            obj.head_cells = () => this.table_head_cells(id);
            obj.rows = () => this.table_rows(id);
            return obj;
        }
        Table_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.table_cells(id);
            return obj;
        }
        Table_cell(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        Table_cell_head(id) {
            const obj = new this.$.$mol_float();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        quote_text(id) {
            return "";
        }
        block_content(id) {
            return [];
        }
        block_type(id) {
            return "";
        }
        highlight() {
            return "";
        }
        link_target(id) {
            return "_blank";
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [];
        }
        code_text(id) {
            return "";
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        table_cells(id) {
            return [];
        }
        table_cell_content(id) {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "String", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Code", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
    class $mol_text_row extends $.$mol_paragraph {
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
    class $mol_text_header extends $.$mol_paragraph {
        dom_name() {
            return "h";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_header_level: this.level()
            };
        }
        sub() {
            return this.content();
        }
        level(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $.$mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        sub() {
            return this.content();
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
    class $mol_text_string extends $.$mol_dimmer {
        dom_name() {
            return "span";
        }
        haystack(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_string.prototype, "haystack", null);
    $.$mol_text_string = $mol_text_string;
    class $mol_text_link extends $.$mol_link_iconed {
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        uri() {
            return this.link();
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    $.$mol_text_link = $mol_text_link;
    class $mol_text_image extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return {
                ...super.attr(),
                allowfullscreen: true,
                mol_text_type: this.type(),
                data: this.link()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        title(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tmax-width: 60rem;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_row] {\n\tmargin: var(--mol_gap_text);\n\toverflow: auto;\n\tmax-width: 100%;\n\tdisplay: block;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n}\n\n[mol_text_quote] {\n\tbox-shadow: inset 1px 0 0px 0px var(--mol_theme_line);\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\tpadding: var(--mol_gap_block);\n\ttext-shadow: 0 0;\n}\n\n[mol_text_header_level=\"1\"] {\n\tfont-size: 1.5em;\n}\n\n[mol_text_header_level=\"2\"] {\n\tfont-size: 1.3em;\n}\n\n[mol_text_header_level=\"3\"] {\n\tfont-size: 1.1em;\n}\n\n[mol_text_header_level=\"4\"] {\n\tfont-size: 1.1em;\n\tfont-style: italic;\n}\n\n[mol_text_header_level=\"5\"] {\n\tfont-size: 1.1em;\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n[mol_text_type=\"list-item\"] {\n\tdisplay: list-item;\n}\n\n[mol_text_type=\"list-item\"]:before {\n\tcontent: '•';\n\tmargin-right: 1ch;\n}\n\n[mol_text_table] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\toverflow: auto;\n\tmargin: .5rem;\n\tflex-grow: 0;\n}\n\n[mol_text_type=\"code-indent\"] ,\n[mol_text_type=\"code\"] {\n\tfont-family: var(--mol_skin_font_monospace);\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_text_type=\"text-link\"] {\n\tcolor: var(--mol_theme_control);\n\ttext-decoration: none;\n\tpadding: 0 .25rem 0 0;\n}\n\n[mol_text_link]:hover ,\n[mol_text_link]:focus {\n\toutline: none;\n}\n\n[mol_text_image] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\tobject-fit: scale-down;\n}\n\n[mol_text_type=\"strong\"] {\n\tcolor: var(--mol_theme_focus);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\ttext-decoration: line-through;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"code-keyword\"] {\n\tcolor: hsl(0, 70%, 60%);\n}\n\n[mol_text_type=\"code-field\"] {\n\tcolor: hsl(300, 70%, 60%);\n}\n\n[mol_text_type=\"code-tag\"] {\n\tcolor: hsl(330, 70%, 60%);\n}\n\n[mol_text_type=\"code-global\"] {\n\tcolor: hsl(210, 80%, 40%);\n}\n\n[mol_text_type=\"code-decorator\"] {\n\tcolor: hsl(180, 40%, 60%);\n}\n\n[mol_text_type=\"code-punctuation\"] {\n\tcolor: hsl( 0, 0%, 50% );\n}\n\n[mol_text_type=\"code-string\"] {\n\tcolor: hsl(90, 40%, 40%);\n}\n\n[mol_text_type=\"code-number\"] {\n\tcolor: hsl(60, 70%, 30%);\n}\n\n[mol_text_type=\"code-call\"] {\n\tcolor: hsl(270, 60%, 60%);\n}\n\n[mol_text_type=\"code-link\"] {\n\tcolor: hsl(240, 60%, 60%);\n}\n\n[mol_text_type=\"code-comment-inline\"] ,\n[mol_text_type=\"code-comment-block\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-docs\"] {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//text.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                        case 'code': return this.Code(index);
                        case 'code-indent': return this.Code(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            code_text(index) {
                const token = this.tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^\t/gm, '')).replace(/[\n\r]*$/, '');
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_line.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    switch (name) {
                        case 'text-link': {
                            if (/^(\w+script+:)+/.test(chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, chunks[0]));
                                return spans.push(span);
                            }
                            else {
                                const span = this.Link(id);
                                span.type(name);
                                span.link(this.uri_resolve(chunks[1]));
                                span.content(this.text2spans(id, ' ' + chunks[0]));
                                return spans.push(span);
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(chunks[1]);
                            span.type(name);
                            span.link(this.uri_resolve(chunks[1]));
                            span.title(chunks[0]);
                            return spans.push(span);
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, chunks[0]));
                            return spans.push(span);
                        }
                    }
                    if (name) {
                        const span = this.Span(id);
                        span.type(name);
                        span.content([].concat.apply([], chunks.map((text, index) => this.text2spans(`${id}/${index}`, text))));
                        spans.push(span);
                    }
                    else {
                        const span = this.String(id);
                        span.haystack(found);
                        spans.push(span);
                    }
                });
                return spans;
            }
            code2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    const span = this.Span(id);
                    span.type(name);
                    spans.push(span);
                    switch (name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([found[0], ...this.code2spans(`${id}/${index}`, found.slice(1, found.length - 1)), found[found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([found]);
                            return span;
                        }
                    }
                });
                return spans;
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cell_content", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "text2spans", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "code2spans", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "block_content", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_demo extends $.$mol_view {
        title() {
            return this.$.$mol_locale.text('$mol_text_demo_title');
        }
        sub() {
            return [
                this.Text()
            ];
        }
        Text() {
            const obj = new this.$.$mol_text();
            obj.text = () => "# [Benchmarks](https://github.com/hyoo-ru/bench.hyoo.ru/tree/master)\n## Benchmark 1\n### Benchmark 1.1\n#### Benchmark 1.1.1\n##### Benchmark 1.1.1.1\n\n* [Frameworks comparison](https://github.com/hyoo-ru/bench.hyoo.ru/tree/master/list) - Frameworks comparison ([online](http://bench.hyoo.ru/#becnh=list#sort=fill#))\n* [ToDoMVC benchmark](https://github.com/eigenmethod/todomvc/tree/master/benchmark) ([online](http://bench.hyoo.ru/#bench=http:%2F%2Feigenmethod.github.io%2Ftodomvc%2Fbenchmark%2F#sample=angular2%7Eangularjs%7Eknockoutjs%7Emol%7Epolymer%7Ereact-alt%7Evanillajs%7Evue#sort=fill#))\n* [WebPageTest - Loading progress of ToDOMVC applications on some frameworks](https://www.webpagetest.org/video/compare.php?tests=161217_V8_6RFK%2C161217_G9_6RFM%2C161217_YZ_6RFN%2C161217_DM_6RFP%2C161217_2B_6RFQ%2C161217_RJ_6RFR%2C161217_2R_6RFS%2C161217_H5_6RFT%2C161217_CW_6RFV&thumbSize=150&ival=100&end=all)\n* [Line charts comparison](https://github.com/hyoo-ru/bench.hyoo.ru/tree/master/chart/rope) ([online](http://bench.hyoo.ru/#bench=chart%2Frope%2F/sort=fill/sample=hcharts~mol))\n* [Bar charts comparison](https://github.com/hyoo-ru/bench.hyoo.ru/tree/master/chart/bar) ([online](http://bench.hyoo.ru/#bench=chart%2Fbar%2F/sort=fill/sample=hcharts~mol))\n\n# Quick start\n\n**Create MAM project**\n\nEasy way is checkout [this preconfigured ~~PMS~~MAM repository](http://github.com/eigenmethod/mam/) and start dev server:\n\n```sh\ngit clone https://github.com/eigenmethod/mam.git ./mam && cd mam\nnpm start\n```\n\n|           | **Column 1** | **Column 2** | **Column 3**\n|-----------|--------------|--------------|---------\n| **Row 1** | Cell 1x1     | Cell 2x1     | Cell 3x1\n| **Row 2** | Cell 1x2     | Cell 2x2     | Cell 3x2\n| **Row 3** | Cell 1x3     | Cell 2x3     | Cell 3x3\n| **Row 4** | Cell 1x4     | Cell 2x4     | Cell 3x4\n| **Row 5** | Cell 1x5     | Cell 2x5     | Cell 3x5\n| **Row 6** | Cell 1x6     | Cell 2x6     | Cell 3x6\n| **Row 7** | Cell 1x7     | Cell 2x7     | Cell 3x7\n| **Row 8** | Cell 1x8     | Cell 2x8     | Cell 3x8\n| **Row 9** | Cell 1x9     | Cell 2x9     | Cell 3x9\n\nBuild status: [![Build Status](https://travis-ci.org/eigenmethod/mol.svg?branch=master)](https://travis-ci.org/eigenmethod/mol)\n";
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_demo.prototype, "Text", null);
    $.$mol_text_demo = $mol_text_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_textarea extends $.$mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_textarea_clickable: this.clickable(),
                mol_textarea_sidebar_showed: this.sidebar_showed()
            };
        }
        event() {
            return {
                keydown: (event) => this.press(event),
                pointermove: (event) => this.hover(event)
            };
        }
        sub() {
            return [
                this.Edit(),
                this.View()
            ];
        }
        clickable(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        sidebar_showed() {
            return false;
        }
        press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        hover(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return "";
        }
        enabled() {
            return true;
        }
        length_max() {
            return Infinity;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        Edit() {
            const obj = new this.$.$mol_string();
            obj.dom_name = () => "textarea";
            obj.value = (val) => this.value(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            obj.length_max = () => this.length_max();
            obj.selection = (val) => this.selection(val);
            return obj;
        }
        row_numb(index) {
            return 0;
        }
        highlight() {
            return "";
        }
        View() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.value();
            obj.render_visible_only = () => false;
            obj.row_numb = (index) => this.row_numb(index);
            obj.sidebar_showed = () => this.sidebar_showed();
            obj.highlight = () => this.highlight();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "clickable", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "hover", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "selection", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
})($ || ($ = {}));
//textarea.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\tz-index: 0;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\tz-index: 1;\n\twhite-space: inherit;\n}\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n}\n\n[mol_textarea_edit] {\n\tfont-family: monospace;\n\tz-index: -1 !important;\n\tpadding: var(--mol_gap_text);\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcolor: transparent;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\twhite-space: inherit;\n\ttab-size: 4;\n\toverflow-anchor: none;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 3rem;\n\twidth: calc( 100% - 3rem );\n}\n");
})($ || ($ = {}));
//textarea.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                document.execCommand('insertText', false, '\t');
            }
            indent_dec() {
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.tab:
                        this.indent_inc();
                        break;
                    case event.shiftKey && $.$mol_keyboard_code.tab:
                        this.indent_dec();
                        break;
                    default: return;
                }
                event.preventDefault();
            }
            row_numb(index) {
                return index;
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//textarea.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_textarea_demo extends $.$mol_list {
        title() {
            return this.$.$mol_locale.text('$mol_textarea_demo_title');
        }
        rows() {
            return [
                this.Empty_descr(),
                this.Filled_descr(),
                this.Disabled()
            ];
        }
        empty_descr(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Empty_descr() {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => "source code";
            obj.value = (val) => this.empty_descr(val);
            return obj;
        }
        filled_descr(val) {
            if (val !== undefined)
                return val;
            return "function hello( name = 'World' ) {\n\treturn `Hello, ${ name }!`\n}";
        }
        Filled_descr() {
            const obj = new this.$.$mol_textarea();
            obj.value = (val) => this.filled_descr(val);
            return obj;
        }
        Disabled() {
            const obj = new this.$.$mol_textarea();
            obj.enabled = () => false;
            obj.value = (val) => this.filled_descr(val);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_textarea_demo.prototype, "empty_descr", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea_demo.prototype, "Empty_descr", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea_demo.prototype, "filled_descr", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea_demo.prototype, "Filled_descr", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea_demo.prototype, "Disabled", null);
    $.$mol_textarea_demo = $mol_textarea_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/textarea/demo/demo.view.css", "[mol_textarea_demo] {\n\talign-self: stretch;\n}\n\n[mol_textarea_demo_inputs] {\n\tpadding: var(--mol_gap_block);\n}\n");
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_toolbar extends $.$mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_toolbar_expanded: this.expanded()
            };
        }
        sub() {
            return [
                this.Bar(),
                this.Expand()
            ];
        }
        items() {
            return [];
        }
        Bar() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.items();
            return obj;
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Expand() {
            const obj = new this.$.$mol_check_expand();
            obj.checked = (val) => this.expanded(val);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_toolbar.prototype, "Bar", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar.prototype, "expanded", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar.prototype, "Expand", null);
    $.$mol_toolbar = $mol_toolbar;
})($ || ($ = {}));
//toolbar.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, vh, per } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_toolbar, {
            flex: {
                grow: 1,
                wrap: 'wrap',
                direction: 'row-reverse',
            },
            display: 'flex',
            position: 'relative',
            overflow: 'hidden',
            '@': {
                mol_toolbar_expanded: {
                    true: {
                        Bar: {
                            maxHeight: vh(100),
                        },
                        Expand: {
                            Icon: {
                                transform: 'rotate(90deg) scaleX(-1)',
                            },
                        },
                    },
                },
            },
            Bar: {
                display: 'flex',
                flex: {
                    grow: 1,
                    wrap: 'wrap',
                },
                margin: {
                    right: rem(2.5),
                },
                minWidth: 0,
                maxHeight: rem(2.5),
                background: {
                    color: $.$mol_theme.back,
                },
                boxShadow: `0 0 0 1px ${$.$mol_theme.back}`,
            },
            Expand: {
                height: rem(2.5),
                margin: {
                    top: rem(-2.5),
                    left: rem(-2.5),
                },
                Icon: {
                    transform: 'rotate(90deg)',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//toolbar.view.tree.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_toolbar extends $.$mol_toolbar {
        }
        $$.$mol_toolbar = $mol_toolbar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//toolbar.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_content_copy extends $.$mol_icon {
        path() {
            return "M19,21H8V7H19M19,5H8C6.9,5 6,5.9 6,7V21C6,22.1 6.9,23 8,23H19C20.1,23 21,22.1 21,21V7C21,5.9 20.1,5 19,5M16,1H4C2.9,1 2,1.9 2,3V17H4V3H16V1Z";
        }
    }
    $.$mol_icon_content_copy = $mol_icon_content_copy;
})($ || ($ = {}));
//copy.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_content_cut extends $.$mol_icon {
        path() {
            return "M19,3L13,9L15,11L22,4V3M12,12.5C11.72,12.5 11.5,12.28 11.5,12C11.5,11.72 11.72,11.5 12,11.5C12.28,11.5 12.5,11.72 12.5,12C12.5,12.28 12.28,12.5 12,12.5M6,20C4.9,20 4,19.1 4,18C4,16.89 4.9,16 6,16C7.1,16 8,16.9 8,18C8,19.11 7.1,20 6,20M6,8C4.9,8 4,7.1 4,6C4,4.89 4.9,4 6,4C7.1,4 8,4.9 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6C10,3.79 8.21,2 6,2C3.79,2 2,3.79 2,6C2,8.21 3.79,10 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14C3.79,14 2,15.79 2,18C2,20.21 3.79,22 6,22C8.21,22 10,20.21 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z";
        }
    }
    $.$mol_icon_content_cut = $mol_icon_content_cut;
})($ || ($ = {}));
//cut.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_content_paste extends $.$mol_icon {
        path() {
            return "M19,20H5V4H7V7H17V4H19M12,2C12.55,2 13,2.45 13,3C13,3.55 12.55,4 12,4C11.45,4 11,3.55 11,3C11,2.45 11.45,2 12,2M19,2H14.82C14.4,0.84 13.3,0 12,0C10.7,0 9.6,0.84 9.18,2H5C3.9,2 3,2.9 3,4V20C3,21.1 3.9,22 5,22H19C20.1,22 21,21.1 21,20V4C21,2.9 20.1,2 19,2Z";
        }
    }
    $.$mol_icon_content_paste = $mol_icon_content_paste;
})($ || ($ = {}));
//paste.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_delete extends $.$mol_icon {
        path() {
            return "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19C6,20.1 6.9,21 8,21H16C17.1,21 18,20.1 18,19V7H6V19Z";
        }
    }
    $.$mol_icon_delete = $mol_icon_delete;
})($ || ($ = {}));
//delete.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_toolbar_demo extends $.$mol_demo_small {
        title() {
            return this.$.$mol_locale.text('$mol_toolbar_demo_title');
        }
        sub() {
            return [
                this.Toolbar()
            ];
        }
        search_hint() {
            return this.$.$mol_locale.text('$mol_toolbar_demo_search_hint');
        }
        Search() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.search_hint();
            return obj;
        }
        replace_hint() {
            return this.$.$mol_locale.text('$mol_toolbar_demo_replace_hint');
        }
        Replace() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.replace_hint();
            return obj;
        }
        approve_label() {
            return this.$.$mol_locale.text('$mol_toolbar_demo_approve_label');
        }
        Approve() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.approve_label();
            return obj;
        }
        decline_label() {
            return this.$.$mol_locale.text('$mol_toolbar_demo_decline_label');
        }
        Decline() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.decline_label();
            return obj;
        }
        Copy_icon() {
            const obj = new this.$.$mol_icon_content_copy();
            return obj;
        }
        Copy() {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Copy_icon()
            ];
            return obj;
        }
        Cut_icon() {
            const obj = new this.$.$mol_icon_content_cut();
            return obj;
        }
        Cut() {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Cut_icon()
            ];
            return obj;
        }
        Paste_icon() {
            const obj = new this.$.$mol_icon_content_paste();
            return obj;
        }
        Paste() {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Paste_icon()
            ];
            return obj;
        }
        Delete_icon() {
            const obj = new this.$.$mol_icon_delete();
            return obj;
        }
        Delete() {
            const obj = new this.$.$mol_button_minor();
            obj.sub = () => [
                this.Delete_icon()
            ];
            return obj;
        }
        Toolbar() {
            const obj = new this.$.$mol_toolbar();
            obj.items = () => [
                this.Search(),
                this.Replace(),
                this.Approve(),
                this.Decline(),
                this.Copy(),
                this.Cut(),
                this.Paste(),
                this.Delete()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Search", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Replace", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Approve", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Decline", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Copy_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Copy", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Cut_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Cut", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Paste_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Paste", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Delete_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Delete", null);
    __decorate([
        $.$mol_mem
    ], $mol_toolbar_demo.prototype, "Toolbar", null);
    $.$mol_toolbar_demo = $mol_toolbar_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $.$mol_style_define($.$mol_toolbar_demo, {
            alignSelf: 'stretch'
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.tree.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_video_player extends $.$mol_view {
        dom_name() {
            return "video";
        }
        playing(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        volume(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        time(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        duration() {
            return 0;
        }
        attr() {
            return {
                src: this.uri(),
                controls: this.controls()
            };
        }
        event() {
            return {
                volumechange: (event) => this.revolume(event),
                timeupdate: (event) => this.retime(event),
                durationchange: (event) => this.redurate(event),
                play: (event) => this.play(event),
                pause: (event) => this.pause(event)
            };
        }
        uri() {
            return "";
        }
        controls() {
            return true;
        }
        revolume(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        retime(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        redurate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        play(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        pause(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_video_player.prototype, "playing", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player.prototype, "volume", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player.prototype, "time", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player.prototype, "revolume", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player.prototype, "retime", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player.prototype, "redurate", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player.prototype, "play", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player.prototype, "pause", null);
    $.$mol_video_player = $mol_video_player;
})($ || ($ = {}));
//player.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/video/player/player.view.css", "[mol_video_player] {\n\tflex: 1 1 auto;\n}\n");
})($ || ($ = {}));
//player.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_video_player extends $.$mol_video_player {
            dom_node() {
                return super.dom_node();
            }
            volume(next) {
                this.revolume();
                if (next === undefined) {
                    return this.dom_node().volume;
                }
                else {
                    return this.dom_node().volume = Math.max(0, Math.min(next, 1));
                }
            }
            time(next) {
                this.retime();
                if (next === undefined) {
                    return this.dom_node().currentTime;
                }
                else {
                    return this.dom_node().currentTime = Math.max(0, Math.min(next, this.duration()));
                }
            }
            duration() {
                this.redurate();
                return this.dom_node().duration;
            }
            playing(next) {
                if (next === undefined) {
                    return false;
                }
                else {
                    if (next) {
                        this.dom_node().play();
                    }
                    else {
                        this.dom_node().pause();
                    }
                    return next;
                }
            }
            play() {
                this.playing(true);
            }
            pause() {
                this.playing(false);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_video_player.prototype, "volume", null);
        __decorate([
            $.$mol_mem
        ], $mol_video_player.prototype, "time", null);
        __decorate([
            $.$mol_mem
        ], $mol_video_player.prototype, "duration", null);
        __decorate([
            $.$mol_mem
        ], $mol_video_player.prototype, "playing", null);
        $$.$mol_video_player = $mol_video_player;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//player.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_upload extends $.$mol_icon {
        path() {
            return "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z";
        }
    }
    $.$mol_icon_upload = $mol_icon_upload;
})($ || ($ = {}));
//upload.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_open extends $.$mol_button_minor {
        sub() {
            return [
                this.Icon(),
                this.Native()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_upload();
            return obj;
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        files(next) {
            return this.Native().files(next);
        }
        Native() {
            const obj = new this.$.$mol_button_open_native();
            obj.accept = () => this.accept();
            obj.multiple = () => this.multiple();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button_open.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_button_open.prototype, "Native", null);
    $.$mol_button_open = $mol_button_open;
    class $mol_button_open_native extends $.$mol_view {
        dom_name() {
            return "input";
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        attr() {
            return {
                type: "file",
                accept: this.accept(),
                multiple: this.multiple()
            };
        }
        event() {
            return {
                change: (next) => this.picked(next)
            };
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        picked(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button_open_native.prototype, "files", null);
    __decorate([
        $.$mol_mem
    ], $mol_button_open_native.prototype, "picked", null);
    $.$mol_button_open_native = $mol_button_open_native;
})($ || ($ = {}));
//open.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/open/open.view.css", "[mol_button_open_native] {\n\tposition: absolute;\n\tleft: 0;\n\ttop: -100%;\n\twidth: 100%;\n\theight: 200%;\n\tcursor: pointer;\n\topacity: 0;\n}\n");
})($ || ($ = {}));
//open.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_open_native extends $.$mol_button_open_native {
            dom_node() {
                return super.dom_node();
            }
            picked() {
                this.files(this.dom_node().files);
            }
        }
        $$.$mol_button_open_native = $mol_button_open_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//open.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_play extends $.$mol_icon {
        path() {
            return "M8,5.14V19.14L19,12.14L8,5.14Z";
        }
    }
    $.$mol_icon_play = $mol_icon_play;
})($ || ($ = {}));
//play.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_video_player_demo extends $.$mol_demo_large {
        title() {
            return "Reactive video player";
        }
        sub() {
            return [
                this.Controls(),
                this.Player()
            ];
        }
        files() {
            return this.Open().files();
        }
        Open() {
            const obj = new this.$.$mol_button_open();
            return obj;
        }
        Playing_icon() {
            const obj = new this.$.$mol_icon_play();
            return obj;
        }
        Playing() {
            const obj = new this.$.$mol_check_icon();
            obj.checked = (val) => this.playing(val);
            obj.Icon = () => this.Playing_icon();
            return obj;
        }
        Duration() {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.duration()
            ];
            return obj;
        }
        Duration_labeler() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Duration";
            obj.content = () => [
                this.Duration()
            ];
            return obj;
        }
        Time() {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.time(val);
            obj.precision_view = () => 0.001;
            return obj;
        }
        Time_labeler() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Time";
            obj.content = () => [
                this.Time()
            ];
            return obj;
        }
        Volume() {
            const obj = new this.$.$mol_number();
            obj.value = (val) => this.volume(val);
            obj.precision = () => 0.001;
            return obj;
        }
        Volume_labeler() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Volume";
            obj.content = () => [
                this.Volume()
            ];
            return obj;
        }
        Controls() {
            const obj = new this.$.$mol_row();
            obj.sub = () => [
                this.Open(),
                this.Playing(),
                this.Duration_labeler(),
                this.Time_labeler(),
                this.Volume_labeler()
            ];
            return obj;
        }
        uri() {
            return "";
        }
        playing(val) {
            return this.Player().playing(val);
        }
        volume(val) {
            return this.Player().volume(val);
        }
        time(val) {
            return this.Player().time(val);
        }
        duration() {
            return this.Player().duration();
        }
        Player() {
            const obj = new this.$.$mol_video_player();
            obj.uri = () => this.uri();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_video_player_demo.prototype, "Open", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player_demo.prototype, "Playing_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player_demo.prototype, "Playing", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player_demo.prototype, "Duration", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player_demo.prototype, "Duration_labeler", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player_demo.prototype, "Time", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player_demo.prototype, "Time_labeler", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player_demo.prototype, "Volume", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player_demo.prototype, "Volume_labeler", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player_demo.prototype, "Controls", null);
    __decorate([
        $.$mol_mem
    ], $mol_video_player_demo.prototype, "Player", null);
    $.$mol_video_player_demo = $mol_video_player_demo;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_video_player_demo extends $.$mol_video_player_demo {
            uri() {
                const file = this.files()[0];
                if (!file)
                    return null;
                return URL.createObjectURL(file);
            }
        }
        $$.$mol_video_player_demo = $mol_video_player_demo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_status extends $.$mol_view {
        status() {
            return null;
        }
        minimal_height() {
            return 24;
        }
        minimal_width() {
            return 0;
        }
        sub() {
            return [
                this.message()
            ];
        }
        message() {
            return "";
        }
    }
    $.$mol_status = $mol_status;
})($ || ($ = {}));
//status.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/status/status.view.css", "[mol_status] {\n\ttext-align: center;\n\tpadding: .5rem;\n\tborder-radius: var(--mol_gap_round);\n\tdisplay: block;\n}\n\n[mol_status]:not([mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_skin_warn);\n\tcolor: var(--mol_skin_warn_text);\n}\n\n[mol_status]:not([mol_view_error=\"Promise\"]):empty {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//status.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_status extends $.$mol_status {
            message() {
                try {
                    return this.status() ?? null;
                }
                catch (error) {
                    if (error instanceof Promise)
                        $.$mol_fail_hidden(error);
                    return error.message;
                }
            }
        }
        $$.$mol_status = $mol_status;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//status.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $.$mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//auto.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//auto.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $.$mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//circle.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_source extends $.$mol_link {
        hint() {
            return this.$.$mol_locale.text('$mol_link_source_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_source.prototype, "Icon", null);
    $.$mol_link_source = $mol_link_source;
})($ || ($ = {}));
//source.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_brightness_6 extends $.$mol_icon {
        path() {
            return "M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
        }
    }
    $.$mol_icon_brightness_6 = $mol_icon_brightness_6;
})($ || ($ = {}));
//6.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_lights_toggle extends $.$mol_check_icon {
        Icon() {
            return this.Lights_icon();
        }
        hint() {
            return this.$.$mol_locale.text('$mol_lights_toggle_hint');
        }
        checked(val) {
            return this.lights(val);
        }
        Lights_icon() {
            const obj = new this.$.$mol_icon_brightness_6();
            return obj;
        }
        lights(val) {
            if (val !== undefined)
                return val;
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_lights_toggle.prototype, "Lights_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_lights_toggle.prototype, "lights", null);
    $.$mol_lights_toggle = $mol_lights_toggle;
})($ || ($ = {}));
//toggle.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//toggle.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_code_braces extends $.$mol_icon {
        path() {
            return "M8,3C6.9,3 6,3.9 6,5V9C6,10.1 5.1,11 4,11H3V13H4C5.1,13 6,13.9 6,15V19C6,20.1 6.9,21 8,21H10V19H8V14C8,12.9 7.1,12 6,12C7.1,12 8,11.1 8,10V5H10V3M16,3C17.1,3 18,3.9 18,5V9C18,10.1 18.9,11 20,11H21V13H20C18.9,13 18,13.9 18,15V19C18,20.1 17.1,21 16,21H14V19H16V14C16,12.9 16.9,12 18,12C16.9,12 16,11.1 16,10V5H14V3H16Z";
        }
    }
    $.$mol_icon_code_braces = $mol_icon_code_braces;
})($ || ($ = {}));
//braces.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_app_demo extends $.$mol_book2 {
        editor_title() {
            return this.detail_title();
        }
        source_prefix() {
            return "https://github.com/hyoo-ru/mam_mol/tree/master/";
        }
        pages() {
            return this.blocks();
        }
        plugins() {
            return [
                this.Theme()
            ];
        }
        Menu() {
            const obj = new this.$.$mol_app_demo_menu();
            obj.names = () => this.names_demo_all();
            return obj;
        }
        chat_pages(id) {
            return this.Detail(id).chat_pages();
        }
        Detail(id) {
            const obj = new this.$.$mol_app_demo_detail();
            obj.chat_seed = () => this.chat_seed(id);
            obj.title = () => this.detail_title();
            obj.source_link = () => this.source_link();
            obj.edit_uri = () => this.edit_uri();
            obj.Demo = () => this.Demo();
            return obj;
        }
        Welcome() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Welcome_text()
            ];
            return obj;
        }
        Detail_empty_message() {
            const obj = new this.$.$mol_status();
            obj.sub = () => [
                this.detail_empty_prefix(),
                this.selected(),
                this.detail_empty_postfix()
            ];
            return obj;
        }
        detail_title() {
            return "$mol";
        }
        blocks() {
            return [];
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        names_demo_all() {
            return [];
        }
        chat_seed(id) {
            return "";
        }
        source_link() {
            return "";
        }
        edit_uri() {
            return "";
        }
        Demo() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        welcome_text() {
            return "";
        }
        Welcome_text() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.welcome_text();
            return obj;
        }
        detail_empty_prefix() {
            return this.$.$mol_locale.text('$mol_app_demo_detail_empty_prefix');
        }
        selected() {
            return "";
        }
        detail_empty_postfix() {
            return this.$.$mol_locale.text('$mol_app_demo_detail_empty_postfix');
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Menu", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_demo.prototype, "Detail", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Welcome", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Detail_empty_message", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Theme", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Demo", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo.prototype, "Welcome_text", null);
    $.$mol_app_demo = $mol_app_demo;
    class $mol_app_demo_menu extends $.$mol_page {
        names() {
            return [];
        }
        title() {
            return this.$.$mol_locale.text('$mol_app_demo_menu_title');
        }
        tools() {
            return [
                this.Sources(),
                this.Lights()
            ];
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.List()
            ];
            return obj;
        }
        Option(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.option_arg(id);
            obj.sub = () => [
                this.Option_title(id)
            ];
            return obj;
        }
        sources_uri() {
            return "https://github.com/hyoo-ru/mam_mol/tree/master/";
        }
        Sources() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => this.sources_uri();
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        filter(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Filter() {
            const obj = new this.$.$mol_search();
            obj.query = (val) => this.filter(val);
            return obj;
        }
        options() {
            return [];
        }
        Options() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.options();
            return obj;
        }
        List() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Filter(),
                this.Options()
            ];
            return obj;
        }
        option_arg(id) {
            return {};
        }
        option_title(id) {
            return "";
        }
        Option_title(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_title(id);
            obj.needle = () => this.filter();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "Body", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_demo_menu.prototype, "Option", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "Sources", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "Lights", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "Filter", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "Options", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_menu.prototype, "List", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_app_demo_menu.prototype, "Option_title", null);
    $.$mol_app_demo_menu = $mol_app_demo_menu;
    class $mol_app_demo_detail extends $.$mol_page {
        tools() {
            return [
                this.Chat(),
                this.Source_link(),
                this.Edit(),
                this.Close()
            ];
        }
        body() {
            return [
                this.Demo()
            ];
        }
        chat_seed() {
            return "";
        }
        chat_pages() {
            return this.Chat().pages();
        }
        Chat() {
            const obj = new this.$.$mol_chat();
            obj.seed = () => this.chat_seed();
            return obj;
        }
        source_link() {
            return "";
        }
        source_hint() {
            return this.$.$mol_locale.text('$mol_app_demo_detail_source_hint');
        }
        Source_icon() {
            const obj = new this.$.$mol_icon_code_braces();
            return obj;
        }
        Source_link() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.source_link();
            obj.target = () => "_blank";
            obj.hint = () => this.source_hint();
            obj.sub = () => [
                this.Source_icon()
            ];
            return obj;
        }
        edit_hint() {
            return this.$.$mol_locale.text('$mol_app_demo_detail_edit_hint');
        }
        Edit_speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => "β";
            return obj;
        }
        Edit_icon() {
            const obj = new this.$.$mol_icon_settings();
            return obj;
        }
        edit_uri() {
            return "";
        }
        Edit() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.edit_hint();
            obj.sub = () => [
                this.Edit_speck(),
                this.Edit_icon()
            ];
            obj.uri = () => this.edit_uri();
            return obj;
        }
        close_hint() {
            return this.$.$mol_locale.text('$mol_app_demo_detail_close_hint');
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        close_arg() {
            return {
                demo: null
            };
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.close_hint();
            obj.sub = () => [
                this.Close_icon()
            ];
            obj.arg = () => this.close_arg();
            return obj;
        }
        Demo() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Chat", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Source_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Source_link", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Edit_speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Edit_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Edit", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_detail.prototype, "Demo", null);
    $.$mol_app_demo_detail = $mol_app_demo_detail;
})($ || ($ = {}));
//demo.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_app_demo_main extends $.$mol_page {
        minimal_width() {
            return 400;
        }
        title() {
            return "$mol libs for web ui";
        }
        tools() {
            return [
                this.Lights(),
                this.Project()
            ];
        }
        body() {
            return [
                this.Description()
            ];
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        project_uri() {
            return "https://github.com/eigenmethod/mol/tree/master/";
        }
        Project() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => this.project_uri();
            return obj;
        }
        description() {
            return "";
        }
        Description() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.description();
            obj.uri_base = () => this.project_uri();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_main.prototype, "Lights", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_main.prototype, "Project", null);
    __decorate([
        $.$mol_mem
    ], $mol_app_demo_main.prototype, "Description", null);
    $.$mol_app_demo_main = $mol_app_demo_main;
})($ || ($ = {}));
//main.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_app_demo_main extends $.$mol_app_demo_main {
            description() {
                return $.$mol_file.relative('mol/readme.md').text();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_app_demo_main.prototype, "description", null);
        $$.$mol_app_demo_main = $mol_app_demo_main;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//main.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_dict(config) {
        const store = new $.$mol_object2;
        let keys;
        const get_keys = () => {
            if (!keys) {
                keys = new $.$mol_atom2();
                keys[Symbol.toStringTag] = `Object.keys(${store})`;
                keys.put(0);
            }
            return keys;
        };
        const get_cache = (key) => {
            let cache = store[key];
            if (!cache) {
                cache = new $.$mol_atom2;
                cache.abort = () => {
                    if (config.abort) {
                        if (!config.abort(cache.value, key, proxy))
                            return false;
                    }
                    else {
                        cache.forget();
                    }
                    store[key] = undefined;
                    return true;
                };
                if (config.get)
                    cache.calculate = config.get.bind(null, key, proxy);
                cache[Symbol.toStringTag] = `${store}[${JSON.stringify(key)}]`;
                store[key] = cache;
                if (keys)
                    keys.obsolete_slaves();
            }
            return cache;
        };
        const proxy = new Proxy(store, {
            get(store, key, proxy) {
                if (typeof key === 'symbol')
                    return store[key];
                if (key in $.$mol_object2.prototype)
                    return store[key];
                return get_cache(key).get();
            },
            set(store, key, value, proxy) {
                if (typeof key === 'symbol') {
                    store[key] = value;
                }
                else if (key in $.$mol_object2.prototype) {
                    store[key] = value;
                }
                else {
                    if (config.set)
                        value = config.set.call(null, value, key, proxy);
                    get_cache(key).push(value);
                }
                return true;
            },
            ownKeys(store) {
                get_keys().get();
                return Object.keys(store);
            },
        });
        return proxy;
    }
    $.$mol_atom2_dict = $mol_atom2_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/app/demo/demo.view.css", "[mol_app_demo_menu] {\n\tflex: 0 0 18rem;\n}\n\n[mol_app_demo_menu_list] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_block);\n}\n\n[mol_app_demo_menu_tools] {\n\tpadding: 0;\n}\n\n[mol_app_demo_main],\n[mol_app_demo_detail],\n[mol_app_empty_message] {\n\tflex: 1000 0 40rem;\n}\n\n[mol_app_demo_menu_filter] {\n\talign-self: stretch;\n\tflex: 0 0 auto;\n}\n\n[mol_app_demo_nav_table] {\n\twidth: 100%;\n\tbox-sizing: border-box;\n}\n\n[mol_app_demo_nav_row] {\n\tdisplay: flex;\n}\n\n[mol_app_demo_nav_option] {\n\tpadding: 0 .5rem 0 0;\n\tdisplay: flex;\n\tflex: 1;\n\talign-items: center;\n\tbox-shadow: none;\n}\n\n[mol_app_demo_nav_expand] {\n\talign-self: stretch;\n\talign-items: center;\n\tpadding-right: .25rem;\n}\n\n[mol_app_demo_nav_content] {\n\tflex-grow: 1;\n}\n\n[mol_app_demo_menu_themes] {\n\tflex: none;\n}\n\n[mol_app_demo_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-content: flex-start;\n\talign-items: flex-start;\n}\n\n[mol_app_demo_screen] {\n\tmax-height: 45%;\n}\n\n[mol_app_demo_detail_body] {\n\tpadding: var(--mol_gap_block);\n\tdisplay: flex;\n\talign-items: stretch;\n\tjustify-content: flex-start;\n\tflex-direction: column;\n}\n\n[mol_app_demo_detail_list] {\n\tflex: 1 0 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[mol_app_demo_page_close] {\n\tcolor: inherit;\n\talign-items: center;\n\tpadding: 1rem;\n}\n\n[mol_app_demo_welcome] {\n\tflex: 1 1 auto;\n}\n\n[mol_app_demo_option_link] {\n\tpadding: 0;\n}\n\n[mol_app_demo_sample_large] {\n\tbox-sizing: border-box;\n}\n\n[mol_app_demo_detail_empty_message] {\n\tmargin: auto;\n}\n\n[mol_app_demo_chat] {\n\tflex: none;\n}\n");
})($ || ($ = {}));
//demo.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_app_demo extends $.$mol_app_demo {
            detail_title() {
                const selected = this.selected();
                if (selected) {
                    const names = this.names_demo();
                    return `$${selected}`;
                }
                return super.title();
            }
            names_demo_all() {
                var next = [];
                for (var name in this.$) {
                    if (!/^\$.*_demo($|_)/i.test(name))
                        continue;
                    if (/^\$mol_demo/.test(name))
                        continue;
                    if (/^\$mol_app_demo/.test(name))
                        continue;
                    if (typeof this.$[name] !== 'function')
                        continue;
                    next.push(name.substring(1));
                }
                return next.sort();
            }
            selected() {
                return $.$mol_state_arg.value('demo') || '';
            }
            selected_class_name() {
                return '$' + this.selected();
            }
            Widget() {
                return $.$mol_atom2_dict({
                    get: (name) => {
                        const Class = this.$['$' + name];
                        return new Class();
                    }
                });
            }
            names_demo() {
                const selected = this.selected();
                return [selected];
            }
            blocks() {
                let sub = [];
                sub.push(this.Menu());
                const selected = this.selected();
                if (selected) {
                    sub.push(this.Detail(selected));
                    sub.push(...this.chat_pages(selected));
                }
                return sub;
            }
            Demo() {
                return this.Widget()[this.selected()];
            }
            chat_seed(id) {
                return '#!demo=' + id;
            }
            logo_uri() {
                return $.$mol_file.relative('/mol/logo/logo.svg').path();
            }
            source_link() {
                const demo = $.$mol_state_arg.value('demo');
                if (!demo)
                    return this.source_prefix();
                const pieces = demo.split('_').slice(1);
                const source_link = this.source_prefix() + pieces.join('/');
                return source_link;
            }
            chat_link() {
                return $.$mol_state_arg.make_link({ demo: this.selected() });
            }
            edit_uri() {
                const source = encodeURIComponent(`$${''}my_app $${this.selected()}`);
                const pack = encodeURIComponent(this.$.$mol_state_arg.make_link({}));
                return `https://studio.hyoo.ru/#!pack=${pack}/source=${source}/preview`;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_app_demo.prototype, "names_demo_all", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_demo.prototype, "Widget", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_demo.prototype, "names_demo", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_demo.prototype, "edit_uri", null);
        $$.$mol_app_demo = $mol_app_demo;
        class $mol_app_demo_menu extends $.$mol_app_demo_menu {
            names_filtered() {
                const filter = this.filter().toLowerCase();
                const names = this.names().filter(name => (name.toLowerCase().indexOf(filter) != -1));
                return names;
            }
            options() {
                return this.names_filtered().map(id => this.Option(id));
            }
            option_arg(id) {
                return { 'demo': id };
            }
            option_title(id) {
                return '$' + id.replace('_demo_', '/').replace('_demo', '');
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_app_demo_menu.prototype, "names_filtered", null);
        __decorate([
            $.$mol_mem
        ], $mol_app_demo_menu.prototype, "options", null);
        $$.$mol_app_demo_menu = $mol_app_demo_menu;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//demo.view.js.map
;
export default $
//# sourceMappingURL=web.esm.js.map
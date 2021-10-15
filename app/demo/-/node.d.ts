declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    function $mol_offline(uri?: string): void;
}

declare namespace $ {
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    class $mol_object2 {
        static $: typeof $$;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        destructor(): void;
        [Symbol.toPrimitive](hint: string): any;
        toString(): any;
        toJSON(): any;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;

declare namespace $ {
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): $mol_style_unit<"%">;
        static px(value: number): $mol_style_unit<"px">;
        static mm(value: number): $mol_style_unit<"mm">;
        static cm(value: number): $mol_style_unit<"cm">;
        static Q(value: number): $mol_style_unit<"Q">;
        static in(value: number): $mol_style_unit<"in">;
        static pc(value: number): $mol_style_unit<"pc">;
        static pt(value: number): $mol_style_unit<"pt">;
        static cap(value: number): $mol_style_unit<"cap">;
        static ch(value: number): $mol_style_unit<"ch">;
        static em(value: number): $mol_style_unit<"em">;
        static rem(value: number): $mol_style_unit<"rem">;
        static ex(value: number): $mol_style_unit<"ex">;
        static ic(value: number): $mol_style_unit<"ic">;
        static lh(value: number): $mol_style_unit<"lh">;
        static rlh(value: number): $mol_style_unit<"rlh">;
        static vh(value: number): $mol_style_unit<"vh">;
        static vw(value: number): $mol_style_unit<"vw">;
        static vi(value: number): $mol_style_unit<"vi">;
        static vb(value: number): $mol_style_unit<"vb">;
        static vmin(value: number): $mol_style_unit<"vmin">;
        static vmax(value: number): $mol_style_unit<"vmax">;
        static deg(value: number): $mol_style_unit<"deg">;
        static rad(value: number): $mol_style_unit<"rad">;
        static grad(value: number): $mol_style_unit<"grad">;
        static turn(value: number): $mol_style_unit<"turn">;
        static s(value: number): $mol_style_unit<"s">;
        static ms(value: number): $mol_style_unit<"ms">;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'url';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string>(name: Name): $mol_style_func<"var", Name>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | $mol_style_unit<"%">)[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
    }
}

declare namespace $ {
}

declare namespace $ {
    const $mol_theme: {
        back: $mol_style_func<"var", "--mol_theme_back">;
        hover: $mol_style_func<"var", "--mol_theme_hover">;
        current: $mol_style_func<"var", "--mol_theme_current">;
        text: $mol_style_func<"var", "--mol_theme_text">;
        control: $mol_style_func<"var", "--mol_theme_control">;
        shade: $mol_style_func<"var", "--mol_theme_shade">;
        line: $mol_style_func<"var", "--mol_theme_line">;
        focus: $mol_style_func<"var", "--mol_theme_focus">;
        field: $mol_style_func<"var", "--mol_theme_field">;
        image: $mol_style_func<"var", "--mol_theme_image">;
    };
}

declare namespace $ {
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
    }
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(next?: {
            width: number;
            height: number;
        }): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    function $mol_deprecated(message: string): <Method extends (this: Host, ...args: readonly any[]) => any, Host extends { [key in Field]: Method; }, Field extends keyof Host>(host: Host, field: Field, descr: TypedPropertyDescriptor<Method>) => void;
}

declare namespace $ {
    const $mol_tree_convert: unique symbol;
    type $mol_tree_path = Array<string | number | null>;
    type $mol_tree_hack = (input: $mol_tree, context: $mol_tree_context) => readonly $mol_tree[];
    type $mol_tree_context = Record<string, $mol_tree_hack>;
    type $mol_tree_library = Record<string, $mol_tree_context>;
    class $mol_tree extends $mol_object2 {
        readonly type: string;
        readonly data: string;
        readonly sub: readonly $mol_tree[];
        readonly baseUri: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(config?: Partial<$mol_tree>);
        static values(str: string, baseUri?: string): $mol_tree[];
        clone(config?: Partial<$mol_tree>): $mol_tree;
        make(config: Partial<$mol_tree>): $mol_tree;
        make_data(value: string, sub?: readonly $mol_tree[]): $mol_tree;
        make_struct(type: string, sub?: readonly $mol_tree[]): $mol_tree;
        static fromString(str: string, baseUri?: string): $mol_tree;
        static fromJSON(json: any, baseUri?: string): $mol_tree;
        get uri(): string;
        toString(prefix?: string): string;
        toJSON(): any;
        get value(): string;
        insert(value: $mol_tree, ...path: $mol_tree_path): $mol_tree;
        select(...path: $mol_tree_path): $mol_tree;
        filter(path: string[], value?: string): $mol_tree;
        transform(visit: (stack: $mol_tree[], sub: () => $mol_tree[]) => $mol_tree | null, stack?: $mol_tree[]): $mol_tree | null;
        hack(context: $mol_tree_context): $mol_tree;
        error(message: string): Error;
    }
}

declare namespace $ {
    function $mol_log3_node_make(level: keyof Console, output: 'stdout' | 'stderr', type: string, color: keyof typeof $node.colorette): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    const $mol_conform_stack: any[];
    function $mol_conform<Target, Source>(target: Target, source: Source): Target;
    const $mol_conform_handlers: WeakMap<Object, (target: any, source: any) => any>;
    function $mol_conform_handler<Class>(cl: {
        new (...args: any[]): Class;
    }, handler: (target: Class, source: Class) => Class): void;
    function $mol_conform_array<Value, List extends {
        [index: number]: Value;
        length: number;
    }>(target: List, source: List): List;
}

declare namespace $ {
    function $mol_array_trim<Item>(array: Item[]): Item[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    const enum $mol_fiber_status {
        persist = -3,
        actual = -2,
        doubt = -1,
        obsolete = 0
    }
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_fiber<any>;
    function $mol_fiber_func<This, Args extends any[], Result>(calculate: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_method<Host extends object, Value>(obj: Host, name: keyof Host, descr: TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>): PropertyDescriptor;
    function $mol_fiber_async<Args extends any[], Value>(task: (...args: Args) => Value): (...args: Args) => Promise<Value>;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    function $mol_fiber_fence(func: () => any): any;
    function $mol_fiber_unlimit<Result>(task: () => Result): Result;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber<Value = any> extends $mol_wrapper {
        static logs: boolean;
        static wrap<Func extends (...args: any[]) => any>(task: Func): (this: ThisParameterType<Func>, ...args: Parameters<Func>) => any;
        static quant: number;
        static deadline: number;
        static liveline: number;
        static current: $mol_fiber<any> | null;
        static scheduled: $mol_after_frame | null;
        static queue: (() => PromiseLike<any>)[];
        static tick(): Promise<void>;
        static schedule(): Promise<any>;
        cursor: $mol_fiber_status;
        masters: (number | $mol_fiber<any> | undefined)[];
        calculate: () => Value;
        _value: Value;
        get value(): Value;
        set value(next: Value);
        _error: Error | PromiseLike<Value> | null;
        get error(): null | Error | PromiseLike<Value>;
        set error(next: null | Error | PromiseLike<Value>);
        schedule(): void;
        wake(): Value | undefined;
        push(value: Value): Value;
        fail(error: Error): Error;
        wait(promise: PromiseLike<Value>): PromiseLike<Value>;
        complete(): void;
        complete_master(master_index: number): void;
        pull(): void;
        update(): void;
        get(): Value;
        limit(): void;
        get master(): $mol_fiber;
        set master(next: $mol_fiber);
        rescue(master: $mol_fiber, master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        disobey(master_index: number): void;
        obsolete_slaves(): void;
        obsolete(master_index: number): void;
        forget(): void;
        abort(): boolean;
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_atom2_value<Value>(task: () => Value, next?: Value): Value | undefined;
    class $mol_atom2<Value = any> extends $mol_fiber<Value> {
        static logs: boolean;
        static get current(): $mol_atom2<any> | null;
        static cached: boolean;
        static cached_next: any;
        static reap_task: $mol_fiber<any> | null;
        static reap_queue: $mol_atom2<any>[];
        static reap(atom: $mol_atom2): void;
        slaves: (number | $mol_fiber<any> | undefined)[];
        rescue(master: $mol_atom2, cursor: number): void;
        subscribe(promise: Promise<unknown>): Promise<void>;
        get(): Value;
        pull(): void;
        get value(): Value;
        set value(next: Value);
        get error(): null | Error | PromiseLike<Value>;
        set error(next: null | Error | PromiseLike<Value>);
        put(next: Value): Value;
        complete_master(master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        obsolete(master_index?: number): void;
        doubt(master_index?: number): void;
        obsolete_slaves(): void;
        doubt_slaves(): void;
        get fresh(): () => void;
        get alone(): boolean;
        get derived(): boolean;
        destructor(): void;
    }
}

declare namespace $ {
    type $mol_type_param<Func, Index extends number> = Func extends (...params: infer Params) => any ? Params[Index] : Func extends new (...params: infer Params2) => any ? Params2[Index] : never;
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    class $mol_mem_force extends Object {
        constructor();
        $mol_mem_force: boolean;
        static $mol_mem_force: boolean;
        static toString(): string;
    }
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    class $mol_mem_force_update extends $mol_mem_force {
    }
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_atom2_value;
    function $mol_mem_persist(): void;
    function $mol_mem<Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (next?: any) => any>>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<Prop>): {
        value: ((this: Host, next?: $mol_type_param<Prop, 0> | undefined, force?: $mol_mem_force | undefined) => any) & {
            orig: Function;
        };
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
}

declare namespace $ {
    function $mol_key<Value>(value: Value): string | Value;
}

declare namespace $ {
    function $mol_mem_key<Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (id: any, next?: any) => any>>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<Prop>): any;
}

declare namespace $ {
    function $mol_atom2_autorun(calculate: () => any): $mol_atom2<unknown>;
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[]): Element[];
        static focus(event: FocusEvent): void;
        static blur(event: FocusEvent): void;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_fail_catch(error: object): boolean;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value | undefined) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? Field : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): $mol_atom2<unknown>;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        sub_visible(): readonly (string | number | boolean | $mol_view | Node)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): ClientRect | null;
        view_rect_cache(next?: ClientRect | null): ClientRect | null;
        view_rect_watcher(): {
            destructor: () => boolean;
        };
        dom_id(): any;
        dom_node(next?: Element): Element;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): void;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): Promise<void>;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
    class $mol_list extends $mol_view {
        render_visible_only(): boolean;
        render_over(): number;
        sub(): readonly $mol_view[];
        Empty(): $mol_view;
        Gap_before(): $mol_view;
        Gap_after(): $mol_view;
        view_window(): readonly any[];
        rows(): readonly $mol_view[];
        gap_before(): number;
        gap_after(): number;
    }
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
    class $mol_card extends $mol_list {
        attr(): {
            mol_card_status_type: string;
        };
        rows(): readonly $mol_view[];
        status(): string;
        content(): readonly $mol_view_content[];
        Content(): $mol_view;
        status_text(): string;
        Status(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: {
        readonly block: $mol_style_func<"var", "--mol_gap_block">;
        readonly text: $mol_style_func<"var", "--mol_gap_text">;
        readonly round: $mol_style_func<"var", "--mol_gap_round">;
    };
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_card extends $.$mol_card {
        rows(): $mol_view[];
    }
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset';
    type Color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | $mol_style_unit<$mol_style_unit_length> | $mol_style_func<'calc' | 'var'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Span_align = 'none' | 'start' | 'end' | 'center';
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both';
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type ContainRule = 'size' | 'layout' | 'style' | 'paint';
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat';
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        alignContent?: 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | readonly ['first' | 'last', 'baseline'] | readonly ['safe' | 'unsafe', 'start' | 'end' | 'flex-start' | 'flex-end'] | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        background?: 'none' | {
            color?: Color | Common;
            image?: readonly (readonly [$mol_style_func<'url'>])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center';
            size?: (BG_size | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: Color;
            }[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: Color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch';
        scrollbar?: {
            color?: readonly [Color, Color] | 'dark' | 'light' | 'auto' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: {
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: Directions<Color> | Common;
            width?: Directions<Length> | Common;
        };
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number;
        opacity: number;
    }
    export {};
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type Descendant<Name extends keyof $mol_view_all, Config> = $mol_style_guard<Extract<$mol_type_result<$mol_view_all[Name]>, $mol_view>, Config>;
    type Kids<Config> = {
        [view in keyof Config]: view extends keyof $mol_view_all ? Descendant<view, Config[view]> : $mol_type_error<'Unknown View'>;
    };
    type Attrs<View extends $mol_view, Config> = {
        [name in keyof Config]: name extends keyof ReturnType<View['attr']> ? {
            [val in keyof Config[name]]: $mol_style_guard<View, Config[name][val]>;
        } : $mol_type_error<'Unknown attribute'>;
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    export type $mol_style_guard<View extends $mol_view, Config> = $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? unknown : key extends $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '>' ? Kids<Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends keyof $mol_view_all ? Descendant<key, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : $mol_type_error<'Unknown Property or View'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_link extends $mol_view {
        dom_name(): string;
        attr(): {
            href: string;
            title: string;
            target: string;
            download: string;
            mol_link_current: boolean;
        };
        sub(): readonly $mol_view_content[];
        arg(): {};
        event(): {
            click: (event?: any) => any;
        };
        uri(): string;
        hint(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        event_click(event?: any): any;
        click(event?: any): any;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static dict(next?: {
            [key: string]: string | null;
        }): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: any): string;
        static make_link(next: {
            [key: string]: any;
        }): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        uri_native(): URL;
        current(): boolean;
        event_click(event?: Event): void;
        file_name(): string;
        minimal_height(): number;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
    }
}

declare namespace $ {
    class $mol_speck extends $mol_view {
        attr(): {
            mol_theme: string;
        };
        style(): {
            minHeight: string;
        };
        sub(): readonly any[];
        value(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        minimal_height(): number;
        minimal_width(): number;
        click(event?: any): any;
        event_click(event?: any): any;
        event(): {
            click: (event?: any) => any;
            keydown: (event?: any) => any;
        };
        attr(): {
            disabled: boolean;
            role: string;
            tabindex: number;
            title: string;
        };
        sub(): readonly $mol_view_content[];
        Speck(): $mol_speck;
        event_activate(event?: any): any;
        event_key_press(event?: any): any;
        disabled(): boolean;
        tab_index(): number;
        hint(): string;
        hint_or_error(): string;
    }
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        fiber(next?: $mol_fiber<any> | null): $mol_fiber<any> | null;
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_or_error(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
        font_size(): number;
        font_family(): string;
    }
}

declare namespace $ {
    class $mol_after_work extends $mol_after_timeout {
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static now(precision?: number, next?: number): number;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): CSSStyleDeclaration;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        attr(): {
            viewBox: string;
            preserveAspectRatio: string;
        };
        view_box(): string;
        aspect(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        attr(): {
            d: string;
        };
        geometry(): string;
    }
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        minimal_width(): number;
        minimal_height(): number;
        sub(): readonly any[];
        path(): string;
        Path(): $mol_svg_path;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_attach extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_attach extends $mol_card {
        Content(): $mol_view;
        items(val?: any): readonly $mol_view[];
        Add(): $$.$mol_attach_add;
        Item(id: any): $$.$mol_attach_item;
        content(): readonly $mol_view[];
        attach_new(val?: any): any;
        attach_title(): string;
    }
    class $mol_attach_item extends $mol_link {
        url_thumb(val?: any): string;
        uri(val?: any): string;
        style(): {
            backgroundImage: string;
        };
        attr(): {
            download: string;
            href: string;
            title: string;
            target: string;
            mol_link_current: boolean;
        };
        url_load(val?: any): string;
        style_bg(): string;
        title(): string;
    }
    class $mol_attach_add extends $mol_button_minor {
        minimal_height(): number;
        file_new(val?: any): any;
        sub(): readonly any[];
        Icon(): $mol_icon_attach;
        event_capture(val?: any): any;
        event_picked(val?: any): any;
        Input(): $mol_attach_add_input;
    }
    class $mol_attach_add_input extends $mol_view {
        dom_name(): string;
        attr(): {
            type: string;
            accept: string;
            multiple: boolean;
        };
        event_click(val?: any): any;
        event(): {
            change: (val?: any) => any;
        };
        type(): string;
        accept(): string;
        multiple(): boolean;
        event_capture(val?: any): any;
        event_picked(val?: any): any;
    }
}

declare var cordova: any;
declare namespace $ {
    var $mol_cordova: any;
    function $mol_cordova_camera(): any;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_attach extends $.$mol_attach {
        attach_new(next?: File): void;
        content(): ($mol_view | $mol_attach_add)[];
    }
    class $mol_attach_item extends $.$mol_attach_item {
        style_bg(): string;
    }
    class $mol_attach_add extends $.$mol_attach_add {
        file_new(next?: File, force?: $mol_mem_force_fail): File;
        event_capture(next: Event): void;
        event_picked(next: Event): void;
    }
}

declare namespace $ {
    class $mol_row extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_demo_small extends $mol_row {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value, force?: $mol_mem_force): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
    function $mol_charset_decode(value: Uint8Array, code?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array;
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat, force?: $mol_mem_force): $mol_file_stat;
        reset(): void;
        version(): string;
        abstract ensure(next?: boolean): boolean;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean, force?: $mol_mem_force): boolean;
        type(): $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array, force?: $mol_mem_force): Uint8Array;
        text(next?: string, force?: $mol_mem_force): string;
        fail(error: Error): void;
        buffer_cached(buffer: Uint8Array): void;
        text_cached(content: string): void;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
    }
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    class $mol_file_node extends $mol_file {
        static absolute(path: string): $mol_file_node;
        static relative(path: string): $mol_file_node;
        watcher(): {
            destructor(): void;
        };
        stat(next?: $mol_file_stat, force?: $mol_mem_force): $mol_file_stat;
        ensure(next?: boolean): boolean;
        buffer(next?: Uint8Array, force?: $mol_mem_force): Uint8Array;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): any;
        append(next: Uint8Array | string): undefined;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {
    class $mol_attach_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        Item1(): $$.$mol_attach_item;
        Item2(): $$.$mol_attach_item;
        Item3(): $$.$mol_attach_item;
        filled_items(val?: any): readonly any[];
        Filled(): $$.$mol_attach;
    }
}

declare namespace $ {
    class $mol_bar extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    class $mol_hotkey extends $mol_plugin {
        event(): {
            keydown: (event?: any) => any;
        };
        key(): {};
        mod_ctrl(): boolean;
        mod_alt(): boolean;
        mod_shift(): boolean;
        keydown(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): {
            [x: number]: ((event: KeyboardEvent) => void) | undefined;
            readonly backspace?: ((event: KeyboardEvent) => void) | undefined;
            readonly tab?: ((event: KeyboardEvent) => void) | undefined;
            readonly enter?: ((event: KeyboardEvent) => void) | undefined;
            readonly shift?: ((event: KeyboardEvent) => void) | undefined;
            readonly ctrl?: ((event: KeyboardEvent) => void) | undefined;
            readonly alt?: ((event: KeyboardEvent) => void) | undefined;
            readonly pause?: ((event: KeyboardEvent) => void) | undefined;
            readonly capsLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly escape?: ((event: KeyboardEvent) => void) | undefined;
            readonly space?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageUp?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageDown?: ((event: KeyboardEvent) => void) | undefined;
            readonly end?: ((event: KeyboardEvent) => void) | undefined;
            readonly home?: ((event: KeyboardEvent) => void) | undefined;
            readonly left?: ((event: KeyboardEvent) => void) | undefined;
            readonly up?: ((event: KeyboardEvent) => void) | undefined;
            readonly right?: ((event: KeyboardEvent) => void) | undefined;
            readonly down?: ((event: KeyboardEvent) => void) | undefined;
            readonly insert?: ((event: KeyboardEvent) => void) | undefined;
            readonly delete?: ((event: KeyboardEvent) => void) | undefined;
            readonly key0?: ((event: KeyboardEvent) => void) | undefined;
            readonly key1?: ((event: KeyboardEvent) => void) | undefined;
            readonly key2?: ((event: KeyboardEvent) => void) | undefined;
            readonly key3?: ((event: KeyboardEvent) => void) | undefined;
            readonly key4?: ((event: KeyboardEvent) => void) | undefined;
            readonly key5?: ((event: KeyboardEvent) => void) | undefined;
            readonly key6?: ((event: KeyboardEvent) => void) | undefined;
            readonly key7?: ((event: KeyboardEvent) => void) | undefined;
            readonly key8?: ((event: KeyboardEvent) => void) | undefined;
            readonly key9?: ((event: KeyboardEvent) => void) | undefined;
            readonly A?: ((event: KeyboardEvent) => void) | undefined;
            readonly B?: ((event: KeyboardEvent) => void) | undefined;
            readonly C?: ((event: KeyboardEvent) => void) | undefined;
            readonly D?: ((event: KeyboardEvent) => void) | undefined;
            readonly E?: ((event: KeyboardEvent) => void) | undefined;
            readonly F?: ((event: KeyboardEvent) => void) | undefined;
            readonly G?: ((event: KeyboardEvent) => void) | undefined;
            readonly H?: ((event: KeyboardEvent) => void) | undefined;
            readonly I?: ((event: KeyboardEvent) => void) | undefined;
            readonly J?: ((event: KeyboardEvent) => void) | undefined;
            readonly K?: ((event: KeyboardEvent) => void) | undefined;
            readonly L?: ((event: KeyboardEvent) => void) | undefined;
            readonly M?: ((event: KeyboardEvent) => void) | undefined;
            readonly N?: ((event: KeyboardEvent) => void) | undefined;
            readonly O?: ((event: KeyboardEvent) => void) | undefined;
            readonly P?: ((event: KeyboardEvent) => void) | undefined;
            readonly Q?: ((event: KeyboardEvent) => void) | undefined;
            readonly R?: ((event: KeyboardEvent) => void) | undefined;
            readonly S?: ((event: KeyboardEvent) => void) | undefined;
            readonly T?: ((event: KeyboardEvent) => void) | undefined;
            readonly U?: ((event: KeyboardEvent) => void) | undefined;
            readonly V?: ((event: KeyboardEvent) => void) | undefined;
            readonly W?: ((event: KeyboardEvent) => void) | undefined;
            readonly X?: ((event: KeyboardEvent) => void) | undefined;
            readonly Y?: ((event: KeyboardEvent) => void) | undefined;
            readonly Z?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaRight?: ((event: KeyboardEvent) => void) | undefined;
            readonly select?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad0?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad1?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad2?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad3?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad4?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad5?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad6?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad7?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad8?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad9?: ((event: KeyboardEvent) => void) | undefined;
            readonly multiply?: ((event: KeyboardEvent) => void) | undefined;
            readonly add?: ((event: KeyboardEvent) => void) | undefined;
            readonly subtract?: ((event: KeyboardEvent) => void) | undefined;
            readonly decimal?: ((event: KeyboardEvent) => void) | undefined;
            readonly divide?: ((event: KeyboardEvent) => void) | undefined;
            readonly F1?: ((event: KeyboardEvent) => void) | undefined;
            readonly F2?: ((event: KeyboardEvent) => void) | undefined;
            readonly F3?: ((event: KeyboardEvent) => void) | undefined;
            readonly F4?: ((event: KeyboardEvent) => void) | undefined;
            readonly F5?: ((event: KeyboardEvent) => void) | undefined;
            readonly F6?: ((event: KeyboardEvent) => void) | undefined;
            readonly F7?: ((event: KeyboardEvent) => void) | undefined;
            readonly F8?: ((event: KeyboardEvent) => void) | undefined;
            readonly F9?: ((event: KeyboardEvent) => void) | undefined;
            readonly F10?: ((event: KeyboardEvent) => void) | undefined;
            readonly F11?: ((event: KeyboardEvent) => void) | undefined;
            readonly F12?: ((event: KeyboardEvent) => void) | undefined;
            readonly numLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly scrollLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly semicolon?: ((event: KeyboardEvent) => void) | undefined;
            readonly equals?: ((event: KeyboardEvent) => void) | undefined;
            readonly comma?: ((event: KeyboardEvent) => void) | undefined;
            readonly dash?: ((event: KeyboardEvent) => void) | undefined;
            readonly period?: ((event: KeyboardEvent) => void) | undefined;
            readonly forwardSlash?: ((event: KeyboardEvent) => void) | undefined;
            readonly graveAccent?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketOpen?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBack?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBackLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketClose?: ((event: KeyboardEvent) => void) | undefined;
            readonly quoteSingle?: ((event: KeyboardEvent) => void) | undefined;
        };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_string extends $mol_view {
        dom_name(): string;
        enabled(): boolean;
        minimal_height(): number;
        autocomplete(): boolean;
        selection(val?: any): readonly number[];
        auto(): readonly any[];
        field(): {
            disabled: boolean;
            value: string;
            placeholder: string;
            spellcheck: boolean;
            autocomplete: string;
            selectionEnd: number;
            selectionStart: number;
        };
        attr(): {
            maxlength: number;
            type: string;
        };
        event(): {
            input: (event?: any) => any;
            keydown: (event?: any) => any;
        };
        plugins(): readonly any[];
        selection_watcher(): any;
        disabled(): boolean;
        value(val?: any): string;
        value_changed(val?: any): string;
        hint(): string;
        spellcheck(): boolean;
        autocomplete_native(): string;
        selection_end(): number;
        selection_start(): number;
        length_max(): number;
        type(val?: any): string;
        event_change(event?: any): any;
        event_key_press(event?: any): any;
        submit(event?: any): any;
        Submit(): $$.$mol_hotkey;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        attr(): {
            mol_check_checked: boolean;
            "aria-checked": boolean;
            role: string;
            disabled: boolean;
            tabindex: number;
            title: string;
        };
        sub(): readonly $mol_view_content[];
        checked(val?: any): boolean;
        Icon(): any;
        title(): string;
        Title(): $mol_view;
        label(): readonly any[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
    }
}

declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_box extends $mol_check {
        Icon(): $mol_icon_tick;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_bar_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        mail_hint(): string;
        mail(val?: any): string;
        Two_mail(): $$.$mol_string;
        submit_title(): string;
        Two_submit(): $mol_button_minor;
        Two(): $mol_bar;
        Three_mail(): $$.$mol_string;
        confirm_title(): string;
        confirmed(val?: any): boolean;
        Three_confirm(): $mol_check_box;
        Three_submit(): $mol_button_minor;
        Three(): $mol_bar;
    }
}

declare namespace $ {
    class $mol_float extends $mol_view {
        style(): {
            minHeight: string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_expand extends $mol_check {
        minimal_height(): number;
        Icon(): $mol_icon_chevron;
        level(): number;
        style(): {
            paddingLeft: string;
        };
        checked(val?: any): boolean;
        enabled(): boolean;
        level_style(): string;
        expanded(val?: any): boolean;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
    class $mol_paragraph extends $mol_view {
        line_height(): number;
        letter_width(): number;
        width_limit(): number;
        sub(): readonly any[];
    }
}

declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_dimmer extends $mol_paragraph {
        haystack(): string;
        needle(): string;
        sub(): readonly $mol_view_content[];
        Low(id: any): $$.$mol_paragraph;
        High(id: any): $$.$mol_paragraph;
        parts(): readonly $mol_view_content[];
        string(id: any): string;
    }
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<$mol_type_merge_object<Intersection>, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): IterableIterator<$mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | string[];
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
    class $mol_grid extends $mol_view {
        row_height(): number;
        row_ids(): readonly string[][];
        row_id(index: any): any;
        col_ids(): readonly any[];
        records(): {};
        record(id: any): any;
        hierarchy(): any;
        hierarchy_col(): string;
        sub(): readonly any[];
        Head(): $mol_grid_row;
        Row(id: any): $mol_grid_row;
        Cell(id: any): $mol_view;
        cell(id: any): any;
        Cell_text(id: any): $mol_grid_cell;
        Cell_number(id: any): $mol_grid_number;
        Col_head(id: any): $mol_float;
        Cell_branch(id: any): $$.$mol_check_expand;
        Cell_content(id: any): readonly any[];
        rows(): readonly $mol_view[];
        Table(): $mol_grid_table;
        head_cells(): readonly $mol_view[];
        cells(id: any): readonly $mol_view[];
        cell_content(id: any): readonly $mol_view_content[];
        cell_content_text(id: any): readonly $mol_view_content[];
        cell_content_number(id: any): readonly $mol_view_content[];
        col_head_content(id: any): readonly $mol_view_content[];
        cell_level(id: any): number;
        cell_expanded(id: any, val?: any): boolean;
        needle(): string;
        cell_value(id: any): string;
        Cell_dimmer(id: any): $$.$mol_dimmer;
    }
    class $mol_grid_table extends $mol_list {
        dom_name(): string;
    }
    class $mol_grid_row extends $mol_view {
        dom_name(): string;
        sub(): readonly $mol_view[];
        cells(): readonly $mol_view[];
    }
    class $mol_grid_cell extends $mol_view {
        dom_name(): string;
        minimal_height(): number;
    }
    class $mol_grid_number extends $mol_grid_cell {
    }
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        head_cells(): readonly $mol_view[];
        col_head_content(colId: string): readonly string[];
        rows(): readonly $mol_view[];
        cells(row_id: string[]): readonly $mol_view[];
        col_type(col_id: string): "number" | "text" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        cell_content_text(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): readonly string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): readonly string[][];
        row_expanded(row_id: string[], next?: boolean): boolean | null;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_icon_sort extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sort_asc extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_portion_indicator extends $mol_view {
        style(): {
            width: string;
        };
        width_style(): string;
    }
    class $mol_portion extends $mol_view {
        portion(): number;
        sub(): readonly any[];
        indicator_width_style(): string;
        indicator(): $mol_portion_indicator;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_portion extends $.$mol_portion {
        indicator_width_style(): string;
    }
}

declare namespace $ {
    class $mol_bench extends $mol_grid {
        records(): {};
        col_sort(val?: any): string;
        Col_head(id: any): $mol_bench_head;
        cell_content_number(id: any): readonly any[];
        result(): {};
        event_sort_toggle(id: any, val?: any): any;
        col_head_title(id: any): string;
        Col_head_sort(id: any): $mol_icon_sort_asc;
        col_head_content(id: any): readonly any[];
        result_value(id: any): string;
        result_portion(id: any): number;
        Result_portion(id: any): $$.$mol_portion;
    }
    class $mol_bench_head extends $mol_float {
        horizontal(): boolean;
        event(): {
            click: (val?: any) => any;
        };
        attr(): {
            title: string;
        };
        event_click(val?: any): any;
        hint(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_bench extends $.$mol_bench {
        col_sort(next?: string): string;
        row_ids(): string[][];
        result_value(id: {
            row: string[];
            col: string;
        }): any;
        result_number(id: {
            row: string[];
            col: string;
        }): number;
        result_value_max(col: string): number;
        result_portion(id: {
            row: string[];
            col: string;
        }): number;
        col_head_title(col: string): string;
        event_sort_toggle(col: string, next?: Event): void;
        col_type(col: string): "number" | "text" | "branch";
        cell_content_number(id: {
            row: string[];
            col: string;
        }): any[];
        col_head_content(col: string): (string | $mol_icon_sort_asc)[];
    }
}

declare namespace $ {
    class $mol_bench_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        col_sort(val?: any): string;
        result(): {};
        View(): $$.$mol_bench;
    }
}

declare namespace $.$$ {
    class $mol_bench_demo extends $.$mol_bench_demo {
        result(): {
            bubble: {
                algorithm: string;
                min: string;
                mid: string;
                max: string;
            };
            qsort: {
                algorithm: string;
                min: string;
                mid: string;
                max: string;
            };
        };
    }
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        minimal_height(): number;
        _event_scroll_timer(val?: any): any;
        field(): {
            scrollTop: number;
            scrollLeft: number;
            tabIndex: number;
        };
        event(): {
            scroll: (event?: any) => any;
        };
        scroll_top(val?: any): number;
        scroll_left(val?: any): number;
        tabindex(): number;
        event_scroll(event?: any): any;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number): number;
        scroll_left(next?: number): number;
        _event_scroll_timer(next?: $mol_after_timeout | null): $mol_after_timeout | null | undefined;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $ {
    class $mol_book2 extends $mol_scroll {
        sub(): readonly $mol_view[];
        minimal_width(): number;
        Placeholder(): $mol_view;
        pages(): readonly $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        sub(): readonly $mol_view[];
    }
}

declare namespace $ {
    class $mol_demo_large extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_book2_demo extends $mol_demo_large {
        title(): string;
        sub(): readonly any[];
        First(): $mol_view;
        Second(): $mol_view;
        Third(): $mol_view;
        View(): $$.$mol_book2;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_page extends $mol_view {
        sub(): readonly any[];
        Title(): $mol_view;
        tools(): readonly $mol_view_content[];
        Tools(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        body_scroll_top(val?: any): number;
        body(): readonly $mol_view_content[];
        Body(): $$.$mol_scroll;
        foot(): readonly $mol_view[];
        Foot(): $mol_view;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_page extends $.$mol_page {
        body_scroll_top(next?: number): number;
    }
}

declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_book2_catalog extends $mol_book2 {
        param(): string;
        spreads(): {};
        Spread(): $mol_view;
        pages(): readonly any[];
        Link(id: any): $$.$mol_link;
        Spread_close(): $$.$mol_link;
        menu_title(): string;
        menu_tools(): readonly any[];
        links(): readonly any[];
        Links(): $$.$mol_list;
        Menu(): $$.$mol_page;
        arg(id: any): {};
        spread_title(id: any): string;
        spread_close_arg(): {};
        Spread_close_icon(): $mol_icon_cross;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_book2_catalog extends $.$mol_book2_catalog {
        pages(): any[];
        links(): $mol_link[];
        Spread(): any;
        spread(): string;
        arg(spread: string): {
            [x: string]: string;
        };
        spread_close_arg(): {
            [x: string]: null;
        };
        spread_title(spread: string): any;
    }
}

declare namespace $ {
    class $mol_book2_catalog_demo extends $mol_demo_large {
        title(): string;
        sub(): readonly any[];
        Articles(): $$.$mol_page;
        Images(): $$.$mol_page;
        Maps(): $$.$mol_page;
        Calatog(): $$.$mol_book2_catalog;
    }
}

declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
        attr(): {
            mol_theme: string;
            disabled: boolean;
            role: string;
            tabindex: number;
            title: string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        major_label(): string;
        Major_enabled(): $mol_button_major;
        Major_disabled(): $mol_button_major;
        minor_label(): string;
        Minor_enabled(): $mol_button_minor;
        Minor_disabled(): $mol_button_minor;
    }
}

declare namespace $ {
    class $mol_icon_share extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_share_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_button_share extends $mol_button_minor {
        uri(): string;
        sub(): readonly any[];
        Icon(): $mol_icon_share_variant;
    }
}

declare namespace $.$$ {
    class $mol_button_share extends $.$mol_button_share {
        click(): void;
    }
}

declare namespace $ {
    class $mol_button_share_demo extends $mol_view {
        title(): string;
        sub(): readonly any[];
        Share_self(): $$.$mol_button_share;
        Share_hyoo(): $$.$mol_button_share;
    }
}

declare namespace $ {
    class $mol_hor extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_hor extends $.$mol_hor {
        minimal_width(): number;
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
        };
    }
}

declare namespace $ {
    enum $mol_time_moment_weekdays {
        monday = 0,
        tuesday = 1,
        wednesday = 2,
        thursday = 3,
        friday = 4,
        saturday = 5,
        sunday = 6
    }
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    class $mol_calendar extends $mol_list {
        sub(): readonly any[];
        weeks(): readonly $mol_view[];
        Weekday(index: any): $mol_calendar_day;
        Week(row: any): $$.$mol_hor;
        Day(day: any): $mol_calendar_day;
        month_string(): string;
        month_moment(): $mol_time_moment;
        title(): string;
        Title(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        weekdays(): readonly $mol_view[];
        Weekdays(): $$.$mol_hor;
        weekend(index: any): boolean;
        weekday(index: any): string;
        week_days(row: any): readonly $mol_view[];
        day_ghost(day: any): boolean;
        day_holiday(day: any): boolean;
        day_selected(day: any): boolean;
        day_theme(day: any): string;
        day_text(day: any): string;
        day_content(day: any): readonly any[];
    }
    class $mol_calendar_day extends $mol_view {
        minimal_height(): number;
        minimal_width(): number;
        attr(): {
            mol_calendar_holiday: boolean;
            mol_calendar_ghost: boolean;
            mol_calendar_selected: boolean;
            mol_theme: string;
        };
        holiday(): boolean;
        ghost(): boolean;
        selected(): boolean;
        theme(): string;
    }
}

declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    class $mol_time_interval extends $mol_time_base {
        constructor(config: $mol_time_interval_config);
        private _start;
        get start(): $mol_time_moment;
        private _end;
        get end(): $mol_time_moment;
        private _duration;
        get duration(): $mol_time_duration;
        toJSON(): string;
        toString(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_calendar extends $.$mol_calendar {
        month_moment(): $mol_time_moment;
        title(): string;
        day_first(): $mol_time_moment;
        day_last(): $mol_time_moment;
        day_draw_from(): $mol_time_moment;
        weekdays(): $mol_view[];
        weekday(index: number): string;
        weekend(index: number): boolean;
        weeks_count(): number;
        sub(): any[];
        weeks(): $mol_view[];
        week_days(index: number): $mol_view[];
        day_text(day: string): string;
        day_holiday(day: string): boolean;
        day_ghost(day: string): boolean;
        day_selected(day: string): boolean;
        day_theme(day: string): string;
    }
}

declare namespace $ {
    class $mol_calendar_demo_holiday extends $mol_demo_small {
        title(): string;
        holidays(): readonly any[];
        sub(): readonly any[];
        month(): string;
        holiday(day: any): boolean;
        Calendar(): $$.$mol_calendar;
    }
}

declare namespace $.$$ {
    class $mol_calendar_demo_holiday extends $.$mol_calendar_demo_holiday {
        holiday(day: string): boolean;
    }
}

declare namespace $ {
    class $mol_calendar_demo_selection extends $mol_demo_small {
        title(): string;
        interval_config(): {
            start: string;
            end: string;
        };
        sub(): readonly any[];
        month(): string;
        selected(day: any): boolean;
        Calendar(): $$.$mol_calendar;
    }
}

declare namespace $.$$ {
    class $mol_calendar_demo_selection extends $.$mol_calendar_demo_selection {
        interval(): $mol_time_interval;
        selected(day: string): boolean;
    }
}

declare namespace $ {
    class $mol_calendar_demo_simple extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        today(): $mol_time_moment;
        Calendar(): $$.$mol_calendar;
    }
}

declare namespace $.$$ {
    class $mol_calendar_demo_simple extends $.$mol_calendar_demo_simple {
        month_name(): string;
    }
}

declare namespace $ {
    class $mol_card_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        Simple(): $$.$mol_card;
        Pending(): $$.$mol_card;
    }
}

declare namespace $ {
    class $mol_svg_group extends $mol_svg {
        dom_name(): string;
    }
}

declare namespace $ {
    class $mol_vector<Value, Length extends number> extends Array<Value> {
        get length(): Length;
        constructor(...values: Value[] & {
            length: Length;
        });
        map<Res>(convert: (value: Value, index: number, array: this) => Res, self?: any): $mol_vector<Res, Length>;
        merged<Patch>(patches: readonly Patch[] & {
            length: Length;
        }, combine: (value: Value, patch: Patch) => Value): this;
        limited(this: $mol_vector<number, Length>, limits: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        added0(this: $mol_vector<number, Length>, diff: number): this;
        added1(this: $mol_vector<number, Length>, diff: readonly number[] & {
            length: Length;
        }): this;
        multed0(this: $mol_vector<number, Length>, mult: number): this;
        multed1(this: $mol_vector<number, Length>, mults: readonly number[] & {
            length: Length;
        }): this;
        powered0(this: $mol_vector<number, Length>, mult: number): this;
        expanded1(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly number[] & {
            length: Length;
        }): this;
        expanded2(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        center<Item extends $mol_vector<number, number>>(this: $mol_vector<Item, Length>): Item;
        distance(this: $mol_vector<$mol_vector<number, number>, Length>): number;
        get x(): Value;
        get y(): Value;
        get z(): Value;
    }
    class $mol_vector_1d<Value> extends $mol_vector<Value, 1> {
    }
    class $mol_vector_2d<Value> extends $mol_vector<Value, 2> {
    }
    class $mol_vector_3d<Value> extends $mol_vector<Value, 3> {
    }
    class $mol_vector_range<Value> extends $mol_vector<Value, 2> {
        get [0](): Value;
        get [1](): Value;
        get min(): Value;
        get max(): Value;
        get inversed(): $mol_vector_range<Value>;
        expanded0(value: Value): $mol_vector_range<Value>;
    }
    let $mol_vector_range_full: $mol_vector_range<number>;
    class $mol_vector_matrix<Width extends number, Height extends number> extends $mol_vector<readonly number[] & {
        length: Width;
    }, Height> {
        added2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
        multed2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
    }
}

declare namespace $ {
    class $mol_svg_title extends $mol_svg {
        dom_name(): string;
        sub(): readonly any[];
    }
}

declare namespace $ {
    class $mol_plot_graph extends $mol_svg_group {
        series_x(): readonly number[];
        series_y(): readonly number[];
        attr(): {
            mol_plot_graph_type: string;
        };
        style(): {
            color: string;
        };
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        shift(): readonly number[];
        scale(): readonly number[];
        cursor_position(): $mol_vector_2d<number>;
        dimensions_pane(): $mol_vector_2d<$mol_vector_range<number>>;
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        size_real(): $mol_vector_2d<number>;
        gap(): $mol_vector_2d<$mol_vector_range<number>>;
        indexes(): readonly number[];
        points(): readonly (readonly number[])[];
        front(): readonly $mol_svg[];
        back(): readonly $mol_svg[];
        Hint(): $mol_svg_title;
        hue(): number;
        Sample(): any;
        type(): string;
        color(): string;
        viewport_x(): $mol_vector_range<number>;
        viewport_y(): $mol_vector_range<number>;
        dimensions_pane_x(): $mol_vector_range<number>;
        dimensions_pane_y(): $mol_vector_range<number>;
        dimensions_x(): $mol_vector_range<number>;
        dimensions_y(): $mol_vector_range<number>;
        gap_x(): $mol_vector_range<number>;
        gap_y(): $mol_vector_range<number>;
        title(): string;
        hint(): string;
    }
    class $mol_plot_graph_sample extends $mol_view {
        attr(): {
            mol_plot_graph_type: string;
        };
        style(): {
            color: string;
        };
        type(): string;
        color(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_graph extends $.$mol_plot_graph {
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        indexes(): readonly number[];
        points(): readonly (readonly number[])[];
        series_x(): readonly number[];
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        color(): string;
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
    class $mol_chart_legend extends $mol_scroll {
        graphs(): readonly $mol_plot_graph[];
        graphs_front(): readonly $mol_plot_graph[];
        sub(): readonly $mol_view[];
        Graph_legend(id: any): $mol_view;
        graph_legends(): readonly $mol_view[];
        Graph_sample(id: any): any;
        Graph_sample_box(id: any): $mol_view;
        graph_title(id: any): string;
        Graph_title(id: any): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_chart_legend extends $.$mol_chart_legend {
        graphs_front(): readonly $mol_plot_graph[];
        graph_legends(): readonly $mol_view[];
        graph_title(index: number): string;
        Graph_sample(index: number): any;
    }
}

declare namespace $ {
    class $mol_touch extends $mol_plugin {
        start_zoom(val?: any): number;
        start_distance(val?: any): number;
        zoom(val?: any): number;
        action_type(val?: any): string;
        action_point(val?: any): $mol_vector_2d<number>;
        start_pan(val?: any): readonly any[];
        pan(val?: any): $mol_vector_2d<number>;
        pointer_center(): $mol_vector_2d<number>;
        start_pos(val?: any): any;
        swipe_precision(): number;
        swipe_right(val?: any): any;
        swipe_bottom(val?: any): any;
        swipe_left(val?: any): any;
        swipe_top(val?: any): any;
        swipe_from_right(val?: any): any;
        swipe_from_bottom(val?: any): any;
        swipe_from_left(val?: any): any;
        swipe_from_top(val?: any): any;
        swipe_to_right(val?: any): any;
        swipe_to_bottom(val?: any): any;
        swipe_to_left(val?: any): any;
        swipe_to_top(val?: any): any;
        draw(event?: any): any;
        style(): {
            "touch-action": string;
            "overscroll-behavior": string;
        };
        event(): {
            pointerdown: (event?: any) => any;
            pointermove: (event?: any) => any;
            pointerup: (event?: any) => any;
            pointerleave: (event?: any) => any;
            wheel: (event?: any) => any;
            contextmenu: (event?: any) => any;
        };
        event_start(event?: any): any;
        event_move(event?: any): any;
        event_end(event?: any): any;
        event_wheel(event?: any): any;
        event_menu(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        auto(): void;
        pointer_events(next?: readonly PointerEvent[]): readonly PointerEvent[];
        pointer_coords(): $mol_vector<$mol_vector_2d<number>, number>;
        pointer_center(): $mol_vector_2d<number>;
        event_coords(event: PointerEvent | WheelEvent): $mol_vector_2d<number>;
        action_point(): $mol_vector_2d<number>;
        event_eat(event: PointerEvent | WheelEvent): string;
        event_start(event: PointerEvent): void;
        event_move(event: PointerEvent): void;
        event_end(event: PointerEvent): void;
        swipe_left(event: PointerEvent): void;
        swipe_right(event: PointerEvent): void;
        swipe_top(event: PointerEvent): void;
        swipe_bottom(event: PointerEvent): void;
        _menu_mute: boolean;
        event_menu(event: PointerEvent): void;
        event_wheel(event: WheelEvent): void;
    }
}

declare namespace $ {
    class $mol_plot_pane extends $mol_svg_root {
        aspect(): string;
        hue_base(val?: any): number;
        hue_shift(val?: any): number;
        gap_hor(): number;
        gap_vert(): number;
        gap_left(): number;
        gap_right(): number;
        gap_top(): number;
        gap_bottom(): number;
        gap(): $mol_vector_2d<$mol_vector_range<number>>;
        shift_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        shift_default(): $mol_vector_2d<number>;
        shift(val?: any): $mol_vector_2d<number>;
        scale_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        scale_default(): $mol_vector_2d<number>;
        scale(val?: any): $mol_vector_2d<number>;
        scale_x(val?: any): number;
        scale_y(val?: any): number;
        size(): $mol_vector_2d<number>;
        size_real(): $mol_vector_2d<number>;
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        dimensions_viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        sub(): readonly $mol_svg[];
        graphs_colored(): readonly $mol_plot_graph[];
        plugins(): readonly any[];
        event(): {
            dblclick: (event?: any) => any;
        };
        gap_x(): $mol_vector_range<number>;
        gap_y(): $mol_vector_range<number>;
        shift_limit_x(): $mol_vector_range<number>;
        shift_limit_y(): $mol_vector_range<number>;
        scale_limit_x(): $mol_vector_range<number>;
        scale_limit_y(): $mol_vector_range<number>;
        dimensions_x(): $mol_vector_range<number>;
        dimensions_y(): $mol_vector_range<number>;
        dimensions_viewport_x(): $mol_vector_range<number>;
        dimensions_viewport_y(): $mol_vector_range<number>;
        graphs_sorted(): readonly $mol_svg[];
        graphs(): readonly $mol_plot_graph[];
        graphs_visible(): readonly $mol_plot_graph[];
        graphs_positioned(): readonly $mol_plot_graph[];
        zoom(val?: any): number;
        draw(event?: any): any;
        cursor_position(): $mol_vector_2d<number>;
        action_type(): string;
        action_point(): $mol_vector_2d<number>;
        Touch(): $$.$mol_touch;
        reset(event?: any): any;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_pane extends $.$mol_plot_pane {
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        size(): $mol_vector_2d<number>;
        graph_hue(index: number): number;
        graphs_colored(): $.$mol_plot_graph[];
        size_real(): $mol_vector_2d<number>;
        view_box(): string;
        scale_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        scale_default(): $mol_vector_2d<number>;
        scale(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        scale_x(next?: number): number;
        scale_y(next?: number): number;
        shift_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        shift_default(): $mol_vector_2d<number>;
        graph_touched: boolean;
        shift(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        reset(event?: Event): void;
        graphs_visible(): $.$mol_plot_graph[];
        graphs_positioned(): $.$mol_plot_graph[];
        dimensions_viewport(): $mol_vector<$mol_vector_range<number>, 2>;
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        graphs_sorted(): $.$mol_svg[];
    }
}

declare namespace $ {
    class $mol_chart extends $mol_view {
        gap_hor(): number;
        gap_vert(): number;
        gap_left(): number;
        gap_right(): number;
        gap_bottom(): number;
        gap_top(): number;
        graphs(): readonly $mol_plot_graph[];
        sub(): readonly any[];
        Legend(): $$.$mol_chart_legend;
        hue_base(): number;
        hue_shift(): number;
        zoom(val?: any): number;
        graphs_colored(): $mol_plot_graph[];
        Plot(): $$.$mol_plot_pane;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plot_bar extends $mol_plot_graph {
        style(): {
            "stroke-width": string;
            color: string;
        };
        sub(): readonly any[];
        Sample(): $mol_plot_graph_sample;
        stroke_width(): string;
        curve(): string;
        Curve(): $mol_svg_path;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_bar extends $.$mol_plot_bar {
        indexes(): number[];
        curve(): string;
        stroke_width(): string;
        color(): string;
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
    }
}

declare namespace $ {
    class $mol_plot_line extends $mol_plot_graph {
        threshold(): number;
        spacing(): number;
        color_fill(): string;
        dom_name(): string;
        attr(): {
            d: string;
            mol_plot_graph_type: string;
        };
        sub(): readonly any[];
        Sample(): $mol_plot_graph_sample;
        curve(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_line extends $.$mol_plot_line {
        sub(): readonly any[];
        indexes(): number[];
        curve(): string;
    }
}

declare namespace $ {
    class $mol_plot_dot extends $mol_plot_graph {
        points_max(): number;
        aspect(): number;
        style(): {
            "stroke-width": number;
            color: string;
        };
        sub(): readonly any[];
        Sample(): $mol_plot_graph_sample;
        diameter(): number;
        curve(): string;
        Curve(): $mol_svg_path;
    }
}

declare namespace $ {
    function $mol_coord_pack(a: number, b: number): number;
    function $mol_coord_high(key: number): number;
    function $mol_coord_low(key: number): number;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_dot extends $.$mol_plot_dot {
        filled(): Set<number>;
        indexes(): number[];
        curve(): string;
    }
}

declare namespace $ {
    class $mol_plot_group extends $mol_plot_graph {
        sub(): readonly $mol_plot_graph[];
        Sample(): $mol_plot_graph_sample;
        graphs(): readonly $mol_plot_graph[];
        graphs_enriched(): readonly $mol_plot_graph[];
        graph_samples(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
    class $mol_plot_group extends $.$mol_plot_group {
        graphs_enriched(): readonly $.$mol_plot_graph[];
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        graph_samples(): any[];
        back(): $mol_plot_graph[];
        front(): $mol_plot_graph[];
    }
}

declare namespace $ {
    class $mol_svg_text extends $mol_svg {
        dom_name(): string;
        pos(): readonly any[];
        attr(): {
            x: string;
            y: string;
            "text-anchor": string;
        };
        sub(): readonly any[];
        pos_x(): string;
        pos_y(): string;
        align(): string;
        text(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_svg_text extends $.$mol_svg_text {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {
    class $mol_svg_rect extends $mol_svg {
        dom_name(): string;
        pos(): readonly any[];
        attr(): {
            width: string;
            height: string;
            x: string;
            y: string;
        };
        width(): string;
        height(): string;
        pos_x(): string;
        pos_y(): string;
    }
}

declare namespace $.$$ {
    class $mol_svg_rect extends $.$mol_svg_rect {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {
    class $mol_svg_text_box extends $mol_svg_group {
        font_size(): number;
        width(): number;
        sub(): readonly any[];
        box_width(): string;
        box_height(): string;
        box_pos_x(): string;
        box_pos_y(): string;
        Back(): $$.$mol_svg_rect;
        pos_x(): string;
        pos_y(): string;
        align(): string;
        text(): string;
        Text(): $$.$mol_svg_text;
    }
}

declare namespace $ {
    function $mol_font_canvas(next?: CanvasRenderingContext2D): CanvasRenderingContext2D;
}

declare namespace $ {
    function $mol_font_measure(size: number, face: string, text: string): number;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_svg_text_box extends $.$mol_svg_text_box {
        box_width(): string;
        width(): number;
        box_pos_x(): string;
        box_pos_y(): string;
    }
}

declare namespace $ {
    class $mol_plot_ruler extends $mol_plot_graph {
        step(): number;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        axis_points(): readonly number[];
        normalize(val?: any): number;
        precision(): number;
        sub(): readonly any[];
        Label(index: any): $$.$mol_svg_text;
        background_x(): string;
        background_y(): string;
        background_width(): string;
        background_height(): string;
        Background(): $$.$mol_svg_rect;
        curve(): string;
        Curve(): $mol_svg_path;
        labels_formatted(): readonly any[];
        title_pos_x(): string;
        title_pos_y(): string;
        title_align(): string;
        Title(): $$.$mol_svg_text_box;
        label_pos_x(index: any): string;
        label_pos_y(index: any): string;
        label_pos(index: any): readonly any[];
        label_text(index: any): string;
        label_align(): string;
    }
}

declare namespace $ {
    function $mol_math_round_expand(val: number, gap?: number): number;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_ruler extends $.$mol_plot_ruler {
        labels_formatted(): $mol_svg_text[];
        step(): number;
        snap_to_grid(coord: number): number;
        axis_points(): number[];
        precision(): number;
        label_text(index: number): string;
        font_size(): number;
        back(): $mol_svg_path[];
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
    class $mol_plot_ruler_vert extends $mol_plot_ruler {
        title_align(): string;
        label_align(): string;
        title_pos_y(): string;
        label_pos_x(v: any): string;
        background_height(): string;
        background_width(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        curve(): string;
        title_pos_x(): string;
        label_pos_y(index: number): string;
    }
}

declare namespace $ {
    class $mol_plot_ruler_hor extends $mol_plot_ruler {
        title_align(): string;
        label_align(): string;
        title_pos_x(): string;
        title_pos_y(): string;
        label_pos_y(v: any): string;
        background_width(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        curve(): string;
        label_pos_x(index: number): string;
        background_y(): string;
        title_pos_y(): string;
        background_height(): string;
    }
}

declare namespace $ {
    class $mol_plot_mark_hor extends $mol_plot_ruler_hor {
        labels(): readonly string[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_mark_hor extends $.$mol_plot_mark_hor {
        series_x(): readonly number[];
        labels(): readonly string[];
        visible_indexes(): number[];
        curve(): string;
        label_text(index: number): string;
        labels_formatted(): $mol_svg_text[];
        label_pos_x(index: number): string;
        label_pos_y(index: number): string;
    }
}

declare namespace $ {
    class $mol_plot_mark_cross extends $mol_plot_graph {
        labels(): readonly string[];
        title_x_gap(): number;
        threshold(): number;
        graphs(): readonly $mol_plot_graph[];
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        sub(): readonly any[];
        dimensions_x(): $mol_vector_range<number>;
        dimensions_y(): $mol_vector_range<number>;
        curve(): string;
        Curve(): $mol_svg_path;
        title_x_pos_x(): string;
        title_x_pos_y(): string;
        title_x(): string;
        Label_x(): $$.$mol_svg_text_box;
        title_y_pos_x(): string;
        title_y_pos_y(): string;
        title_y(): string;
        Label_y(): $$.$mol_svg_text_box;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_mark_cross extends $.$mol_plot_mark_cross {
        nearest(): {
            value: $mol_vector_2d<number>;
            scaled: $mol_vector_2d<number>;
            index: number;
        } | null;
        curve(): string;
        title_x(): string;
        title_x_pos_x(): string;
        title_x_pos_y(): string;
        title_y(): string;
        title_y_pos_y(): string;
    }
}

declare namespace $ {
    class $mol_chart_demo_simple extends $mol_demo_large {
        title(): string;
        sub(): readonly any[];
        plan_title(): string;
        plan(): readonly any[];
        Plan(): $$.$mol_plot_bar;
        fact_title(): string;
        facts(): readonly any[];
        Fact_line(): $$.$mol_plot_line;
        Fact_dots(): $$.$mol_plot_dot;
        Fact(): $$.$mol_plot_group;
        vert_title(): string;
        Vert_ruler(): $$.$mol_plot_ruler_vert;
        marker_hor_title(): string;
        months(): readonly string[];
        Marker_hor(): $$.$mol_plot_mark_hor;
        Marker_cross(): $$.$mol_plot_mark_cross;
        Chart(): $mol_chart;
    }
}

declare namespace $ {
    class $mol_plot_fill extends $mol_plot_line {
        threshold(): number;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_fill extends $.$mol_plot_fill {
        curve(): string;
        front(): never[];
        back(): this[];
    }
}

declare namespace $ {
    class $mol_chart_demo_styles extends $mol_demo_large {
        title(): string;
        samples_count(): number;
        sub(): readonly any[];
        receipts_title(): string;
        series_x(): readonly number[];
        series_2_y(): readonly number[];
        Receipts(): $$.$mol_plot_bar;
        receipts_confirmed_title(): string;
        series_3_y(): readonly number[];
        Receipts_confirmed(): $$.$mol_plot_bar;
        maximum_title(): string;
        series_1_y(): readonly number[];
        Maximum(): $$.$mol_plot_dot;
        waste_title(): string;
        series_4_y(): readonly number[];
        Waste(): $$.$mol_plot_line;
        purchases_title(): string;
        series_5_y(): readonly number[];
        Purchases_fill(): $$.$mol_plot_fill;
        Purchases_line(): $$.$mol_plot_line;
        Purchases_dots(): $$.$mol_plot_dot;
        Purchases(): $$.$mol_plot_group;
        taxes_title(): string;
        series_6_y(): readonly number[];
        Taxes_fill(): $$.$mol_plot_fill;
        Taxes_line(): $$.$mol_plot_line;
        Taxes_dots(): $$.$mol_plot_dot;
        Taxes(): $$.$mol_plot_group;
        energy_title(): string;
        Energy(): $$.$mol_plot_ruler_vert;
        day_title(): string;
        Day(): $$.$mol_plot_mark_hor;
        graphs(): readonly any[];
        Chart(): $mol_chart;
    }
}

declare namespace $.$$ {
    class $mol_chart_demo_styles extends $.$mol_chart_demo_styles {
        limit(): readonly [10, number];
        series_x(): number[];
        series_y(): number[];
        series_1_y(): number[];
        series_2_y(): number[];
        series_3_y(): number[];
        series_4_y(): number[];
        series_5_y(): number[];
        series_6_y(): number[];
    }
}

declare namespace $ {
    class $mol_chart_demo_forces extends $mol_demo_large {
        title(): string;
        samples_count(): number;
        points_max(): number;
        sub(): readonly any[];
        forces_left_title(): string;
        forces_left_x(): readonly number[];
        forces_left_y(): readonly number[];
        Forces_left(): $$.$mol_plot_dot;
        forces_right_title(): string;
        forces_right_x(): readonly number[];
        forces_right_y(): readonly number[];
        Forces_right(): $$.$mol_plot_dot;
        vert_title(): string;
        Vert_ruler(): $$.$mol_plot_ruler_vert;
        hor_title(): string;
        Hor_ruler(): $$.$mol_plot_ruler_hor;
        Cross(): $$.$mol_plot_mark_cross;
        Chart(): $mol_chart;
    }
}

declare namespace $.$$ {
    class $mol_chart_demo_forces extends $.$mol_chart_demo_forces {
        generate_forces(): readonly [readonly number[], readonly number[]];
        forces_left(): readonly [readonly number[], readonly number[]];
        forces_right(): readonly [readonly number[], readonly number[]];
        forces_left_x(): readonly number[];
        forces_left_y(): readonly number[];
        forces_right_x(): readonly number[];
        forces_right_y(): readonly number[];
    }
}

declare namespace $ {
    class $mol_icon_forum extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_forum_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_open_in_new extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_frame extends $mol_scroll {
        dom_name(): string;
        attr(): {
            src: string;
            srcdoc: any;
            allow: string;
        };
        fullscreen(): boolean;
        accelerometer(): boolean;
        autoplay(): boolean;
        encription(): boolean;
        gyroscope(): boolean;
        pip(): boolean;
        uri(val?: any): string;
        html(): any;
        allow(): string;
    }
}

declare namespace $ {
    const $mol_wait_timeout: (timeout: number) => unknown;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_frame extends $.$mol_frame {
        window(): Window;
        uri_resource(): string;
        _uri_sync: $mol_fiber | undefined;
        uri_listener(): $mol_dom_listener;
        render(): void;
        allow(): string;
    }
}

declare namespace $ {
    class $mol_chat extends $mol_link {
        seed(): string;
        opened(): boolean;
        arg(): {
            mol_chat: string;
        };
        hint(): string;
        sub(): readonly any[];
        pages(): readonly any[];
        Icon(): $mol_icon_forum_outline;
        title(): string;
        external(): string;
        External_icon(): $mol_icon_open_in_new;
        Esternal(): $$.$mol_link;
        Close_icon(): $mol_icon_cross;
        Close(): $$.$mol_link;
        embed(): string;
        Embed(): $$.$mol_frame;
        Page(): $$.$mol_page;
    }
}

declare namespace $ {
    class $mol_media extends $mol_object2 {
        static match(query: string): boolean;
    }
}

declare namespace $ {
    function $mol_lights(this: $, next?: boolean): boolean;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_chat extends $.$mol_chat {
        opened(): boolean;
        pages(): $mol_page[];
        external(): string;
        embed(): string;
    }
}

declare namespace $ {
    class $mol_chat_demo extends $mol_view {
        title(): string;
        sub(): readonly any[];
        chat_pages(): $$.$mol_page[];
        Chat(): $$.$mol_chat;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check_box_demo extends $mol_list {
        title(): string;
        rows(): readonly any[];
        base_checked(val?: any): boolean;
        c1Label(): string;
        Labeled_base(): $mol_check_box;
        c2Label(): string;
        checked_checked(val?: any): boolean;
        Labeled_checked(): $mol_check_box;
        c6Label(): string;
        Labeled_disabled(): $mol_check_box;
        Alone_base(): $mol_check_box;
        Alone_checked(): $mol_check_box;
        Alone_disabled(): $mol_check_box;
    }
}

declare namespace $ {
    class $mol_check_expand_demo extends $mol_list {
        title(): string;
        rows(): readonly any[];
        base_expanded(val?: any): boolean;
        c1Label(): string;
        Labeled_base(): $$.$mol_check_expand;
        c2Label(): string;
        expanded_expanded(val?: any): boolean;
        Labeled_expanded(): $$.$mol_check_expand;
        c5Label(): string;
        Disabled(): $$.$mol_check_expand;
        Empty_base(): $$.$mol_check_expand;
        Empty_expanded(): $$.$mol_check_expand;
    }
}

declare namespace $ {
    class $mol_check_group extends $mol_check_box {
        checks(): readonly $mol_check[];
        full(): boolean;
    }
}

declare namespace $ {
    class $mol_icon_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $.$$ {
    class $mol_check_group extends $.$mol_check_group {
        checked(next?: boolean): boolean;
        full(): boolean;
        Icon(): $mol_icon_tick | $mol_icon_check_all;
    }
}

declare namespace $ {
    class $mol_check_group_demo extends $mol_list {
        title(): string;
        rows(): readonly any[];
        All(): $$.$mol_check_group;
        strength_title(): string;
        strength(val?: any): boolean;
        Strength(): $mol_check_box;
        perception_title(): string;
        perception(val?: any): boolean;
        Perception(): $mol_check_box;
        endurance_title(): string;
        endurance(val?: any): boolean;
        Endurance(): $mol_check_box;
        charisma_title(): string;
        charisma(val?: any): boolean;
        Charisma(): $mol_check_box;
        intelligence_title(): string;
        intelligence(val?: any): boolean;
        Intelligence(): $mol_check_box;
        agility_title(): string;
        agility(val?: any): boolean;
        Agility(): $mol_check_box;
        luck_title(): string;
        luck(val?: any): boolean;
        Luck(): $mol_check_box;
        Partial(): $$.$mol_list;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check_icon extends $mol_check {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_microphone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_icon_demo extends $mol_list {
        title(): string;
        rows(): readonly any[];
        Base_icon(): $mol_icon_microphone;
        base_checked(val?: any): boolean;
        Base(): $mol_check_icon;
        Checked_icon(): $mol_icon_microphone;
        checked_checked(val?: any): boolean;
        Checked(): $mol_check_icon;
        Disabled_icon(): $mol_icon_microphone;
        Disabled(): $mol_check_box;
    }
}

declare namespace $ {
    class $mol_pop extends $mol_view {
        event(): {
            keydown: (event?: any) => any;
        };
        showed(val?: any): boolean;
        align_vert(): string;
        align_hor(): string;
        sub(): readonly any[];
        sub_visible(): readonly any[];
        keydown(event?: any): any;
        Anchor(): any;
        align(): string;
        bubble_content(): readonly $mol_view_content[];
        height_max(): number;
        Bubble(): $mol_pop_bubble;
    }
    class $mol_pop_bubble extends $mol_scroll {
        sub(): readonly $mol_view_content[];
        style(): {
            maxHeight: number;
        };
        attr(): {
            mol_pop_align: string;
            tabindex: number;
        };
        content(): readonly $mol_view_content[];
        height_max(): number;
        align(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_nav extends $mol_plugin {
        cycle(val?: any): boolean;
        mod_ctrl(): boolean;
        mod_shift(): boolean;
        mod_alt(): boolean;
        keys_x(val?: any): readonly any[];
        keys_y(val?: any): readonly any[];
        current_x(val?: any): any;
        current_y(val?: any): any;
        event_up(event?: any): any;
        event_down(event?: any): any;
        event_left(event?: any): any;
        event_right(event?: any): any;
        event(): {
            keydown: (event?: any) => any;
        };
        event_key(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {
    class $mol_search extends $mol_pop {
        query(val?: any): string;
        suggests(): readonly string[];
        plugins(): readonly $mol_plugin[];
        showed(val?: any): boolean;
        align_hor(): string;
        Anchor(): $mol_view;
        bubble_content(): readonly $mol_view_content[];
        Suggest(id: any): $mol_button_minor;
        clear(val?: any): any;
        Hotkey(): $$.$mol_hotkey;
        nav_components(): readonly $mol_view[];
        nav_focused(component?: any): any;
        Nav(): $$.$mol_nav;
        suggests_showed(val?: any): boolean;
        hint(): string;
        submit(event?: any): any;
        enabled(): boolean;
        Query(): $$.$mol_string;
        Clear_icon(): $mol_icon_cross;
        Clear(): $mol_button_minor;
        anchor_content(): readonly any[];
        menu_items(): readonly $mol_view[];
        Menu(): $$.$mol_list;
        suggest_select(id: any, event?: any): any;
        suggest_label(id: any): string;
        Suggest_label(id: any): $$.$mol_dimmer;
        suggest_content(id: any): readonly $mol_view_content[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($mol_button_minor | $mol_string)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($mol_button_minor | $mol_string)[];
        nav_focused(component?: $mol_view): $mol_view | $mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
    class $mol_code extends $mol_view {
        sub(): readonly any[];
        value(val?: any): string;
        format(): string;
        hint(): string;
        Manual(): $$.$mol_search;
        event_scan(val?: any): any;
        scan_label(): string;
        Scan(): $$.$mol_button;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_code extends $.$mol_code {
        scan_support(): boolean;
        sub(): ($mol_button | $mol_search)[];
        event_scan(): void;
    }
}

declare namespace $ {
    class $mol_code_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        Qr(): $$.$mol_code;
        Matrix(): $$.$mol_code;
        Upc_e(): $$.$mol_code;
        Upc_a(): $$.$mol_code;
        Ean_8(): $$.$mol_code;
        Ean_13(): $$.$mol_code;
        Code_128(): $$.$mol_code;
        Code_39(): $$.$mol_code;
        Itf(): $$.$mol_code;
    }
}

declare namespace $ {
    class $mol_pick extends $mol_pop {
        Anchor(): $$.$mol_check;
        trigger_enabled(): boolean;
        trigger_content(): readonly $mol_view_content[];
        hint(): string;
        Trigger(): $$.$mol_check;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_calendar extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_date extends $mol_pick {
        Icon(): $mol_icon_calendar;
        bubble_content(): readonly any[];
        value_number(val?: any): number;
        value_moment(val?: any): $mol_time_moment;
        value(val?: any): string;
        hint(): string;
        enabled(): boolean;
        Input(): $$.$mol_string;
        month_moment(): $mol_time_moment;
        day_selected(day: any): boolean;
        day_click(day: any, event?: any): any;
        prev_hint(): string;
        prev(event?: any): any;
        Prev_icon(): $mol_icon_chevron_left;
        Prev(): $mol_button_minor;
        next_hint(): string;
        next(event?: any): any;
        Next_icon(): $mol_icon_chevron_right;
        Next(): $mol_button_minor;
        Calendar_tools(): $mol_view;
        Calendar_title(): $mol_view;
        Calendar(): $mol_date_calendar;
    }
    class $mol_date_calendar extends $mol_calendar {
        day_content(day: any): readonly any[];
        day_click(day: any, event?: any): any;
        Day_button(day: any): $mol_button_minor;
    }
}

declare namespace $ {
    function $mol_try<Result>(handler: () => Result): Result | Error;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_date extends $.$mol_date {
        trigger_content(): string[];
        value(val?: string): string;
        value_moment(val?: $mol_time_moment): $mol_time_moment;
        month_moment(next?: $mol_time_moment): $mol_time_moment;
        day_selected(day: string): boolean;
        day_click(day: string): void;
        prev(): void;
        next(): void;
    }
}

declare namespace $ {
    class $mol_date_demo extends $mol_view {
        sub(): readonly any[];
        date(val?: any): $mol_time_moment;
        Date(): $$.$mol_date;
        formatted(): string;
        Formatted(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_date_demo extends $.$mol_date_demo {
        formatted(): string;
    }
}

declare namespace $ {
    class $mol_switch extends $mol_view {
        Option(id: any): $$.$mol_check;
        value(val?: any): any;
        options(): {};
        keys(): readonly string[];
        sub(): readonly $mol_check[];
        option_checked(id: any, val?: any): boolean;
        option_title(id: any): string;
        option_label(id: any): readonly any[];
        enabled(): boolean;
        option_enabled(id: any): boolean;
        option_hint(id: any): string;
        items(): readonly $mol_check[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: any): any;
        options(): {
            [key: string]: string;
        };
        keys(): string[];
        items(): $mol_check[];
        option_title(key: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_deck extends $mol_list {
        items(): readonly $mol_view[];
        rows(): readonly $mol_view[];
        current(val?: any): string;
        switch_options(): {};
        Switch(): $$.$mol_switch;
        Content(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_deck extends $.$mol_deck {
        current(next?: string): string;
        switch_options(): Record<string, string>;
        Content(): any;
    }
}

declare namespace $ {
    class $mol_deck_demo extends $mol_view {
        title(): string;
        sub(): readonly any[];
        greet_message(): string;
        Greeter(): $$.$mol_card;
        quest_message(): string;
        Quester(): $$.$mol_card;
        command_message(): string;
        Commander(): $$.$mol_card;
        Deck(): $$.$mol_deck;
    }
}

declare namespace $ {
    class $mol_dimmer_demo extends $mol_list {
        title(): string;
        rows(): readonly any[];
        One(): $$.$mol_dimmer;
        Two(): $$.$mol_dimmer;
        Three(): $$.$mol_dimmer;
        Four(): $$.$mol_dimmer;
        Five(): $$.$mol_dimmer;
        Six(): $$.$mol_dimmer;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_ghost extends $mol_view {
        Sub(): $mol_view;
    }
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
    function $mol_dom_render_events_async(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
}

declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_drag extends $mol_ghost {
        event(): {
            dragstart: (event?: any) => any;
            drag: (event?: any) => any;
            dragend: (event?: any) => any;
        };
        attr(): {
            draggable: boolean;
            mol_drag_status: string;
        };
        transfer(): {
            "text/plain": string;
            "text/html": string;
            "text/uri-list": string;
        };
        allow_copy(): boolean;
        allow_link(): boolean;
        allow_move(): boolean;
        image(): Element;
        start(event?: any): any;
        move(event?: any): any;
        end(event?: any): any;
        status(val?: any): string;
    }
}

declare namespace $.$$ {
    class $mol_drag extends $.$mol_drag {
        status(next?: "ready" | "drag"): "ready" | "drag";
        start(event: DragEvent): void;
        end(event: DragEvent): void;
    }
}

declare namespace $ {
    class $mol_icon_trash_can extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trash_can_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_drop extends $mol_ghost {
        event(): {
            dragenter: (event?: any) => any;
            dragover: (event?: any) => any;
            dragleave: (event?: any) => any;
            drop: (event?: any) => any;
        };
        attr(): {
            mol_drop_status: string;
        };
        adopt(transfer?: any): {};
        receive(transfer?: any): any;
        enter(event?: any): any;
        move(event?: any): any;
        leave(event?: any): any;
        drop(event?: any): any;
        status(val?: any): string;
    }
}

declare namespace $.$$ {
    class $mol_drop extends $.$mol_drop {
        status(next?: "ready" | "drag"): "ready" | "drag";
        _target: EventTarget | null;
        enter(event: DragEvent): void;
        move(event: DragEvent): void;
        leave(event: DragEvent): void;
        receive(transfer: unknown): unknown;
        drop(event: DragEvent): void;
    }
}

declare namespace $ {
    class $mol_drag_demo extends $mol_demo_large {
        task_count(): number;
        sub(): readonly any[];
        Task_row(task: any): $$.$mol_drag;
        transfer_adopt(transfer?: any): any;
        receive(obj?: any): any;
        receive_trash(obj?: any): any;
        Trash_icon(): $mol_icon_trash_can_outline;
        Trash(): $mol_float;
        Trash_drop(): $$.$mol_drop;
        task_rows(): readonly any[];
        List(): $$.$mol_list;
        Scroll(): $$.$mol_scroll;
        List_drop(): $$.$mol_drop;
        task_title(task: any): string;
        task_html(task: any): string;
        task_uri(task: any): string;
        receive_before(task: any, obj?: any): any;
        Task_link(task: any): $$.$mol_link;
        Task_drop(task: any): $$.$mol_drop;
    }
}

declare namespace $ {
    function $mol_range2<Item = number>(item?: (index: number) => Item, size?: () => number): Item[];
    class $mol_range2_array<Item> extends Array<Item> {
        concat(...tail: this[]): Item[];
        filter<Context>(check: (val: Item, index: number, list: Item[]) => boolean, context?: Context): Item[];
        forEach<Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => void, context?: Context): void;
        map<Item_out, Context>(proceed: (this: Context, val: Item, index: number, list: Item[]) => Item_out, context?: Context): Item_out[];
        reduce<Result>(merge: (result: Result, val: Item, index: number, list: Item[]) => Result, result?: Result): Result | undefined;
        slice(from?: number, to?: number): Item[];
        some<Context>(check: (this: Context, val: Item, index: number, list: Item[]) => boolean, context?: Context): boolean;
        every<Context = null>(check: (this: Context, val: Item, index: number, list: Item[]) => boolean, context?: Context): boolean;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    type $mol_drag_demo_task = {
        id: string;
        title: string;
    };
    class $mol_drag_demo extends $.$mol_drag_demo {
        task_list(next?: $mol_drag_demo_task[]): $mol_drag_demo_task[];
        Task(id: string): {
            id: string;
            title: string;
            toJSON: () => string;
        };
        task_rows(): $mol_drag[];
        task_title(task: $mol_drag_demo_task): string;
        task_uri(task: $mol_drag_demo_task): string;
        transfer_adopt(transfer: DataTransfer): $mol_drag_demo_task | undefined;
        receive_before(anchor: $mol_drag_demo_task, task: $mol_drag_demo_task): void;
        receive(task: $mol_drag_demo_task): void;
        receive_trash(task: $mol_drag_demo_task): void;
    }
}

declare namespace $ {
    class $mol_expander extends $mol_list {
        rows(): readonly any[];
        expanded(val?: any): boolean;
        label(): readonly any[];
        Trigger(): $$.$mol_check_expand;
        Tools(): any;
        Label(): $mol_view;
        content(): readonly any[];
        Content(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_filler extends $mol_view {
        minimal_height(): number;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_expander_demo extends $mol_view {
        title(): string;
        sub(): readonly any[];
        Content(): $mol_filler;
        Expander(): $$.$mol_expander;
    }
}

declare namespace $ {
    class $mol_float_demo extends $mol_demo_large {
        title(): string;
        sub(): readonly any[];
        Head_content(): $$.$mol_paragraph;
        Head_row(): $mol_row;
        Head(): $mol_float;
        Filler1(): $mol_filler;
        Filler2(): $mol_filler;
        Content(): $$.$mol_list;
        Scroll(): $$.$mol_scroll;
    }
}

declare namespace $ {
    class $mol_labeler extends $mol_list {
        rows(): readonly any[];
        label(): readonly $mol_view_content[];
        Label(): $mol_view;
        content(): readonly any[];
        Content(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        label(): readonly any[];
        Content(): any;
        name(): string;
        bid(): string;
        Bid(): $mol_view;
        control(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form extends $mol_view {
        submit_blocked(): boolean;
        event(): {
            keydown: (event?: any) => any;
        };
        submit(event?: any): any;
        sub(): readonly any[];
        keydown(event?: any): any;
        form_fields(): readonly $mol_form_field[];
        Bar_fields(): $mol_view;
        buttons(): readonly $mol_view[];
        Bar_buttons(): $mol_row;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_form_demo_bids extends $mol_list {
        title(): string;
        message_required(): string;
        message_no_spaces(): string;
        message_need_more_letters(): string;
        message_need_at(): string;
        message_only_one_at(): string;
        message_no_tld(): string;
        message_dots_inside(): string;
        message_no_space_domain(): string;
        message_need_username(): string;
        sub(): readonly any[];
        submit(val?: any): any;
        name_first_label(): string;
        name_first_bid(): string;
        name_first_hint(): string;
        name_first(val?: any): string;
        Name_first_control(): $$.$mol_string;
        Name_first_field(): $mol_form_field;
        name_nick_label(): string;
        name_nick_bid(): string;
        name_nick_hint(): string;
        name_nick(val?: any): string;
        Name_nick_control(): $$.$mol_string;
        Name_nick_field(): $mol_form_field;
        name_second_label(): string;
        name_second_bid(): string;
        name_second_hint(): string;
        name_second(val?: any): string;
        Name_second_control(): $$.$mol_string;
        Name_second_field(): $mol_form_field;
        sex_label(): string;
        sex_bid(): string;
        sex(val?: any): string;
        sex_option_male(): string;
        sex_option_intersex(): string;
        sex_option_female(): string;
        sex_options(): {
            male: string;
            intersex: string;
            female: string;
        };
        Sex_control(): $$.$mol_switch;
        Sex_field(): $mol_form_field;
        mail_label(): string;
        mail_bid(): string;
        mail_hint(): string;
        mail(val?: any): string;
        Mail_control(): $$.$mol_string;
        Mail_field(): $mol_form_field;
        submit_text(): string;
        submit_allowed(): boolean;
        Submit(): $mol_button_major;
        Form(): $$.$mol_form;
        message(val?: any): string;
        Message(): $mol_row;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_form_demo_bids extends $.$mol_form_demo_bids {
        name_first(next?: string): string;
        name_first_bid(): string;
        name_nick(next?: string): string;
        name_second(next?: string): string;
        name_second_bid(): string;
        mail(next?: string): string;
        mail_bid(): string;
        sex(next?: string): string;
        sex_bid(): string;
        submit(next?: Event): void;
        submit_allowed(): boolean;
    }
}

declare namespace $ {
    class $mol_frame_demo extends $mol_demo_large {
        sub(): readonly any[];
        Frame(): $$.$mol_frame;
    }
}

declare namespace $ {
    class $mol_gallery extends $mol_view {
        sub(): readonly $mol_view[];
        Side(id: any): $$.$mol_gallery;
        items(): readonly $mol_view[];
        side_size(id: any): string;
        side_items(id: any): readonly $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_gallery extends $.$mol_gallery {
        sub(): readonly $mol_view[];
        side_items(id: number): $mol_view[];
        side_size(id: number): string;
    }
}

declare namespace $ {
    class $mol_gallery_demo extends $mol_view {
        title(): string;
        count(): number;
        sub(): readonly any[];
        Item(id: any): $$.$mol_link;
        items(): readonly any[];
        App(): $$.$mol_gallery;
        item_title(id: any): string;
        Item_title(id: any): $$.$mol_paragraph;
    }
}

declare namespace $ {
    class $mol_unit extends $mol_object {
        'valueOf()': number;
        constructor(value?: number);
        prefix(): string;
        postfix(): string;
        valueOf(): number;
        delimiter(): string;
        value_view(): string;
        toString(): string;
        static summ(a: $mol_unit, b: $mol_unit): any;
        mult(m: number): this;
    }
}

declare namespace $ {
    class $mol_unit_money extends $mol_unit {
    }
    class $mol_unit_money_usd extends $mol_unit_money {
        prefix(): string;
    }
    class $mol_unit_money_rur extends $mol_unit_money {
        postfix(): string;
    }
}

declare namespace $ {
    function $mol_stub_select_random<Value>(list: readonly Value[]): Value;
    function $mol_stub_strings(prefix?: string, count?: number, length?: number): any[];
    function $mol_stub_code(length?: number): string;
    function $mol_stub_price(max?: number): $mol_unit_money_usd;
    function $mol_stub_product_name(): string;
    function $mol_stub_company_name_big(): string;
    function $mol_stub_company_name_small(): string;
    function $mol_stub_company_name(): string;
    function $mol_stub_person_name(): string;
    function $mol_stub_person_avatar(size?: number): string;
    function $mol_stub_city(): string;
    function $mol_stub_time(maxShift?: number): $mol_time_moment;
    function $mol_stub_message(max_length: number): string;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_gallery_demo extends $.$mol_gallery_demo {
        items(): $mol_link[];
        item_title(id: number): string;
        item_uri(id: number): string;
    }
}

declare namespace $ {
    class $mol_image extends $mol_view {
        dom_name(): string;
        field(): {
            src: string;
            alt: string;
            loading: string;
        };
        uri(): string;
        loading(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_link_iconed extends $mol_link {
        sub(): readonly any[];
        content(): readonly any[];
        host(): string;
        icon(): string;
        Icon(): $mol_image;
        title(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
        sub(): any[];
    }
}

declare namespace $ {
    class $mol_html_view extends $mol_list {
        html(): string;
        dom(): any;
        safe_link(uri: any): string;
        xss_uri(): string;
        Heading(id: any): $mol_html_view_heading;
        Paragraph(id: any): $$.$mol_paragraph;
        List(id: any): $$.$mol_list;
        Quote(id: any): $$.$mol_list;
        Strong(id: any): $$.$mol_paragraph;
        Emphasis(id: any): $$.$mol_paragraph;
        Deleted(id: any): $$.$mol_paragraph;
        Inserted(id: any): $$.$mol_paragraph;
        Code(id: any): $$.$mol_paragraph;
        Link(id: any): $$.$mol_link_iconed;
        Image(id: any): $mol_image;
        Break(id: any): $$.$mol_paragraph;
        Text(id: any): $$.$mol_dimmer;
        heading_level(id: any): number;
        content(id: any): readonly any[];
        link_uri(id: any): string;
        image_uri(id: any): string;
        highlight(): string;
        text(id: any): string;
    }
    class $mol_html_view_heading extends $mol_paragraph {
        attr(): {
            mol_html_view_heading: number;
        };
        level(): number;
    }
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_html_view extends $.$mol_html_view {
        dom(): HTMLElement;
        sub(): $mol_view[];
        content(node: Node): $mol_view[];
        views(node: Node): $mol_view[] | $mol_paragraph[] | $mol_html_view_heading[] | $mol_link_iconed[];
        text(node: Node): string;
        safe_link(uri: string): string;
        link_uri(node: HTMLAnchorElement): string;
        image_uri(node: HTMLImageElement): string;
        heading_level(node: HTMLHeadingElement): number;
    }
}

declare namespace $ {
    class $mol_html_view_demo extends $mol_demo_large {
        title(): string;
        sub(): readonly any[];
        Html(): $$.$mol_html_view;
        Scroll(): $$.$mol_scroll;
    }
}

declare namespace $ {
    class $mol_infinite extends $mol_list {
        after(id: any): readonly any[];
        Row(id: any): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_infinite extends $.$mol_infinite {
        row_ids(): readonly $mol_view[];
        rows(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_infinite_demo extends $mol_view {
        title(): string;
        chunk_size(): number;
        sub(): readonly any[];
        after(anchor_id: any): readonly any[];
        Item(id: any): $mol_filler;
        List(): $$.$mol_infinite;
    }
}

declare namespace $.$$ {
    class $mol_infinite_demo extends $.$mol_infinite_demo {
        after(anchor_id?: number): number[];
        item_title(id: number): string;
    }
}

declare namespace $ {
    class $mol_labeler_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        Provider(): $mol_labeler;
        user_name(val?: any): string;
        Name_control(): $$.$mol_string;
        Name(): $mol_labeler;
    }
}

declare namespace $ {
    class $mol_icon_download extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_link_demo extends $mol_list {
        title(): string;
        rows(): readonly any[];
        this_label(): string;
        This(): $$.$mol_link;
        red_label(): string;
        Red(): $$.$mol_link;
        green_label(): string;
        Green(): $$.$mol_link;
        blue_label(): string;
        Blue(): $$.$mol_link;
        external_hint(): string;
        External(): $$.$mol_link;
        object_uri(): string;
        Download_icon(): $mol_icon_download;
        download_label(): string;
        Download(): $$.$mol_link;
    }
}

declare namespace $.$$ {
    class $mol_link_demo extends $.$mol_link_demo {
        object_uri(): string;
    }
}

declare namespace $ {
    class $mol_link_iconed_demo extends $mol_list {
        title(): string;
        rows(): readonly any[];
        uri(val?: any): string;
        Input(): $$.$mol_string;
        Output(): $$.$mol_link_iconed;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_list_demo_table extends $mol_view {
        title(): string;
        count(): number;
        sub(): readonly any[];
        Row(id: any): $mol_row;
        rows(): readonly any[];
        Rows(): $$.$mol_list;
        row_id(id: any): string;
        Id(id: any): $mol_view;
        row_title(id: any): string;
        Title(id: any): $mol_view;
        editable_title(): string;
        row_editable(id: any, val?: any): boolean;
        Editable(id: any): $mol_check_box;
        row_priority(id: any, val?: any): string;
        Priority(id: any): $$.$mol_switch;
        row_moment(id: any, val?: any): $mol_time_moment;
        Date(id: any): $$.$mol_date;
        row_uri(id: any): string;
        Link(id: any): $$.$mol_link_iconed;
        row_content(id: any): readonly any[];
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_list_demo_table extends $.$mol_list_demo_table {
        rows(): $mol_row[];
        row_id(id: number): string;
        row_title(id: number): string;
        row_number(id: number, next?: number): number;
        row_uri(id: number): string;
        row_moment(id: number, next?: $mol_time_moment): $mol_time_moment;
    }
}

declare namespace $ {
    class $mol_list_demo_tree extends $mol_view {
        title(): string;
        sub(): readonly any[];
        Row(id: any): $$.$mol_expander;
        root_rows(): readonly any[];
        Content(): $$.$mol_list;
        row_title(id: any): string;
        Row_title(id: any): $$.$mol_paragraph;
        row_expanded(id: any, val?: any): boolean;
        row_content(id: any): readonly any[];
        Row_content(id: any): $$.$mol_list;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_list_demo_tree extends $.$mol_list_demo_tree {
        root_rows(): $mol_expander[];
        row_title(id: number[]): string;
        row_content(id: number[]): $mol_expander[];
        row_expanded(id: number[], next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_map_yandex_mark extends $mol_object {
        pos(): $mol_vector_2d<number>;
        box(): $mol_vector_2d<$mol_vector_range<number>>;
        hint(): string;
        title(): string;
        content(): string;
        object(): any;
        box_lat(): $mol_vector_range<number>;
        box_lon(): $mol_vector_range<number>;
        address(): string;
    }
}

declare namespace $ {
    type $mol_type_unary_func = ((param: any) => any);
    type $mol_type_unary_class = new (param: any) => any;
    type $mol_type_unary = $mol_type_unary_func | $mol_type_unary_class;
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    function $mol_func_is_class(func: Function): boolean;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    type Guard_value<Funcs extends $mol_type_unary[], Index extends keyof Funcs> = $mol_type_param<Index extends keyof $mol_type_tail<Funcs> ? $mol_type_tail<Funcs>[Index] : any, 0>;
    type Guard<Funcs extends $mol_type_unary[]> = {
        [Index in keyof Funcs]: (Funcs[Index] extends $mol_type_unary_func ? (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index> : new (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index>);
    };
    export function $mol_data_pipe<Funcs extends $mol_type_unary[]>(...funcs: Funcs & Guard<Funcs>): ((this: any, input: $mol_type_param<Funcs[0], 0>) => $mol_type_result<$mol_type_foot<Funcs>>) & {
        config: {
            funcs: Funcs & Guard<Funcs>;
        };
        Value: $mol_type_result<$mol_type_foot<Funcs>>;
    };
    export {};
}

declare namespace $ {
    function $mol_diff_path<Item>(...paths: Item[][]): {
        prefix: Item[];
        suffix: Item[][];
    };
}

declare namespace $ {
    class $mol_error_mix extends Error {
        errors: Error[];
        constructor(message: string, ...errors: Error[]);
        toJSON(): string;
    }
}

declare namespace $ {
    class $mol_data_error extends $mol_error_mix {
    }
}

declare namespace $ {
    let $mol_data_string: (val: string) => string;
}

declare namespace $ {
    function $mol_data_array<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][] | unknown) => readonly ReturnType<Sub>[]) & {
        config: Sub;
        Value: readonly ReturnType<Sub>[];
    };
}

declare namespace $ {
    type $mol_type_partial_undefined<Val> = $mol_type_merge<Partial<Val> & Pick<Val, {
        [Field in keyof Val]: undefined extends Val[Field] ? never : Field;
    }[keyof Val]>>;
}

declare namespace $ {
    function $mol_data_record<Sub extends Record<string, $mol_data_value<any>>>(sub: Sub): ((val: unknown) => Readonly<$mol_type_merge<Partial<{ [key in keyof Sub]: ReturnType<Sub[key]>; }> & Pick<{ [key in keyof Sub]: ReturnType<Sub[key]>; }, { [Field in keyof { [key in keyof Sub]: ReturnType<Sub[key]>; }]: undefined extends { [key in keyof Sub]: ReturnType<Sub[key]>; }[Field] ? never : Field; }[keyof Sub]>>>) & {
        config: Sub;
        Value: Readonly<$mol_type_merge<Partial<{ [key in keyof Sub]: ReturnType<Sub[key]>; }> & Pick<{ [key in keyof Sub]: ReturnType<Sub[key]>; }, { [Field in keyof { [key in keyof Sub]: ReturnType<Sub[key]>; }]: undefined extends { [key in keyof Sub]: ReturnType<Sub[key]>; }[Field] ? never : Field; }[keyof Sub]>>>;
    };
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array> | null;
        text(): string;
        json(): unknown;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request: (input: RequestInfo, init?: RequestInit | undefined) => Response;
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static buffer(input: RequestInfo, init?: RequestInit): void;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    let $mol_geo_search_attribution: string;
    function $mol_geo_search({ query, count }: {
        query: string;
        count?: number;
    }): {
        coord: $mol_vector_2d<number>;
        box: $mol_vector_2d<$mol_vector_range<number>>;
    }[];
}

declare namespace $.$$ {
    class $mol_map_yandex_mark extends $.$mol_map_yandex_mark {
        object(): any;
        found(): {
            coord: $mol_vector_2d<number>;
            box: $mol_vector_2d<$mol_vector_range<number>>;
        };
        pos(): $mol_vector_2d<number>;
        box(): $mol_vector_2d<$mol_vector_range<number>>;
    }
}

declare namespace $ {
    class $mol_map_yandex extends $mol_view {
        zoom(val?: any): number;
        center(val?: any): readonly any[];
        objects(): readonly $mol_map_yandex_mark[];
    }
}

declare namespace $ {
    class $mol_import extends $mol_object2 {
        static module(uri: string): any;
        static script(uri: string): any;
        static style(uri: string): any;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_map_yandex extends $.$mol_map_yandex {
        static api(): any;
        api(next?: any, force?: $mol_mem_force): any;
        update(event?: any): void;
        bounds_updated(): boolean;
        center(next?: readonly [number, number], force?: $mol_mem_force): $mol_vector_2d<number> | readonly [number, number];
        render(): void;
    }
}

declare namespace $ {
    class $mol_map_yandex_demo extends $mol_demo_large {
        title(): string;
        sub(): readonly any[];
        place_title(): string;
        place_addres(): string;
        place_content(): string;
        Place(): $$.$mol_map_yandex_mark;
        Map(): $$.$mol_map_yandex;
    }
}

declare namespace $ {
    class $mol_nav_demo extends $mol_list {
        title(): string;
        plugins(): readonly any[];
        rows(): readonly any[];
        Nav(): $$.$mol_nav;
        Hint(): $$.$mol_card;
        tab_current(val?: any): string;
        tab_list(): string[];
        Tab_list(): $$.$mol_switch;
        row_current(val?: any): string;
        row_list(): string[];
        Row_list(): $$.$mol_switch;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_number extends $mol_view {
        precision_view(): number;
        precision_change(): number;
        value(val?: any): number;
        sub(): readonly any[];
        precision(): number;
        value_string(val?: any): string;
        hint(): string;
        enabled(): boolean;
        string_enabled(): boolean;
        String(): $$.$mol_string;
        event_dec(val?: any): any;
        dec_enabled(): boolean;
        dec_icon(): $mol_icon_minus;
        Dec(): $mol_button_minor;
        event_inc(val?: any): any;
        inc_enabled(): boolean;
        inc_icon(): $mol_icon_plus;
        Inc(): $mol_button_minor;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_number extends $.$mol_number {
        event_dec(next?: Event): void;
        event_inc(next?: Event): void;
        value_string(next?: string): string;
    }
}

declare namespace $ {
    class $mol_number_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        zero(): $$.$mol_number;
        year(val?: any): number;
        one(): $$.$mol_number;
        two(): $$.$mol_number;
        age(val?: any): number;
        three(): $$.$mol_number;
        four(): $$.$mol_number;
        five(): $$.$mol_number;
        six(): $$.$mol_number;
        seven(): $$.$mol_number;
        eight(): $$.$mol_number;
        nine(): $$.$mol_number;
    }
}

declare namespace $ {
    class $mol_page_demo extends $mol_demo_large {
        title(): string;
        sub(): readonly any[];
        Button_tools(): $mol_button_minor;
        Text(): $mol_filler;
        Button_foot(): $mol_button_minor;
        Foot_content(): $mol_row;
        Page(): $$.$mol_page;
    }
}

declare namespace $ {
    class $mol_paginator extends $mol_view {
        sub(): readonly any[];
        backward_hint(): string;
        backward(event?: any): any;
        Backward_icon(): $mol_icon_chevron_left;
        Backward(): $mol_button_minor;
        value(val?: any): number;
        Value(): $mol_view;
        forward_hint(): string;
        forward(event?: any): any;
        Forward_icon(): $mol_icon_chevron_right;
        Forward(): $mol_button_minor;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_paginator extends $.$mol_paginator {
        backward(event: Event): void;
        forward(event: Event): void;
    }
}

declare namespace $ {
    class $mol_paginator_demo extends $mol_view {
        title(): string;
        sub(): readonly any[];
        page(val?: any): number;
        Pages(): $$.$mol_paginator;
    }
}

declare namespace $ {
    class $mol_plot_demo extends $mol_demo_large {
        title(): string;
        count(val?: any): number;
        sub(): readonly any[];
        saturation_series(): readonly any[];
        Saturation_fill(): $$.$mol_plot_fill;
        Saturation_line(): $$.$mol_plot_line;
        Saturation(): $$.$mol_plot_group;
        input_series(): readonly any[];
        Input_line(): $$.$mol_plot_line;
        Input_dots(): $$.$mol_plot_dot;
        Input(): $$.$mol_plot_group;
        output_series(): readonly any[];
        Output(): $$.$mol_plot_bar;
        Voltage_title(): string;
        Voltage(): $$.$mol_plot_ruler_vert;
        Time_title(): string;
        Time(): $$.$mol_plot_ruler_hor;
        Plot(): $$.$mol_plot_pane;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_demo extends $.$mol_plot_demo {
        series_x(): number[];
        input_series(): number[];
        output_series(): number[];
        saturation_series(): number[];
    }
}

declare namespace $ {
    class $mol_plot_map_heat extends $mol_plot_group {
        series_z(): readonly number[];
        graphs(): readonly any[];
        Level(z: any): $mol_plot_map_heat_level;
        Sample(): $mol_plot_graph_sample;
        level_graphs(): readonly any[];
        level_hint(z: any): string;
        level_points(z: any): readonly any[];
        level_opacity(z: any): string;
        level_diameter(): number;
        level_aspect(): number;
    }
    class $mol_plot_map_heat_level extends $mol_plot_dot {
        style(): {
            opacity: string;
            "stroke-width": number;
            color: string;
        };
        opacity(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_plot_map_heat extends $.$mol_plot_map_heat {
        levels(): number[];
        level_graphs(): $mol_plot_map_heat_level[];
        level_points(level: number): (readonly number[])[];
        level_opacity(level: number): string;
        level_diameter(): number;
        level_aspect(): number;
        level_hint(index: number): string;
    }
}

declare namespace $ {
    class $mol_plot_map_heat_demo extends $mol_demo_large {
        title(): string;
        count_x(): number;
        count_y(): number;
        count_z(): number;
        sub(): readonly any[];
        terrain_x(): readonly number[];
        terrain_y(): readonly number[];
        terrain_z(): readonly number[];
        Terrain(): $$.$mol_plot_map_heat;
        zoom(val?: any): number;
        Plot(): $$.$mol_plot_pane;
    }
}

declare namespace $.$$ {
    class $mol_plot_map_heat_demo extends $.$mol_plot_map_heat_demo {
        terrain_x(): number[];
        terrain_y(): number[];
        terrain_z(): number[];
    }
}

declare namespace $ {
    class $mol_pop_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        show_text(): string;
        Show(): $mol_button_minor;
        showed(): boolean;
        bubble_hint(): string;
        Content(): $mol_row;
        Pop(): $$.$mol_pop;
    }
}

declare namespace $ {
    class $mol_pop_over extends $mol_pop {
        showed(): boolean;
        attr(): {
            tabindex: number;
        };
        event(): {
            mouseenter: (event?: any) => any;
            mouseleave: (event?: any) => any;
            keydown: (event?: any) => any;
        };
        hovered(val?: any): boolean;
        event_show(event?: any): any;
        event_hide(event?: any): any;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_pop_over extends $.$mol_pop_over {
        event_show(event?: MouseEvent): void;
        event_hide(event?: MouseEvent): void;
        showed(): boolean;
    }
}

declare namespace $ {
    class $mol_pop_over_demo extends $mol_view {
        title(): string;
        sub(): readonly any[];
        file_title(): string;
        open_title(): string;
        Open(): $mol_button_minor;
        export_title(): string;
        Export(): $mol_button_minor;
        save_title(): string;
        Save(): $mol_button_minor;
        File_menu(): $$.$mol_list;
        File(): $$.$mol_pop_over;
        help_title(): string;
        updates_title(): string;
        Updates(): $mol_button_minor;
        about_title(): string;
        About(): $mol_button_minor;
        Help_menu(): $$.$mol_list;
        Help(): $$.$mol_pop_over;
        Menu(): $mol_row;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_portion_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        fist(): number;
        Empty(): $$.$mol_portion;
        second(): number;
        Partial(): $$.$mol_portion;
        third(): number;
        Full(): $$.$mol_portion;
    }
}

declare namespace $ {
    class $mol_row_demo_form extends $mol_view {
        title(): string;
        sub(): readonly any[];
        name_hint(): string;
        name(val?: any): string;
        suggest1(): string;
        suggest2(): string;
        Name(): $$.$mol_search;
        count_hint(): string;
        count(val?: any): any;
        Count(): $$.$mol_number;
        progress(): number;
        Progress(): $$.$mol_portion;
        publish_label(): string;
        publish(val?: any): boolean;
        Publish(): $mol_check_box;
        drop_title(): string;
        Drop(): $mol_button_minor;
        Row(): $mol_row;
    }
}

declare namespace $ {
    class $mol_row_demo_products extends $mol_view {
        title(): string;
        count(): number;
        Product(id: any): $$.$mol_card;
        sub(): readonly any[];
        product_title(id: any): string;
        products(): readonly any[];
        Products(): $mol_row;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_row_demo_products extends $.$mol_row_demo_products {
        products(): $mol_card[];
        product_title(id: string): string;
    }
}

declare namespace $ {
    class $mol_scroll_demo extends $mol_demo_large {
        title(): string;
        sub(): readonly any[];
        Filler0(): $mol_filler;
        Filler1(): $mol_filler;
        Filler2(): $mol_filler;
        Filler3(): $mol_filler;
        Filler4(): $mol_filler;
        Filler5(): $mol_filler;
        Filler6(): $mol_filler;
        Filler7(): $mol_filler;
        Filler8(): $mol_filler;
        Filler9(): $mol_filler;
        Content(): $$.$mol_list;
        Scroll(): $$.$mol_scroll;
    }
}

declare namespace $ {
    class $mol_search_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        suggests(): readonly any[];
        query(): string;
        Search(): $$.$mol_search;
    }
}

declare namespace $.$$ {
    class $mol_search_demo extends $.$mol_search_demo {
        suggests(): any[];
    }
}

declare namespace $ {
    class $mol_section extends $mol_list {
        rows(): readonly any[];
        head(): readonly any[];
        Head(): $mol_view;
        Content(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_section_demo extends $mol_view {
        title(): string;
        sub(): readonly any[];
        Section_content(): $mol_filler;
        Section(): $mol_section;
    }
}

declare namespace $ {
    class $mol_icon_dots_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_select extends $mol_pick {
        dictionary(val?: any): {};
        options(): readonly string[];
        value(val?: any): string;
        Option_row(id: any): $mol_button_minor;
        No_options(): $mol_view;
        plugins(): readonly any[];
        hint(): string;
        bubble_content(): readonly any[];
        Filter(): $$.$mol_string;
        Trigger_icon(): $mol_icon_dots_vertical;
        event_select(id: any, event?: any): any;
        option_label(id: any): string;
        filter_pattern(val?: any): string;
        Option_label(id: any): $$.$mol_dimmer;
        option_content(id: any): readonly any[];
        no_options_message(): string;
        nav_components(): readonly $mol_view[];
        option_focused(component?: any): any;
        nav_cycle(val?: any): boolean;
        Nav(): $$.$mol_nav;
        menu_content(): readonly $mol_view[];
        Menu(): $$.$mol_list;
        submit(event?: any): any;
        enabled(): boolean;
    }
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $mol_string | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_button_minor | $mol_string)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_select_demo_colors extends $mol_view {
        title(): string;
        sub(): readonly any[];
        color(val?: any): string;
        colors(): {};
        color_name(id: any): string;
        option_color(id: any): string;
        Color_preview(id: any): $mol_select_colors_color_preview;
        Color_name(id: any): $$.$mol_dimmer;
        Color_option(id: any): $mol_view;
        option_content(id: any): readonly any[];
        color_filter(): string;
        Color(): $$.$mol_select;
    }
    class $mol_select_colors_color_preview extends $mol_view {
        style(): {
            background: string;
        };
        color(): string;
    }
}

declare namespace $ {
    const $mol_colors: {
        readonly aliceblue: "#f0f8ff";
        readonly antiquewhite: "#faebd7";
        readonly aqua: "#00ffff";
        readonly aquamarine: "#7fffd4";
        readonly azure: "#f0ffff";
        readonly beige: "#f5f5dc";
        readonly bisque: "#ffe4c4";
        readonly black: "#000000";
        readonly blanchedalmond: "#ffebcd";
        readonly blue: "#0000ff";
        readonly blueviolet: "#8a2be2";
        readonly brown: "#a52a2a";
        readonly burlywood: "#deb887";
        readonly cadetblue: "#5f9ea0";
        readonly chartreuse: "#7fff00";
        readonly chocolate: "#d2691e";
        readonly coral: "#ff7f50";
        readonly cornflowerblue: "#6495ed";
        readonly cornsilk: "#fff8dc";
        readonly crimson: "#dc143c";
        readonly cyan: "#00ffff";
        readonly darkblue: "#00008b";
        readonly darkcyan: "#008b8b";
        readonly darkgoldenrod: "#b8860b";
        readonly darkgray: "#a9a9a9";
        readonly darkgreen: "#006400";
        readonly darkgrey: "#a9a9a9";
        readonly darkkhaki: "#bdb76b";
        readonly darkmagenta: "#8b008b";
        readonly darkolivegreen: "#556b2f";
        readonly darkorange: "#ff8c00";
        readonly darkorchid: "#9932cc";
        readonly darkred: "#8b0000";
        readonly darksalmon: "#e9967a";
        readonly darkseagreen: "#8fbc8f";
        readonly darkslateblue: "#483d8b";
        readonly darkslategrey: "#2f4f4f";
        readonly darkturquoise: "#00ced1";
        readonly darkviolet: "#9400d3";
        readonly deeppink: "#ff1493";
        readonly deepskyblue: "#00bfff";
        readonly dimgray: "#696969";
        readonly dimgrey: "#696969";
        readonly dodgerblue: "#1e90ff";
        readonly firebrick: "#b22222";
        readonly floralwhite: "#fffaf0";
        readonly forestgreen: "#228b22";
        readonly fuchsia: "#ff00ff";
        readonly gainsboro: "#dcdcdc";
        readonly ghostwhite: "#f8f8ff";
        readonly gold: "#ffd700";
        readonly goldenrod: "#daa520";
        readonly gray: "#808080";
        readonly green: "#008000";
        readonly greenyellow: "#adff2f";
        readonly grey: "#808080";
        readonly honeydew: "#f0fff0";
        readonly hotpink: "#ff69b4";
        readonly indianred: "#cd5c5c";
        readonly indigo: "#4b0082";
        readonly ivory: "#fffff0";
        readonly khaki: "#f0e68c";
        readonly lavender: "#e6e6fa";
        readonly lavenderblush: "#fff0f5";
        readonly lawngreen: "#7cfc00";
        readonly lemonchiffon: "#fffacd";
        readonly lightblue: "#add8e6";
        readonly lightcoral: "#f08080";
        readonly lightcyan: "#e0ffff";
        readonly lightgoldenrodyellow: "#fafad2";
        readonly lightgray: "#d3d3d3";
        readonly lightgreen: "#90ee90";
        readonly lightgrey: "#d3d3d3";
        readonly lightpink: "#ffb6c1";
        readonly lightsalmon: "#ffa07a";
        readonly lightseagreen: "#20b2aa";
        readonly lightskyblue: "#87cefa";
        readonly lightslategray: "#778899";
        readonly lightslategrey: "#778899";
        readonly lightsteelblue: "#b0c4de";
        readonly lightyellow: "#ffffe0";
        readonly lime: "#00ff00";
        readonly limegreen: "#32cd32";
        readonly linen: "#faf0e6";
        readonly magenta: "#ff00ff";
        readonly maroon: "#800000";
        readonly mediumaquamarine: "#66cdaa";
        readonly mediumblue: "#0000cd";
        readonly mediumorchid: "#ba55d3";
        readonly mediumpurple: "#9370db";
        readonly mediumseagreen: "#3cb371";
        readonly mediumslateblue: "#7b68ee";
        readonly mediumspringgreen: "#00fa9a";
        readonly mediumturquoise: "#48d1cc";
        readonly mediumvioletred: "#c71585";
        readonly midnightblue: "#191970";
        readonly mintcream: "#f5fffa";
        readonly mistyrose: "#ffe4e1";
        readonly moccasin: "#ffe4b5";
        readonly navajowhite: "#ffdead";
        readonly navy: "#000080";
        readonly oldlace: "#fdf5e6";
        readonly olive: "#808000";
        readonly olivedrab: "#6b8e23";
        readonly orange: "#ffa500";
        readonly orangered: "#ff4500";
        readonly orchid: "#da70d6";
        readonly palegoldenrod: "#eee8aa";
        readonly palegreen: "#98fb98";
        readonly paleturquoise: "#afeeee";
        readonly palevioletred: "#db7093";
        readonly papayawhip: "#ffefd5";
        readonly peachpuff: "#ffdab9";
        readonly peru: "#cd853f";
        readonly pink: "#ffc0cb";
        readonly plum: "#dda0dd";
        readonly powderblue: "#b0e0e6";
        readonly purple: "#800080";
        readonly rebeccapurple: "#663399";
        readonly red: "#ff0000";
        readonly rosybrown: "#bc8f8f";
        readonly royalblue: "#4169e1";
        readonly saddlebrown: "#8b4513";
        readonly salmon: "#fa8072";
        readonly sandybrown: "#f4a460";
        readonly seagreen: "#2e8b57";
        readonly seashell: "#fff5ee";
        readonly sienna: "#a0522d";
        readonly silver: "#c0c0c0";
        readonly skyblue: "#87ceeb";
        readonly slateblue: "#6a5acd";
        readonly slategray: "#708090";
        readonly slategrey: "#708090";
        readonly snow: "#fffafa";
        readonly springgreen: "#00ff7f";
        readonly steelblue: "#4682b4";
        readonly tan: "#d2b48c";
        readonly teal: "#008080";
        readonly thistle: "#d8bfd8";
        readonly tomato: "#ff6347";
        readonly turquoise: "#40e0d0";
        readonly violet: "#ee82ee";
        readonly wheat: "#f5deb3";
        readonly white: "#ffffff";
        readonly whitesmoke: "#f5f5f5";
        readonly yellow: "#ffff00";
        readonly yellowgreen: "#9acd32";
    };
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_select_demo_colors extends $.$mol_select_demo_colors {
        color_name(id: string): any;
        option_color(id: string): any;
        colors(): {
            aliceblue: "#f0f8ff";
            antiquewhite: "#faebd7";
            aqua: "#00ffff";
            aquamarine: "#7fffd4";
            azure: "#f0ffff";
            beige: "#f5f5dc";
            bisque: "#ffe4c4";
            black: "#000000";
            blanchedalmond: "#ffebcd";
            blue: "#0000ff";
            blueviolet: "#8a2be2";
            brown: "#a52a2a";
            burlywood: "#deb887";
            cadetblue: "#5f9ea0";
            chartreuse: "#7fff00";
            chocolate: "#d2691e";
            coral: "#ff7f50";
            cornflowerblue: "#6495ed";
            cornsilk: "#fff8dc";
            crimson: "#dc143c";
            cyan: "#00ffff";
            darkblue: "#00008b";
            darkcyan: "#008b8b";
            darkgoldenrod: "#b8860b";
            darkgray: "#a9a9a9";
            darkgreen: "#006400";
            darkgrey: "#a9a9a9";
            darkkhaki: "#bdb76b";
            darkmagenta: "#8b008b";
            darkolivegreen: "#556b2f";
            darkorange: "#ff8c00";
            darkorchid: "#9932cc";
            darkred: "#8b0000";
            darksalmon: "#e9967a";
            darkseagreen: "#8fbc8f";
            darkslateblue: "#483d8b";
            darkslategrey: "#2f4f4f";
            darkturquoise: "#00ced1";
            darkviolet: "#9400d3";
            deeppink: "#ff1493";
            deepskyblue: "#00bfff";
            dimgray: "#696969";
            dimgrey: "#696969";
            dodgerblue: "#1e90ff";
            firebrick: "#b22222";
            floralwhite: "#fffaf0";
            forestgreen: "#228b22";
            fuchsia: "#ff00ff";
            gainsboro: "#dcdcdc";
            ghostwhite: "#f8f8ff";
            gold: "#ffd700";
            goldenrod: "#daa520";
            gray: "#808080";
            green: "#008000";
            greenyellow: "#adff2f";
            grey: "#808080";
            honeydew: "#f0fff0";
            hotpink: "#ff69b4";
            indianred: "#cd5c5c";
            indigo: "#4b0082";
            ivory: "#fffff0";
            khaki: "#f0e68c";
            lavender: "#e6e6fa";
            lavenderblush: "#fff0f5";
            lawngreen: "#7cfc00";
            lemonchiffon: "#fffacd";
            lightblue: "#add8e6";
            lightcoral: "#f08080";
            lightcyan: "#e0ffff";
            lightgoldenrodyellow: "#fafad2";
            lightgray: "#d3d3d3";
            lightgreen: "#90ee90";
            lightgrey: "#d3d3d3";
            lightpink: "#ffb6c1";
            lightsalmon: "#ffa07a";
            lightseagreen: "#20b2aa";
            lightskyblue: "#87cefa";
            lightslategray: "#778899";
            lightslategrey: "#778899";
            lightsteelblue: "#b0c4de";
            lightyellow: "#ffffe0";
            lime: "#00ff00";
            limegreen: "#32cd32";
            linen: "#faf0e6";
            magenta: "#ff00ff";
            maroon: "#800000";
            mediumaquamarine: "#66cdaa";
            mediumblue: "#0000cd";
            mediumorchid: "#ba55d3";
            mediumpurple: "#9370db";
            mediumseagreen: "#3cb371";
            mediumslateblue: "#7b68ee";
            mediumspringgreen: "#00fa9a";
            mediumturquoise: "#48d1cc";
            mediumvioletred: "#c71585";
            midnightblue: "#191970";
            mintcream: "#f5fffa";
            mistyrose: "#ffe4e1";
            moccasin: "#ffe4b5";
            navajowhite: "#ffdead";
            navy: "#000080";
            oldlace: "#fdf5e6";
            olive: "#808000";
            olivedrab: "#6b8e23";
            orange: "#ffa500";
            orangered: "#ff4500";
            orchid: "#da70d6";
            palegoldenrod: "#eee8aa";
            palegreen: "#98fb98";
            paleturquoise: "#afeeee";
            palevioletred: "#db7093";
            papayawhip: "#ffefd5";
            peachpuff: "#ffdab9";
            peru: "#cd853f";
            pink: "#ffc0cb";
            plum: "#dda0dd";
            powderblue: "#b0e0e6";
            purple: "#800080";
            rebeccapurple: "#663399";
            red: "#ff0000";
            rosybrown: "#bc8f8f";
            royalblue: "#4169e1";
            saddlebrown: "#8b4513";
            salmon: "#fa8072";
            sandybrown: "#f4a460";
            seagreen: "#2e8b57";
            seashell: "#fff5ee";
            sienna: "#a0522d";
            silver: "#c0c0c0";
            skyblue: "#87ceeb";
            slateblue: "#6a5acd";
            slategray: "#708090";
            slategrey: "#708090";
            snow: "#fffafa";
            springgreen: "#00ff7f";
            steelblue: "#4682b4";
            tan: "#d2b48c";
            teal: "#008080";
            thistle: "#d8bfd8";
            tomato: "#ff6347";
            turquoise: "#40e0d0";
            violet: "#ee82ee";
            wheat: "#f5deb3";
            white: "#ffffff";
            whitesmoke: "#f5f5f5";
            yellow: "#ffff00";
            yellowgreen: "#9acd32";
            '': string;
        };
    }
}

declare namespace $ {
    class $mol_select_demo_month extends $mol_view {
        title(): string;
        sub(): readonly any[];
        month(val?: any): string;
        months(): {
            jan: string;
            feb: string;
            mar: string;
            apr: string;
            may: string;
            jun: string;
            jul: string;
            aug: string;
            sep: string;
            oct: string;
            nov: string;
            dec: string;
        };
        Month(): $$.$mol_select;
    }
}

declare namespace $ {
    class $mol_select_demo_priority extends $mol_view {
        title(): string;
        sub(): readonly any[];
        priority(val?: any): string;
        Priority(): $$.$mol_select;
    }
}

declare namespace $ {
    class $mol_select_list extends $mol_view {
        value(val?: any): readonly string[];
        dictionary(): {};
        Badge(index: any): $mol_button_minor;
        Pick(): $$.$mol_select;
        badge_title(index: any): string;
        remove(index: any, event?: any): any;
        badge_hint(): string;
        enabled(): boolean;
        drop_enabled(): boolean;
        options(): readonly string[];
        options_pickable(): readonly string[];
        pick(val?: any): string;
        option_title(key: any): string;
        pick_enabled(): boolean;
        pick_hint(): string;
        Pick_icon(): $mol_icon_plus;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_select_list extends $.$mol_select_list {
        value(val?: string[]): readonly string[];
        pick(key: string): string;
        options(): readonly string[];
        options_pickable(): readonly string[];
        option_title(key: string): string;
        badge_title(index: number): string;
        pick_enabled(): boolean;
        sub(): ($mol_button_minor | $mol_select)[];
        title(): string;
        remove(index: number): void;
    }
}

declare namespace $ {
    class $mol_select_list_demo extends $mol_list {
        title(): string;
        rows(): readonly any[];
        friends(val?: any): readonly any[];
        suggestions(): {
            jocker: string;
            harley: string;
            penguin: string;
            riddler: string;
            bane: string;
            freeze: string;
            clay: string;
            mask: string;
        };
        Friends(): $$.$mol_select_list;
        Friends_disabled(): $$.$mol_select_list;
    }
}

declare namespace $ {
    class $mol_icon_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_speck_demo extends $mol_demo_small {
        sub(): readonly any[];
        Link_speck(): $mol_speck;
        Link_icon(): $mol_icon_settings;
        Link(): $$.$mol_link;
        string_speck(): string;
        String_speck(): $mol_speck;
        String_field(): $$.$mol_string;
        String(): $mol_view;
        notification_count(): number;
        Button_speck(): $mol_speck;
        Button_icon(): $mol_icon_menu;
        Button(): $mol_button_minor;
        Message_speck(): $mol_speck;
        message_text(): string;
        Message(): $$.$mol_paragraph;
    }
}

declare namespace $ {
    class $mol_defer extends $mol_object {
        run: () => void;
        constructor(run: () => void);
        destructor(): void;
        static all: $mol_defer[];
        static timer: any;
        static scheduleNative: (handler: () => void) => any;
        static schedule(): void;
        static unschedule(): void;
        static add(defer: $mol_defer): void;
        static drop(defer: $mol_defer): void;
        static run(): void;
    }
}

declare namespace $ {
    class $mol_speech extends $mol_plugin {
        static speaker(): SpeechSynthesis;
        static voices(): SpeechSynthesisVoice[];
        static say(text: string): null;
        static speaking(next?: boolean): boolean;
        static hearer(): any;
        static hearing(next?: boolean): boolean;
        static event_result(event?: null | Event & {
            results: Array<{
                transcript: string;
            }[] & {
                isFinal: boolean;
            }>;
        }): (Event & {
            results: Array<{
                transcript: string;
            }[] & {
                isFinal: boolean;
            }>;
        }) | null;
        static recognitions(): ({
            transcript: string;
        }[] & {
            isFinal: boolean;
        })[];
        static commands(): string[];
        static text(): string;
        commands_skip(next?: number): number;
        render(): null;
        event_catch(found?: string[]): boolean;
        patterns(): readonly string[];
        matchers(): RegExp[];
        prefix(): string;
        suffix(): string;
    }
}

declare namespace $ {
    class $mol_speech_demo extends $mol_demo_small {
        sub(): readonly any[];
        Toggle_icon(): $mol_icon_microphone;
        hearing(val?: any): boolean;
        Toggle(): $mol_check_icon;
        message(): string;
        Message(): $mol_row;
        speak(val?: any): any;
        Speak(): $mol_button_major;
    }
}

declare namespace $.$$ {
    class $mol_speech_demo extends $.$mol_speech_demo {
        hearing(next?: boolean): boolean;
        message(): string;
        speak(): void;
    }
}

declare namespace $ {
    class $mol_string_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        name(val?: any): string;
        Simple(): $$.$mol_string;
        Hint(): $$.$mol_string;
        name2(val?: any): string;
        Filled(): $$.$mol_string;
        Disabled(): $$.$mol_string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_string_button extends $mol_string {
    }
}

declare namespace $ {
    class $mol_switch_demo extends $mol_list {
        title(): string;
        rows(): readonly any[];
        color(val?: any): string;
        option_red(): string;
        option_green(): string;
        option_blue(): string;
        Enabled(): $$.$mol_switch;
        Disabled(): $$.$mol_switch;
    }
}

declare namespace $ {
    class $mol_text_code_token extends $mol_dimmer {
        attr(): {
            mol_text_code_token_type: string;
        };
        type(): string;
    }
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name(): string;
        type(): string;
        attr(): {
            href: string;
            target: string;
            mol_text_code_token_type: string;
        };
        haystack(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_text_code_row extends $mol_paragraph {
        text(): string;
        minimal_height(): number;
        numb_showed(): boolean;
        Numb(): $mol_view;
        Token(id: any): $mol_text_code_token;
        Token_link(id: any): $mol_text_code_token_link;
        numb(): number;
        token_type(id: any): string;
        token_text(id: any): string;
        highlight(): string;
    }
}

declare namespace $ {
    class $mol_syntax2<Lexems extends {
        [name: string]: RegExp;
    }> {
        lexems: Lexems;
        constructor(lexems: Lexems);
        rules: {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        regexp: RegExp;
        tokenize(text: string, handle: (name: string, found: string, chunks: string[], offset: number) => void): void;
        parse(text: string, handlers: {
            [key in keyof Lexems | '']: (found: string, chunks: string[], offset: number) => void;
        }): void;
    }
}

declare namespace $ {
    var $mol_syntax2_md_flow: $mol_syntax2<{
        quote: RegExp;
        header: RegExp;
        list: RegExp;
        code: RegExp;
        'code-indent': RegExp;
        table: RegExp;
        block: RegExp;
    }>;
    var $mol_syntax2_md_line: $mol_syntax2<{
        strong: RegExp;
        emphasis: RegExp;
        code3: RegExp;
        code: RegExp;
        strike: RegExp;
        'text-link': RegExp;
        'image-link': RegExp;
    }>;
    const $mol_syntax2_md_code: $mol_syntax2<{
        'code-docs': RegExp;
        'code-comment-block': RegExp;
        'code-link': RegExp;
        'code-comment-inline': RegExp;
        'code-string': RegExp;
        'code-number': RegExp;
        'code-call': RegExp;
        'code-field': RegExp;
        'code-keyword': RegExp;
        'code-global': RegExp;
        'code-decorator': RegExp;
        'code-tag': RegExp;
        'code-punctuation': RegExp;
    }>;
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_text_code_row extends $.$mol_text_code_row {
        maximal_width(): number;
        tokens(path: number[]): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        sub(): $mol_view[];
        row_content(path: number[]): $mol_text_code_token[];
        Token(path: number[]): $mol_text_code_token;
        token_type(path: number[]): string;
        token_content(path: number[]): (string | $mol_text_code_token)[];
        token_text(path: number[]): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
    class $mol_text_code extends $mol_list {
        attr(): {
            mol_text_code_sidebar_showed: boolean;
        };
        text(): string;
        text_lines(): readonly string[];
        Row(id: any): $$.$mol_text_code_row;
        sidebar_showed(): boolean;
        row_numb(id: any): number;
        row_text(id: any): string;
        highlight(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_text_code extends $.$mol_text_code {
        text_lines(): readonly string[];
        rows(): $mol_text_code_row[];
        row_text(index: number): string;
        row_numb(index: number): number;
    }
}

declare namespace $ {
    class $mol_text_code_demo extends $mol_view {
        title(): string;
        sub(): readonly any[];
        source(): string;
        Text(): $$.$mol_text_code;
    }
}

declare namespace $.$$ {
    class $mol_text_code_demo extends $.$mol_text_code_demo {
        source(): string;
    }
}

declare namespace $ {
    class $mol_text extends $mol_list {
        uri_base(): string;
        text(): string;
        tokens(): readonly any[];
        Quote(id: any): $$.$mol_text;
        Row(id: any): $mol_text_row;
        Span(id: any): $mol_text_span;
        String(id: any): $mol_text_string;
        Link(id: any): $mol_text_link;
        Image(id: any): $mol_text_image;
        Header(id: any): $mol_text_header;
        Code(id: any): $$.$mol_text_code;
        Table(id: any): $$.$mol_grid;
        Table_row(id: any): $mol_grid_row;
        Table_cell(id: any): $mol_grid_cell;
        Table_cell_head(id: any): $mol_float;
        quote_text(id: any): string;
        block_content(id: any): readonly any[];
        block_type(id: any): string;
        highlight(): string;
        link_target(id: any): string;
        header_level(id: any): number;
        header_content(id: any): readonly any[];
        code_text(id: any): string;
        table_head_cells(id: any): readonly any[];
        table_rows(id: any): readonly any[];
        table_cells(id: any): readonly any[];
        table_cell_content(id: any): readonly any[];
    }
    class $mol_text_row extends $mol_paragraph {
        attr(): {
            mol_text_type: string;
        };
        type(): string;
    }
    class $mol_text_header extends $mol_paragraph {
        dom_name(): string;
        attr(): {
            mol_text_header_level: number;
        };
        sub(): readonly any[];
        level(val?: any): number;
        content(): readonly any[];
    }
    class $mol_text_span extends $mol_paragraph {
        dom_name(): string;
        attr(): {
            mol_text_type: string;
        };
        sub(): readonly any[];
        type(val?: any): string;
        content(val?: any): readonly any[];
    }
    class $mol_text_string extends $mol_dimmer {
        dom_name(): string;
        haystack(val?: any): string;
    }
    class $mol_text_link extends $mol_link_iconed {
        attr(): {
            mol_text_type: string;
            href: string;
            title: string;
            target: string;
            download: string;
            mol_link_current: boolean;
        };
        uri(): string;
        content(val?: any): readonly any[];
        type(val?: any): string;
        link(val?: any): string;
    }
    class $mol_text_image extends $mol_view {
        dom_name(): string;
        attr(): {
            allowfullscreen: boolean;
            mol_text_type: string;
            data: string;
        };
        sub(): readonly any[];
        type(val?: any): string;
        link(val?: any): string;
        title(val?: any): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        tokens(): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        rows(): ($mol_grid | $mol_text_code | $mol_text | $mol_text_row | $mol_text_header)[];
        header_level(index: number): number;
        header_content(index: number): $mol_view[];
        code_text(index: number): string;
        quote_text(index: number): string;
        block_type(index: number): string;
        cell_contents(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $mol_float[];
        table_cells(id: {
            block: number;
            row: number;
        }): $mol_grid_cell[];
        table_cell_content(id: {
            block: number;
            row: number;
            cell: number;
        }): $mol_view[];
        uri_base(): string;
        uri_resolve(uri: string): string;
        text2spans(prefix: string, text: string): $mol_view[];
        code2spans(prefix: string, text: string): $mol_view[];
        block_content(indexBlock: number): ($mol_view | string)[];
    }
}

declare namespace $ {
    class $mol_text_demo extends $mol_view {
        title(): string;
        sub(): readonly any[];
        Text(): $$.$mol_text;
    }
}

declare namespace $ {
    class $mol_textarea extends $mol_view {
        attr(): {
            mol_textarea_clickable: boolean;
            mol_textarea_sidebar_showed: boolean;
        };
        event(): {
            keydown: (event?: any) => any;
            pointermove: (event?: any) => any;
        };
        sub(): readonly any[];
        clickable(val?: any): boolean;
        sidebar_showed(): boolean;
        press(event?: any): any;
        hover(event?: any): any;
        value(val?: any): string;
        hint(): string;
        enabled(): boolean;
        length_max(): number;
        selection(val?: any): readonly number[];
        Edit(): $$.$mol_string;
        row_numb(index: any): number;
        highlight(): string;
        View(): $$.$mol_text_code;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        indent_inc(): void;
        indent_dec(): void;
        hover(event: PointerEvent): void;
        press(event: KeyboardEvent): void;
        row_numb(index: number): number;
    }
}

declare namespace $ {
    class $mol_textarea_demo extends $mol_list {
        title(): string;
        rows(): readonly any[];
        empty_descr(val?: any): string;
        Empty_descr(): $$.$mol_textarea;
        filled_descr(val?: any): string;
        Filled_descr(): $$.$mol_textarea;
        Disabled(): $$.$mol_textarea;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_toolbar extends $mol_view {
        attr(): {
            mol_toolbar_expanded: boolean;
        };
        sub(): readonly any[];
        items(): readonly $mol_view[];
        Bar(): $mol_view;
        expanded(val?: any): boolean;
        Expand(): $$.$mol_check_expand;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_toolbar extends $.$mol_toolbar {
    }
}

declare namespace $ {
    class $mol_icon_content_copy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_cut extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_paste extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_toolbar_demo extends $mol_demo_small {
        title(): string;
        sub(): readonly any[];
        search_hint(): string;
        Search(): $$.$mol_string;
        replace_hint(): string;
        Replace(): $$.$mol_string;
        approve_label(): string;
        Approve(): $mol_button_major;
        decline_label(): string;
        Decline(): $mol_button_minor;
        Copy_icon(): $mol_icon_content_copy;
        Copy(): $mol_button_minor;
        Cut_icon(): $mol_icon_content_cut;
        Cut(): $mol_button_minor;
        Paste_icon(): $mol_icon_content_paste;
        Paste(): $mol_button_minor;
        Delete_icon(): $mol_icon_delete;
        Delete(): $mol_button_minor;
        Toolbar(): $$.$mol_toolbar;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_video_player extends $mol_view {
        dom_name(): string;
        playing(val?: any): boolean;
        volume(val?: any): number;
        time(val?: any): number;
        duration(): number;
        attr(): {
            src: string;
            controls: boolean;
        };
        event(): {
            volumechange: (event?: any) => any;
            timeupdate: (event?: any) => any;
            durationchange: (event?: any) => any;
            play: (event?: any) => any;
            pause: (event?: any) => any;
        };
        uri(): string;
        controls(): boolean;
        revolume(event?: any): any;
        retime(event?: any): any;
        redurate(event?: any): any;
        play(event?: any): any;
        pause(event?: any): any;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_video_player extends $.$mol_video_player {
        dom_node(): HTMLVideoElement;
        volume(next?: number): number;
        time(next?: number): number;
        duration(): number;
        playing(next?: boolean): boolean;
        play(): void;
        pause(): void;
    }
}

declare namespace $ {
    class $mol_icon_upload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_button_open extends $mol_button_minor {
        sub(): readonly any[];
        Icon(): $mol_icon_upload;
        accept(): string;
        multiple(): boolean;
        files(next?: any): readonly any[];
        Native(): $$.$mol_button_open_native;
    }
    class $mol_button_open_native extends $mol_view {
        dom_name(): string;
        files(next?: any): readonly any[];
        attr(): {
            type: string;
            accept: string;
            multiple: boolean;
        };
        event(): {
            change: (next?: any) => any;
        };
        accept(): string;
        multiple(): boolean;
        picked(next?: any): any;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_button_open_native extends $.$mol_button_open_native {
        dom_node(): HTMLInputElement;
        picked(): void;
    }
}

declare namespace $ {
    class $mol_icon_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_video_player_demo extends $mol_demo_large {
        title(): string;
        sub(): readonly any[];
        files(): readonly any[];
        Open(): $mol_button_open;
        Playing_icon(): $mol_icon_play;
        Playing(): $mol_check_icon;
        Duration(): $$.$mol_paragraph;
        Duration_labeler(): $mol_labeler;
        Time(): $$.$mol_number;
        Time_labeler(): $mol_labeler;
        Volume(): $$.$mol_number;
        Volume_labeler(): $mol_labeler;
        Controls(): $mol_row;
        uri(): string;
        playing(val?: any): boolean;
        volume(val?: any): number;
        time(val?: any): number;
        duration(): number;
        Player(): $$.$mol_video_player;
    }
}

declare namespace $.$$ {
    class $mol_video_player_demo extends $.$mol_video_player_demo {
        uri(): string;
    }
}

declare namespace $ {
    class $mol_status extends $mol_view {
        status(): any;
        minimal_height(): number;
        minimal_width(): number;
        sub(): readonly any[];
        message(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_status extends $.$mol_status {
        message(): any;
    }
}

declare namespace $ {
    class $mol_theme_auto extends $mol_plugin {
        attr(): {
            mol_theme: string;
        };
        theme(): string;
    }
}

declare namespace $.$$ {
    class $mol_theme_auto extends $.$mol_theme_auto {
        theme(): "$mol_theme_light" | "$mol_theme_dark";
    }
}

declare namespace $ {
    class $mol_icon_github_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_link_source extends $mol_link {
        hint(): string;
        sub(): readonly any[];
        Icon(): $mol_icon_github_circle;
    }
}

declare namespace $ {
    class $mol_icon_brightness_6 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_lights_toggle extends $mol_check_icon {
        Icon(): $mol_icon_brightness_6;
        hint(): string;
        checked(val?: any): boolean;
        Lights_icon(): $mol_icon_brightness_6;
        lights(val?: any): boolean;
    }
}

declare namespace $.$$ {
    class $mol_lights_toggle extends $.$mol_lights_toggle {
        lights(next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_icon_code_braces extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_app_demo extends $mol_book2 {
        editor_title(): string;
        source_prefix(): string;
        pages(): readonly any[];
        plugins(): readonly any[];
        Menu(): $$.$mol_app_demo_menu;
        chat_pages(id: any): $$.$mol_page[];
        Detail(id: any): $mol_app_demo_detail;
        Welcome(): $$.$mol_scroll;
        Detail_empty_message(): $$.$mol_status;
        detail_title(): string;
        blocks(): readonly any[];
        Theme(): $$.$mol_theme_auto;
        names_demo_all(): readonly string[];
        chat_seed(id: any): string;
        source_link(): string;
        edit_uri(): string;
        Demo(): $mol_view;
        welcome_text(): string;
        Welcome_text(): $$.$mol_text;
        detail_empty_prefix(): string;
        selected(): string;
        detail_empty_postfix(): string;
    }
    class $mol_app_demo_menu extends $mol_page {
        names(): readonly string[];
        title(): string;
        tools(): readonly any[];
        Body(): $$.$mol_scroll;
        Option(id: any): $$.$mol_link;
        sources_uri(): string;
        Sources(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        filter(val?: any): string;
        Filter(): $$.$mol_search;
        options(): readonly any[];
        Options(): $$.$mol_list;
        List(): $$.$mol_list;
        option_arg(id: any): {};
        option_title(id: any): string;
        Option_title(id: any): $$.$mol_dimmer;
    }
    class $mol_app_demo_detail extends $mol_page {
        tools(): readonly any[];
        body(): readonly any[];
        chat_seed(): string;
        chat_pages(): $$.$mol_page[];
        Chat(): $$.$mol_chat;
        source_link(): string;
        source_hint(): string;
        Source_icon(): $mol_icon_code_braces;
        Source_link(): $$.$mol_link;
        edit_hint(): string;
        Edit_speck(): $mol_speck;
        Edit_icon(): $mol_icon_settings;
        edit_uri(): string;
        Edit(): $$.$mol_link;
        close_hint(): string;
        Close_icon(): $mol_icon_cross;
        close_arg(): {
            demo: any;
        };
        Close(): $$.$mol_link;
        Demo(): $mol_view;
    }
}

declare namespace $ {
    class $mol_app_demo_main extends $mol_page {
        minimal_width(): number;
        title(): string;
        tools(): readonly any[];
        body(): readonly any[];
        Lights(): $$.$mol_lights_toggle;
        project_uri(): string;
        Project(): $mol_link_source;
        description(): string;
        Description(): $$.$mol_text;
    }
}

declare namespace $.$$ {
    class $mol_app_demo_main extends $.$mol_app_demo_main {
        description(): string;
    }
}

declare namespace $ {
    function $mol_atom2_dict<Key extends PropertyKey, Value>(config: {
        get?: (key: Key, dict: Record<Key, Value>) => Value;
        set?: (value: Value, key: Key, dict: Record<Key, Value>) => Value;
        abort?: (value: Value, key: Key, dict: Record<Key, Value>) => boolean;
    }): Record<Key, Value>;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_app_demo extends $.$mol_app_demo {
        detail_title(): string;
        names_demo_all(): string[];
        selected(): string;
        selected_class_name(): string;
        Widget(): Record<string, $mol_view>;
        names_demo(): string[];
        blocks(): $mol_view[];
        Demo(): $mol_view;
        chat_seed(id: string): string;
        logo_uri(): string;
        source_link(): string;
        chat_link(): string;
        edit_uri(): string;
    }
    class $mol_app_demo_menu extends $.$mol_app_demo_menu {
        names_filtered(): string[];
        options(): $mol_link[];
        option_arg(id: string): {
            demo: string;
        };
        option_title(id: string): string;
    }
}

declare namespace $ {
    function $mol_env(): Record<string, string | undefined>;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_exec(this: $, dir: string, command: string, ...args: string[]): any;
}

export = $;
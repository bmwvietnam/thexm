(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
    new MutationObserver(i = > {
        for (const r of i) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const r = {};
        return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }
    function s(i) {
        if (i.ep) return;
        i.ep = !0;
        const r = n(i);
        fetch(i.href, r)
    }
})();

function Un(e, t) {
    const n = Object.create(null), s = e.split(",");
    for (let i = 0; i < s.length; i++) n[s[i]] = !0;
    return t ? i = > !! n[i.toLowerCase()] : i = > !! n[i]
}
function kn(e) {
    if (P(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n], i = ee(s) ? nr(s) : kn(s);
            if (i) for (const r in i) t[r] = i[r]
        }
        return t
    } else {
        if (ee(e)) return e;
        if (Y(e)) return e
    }
}
const Gi = /;(?![^(]*\))/g, er = /:([^]+)/, tr = /\/\*.*?\*\//gs;

function nr(e) {
    const t = {};
    return e.replace(tr, "").split(Gi).forEach(n = > {
        if (n) {
            const s = n.split(er);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }), t
}
function Xn(e) {
    let t = "";
    if (ee(e)) t = e;
    else if (P(e)) for (let n = 0; n < e.length; n++) {
        const s = Xn(e[n]);
        s && (t += s + " ")
    } else if (Y(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}
const sr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ir = Un(sr);

function qs(e) {
    return !!e || e === ""
}
const rr = e = > ee(e) ? e : e == null ? "" : P(e) || Y(e) && (e.toString === Gs || !S(e.toString)) ? JSON.stringify(e, Js, 2) : String(e), Js = (e, t) = > t && t.__v_isRef ? Js(e, t.value) : lt(t) ? {
    [`Map($ {
        t.size
    })`]: [...t.entries()].reduce((n, [s, i]) = > (n[`$ {
        s
    } = > `] = i, n), {})
} : Qs(t) ? {
    [`Set($ {
        t.size
    })`]: [...t.values()]
} : Y(t) && !P(t) && !ei(t) ? String(t) : t, K = {}, ot = [], Me = () = > {}, or = () = > !1, lr = /^on[^a-z]/, en = e = > lr.test(e), Wn = e = > e.startsWith("onUpdate:"), se = Object.assign, Kn = (e, t) = > {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}, cr = Object.prototype.hasOwnProperty, B = (e, t) = > cr.call(e, t), P = Array.isArray, lt = e = > tn(e) === "[object Map]", Qs = e = > tn(e) === "[object Set]", S = e = > typeof e == "function", ee = e = > typeof e == "string", Yn = e = > typeof e == "symbol", Y = e = > e !== null && typeof e == "object", Zs = e = > Y(e) && S(e.then) && S(e.
catch), Gs = Object.prototype.toString, tn = e = > Gs.call(e), ar = e = > tn(e).slice(8, -1), ei = e = > tn(e) === "[object Object]", zn = e = > ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dt = Un(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), nn = e = > {
    const t = Object.create(null);
    return n = > t[n] || (t[n] = e(n))
}, fr = /-(\w)/g, ft = nn(e = > e.replace(fr, (t, n) = > n ? n.toUpperCase() : "")), ur = /\B([A-Z])/g, dt = nn(e = > e.replace(ur, "-$1").toLowerCase()), ti = nn(e = > e.charAt(0).toUpperCase() + e.slice(1)), mn = nn(e = > e ? `on$ {
    ti(e)
}` : ""), kt = (e, t) = > !Object.is(e, t), gn = (e, t) = > {
    for (let n = 0; n < e.length; n++) e[n](t)
}, Xt = (e, t, n) = > {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}, dr = e = > {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}, hr = e = > {
    const t = ee(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
};
let ms;
const pr = () = > ms || (ms = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let be;
class mr {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = be, !t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = be;
            try {
                return be = this, t()
            } finally {
                be = n
            }
        }
    }
    on() {
        be = this
    }
    off() {
        be = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
            for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
            if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}
function gr(e, t = be) {
    t && t.active && t.effects.push(e)
}
function _r() {
    return be
}
const Vn = e = > {
    const t = new Set(e);
    return t.w = 0, t.n = 0, t
}, ni = e = > (e.w & ke) > 0, si = e = > (e.n & ke) > 0, vr = ({
    deps: e
}) = > {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ke
}, br = e = > {
    const {
        deps: t
    } = e;
    if (t.length) {
        let n = 0;
        for (let s = 0; s < t.length; s++) {
            const i = t[s];
            ni(i) && !si(i) ? i.delete(e) : t[n++] = i, i.w &= ~ke, i.n &= ~ke
        }
        t.length = n
    }
}, Cn = new WeakMap;
let bt = 0, ke = 1;
const Tn = 30;
let ye;
const tt = Symbol(""), In = Symbol("");
class qn {
    constructor(t, n = null, s) {
        this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, gr(this, s)
    }
    run() {
        if (!this.active) return this.fn();
        let t = ye, n = je;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try {
            return this.parent = ye, ye = this, je = !0, ke = 1 << ++bt, bt <= Tn ? vr(this) : gs(this), this.fn()
        } finally {
            bt <= Tn && br(this), ke = 1 << --bt, ye = this.parent, je = n, this.parent = void 0, this.deferStop && this.stop()
        }
    }
    stop() {
        ye === this ? this.deferStop = !0 : this.active && (gs(this), this.onStop && this.onStop(), this.active = !1)
    }
}
function gs(e) {
    const {
        deps: t
    } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}
let je = !0;
const ii = [];

function ht() {
    ii.push(je), je = !1
}
function pt() {
    const e = ii.pop();
    je = e === void 0 ? !0 : e
}
function fe(e, t, n) {
    if (je && ye) {
        let s = Cn.get(e);
        s || Cn.set(e, s = new Map);
        let i = s.get(n);
        i || s.set(n, i = Vn()), ri(i)
    }
}
function ri(e, t) {
    let n = !1;
    bt <= Tn ? si(e) || (e.n |= ke, n = !ni(e)) : n = !e.has(ye), n && (e.add(ye), ye.deps.push(e))
}
function Se(e, t, n, s, i, r) {
    const o = Cn.get(e);
    if (!o) return;
    let l = [];
    if (t === "clear") l = [...o.values()];
    else if (n === "length" && P(e)) {
        const a = Number(s);
        o.forEach((u, d) = > {
            (d === "length" || d >= a) && l.push(u)
        })
    } else switch (n !== void 0 && l.push(o.get(n)), t) {
        case "add":
            P(e) ? zn(n) && l.push(o.get("length")):
                (l.push(o.get(tt)), lt(e) && l.push(o.get(In)));
                break;
            case "delete":
                P(e) || (l.push(o.get(tt)), lt(e) && l.push(o.get(In)));
                break;
            case "set":
                lt(e) && l.push(o.get(tt));
                break
    }
    if (l.length === 1) l[0] && An(l[0]);
    else {
        const a = [];
        for (const u of l) u && a.push(...u);
        An(Vn(a))
    }
}
function An(e, t) {
    const n = P(e) ? e : [...e];
    for (const s of n) s.computed && _s(s);
    for (const s of n) s.computed || _s(s)
}
function _s(e, t) {
    (e !== ye || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const xr = Un("__proto__,__v_isRef,__isVue"), oi = new Set(Object.getOwnPropertyNames(Symbol).filter(e = > e !== "arguments" && e !== "caller").map(e = > Symbol[e]).filter(Yn)), yr = Jn(), wr = Jn(!1, !0), Mr = Jn(!0), vs = Er();

function Er() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t = > {
        e[t] = function(...n) {
            const s = D(this);
            for (let r = 0, o = this.length; r < o; r++) fe(s, "get", r + "");
            const i = s[t](...n);
            return i === -1 || i === !1 ? s[t](...n.map(D)) : i
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t = > {
        e[t] = function(...n) {
            ht();
            const s = D(this)[t].apply(this, n);
            return pt(), s
        }
    }), e
}
function Cr(e) {
    const t = D(this);
    return fe(t, "has", e), t.hasOwnProperty(e)
}
function Jn(e = !1, t = !1) {
    return function(s, i, r) {
        if (i === "__v_isReactive") return !e;
        if (i === "__v_isReadonly") return e;
        if (i === "__v_isShallow") return t;
        if (i === "__v_raw" && r === (e ? t ? Ur : ui : t ? fi : ai).get(s)) return s;
        const o = P(s);
        if (!e) {
            if (o && B(vs, i)) return Reflect.get(vs, i, r);
            if (i === "hasOwnProperty") return Cr
        }
        const l = Reflect.get(s, i, r);
        return (Yn(i) ? oi.has(i) : xr(i)) || (e || fe(s, "get", i), t) ? l : ce(l) ? o && zn(i) ? l : l.value : Y(l) ? e ? di(l) : Gn(l) : l
    }
}
const Tr = li(), Ir = li(!0);

function li(e = !1) {
    return function(n, s, i, r) {
        let o = n[s];
        if (wt(o) && ce(o) && !ce(i)) return !1;
        if (!e && (!$n(i) && !wt(i) && (o = D(o), i = D(i)), !P(n) && ce(o) && !ce(i))) return o.value = i, !0;
        const l = P(n) && zn(s) ? Number(s) < n.length : B(n, s), a = Reflect.set(n, s, i, r);
        return n === D(r) && (l ? kt(i, o) && Se(n, "set", s, i) : Se(n, "add", s, i)), a
    }
}
function Ar(e, t) {
    const n = B(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && n && Se(e, "delete", t, void 0), s
}
function $r(e, t) {
    const n = Reflect.has(e, t);
    return (!Yn(t) || !oi.has(t)) && fe(e, "has", t), n
}
function Or(e) {
    return fe(e, "iterate", P(e) ? "length" : tt), Reflect.ownKeys(e)
}
const ci = {
    get: yr,
    set: Tr,
    deleteProperty: Ar,
    has: $r,
    ownKeys: Or
}, Pr = {
    get: Mr,
    set(e, t) {
        return !0
    },
    deleteProperty(e, t) {
        return !0
    }
}, Rr = se({}, ci, {
    get: wr,
    set: Ir
}), Qn = e = > e, sn = e = > Reflect.getPrototypeOf(e);

function Ot(e, t, n = !1, s = !1) {
    e = e.__v_raw;
    const i = D(e), r = D(t);
    n || (t !== r && fe(i, "get", t), fe(i, "get", r));
    const {
        has: o
    } = sn(i), l = s ? Qn : n ? ns : ts;
    if (o.call(i, t)) return l(e.get(t));
    if (o.call(i, r)) return l(e.get(r));
    e !== i && e.get(t)
}
function Pt(e, t = !1) {
    const n = this.__v_raw, s = D(n), i = D(e);
    return t || (e !== i && fe(s, "has", e), fe(s, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i)
}
function Rt(e, t = !1) {
    return e = e.__v_raw, !t && fe(D(e), "iterate", tt), Reflect.get(e, "size", e)
}
function bs(e) {
    e = D(e);
    const t = D(this);
    return sn(t).has.call(t, e) || (t.add(e), Se(t, "add", e, e)), this
}
function xs(e, t) {
    t = D(t);
    const n = D(this), {
        has: s,
        get: i
    } = sn(n);
    let r = s.call(n, e);
    r || (e = D(e), r = s.call(n, e));
    const o = i.call(n, e);
    return n.set(e, t), r ? kt(t, o) && Se(n, "set", e, t) : Se(n, "add", e, t), this
}
function ys(e) {
    const t = D(this), {
        has: n,
        get: s
    } = sn(t);
    let i = n.call(t, e);
    i || (e = D(e), i = n.call(t, e)), s && s.call(t, e);
    const r = t.delete(e);
    return i && Se(t, "delete", e, void 0), r
}
function ws() {
    const e = D(this), t = e.size !== 0, n = e.clear();
    return t && Se(e, "clear", void 0, void 0), n
}
function St(e, t) {
    return function(s, i) {
        const r = this, o = r.__v_raw, l = D(o), a = t ? Qn : e ? ns : ts;
        return !e && fe(l, "iterate", tt), o.forEach((u, d) = > s.call(i, a(u), a(d), r))
    }
}
function Nt(e, t, n) {
    return function(...s) {
        const i = this.__v_raw, r = D(i), o = lt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, u = i[e](...s), d = n ? Qn : t ? ns : ts;
        return !t && fe(r, "iterate", a ? In : tt), {
            next() {
                const {
                    value: p,
                    done: _
                } = u.next();
                return _ ? {
                    value: p,
                    done: _
                } : {
                    value: l ? [d(p[0]), d(p[1])] : d(p),
                    done: _
                }
            }, [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Le(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}
function Sr() {
    const e = {
        get(r) {
            return Ot(this, r)
        }, get size() {
            return Rt(this)
        }, has: Pt,
        add: bs,
        set: xs,
        delete: ys,
        clear: ws,
        forEach: St(!1, !1)
    }, t = {
        get(r) {
            return Ot(this, r, !1, !0)
        }, get size() {
            return Rt(this)
        }, has: Pt,
        add: bs,
        set: xs,
        delete: ys,
        clear: ws,
        forEach: St(!1, !0)
    }, n = {
        get(r) {
            return Ot(this, r, !0)
        }, get size() {
            return Rt(this, !0)
        }, has(r) {
            return Pt.call(this, r, !0)
        }, add: Le("add"),
        set: Le("set"),
        delete: Le("delete"),
        clear: Le("clear"),
        forEach: St(!0, !1)
    }, s = {
        get(r) {
            return Ot(this, r, !0, !0)
        }, get size() {
            return Rt(this, !0)
        }, has(r) {
            return Pt.call(this, r, !0)
        }, add: Le("add"),
        set: Le("set"),
        delete: Le("delete"),
        clear: Le("clear"),
        forEach: St(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r = > {
        e[r] = Nt(r, !1, !1), n[r] = Nt(r, !0, !1), t[r] = Nt(r, !1, !0), s[r] = Nt(r, !0, !0)
    }), [e, n, t, s]
}
const[Nr, Fr, Lr, Br] = Sr();

function Zn(e, t) {
    const n = t ? e ? Br : Lr : e ? Fr : Nr;
    return (s, i, r) = > i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(B(n, i) && i in s ? n : s, i, r)
}
const Dr = {
    get: Zn(!1, !1)
}, Hr = {
    get: Zn(!1, !0)
}, jr = {
    get: Zn(!0, !1)
}, ai = new WeakMap, fi = new WeakMap, ui = new WeakMap, Ur = new WeakMap;

function kr(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}
function Xr(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : kr(ar(e))
}
function Gn(e) {
    return wt(e) ? e : es(e, !1, ci, Dr, ai)
}
function Wr(e) {
    return es(e, !1, Rr, Hr, fi)
}
function di(e) {
    return es(e, !0, Pr, jr, ui)
}
function es(e, t, n, s, i) {
    if (!Y(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const r = i.get(e);
    if (r) return r;
    const o = Xr(e);
    if (o === 0) return e;
    const l = new Proxy(e, o === 2 ? s : n);
    return i.set(e, l), l
}
function ct(e) {
    return wt(e) ? ct(e.__v_raw) : !! (e && e.__v_isReactive)
}
function wt(e) {
    return !!(e && e.__v_isReadonly)
}
function $n(e) {
    return !!(e && e.__v_isShallow)
}
function hi(e) {
    return ct(e) || wt(e)
}
function D(e) {
    const t = e && e.__v_raw;
    return t ? D(t) : e
}
function pi(e) {
    return Xt(e, "__v_skip", !0), e
}
const ts = e = > Y(e) ? Gn(e) : e, ns = e = > Y(e) ? di(e) : e;

function Kr(e) {
    je && ye && (e = D(e), ri(e.dep || (e.dep = Vn())))
}
function Yr(e, t) {
    e = D(e);
    const n = e.dep;
    n && An(n)
}
function ce(e) {
    return !!(e && e.__v_isRef === !0)
}
function he(e) {
    return ce(e) ? e.value : e
}
const zr = {
    get: (e, t, n) = > he(Reflect.get(e, t, n)),
    set: (e, t, n, s) = > {
        const i = e[t];
        return ce(i) && !ce(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s)
    }
};

function mi(e) {
    return ct(e) ? e : new Proxy(e, zr)
}
var gi;
class Vr {
    constructor(t, n, s, i) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[gi] = !1, this._dirty = !0, this.effect = new qn(t, () = > {
            this._dirty || (this._dirty = !0, Yr(this))
        }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = s
    }
    get value() {
        const t = D(this);
        return Kr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
    }
    set value(t) {
        this._setter(t)
    }
}
gi = "__v_isReadonly";

function qr(e, t, n = !1) {
    let s, i;
    const r = S(e);
    return r ? (s = e, i = Me) : (s = e.get, i = e.set), new Vr(s, i, r || !i, n)
}
function Ue(e, t, n, s) {
    let i;
    try {
        i = s ? e(...s) : e()
    } catch (r) {
        rn(r, t, n)
    }
    return i
}
function _e(e, t, n, s) {
    if (S(e)) {
        const r = Ue(e, t, n, s);
        return r && Zs(r) && r.
        catch (o = > {
            rn(o, t, n)
        }), r
    }
    const i = [];
    for (let r = 0; r < e.length; r++) i.push(_e(e[r], t, n, s));
    return i
}
function rn(e, t, n, s = !0) {
    const i = t ? t.vnode : null;
    if (t) {
        let r = t.parent;
        const o = t.proxy, l = n;
        for (; r;) {
            const u = r.ec;
            if (u) {
                for (let d = 0; d < u.length; d++) if (u[d](e, o, l) === !1) return
            }
            r = r.parent
        }
        const a = t.appContext.config.errorHandler;
        if (a) {
            Ue(a, null, 10, [e, o, l]);
            return
        }
    }
    Jr(e, n, i, s)
}
function Jr(e, t, n, s = !0) {
    console.error(e)
}
let Mt = !1, On = !1;
const re = [];
let $e = 0;
const at = [];
let Pe = null, Qe = 0;
const _i = Promise.resolve();
let ss = null;

function Qr(e) {
    const t = ss || _i;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Zr(e) {
    let t = $e + 1, n = re.length;
    for (; t < n;) {
        const s = t + n >>> 1;
        Et(re[s]) < e ? t = s + 1 : n = s
    }
    return t
}
function is(e) {
    (!re.length || !re.includes(e, Mt && e.allowRecurse ? $e + 1 : $e)) && (e.id == null ? re.push(e) : re.splice(Zr(e.id), 0, e), vi())
}
function vi() {
    !Mt && !On && (On = !0, ss = _i.then(xi))
}
function Gr(e) {
    const t = re.indexOf(e);
    t > $e && re.splice(t, 1)
}
function eo(e) {
    P(e) ? at.push(...e) : (!Pe || !Pe.includes(e, e.allowRecurse ? Qe + 1 : Qe)) && at.push(e), vi()
}
function Ms(e, t = Mt ? $e + 1 : 0) {
    for (; t < re.length; t++) {
        const n = re[t];
        n && n.pre && (re.splice(t, 1), t--, n())
    }
}
function bi(e) {
    if (at.length) {
        const t = [...new Set(at)];
        if (at.length = 0, Pe) {
            Pe.push(...t);
            return
        }
        for (Pe = t, Pe.sort((n, s) = > Et(n) - Et(s)), Qe = 0; Qe < Pe.length; Qe++) Pe[Qe]();
        Pe = null, Qe = 0
    }
}
const Et = e = > e.id == null ? 1 / 0 : e.id, to = (e, t) = > {
    const n = Et(e) - Et(t);
    if (n === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1
    }
    return n
};

function xi(e) {
    On = !1, Mt = !0, re.sort(to);
    const t = Me;
    try {
        for ($e = 0; $e < re.length; $e++) {
            const n = re[$e];
            n && n.active !== !1 && Ue(n, null, 14)
        }
    } finally {
        $e = 0, re.length = 0, bi(), Mt = !1, ss = null, (re.length || at.length) && xi()
    }
}
function no(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || K;
    let i = n;
    const r = t.startsWith("update:"), o = r && t.slice(7);
    if (o && o in s) {
        const d = `$ {
            o === "modelValue" ? "model" : o
        }
        Modifiers`, {
            number: p,
            trim: _
        } = s[d] || K;
        _ && (i = n.map(T = > ee(T) ? T.trim() : T)), p && (i = n.map(dr))
    }
    let l, a = s[l = mn(t)] || s[l = mn(ft(t))];
    !a && r && (a = s[l = mn(dt(t))]), a && _e(a, e, 6, i);
    const u = s[l + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[l]) return;
        e.emitted[l] = !0, _e(u, e, 6, i)
    }
}
function yi(e, t, n = !1) {
    const s = t.emitsCache, i = s.get(e);
    if (i !== void 0) return i;
    const r = e.emits;
    let o = {}, l = !1;
    if (!S(e)) {
        const a = u = > {
            const d = yi(u, t, !0);
            d && (l = !0, se(o, d))
        };
        !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
    }
    return !r && !l ? (Y(e) && s.set(e, null), null) : (P(r) ? r.forEach(a = > o[a] = null) : se(o, r), Y(e) && s.set(e, o), o)
}
function on(e, t) {
    return !e || !en(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), B(e, t[0].toLowerCase() + t.slice(1)) || B(e, dt(t)) || B(e, t))
}
let ge = null, ln = null;

function Wt(e) {
    const t = ge;
    return ge = e, ln = e && e.type.__scopeId || null, t
}
function so(e) {
    ln = e
}
function io() {
    ln = null
}
function wi(e, t = ge, n) {
    if (!t || e._n) return e;
    const s = (...i) = > {
        s._d && Rs(-1);
        const r = Wt(t);
        let o;
        try {
            o = e(...i)
        } finally {
            Wt(r), s._d && Rs(1)
        }
        return o
    };
    return s._n = !0, s._c = !0, s._d = !0, s
}
function _n(e) {
    const {
        type: t,
        vnode: n,
        proxy: s,
        withProxy: i,
        props: r,
        propsOptions: [o],
        slots: l,
        attrs: a,
        emit: u,
        render: d,
        renderCache: p,
        data: _,
        setupState: T,
        ctx: N,
        inheritAttrs: $
    } = e;
    let V, H;
    const oe = Wt(e);
    try {
        if (n.shapeFlag & 4) {
            const X = i || s;
            V = Ae(d.call(X, X, p, r, T, _, N)), H = a
        } else {
            const X = t;
            V = Ae(X.length > 1 ? X(r, {
                attrs: a,
                slots: l,
                emit: u
            }) : X(r, null)), H = t.props ? a : ro(a)
        }
    } catch (X) {
        yt.length = 0, rn(X, e, 1), V = pe(Re)
    }
    let R = V;
    if (H && $ !== !1) {
        const X = Object.keys(H), {
            shapeFlag: te
        } = R;
        X.length && te & 7 && (o && X.some(Wn) && (H = oo(H, o)), R = Xe(R, H))
    }
    return n.dirs && (R = Xe(R), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && (R.transition = n.transition), V = R, Wt(oe), V
}
const ro = e = > {
    let t;
    for (const n in e)(n === "class" || n === "style" || en(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}, oo = (e, t) = > {
    const n = {};
    for (const s in e)(!Wn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n
};

function lo(e, t, n) {
    const {
        props: s,
        children: i,
        component: r
    } = e, {
        props: o,
        children: l,
        patchFlag: a
    } = t, u = r.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && a >= 0) {
        if (a & 1024) return !0;
        if (a & 16) return s ? Es(s, o, u) : !! o;
        if (a & 8) {
            const d = t.dynamicProps;
            for (let p = 0; p < d.length; p++) {
                const _ = d[p];
                if (o[_] !== s[_] && !on(u, _)) return !0
            }
        }
    } else return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Es(s, o, u) : !0 : !! o;
    return !1
}
function Es(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return !0;
    for (let i = 0; i < s.length; i++) {
        const r = s[i];
        if (t[r] !== e[r] && !on(n, r)) return !0
    }
    return !1
}
function co({
    vnode: e,
    parent: t
}, n) {
    for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
}
const ao = e = > e.__isSuspense;

function fo(e, t) {
    t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : eo(e)
}
function uo(e, t) {
    if (Z) {
        let n = Z.provides;
        const s = Z.parent && Z.parent.provides;
        s === n && (n = Z.provides = Object.create(s)), n[e] = t
    }
}
function Ht(e, t, n = !1) {
    const s = Z || ge;
    if (s) {
        const i = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
        if (i && e in i) return i[e];
        if (arguments.length > 1) return n && S(t) ? t.call(s.proxy) : t
    }
}
const Ft = {};

function vn(e, t, n) {
    return Mi(e, t, n)
}
function Mi(e, t, {
    immediate: n,
    deep: s,
    flush: i,
    onTrack: r,
    onTrigger: o
} = K) {
    const l = _r() === (Z == null ? void 0 : Z.scope) ? Z : null;
    let a, u = !1, d = !1;
    if (ce(e) ? (a = () = > e.value, u = $n(e)) : ct(e) ? (a = () = > e, s = !0) : P(e) ? (d = !0, u = e.some(R = > ct(R) || $n(R)), a = () = > e.map(R = > {
        if (ce(R)) return R.value;
        if (ct(R)) return et(R);
        if (S(R)) return Ue(R, l, 2)
    })) : S(e) ? t ? a = () = > Ue(e, l, 2) : a = () = > {
        if (!(l && l.isUnmounted)) return p && p(), _e(e, l, 3, [_])
    } : a = Me, t && s) {
        const R = a;
        a = () = > et(R())
    }
    let p, _ = R = > {
        p = H.onStop = () = > {
            Ue(R, l, 4)
        }
    }, T;
    if (Tt) if (_ = Me, t ? n && _e(t, l, 3, [a(), d ? [] : void 0, _]) : a(), i === "sync") {
        const R = cl();
        T = R.__watcherHandles || (R.__watcherHandles = [])
    } else return Me;
    let N = d ? new Array(e.length).fill(Ft) : Ft;
    const $ = () = > {
        if (H.active) if (t) {
            const R = H.run();
            (s || u || (d ? R.some((X, te) = > kt(X, N[te])) : kt(R, N))) && (p && p(), _e(t, l, 3, [R, N === Ft ? void 0 : d && N[0] === Ft ? [] : N, _]), N = R)
        } else H.run()
    };
    $.allowRecurse = !! t;
    let V;
    i === "sync" ? V = $ : i === "post" ? V = () = > ae($, l && l.suspense) : ($.pre = !0, l && ($.id = l.uid), V = () = > is($));
    const H = new qn(a, V);
    t ? n ? $() : N = H.run() : i === "post" ? ae(H.run.bind(H), l && l.suspense) : H.run();
    const oe = () = > {
        H.stop(), l && l.scope && Kn(l.scope.effects, H)
    };
    return T && T.push(oe), oe
}
function ho(e, t, n) {
    const s = this.proxy, i = ee(e) ? e.includes(".") ? Ei(s, e) : () = > s[e] : e.bind(s, s);
    let r;
    S(t) ? r = t : (r = t.handler, n = t);
    const o = Z;
    ut(this);
    const l = Mi(i, r.bind(s), n);
    return o ? ut(o) : nt(), l
}
function Ei(e, t) {
    const n = t.split(".");
    return () = > {
        let s = e;
        for (let i = 0; i < n.length && s; i++) s = s[n[i]];
        return s
    }
}
function et(e, t) {
    if (!Y(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), ce(e)) et(e.value, t);
    else if (P(e)) for (let n = 0; n < e.length; n++) et(e[n], t);
    else if (Qs(e) || lt(e)) e.forEach(n = > {
        et(n, t)
    });
    else if (ei(e)) for (const n in e) et(e[n], t);
    return e
}
function po() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return $i(() = > {
        e.isMounted = !0
    }), Oi(() = > {
        e.isUnmounting = !0
    }), e
}
const me = [Function, Array], mo = {
    name: "BaseTransition",
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: me,
        onEnter: me,
        onAfterEnter: me,
        onEnterCancelled: me,
        onBeforeLeave: me,
        onLeave: me,
        onAfterLeave: me,
        onLeaveCancelled: me,
        onBeforeAppear: me,
        onAppear: me,
        onAfterAppear: me,
        onAppearCancelled: me
    },
    setup(e, {
        slots: t
    }) {
        const n = Go(), s = po();
        let i;
        return () = > {
            const r = t.
            default && Ii(t.
            default (), !0);
            if (!r || !r.length) return;
            let o = r[0];
            if (r.length > 1) {
                for (const $ of r) if ($.type !== Re) {
                    o = $;
                    break
                }
            }
            const l = D(e), {
                mode: a
            } = l;
            if (s.isLeaving) return bn(o);
            const u = Cs(o);
            if (!u) return bn(o);
            const d = Pn(u, l, s, n);
            Rn(u, d);
            const p = n.subTree, _ = p && Cs(p);
            let T = !1;
            const {
                getTransitionKey: N
            } = u.type;
            if (N) {
                const $ = N();
                i === void 0 ? i = $ : $ !== i && (i = $, T = !0)
            }
            if (_ && _.type !== Re && (!Ze(u, _) || T)) {
                const $ = Pn(_, l, s, n);
                if (Rn(_, $), a === "out-in") return s.isLeaving = !0, $.afterLeave = () = > {
                    s.isLeaving = !1, n.update.active !== !1 && n.update()
                }, bn(o);
                a === "in-out" && u.type !== Re && ($.delayLeave = (V, H, oe) = > {
                    const R = Ti(s, _);
                    R[String(_.key)] = _, V._leaveCb = () = > {
                        H(), V._leaveCb = void 0, delete d.delayedLeave
                    }, d.delayedLeave = oe
                })
            }
            return o
        }
    }
}, Ci = mo;

function Ti(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let s = n.get(t.type);
    return s || (s = Object.create(null), n.set(t.type, s)), s
}
function Pn(e, t, n, s) {
    const {
        appear: i,
        mode: r,
        persisted: o = !1,
        onBeforeEnter: l,
        onEnter: a,
        onAfterEnter: u,
        onEnterCancelled: d,
        onBeforeLeave: p,
        onLeave: _,
        onAfterLeave: T,
        onLeaveCancelled: N,
        onBeforeAppear: $,
        onAppear: V,
        onAfterAppear: H,
        onAppearCancelled: oe
    } = t, R = String(e.key), X = Ti(n, e), te = (F, q) = > {
        F && _e(F, s, 9, q)
    }, Fe = (F, q) = > {
        const W = q[1];
        te(F, q), P(F) ? F.every(ie = > ie.length <= 1) && W() : F.length <= 1 && W()
    }, Ee = {
        mode: r,
        persisted: o,
        beforeEnter(F) {
            let q = l;
            if (!n.isMounted) if (i) q = $ || l;
            else return;
            F._leaveCb && F._leaveCb(!0);
            const W = X[R];
            W && Ze(e, W) && W.el._leaveCb && W.el._leaveCb(), te(q, [F])
        },
        enter(F) {
            let q = a, W = u, ie = d;
            if (!n.isMounted) if (i) q = V || a, W = H || u, ie = oe || d;
            else return;
            let C = !1;
            const z = F._enterCb = ue = > {
                C || (C = !0, ue ? te(ie, [F]) : te(W, [F]), Ee.delayedLeave && Ee.delayedLeave(), F._enterCb = void 0)
            };
            q ? Fe(q, [F, z]) : z()
        },
        leave(F, q) {
            const W = String(e.key);
            if (F._enterCb && F._enterCb(!0), n.isUnmounting) return q();
            te(p, [F]);
            let ie = !1;
            const C = F._leaveCb = z = > {
                ie || (ie = !0, q(), z ? te(N, [F]) : te(T, [F]), F._leaveCb = void 0, X[W] === e && delete X[W])
            };
            X[W] = e, _ ? Fe(_, [F, C]) : C()
        },
        clone(F) {
            return Pn(F, t, n, s)
        }
    };
    return Ee
}
function bn(e) {
    if (cn(e)) return e = Xe(e), e.children = null, e
}
function Cs(e) {
    return cn(e) ? e.children ? e.children[0] : void 0 : e
}
function Rn(e, t) {
    e.shapeFlag & 6 && e.component ? Rn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Ii(e, t = !1, n) {
    let s = [], i = 0;
    for (let r = 0; r < e.length; r++) {
        let o = e[r];
        const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
        o.type === xe ? (o.patchFlag & 128 && i++, s = s.concat(Ii(o.children, t, l))) : (t || o.type !== Re) && s.push(l != null ? Xe(o, {
            key: l
        }) : o)
    }
    if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
    return s
}
const jt = e = > !! e.type.__asyncLoader, cn = e = > e.type.__isKeepAlive;

function go(e, t) {
    Ai(e, "a", t)
}
function _o(e, t) {
    Ai(e, "da", t)
}
function Ai(e, t, n = Z) {
    const s = e.__wdc || (e.__wdc = () = > {
        let i = n;
        for (; i;) {
            if (i.isDeactivated) return;
            i = i.parent
        }
        return e()
    });
    if (an(t, s, n), n) {
        let i = n.parent;
        for (; i && i.parent;) cn(i.parent.vnode) && vo(s, t, n, i), i = i.parent
    }
}
function vo(e, t, n, s) {
    const i = an(t, e, s, !0);
    Pi(() = > {
        Kn(s[t], i)
    }, n)
}
function an(e, t, n = Z, s = !1) {
    if (n) {
        const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) = > {
            if (n.isUnmounted) return;
            ht(), ut(n);
            const l = _e(t, n, e, o);
            return nt(), pt(), l
        });
        return s ? i.unshift(r) : i.push(r), r
    }
}
const Ne = e = > (t, n = Z) = > (!Tt || e === "sp") && an(e, (...s) = > t(...s), n), bo = Ne("bm"), $i = Ne("m"), xo = Ne("bu"), yo = Ne("u"), Oi = Ne("bum"), Pi = Ne("um"), wo = Ne("sp"), Mo = Ne("rtg"), Eo = Ne("rtc");

function Co(e, t = Z) {
    an("ec", e, t)
}
function To(e, t) {
    const n = ge;
    if (n === null) return e;
    const s = dn(n) || n.proxy, i = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let[o, l, a, u = K] = t[r];
        o && (S(o) && (o = {
            mounted: o,
            updated: o
        }), o.deep && et(l), i.push({
            dir: o,
            instance: s,
            value: l,
            oldValue: void 0,
            arg: a,
            modifiers: u
        }))
    }
    return e
}
function Ye(e, t, n, s) {
    const i = e.dirs, r = t && t.dirs;
    for (let o = 0; o < i.length; o++) {
        const l = i[o];
        r && (l.oldValue = r[o].value);
        let a = l.dir[s];
        a && (ht(), _e(a, n, 8, [e.el, l, e, t]), pt())
    }
}
const Io = Symbol(), Sn = e = > e ? Xi(e) ? dn(e) || e.proxy : Sn(e.parent) : null, xt = se(Object.create(null), {
    $: e = > e,
    $el: e = > e.vnode.el,
    $data: e = > e.data,
    $props: e = > e.props,
    $attrs: e = > e.attrs,
    $slots: e = > e.slots,
    $refs: e = > e.refs,
    $parent: e = > Sn(e.parent),
    $root: e = > Sn(e.root),
    $emit: e = > e.emit,
    $options: e = > rs(e),
    $forceUpdate: e = > e.f || (e.f = () = > is(e.update)),
    $nextTick: e = > e.n || (e.n = Qr.bind(e.proxy)),
    $watch: e = > ho.bind(e)
}), xn = (e, t) = > e !== K && !e.__isScriptSetup && B(e, t), Ao = {
    get({
        _: e
    }, t) {
        const {
            ctx: n,
            setupState: s,
            data: i,
            props: r,
            accessCache: o,
            type: l,
            appContext: a
        } = e;
        let u;
        if (t[0] !== "$") {
            const T = o[t];
            if (T !== void 0) switch (T) {
                case 1:
                    return s[t];
                case 2:
                    return i[t];
                case 4:
                    return n[t];
                case 3:
                    return r[t]
            } else {
                if (xn(s, t)) return o[t] = 1, s[t];
                if (i !== K && B(i, t)) return o[t] = 2, i[t];
                if ((u = e.propsOptions[0]) && B(u, t)) return o[t] = 3, r[t];
                if (n !== K && B(n, t)) return o[t] = 4, n[t];
                Nn && (o[t] = 0)
            }
        }
        const d = xt[t];
        let p, _;
        if (d) return t === "$attrs" && fe(e, "get", t), d(e);
        if ((p = l.__cssModules) && (p = p[t])) return p;
        if (n !== K && B(n, t)) return o[t] = 4, n[t];
        if (_ = a.config.globalProperties, B(_, t)) return _[t]
    }, set({
        _: e
    }, t, n) {
        const {
            data: s,
            setupState: i,
            ctx: r
        } = e;
        return xn(i, t) ? (i[t] = n, !0) : s !== K && B(s, t) ? (s[t] = n, !0) : B(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0)
    }, has({
        _: {
            data: e,
            setupState: t,
            accessCache: n,
            ctx: s,
            appContext: i,
            propsOptions: r
        }
    }, o) {
        let l;
        return !!n[o] || e !== K && B(e, o) || xn(t, o) || (l = r[0]) && B(l, o) || B(s, o) || B(xt, o) || B(i.config.globalProperties, o)
    }, defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : B(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
};
let Nn = !0;

function $o(e) {
    const t = rs(e), n = e.proxy, s = e.ctx;
    Nn = !1, t.beforeCreate && Ts(t.beforeCreate, e, "bc");
    const {
        data: i,
        computed: r,
        methods: o,
        watch: l,
        provide: a,
        inject: u,
        created: d,
        beforeMount: p,
        mounted: _,
        beforeUpdate: T,
        updated: N,
        activated: $,
        deactivated: V,
        beforeDestroy: H,
        beforeUnmount: oe,
        destroyed: R,
        unmounted: X,
        render: te,
        renderTracked: Fe,
        renderTriggered: Ee,
        errorCaptured: F,
        serverPrefetch: q,
        expose: W,
        inheritAttrs: ie,
        components: C,
        directives: z,
        filters: ue
    } = t;
    if (u && Oo(u, s, null, e.appContext.config.unwrapInjectedRef), o) for (const J in o) {
        const U = o[J];
        S(U) && (s[J] = U.bind(n))
    }
    if (i) {
        const J = i.call(n, n);
        Y(J) && (e.data = Gn(J))
    }
    if (Nn = !0, r) for (const J in r) {
        const U = r[J], We = S(U) ? U.bind(n, n) : S(U.get) ? U.get.bind(n, n) : Me, At = !S(U) && S(U.set) ? U.set.bind(n) : Me, Ke = rl({
            get: We,
            set: At
        });
        Object.defineProperty(s, J, {
            enumerable: !0,
            configurable: !0,
            get: () = > Ke.value,
            set: Ce = > Ke.value = Ce
        })
    }
    if (l) for (const J in l) Ri(l[J], s, n, J);
    if (a) {
        const J = S(a) ? a.call(n) : a;
        Reflect.ownKeys(J).forEach(U = > {
            uo(U, J[U])
        })
    }
    d && Ts(d, e, "c");

    function ne(J, U) {
        P(U) ? U.forEach(We = > J(We.bind(n))) : U && J(U.bind(n))
    }
    if (ne(bo, p), ne($i, _), ne(xo, T), ne(yo, N), ne(go, $), ne(_o, V), ne(Co, F), ne(Eo, Fe), ne(Mo, Ee), ne(Oi, oe), ne(Pi, X), ne(wo, q), P(W)) if (W.length) {
        const J = e.exposed || (e.exposed = {});
        W.forEach(U = > {
            Object.defineProperty(J, U, {
                get: () = > n[U],
                set: We = > n[U] = We
            })
        })
    } else e.exposed || (e.exposed = {});
    te && e.render === Me && (e.render = te), ie != null && (e.inheritAttrs = ie), C && (e.components = C), z && (e.directives = z)
}
function Oo(e, t, n = Me, s = !1) {
    P(e) && (e = Fn(e));
    for (const i in e) {
        const r = e[i];
        let o;
        Y(r) ? "default" in r ? o = Ht(r.from || i, r.
        default, !0) : o = Ht(r.from || i) : o = Ht(r), ce(o) && s ? Object.defineProperty(t, i, {
            enumerable: !0,
            configurable: !0,
            get: () = > o.value,
            set: l = > o.value = l
        }) : t[i] = o
    }
}
function Ts(e, t, n) {
    _e(P(e) ? e.map(s = > s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Ri(e, t, n, s) {
    const i = s.includes(".") ? Ei(n, s) : () = > n[s];
    if (ee(e)) {
        const r = t[e];
        S(r) && vn(i, r)
    } else if (S(e)) vn(i, e.bind(n));
    else if (Y(e)) if (P(e)) e.forEach(r = > Ri(r, t, n, s));
    else {
        const r = S(e.handler) ? e.handler.bind(n) : t[e.handler];
        S(r) && vn(i, r, e)
    }
}
function rs(e) {
    const t = e.type, {
        mixins: n,
        extends: s
    } = t, {
        mixins: i,
        optionsCache: r,
        config: {
            optionMergeStrategies: o
        }
    } = e.appContext, l = r.get(t);
    let a;
    return l ? a = l : !i.length && !n && !s ? a = t : (a = {}, i.length && i.forEach(u = > Kt(a, u, o, !0)), Kt(a, t, o)), Y(t) && r.set(t, a), a
}
function Kt(e, t, n, s = !1) {
    const {
        mixins: i,
        extends: r
    } = t;
    r && Kt(e, r, n, !0), i && i.forEach(o = > Kt(e, o, n, !0));
    for (const o in t) if (!(s && o === "expose")) {
        const l = Po[o] || n && n[o];
        e[o] = l ? l(e[o], t[o]) : t[o]
    }
    return e
}
const Po = {
    data: Is,
    props: Je,
    emits: Je,
    methods: Je,
    computed: Je,
    beforeCreate: le,
    created: le,
    beforeMount: le,
    mounted: le,
    beforeUpdate: le,
    updated: le,
    beforeDestroy: le,
    beforeUnmount: le,
    destroyed: le,
    unmounted: le,
    activated: le,
    deactivated: le,
    errorCaptured: le,
    serverPrefetch: le,
    components: Je,
    directives: Je,
    watch: So,
    provide: Is,
    inject: Ro
};

function Is(e, t) {
    return t ? e ? function() {
        return se(S(e) ? e.call(this, this) : e, S(t) ? t.call(this, this) : t)
    } : t : e
}
function Ro(e, t) {
    return Je(Fn(e), Fn(t))
}
function Fn(e) {
    if (P(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}
function le(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Je(e, t) {
    return e ? se(se(Object.create(null), e), t) : t
}
function So(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = se(Object.create(null), e);
    for (const s in t) n[s] = le(e[s], t[s]);
    return n
}
function No(e, t, n, s = !1) {
    const i = {}, r = {};
    Xt(r, un, 1), e.propsDefaults = Object.create(null), Si(e, t, i, r);
    for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
    n ? e.props = s ? i : Wr(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r
}
function Fo(e, t, n, s) {
    const {
        props: i,
        attrs: r,
        vnode: {
            patchFlag: o
        }
    } = e, l = D(i), [a] = e.propsOptions;
    let u = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const d = e.vnode.dynamicProps;
            for (let p = 0; p < d.length; p++) {
                let _ = d[p];
                if (on(e.emitsOptions, _)) continue;
                const T = t[_];
                if (a) if (B(r, _)) T !== r[_] && (r[_] = T, u = !0);
                else {
                    const N = ft(_);
                    i[N] = Ln(a, l, N, T, e, !1)
                } else T !== r[_] && (r[_] = T, u = !0)
            }
        }
    } else {
        Si(e, t, i, r) && (u = !0);
        let d;
        for (const p in l)(!t || !B(t, p) && ((d = dt(p)) === p || !B(t, d))) && (a ? n && (n[p] !== void 0 || n[d] !== void 0) && (i[p] = Ln(a, l, p, void 0, e, !0)) : delete i[p]);
        if (r !== l) for (const p in r)(!t || !B(t, p)) && (delete r[p], u = !0)
    }
    u && Se(e, "set", "$attrs")
}
function Si(e, t, n, s) {
    const[i, r] = e.propsOptions;
    let o = !1, l;
    if (t) for (let a in t) {
        if (Dt(a)) continue;
        const u = t[a];
        let d;
        i && B(i, d = ft(a)) ? !r || !r.includes(d) ? n[d] = u : (l || (l = {}))[d] = u : on(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, o = !0)
    }
    if (r) {
        const a = D(n), u = l || K;
        for (let d = 0; d < r.length; d++) {
            const p = r[d];
            n[p] = Ln(i, a, p, u[p], e, !B(u, p))
        }
    }
    return o
}
function Ln(e, t, n, s, i, r) {
    const o = e[n];
    if (o != null) {
        const l = B(o, "default");
        if (l && s === void 0) {
            const a = o.
            default;
            if (o.type !== Function && S(a)) {
                const {
                    propsDefaults: u
                } = i;
                n in u ? s = u[n] : (ut(i), s = u[n] = a.call(null, t), nt())
            } else s = a
        }
        o[0] && (r && !l ? s = !1 : o[1] && (s === "" || s === dt(n)) && (s = !0))
    }
    return s
}
function Ni(e, t, n = !1) {
    const s = t.propsCache, i = s.get(e);
    if (i) return i;
    const r = e.props, o = {}, l = [];
    let a = !1;
    if (!S(e)) {
        const d = p = > {
            a = !0;
            const[_, T] = Ni(p, t, !0);
            se(o, _), T && l.push(...T)
        };
        !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d)
    }
    if (!r && !a) return Y(e) && s.set(e, ot), ot;
    if (P(r)) for (let d = 0; d < r.length; d++) {
        const p = ft(r[d]);
        As(p) && (o[p] = K)
    } else if (r) for (const d in r) {
        const p = ft(d);
        if (As(p)) {
            const _ = r[d], T = o[p] = P(_) || S(_) ? {
                type: _
            } : Object.assign({}, _);
            if (T) {
                const N = Ps(Boolean, T.type), $ = Ps(String, T.type);
                T[0] = N > -1, T[1] = $ < 0 || N < $, (N > -1 || B(T, "default")) && l.push(p)
            }
        }
    }
    const u = [o, l];
    return Y(e) && s.set(e, u), u
}
function As(e) {
    return e[0] !== "$"
}
function $s(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}
function Os(e, t) {
    return $s(e) === $s(t)
}
function Ps(e, t) {
    return P(t) ? t.findIndex(n = > Os(n, e)) : S(t) && Os(t, e) ? 0 : -1
}
const Fi = e = > e[0] === "_" || e === "$stable", os = e = > P(e) ? e.map(Ae) : [Ae(e)], Lo = (e, t, n) = > {
    if (t._n) return t;
    const s = wi((...i) = > os(t(...i)), n);
    return s._c = !1, s
}, Li = (e, t, n) = > {
    const s = e._ctx;
    for (const i in e) {
        if (Fi(i)) continue;
        const r = e[i];
        if (S(r)) t[i] = Lo(i, r, s);
        else if (r != null) {
            const o = os(r);
            t[i] = () = > o
        }
    }
}, Bi = (e, t) = > {
    const n = os(t);
    e.slots.
    default = () = > n
}, Bo = (e, t) = > {
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = D(t), Xt(t, "_", n)) : Li(t, e.slots = {})
    } else e.slots = {}, t && Bi(e, t);
    Xt(e.slots, un, 1)
}, Do = (e, t, n) = > {
    const {
        vnode: s,
        slots: i
    } = e;
    let r = !0, o = K;
    if (s.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? r = !1 : (se(i, t), !n && l === 1 && delete i._) : (r = !t.$stable, Li(t, i)), o = t
    } else t && (Bi(e, t), o = {
        default: 1
    });
    if (r) for (const l in i)!Fi(l) && !(l in o) && delete i[l]
};

function Di() {
    return {
        app: null,
        config: {
            isNativeTag: or,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Ho = 0;

function jo(e, t) {
    return function(s, i = null) {
        S(s) || (s = Object.assign({}, s)), i != null && !Y(i) && (i = null);
        const r = Di(), o = new Set;
        let l = !1;
        const a = r.app = {
            _uid: Ho++,
            _component: s,
            _props: i,
            _container: null,
            _context: r,
            _instance: null,
            version: al,
            get config() {
                return r.config
            },
            set config(u) {},
            use(u, ...d) {
                return o.has(u) || (u && S(u.install) ? (o.add(u), u.install(a, ...d)) : S(u) && (o.add(u), u(a, ...d))), a
            },
            mixin(u) {
                return r.mixins.includes(u) || r.mixins.push(u), a
            },
            component(u, d) {
                return d ? (r.components[u] = d, a) : r.components[u]
            },
            directive(u, d) {
                return d ? (r.directives[u] = d, a) : r.directives[u]
            },
            mount(u, d, p) {
                if (!l) {
                    const _ = pe(s, i);
                    return _.appContext = r, d && t ? t(_, u) : e(_, u, p), l = !0, a._container = u, u.__vue_app__ = a, dn(_.component) || _.component.proxy
                }
            },
            unmount() {
                l && (e(null, a._container), delete a._container.__vue_app__)
            },
            provide(u, d) {
                return r.provides[u] = d, a
            }
        };
        return a
    }
}
function Bn(e, t, n, s, i = !1) {
    if (P(e)) {
        e.forEach((_, T) = > Bn(_, t && (P(t) ? t[T] : t), n, s, i));
        return
    }
    if (jt(s) && !i) return;
    const r = s.shapeFlag & 4 ? dn(s.component) || s.component.proxy : s.el, o = i ? null : r, {
        i: l,
        r: a
    } = e, u = t && t.r, d = l.refs === K ? l.refs = {} : l.refs, p = l.setupState;
    if (u != null && u !== a && (ee(u) ? (d[u] = null, B(p, u) && (p[u] = null)) : ce(u) && (u.value = null)), S(a)) Ue(a, l, 12, [o, d]);
    else {
        const _ = ee(a), T = ce(a);
        if (_ || T) {
            const N = () = > {
                if (e.f) {
                    const $ = _ ? B(p, a) ? p[a] : d[a] : a.value;
                    i ? P($) && Kn($, r) : P($) ? $.includes(r) || $.push(r) : _ ? (d[a] = [r], B(p, a) && (p[a] = d[a])) : (a.value = [r], e.k && (d[e.k] = a.value))
                } else _ ? (d[a] = o, B(p, a) && (p[a] = o)) : T && (a.value = o, e.k && (d[e.k] = o))
            };
            o ? (N.id = -1, ae(N, n)) : N()
        }
    }
}
const ae = fo;

function Uo(e) {
    return ko(e)
}
function ko(e, t) {
    const n = pr();
    n.__VUE__ = !0;
    const {
        insert: s,
        remove: i,
        patchProp: r,
        createElement: o,
        createText: l,
        createComment: a,
        setText: u,
        setElementText: d,
        parentNode: p,
        nextSibling: _,
        setScopeId: T = Me,
        insertStaticContent: N
    } = e, $ = (c, f, h, g = null, m = null, y = null, M = !1, x = null, w = !! f.dynamicChildren) = > {
        if (c === f) return;
        c && !Ze(c, f) && (g = $t(c), Ce(c, m, y, !0), c = null), f.patchFlag === -2 && (w = !1, f.dynamicChildren = null);
        const {
            type: b,
            ref: I,
            shapeFlag: E
        } = f;
        switch (b) {
            case fn:
                V(c, f, h, g);
                break;
            case Re:
                H(c, f, h, g);
                break;
            case yn:
                c == null && oe(f, h, g, M);
                break;
            case xe:
                C(c, f, h, g, m, y, M, x, w);
                break;
            default:
                E & 1 ? te(c, f, h, g, m, y, M, x, w):
                    E & 6 ? z(c, f, h, g, m, y, M, x, w):
                        (E & 64 || E & 128) && b.process(c, f, h, g, m, y, M, x, w, it)
        }
        I != null && m && Bn(I, c && c.ref, y, f || c, !f)
    }, V = (c, f, h, g) = > {
        if (c == null) s(f.el = l(f.children), h, g);
        else {
            const m = f.el = c.el;
            f.children !== c.children && u(m, f.children)
        }
    }, H = (c, f, h, g) = > {
        c == null ? s(f.el = a(f.children || ""), h, g) : f.el = c.el
    }, oe = (c, f, h, g) = > {
        [c.el, c.anchor] = N(c.children, f, h, g, c.el, c.anchor)
    }, R = ({
        el: c,
        anchor: f
    }, h, g) = > {
        let m;
        for (; c && c !== f;) m = _(c), s(c, h, g), c = m;
        s(f, h, g)
    }, X = ({
        el: c,
        anchor: f
    }) = > {
        let h;
        for (; c && c !== f;) h = _(c), i(c), c = h;
        i(f)
    }, te = (c, f, h, g, m, y, M, x, w) = > {
        M = M || f.type === "svg", c == null ? Fe(f, h, g, m, y, M, x, w) : q(c, f, m, y, M, x, w)
    }, Fe = (c, f, h, g, m, y, M, x) = > {
        let w, b;
        const {
            type: I,
            props: E,
            shapeFlag: A,
            transition: O,
            dirs: L
        } = c;
        if (w = c.el = o(c.type, y, E && E.is, E), A & 8 ? d(w, c.children) : A & 16 && F(c.children, w, null, g, m, y && I !== "foreignObject", M, x), L && Ye(c, null, g, "created"), Ee(w, c, c.scopeId, M, g), E) {
            for (const j in E) j !== "value" && !Dt(j) && r(w, j, null, E[j], y, c.children, g, m, Oe);
            "value" in E && r(w, "value", null, E.value), (b = E.onVnodeBeforeMount) && Ie(b, g, c)
        }
        L && Ye(c, null, g, "beforeMount");
        const k = (!m || m && !m.pendingBranch) && O && !O.persisted;
        k && O.beforeEnter(w), s(w, f, h), ((b = E && E.onVnodeMounted) || k || L) && ae(() = > {
            b && Ie(b, g, c), k && O.enter(w), L && Ye(c, null, g, "mounted")
        }, m)
    }, Ee = (c, f, h, g, m) = > {
        if (h && T(c, h), g) for (let y = 0; y < g.length; y++) T(c, g[y]);
        if (m) {
            let y = m.subTree;
            if (f === y) {
                const M = m.vnode;
                Ee(c, M, M.scopeId, M.slotScopeIds, m.parent)
            }
        }
    }, F = (c, f, h, g, m, y, M, x, w = 0) = > {
        for (let b = w; b < c.length; b++) {
            const I = c[b] = x ? He(c[b]) : Ae(c[b]);
            $(null, I, f, h, g, m, y, M, x)
        }
    }, q = (c, f, h, g, m, y, M) = > {
        const x = f.el = c.el;
        let {
            patchFlag: w,
            dynamicChildren: b,
            dirs: I
        } = f;
        w |= c.patchFlag & 16;
        const E = c.props || K, A = f.props || K;
        let O;
        h && ze(h, !1), (O = A.onVnodeBeforeUpdate) && Ie(O, h, f, c), I && Ye(f, c, h, "beforeUpdate"), h && ze(h, !0);
        const L = m && f.type !== "foreignObject";
        if (b ? W(c.dynamicChildren, b, x, h, g, L, y) : M || U(c, f, x, null, h, g, L, y, !1), w > 0) {
            if (w & 16) ie(x, f, E, A, h, g, m);
            else if (w & 2 && E.class !== A.class && r(x, "class", null, A.class, m), w & 4 && r(x, "style", E.style, A.style, m), w & 8) {
                const k = f.dynamicProps;
                for (let j = 0; j < k.length; j++) {
                    const Q = k[j], ve = E[Q], rt = A[Q];
                    (rt !== ve || Q === "value") && r(x, Q, ve, rt, m, c.children, h, g, Oe)
                }
            }
            w & 1 && c.children !== f.children && d(x, f.children)
        } else !M && b == null && ie(x, f, E, A, h, g, m);
        ((O = A.onVnodeUpdated) || I) && ae(() = > {
            O && Ie(O, h, f, c), I && Ye(f, c, h, "updated")
        }, g)
    }, W = (c, f, h, g, m, y, M) = > {
        for (let x = 0; x < f.length; x++) {
            const w = c[x], b = f[x], I = w.el && (w.type === xe || !Ze(w, b) || w.shapeFlag & 70) ? p(w.el) : h;
            $(w, b, I, null, g, m, y, M, !0)
        }
    }, ie = (c, f, h, g, m, y, M) = > {
        if (h !== g) {
            if (h !== K) for (const x in h)!Dt(x) && !(x in g) && r(c, x, h[x], null, M, f.children, m, y, Oe);
            for (const x in g) {
                if (Dt(x)) continue;
                const w = g[x], b = h[x];
                w !== b && x !== "value" && r(c, x, b, w, M, f.children, m, y, Oe)
            }
            "value" in g && r(c, "value", h.value, g.value)
        }
    }, C = (c, f, h, g, m, y, M, x, w) = > {
        const b = f.el = c ? c.el : l(""), I = f.anchor = c ? c.anchor : l("");
        let {
            patchFlag: E,
            dynamicChildren: A,
            slotScopeIds: O
        } = f;
        O && (x = x ? x.concat(O) : O), c == null ? (s(b, h, g), s(I, h, g), F(f.children, h, I, m, y, M, x, w)) : E > 0 && E & 64 && A && c.dynamicChildren ? (W(c.dynamicChildren, A, h, m, y, M, x), (f.key != null || m && f === m.subTree) && Hi(c, f, !0)) : U(c, f, h, I, m, y, M, x, w)
    }, z = (c, f, h, g, m, y, M, x, w) = > {
        f.slotScopeIds = x, c == null ? f.shapeFlag & 512 ? m.ctx.activate(f, h, g, M, w) : ue(f, h, g, m, y, M, w) : mt(c, f, w)
    }, ue = (c, f, h, g, m, y, M) = > {
        const x = c.component = Zo(c, g, m);
        if (cn(c) && (x.ctx.renderer = it), el(x), x.asyncDep) {
            if (m && m.registerDep(x, ne), !c.el) {
                const w = x.subTree = pe(Re);
                H(null, w, f, h)
            }
            return
        }
        ne(x, c, f, h, m, y, M)
    }, mt = (c, f, h) = > {
        const g = f.component = c.component;
        if (lo(c, f, h)) if (g.asyncDep && !g.asyncResolved) {
            J(g, f, h);
            return
        } else g.next = f, Gr(g.update), g.update();
        else f.el = c.el, g.vnode = f
    }, ne = (c, f, h, g, m, y, M) = > {
        const x = () = > {
            if (c.isMounted) {
                let {
                    next: I,
                    bu: E,
                    u: A,
                    parent: O,
                    vnode: L
                } = c, k = I, j;
                ze(c, !1), I ? (I.el = L.el, J(c, I, M)) : I = L, E && gn(E), (j = I.props && I.props.onVnodeBeforeUpdate) && Ie(j, O, I, L), ze(c, !0);
                const Q = _n(c), ve = c.subTree;
                c.subTree = Q, $(ve, Q, p(ve.el), $t(ve), c, m, y), I.el = Q.el, k === null && co(c, Q.el), A && ae(A, m), (j = I.props && I.props.onVnodeUpdated) && ae(() = > Ie(j, O, I, L), m)
            } else {
                let I;
                const {
                    el: E,
                    props: A
                } = f, {
                    bm: O,
                    m: L,
                    parent: k
                } = c, j = jt(f);
                if (ze(c, !1), O && gn(O), !j && (I = A && A.onVnodeBeforeMount) && Ie(I, k, f), ze(c, !0), E && pn) {
                    const Q = () = > {
                        c.subTree = _n(c), pn(E, c.subTree, c, m, null)
                    };
                    j ? f.type.__asyncLoader().then(() = > !c.isUnmounted && Q()) : Q()
                } else {
                    const Q = c.subTree = _n(c);
                    $(null, Q, h, g, c, m, y), f.el = Q.el
                }
                if (L && ae(L, m), !j && (I = A && A.onVnodeMounted)) {
                    const Q = f;
                    ae(() = > Ie(I, k, Q), m)
                }(f.shapeFlag & 256 || k && jt(k.vnode) && k.vnode.shapeFlag & 256) && c.a && ae(c.a, m), c.isMounted = !0, f = h = g = null
            }
        }, w = c.effect = new qn(x, () = > is(b), c.scope), b = c.update = () = > w.run();
        b.id = c.uid, ze(c, !0), b()
    }, J = (c, f, h) = > {
        f.component = c;
        const g = c.vnode.props;
        c.vnode = f, c.next = null, Fo(c, f.props, g, h), Do(c, f.children, h), ht(), Ms(), pt()
    }, U = (c, f, h, g, m, y, M, x, w = !1) = > {
        const b = c && c.children, I = c ? c.shapeFlag : 0, E = f.children, {
            patchFlag: A,
            shapeFlag: O
        } = f;
        if (A > 0) {
            if (A & 128) {
                At(b, E, h, g, m, y, M, x, w);
                return
            } else if (A & 256) {
                We(b, E, h, g, m, y, M, x, w);
                return
            }
        }
        O & 8 ? (I & 16 && Oe(b, m, y), E !== b && d(h, E)) : I & 16 ? O & 16 ? At(b, E, h, g, m, y, M, x, w) : Oe(b, m, y, !0) : (I & 8 && d(h, ""), O & 16 && F(E, h, g, m, y, M, x, w))
    }, We = (c, f, h, g, m, y, M, x, w) = > {
        c = c || ot, f = f || ot;
        const b = c.length, I = f.length, E = Math.min(b, I);
        let A;
        for (A = 0; A < E; A++) {
            const O = f[A] = w ? He(f[A]) : Ae(f[A]);
            $(c[A], O, h, null, m, y, M, x, w)
        }
        b > I ? Oe(c, m, y, !0, !1, E) : F(f, h, g, m, y, M, x, w, E)
    }, At = (c, f, h, g, m, y, M, x, w) = > {
        let b = 0;
        const I = f.length;
        let E = c.length - 1, A = I - 1;
        for (; b <= E && b <= A;) {
            const O = c[b], L = f[b] = w ? He(f[b]) : Ae(f[b]);
            if (Ze(O, L)) $(O, L, h, null, m, y, M, x, w);
            else break;
            b++
        }
        for (; b <= E && b <= A;) {
            const O = c[E], L = f[A] = w ? He(f[A]) : Ae(f[A]);
            if (Ze(O, L)) $(O, L, h, null, m, y, M, x, w);
            else break;
            E--, A--
        }
        if (b > E) {
            if (b <= A) {
                const O = A + 1, L = O < I ? f[O].el : g;
                for (; b <= A;) $(null, f[b] = w ? He(f[b]) : Ae(f[b]), h, L, m, y, M, x, w), b++
            }
        } else if (b > A) for (; b <= E;) Ce(c[b], m, y, !0), b++;
        else {
            const O = b, L = b, k = new Map;
            for (b = L; b <= A; b++) {
                const de = f[b] = w ? He(f[b]) : Ae(f[b]);
                de.key != null && k.set(de.key, b)
            }
            let j, Q = 0;
            const ve = A - L + 1;
            let rt = !1, ds = 0;
            const gt = new Array(ve);
            for (b = 0; b < ve; b++) gt[b] = 0;
            for (b = O; b <= E; b++) {
                const de = c[b];
                if (Q >= ve) {
                    Ce(de, m, y, !0);
                    continue
                }
                let Te;
                if (de.key != null) Te = k.get(de.key);
                else for (j = L; j <= A; j++) if (gt[j - L] === 0 && Ze(de, f[j])) {
                    Te = j;
                    break
                }
                Te === void 0 ? Ce(de, m, y, !0) : (gt[Te - L] = b + 1, Te >= ds ? ds = Te : rt = !0, $(de, f[Te], h, null, m, y, M, x, w), Q++)
            }
            const hs = rt ? Xo(gt) : ot;
            for (j = hs.length - 1, b = ve - 1; b >= 0; b--) {
                const de = L + b, Te = f[de], ps = de + 1 < I ? f[de + 1].el : g;
                gt[b] === 0 ? $(null, Te, h, ps, m, y, M, x, w) : rt && (j < 0 || b !== hs[j] ? Ke(Te, h, ps, 2) : j--)
            }
        }
    }, Ke = (c, f, h, g, m = null) = > {
        const {
            el: y,
            type: M,
            transition: x,
            children: w,
            shapeFlag: b
        } = c;
        if (b & 6) {
            Ke(c.component.subTree, f, h, g);
            return
        }
        if (b & 128) {
            c.suspense.move(f, h, g);
            return
        }
        if (b & 64) {
            M.move(c, f, h, it);
            return
        }
        if (M === xe) {
            s(y, f, h);
            for (let E = 0; E < w.length; E++) Ke(w[E], f, h, g);
            s(c.anchor, f, h);
            return
        }
        if (M === yn) {
            R(c, f, h);
            return
        }
        if (g !== 2 && b & 1 && x) if (g === 0) x.beforeEnter(y), s(y, f, h), ae(() = > x.enter(y), m);
        else {
            const {
                leave: E,
                delayLeave: A,
                afterLeave: O
            } = x, L = () = > s(y, f, h), k = () = > {
                E(y, () = > {
                    L(), O && O()
                })
            };
            A ? A(y, L, k) : k()
        } else s(y, f, h)
    }, Ce = (c, f, h, g = !1, m = !1) = > {
        const {
            type: y,
            props: M,
            ref: x,
            children: w,
            dynamicChildren: b,
            shapeFlag: I,
            patchFlag: E,
            dirs: A
        } = c;
        if (x != null && Bn(x, null, h, c, !0), I & 256) {
            f.ctx.deactivate(c);
            return
        }
        const O = I & 1 && A, L = !jt(c);
        let k;
        if (L && (k = M && M.onVnodeBeforeUnmount) && Ie(k, f, c), I & 6) Zi(c.component, h, g);
        else {
            if (I & 128) {
                c.suspense.unmount(h, g);
                return
            }
            O && Ye(c, null, f, "beforeUnmount"), I & 64 ? c.type.remove(c, f, h, m, it, g) : b && (y !== xe || E > 0 && E & 64) ? Oe(b, f, h, !1, !0) : (y === xe && E & 384 || !m && I & 16) && Oe(w, f, h), g && fs(c)
        }(L && (k = M && M.onVnodeUnmounted) || O) && ae(() = > {
            k && Ie(k, f, c), O && Ye(c, null, f, "unmounted")
        }, h)
    }, fs = c = > {
        const {
            type: f,
            el: h,
            anchor: g,
            transition: m
        } = c;
        if (f === xe) {
            Qi(h, g);
            return
        }
        if (f === yn) {
            X(c);
            return
        }
        const y = () = > {
            i(h), m && !m.persisted && m.afterLeave && m.afterLeave()
        };
        if (c.shapeFlag & 1 && m && !m.persisted) {
            const {
                leave: M,
                delayLeave: x
            } = m, w = () = > M(h, y);
            x ? x(c.el, y, w) : w()
        } else y()
    }, Qi = (c, f) = > {
        let h;
        for (; c !== f;) h = _(c), i(c), c = h;
        i(f)
    }, Zi = (c, f, h) = > {
        const {
            bum: g,
            scope: m,
            update: y,
            subTree: M,
            um: x
        } = c;
        g && gn(g), m.stop(), y && (y.active = !1, Ce(M, c, f, h)), x && ae(x, f), ae(() = > {
            c.isUnmounted = !0
        }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve())
    }, Oe = (c, f, h, g = !1, m = !1, y = 0) = > {
        for (let M = y; M < c.length; M++) Ce(c[M], f, h, g, m)
    }, $t = c = > c.shapeFlag & 6 ? $t(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : _(c.anchor || c.el), us = (c, f, h) = > {
        c == null ? f._vnode && Ce(f._vnode, null, null, !0) : $(f._vnode || null, c, f, null, null, null, h), Ms(), bi(), f._vnode = c
    }, it = {
        p: $,
        um: Ce,
        m: Ke,
        r: fs,
        mt: ue,
        mc: F,
        pc: U,
        pbc: W,
        n: $t,
        o: e
    };
    let hn, pn;
    return t && ([hn, pn] = t(it)), {
        render: us,
        hydrate: hn,
        createApp: jo(us, hn)
    }
}
function ze({
    effect: e,
    update: t
}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Hi(e, t, n = !1) {
    const s = e.children, i = t.children;
    if (P(s) && P(i)) for (let r = 0; r < s.length; r++) {
        const o = s[r];
        let l = i[r];
        l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = He(i[r]), l.el = o.el), n || Hi(o, l)), l.type === fn && (l.el = o.el)
    }
}
function Xo(e) {
    const t = e.slice(), n = [0];
    let s, i, r, o, l;
    const a = e.length;
    for (s = 0; s < a; s++) {
        const u = e[s];
        if (u !== 0) {
            if (i = n[n.length - 1], e[i] < u) {
                t[s] = i, n.push(s);
                continue
            }
            for (r = 0, o = n.length - 1; r < o;) l = r + o >> 1, e[n[l]] < u ? r = l + 1 : o = l;
            u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s)
        }
    }
    for (r = n.length, o = n[r - 1]; r-- > 0;) n[r] = o, o = t[o];
    return n
}
const Wo = e = > e.__isTeleport, xe = Symbol(void 0), fn = Symbol(void 0), Re = Symbol(void 0), yn = Symbol(void 0), yt = [];
let we = null;

function ji(e = !1) {
    yt.push(we = e ? null : [])
}
function Ko() {
    yt.pop(), we = yt[yt.length - 1] || null
}
let Ct = 1;

function Rs(e) {
    Ct += e
}
function Yo(e) {
    return e.dynamicChildren = Ct > 0 ? we || ot : null, Ko(), Ct > 0 && we && we.push(e), e
}
function Ui(e, t, n, s, i, r) {
    return Yo(v(e, t, n, s, i, r, !0))
}
function Dn(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function Ze(e, t) {
    return e.type === t.type && e.key === t.key
}
const un = "__vInternal", ki = ({
    key: e
}) = > e ? ? null, Ut = ({
    ref: e,
    ref_key: t,
    ref_for: n
}) = > e != null ? ee(e) || ce(e) || S(e) ? {
    i: ge,
    r: e,
    k: t,
    f: !! n
} : e : null;

function v(e, t = null, n = null, s = 0, i = null, r = e === xe ? 0 : 1, o = !1, l = !1) {
    const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && ki(t),
        ref: t && Ut(t),
        scopeId: ln,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: s,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: ge
    };
    return l ? (ls(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= ee(n) ? 8 : 16), Ct > 0 && !o && we && (a.patchFlag > 0 || r & 6) && a.patchFlag !== 32 && we.push(a), a
}
const pe = zo;

function zo(e, t = null, n = null, s = 0, i = null, r = !1) {
    if ((!e || e === Io) && (e = Re), Dn(e)) {
        const l = Xe(e, t, !0);
        return n && ls(l, n), Ct > 0 && !r && we && (l.shapeFlag & 6 ? we[we.indexOf(e)] = l : we.push(l)), l.patchFlag |= -2, l
    }
    if (il(e) && (e = e.__vccOpts), t) {
        t = Vo(t);
        let {
            class: l,
            style: a
        } = t;
        l && !ee(l) && (t.class = Xn(l)), Y(a) && (hi(a) && !P(a) && (a = se({}, a)), t.style = kn(a))
    }
    const o = ee(e) ? 1 : ao(e) ? 128 : Wo(e) ? 64 : Y(e) ? 4 : S(e) ? 2 : 0;
    return v(e, t, n, s, i, o, r, !0)
}
function Vo(e) {
    return e ? hi(e) || un in e ? se({}, e) : e : null
}
function Xe(e, t, n = !1) {
    const {
        props: s,
        ref: i,
        patchFlag: r,
        children: o
    } = e, l = t ? qo(s || {}, t) : s;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && ki(l),
        ref: t && t.ref ? n && i ? P(i) ? i.concat(Ut(t)) : [i, Ut(t)] : Ut(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: o,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== xe ? r === -1 ? 16 : r | 16 : r,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Xe(e.ssContent),
        ssFallback: e.ssFallback && Xe(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function Yt(e = " ", t = 0) {
    return pe(fn, null, e, t)
}
function Ae(e) {
    return e == null || typeof e == "boolean" ? pe(Re) : P(e) ? pe(xe, null, e.slice()) : typeof e == "object" ? He(e) : pe(fn, null, String(e))
}
function He(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xe(e)
}
function ls(e, t) {
    let n = 0;
    const {
        shapeFlag: s
    } = e;
    if (t == null) t = null;
    else if (P(t)) n = 16;
    else if (typeof t == "object") if (s & 65) {
        const i = t.
        default;
        i && (i._c && (i._d = !1), ls(e, i()), i._c && (i._d = !0));
        return
    } else {
        n = 32;
        const i = t._;
        !i && !(un in t) ? t._ctx = ge : i === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    } else S(t) ? (t = {
        default: t,
        _ctx: ge
    }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Yt(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}
function qo(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const i in s) if (i === "class") t.class !== s.class && (t.class = Xn([t.class, s.class]));
        else if (i === "style") t.style = kn([t.style, s.style]);
        else if (en(i)) {
            const r = t[i], o = s[i];
            o && r !== o && !(P(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o)
        } else i !== "" && (t[i] = s[i])
    }
    return t
}
function Ie(e, t, n, s = null) {
    _e(e, t, 7, [n, s])
}
const Jo = Di();
let Qo = 0;

function Zo(e, t, n) {
    const s = e.type, i = (t ? t.appContext : e.appContext) || Jo, r = {
        uid: Qo++,
        vnode: e,
        type: s,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new mr(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(i.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Ni(s, i),
        emitsOptions: yi(s, i),
        emit: null,
        emitted: null,
        propsDefaults: K,
        inheritAttrs: s.inheritAttrs,
        ctx: K,
        data: K,
        props: K,
        attrs: K,
        slots: K,
        refs: K,
        setupState: K,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return r.ctx = {
        _: r
    }, r.root = t ? t.root : r, r.emit = no.bind(null, r), e.ce && e.ce(r), r
}
let Z = null;
const Go = () = > Z || ge, ut = e = > {
    Z = e, e.scope.on()
}, nt = () = > {
    Z && Z.scope.off(), Z = null
};

function Xi(e) {
    return e.vnode.shapeFlag & 4
}
let Tt = !1;

function el(e, t = !1) {
    Tt = t;
    const {
        props: n,
        children: s
    } = e.vnode, i = Xi(e);
    No(e, n, i, t), Bo(e, s);
    const r = i ? tl(e, t) : void 0;
    return Tt = !1, r
}
function tl(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = pi(new Proxy(e.ctx, Ao));
    const {
        setup: s
    } = n;
    if (s) {
        const i = e.setupContext = s.length > 1 ? sl(e) : null;
        ut(e), ht();
        const r = Ue(s, e, 0, [e.props, i]);
        if (pt(), nt(), Zs(r)) {
            if (r.then(nt, nt), t) return r.then(o = > {
                Ss(e, o, t)
            }).
            catch (o = > {
                rn(o, e, 0)
            });
            e.asyncDep = r
        } else Ss(e, r, t)
    } else Wi(e, t)
}
function Ss(e, t, n) {
    S(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) && (e.setupState = mi(t)), Wi(e, n)
}
let Ns;

function Wi(e, t, n) {
    const s = e.type;
    if (!e.render) {
        if (!t && Ns && !s.render) {
            const i = s.template || rs(e).template;
            if (i) {
                const {
                    isCustomElement: r,
                    compilerOptions: o
                } = e.appContext.config, {
                    delimiters: l,
                    compilerOptions: a
                } = s, u = se(se({
                    isCustomElement: r,
                    delimiters: l
                }, o), a);
                s.render = Ns(i, u)
            }
        }
        e.render = s.render || Me
    }
    ut(e), ht(), $o(e), pt(), nt()
}
function nl(e) {
    return new Proxy(e.attrs, {
        get(t, n) {
            return fe(e, "get", "$attrs"), t[n]
        }
    })
}
function sl(e) {
    const t = s = > {
        e.exposed = s || {}
    };
    let n;
    return {
        get attrs() {
            return n || (n = nl(e))
        }, slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function dn(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(mi(pi(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in xt) return xt[n](e)
        }, has(t, n) {
            return n in t || n in xt
        }
    }))
}
function il(e) {
    return S(e) && "__vccOpts" in e
}
const rl = (e, t) = > qr(e, t, Tt);

function ol(e, t, n) {
    const s = arguments.length;
    return s === 2 ? Y(t) && !P(t) ? Dn(t) ? pe(e, null, [t]) : pe(e, t) : pe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Dn(n) && (n = [n]), pe(e, t, n))
}
const ll = Symbol(""), cl = () = > Ht(ll), al = "3.2.47", fl = "http://www.w3.org/2000/svg", Ge = typeof document < "u" ? document : null, Fs = Ge && Ge.createElement("template"), ul = {
    insert: (e, t, n) = > {
        t.insertBefore(e, n || null)
    },
    remove: e = > {
        const t = e.parentNode;
        t && t.removeChild(e)
    },
    createElement: (e, t, n, s) = > {
        const i = t ? Ge.createElementNS(fl, e) : Ge.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i
    },
    createText: e = > Ge.createTextNode(e),
    createComment: e = > Ge.createComment(e),
    setText: (e, t) = > {
        e.nodeValue = t
    },
    setElementText: (e, t) = > {
        e.textContent = t
    },
    parentNode: e = > e.parentNode,
    nextSibling: e = > e.nextSibling,
    querySelector: e = > Ge.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, i, r) {
        const o = n ? n.previousSibling : t.lastChild;
        if (i && (i === r || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)););
        else {
            Fs.innerHTML = s ? ` < svg > $ {
                e
            } < /svg>`:e;const l=Fs.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function dl(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function hl(e,t,n){const s=e.style,i=ee(n);if(n&&!i){if(t&&!ee(t))for(const r in t)n[r]==null&&Hn(s,r,"");for(const r in n)Hn(s,r,n[r])}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const Ls=/\s * !important$ / ;

            function Hn(e, t, n) {
                if (P(n)) n.forEach(s = > Hn(e, t, s));
                else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
                else {
                    const s = pl(e, t);
                    Ls.test(n) ? e.setProperty(dt(s), n.replace(Ls, ""), "important") : e[s] = n
                }
            }
            const Bs = ["Webkit", "Moz", "ms"], wn = {};

            function pl(e, t) {
                const n = wn[t];
                if (n) return n;
                let s = ft(t);
                if (s !== "filter" && s in e) return wn[t] = s;
                s = ti(s);
                for (let i = 0; i < Bs.length; i++) {
                    const r = Bs[i] + s;
                    if (r in e) return wn[t] = r
                }
                return t
            }
            const Ds = "http://www.w3.org/1999/xlink";

            function ml(e, t, n, s, i) {
                if (s && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(Ds, t.slice(6, t.length)) : e.setAttributeNS(Ds, t, n);
                else {
                    const r = ir(t);
                    n == null || r && !qs(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n)
                }
            }
            function gl(e, t, n, s, i, r, o) {
                if (t === "innerHTML" || t === "textContent") {
                    s && o(s, i, r), e[t] = n ? ? "";
                    return
                }
                if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
                    e._value = n;
                    const a = n ? ? "";
                    (e.value !== a || e.tagName === "OPTION") && (e.value = a), n == null && e.removeAttribute(t);
                    return
                }
                let l = !1;
                if (n === "" || n == null) {
                    const a = typeof e[t];
                    a === "boolean" ? n = qs(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0)
                }
                try {
                    e[t] = n
                } catch {}
                l && e.removeAttribute(t)
            }
            function _l(e, t, n, s) {
                e.addEventListener(t, n, s)
            }
            function vl(e, t, n, s) {
                e.removeEventListener(t, n, s)
            }
            function bl(e, t, n, s, i = null) {
                const r = e._vei || (e._vei = {}), o = r[t];
                if (s && o) o.value = s;
                else {
                    const[l, a] = xl(t);
                    if (s) {
                        const u = r[t] = Ml(s, i);
                        _l(e, l, u, a)
                    } else o && (vl(e, l, o, a), r[t] = void 0)
                }
            }
            const Hs = /(?:Once|Passive|Capture)$/;

            function xl(e) {
                let t;
                if (Hs.test(e)) {
                    t = {};
                    let s;
                    for (; s = e.match(Hs);) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0
                }
                return [e[2] === ":" ? e.slice(3) : dt(e.slice(2)), t]
            }
            let Mn = 0;
            const yl = Promise.resolve(), wl = () = > Mn || (yl.then(() = > Mn = 0), Mn = Date.now());

            function Ml(e, t) {
                const n = s = > {
                    if (!s._vts) s._vts = Date.now();
                    else if (s._vts <= n.attached) return;
                    _e(El(s, n.value), t, 5, [s])
                };
                return n.value = e, n.attached = wl(), n
            }
            function El(e, t) {
                if (P(t)) {
                    const n = e.stopImmediatePropagation;
                    return e.stopImmediatePropagation = () = > {
                        n.call(e), e._stopped = !0
                    }, t.map(s = > i = > !i._stopped && s && s(i))
                } else return t
            }
            const js = /^on[a-z]/, Cl = (e, t, n, s, i = !1, r, o, l, a) = > {
                t === "class" ? dl(e, s, i) : t === "style" ? hl(e, n, s) : en(t) ? Wn(t) || bl(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Tl(e, t, s, i)) ? gl(e, t, s, r, o, l, a) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ml(e, t, s, i))
            };

            function Tl(e, t, n, s) {
                return s ? !! (t === "innerHTML" || t === "textContent" || t in e && js.test(t) && S(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || js.test(t) && ee(n) ? !1 : t in e
            }
            const Be = "transition", _t = "animation", cs = (e, {
                slots: t
            }) = > ol(Ci, Il(e), t);
            cs.displayName = "Transition";
            const Ki = {
                name: String,
                type: String,
                css: {
                    type: Boolean,
                    default: !0
                },
                duration: [String, Number, Object],
                enterFromClass: String,
                enterActiveClass: String,
                enterToClass: String,
                appearFromClass: String,
                appearActiveClass: String,
                appearToClass: String,
                leaveFromClass: String,
                leaveActiveClass: String,
                leaveToClass: String
            };
            cs.props = se({}, Ci.props, Ki);
            const Ve = (e, t = []) = > {
                P(e) ? e.forEach(n = > n(...t)) : e && e(...t)
            }, Us = e = > e ? P(e) ? e.some(t = > t.length > 1) : e.length > 1 : !1;

            function Il(e) {
                const t = {};
                for (const C in e) C in Ki || (t[C] = e[C]);
                if (e.css === !1) return t;
                const {
                    name: n = "v",
                    type: s,
                    duration: i,
                    enterFromClass: r = `$ {
                        n
                    } - enter - from`,
                    enterActiveClass: o = `$ {
                        n
                    } - enter - active`,
                    enterToClass: l = `$ {
                        n
                    } - enter - to`,
                    appearFromClass: a = r,
                    appearActiveClass: u = o,
                    appearToClass: d = l,
                    leaveFromClass: p = `$ {
                        n
                    } - leave - from`,
                    leaveActiveClass: _ = `$ {
                        n
                    } - leave - active`,
                    leaveToClass: T = `$ {
                        n
                    } - leave - to`
                } = e, N = Al(i), $ = N && N[0], V = N && N[1], {
                    onBeforeEnter: H,
                    onEnter: oe,
                    onEnterCancelled: R,
                    onLeave: X,
                    onLeaveCancelled: te,
                    onBeforeAppear: Fe = H,
                    onAppear: Ee = oe,
                    onAppearCancelled: F = R
                } = t, q = (C, z, ue) = > {
                    qe(C, z ? d : l), qe(C, z ? u : o), ue && ue()
                }, W = (C, z) = > {
                    C._isLeaving = !1, qe(C, p), qe(C, T), qe(C, _), z && z()
                }, ie = C = > (z, ue) = > {
                    const mt = C ? Ee : oe, ne = () = > q(z, C, ue);
                    Ve(mt, [z, ne]), ks(() = > {
                        qe(z, C ? a : r), De(z, C ? d : l), Us(mt) || Xs(z, s, $, ne)
                    })
                };
                return se(t, {
                    onBeforeEnter(C) {
                        Ve(H, [C]), De(C, r), De(C, o)
                    }, onBeforeAppear(C) {
                        Ve(Fe, [C]), De(C, a), De(C, u)
                    }, onEnter: ie(!1),
                    onAppear: ie(!0),
                    onLeave(C, z) {
                        C._isLeaving = !0;
                        const ue = () = > W(C, z);
                        De(C, p), Pl(), De(C, _), ks(() = > {
                            C._isLeaving && (qe(C, p), De(C, T), Us(X) || Xs(C, s, V, ue))
                        }), Ve(X, [C, ue])
                    },
                    onEnterCancelled(C) {
                        q(C, !1), Ve(R, [C])
                    },
                    onAppearCancelled(C) {
                        q(C, !0), Ve(F, [C])
                    },
                    onLeaveCancelled(C) {
                        W(C), Ve(te, [C])
                    }
                })
            }
            function Al(e) {
                if (e == null) return null;
                if (Y(e)) return [En(e.enter), En(e.leave)]; {
                    const t = En(e);
                    return [t, t]
                }
            }
            function En(e) {
                return hr(e)
            }
            function De(e, t) {
                t.split(/\s+/).forEach(n = > n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t)
            }
            function qe(e, t) {
                t.split(/\s+/).forEach(s = > s && e.classList.remove(s));
                const {
                    _vtc: n
                } = e;
                n && (n.delete(t), n.size || (e._vtc = void 0))
            }
            function ks(e) {
                requestAnimationFrame(() = > {
                    requestAnimationFrame(e)
                })
            }
            let $l = 0;

            function Xs(e, t, n, s) {
                const i = e._endId = ++$l, r = () = > {
                    i === e._endId && s()
                };
                if (n) return setTimeout(r, n);
                const {
                    type: o,
                    timeout: l,
                    propCount: a
                } = Ol(e, t);
                if (!o) return s();
                const u = o + "end";
                let d = 0;
                const p = () = > {
                    e.removeEventListener(u, _), r()
                }, _ = T = > {
                    T.target === e && ++d >= a && p()
                };
                setTimeout(() = > {
                    d < a && p()
                }, l + 1), e.addEventListener(u, _)
            }
            function Ol(e, t) {
                const n = window.getComputedStyle(e), s = N = > (n[N] || "").split(", "), i = s(`$ {
                    Be
                }
                Delay`), r = s(`$ {
                    Be
                }
                Duration`), o = Ws(i, r), l = s(`$ {
                    _t
                }
                Delay`), a = s(`$ {
                    _t
                }
                Duration`), u = Ws(l, a);
                let d = null, p = 0, _ = 0;
                t === Be ? o > 0 && (d = Be, p = o, _ = r.length) : t === _t ? u > 0 && (d = _t, p = u, _ = a.length) : (p = Math.max(o, u), d = p > 0 ? o > u ? Be : _t : null, _ = d ? d === Be ? r.length : a.length : 0);
                const T = d === Be && /\b(transform|all)(,|$)/.test(s(`$ {
                    Be
                }
                Property`).toString());
                return {
                    type: d,
                    timeout: p,
                    propCount: _,
                    hasTransform: T
                }
            }
            function Ws(e, t) {
                for (; e.length < t.length;) e = e.concat(e);
                return Math.max(...t.map((n, s) = > Ks(n) + Ks(e[s])))
            }
            function Ks(e) {
                return Number(e.slice(0, -1).replace(",", ".")) * 1e3
            }
            function Pl() {
                return document.body.offsetHeight
            }
            const Rl = ["ctrl", "shift", "alt", "meta"], Sl = {
                stop: e = > e.stopPropagation(),
                prevent: e = > e.preventDefault(),
                self: e = > e.target !== e.currentTarget,
                ctrl: e = > !e.ctrlKey,
                shift: e = > !e.shiftKey,
                alt: e = > !e.altKey,
                meta: e = > !e.metaKey,
                left: e = > "button" in e && e.button !== 0,
                middle: e = > "button" in e && e.button !== 1,
                right: e = > "button" in e && e.button !== 2,
                exact: (e, t) = > Rl.some(n = > e[`$ {
                    n
                }
                Key`] && !t.includes(n))
            }, Lt = (e, t) = > (n, ...s) = > {
                for (let i = 0; i < t.length; i++) {
                    const r = Sl[t[i]];
                    if (r && r(n, t)) return
                }
                return e(n, ...s)
            }, Nl = {
                beforeMount(e, {
                    value: t
                }, {
                    transition: n
                }) {
                    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : vt(e, t)
                }, mounted(e, {
                    value: t
                }, {
                    transition: n
                }) {
                    n && t && n.enter(e)
                }, updated(e, {
                    value: t,
                    oldValue: n
                }, {
                    transition: s
                }) {
                    !t != !n && (s ? t ? (s.beforeEnter(e), vt(e, !0), s.enter(e)) : s.leave(e, () = > {
                        vt(e, !1)
                    }) : vt(e, t))
                }, beforeUnmount(e, {
                    value: t
                }) {
                    vt(e, t)
                }
            };

            function vt(e, t) {
                e.style.display = t ? e._vod : "none"
            }
            const Fl = se({
                patchProp: Cl
            }, ul);
            let Ys;

            function Ll() {
                return Ys || (Ys = Uo(Fl))
            }
            const Bl = (...e) = > {
                const t = Ll().createApp(...e), {
                    mount: n
                } = t;
                return t.mount = s = > {
                    const i = Dl(s);
                    if (!i) return;
                    const r = t._component;
                    !S(r) && !r.render && !r.template && (r.template = i.innerHTML), i.innerHTML = "";
                    const o = n(i, !1, i instanceof SVGElement);
                    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o
                }, t
            };

            function Dl(e) {
                return ee(e) ? document.querySelector(e) : e
            }
            const Hl = "" + new URL("BMW_White_Logo-c41f2160.svg", import.meta.url).href, jl = "" + new URL("logo-bmw-m-bcba7105.svg", import.meta.url).href, Ul = "" + new URL("kv-xm-registration-f906cb3e.jpg", import.meta.url).href, kl = "" + new URL("bmw-xm-9f573465.mp4", import.meta.url).href, Xl = {
                className: "flex items-center justify-center px-5 min-w-[180px] w-full max-w-[280px] md:max-w-[285px] min-h-[3.25rem] cursor-pointer mb-2.5 transition-all border-2 border-white hover:border-[#8e8e8e] text-white hover:text-[#8e8e8e]"
            }, Wl = {
                className: "font-bold"
            }, Kl = {
                __name: "transparent",
                props: {
                    cta: String
                },
                setup(e) {
                    return (t, n) = > (ji(), Ui("button", Xl, [v("span", Wl, rr(e.cta), 1)]))
                }
            }, Yl = "" + new URL("img-interior_exterior-history-66a6e42b.jpg", import.meta.url).href, zl = "" + new URL("img-interior_exterior-ferocity-e48a4b2e.jpg", import.meta.url).href, Vl = "" + new URL("img-interior_exterior-inspire-743a8d0f.jpg", import.meta.url).href, ql = "" + new URL("img-interior_exterior-engage-96bb5e3f.jpg", import.meta.url).href, Jl = "" + new URL("img-performance-thrill-761b9294.jpg", import.meta.url).href, Ql = "" + new URL("img-performance-boundaries-68e8197a.jpg", import.meta.url).href, Zl = "" + new URL("img-technology-command-861ebd3d.jpg", import.meta.url).href, Gl = "" + new URL("img-technology-curve-a11c3c92.jpg", import.meta.url).href;
            const ec = (e, t) = > {
                const n = e.__vccOpts || e;
                for (const[s, i] of t) n[s] = i;
                return n
            }, G = e = > (so("data-v-e398d5f2"), e = e(), io(), e), tc = {
                class: "floatingScrollTop fixed bottom-3 left-3 lg:bottom-10 lg:left-10 z-50 flex",
                id: "floatingScrollTop"
            }, nc = G(() = > v("span", {
                className: "font-bold w-5 h-5 block"
            }, [v("i", {
                class: "arrow up transition-all group-hover:border-[#8e8e8e]"
            })], -1)), sc = [nc], ic = {
                class: "masthead z-10 relative overflow-x-hidden",
                id: "masthead"
            }, rc = ["src"], oc = {
                class: "flex w-full mx-auto absolute top-0 left-0"
            }, lc = {
                class: "container"
            }, cc = {
                class: "flex flex-row mt-3 lg:mt-5"
            }, ac = ["src"], fc = ["src"], uc = {
                class: "mt-[70vw] lg:mt-[38vw]"
            }, dc = ["onClick"], hc = {
                class: "relative z-20 introduction mt-[-35vw]",
                id: "introduction"
            }, pc = {
                class: "container grid grid-cols-1"
            }, mc = G(() = > v("h1", {
                class: "text-4xl lg:text-5xl text-white text-right font-light xl:-mr-10 mb-3"
            }, [v("span", {
                class: "text-3xl lg:text-4xl block pr-52 lg:pr-[18rem] !mb-1"
            }, "DOMINATE"), Yt(" THE NARRATIVE. ")], -1)), gc = {
                class: "w-full block mt-8",
                autoplay: "",
                controls: "",
                muted: "",
                playsInline: "",
                autoBuffer: ""
            }, _c = ["src"], vc = G(() = > v("p", {
                class: "text-white lg:text-lg text-center font-thin mt-5"
            }, [Yt(" Defined by attitude. Driven by character. THEÂ XM â€” the ultimate driving beast. "), v("br", {
                class: "hidden lg:block"
            }), Yt("Dominate the roads with power and edginess like neverÂ before. ")], -1)), bc = {
                class: "relative mt-[4.5rem]",
                id: "main"
            }, xc = {
                class: "grid gap-3 lg:gap-0 lg:flex grid-cols-3 items-start justify-between lg:justify-around my-5 lg:my-16 lg:px-10 py-6 lg:py-10 text-white text-center text-[0.65rem] lg:text-sm font-bold border-t-2 border-b-2 border-neutral-500 sticky top-0"
            }, yc = ["onClick"], wc = ["onClick"], Mc = ["onClick"], Ec = {
                id: "interior_exterior"
            }, Cc = {
                class: "tab-interior_exterior text-white py-10"
            }, Tc = G(() = > v("div", {
                class: "container mt-10"
            }, [v("h2", {
                class: "text-[#979797] tracking-[0.4rem] text-xs font-bold text-center"
            }, " INTERIOR & EXTERIOR "), v("h3", {
                class: "text-white tracking-[0.3rem] text-3xl lg:text-4xl font-light text-center"
            }, " SHEATHED IN CHARISMA. ")], -1)), Ic = {
                class: "container-xl"
            }, Ac = {
                class: "grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 mt-10 lg:mt-16"
            }, $c = ["src"], Oc = G(() = > v("div", null, [v("h4", {
                class: "uppercase text-2xl lg:text-3xl mb-5 font-light lg:mt-10"
            }, " History Belongs To The Daring. "), v("p", {
                class: "lg:pr-8 mb-5"
            }, " History repeats itself. Twin laser-etched roundels inspired by the legendary BMWÂ M1 brings homage to the rich MÂ heritage. ")], -1)), Pc = {
                class: "container"
            }, Rc = {
                class: "grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 mt-5 lg:mt-8"
            }, Sc = {
                id: "#interior_exterior-2"
            }, Nc = ["src"], Fc = G(() = > v("h4", {
                class: "uppercase text-2xl lg:text-3xl mb-5 font-light mt-5 lg:pl-12"
            }, " Sculpted To Inspire. ", -1)), Lc = G(() = > v("p", {
                class: "lg:pl-12 mb-5"
            }, " Reflecting poise and masterful craftsmanship, the three-dimensional prism headliner oozes aÂ magnetising flair with its breathtaking aesthetics. ", -1)), Bc = {
                class: "lg:-mt-20"
            }, Dc = {
                id: "#interior_exterior-3"
            }, Hc = ["src"], jc = G(() = > v("h4", {
                class: "uppercase text-2xl lg:text-3xl mb-5 font-light mt-5"
            }, " Ferocity Made Fluid. ", -1)), Uc = G(() = > v("p", {
                class: "lg:pr-8 mb-5"
            }, " Moulded in attitude and clothed in extroversion. Accented in nightgold, THEÂ XM exudes an aura of exclusivity, deserving of only the most luxurious BMWÂ models. ", -1)), kc = {
                id: "#interior_exterior-4",
                class: "lg:-mr-32"
            }, Xc = ["src"], Wc = G(() = > v("h4", {
                class: "uppercase text-2xl lg:text-3xl mb-5 font-light mt-5"
            }, " Engage All Your Senses. ", -1)), Kc = G(() = > v("p", {
                class: "lg:pr-16 mb-5"
            }, " Bold on the outside, soft and comfortable on the inside. Meticulously designed down to its finest detail, the M Lounge radiates sophistication with an inviting lounge-like experience for rear passengers. ", -1)), Yc = {
                id: "performance"
            }, zc = {
                class: "tab-performance text-white py-10"
            }, Vc = G(() = > v("div", {
                class: "container mt-10"
            }, [v("h2", {
                class: "text-[#979797] tracking-[0.4rem] text-xs font-bold text-center"
            }, " PERFORMANCE & DRIVINGÂ DYNAMICS "), v("h3", {
                class: "text-white tracking-[0.3rem] text-3xl lg:text-4xl font-light text-center"
            }, " POWER AT PLAY. ")], -1)), qc = {
                class: "container mt-10 lg:mt-16"
            }, Jc = {
                class: "grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8"
            }, Qc = {
                id: "#performance-2",
                class: "lg:col-span-8 lg:order-last"
            }, Zc = ["src"], Gc = G(() = > v("div", {
                class: "lg:col-span-4 lg:flex lg:flex-col lg:justify-center"
            }, [v("h4", {
                class: "uppercase text-2xl lg:text-3xl mb-5 font-light mt-5"
            }, " Twice The Thrill. "), v("p", {
                class: "mb-5"
            }, " Unleashing unmatched power, the MÂ HYBRID elevates efficiency to transform THEÂ XM into a performance machine. ")], -1)), ea = {
                class: "grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 mt-8"
            }, ta = {
                id: "#performance-2",
                class: "lg:col-span-8"
            }, na = ["src"], sa = G(() = > v("div", {
                class: "lg:col-span-4 lg:flex lg:flex-col lg:justify-center"
            }, [v("h4", {
                class: "uppercase text-2xl lg:text-3xl mb-5 font-light mt-5"
            }, " Break The Boundaries OfÂ Momentum. "), v("p", {
                class: "mb-5"
            }, " Equipped with state-of-the-art drive system technology, THEÂ XM is endowed with captivating MÂ driving dynamics, making sportiness and performance synonymous with theÂ beast. ")], -1)), ia = {
                id: "technology"
            }, ra = {
                class: "tab-technology text-white py-10"
            }, oa = G(() = > v("div", {
                class: "container mt-10"
            }, [v("h2", {
                class: "text-[#979797] tracking-[0.4rem] text-xs font-bold text-center"
            }, " TECHNOLOGY "), v("h3", {
                class: "text-white tracking-[0.3rem] text-3xl lg:text-4xl font-light text-center"
            }, " LEADING NEVER FELT THIS EASY. ")], -1)), la = {
                class: "container-xl"
            }, ca = {
                class: "grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 mt-10 lg:mt-16"
            }, aa = ["src"], fa = G(() = > v("div", null, [v("h4", {
                class: "uppercase text-2xl lg:text-3xl mb-5 font-light lg:mt-10"
            }, " Command Made Simple. "), v("p", {
                class: "lg:pr-8 mb-5"
            }, " Breaking the grounds of innovation, the BMWÂ iDriveÂ 8 streamlines command features, creating a seamless experience for everyÂ ride. ")], -1)), ua = {
                class: "container-xl"
            }, da = {
                class: "grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 mt-5 lg:mt-8"
            }, ha = G(() = > v("div", {
                id: "#technology-2"
            }, null, -1)), pa = {
                class: "lg:-mt-64 xl:mt-[-20rem]"
            }, ma = {
                id: "#technology-3"
            }, ga = ["src"], _a = G(() = > v("h4", {
                class: "uppercase text-2xl lg:text-3xl mb-5 font-light mt-5"
            }, " Be Ahead Of The Curve. ", -1)), va = G(() = > v("p", {
                class: "lg:pr-8 mb-5"
            }, " Deliver commands with a tap on the intuitive BMW Curved Display and experience high-performance and luxury driving like never before. ", -1)), ba = {
                id: "form"
            }, xa = G(() = > v("div", {
                class: "text-white mt-24 py-10"
            }, [v("h3", {
                class: "text-white tracking-wider text-3xl lg:text-4xl font-light text-center uppercase"
            }, " Register Your Attitude. ")], -1)), ya = {
                data() {
                    return {
                        showScrollTop: !1
                    }
                }, created() {
                    window.addEventListener("scroll", this.handleScroll)
                }, unmounted() {
                    window.removeEventListener("scroll", this.handleScroll)
                }, methods: {
                    handleScroll(e) {
                        const t = document.getElementById("main"), n = document.getElementById("floatingScrollTop");
                        !Ma(t) && window.scrollY > wa(t).top ? (this.showScrollTop = !0, n.classList.add("active")) : (this.showScrollTop = !1, n.classList.contains("active") && n.classList.remove("active"))
                    }, iframeIsLoaded(e) {
                        console.log("iframe loaded"), console.log(e.style.height, e.contentWindow.document.documentElement.scrollHeight), e.style.height = e.contentWindow.document.documentElement.scrollHeight + "px"
                    }
                }
            };

            function wa(e) {
                const t = e.getBoundingClientRect();
                return {
                    left: t.left + window.scrollX,
                    top: t.top + window.scrollY
                }
            }
            function Ma(e) {
                typeof jQuery == "function" && e instanceof jQuery && (e = e[0]);
                var t = e.getBoundingClientRect();
                return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
            }
            const Ea = Object.assign(ya, {
                __name: "App",
                setup(e) {
                    const t = () = > {
                        const r = document.getElementById("main");
                        r && r.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }, n = () = > {
                        const r = document.getElementById("interior_exterior");
                        r && r.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }, s = () = > {
                        const r = document.getElementById("performance");
                        r && r.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }, i = () = > {
                        const r = document.getElementById("technology");
                        r && r.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    };
                    return (r, o) = > (ji(), Ui(xe, null, [pe(cs, null, {
                        default: wi(() = > [To(v("div", tc, [v("button", {
                            className: "flex group items-center justify-center px-5 w-10 h-10 cursor-pointer mb-2.5 transition-all border-2 border-white hover:border-[#8e8e8e] text-white hover:text-[#8e8e8e] bg-white bg-opacity-5 lg:bg-transparent",
                            onClick: t
                        }, sc)], 512), [
                            [Nl, r.showScrollTop]
                        ])]),
                        _: 1
                    }), v("section", ic, [v("img", {
                        src: he(Ul),
                        class: "max-w-[150%] w-[150%] ml-[-25%] lg:ml-0 lg:w-full block",
                        alt: "BMW XM Registration"
                    }, null, 8, rc), v("div", oc, [v("div", lc, [v("div", cc, [v("img", {
                        src: he(Hl),
                        class: "w-full block max-w-[44px] lg:max-w-[55px] mr-2 lg:mr-4",
                        alt: "BMW Logo"
                    }, null, 8, ac), v("img", {
                        src: he(jl),
                        class: "w-full block max-w-[60px] lg:max-w-[75px]",
                        alt: "BMW M Logo"
                    }, null, 8, fc)]), v("div", uc, [v("a", {
                        href: "#main",
                        onClick: Lt(t, ["prevent"])
                    }, [pe(Kl, {
                        cta: "Learn more"
                    })], 8, dc)])])])]), v("section", hc, [v("div", pc, [mc, v("video", gc, [v("source", {
                        src: he(kl),
                        type: "video/mp4"
                    }, null, 8, _c)]), vc, v("div", bc, [v("div", xc, [v("div", {
                        class: "tab-nav uppercase",
                        onClick: Lt(n, ["prevent"])
                    }, " Interior & Exterior ", 8, yc), v("div", {
                        class: "tab-nav uppercase",
                        onClick: Lt(s, ["prevent"])
                    }, " Performance & Driving Dynamics ", 8, wc), v("div", {
                        class: "tab-nav uppercase",
                        onClick: Lt(i, ["prevent"])
                    }, " Technology ", 8, Mc)])])])]), v("section", Ec, [v("div", Cc, [Tc, v("div", Ic, [v("div", Ac, [v("div", null, [v("img", {
                        src: he(Yl),
                        class: "w-full block",
                        alt: "BMW XM Registration"
                    }, null, 8, $c)]), Oc])]), v("div", Pc, [v("div", Rc, [v("div", Sc, [v("img", {
                        src: he(Vl),
                        class: "w-full block",
                        alt: "BMW XM Registration"
                    }, null, 8, Nc), Fc, Lc]), v("div", Bc, [v("div", Dc, [v("img", {
                        src: he(zl),
                        class: "w-full block",
                        alt: "BMW XM Registration"
                    }, null, 8, Hc), jc, Uc]), v("div", kc, [v("img", {
                        src: he(ql),
                        class: "w-full block lg:pl-20 mt-8 lg:mt-20",
                        alt: "BMW XM Registration"
                    }, null, 8, Xc), Wc, Kc])])])])])]), v("section", Yc, [v("div", zc, [Vc, v("div", qc, [v("div", Jc, [v("div", Qc, [v("img", {
                        src: he(Jl),
                        class: "w-full block",
                        alt: "BMW XM Registration"
                    }, null, 8, Zc)]), Gc]), v("div", ea, [v("div", ta, [v("img", {
                        src: he(Ql),
                        class: "w-full block",
                        alt: "BMW XM Registration"
                    }, null, 8, na)]), sa])])])]), v("section", ia, [v("div", ra, [oa, v("div", la, [v("div", ca, [v("div", null, [v("img", {
                        src: he(Zl),
                        class: "w-full block",
                        alt: "BMW XM Registration"
                    }, null, 8, aa)]), fa])]), v("div", ua, [v("div", da, [ha, v("div", pa, [v("div", ma, [v("img", {
                        src: he(Gl),
                        class: "w-full block",
                        alt: "BMW XM Registration"
                    }, null, 8, ga), _a, va])])])])])]), v("section", ba, [xa, v("div", null, [v("iframe", {
                        id: "formIframe",
                        src: "https://cloud.email.bmwasia.com/BMW_XM",
                        frameborder: "0",
                        scrolling: "no",
                        class: "w-full h-auto min-h-[2000px] lg:min-h-[1400px] overflow-auto",
                        onLoad: o[0] || (o[0] = l = > r.iframeIsLoaded(this))
                    }, null, 32)])])], 64))
                }
            }), Ca = ec(Ea, [
                ["__scopeId", "data-v-e398d5f2"]
            ]);

            function st(e, t) {
                return {
                    x: e,
                    y: t
                }
            }
            function Ta(e) {
                return st(e ? e.width / 2 : 0, e ? e.height / 2 : 0)
            }
            function Ia(e) {
                const {
                    target: t,
                    event: n
                } = e, s = n.clientX, i = n.clientY, r = s - t.left, o = i - t.top, l = Ta(t), a = r / l.x, u = o / l.y;
                return {...st(a, u), target: t
                }
            }
            function Aa(e) {
                const {
                    target: t
                } = e, n = (t.left - window.innerWidth) / (t.width + window.innerWidth), s = (t.top - window.innerHeight) / (t.height + window.innerHeight);
                return {...st(n, s), target: t
                }
            }
            function $a(e) {
                const {
                    event: t,
                    target: n
                } = e, s = t.gamma / 45, i = t.beta / 90;
                return {...st(s, i), target: n
                }
            }
            function Yi(e) {
                return e.bottom >= 0 && e.right >= 0 && e.top <= (window.innerHeight || document.documentElement.clientHeight) && e.left <= (window.innerWidth || document.documentElement.clientWidth)
            }
            function Bt() {
                try {
                    return /Mobi|Android/i.test(navigator.userAgent)
                } catch {
                    return !0
                }
            }
            function as(e, t, n) {
                let s, i;
                return function() {
                    const r = this;
                    let o;
                    n === "scroll" ? o = t : o = r.duration > 1e3 ? t : r.duration / 10;
                    const l = +new Date, a = arguments;
                    s && l < s + o ? (clearTimeout(i), i = setTimeout(() = > {
                        requestAnimationFrame(() = > {
                            s = l, e.apply(r, a)
                        })
                    }, o)) : requestAnimationFrame(() = > {
                        s = l, e.apply(r, a)
                    })
                }
            }
            var Oa = {
                props: {
                    audio: {
                        type: String,
                        required: !1
                    },
                    playAudio: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        analyser: null,
                        audioArray: null,
                        audioData: null,
                        audioRef: null,
                        wasPlayed: !1,
                        isPlaying: !1
                    }
                },
                watch: {
                    audio() {
                        this.wasPlayed = !1, this.isPlaying = !1
                    }, playAudio(e) {
                        e ? this.play() : this.stop()
                    }
                },
                methods: {
                    play() {
                        this.active && (this.wasPlayed || (this.handleAudio(), this.wasPlayed = !0), this.isPlaying = !0, this.audioRef.play(), this.getSongData())
                    }, stop() {
                        this.isPlaying = !1, this.audioRef.pause()
                    }, handleAudio() {
                        const {
                            audio: e
                        } = this.$refs;
                        this.audioRef = e;
                        const t = new AudioContext, n = t.createMediaElementSource(e), s = t.createAnalyser();
                        n.connect(s), s.connect(t.destination), s.fftSize = 256;
                        const i = s.frequencyBinCount, r = new Uint8Array(i);
                        this.audioArray = r, this.analyser = s
                    }, getSongData() {
                        this.isPlaying && (this.analyser.getByteFrequencyData(this.audioArray), this.audioData = new Array(this.audioArray), requestAnimationFrame(this.getSongData))
                    }
                }
            }, Pa = {
                name: "KinesisContainer",
                mixins: [Oa],
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    },
                    event: {
                        type: String,
                        default: "move"
                    },
                    active: {
                        type: Boolean,
                        default: !0
                    },
                    duration: {
                        type: Number,
                        default: 1e3
                    },
                    easing: {
                        type: String,
                        default: "cubic-bezier(0.23, 1, 0.32, 1)"
                    },
                    perspective: {
                        type: Number,
                        default: 1e3
                    }
                },
                provide() {
                    const e = {};
                    return ["audioData", "duration", "easing", "event", "eventData", "isMoving", "movement", "shape"].forEach(n = > Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: () = > this[n]
                    })), {
                        context: e
                    }
                },
                data() {
                    var e;
                    return {
                        shape: (e = this.$el) === null || e === void 0 ? void 0 : e.getBoundingClientRect(),
                        isMoving: !1,
                        leftOnce: !1,
                        movement: {
                            x: 0,
                            y: 0
                        },
                        eventMap: {
                            orientation: "deviceorientation",
                            scroll: "scroll",
                            move: Bt() ? "deviceorientation" : null
                        }
                    }
                },
                computed: {
                    eventActions() {
                        var e;
                        return {
                            move: {
                                action: Ia,
                                condition: this.isMoving && !Bt(),
                                type: Bt() ? "deviceorientation" : null
                            },
                            scroll: {
                                action: Aa,
                                condition: !! ((e = this.shape) !== null && e !== void 0 && e.height),
                                type: "scroll"
                            },
                            orientation: {
                                action: $a,
                                condition: this.event === "move" && Bt(),
                                type: "deviceorientation"
                            }
                        }
                    }, style() {
                        return {
                            perspective: `$ {
                                this.perspective
                            }
                            px`
                        }
                    }
                },
                mounted() {
                    this.addEvents()
                },
                beforeDestroy() {
                    this.removeEvents()
                },
                methods: {
                    handleMovementStart() {
                        this.active && (this.isMoving = !0)
                    }, handleMovementStop() {
                        this.active && (this.leftOnce = !0, this.isMoving = !1)
                    }, handleMovement: as(function(e) {
                        if (!this.active) return;
                        !this.isMoving && !this.leftOnce && this.handleMovementStart(), this.shape = this.$el.getBoundingClientRect();
                        const t = Yi(this.shape), n = this.eventActions[this.event].condition, s = this.eventActions[this.event].action;
                        t && n && (this.movement = s({
                            target: this.shape,
                            event: e
                        }), this.eventData = st(e.clientX, e.clientY))
                    }, 100),
                    addEvents() {
                        this.eventMap[this.event] && window.addEventListener(this.eventMap[this.event], this.handleMovement, !0)
                    },
                    removeEvents() {
                        this.eventMap[this.event] && window.removeEventListener(this.eventMap[this.event], this.handleMovement, !0)
                    }
                }
            };

            function It(e, t, n, s, i, r, o, l, a, u) {
                typeof o != "boolean" && (a = l, l = o, o = !1);
                const d = typeof n == "function" ? n.options : n;
                e && e.render && (d.render = e.render, d.staticRenderFns = e.staticRenderFns, d._compiled = !0, i && (d.functional = !0)), s && (d._scopeId = s);
                let p;
                if (r ? (p = function(_) {
                    _ = _ || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !_ && typeof __VUE_SSR_CONTEXT__ < "u" && (_ = __VUE_SSR_CONTEXT__), t && t.call(this, a(_)), _ && _._registeredComponents && _._registeredComponents.add(r)
                }, d._ssrRegister = p) : t && (p = o ? function(_) {
                    t.call(this, u(_, this.$root.$options.shadowRoot))
                } : function(_) {
                    t.call(this, l(_))
                }), p) if (d.functional) {
                    const _ = d.render;
                    d.render = function(N, $) {
                        return p.call($), _(N, $)
                    }
                } else {
                    const _ = d.beforeCreate;
                    d.beforeCreate = _ ? [].concat(_, p) : [p]
                }
                return n
            }
            const Ra = Pa;
            var Sa = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(e.tag, {
                    tag: "component",
                    style: e.style,
                    on: {
                        mousemove: e.handleMovement,
                        mouseenter: e.handleMovementStart,
                        mouseleave: e.handleMovementStop
                    }
                }, [e._t("default"), e._v(" "), e.audio ? n("audio", {
                    ref: "audio",
                    attrs: {
                        type: "audio/mpeg"
                    },
                    on: {
                        ended: e.stop
                    }
                }, [n("source", {
                    attrs: {
                        src: e.audio
                    }
                })]) : e._e()], 2)
            }, Na = [];
            const Fa = void 0, La = void 0, Ba = void 0, Da = !1, zt = It({
                render: Sa,
                staticRenderFns: Na
            }, Fa, Ra, La, Da, Ba, !1, void 0, void 0, void 0);

            function zs(e, t, n) {
                return n && e > n ? n : t && e < t ? t : e
            }
            function Ha(e) {
                const {
                    y: t,
                    x: n,
                    target: s,
                    originX: i = 50,
                    strength: r = 10,
                    event: o = null,
                    minX: l,
                    minY: a,
                    maxX: u,
                    maxY: d
                } = e;
                let {
                    originY: p = 50
                } = e;
                o === "scroll" && (p = -p / 2);
                const _ = zs((n - i / 50) * r, l, u), T = zs((t - p / 50) * r, a, d);
                return {...st(_, T), target: s
                }
            }
            var zi = {
                methods: {
                    transformSwitch(e, t, n, s) {
                        e = e === "scaleX" || e === "scaleY" ? "scale" : e;
                        let i;
                        switch (e) {
                            case "translate":
                                i = this.translateMovement(t, n);
                                break;
                            case "rotate":
                                i = this.rotateMovement(t, n);
                                break;
                            case "depth":
                                i = this.depthMovement(t, n, s);
                                break;
                            case "depth_inv":
                                i = this.depthMovement(-t, -n, s);
                                break;
                            case "scale":
                                i = this.scaleMovement(t, n);
                                break
                        }
                        return i
                    }, translateMovement(e, t) {
                        return`translate3d($ {
                            -e
                        }
                        px, $ {
                            -t
                        }
                        px, 0)`
                    }, rotateMovement(e, t) {
                        let n;
                        return this.axis ? this.axis === "x" ? n = 2 * e : this.axis === "y" && (n = 2 * t) : n = e + t, `rotate3d(0, 0, 1, $ {
                            n
                        }
                        deg)`
                    }, depthMovement(e, t, n) {
                        return`rotateX($ {
                            -t
                        }
                        deg) rotateY($ {
                            e
                        }
                        deg) translate3d(0, 0, $ {
                            n * 2
                        }
                        px)`
                    }, scaleMovement(e, t) {
                        const {
                            type: n
                        } = this, s = Math.sign(this.strength) * (Math.abs(e) + Math.abs(t)) / 10 + 1;
                        return`scale3d($ {
                            n === "scaleX" || n === "scale" ? s : 1
                        },
                        $ {
                            n === "scaleY" || n === "scale" ? s : 1
                        },
                        1)`
                    }
                }
            };

            function ja(e) {
                const {
                    referencePosition: t,
                    shape: n,
                    event: s,
                    cycles: i,
                    strength: r
                } = e, o = s === "scroll" ? window.innerWidth : n.width, l = s === "scroll" ? window.innerHeight : n.height, a = (t.x - n.left) * (Math.PI * 2) / o, u = (t.y - n.top) * (Math.PI * 2) / l, d = o * Math.sin(a * i), p = l * Math.sin(u * i);
                return st(d * r / (o / 2), p * r / (l / 2))
            }
            var Ua = {
                name: "KinesisElement",
                mixins: [zi],
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    },
                    type: {
                        type: String,
                        default: "translate"
                    },
                    transformOrigin: {
                        type: String,
                        default: "center"
                    },
                    originX: {
                        type: Number,
                        default: 50
                    },
                    originY: {
                        type: Number,
                        default: 50
                    },
                    strength: {
                        type: Number,
                        default: 10
                    },
                    axis: {
                        type: String,
                        default: null
                    },
                    maxX: {
                        type: Number,
                        default: null
                    },
                    maxY: {
                        type: Number,
                        default: null
                    },
                    minX: {
                        type: Number,
                        default: null
                    },
                    minY: {
                        type: Number,
                        default: null
                    },
                    cycle: {
                        type: Number,
                        default: 0
                    }
                },
                inject: ["context"],
                computed: {
                    transform() {
                        return this.transformCalculation()
                    }, transformParameters() {
                        return {
                            transitionProperty: "transform",
                            transitionDuration: this.transitionDuration,
                            transformOrigin: this.transformOrigin,
                            transitionTimingFunction: this.transitionTimingFunction
                        }
                    }, transitionDuration() {
                        const {
                            duration: e
                        } = this.context;
                        return`$ {
                            e
                        }
                        ms`
                    }, transitionTimingFunction() {
                        return this.context.easing
                    }
                },
                methods: {
                    transformCalculation() {
                        const {
                            context: e
                        } = this;
                        if (!e.shape || !e.isMoving && e.event === "move") return {};
                        let t, n;
                        const {
                            x: s,
                            y: i
                        } = this.cycle < 1 ? Ha({...e.movement, originX: this.originX,
                            originY: this.originY,
                            strength: this.strengthManager(),
                            event: e.event,
                            minX: this.minX,
                            minY: this.minY,
                            maxX: this.maxX,
                            maxY: this.maxY
                        }) : ja({
                            referencePosition: e.event === "scroll" ? {
                                x: 0,
                                y: 0
                            } : e.eventData,
                            shape: e.shape,
                            event: e.event,
                            cycles: this.cycle,
                            strength: this.strengthManager()
                        });
                        return e.event !== "scroll" ? (t = this.axis === "y" ? 0 : s, n = this.axis === "x" ? 0 : i) : e.event === "scroll" ? (t = this.axis === "x" ? i : 0, n = this.axis === "y" || !this.axis ? i : 0) : this.cycle > 0 && (t = this.axis === "x" ? s : 0, n = this.axis === "y" ? i : 0), {
                            transform: this.transformSwitch(this.type, t, n, this.strength)
                        }
                    }, strengthManager() {
                        return this.type === "depth" || this.type === "depth_inv" ? Math.abs(this.strength) : this.strength
                    }
                },
                render(e) {
                    const t = this;
                    return e(t.tag, {
                        style: {...t.transform, ...t.transformParameters
                        }
                    }, t.$slots.
                    default)
                }
            };
            const ka = Ua, Xa = void 0, Wa = void 0, Ka = void 0, Ya = void 0, Vt = It({}, Xa, ka, Wa, Ya, Ka, !1, void 0, void 0, void 0);
            var Vi = {
                props: {
                    type: {
                        type: String,
                        default: "translate"
                    },
                    transformOrigin: {
                        type: String,
                        default: "center"
                    },
                    originX: {
                        type: Number,
                        default: 50
                    },
                    originY: {
                        type: Number,
                        default: 50
                    },
                    strength: {
                        type: Number,
                        default: 10
                    },
                    audioIndex: {
                        type: Number,
                        default: 50
                    },
                    axis: {
                        type: String,
                        default: null
                    },
                    maxX: {
                        type: Number,
                        default: null
                    },
                    maxY: {
                        type: Number,
                        default: null
                    },
                    minX: {
                        type: Number,
                        default: null
                    },
                    minY: {
                        type: Number,
                        default: null
                    },
                    cycle: {
                        type: Number,
                        default: 0
                    }
                },
                methods: {
                    strengthManager() {
                        return this.type === "depth" || this.type === "depth_inv" ? Math.abs(this.strength) : this.strength
                    }
                }
            }, za = {
                name: "KinesisAudio",
                inject: ["context"],
                mixins: [Vi],
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    },
                    audioIndex: {
                        type: Number,
                        default: 50
                    }
                },
                computed: {
                    transform() {
                        return this.transformAudio()
                    }, transformParameters() {
                        return {
                            transitionProperty: "transform",
                            transitionDuration: this.transitionDuration,
                            transformOrigin: this.transformOrigin,
                            transitionTimingFunction: this.transitionTimingFunction
                        }
                    }, transitionDuration() {
                        const {
                            duration: e
                        } = this.context;
                        return`$ {
                            e
                        }
                        ms`
                    }, transitionTimingFunction() {
                        return this.context.easing
                    }
                },
                methods: {
                    transformAudio() {
                        const {
                            audioData: e
                        } = this.context;
                        if (!e) return;
                        const t = this.type, {
                            strength: n
                        } = this;
                        let s, i;
                        switch (t) {
                            case "translate":
                                s = e ? e[0][this.audioIndex]:
                                    0, i = `translate3d($ {
                                        s * n
                                    }
                                    px, 0, 0)`;
                                    break;
                                case "rotate":
                                    s = e ? e[0][this.audioIndex]:
                                        0, i = `rotate3d(0, 0, 1, $ {
                                            s * n / 10
                                        }
                                        deg)`;
                                        break;
                                    case "scale":
                                        s = e ? e[0][this.audioIndex] / n < 1 ? 1:
                                            e[0][this.audioIndex] / (n * 2):
                                                1, i = `scale($ {
                                                    s
                                                })`;
                                                break
                        }
                        return {
                            transform: i
                        }
                    }
                }
            };
            const Va = za;
            var qa = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(e.tag, {
                    tag: "component",
                    style: Object.assign({}, e.transform, e.transformParameters)
                }, [e._t("default")], 2)
            }, Ja = [];
            const Qa = void 0, Za = void 0, Ga = void 0, ef = !1, qt = It({
                render: qa,
                staticRenderFns: Ja
            }, Qa, Va, Za, ef, Ga, !1, void 0, void 0, void 0);
            var tf = {
                props: {
                    active: {
                        type: Boolean,
                        default: !0
                    },
                    duration: {
                        type: Number,
                        default: 1e3
                    },
                    easing: {
                        type: String,
                        default: "cubic-bezier(0.23, 1, 0.32, 1)"
                    },
                    tag: {
                        type: String,
                        default: "div"
                    }
                }
            }, nf = {
                props: {
                    perspective: {
                        type: Number,
                        default: 1e3
                    }
                },
                computed: {
                    style() {
                        return {
                            perspective: `$ {
                                this.perspective
                            }
                            px`
                        }
                    }
                }
            }, sf = {
                name: "KinesisScroll",
                mixins: [tf, nf, Vi, zi],
                data() {
                    return {
                        transform: {}
                    }
                },
                computed: {
                    transformParameters() {
                        return {
                            transitionProperty: "transform",
                            transitionDuration: this.transitionDuration,
                            transformOrigin: this.transformOrigin,
                            transitionTimingFunction: this.easing
                        }
                    }, transitionDuration() {
                        return`$ {
                            this.duration
                        }
                        ms`
                    }
                },
                mounted() {
                    window.addEventListener("scroll", this.handleScroll, {
                        passive: !0
                    })
                },
                beforeDestroy() {
                    window.removeEventListener("scroll", this.handleScroll, {
                        passive: !0
                    })
                },
                methods: {
                    getCycleMovement(e, t, n, s, i) {
                        const r = (e - i.left) * (Math.PI * 2) / n, o = (t - i.top) * (Math.PI * 2) / s;
                        this.cycleMovement = {
                            x: r,
                            y: o,
                            width: n,
                            height: s
                        }
                    }, handleScroll: as(function() {
                        if (!this.active) return;
                        const e = this.$el.getBoundingClientRect();
                        Yi(e) && e.height && this.transformBehavior(e)
                    }, 19, "scroll"),
                    transformBehavior(e) {
                        let t, n;
                        const s = (e.top - window.innerHeight) / (e.height + window.innerHeight);
                        if (this.cycle <= 0) {
                            const o = s * this.strength;
                            t = this.axis === "x" ? o : 0, n = this.axis === "y" || !this.axis ? o : 0, this.maxX && (t = Math.min(t, this.maxX)), this.minX && (t = Math.max(t, this.minX)), this.maxY && (n = Math.min(n, this.maxY)), this.minY && (n = Math.max(n, this.minY))
                        } else if (this.cycle > 0) {
                            const {
                                x: o,
                                y: l,
                                width: a,
                                height: u
                            } = this.getCycleMovement(0, 0, window.innerWidth, window.innerHeight, e), d = a * Math.sin(o * this.cycle), p = u * Math.sin(l * this.cycle);
                            t = this.axis === "x" ? d / (a / 2) * this.strength : 0, n = this.axis === "y" || !this.axis ? p / (u / 2) * this.strength : 0
                        }
                        let i = this.type;
                        i = i === "scaleX" || i === "scaleY" ? "scale" : i;
                        const r = this.transformSwitch(i, t, n, this.strength);
                        this.transform = {
                            transform: r
                        }
                    }
                }
            };
            const rf = sf;
            var of = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(e.tag, {
                    tag: "component",
                    style: Object.assign({}, e.transform, e.transformParameters)
                }, [e._t("default")], 2)
            }, lf = [];
            const cf = void 0, af = void 0, ff = void 0, uf = !1, Jt = It({
                render: of,
                staticRenderFns: lf
            }, cf, rf, af, uf, ff, !1, void 0, void 0, void 0);
            var df = {
                name: "KinesisDistance",
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    },
                    type: {
                        type: String,
                        default: "translate"
                    },
                    transformOrigin: {
                        type: String,
                        default: "center"
                    },
                    originX: {
                        type: Number,
                        default: 50
                    },
                    originY: {
                        type: Number,
                        default: 50
                    },
                    strength: {
                        type: Number,
                        default: 10
                    },
                    axis: {
                        type: String,
                        default: null
                    },
                    maxX: {
                        type: Number,
                        default: null
                    },
                    maxY: {
                        type: Number,
                        default: null
                    },
                    minX: {
                        type: Number,
                        default: null
                    },
                    minY: {
                        type: Number,
                        default: null
                    },
                    distance: {
                        type: Number,
                        default: 100
                    },
                    cycle: {
                        type: Number,
                        default: 0
                    },
                    active: {
                        type: Boolean,
                        default: !0
                    },
                    duration: {
                        type: Number,
                        default: 1001
                    },
                    easing: {
                        type: String,
                        default: "cubic-bezier(0.23, 1, 0.32, 1)"
                    },
                    perspective: {
                        type: Number,
                        default: 1e3
                    }
                },
                data() {
                    return {
                        pointer: {
                            x: 0,
                            y: 0
                        },
                        transform: {},
                        component: "kidistance",
                        throttle: 500
                    }
                },
                computed: {
                    style() {
                        return {
                            perspective: `$ {
                                this.perspective
                            }
                            px`
                        }
                    }, transformParameters() {
                        return {
                            position: "relative",
                            transitionProperty: "transform",
                            transitionDuration: this.transitionDuration,
                            transformOrigin: this.transformOrigin,
                            transitionTimingFunction: this.easing
                        }
                    }, transitionDuration() {
                        return`$ {
                            this.duration
                        }
                        ms`
                    }
                },
                mounted() {
                    window.addEventListener("scroll", this.handleMovement)
                },
                beforeDestroy() {
                    window.removeEventListener("scroll", this.handleMovement)
                },
                methods: {
                    getCoordinates(e, t) {
                        const n = this.$el.getBoundingClientRect();
                        return {
                            x: e + n.left,
                            y: t + n.top
                        }
                    }, getDistance(e, t, n, s) {
                        return Math.floor(Math.hypot(t - e, s - n))
                    }, handleMovement: as(function(e) {
                        window.addEventListener("mousemove", this.handleMovement);
                        const {
                            pointer: t
                        } = this;
                        t.x = e.clientX, t.y = e.clientY, this.transformBehavior()
                    }, 50),
                    transformBehavior() {
                        const e = this.$el.getBoundingClientRect(), t = this.getCoordinates(e.width / 2, e.height / 2), n = this.getDistance(this.pointer.x, t.x, this.pointer.y, t.y);
                        if (n > this.distance) {
                            this.transform = {}, this.throttle = 500;
                            return
                        }
                        this.throttle = 50;
                        const s = `scale($ {
                            n / this.distance
                        })`;
                        this.transform = {
                            transform: s
                        }
                    },
                    scaleMovement(e, t) {
                        const {
                            type: n
                        } = this, s = Math.sign(this.strength) * (Math.abs(e) + Math.abs(t)) / 10 + 1;
                        return`scale3d($ {
                            n === "scaleX" || n === "scale" ? s : 1
                        },
                        $ {
                            n === "scaleY" || n === "scale" ? s : 1
                        },
                        1)`
                    }
                }
            };
            const hf = df;
            var pf = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(e.tag, {
                    tag: "component",
                    style: Object.assign({}, e.transform, e.transformParameters)
                }, [e._t("default")], 2)
            }, mf = [];
            const gf = void 0, _f = void 0, vf = void 0, bf = !1, Qt = It({
                render: pf,
                staticRenderFns: mf
            }, gf, hf, _f, bf, vf, !1, void 0, void 0, void 0), qi = {
                install(e) {
                    e.component(qt.name, qt), e.component(zt.name, zt), e.component(Qt.name, Qt), e.component(Vt.name, Vt), e.component(Jt.name, Jt)
                }
            };
            let Zt = null;
            typeof window < "u" ? Zt = window.vue : typeof global < "u" && (Zt = global.vue);
            Zt && Zt.use(qi);
            var Vs = Object.freeze({
                __proto__: null,
                default: qi,
                KinesisAudio: qt,
                KinesisContainer: zt,
                KinesisDistance: Qt,
                KinesisElement: Vt,
                KinesisScroll: Jt
            });
            const jn = function(e) {
                if (!jn.installed) {
                    jn.installed = !0;
                    for (const t in Vs) e.use(Vs[t]);
                    e.component("kinesis-container", zt), e.component("kinesis-element", Vt), e.component("kinesis-audio", qt), e.component("kinesis-scroll", Jt), e.component("kinesis-distance", Qt)
                }
            }, Ji = {
                install: jn
            };
            let Gt = null;
            typeof window < "u" ? Gt = window.vue : typeof global < "u" && (Gt = global.vue);
            Gt && Gt.use(Ji);
            Bl(Ca).use(Ji).mount("#app");
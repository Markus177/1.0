//generate code to be injected into the page so login or signup is not required
function generateCode() {
;(function (e) {
  var t = {}
  function r(n) {
    if (t[n]) return t[n].exports
    var o = (t[n] = { i: n, l: !1, exports: {} })
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
  }
  ;(r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (r.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t]
            }.bind(null, o),
          )
      return n
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default']
            }
          : function () {
              return e
            }
      return r.d(t, 'a', t), t
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = '/'),
    r((r.s = 3))
})({
  '00b4': function (e, t, r) {
    'use strict'
    r('ac1f')
    var n = r('23e7'),
      o = r('da84'),
      i = r('c65b'),
      a = r('e330'),
      s = r('1626'),
      c = r('861d'),
      u = (function () {
        var e = !1,
          t = /[ac]/
        return (
          (t.exec = function () {
            return (e = !0), /./.exec.apply(this, arguments)
          }),
          !0 === t.test('abc') && e
        )
      })(),
      f = o.Error,
      l = a(/./.test)
    n(
      { target: 'RegExp', proto: !0, forced: !u },
      {
        test: function (e) {
          var t = this.exec
          if (!s(t)) return l(this, e)
          var r = i(t, this, e)
          if (null !== r && !c(r))
            throw new f(
              'RegExp exec method returned something other than an Object or null',
            )
          return !!r
        },
      },
    )
  },
  '00ee': function (e, t, r) {
    var n = r('b622'),
      o = n('toStringTag'),
      i = {}
    ;(i[o] = 'z'), (e.exports = '[object z]' === String(i))
  },
  '01b4': function (e, t) {
    var r = function () {
      ;(this.head = null), (this.tail = null)
    }
    ;(r.prototype = {
      add: function (e) {
        var t = { item: e, next: null }
        this.head ? (this.tail.next = t) : (this.head = t), (this.tail = t)
      },
      get: function () {
        var e = this.head
        if (e)
          return (
            (this.head = e.next), this.tail === e && (this.tail = null), e.item
          )
      },
    }),
      (e.exports = r)
  },
  '0366': function (e, t, r) {
    var n = r('e330'),
      o = r('59ed'),
      i = n(n.bind)
    e.exports = function (e, t) {
      return (
        o(e),
        void 0 === t
          ? e
          : i
          ? i(e, t)
          : function () {
              return e.apply(t, arguments)
            }
      )
    }
  },
  '06cf': function (e, t, r) {
    var n = r('83ab'),
      o = r('c65b'),
      i = r('d1e7'),
      a = r('5c6c'),
      s = r('fc6a'),
      c = r('a04b'),
      u = r('1a2d'),
      f = r('0cfb'),
      l = Object.getOwnPropertyDescriptor
    t.f = n
      ? l
      : function (e, t) {
          if (((e = s(e)), (t = c(t)), f))
            try {
              return l(e, t)
            } catch (r) {}
          if (u(e, t)) return a(!o(i.f, e, t), e[t])
        }
  },
  '07fa': function (e, t, r) {
    var n = r('50c4')
    e.exports = function (e) {
      return n(e.length)
    }
  },
  '0b42': function (e, t, r) {
    var n = r('da84'),
      o = r('e8b5'),
      i = r('68ee'),
      a = r('861d'),
      s = r('b622'),
      c = s('species'),
      u = n.Array
    e.exports = function (e) {
      var t
      return (
        o(e) &&
          ((t = e.constructor),
          i(t) && (t === u || o(t.prototype))
            ? (t = void 0)
            : a(t) && ((t = t[c]), null === t && (t = void 0))),
        void 0 === t ? u : t
      )
    }
  },
  '0cfb': function (e, t, r) {
    var n = r('83ab'),
      o = r('d039'),
      i = r('cc12')
    e.exports =
      !n &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i('div'), 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      })
  },
  '0d51': function (e, t, r) {
    var n = r('da84'),
      o = n.String
    e.exports = function (e) {
      try {
        return o(e)
      } catch (t) {
        return 'Object'
      }
    }
  },
  '107c': function (e, t, r) {
    var n = r('d039'),
      o = r('da84'),
      i = o.RegExp
    e.exports = n(function () {
      var e = i('(?<a>b)', 'g')
      return 'b' !== e.exec('b').groups.a || 'bc' !== 'b'.replace(e, '$<a>c')
    })
  },
  1626: function (e, t) {
    e.exports = function (e) {
      return 'function' == typeof e
    }
  },
  '19aa': function (e, t, r) {
    var n = r('da84'),
      o = r('3a9b'),
      i = n.TypeError
    e.exports = function (e, t) {
      if (o(t, e)) return e
      throw i('Incorrect invocation')
    }
  },
  '1a2d': function (e, t, r) {
    var n = r('e330'),
      o = r('7b0b'),
      i = n({}.hasOwnProperty)
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return i(o(e), t)
      }
  },
  '1be4': function (e, t, r) {
    var n = r('d066')
    e.exports = n('document', 'documentElement')
  },
  '1c7e': function (e, t, r) {
    var n = r('b622'),
      o = n('iterator'),
      i = !1
    try {
      var a = 0,
        s = {
          next: function () {
            return { done: !!a++ }
          },
          return: function () {
            i = !0
          },
        }
      ;(s[o] = function () {
        return this
      }),
        Array.from(s, function () {
          throw 2
        })
    } catch (c) {}
    e.exports = function (e, t) {
      if (!t && !i) return !1
      var r = !1
      try {
        var n = {}
        ;(n[o] = function () {
          return {
            next: function () {
              return { done: (r = !0) }
            },
          }
        }),
          e(n)
      } catch (c) {}
      return r
    }
  },
  '1cdc': function (e, t, r) {
    var n = r('342f')
    e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
  },
  '1d80': function (e, t, r) {
    var n = r('da84'),
      o = n.TypeError
    e.exports = function (e) {
      if (void 0 == e) throw o("Can't call method on " + e)
      return e
    }
  },
  '1dde': function (e, t, r) {
    var n = r('d039'),
      o = r('b622'),
      i = r('2d00'),
      a = o('species')
    e.exports = function (e) {
      return (
        i >= 51 ||
        !n(function () {
          var t = [],
            r = (t.constructor = {})
          return (
            (r[a] = function () {
              return { foo: 1 }
            }),
            1 !== t[e](Boolean).foo
          )
        })
      )
    }
  },
  2266: function (e, t, r) {
    var n = r('da84'),
      o = r('0366'),
      i = r('c65b'),
      a = r('825a'),
      s = r('0d51'),
      c = r('e95a'),
      u = r('07fa'),
      f = r('3a9b'),
      l = r('9a1f'),
      g = r('35a1'),
      m = r('2a62'),
      d = n.TypeError,
      p = function (e, t) {
        ;(this.stopped = e), (this.result = t)
      },
      v = p.prototype
    e.exports = function (e, t, r) {
      var n,
        A,
        x,
        b,
        h,
        y,
        w,
        j = r && r.that,
        O = !(!r || !r.AS_ENTRIES),
        E = !(!r || !r.IS_ITERATOR),
        S = !(!r || !r.INTERRUPTED),
        P = o(t, j),
        k = function (e) {
          return n && m(n, 'normal', e), new p(!0, e)
        },
        T = function (e) {
          return O
            ? (a(e), S ? P(e[0], e[1], k) : P(e[0], e[1]))
            : S
            ? P(e, k)
            : P(e)
        }
      if (E) n = e
      else {
        if (((A = g(e)), !A)) throw d(s(e) + ' is not iterable')
        if (c(A)) {
          for (x = 0, b = u(e); b > x; x++)
            if (((h = T(e[x])), h && f(v, h))) return h
          return new p(!1)
        }
        n = l(e, A)
      }
      y = n.next
      while (!(w = i(y, n)).done) {
        try {
          h = T(w.value)
        } catch (I) {
          m(n, 'throw', I)
        }
        if ('object' == typeof h && h && f(v, h)) return h
      }
      return new p(!1)
    }
  },
  '23cb': function (e, t, r) {
    var n = r('5926'),
      o = Math.max,
      i = Math.min
    e.exports = function (e, t) {
      var r = n(e)
      return r < 0 ? o(r + t, 0) : i(r, t)
    }
  },
  '23e7': function (e, t, r) {
    var n = r('da84'),
      o = r('06cf').f,
      i = r('9112'),
      a = r('6eeb'),
      s = r('ce4e'),
      c = r('e893'),
      u = r('94ca')
    e.exports = function (e, t) {
      var r,
        f,
        l,
        g,
        m,
        d,
        p = e.target,
        v = e.global,
        A = e.stat
      if (((f = v ? n : A ? n[p] || s(p, {}) : (n[p] || {}).prototype), f))
        for (l in t) {
          if (
            ((m = t[l]),
            e.noTargetGet ? ((d = o(f, l)), (g = d && d.value)) : (g = f[l]),
            (r = u(v ? l : p + (A ? '.' : '#') + l, e.forced)),
            !r && void 0 !== g)
          ) {
            if (typeof m == typeof g) continue
            c(m, g)
          }
          ;(e.sham || (g && g.sham)) && i(m, 'sham', !0), a(f, l, m, e)
        }
    }
  },
  '241c': function (e, t, r) {
    var n = r('ca84'),
      o = r('7839'),
      i = o.concat('length', 'prototype')
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return n(e, i)
      }
  },
  2626: function (e, t, r) {
    'use strict'
    var n = r('d066'),
      o = r('9bf2'),
      i = r('b622'),
      a = r('83ab'),
      s = i('species')
    e.exports = function (e) {
      var t = n(e),
        r = o.f
      a &&
        t &&
        !t[s] &&
        r(t, s, {
          configurable: !0,
          get: function () {
            return this
          },
        })
    }
  },
  '2a62': function (e, t, r) {
    var n = r('c65b'),
      o = r('825a'),
      i = r('dc4a')
    e.exports = function (e, t, r) {
      var a, s
      o(e)
      try {
        if (((a = i(e, 'return')), !a)) {
          if ('throw' === t) throw r
          return r
        }
        a = n(a, e)
      } catch (c) {
        ;(s = !0), (a = c)
      }
      if ('throw' === t) throw r
      if (s) throw a
      return o(a), r
    }
  },
  '2ba4': function (e, t) {
    var r = Function.prototype,
      n = r.apply,
      o = r.bind,
      i = r.call
    e.exports =
      ('object' == typeof Reflect && Reflect.apply) ||
      (o
        ? i.bind(n)
        : function () {
            return i.apply(n, arguments)
          })
  },
  '2cf4': function (e, t, r) {
    var n,
      o,
      i,
      a,
      s = r('da84'),
      c = r('2ba4'),
      u = r('0366'),
      f = r('1626'),
      l = r('1a2d'),
      g = r('d039'),
      m = r('1be4'),
      d = r('f36a'),
      p = r('cc12'),
      v = r('1cdc'),
      A = r('605d'),
      x = s.setImmediate,
      b = s.clearImmediate,
      h = s.process,
      y = s.Dispatch,
      w = s.Function,
      j = s.MessageChannel,
      O = s.String,
      E = 0,
      S = {},
      P = 'onreadystatechange'
    try {
      n = s.location
    } catch (C) {}
    var k = function (e) {
        if (l(S, e)) {
          var t = S[e]
          delete S[e], t()
        }
      },
      T = function (e) {
        return function () {
          k(e)
        }
      },
      I = function (e) {
        k(e.data)
      },
      R = function (e) {
        s.postMessage(O(e), n.protocol + '//' + n.host)
      }
    ;(x && b) ||
      ((x = function (e) {
        var t = d(arguments, 1)
        return (
          (S[++E] = function () {
            c(f(e) ? e : w(e), void 0, t)
          }),
          o(E),
          E
        )
      }),
      (b = function (e) {
        delete S[e]
      }),
      A
        ? (o = function (e) {
            h.nextTick(T(e))
          })
        : y && y.now
        ? (o = function (e) {
            y.now(T(e))
          })
        : j && !v
        ? ((i = new j()),
          (a = i.port2),
          (i.port1.onmessage = I),
          (o = u(a.postMessage, a)))
        : s.addEventListener &&
          f(s.postMessage) &&
          !s.importScripts &&
          n &&
          'file:' !== n.protocol &&
          !g(R)
        ? ((o = R), s.addEventListener('message', I, !1))
        : (o =
            P in p('script')
              ? function (e) {
                  m.appendChild(p('script'))[P] = function () {
                    m.removeChild(this), k(e)
                  }
                }
              : function (e) {
                  setTimeout(T(e), 0)
                })),
      (e.exports = { set: x, clear: b })
  },
  '2d00': function (e, t, r) {
    var n,
      o,
      i = r('da84'),
      a = r('342f'),
      s = i.process,
      c = i.Deno,
      u = (s && s.versions) || (c && c.version),
      f = u && u.v8
    f && ((n = f.split('.')), (o = n[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1]))),
      !o &&
        a &&
        ((n = a.match(/Edge\/(\d+)/)),
        (!n || n[1] >= 74) &&
          ((n = a.match(/Chrome\/(\d+)/)), n && (o = +n[1]))),
      (e.exports = o)
  },
  3: function (e, t, r) {
    e.exports = r('fe77')
  },
  '342f': function (e, t, r) {
    var n = r('d066')
    e.exports = n('navigator', 'userAgent') || ''
  },
  '35a1': function (e, t, r) {
    var n = r('f5df'),
      o = r('dc4a'),
      i = r('3f8c'),
      a = r('b622'),
      s = a('iterator')
    e.exports = function (e) {
      if (void 0 != e) return o(e, s) || o(e, '@@iterator') || i[n(e)]
    }
  },
  '37e8': function (e, t, r) {
    var n = r('83ab'),
      o = r('aed9'),
      i = r('9bf2'),
      a = r('825a'),
      s = r('fc6a'),
      c = r('df75')
    t.f =
      n && !o
        ? Object.defineProperties
        : function (e, t) {
            a(e)
            var r,
              n = s(t),
              o = c(t),
              u = o.length,
              f = 0
            while (u > f) i.f(e, (r = o[f++]), n[r])
            return e
          }
  },
  '3a9b': function (e, t, r) {
    var n = r('e330')
    e.exports = n({}.isPrototypeOf)
  },
  '3bbe': function (e, t, r) {
    var n = r('da84'),
      o = r('1626'),
      i = n.String,
      a = n.TypeError
    e.exports = function (e) {
      if ('object' == typeof e || o(e)) return e
      throw a("Can't set " + i(e) + ' as a prototype')
    }
  },
  '3f8c': function (e, t) {
    e.exports = {}
  },
  '44ad': function (e, t, r) {
    var n = r('da84'),
      o = r('e330'),
      i = r('d039'),
      a = r('c6b6'),
      s = n.Object,
      c = o(''.split)
    e.exports = i(function () {
      return !s('z').propertyIsEnumerable(0)
    })
      ? function (e) {
          return 'String' == a(e) ? c(e, '') : s(e)
        }
      : s
  },
  '44d2': function (e, t, r) {
    var n = r('b622'),
      o = r('7c73'),
      i = r('9bf2'),
      a = n('unscopables'),
      s = Array.prototype
    void 0 == s[a] && i.f(s, a, { configurable: !0, value: o(null) }),
      (e.exports = function (e) {
        s[a][e] = !0
      })
  },
  '44de': function (e, t, r) {
    var n = r('da84')
    e.exports = function (e, t) {
      var r = n.console
      r && r.error && (1 == arguments.length ? r.error(e) : r.error(e, t))
    }
  },
  4840: function (e, t, r) {
    var n = r('825a'),
      o = r('5087'),
      i = r('b622'),
      a = i('species')
    e.exports = function (e, t) {
      var r,
        i = n(e).constructor
      return void 0 === i || void 0 == (r = n(i)[a]) ? t : o(r)
    }
  },
  '485a': function (e, t, r) {
    var n = r('da84'),
      o = r('c65b'),
      i = r('1626'),
      a = r('861d'),
      s = n.TypeError
    e.exports = function (e, t) {
      var r, n
      if ('string' === t && i((r = e.toString)) && !a((n = o(r, e)))) return n
      if (i((r = e.valueOf)) && !a((n = o(r, e)))) return n
      if ('string' !== t && i((r = e.toString)) && !a((n = o(r, e)))) return n
      throw s("Can't convert object to primitive value")
    }
  },
  4930: function (e, t, r) {
    var n = r('2d00'),
      o = r('d039')
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        var e = Symbol()
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && n && n < 41)
        )
      })
  },
  '4d64': function (e, t, r) {
    var n = r('fc6a'),
      o = r('23cb'),
      i = r('07fa'),
      a = function (e) {
        return function (t, r, a) {
          var s,
            c = n(t),
            u = i(c),
            f = o(a, u)
          if (e && r != r) {
            while (u > f) if (((s = c[f++]), s != s)) return !0
          } else
            for (; u > f; f++)
              if ((e || f in c) && c[f] === r) return e || f || 0
          return !e && -1
        }
      }
    e.exports = { includes: a(!0), indexOf: a(!1) }
  },
  5087: function (e, t, r) {
    var n = r('da84'),
      o = r('68ee'),
      i = r('0d51'),
      a = n.TypeError
    e.exports = function (e) {
      if (o(e)) return e
      throw a(i(e) + ' is not a constructor')
    }
  },
  '50c4': function (e, t, r) {
    var n = r('5926'),
      o = Math.min
    e.exports = function (e) {
      return e > 0 ? o(n(e), 9007199254740991) : 0
    }
  },
  5692: function (e, t, r) {
    var n = r('c430'),
      o = r('c6cd')
    ;(e.exports = function (e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {})
    })('versions', []).push({
      version: '3.20.2',
      mode: n ? 'pure' : 'global',
      copyright: '© 2022 Denis Pushkarev (zloirock.ru)',
    })
  },
  '56ef': function (e, t, r) {
    var n = r('d066'),
      o = r('e330'),
      i = r('241c'),
      a = r('7418'),
      s = r('825a'),
      c = o([].concat)
    e.exports =
      n('Reflect', 'ownKeys') ||
      function (e) {
        var t = i.f(s(e)),
          r = a.f
        return r ? c(t, r(e)) : t
      }
  },
  '577e': function (e, t, r) {
    var n = r('da84'),
      o = r('f5df'),
      i = n.String
    e.exports = function (e) {
      if ('Symbol' === o(e))
        throw TypeError('Cannot convert a Symbol value to a string')
      return i(e)
    }
  },
  5926: function (e, t) {
    var r = Math.ceil,
      n = Math.floor
    e.exports = function (e) {
      var t = +e
      return t !== t || 0 === t ? 0 : (t > 0 ? n : r)(t)
    }
  },
  '59ed': function (e, t, r) {
    var n = r('da84'),
      o = r('1626'),
      i = r('0d51'),
      a = n.TypeError
    e.exports = function (e) {
      if (o(e)) return e
      throw a(i(e) + ' is not a function')
    }
  },
  '5c6c': function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      }
    }
  },
  '5e77': function (e, t, r) {
    var n = r('83ab'),
      o = r('1a2d'),
      i = Function.prototype,
      a = n && Object.getOwnPropertyDescriptor,
      s = o(i, 'name'),
      c = s && 'something' === function () {}.name,
      u = s && (!n || (n && a(i, 'name').configurable))
    e.exports = { EXISTS: s, PROPER: c, CONFIGURABLE: u }
  },
  '605d': function (e, t, r) {
    var n = r('c6b6'),
      o = r('da84')
    e.exports = 'process' == n(o.process)
  },
  6069: function (e, t) {
    e.exports = 'object' == typeof window
  },
  '60da': function (e, t, r) {
    'use strict'
    var n = r('83ab'),
      o = r('e330'),
      i = r('c65b'),
      a = r('d039'),
      s = r('df75'),
      c = r('7418'),
      u = r('d1e7'),
      f = r('7b0b'),
      l = r('44ad'),
      g = Object.assign,
      m = Object.defineProperty,
      d = o([].concat)
    e.exports =
      !g ||
      a(function () {
        if (
          n &&
          1 !==
            g(
              { b: 1 },
              g(
                m({}, 'a', {
                  enumerable: !0,
                  get: function () {
                    m(this, 'b', { value: 3, enumerable: !1 })
                  },
                }),
                { b: 2 },
              ),
            ).b
        )
          return !0
        var e = {},
          t = {},
          r = Symbol(),
          o = 'abcdefghijklmnopqrst'
        return (
          (e[r] = 7),
          o.split('').forEach(function (e) {
            t[e] = e
          }),
          7 != g({}, e)[r] || s(g({}, t)).join('') != o
        )
      })
        ? function (e, t) {
            var r = f(e),
              o = arguments.length,
              a = 1,
              g = c.f,
              m = u.f
            while (o > a) {
              var p,
                v = l(arguments[a++]),
                A = g ? d(s(v), g(v)) : s(v),
                x = A.length,
                b = 0
              while (x > b) (p = A[b++]), (n && !i(m, v, p)) || (r[p] = v[p])
            }
            return r
          }
        : g
  },
  '65f0': function (e, t, r) {
    var n = r('0b42')
    e.exports = function (e, t) {
      return new (n(e))(0 === t ? 0 : t)
    }
  },
  '68ee': function (e, t, r) {
    var n = r('e330'),
      o = r('d039'),
      i = r('1626'),
      a = r('f5df'),
      s = r('d066'),
      c = r('8925'),
      u = function () {},
      f = [],
      l = s('Reflect', 'construct'),
      g = /^\s*(?:class|function)\b/,
      m = n(g.exec),
      d = !g.exec(u),
      p = function (e) {
        if (!i(e)) return !1
        try {
          return l(u, f, e), !0
        } catch (t) {
          return !1
        }
      },
      v = function (e) {
        if (!i(e)) return !1
        switch (a(e)) {
          case 'AsyncFunction':
          case 'GeneratorFunction':
          case 'AsyncGeneratorFunction':
            return !1
        }
        try {
          return d || !!m(g, c(e))
        } catch (t) {
          return !0
        }
      }
    ;(v.sham = !0),
      (e.exports =
        !l ||
        o(function () {
          var e
          return (
            p(p.call) ||
            !p(Object) ||
            !p(function () {
              e = !0
            }) ||
            e
          )
        })
          ? v
          : p)
  },
  '69f3': function (e, t, r) {
    var n,
      o,
      i,
      a = r('7f9a'),
      s = r('da84'),
      c = r('e330'),
      u = r('861d'),
      f = r('9112'),
      l = r('1a2d'),
      g = r('c6cd'),
      m = r('f772'),
      d = r('d012'),
      p = 'Object already initialized',
      v = s.TypeError,
      A = s.WeakMap,
      x = function (e) {
        return i(e) ? o(e) : n(e, {})
      },
      b = function (e) {
        return function (t) {
          var r
          if (!u(t) || (r = o(t)).type !== e)
            throw v('Incompatible receiver, ' + e + ' required')
          return r
        }
      }
    if (a || g.state) {
      var h = g.state || (g.state = new A()),
        y = c(h.get),
        w = c(h.has),
        j = c(h.set)
      ;(n = function (e, t) {
        if (w(h, e)) throw new v(p)
        return (t.facade = e), j(h, e, t), t
      }),
        (o = function (e) {
          return y(h, e) || {}
        }),
        (i = function (e) {
          return w(h, e)
        })
    } else {
      var O = m('state')
      ;(d[O] = !0),
        (n = function (e, t) {
          if (l(e, O)) throw new v(p)
          return (t.facade = e), f(e, O, t), t
        }),
        (o = function (e) {
          return l(e, O) ? e[O] : {}
        }),
        (i = function (e) {
          return l(e, O)
        })
    }
    e.exports = { set: n, get: o, has: i, enforce: x, getterFor: b }
  },
  '6eeb': function (e, t, r) {
    var n = r('da84'),
      o = r('1626'),
      i = r('1a2d'),
      a = r('9112'),
      s = r('ce4e'),
      c = r('8925'),
      u = r('69f3'),
      f = r('5e77').CONFIGURABLE,
      l = u.get,
      g = u.enforce,
      m = String(String).split('String')
    ;(e.exports = function (e, t, r, c) {
      var u,
        l = !!c && !!c.unsafe,
        d = !!c && !!c.enumerable,
        p = !!c && !!c.noTargetGet,
        v = c && void 0 !== c.name ? c.name : t
      o(r) &&
        ('Symbol(' === String(v).slice(0, 7) &&
          (v = '[' + String(v).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
        (!i(r, 'name') || (f && r.name !== v)) && a(r, 'name', v),
        (u = g(r)),
        u.source || (u.source = m.join('string' == typeof v ? v : ''))),
        e !== n
          ? (l ? !p && e[t] && (d = !0) : delete e[t],
            d ? (e[t] = r) : a(e, t, r))
          : d
          ? (e[t] = r)
          : s(t, r)
    })(Function.prototype, 'toString', function () {
      return (o(this) && l(this).source) || c(this)
    })
  },
  7418: function (e, t) {
    t.f = Object.getOwnPropertySymbols
  },
  7839: function (e, t) {
    e.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ]
  },
  '7b0b': function (e, t, r) {
    var n = r('da84'),
      o = r('1d80'),
      i = n.Object
    e.exports = function (e) {
      return i(o(e))
    }
  },
  '7c73': function (e, t, r) {
    var n,
      o = r('825a'),
      i = r('37e8'),
      a = r('7839'),
      s = r('d012'),
      c = r('1be4'),
      u = r('cc12'),
      f = r('f772'),
      l = '>',
      g = '<',
      m = 'prototype',
      d = 'script',
      p = f('IE_PROTO'),
      v = function () {},
      A = function (e) {
        return g + d + l + e + g + '/' + d + l
      },
      x = function (e) {
        e.write(A('')), e.close()
        var t = e.parentWindow.Object
        return (e = null), t
      },
      b = function () {
        var e,
          t = u('iframe'),
          r = 'java' + d + ':'
        return (
          (t.style.display = 'none'),
          c.appendChild(t),
          (t.src = String(r)),
          (e = t.contentWindow.document),
          e.open(),
          e.write(A('document.F=Object')),
          e.close(),
          e.F
        )
      },
      h = function () {
        try {
          n = new ActiveXObject('htmlfile')
        } catch (t) {}
        h =
          'undefined' != typeof document
            ? document.domain && n
              ? x(n)
              : b()
            : x(n)
        var e = a.length
        while (e--) delete h[m][a[e]]
        return h()
      }
    ;(s[p] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var r
          return (
            null !== e
              ? ((v[m] = o(e)), (r = new v()), (v[m] = null), (r[p] = e))
              : (r = h()),
            void 0 === t ? r : i.f(r, t)
          )
        })
  },
  '7dd0': function (e, t, r) {
    'use strict'
    var n = r('23e7'),
      o = r('c65b'),
      i = r('c430'),
      a = r('5e77'),
      s = r('1626'),
      c = r('9ed3'),
      u = r('e163'),
      f = r('d2bb'),
      l = r('d44e'),
      g = r('9112'),
      m = r('6eeb'),
      d = r('b622'),
      p = r('3f8c'),
      v = r('ae93'),
      A = a.PROPER,
      x = a.CONFIGURABLE,
      b = v.IteratorPrototype,
      h = v.BUGGY_SAFARI_ITERATORS,
      y = d('iterator'),
      w = 'keys',
      j = 'values',
      O = 'entries',
      E = function () {
        return this
      }
    e.exports = function (e, t, r, a, d, v, S) {
      c(r, t, a)
      var P,
        k,
        T,
        I = function (e) {
          if (e === d && F) return F
          if (!h && e in _) return _[e]
          switch (e) {
            case w:
              return function () {
                return new r(this, e)
              }
            case j:
              return function () {
                return new r(this, e)
              }
            case O:
              return function () {
                return new r(this, e)
              }
          }
          return function () {
            return new r(this)
          }
        },
        R = t + ' Iterator',
        C = !1,
        _ = e.prototype,
        M = _[y] || _['@@iterator'] || (d && _[d]),
        F = (!h && M) || I(d),
        N = ('Array' == t && _.entries) || M
      if (
        (N &&
          ((P = u(N.call(new e()))),
          P !== Object.prototype &&
            P.next &&
            (i || u(P) === b || (f ? f(P, b) : s(P[y]) || m(P, y, E)),
            l(P, R, !0, !0),
            i && (p[R] = E))),
        A &&
          d == j &&
          M &&
          M.name !== j &&
          (!i && x
            ? g(_, 'name', j)
            : ((C = !0),
              (F = function () {
                return o(M, this)
              }))),
        d)
      )
        if (((k = { values: I(j), keys: v ? F : I(w), entries: I(O) }), S))
          for (T in k) (h || C || !(T in _)) && m(_, T, k[T])
        else n({ target: t, proto: !0, forced: h || C }, k)
      return (i && !S) || _[y] === F || m(_, y, F, { name: d }), (p[t] = F), k
    }
  },
  '7f9a': function (e, t, r) {
    var n = r('da84'),
      o = r('1626'),
      i = r('8925'),
      a = n.WeakMap
    e.exports = o(a) && /native code/.test(i(a))
  },
  '825a': function (e, t, r) {
    var n = r('da84'),
      o = r('861d'),
      i = n.String,
      a = n.TypeError
    e.exports = function (e) {
      if (o(e)) return e
      throw a(i(e) + ' is not an object')
    }
  },
  '83ab': function (e, t, r) {
    var n = r('d039')
    e.exports = !n(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7
          },
        })[1]
      )
    })
  },
  8418: function (e, t, r) {
    'use strict'
    var n = r('a04b'),
      o = r('9bf2'),
      i = r('5c6c')
    e.exports = function (e, t, r) {
      var a = n(t)
      a in e ? o.f(e, a, i(0, r)) : (e[a] = r)
    }
  },
  '861d': function (e, t, r) {
    var n = r('1626')
    e.exports = function (e) {
      return 'object' == typeof e ? null !== e : n(e)
    }
  },
  8925: function (e, t, r) {
    var n = r('e330'),
      o = r('1626'),
      i = r('c6cd'),
      a = n(Function.toString)
    o(i.inspectSource) ||
      (i.inspectSource = function (e) {
        return a(e)
      }),
      (e.exports = i.inspectSource)
  },
  '90e3': function (e, t, r) {
    var n = r('e330'),
      o = 0,
      i = Math.random(),
      a = n((1).toString)
    e.exports = function (e) {
      return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + a(++o + i, 36)
    }
  },
  9112: function (e, t, r) {
    var n = r('83ab'),
      o = r('9bf2'),
      i = r('5c6c')
    e.exports = n
      ? function (e, t, r) {
          return o.f(e, t, i(1, r))
        }
      : function (e, t, r) {
          return (e[t] = r), e
        }
  },
  9263: function (e, t, r) {
    'use strict'
    var n = r('c65b'),
      o = r('e330'),
      i = r('577e'),
      a = r('ad6d'),
      s = r('9f7f'),
      c = r('5692'),
      u = r('7c73'),
      f = r('69f3').get,
      l = r('fce3'),
      g = r('107c'),
      m = c('native-string-replace', String.prototype.replace),
      d = RegExp.prototype.exec,
      p = d,
      v = o(''.charAt),
      A = o(''.indexOf),
      x = o(''.replace),
      b = o(''.slice),
      h = (function () {
        var e = /a/,
          t = /b*/g
        return (
          n(d, e, 'a'), n(d, t, 'a'), 0 !== e.lastIndex || 0 !== t.lastIndex
        )
      })(),
      y = s.BROKEN_CARET,
      w = void 0 !== /()??/.exec('')[1],
      j = h || w || y || l || g
    j &&
      (p = function (e) {
        var t,
          r,
          o,
          s,
          c,
          l,
          g,
          j = this,
          O = f(j),
          E = i(e),
          S = O.raw
        if (S)
          return (
            (S.lastIndex = j.lastIndex),
            (t = n(p, S, E)),
            (j.lastIndex = S.lastIndex),
            t
          )
        var P = O.groups,
          k = y && j.sticky,
          T = n(a, j),
          I = j.source,
          R = 0,
          C = E
        if (
          (k &&
            ((T = x(T, 'y', '')),
            -1 === A(T, 'g') && (T += 'g'),
            (C = b(E, j.lastIndex)),
            j.lastIndex > 0 &&
              (!j.multiline ||
                (j.multiline && '\n' !== v(E, j.lastIndex - 1))) &&
              ((I = '(?: ' + I + ')'), (C = ' ' + C), R++),
            (r = new RegExp('^(?:' + I + ')', T))),
          w && (r = new RegExp('^' + I + '$(?!\\s)', T)),
          h && (o = j.lastIndex),
          (s = n(d, k ? r : j, C)),
          k
            ? s
              ? ((s.input = b(s.input, R)),
                (s[0] = b(s[0], R)),
                (s.index = j.lastIndex),
                (j.lastIndex += s[0].length))
              : (j.lastIndex = 0)
            : h && s && (j.lastIndex = j.global ? s.index + s[0].length : o),
          w &&
            s &&
            s.length > 1 &&
            n(m, s[0], r, function () {
              for (c = 1; c < arguments.length - 2; c++)
                void 0 === arguments[c] && (s[c] = void 0)
            }),
          s && P)
        )
          for (s.groups = l = u(null), c = 0; c < P.length; c++)
            (g = P[c]), (l[g[0]] = s[g[1]])
        return s
      }),
      (e.exports = p)
  },
  '94ca': function (e, t, r) {
    var n = r('d039'),
      o = r('1626'),
      i = /#|\.prototype\./,
      a = function (e, t) {
        var r = c[s(e)]
        return r == f || (r != u && (o(t) ? n(t) : !!t))
      },
      s = (a.normalize = function (e) {
        return String(e).replace(i, '.').toLowerCase()
      }),
      c = (a.data = {}),
      u = (a.NATIVE = 'N'),
      f = (a.POLYFILL = 'P')
    e.exports = a
  },
  9845: function (e, t, r) {
    var n,
      o,
      i,
      a = void 0
    ;(function (r, a) {
      ;(o = [e]),
        (n = a),
        (i = 'function' === typeof n ? n.apply(t, o) : n),
        void 0 === i || (e.exports = i)
    })(
      'undefined' !== typeof globalThis
        ? globalThis
        : 'undefined' !== typeof self && self,
      function (e) {
        'use strict'
        if (
          'undefined' === typeof a ||
          Object.getPrototypeOf(a) !== Object.prototype
        ) {
          const t = 'The message port closed before a response was received.',
            r =
              'Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)',
            n = (e) => {
              const n = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              }
              if (0 === Object.keys(n).length)
                throw new Error(
                  'api-metadata.json has not been included in browser-polyfill',
                )
              class o extends WeakMap {
                constructor(e, t) {
                  super(t), (this.createItem = e)
                }
                get(e) {
                  return (
                    this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                  )
                }
              }
              const i = (e) =>
                  e && 'object' === typeof e && 'function' === typeof e.then,
                a = (t, r) => (...n) => {
                  e.runtime.lastError
                    ? t.reject(new Error(e.runtime.lastError.message))
                    : r.singleCallbackArg ||
                      (n.length <= 1 && !1 !== r.singleCallbackArg)
                    ? t.resolve(n[0])
                    : t.resolve(n)
                },
                s = (e) => (1 == e ? 'argument' : 'arguments'),
                c = (e, t) =>
                  function (r, ...n) {
                    if (n.length < t.minArgs)
                      throw new Error(
                        `Expected at least ${t.minArgs} ${s(
                          t.minArgs,
                        )} for ${e}(), got ${n.length}`,
                      )
                    if (n.length > t.maxArgs)
                      throw new Error(
                        `Expected at most ${t.maxArgs} ${s(
                          t.maxArgs,
                        )} for ${e}(), got ${n.length}`,
                      )
                    return new Promise((o, i) => {
                      if (t.fallbackToNoCallback)
                        try {
                          r[e](...n, a({ resolve: o, reject: i }, t))
                        } catch (s) {
                          console.warn(
                            e +
                              " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ",
                            s,
                          ),
                            r[e](...n),
                            (t.fallbackToNoCallback = !1),
                            (t.noCallback = !0),
                            o()
                        }
                      else
                        t.noCallback
                          ? (r[e](...n), o())
                          : r[e](...n, a({ resolve: o, reject: i }, t))
                    })
                  },
                u = (e, t, r) =>
                  new Proxy(t, {
                    apply(t, n, o) {
                      return r.call(n, e, ...o)
                    },
                  })
              let f = Function.call.bind(Object.prototype.hasOwnProperty)
              const l = (e, t = {}, r = {}) => {
                  let n = Object.create(null),
                    o = {
                      has(t, r) {
                        return r in e || r in n
                      },
                      get(o, i, a) {
                        if (i in n) return n[i]
                        if (!(i in e)) return
                        let s = e[i]
                        if ('function' === typeof s)
                          if ('function' === typeof t[i]) s = u(e, e[i], t[i])
                          else if (f(r, i)) {
                            let t = c(i, r[i])
                            s = u(e, e[i], t)
                          } else s = s.bind(e)
                        else if (
                          'object' === typeof s &&
                          null !== s &&
                          (f(t, i) || f(r, i))
                        )
                          s = l(s, t[i], r[i])
                        else {
                          if (!f(r, '*'))
                            return (
                              Object.defineProperty(n, i, {
                                configurable: !0,
                                enumerable: !0,
                                get() {
                                  return e[i]
                                },
                                set(t) {
                                  e[i] = t
                                },
                              }),
                              s
                            )
                          s = l(s, t[i], r['*'])
                        }
                        return (n[i] = s), s
                      },
                      set(t, r, o, i) {
                        return r in n ? (n[r] = o) : (e[r] = o), !0
                      },
                      defineProperty(e, t, r) {
                        return Reflect.defineProperty(n, t, r)
                      },
                      deleteProperty(e, t) {
                        return Reflect.deleteProperty(n, t)
                      },
                    },
                    i = Object.create(e)
                  return new Proxy(i, o)
                },
                g = (e) => ({
                  addListener(t, r, ...n) {
                    t.addListener(e.get(r), ...n)
                  },
                  hasListener(t, r) {
                    return t.hasListener(e.get(r))
                  },
                  removeListener(t, r) {
                    t.removeListener(e.get(r))
                  },
                }),
                m = new o((e) =>
                  'function' !== typeof e
                    ? e
                    : function (t) {
                        const r = l(
                          t,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } },
                        )
                        e(r)
                      },
                )
              let d = !1
              const p = new o((e) =>
                  'function' !== typeof e
                    ? e
                    : function (t, n, o) {
                        let a,
                          s,
                          c = !1,
                          u = new Promise((e) => {
                            a = function (t) {
                              d ||
                                (console.warn(r, new Error().stack), (d = !0)),
                                (c = !0),
                                e(t)
                            }
                          })
                        try {
                          s = e(t, n, a)
                        } catch (g) {
                          s = Promise.reject(g)
                        }
                        const f = !0 !== s && i(s)
                        if (!0 !== s && !f && !c) return !1
                        const l = (e) => {
                          e.then(
                            (e) => {
                              o(e)
                            },
                            (e) => {
                              let t
                              ;(t =
                                e &&
                                (e instanceof Error ||
                                  'string' === typeof e.message)
                                  ? e.message
                                  : 'An unexpected error occurred'),
                                o({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: t,
                                })
                            },
                          ).catch((e) => {
                            console.error(
                              'Failed to send onMessage rejected reply',
                              e,
                            )
                          })
                        }
                        return l(f ? s : u), !0
                      },
                ),
                v = ({ reject: r, resolve: n }, o) => {
                  e.runtime.lastError
                    ? e.runtime.lastError.message === t
                      ? n()
                      : r(new Error(e.runtime.lastError.message))
                    : o && o.__mozWebExtensionPolyfillReject__
                    ? r(new Error(o.message))
                    : n(o)
                },
                A = (e, t, r, ...n) => {
                  if (n.length < t.minArgs)
                    throw new Error(
                      `Expected at least ${t.minArgs} ${s(
                        t.minArgs,
                      )} for ${e}(), got ${n.length}`,
                    )
                  if (n.length > t.maxArgs)
                    throw new Error(
                      `Expected at most ${t.maxArgs} ${s(
                        t.maxArgs,
                      )} for ${e}(), got ${n.length}`,
                    )
                  return new Promise((e, t) => {
                    const o = v.bind(null, { resolve: e, reject: t })
                    n.push(o), r.sendMessage(...n)
                  })
                },
                x = {
                  devtools: { network: { onRequestFinished: g(m) } },
                  runtime: {
                    onMessage: g(p),
                    onMessageExternal: g(p),
                    sendMessage: A.bind(null, 'sendMessage', {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: A.bind(null, 'sendMessage', {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                b = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                }
              return (
                (n.privacy = {
                  network: { '*': b },
                  services: { '*': b },
                  websites: { '*': b },
                }),
                l(e, x, n)
              )
            }
          if (
            'object' != typeof chrome ||
            !chrome ||
            !chrome.runtime ||
            !chrome.runtime.id
          )
            throw new Error(
              'This script should only be loaded in a browser extension.',
            )
          e.exports = n(chrome)
        } else e.exports = a
      },
    )
  },
  '99af': function (e, t, r) {
    'use strict'
    var n = r('23e7'),
      o = r('da84'),
      i = r('d039'),
      a = r('e8b5'),
      s = r('861d'),
      c = r('7b0b'),
      u = r('07fa'),
      f = r('8418'),
      l = r('65f0'),
      g = r('1dde'),
      m = r('b622'),
      d = r('2d00'),
      p = m('isConcatSpreadable'),
      v = 9007199254740991,
      A = 'Maximum allowed index exceeded',
      x = o.TypeError,
      b =
        d >= 51 ||
        !i(function () {
          var e = []
          return (e[p] = !1), e.concat()[0] !== e
        }),
      h = g('concat'),
      y = function (e) {
        if (!s(e)) return !1
        var t = e[p]
        return void 0 !== t ? !!t : a(e)
      },
      w = !b || !h
    n(
      { target: 'Array', proto: !0, forced: w },
      {
        concat: function (e) {
          var t,
            r,
            n,
            o,
            i,
            a = c(this),
            s = l(a, 0),
            g = 0
          for (t = -1, n = arguments.length; t < n; t++)
            if (((i = -1 === t ? a : arguments[t]), y(i))) {
              if (((o = u(i)), g + o > v)) throw x(A)
              for (r = 0; r < o; r++, g++) r in i && f(s, g, i[r])
            } else {
              if (g >= v) throw x(A)
              f(s, g++, i)
            }
          return (s.length = g), s
        },
      },
    )
  },
  '9a1f': function (e, t, r) {
    var n = r('da84'),
      o = r('c65b'),
      i = r('59ed'),
      a = r('825a'),
      s = r('0d51'),
      c = r('35a1'),
      u = n.TypeError
    e.exports = function (e, t) {
      var r = arguments.length < 2 ? c(e) : t
      if (i(r)) return a(o(r, e))
      throw u(s(e) + ' is not iterable')
    }
  },
  '9bf2': function (e, t, r) {
    var n = r('da84'),
      o = r('83ab'),
      i = r('0cfb'),
      a = r('aed9'),
      s = r('825a'),
      c = r('a04b'),
      u = n.TypeError,
      f = Object.defineProperty,
      l = Object.getOwnPropertyDescriptor,
      g = 'enumerable',
      m = 'configurable',
      d = 'writable'
    t.f = o
      ? a
        ? function (e, t, r) {
            if (
              (s(e),
              (t = c(t)),
              s(r),
              'function' === typeof e &&
                'prototype' === t &&
                'value' in r &&
                d in r &&
                !r[d])
            ) {
              var n = l(e, t)
              n &&
                n[d] &&
                ((e[t] = r.value),
                (r = {
                  configurable: m in r ? r[m] : n[m],
                  enumerable: g in r ? r[g] : n[g],
                  writable: !1,
                }))
            }
            return f(e, t, r)
          }
        : f
      : function (e, t, r) {
          if ((s(e), (t = c(t)), s(r), i))
            try {
              return f(e, t, r)
            } catch (n) {}
          if ('get' in r || 'set' in r) throw u('Accessors not supported')
          return 'value' in r && (e[t] = r.value), e
        }
  },
  '9ed3': function (e, t, r) {
    'use strict'
    var n = r('ae93').IteratorPrototype,
      o = r('7c73'),
      i = r('5c6c'),
      a = r('d44e'),
      s = r('3f8c'),
      c = function () {
        return this
      }
    e.exports = function (e, t, r, u) {
      var f = t + ' Iterator'
      return (
        (e.prototype = o(n, { next: i(+!u, r) })),
        a(e, f, !1, !0),
        (s[f] = c),
        e
      )
    }
  },
  '9f7f': function (e, t, r) {
    var n = r('d039'),
      o = r('da84'),
      i = o.RegExp,
      a = n(function () {
        var e = i('a', 'y')
        return (e.lastIndex = 2), null != e.exec('abcd')
      }),
      s =
        a ||
        n(function () {
          return !i('a', 'y').sticky
        }),
      c =
        a ||
        n(function () {
          var e = i('^r', 'gy')
          return (e.lastIndex = 2), null != e.exec('str')
        })
    e.exports = { BROKEN_CARET: c, MISSED_STICKY: s, UNSUPPORTED_Y: a }
  },
  a04b: function (e, t, r) {
    var n = r('c04e'),
      o = r('d9b5')
    e.exports = function (e) {
      var t = n(e, 'string')
      return o(t) ? t : t + ''
    }
  },
  a4b4: function (e, t, r) {
    var n = r('342f')
    e.exports = /web0s(?!.*chrome)/i.test(n)
  },
  a79d: function (e, t, r) {
    'use strict'
    var n = r('23e7'),
      o = r('c430'),
      i = r('fea9'),
      a = r('d039'),
      s = r('d066'),
      c = r('1626'),
      u = r('4840'),
      f = r('cdf9'),
      l = r('6eeb'),
      g =
        !!i &&
        a(function () {
          i.prototype['finally'].call({ then: function () {} }, function () {})
        })
    if (
      (n(
        { target: 'Promise', proto: !0, real: !0, forced: g },
        {
          finally: function (e) {
            var t = u(this, s('Promise')),
              r = c(e)
            return this.then(
              r
                ? function (r) {
                    return f(t, e()).then(function () {
                      return r
                    })
                  }
                : e,
              r
                ? function (r) {
                    return f(t, e()).then(function () {
                      throw r
                    })
                  }
                : e,
            )
          },
        },
      ),
      !o && c(i))
    ) {
      var m = s('Promise').prototype['finally']
      i.prototype['finally'] !== m &&
        l(i.prototype, 'finally', m, { unsafe: !0 })
    }
  },
  ac1f: function (e, t, r) {
    'use strict'
    var n = r('23e7'),
      o = r('9263')
    n({ target: 'RegExp', proto: !0, forced: /./.exec !== o }, { exec: o })
  },
  ad6d: function (e, t, r) {
    'use strict'
    var n = r('825a')
    e.exports = function () {
      var e = n(this),
        t = ''
      return (
        e.global && (t += 'g'),
        e.ignoreCase && (t += 'i'),
        e.multiline && (t += 'm'),
        e.dotAll && (t += 's'),
        e.unicode && (t += 'u'),
        e.sticky && (t += 'y'),
        t
      )
    }
  },
  ae93: function (e, t, r) {
    'use strict'
    var n,
      o,
      i,
      a = r('d039'),
      s = r('1626'),
      c = r('7c73'),
      u = r('e163'),
      f = r('6eeb'),
      l = r('b622'),
      g = r('c430'),
      m = l('iterator'),
      d = !1
    ;[].keys &&
      ((i = [].keys()),
      'next' in i
        ? ((o = u(u(i))), o !== Object.prototype && (n = o))
        : (d = !0))
    var p =
      void 0 == n ||
      a(function () {
        var e = {}
        return n[m].call(e) !== e
      })
    p ? (n = {}) : g && (n = c(n)),
      s(n[m]) ||
        f(n, m, function () {
          return this
        }),
      (e.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: d })
  },
  aed9: function (e, t, r) {
    var n = r('83ab'),
      o = r('d039')
    e.exports =
      n &&
      o(function () {
        return (
          42 !=
          Object.defineProperty(function () {}, 'prototype', {
            value: 42,
            writable: !1,
          }).prototype
        )
      })
  },
  b041: function (e, t, r) {
    'use strict'
    var n = r('00ee'),
      o = r('f5df')
    e.exports = n
      ? {}.toString
      : function () {
          return '[object ' + o(this) + ']'
        }
  },
  b575: function (e, t, r) {
    var n,
      o,
      i,
      a,
      s,
      c,
      u,
      f,
      l = r('da84'),
      g = r('0366'),
      m = r('06cf').f,
      d = r('2cf4').set,
      p = r('1cdc'),
      v = r('d4c3'),
      A = r('a4b4'),
      x = r('605d'),
      b = l.MutationObserver || l.WebKitMutationObserver,
      h = l.document,
      y = l.process,
      w = l.Promise,
      j = m(l, 'queueMicrotask'),
      O = j && j.value
    O ||
      ((n = function () {
        var e, t
        x && (e = y.domain) && e.exit()
        while (o) {
          ;(t = o.fn), (o = o.next)
          try {
            t()
          } catch (r) {
            throw (o ? a() : (i = void 0), r)
          }
        }
        ;(i = void 0), e && e.enter()
      }),
      p || x || A || !b || !h
        ? !v && w && w.resolve
          ? ((u = w.resolve(void 0)),
            (u.constructor = w),
            (f = g(u.then, u)),
            (a = function () {
              f(n)
            }))
          : x
          ? (a = function () {
              y.nextTick(n)
            })
          : ((d = g(d, l)),
            (a = function () {
              d(n)
            }))
        : ((s = !0),
          (c = h.createTextNode('')),
          new b(n).observe(c, { characterData: !0 }),
          (a = function () {
            c.data = s = !s
          }))),
      (e.exports =
        O ||
        function (e) {
          var t = { fn: e, next: void 0 }
          i && (i.next = t), o || ((o = t), a()), (i = t)
        })
  },
  b622: function (e, t, r) {
    var n = r('da84'),
      o = r('5692'),
      i = r('1a2d'),
      a = r('90e3'),
      s = r('4930'),
      c = r('fdbf'),
      u = o('wks'),
      f = n.Symbol,
      l = f && f['for'],
      g = c ? f : (f && f.withoutSetter) || a
    e.exports = function (e) {
      if (!i(u, e) || (!s && 'string' != typeof u[e])) {
        var t = 'Symbol.' + e
        s && i(f, e) ? (u[e] = f[e]) : (u[e] = c && l ? l(t) : g(t))
      }
      return u[e]
    }
  },
  c04e: function (e, t, r) {
    var n = r('da84'),
      o = r('c65b'),
      i = r('861d'),
      a = r('d9b5'),
      s = r('dc4a'),
      c = r('485a'),
      u = r('b622'),
      f = n.TypeError,
      l = u('toPrimitive')
    e.exports = function (e, t) {
      if (!i(e) || a(e)) return e
      var r,
        n = s(e, l)
      if (n) {
        if ((void 0 === t && (t = 'default'), (r = o(n, e, t)), !i(r) || a(r)))
          return r
        throw f("Can't convert object to primitive value")
      }
      return void 0 === t && (t = 'number'), c(e, t)
    }
  },
  c430: function (e, t) {
    e.exports = !1
  },
  c65b: function (e, t) {
    var r = Function.prototype.call
    e.exports = r.bind
      ? r.bind(r)
      : function () {
          return r.apply(r, arguments)
        }
  },
  c6b6: function (e, t, r) {
    var n = r('e330'),
      o = n({}.toString),
      i = n(''.slice)
    e.exports = function (e) {
      return i(o(e), 8, -1)
    }
  },
  c6cd: function (e, t, r) {
    var n = r('da84'),
      o = r('ce4e'),
      i = '__core-js_shared__',
      a = n[i] || o(i, {})
    e.exports = a
  },
  c8ba: function (e, t) {
    var r
    r = (function () {
      return this
    })()
    try {
      r = r || new Function('return this')()
    } catch (n) {
      'object' === typeof window && (r = window)
    }
    e.exports = r
  },
  ca84: function (e, t, r) {
    var n = r('e330'),
      o = r('1a2d'),
      i = r('fc6a'),
      a = r('4d64').indexOf,
      s = r('d012'),
      c = n([].push)
    e.exports = function (e, t) {
      var r,
        n = i(e),
        u = 0,
        f = []
      for (r in n) !o(s, r) && o(n, r) && c(f, r)
      while (t.length > u) o(n, (r = t[u++])) && (~a(f, r) || c(f, r))
      return f
    }
  },
  cc12: function (e, t, r) {
    var n = r('da84'),
      o = r('861d'),
      i = n.document,
      a = o(i) && o(i.createElement)
    e.exports = function (e) {
      return a ? i.createElement(e) : {}
    }
  },
  cca6: function (e, t, r) {
    var n = r('23e7'),
      o = r('60da')
    n(
      { target: 'Object', stat: !0, forced: Object.assign !== o },
      { assign: o },
    )
  },
  cdf9: function (e, t, r) {
    var n = r('825a'),
      o = r('861d'),
      i = r('f069')
    e.exports = function (e, t) {
      if ((n(e), o(t) && t.constructor === e)) return t
      var r = i.f(e),
        a = r.resolve
      return a(t), r.promise
    }
  },
  ce4e: function (e, t, r) {
    var n = r('da84'),
      o = Object.defineProperty
    e.exports = function (e, t) {
      try {
        o(n, e, { value: t, configurable: !0, writable: !0 })
      } catch (r) {
        n[e] = t
      }
      return t
    }
  },
  d012: function (e, t) {
    e.exports = {}
  },
  d039: function (e, t) {
    e.exports = function (e) {
      try {
        return !!e()
      } catch (t) {
        return !0
      }
    }
  },
  d066: function (e, t, r) {
    var n = r('da84'),
      o = r('1626'),
      i = function (e) {
        return o(e) ? e : void 0
      }
    e.exports = function (e, t) {
      return arguments.length < 2 ? i(n[e]) : n[e] && n[e][t]
    }
  },
  d1e7: function (e, t, r) {
    'use strict'
    var n = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !n.call({ 1: 2 }, 1)
    t.f = i
      ? function (e) {
          var t = o(this, e)
          return !!t && t.enumerable
        }
      : n
  },
  d2bb: function (e, t, r) {
    var n = r('e330'),
      o = r('825a'),
      i = r('3bbe')
    e.exports =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var e,
              t = !1,
              r = {}
            try {
              ;(e = n(
                Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
                  .set,
              )),
                e(r, []),
                (t = r instanceof Array)
            } catch (a) {}
            return function (r, n) {
              return o(r), i(n), t ? e(r, n) : (r.__proto__ = n), r
            }
          })()
        : void 0)
  },
  d3b7: function (e, t, r) {
    var n = r('00ee'),
      o = r('6eeb'),
      i = r('b041')
    n || o(Object.prototype, 'toString', i, { unsafe: !0 })
  },
  d44e: function (e, t, r) {
    var n = r('9bf2').f,
      o = r('1a2d'),
      i = r('b622'),
      a = i('toStringTag')
    e.exports = function (e, t, r) {
      e && !r && (e = e.prototype),
        e && !o(e, a) && n(e, a, { configurable: !0, value: t })
    }
  },
  d4c3: function (e, t, r) {
    var n = r('342f'),
      o = r('da84')
    e.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== o.Pebble
  },
  d9b5: function (e, t, r) {
    var n = r('da84'),
      o = r('d066'),
      i = r('1626'),
      a = r('3a9b'),
      s = r('fdbf'),
      c = n.Object
    e.exports = s
      ? function (e) {
          return 'symbol' == typeof e
        }
      : function (e) {
          var t = o('Symbol')
          return i(t) && a(t.prototype, c(e))
        }
  },
  da84: function (e, t, r) {
    ;(function (t) {
      var r = function (e) {
        return e && e.Math == Math && e
      }
      e.exports =
        r('object' == typeof globalThis && globalThis) ||
        r('object' == typeof window && window) ||
        r('object' == typeof self && self) ||
        r('object' == typeof t && t) ||
        (function () {
          return this
        })() ||
        Function('return this')()
    }.call(this, r('c8ba')))
  },
  dc4a: function (e, t, r) {
    var n = r('59ed')
    e.exports = function (e, t) {
      var r = e[t]
      return null == r ? void 0 : n(r)
    }
  },
  df75: function (e, t, r) {
    var n = r('ca84'),
      o = r('7839')
    e.exports =
      Object.keys ||
      function (e) {
        return n(e, o)
      }
  },
  e163: function (e, t, r) {
    var n = r('da84'),
      o = r('1a2d'),
      i = r('1626'),
      a = r('7b0b'),
      s = r('f772'),
      c = r('e177'),
      u = s('IE_PROTO'),
      f = n.Object,
      l = f.prototype
    e.exports = c
      ? f.getPrototypeOf
      : function (e) {
          var t = a(e)
          if (o(t, u)) return t[u]
          var r = t.constructor
          return i(r) && t instanceof r
            ? r.prototype
            : t instanceof f
            ? l
            : null
        }
  },
  e177: function (e, t, r) {
    var n = r('d039')
    e.exports = !n(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      )
    })
  },
  e260: function (e, t, r) {
    'use strict'
    var n = r('fc6a'),
      o = r('44d2'),
      i = r('3f8c'),
      a = r('69f3'),
      s = r('9bf2').f,
      c = r('7dd0'),
      u = r('c430'),
      f = r('83ab'),
      l = 'Array Iterator',
      g = a.set,
      m = a.getterFor(l)
    e.exports = c(
      Array,
      'Array',
      function (e, t) {
        g(this, { type: l, target: n(e), index: 0, kind: t })
      },
      function () {
        var e = m(this),
          t = e.target,
          r = e.kind,
          n = e.index++
        return !t || n >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : 'keys' == r
          ? { value: n, done: !1 }
          : 'values' == r
          ? { value: t[n], done: !1 }
          : { value: [n, t[n]], done: !1 }
      },
      'values',
    )
    var d = (i.Arguments = i.Array)
    if ((o('keys'), o('values'), o('entries'), !u && f && 'values' !== d.name))
      try {
        s(d, 'name', { value: 'values' })
      } catch (p) {}
  },
  e2cc: function (e, t, r) {
    var n = r('6eeb')
    e.exports = function (e, t, r) {
      for (var o in t) n(e, o, t[o], r)
      return e
    }
  },
  e330: function (e, t) {
    var r = Function.prototype,
      n = r.bind,
      o = r.call,
      i = n && n.bind(o, o)
    e.exports = n
      ? function (e) {
          return e && i(e)
        }
      : function (e) {
          return (
            e &&
            function () {
              return o.apply(e, arguments)
            }
          )
        }
  },
  e667: function (e, t) {
    e.exports = function (e) {
      try {
        return { error: !1, value: e() }
      } catch (t) {
        return { error: !0, value: t }
      }
    }
  },
  e6cf: function (e, t, r) {
    'use strict'
    var n,
      o,
      i,
      a,
      s = r('23e7'),
      c = r('c430'),
      u = r('da84'),
      f = r('d066'),
      l = r('c65b'),
      g = r('fea9'),
      m = r('6eeb'),
      d = r('e2cc'),
      p = r('d2bb'),
      v = r('d44e'),
      A = r('2626'),
      x = r('59ed'),
      b = r('1626'),
      h = r('861d'),
      y = r('19aa'),
      w = r('8925'),
      j = r('2266'),
      O = r('1c7e'),
      E = r('4840'),
      S = r('2cf4').set,
      P = r('b575'),
      k = r('cdf9'),
      T = r('44de'),
      I = r('f069'),
      R = r('e667'),
      C = r('01b4'),
      _ = r('69f3'),
      M = r('94ca'),
      F = r('b622'),
      N = r('6069'),
      L = r('605d'),
      U = r('2d00'),
      B = F('species'),
      $ = 'Promise',
      D = _.getterFor($),
      G = _.set,
      W = _.getterFor($),
      z = g && g.prototype,
      q = g,
      K = z,
      Y = u.TypeError,
      Z = u.document,
      V = u.process,
      X = I.f,
      H = X,
      J = !!(Z && Z.createEvent && u.dispatchEvent),
      Q = b(u.PromiseRejectionEvent),
      ee = 'unhandledrejection',
      te = 'rejectionhandled',
      re = 0,
      ne = 1,
      oe = 2,
      ie = 1,
      ae = 2,
      se = !1,
      ce = M($, function () {
        var e = w(q),
          t = e !== String(q)
        if (!t && 66 === U) return !0
        if (c && !K['finally']) return !0
        if (U >= 51 && /native code/.test(e)) return !1
        var r = new q(function (e) {
            e(1)
          }),
          n = function (e) {
            e(
              function () {},
              function () {},
            )
          },
          o = (r.constructor = {})
        return (
          (o[B] = n),
          (se = r.then(function () {}) instanceof n),
          !se || (!t && N && !Q)
        )
      }),
      ue =
        ce ||
        !O(function (e) {
          q.all(e)['catch'](function () {})
        }),
      fe = function (e) {
        var t
        return !(!h(e) || !b((t = e.then))) && t
      },
      le = function (e, t) {
        var r,
          n,
          o,
          i = t.value,
          a = t.state == ne,
          s = a ? e.ok : e.fail,
          c = e.resolve,
          u = e.reject,
          f = e.domain
        try {
          s
            ? (a || (t.rejection === ae && ve(t), (t.rejection = ie)),
              !0 === s
                ? (r = i)
                : (f && f.enter(), (r = s(i)), f && (f.exit(), (o = !0))),
              r === e.promise
                ? u(Y('Promise-chain cycle'))
                : (n = fe(r))
                ? l(n, r, c, u)
                : c(r))
            : u(i)
        } catch (g) {
          f && !o && f.exit(), u(g)
        }
      },
      ge = function (e, t) {
        e.notified ||
          ((e.notified = !0),
          P(function () {
            var r,
              n = e.reactions
            while ((r = n.get())) le(r, e)
            ;(e.notified = !1), t && !e.rejection && de(e)
          }))
      },
      me = function (e, t, r) {
        var n, o
        J
          ? ((n = Z.createEvent('Event')),
            (n.promise = t),
            (n.reason = r),
            n.initEvent(e, !1, !0),
            u.dispatchEvent(n))
          : (n = { promise: t, reason: r }),
          !Q && (o = u['on' + e])
            ? o(n)
            : e === ee && T('Unhandled promise rejection', r)
      },
      de = function (e) {
        l(S, u, function () {
          var t,
            r = e.facade,
            n = e.value,
            o = pe(e)
          if (
            o &&
            ((t = R(function () {
              L ? V.emit('unhandledRejection', n, r) : me(ee, r, n)
            })),
            (e.rejection = L || pe(e) ? ae : ie),
            t.error)
          )
            throw t.value
        })
      },
      pe = function (e) {
        return e.rejection !== ie && !e.parent
      },
      ve = function (e) {
        l(S, u, function () {
          var t = e.facade
          L ? V.emit('rejectionHandled', t) : me(te, t, e.value)
        })
      },
      Ae = function (e, t, r) {
        return function (n) {
          e(t, n, r)
        }
      },
      xe = function (e, t, r) {
        e.done ||
          ((e.done = !0),
          r && (e = r),
          (e.value = t),
          (e.state = oe),
          ge(e, !0))
      },
      be = function (e, t, r) {
        if (!e.done) {
          ;(e.done = !0), r && (e = r)
          try {
            if (e.facade === t) throw Y("Promise can't be resolved itself")
            var n = fe(t)
            n
              ? P(function () {
                  var r = { done: !1 }
                  try {
                    l(n, t, Ae(be, r, e), Ae(xe, r, e))
                  } catch (o) {
                    xe(r, o, e)
                  }
                })
              : ((e.value = t), (e.state = ne), ge(e, !1))
          } catch (o) {
            xe({ done: !1 }, o, e)
          }
        }
      }
    if (
      ce &&
      ((q = function (e) {
        y(this, K), x(e), l(n, this)
        var t = D(this)
        try {
          e(Ae(be, t), Ae(xe, t))
        } catch (r) {
          xe(t, r)
        }
      }),
      (K = q.prototype),
      (n = function (e) {
        G(this, {
          type: $,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: new C(),
          rejection: !1,
          state: re,
          value: void 0,
        })
      }),
      (n.prototype = d(K, {
        then: function (e, t) {
          var r = W(this),
            n = X(E(this, q))
          return (
            (r.parent = !0),
            (n.ok = !b(e) || e),
            (n.fail = b(t) && t),
            (n.domain = L ? V.domain : void 0),
            r.state == re
              ? r.reactions.add(n)
              : P(function () {
                  le(n, r)
                }),
            n.promise
          )
        },
        catch: function (e) {
          return this.then(void 0, e)
        },
      })),
      (o = function () {
        var e = new n(),
          t = D(e)
        ;(this.promise = e),
          (this.resolve = Ae(be, t)),
          (this.reject = Ae(xe, t))
      }),
      (I.f = X = function (e) {
        return e === q || e === i ? new o(e) : H(e)
      }),
      !c && b(g) && z !== Object.prototype)
    ) {
      ;(a = z.then),
        se ||
          (m(
            z,
            'then',
            function (e, t) {
              var r = this
              return new q(function (e, t) {
                l(a, r, e, t)
              }).then(e, t)
            },
            { unsafe: !0 },
          ),
          m(z, 'catch', K['catch'], { unsafe: !0 }))
      try {
        delete z.constructor
      } catch (he) {}
      p && p(z, K)
    }
    s({ global: !0, wrap: !0, forced: ce }, { Promise: q }),
      v(q, $, !1, !0),
      A($),
      (i = f($)),
      s(
        { target: $, stat: !0, forced: ce },
        {
          reject: function (e) {
            var t = X(this)
            return l(t.reject, void 0, e), t.promise
          },
        },
      ),
      s(
        { target: $, stat: !0, forced: c || ce },
        {
          resolve: function (e) {
            return k(c && this === i ? q : this, e)
          },
        },
      ),
      s(
        { target: $, stat: !0, forced: ue },
        {
          all: function (e) {
            var t = this,
              r = X(t),
              n = r.resolve,
              o = r.reject,
              i = R(function () {
                var r = x(t.resolve),
                  i = [],
                  a = 0,
                  s = 1
                j(e, function (e) {
                  var c = a++,
                    u = !1
                  s++,
                    l(r, t, e).then(function (e) {
                      u || ((u = !0), (i[c] = e), --s || n(i))
                    }, o)
                }),
                  --s || n(i)
              })
            return i.error && o(i.value), r.promise
          },
          race: function (e) {
            var t = this,
              r = X(t),
              n = r.reject,
              o = R(function () {
                var o = x(t.resolve)
                j(e, function (e) {
                  l(o, t, e).then(r.resolve, n)
                })
              })
            return o.error && n(o.value), r.promise
          },
        },
      )
  },
  e893: function (e, t, r) {
    var n = r('1a2d'),
      o = r('56ef'),
      i = r('06cf'),
      a = r('9bf2')
    e.exports = function (e, t, r) {
      for (var s = o(t), c = a.f, u = i.f, f = 0; f < s.length; f++) {
        var l = s[f]
        n(e, l) || (r && n(r, l)) || c(e, l, u(t, l))
      }
    }
  },
  e8b5: function (e, t, r) {
    var n = r('c6b6')
    e.exports =
      Array.isArray ||
      function (e) {
        return 'Array' == n(e)
      }
  },
  e95a: function (e, t, r) {
    var n = r('b622'),
      o = r('3f8c'),
      i = n('iterator'),
      a = Array.prototype
    e.exports = function (e) {
      return void 0 !== e && (o.Array === e || a[i] === e)
    }
  },
  f069: function (e, t, r) {
    'use strict'
    var n = r('59ed'),
      o = function (e) {
        var t, r
        ;(this.promise = new e(function (e, n) {
          if (void 0 !== t || void 0 !== r)
            throw TypeError('Bad Promise constructor')
          ;(t = e), (r = n)
        })),
          (this.resolve = n(t)),
          (this.reject = n(r))
      }
    e.exports.f = function (e) {
      return new o(e)
    }
  },
  f36a: function (e, t, r) {
    var n = r('e330')
    e.exports = n([].slice)
  },
  f5df: function (e, t, r) {
    var n = r('da84'),
      o = r('00ee'),
      i = r('1626'),
      a = r('c6b6'),
      s = r('b622'),
      c = s('toStringTag'),
      u = n.Object,
      f =
        'Arguments' ==
        a(
          (function () {
            return arguments
          })(),
        ),
      l = function (e, t) {
        try {
          return e[t]
        } catch (r) {}
      }
    e.exports = o
      ? a
      : function (e) {
          var t, r, n
          return void 0 === e
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' == typeof (r = l((t = u(e)), c))
            ? r
            : f
            ? a(t)
            : 'Object' == (n = a(t)) && i(t.callee)
            ? 'Arguments'
            : n
        }
  },
  f772: function (e, t, r) {
    var n = r('5692'),
      o = r('90e3'),
      i = n('keys')
    e.exports = function (e) {
      return i[e] || (i[e] = o(e))
    }
  },
  fc6a: function (e, t, r) {
    var n = r('44ad'),
      o = r('1d80')
    e.exports = function (e) {
      return n(o(e))
    }
  },
  fce3: function (e, t, r) {
    var n = r('d039'),
      o = r('da84'),
      i = o.RegExp
    e.exports = n(function () {
      var e = i('.', 's')
      return !(e.dotAll && e.exec('\n') && 's' === e.flags)
    })
  },
  fdbf: function (e, t, r) {
    var n = r('4930')
    e.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator
  },
  fe77: function (e, t, r) {
    'use strict'
    r.r(t)
    r('e260'),
      r('e6cf'),
      r('cca6'),
      r('a79d'),
      r('99af'),
      r('d3b7'),
      r('ac1f'),
      r('00b4')
    var n = r('9845'),
      o = r.n(n)
    o.a.runtime.onMessage.addListener(function (e) {
      if ('FOLLOW_EXPORT' === e.type) {
        var t = ''
          .concat(o.a.runtime.getURL('dashboard.html#/'), '?insid=')
          .concat(encodeURIComponent(e.insid), '&type=')
          .concat(e.follow_type)
        return o.a.tabs.create({ url: t }), !0
      }
      if ('GET_LINKTREE_EMAIL' === e.type) {
        var r = e.url,
          n = e.id,
          i = e.num,
          a = 'https://linktree.workbot.workers.dev/?url='
            .concat(encodeURIComponent(r), '&id=')
            .concat(n)
        return (
          i % 2 === 0 &&
            (a = 'https://linktree.botwork.workers.dev/?url='
              .concat(encodeURIComponent(r), '&id=')
              .concat(n)),
          new Promise(function (e) {
            try {
              fetch(a)
                .then(function (e) {
                  return e.json()
                })
                .then(function (t) {
                  t && t.email && t.id && e({ email: t.email, id: n })
                })
            } catch (t) {
              e({ email: '', id: n })
            }
          })
        )
      }
      if ('TEST' === e.type) return console.log(e.test), !0
    })
  },
  fea9: function (e, t, r) {
    var n = r('da84')
    e.exports = n.Promise
  },
})}
//# sourceMappingURL=chunk-vendors.8a7b1f9e.js.map


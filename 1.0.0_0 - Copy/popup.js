;

getUserIdentity();
var email;
var subscribe_user = true;
async function getUserIdentity() {
  await chrome.identity.getProfileUserInfo(function(userInfo) {

    // email = user.email;
    console.log(userInfo);
    const url = 'https://soletstalkapp.com/stats/ispro'
    const PRODUCT_ID = 28;
    // console.log(email);
    console.log('clicked');
    async function isSubscribe() {
      const t = await fetch(`${url}?email=${userInfo.email}&id=${PRODUCT_ID}`);
      const n = await t.json();
      console.log(typeof(n))
      console.log(n)
      subscribe_user = n;
      isUserSubscribe(subscribe_user);
    }

    isSubscribe();
    console.log(typeof(subscribe_user));
  
  });
}

function isUserSubscribe(userSubscribe){
  if(userSubscribe == true){
    console.log('call');
    document.getElementsByClassName('wrapper')[0].style.display = 'none';
    document.getElementById('pleaseSubscribe').style.display = 'block';
  }
  }


(function (t) {
  function e(e) {
    for (
      var s, r, o = e[0], l = e[1], c = e[2], p = 0, d = [];
      p < o.length;
      p++
    )
      (r = o[p]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && d.push(i[r][0]),
        (i[r] = 0)
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s])
    u && u(e)
    while (d.length) d.shift()()
    return n.push.apply(n, c || []), a()
  }
  function a() {
    for (var t, e = 0; e < n.length; e++) {
      for (var a = n[e], s = !0, o = 1; o < a.length; o++) {
        var l = a[o]
        0 !== i[l] && (s = !1)
      }
      s && (n.splice(e--, 1), (t = r((r.s = a[0]))))
    }
    return t
  }
  var s = {},
    i = { popup: 0 },
    n = []
  function r(e) {
    if (s[e]) return s[e].exports
    var a = (s[e] = { i: e, l: !1, exports: {} })
    return t[e].call(a.exports, a, a.exports, r), (a.l = !0), a.exports
  }
  ;(r.m = t),
    (r.c = s),
    (r.d = function (t, e, a) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a })
    }),
    (r.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var a = Object.create(null)
      if (
        (r.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var s in t)
          r.d(
            a,
            s,
            function (e) {
              return t[e]
            }.bind(null, s),
          )
      return a
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default']
            }
          : function () {
              return t
            }
      return r.d(e, 'a', e), e
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (r.p = '/')
  var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = o.push.bind(o)
  ;(o.push = e), (o = o.slice())
  for (var c = 0; c < o.length; c++) e(o[c])
  var u = l
  n.push([1, 'chunk-vendors', 'chunk-common']), a()
})({
  '0224': function (t, e, a) {},
  '0a3d': function (t, e, a) {
    'use strict'
    a.r(e)
    a('e260'), a('e6cf'), a('cca6'), a('a79d')
    var s = a('2b0e'),
      i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s('div', { staticClass: 'wrapper' }, [
          s(
            'header',
            { staticClass: 'is-flex is-align-items-center p-3 pl-4' },
            [
              t._m(0),
              s(
                'h1',
                { staticClass: 'is-size-6 has-text-weight-semibold px-2' },
                [t._v(' IG Leads Generat')],
              ),
              s('span', { staticClass: 'has-text-grey-light is-size-7 mt-1' }, [
                t._v(
                  t._s(t.version) +
                    t._s(t.$config.IS_PRODUCTION ? '' : ' [dev]'),
                ),
              ]),
              t.user.id &&
              (!t.subscription.isPro ||
                (t.subscription.isPro && t.subscription.isCanceled)) &&
              t.extractEmailCount >= 1 &&
              'pro' !== t.tabType
                ? s(
                    'a',
                    {
                      staticClass:
                        'btn-pro is-flex is-justify-content-center is-align-items-center px-4 has-text-weight-semibold',
                      on: {
                        click: function (e) {
                          return null
                        },
                      },
                    },
                    [
                   
                    ],
                  )
                : t._e(),
            ],
          ),
          t.user.id
            ? s('main', { staticClass: 'is-flex is-flex-grow-1' }, [
                s('div', { staticClass: 'aside' }, [
                  s('ul', [
                    s('li', [
                      s(
                        'a',
                        {
                          class: { current: 'index' === t.tabType },
                          on: {
                            click: function (e) {
                              return t.handleSwitchTab('index')
                            },
                          },
                        },
                        [
                          s(
                            'svg',
                            {
                              attrs: {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 24 24',
                                width: '18',
                                height: '18',
                              },
                            },
                            [
                              s('path', {
                                attrs: { fill: 'none', d: 'M0 0h24v24H0z' },
                              }),
                              s('path', {
                                attrs: {
                                  d:
                                    'M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z',
                                  fill: 'rgba(51,51,51,1)',
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                    ]),
                    s('li', [
                      s(
                        'a',
                        {
                          class: { current: 'list' === t.tabType },
                          on: {
                            click: function (e) {
                              return t.handleSwitchTab('list')
                            },
                          },
                        },
                        [
                          s(
                            'svg',
                            {
                              attrs: {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 24 24',
                                width: '18',
                                height: '18',
                              },
                            },
                            [
                              s('path', {
                                attrs: { fill: 'none', d: 'M0 0h24v24H0z' },
                              }),
                              s('path', {
                                attrs: {
                                  d:
                                    'M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z',
                                  fill: 'rgba(51,51,51,1)',
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                    ]),
                    s('li', [
                      s(
                        'a',
                        {
                          class: { current: 'faq' === t.tabType },
                          on: {
                            click: function (e) {
                              return t.handleSwitchTab('faq')
                            },
                          },
                        },
                        [
                          s(
                            'svg',
                            {
                              attrs: {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 24 24',
                                width: '18',
                                height: '18',
                              },
                            },
                            [
                              s('path', {
                                attrs: { fill: 'none', d: 'M0 0h24v24H0z' },
                              }),
                              s('path', {
                                attrs: {
                                  d:
                                    'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z',
                                  fill: 'rgba(51,51,51,1)',
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                    ]),
                    s('li', [
                      s(
                        'a',
                        {
                          class: { current: 'pro' === t.tabType },
                          on: {
                            click: function (e) {
                              return null
                            },
                          },
                        },
                        [
                       
                        ],
                      ),
                    ]),
                  ]),
                ]),
                s('div', { staticClass: 'body is-flex-grow-1' }, [
                  s(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 'index' === t.tabType,
                          expression: "tabType === 'index'",
                        },
                      ],
                      staticClass: 'p-5',
                    },
                    [
                      s(
                        'b-tabs',
                        {
                          staticClass: 'tab-type',
                          attrs: {
                            size: 'is-small',
                            type: 'is-toggle',
                            expanded: '',
                          },
                          model: {
                            value: t.extractionType,
                            callback: function (e) {
                              t.extractionType = e
                            },
                            expression: 'extractionType',
                          },
                        },
                        [
                          s(
                            'b-tab-item',
                            {
                              attrs: { label: 'Followers', icon: 'user-check' },
                            },
                            [
                              s(
                                'p',
                                {
                                  staticClass:
                                    'pb-4 has-text-grey-dark has-text-weight-semibold',
                                  staticStyle: { 'font-size': '14px' },
                                },
                                [
                                  t._v(' Extraction by followers '),
                                  s(
                                    'b-tooltip',
                                    {
                                      staticClass: 'example-tip',
                                      attrs: {
                                        type: 'is-light',
                                        position: 'is-bottom',
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: 'content',
                                            fn: function () {
                                              return [
                                                s('img', {
                                                  attrs: {
                                                    src: a('539e'),
                                                    alt: 'demo',
                                                  },
                                                }),
                                              ]
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !1,
                                        2284364839,
                                      ),
                                    },
                                    [
                                      s(
                                        'span',
                                        {
                                          staticClass:
                                            'ml-2 has-text-info is-clickable is-size-7',
                                        },
                                        [t._v('user name?')],
                                      ),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                              s(
                                'b-field',
                                {
                                  attrs: {
                                    label: 'User name',
                                    'label-position': 'on-border',
                                  },
                                },
                                [
                                  s('b-input', {
                                    attrs: {
                                      icon: 'at',
                                      placeholder: 'e.g. shopify',
                                    },
                                    model: {
                                      value: t.insId,
                                      callback: function (e) {
                                        t.insId = e
                                      },
                                      expression: 'insId',
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          s(
                            'b-tab-item',
                            {
                              attrs: { label: 'Following', icon: 'user-plus' },
                            },
                            [
                              s(
                                'p',
                                {
                                  staticClass:
                                    'pb-4 has-text-grey-dark has-text-weight-semibold',
                                  staticStyle: { 'font-size': '14px' },
                                },
                                [
                                  t._v(' Extraction by following '),
                                  s(
                                    'b-tooltip',
                                    {
                                      staticClass: 'example-tip',
                                      attrs: {
                                        type: 'is-light',
                                        position: 'is-bottom',
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: 'content',
                                            fn: function () {
                                              return [
                                                s('img', {
                                                  attrs: {
                                                    src: a('539e'),
                                                    alt: 'demo',
                                                  },
                                                }),
                                              ]
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !1,
                                        2284364839,
                                      ),
                                    },
                                    [
                                      s(
                                        'span',
                                        {
                                          staticClass:
                                            'ml-2 has-text-info is-clickable is-size-7',
                                        },
                                        [t._v('user name?')],
                                      ),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                              s(
                                'b-field',
                                {
                                  attrs: {
                                    label: 'User name',
                                    'label-position': 'on-border',
                                  },
                                },
                                [
                                  s('b-input', {
                                    attrs: {
                                      icon: 'at',
                                      placeholder: 'e.g. shopify',
                                    },
                                    model: {
                                      value: t.insId,
                                      callback: function (e) {
                                        t.insId = e
                                      },
                                      expression: 'insId',
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          s(
                            'b-tab-item',
                            { attrs: { label: 'Hashtag', icon: 'hashtag' } },
                            [
                              s(
                                'p',
                                {
                                  staticClass:
                                    'pb-4 has-text-grey-dark has-text-weight-semibold',
                                  staticStyle: { 'font-size': '14px' },
                                },
                                [
                                  t._v(' Extraction by hashtag '),
                                  s(
                                    'b-tooltip',
                                    {
                                      staticClass: 'example-tip',
                                      attrs: {
                                        type: 'is-light',
                                        position: 'is-bottom',
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: 'content',
                                            fn: function () {
                                              return [
                                                s('img', {
                                                  attrs: {
                                                    src: a('b473'),
                                                    alt: 'demo',
                                                  },
                                                }),
                                              ]
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !1,
                                        468903334,
                                      ),
                                    },
                                    [
                                      s(
                                        'span',
                                        {
                                          staticClass:
                                            'ml-2 has-text-info is-clickable is-size-7',
                                        },
                                        [t._v('hashtag?')],
                                      ),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                              s(
                                'b-field',
                                {
                                  attrs: {
                                    label: 'Hashtag',
                                    'label-position': 'on-border',
                                  },
                                },
                                [
                                  s('b-input', {
                                    attrs: {
                                      icon: 'hashtag',
                                      placeholder: 'e.g. brits',
                                    },
                                    model: {
                                      value: t.insHashtag,
                                      callback: function (e) {
                                        t.insHashtag = e
                                      },
                                      expression: 'insHashtag',
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          s(
                            'b-tab-item',
                            { attrs: { label: 'Likes', icon: 'heart' } },
                            [
                              s(
                                'p',
                                {
                                  staticClass:
                                    'pb-4 has-text-grey-dark has-text-weight-semibold',
                                  staticStyle: { 'font-size': '14px' },
                                },
                                [
                                  t._v(' Extraction by post likers '),
                                  s(
                                    'b-tooltip',
                                    {
                                      staticClass: 'example-tip',
                                      attrs: {
                                        type: 'is-light',
                                        position: 'is-bottom',
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: 'content',
                                            fn: function () {
                                              return [
                                                s('img', {
                                                  attrs: {
                                                    src: a('e4a8'),
                                                    alt: 'demo',
                                                  },
                                                }),
                                              ]
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !1,
                                        751465124,
                                      ),
                                    },
                                    [
                                      s(
                                        'span',
                                        {
                                          staticClass:
                                            'ml-2 has-text-info is-clickable is-size-7',
                                        },
                                        [t._v('post link?')],
                                      ),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                              s(
                                'b-field',
                                {
                                  attrs: {
                                    label: 'Post link',
                                    'label-position': 'on-border',
                                  },
                                },
                                [
                                  s('b-input', {
                                    attrs: {
                                      icon: 'link',
                                      placeholder:
                                        'e.g. https://www.instagram.com/p/CMvKtZkBTPC',
                                    },
                                    model: {
                                      value: t.insPostUrl,
                                      callback: function (e) {
                                        t.insPostUrl = e
                                      },
                                      expression: 'insPostUrl',
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          s(
                            'b-tab-item',
                            { attrs: { label: 'Comment', icon: 'comment' } },
                            [
                              s(
                                'p',
                                {
                                  staticClass:
                                    'pb-4 has-text-grey-dark has-text-weight-semibold',
                                  staticStyle: { 'font-size': '14px' },
                                },
                                [
                                  t._v(' Extraction by post commenters '),
                                  s(
                                    'b-tooltip',
                                    {
                                      staticClass: 'example-tip',
                                      attrs: {
                                        type: 'is-light',
                                        position: 'is-bottom',
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: 'content',
                                            fn: function () {
                                              return [
                                                s('img', {
                                                  attrs: {
                                                    src: a('e4a8'),
                                                    alt: 'demo',
                                                  },
                                                }),
                                              ]
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !1,
                                        751465124,
                                      ),
                                    },
                                    [
                                      s(
                                        'span',
                                        {
                                          staticClass:
                                            'ml-2 has-text-info is-clickable is-size-7',
                                        },
                                        [t._v('post link?')],
                                      ),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                              s(
                                'b-field',
                                {
                                  attrs: {
                                    label: 'Post link',
                                    'label-position': 'on-border',
                                  },
                                },
                                [
                                  s('b-input', {
                                    attrs: {
                                      icon: 'link',
                                      placeholder:
                                        'e.g. https://www.instagram.com/p/CMvKtZkBTPC',
                                    },
                                    model: {
                                      value: t.insPostUrl,
                                      callback: function (e) {
                                        t.insPostUrl = e
                                      },
                                      expression: 'insPostUrl',
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          s(
                            'b-tab-item',
                            {
                              attrs: {
                                label: 'Location',
                                icon: 'map-marker-alt',
                              },
                            },
                            [
                              s(
                                'p',
                                {
                                  staticClass:
                                    'pb-4 has-text-grey-dark has-text-weight-semibold',
                                  staticStyle: { 'font-size': '14px' },
                                },
                                [
                                  t._v(' Extraction by location '),
                                  s(
                                    'b-tooltip',
                                    {
                                      staticClass: 'example-tip',
                                      attrs: {
                                        type: 'is-light',
                                        position: 'is-bottom',
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: 'content',
                                            fn: function () {
                                              return [
                                                s('img', {
                                                  attrs: {
                                                    src: a('841f'),
                                                    alt: 'demo',
                                                  },
                                                }),
                                              ]
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !1,
                                        2996917281,
                                      ),
                                    },
                                    [
                                      s(
                                        'span',
                                        {
                                          staticClass:
                                            'ml-2 has-text-info is-clickable is-size-7',
                                        },
                                        [t._v('location link?')],
                                      ),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                              s(
                                'b-field',
                                {
                                  attrs: {
                                    label: 'Location link',
                                    'label-position': 'on-border',
                                  },
                                },
                                [
                                  s('b-input', {
                                    attrs: {
                                      icon: 'link',
                                      placeholder:
                                        'e.g. https://www.instagram.com/explore/locations/213385402',
                                    },
                                    model: {
                                      value: t.insLocationUrl,
                                      callback: function (e) {
                                        t.insLocationUrl = e
                                      },
                                      expression: 'insLocationUrl',
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s(
                        'p',
                        {
                          staticClass:
                            'pb-1 has-text-grey-dark has-text-weight-semibold',
                          staticStyle: { 'font-size': '14px' },
                        },
                        [t._v(' Interval between requests ')],
                      ),
                      s(
                        'div',
                        { staticClass: 'px-3 pb-5' },
                        [
                          s(
                            'b-field',
                            [
                              s(
                                'b-slider',
                                {
                                  attrs: {
                                    min: 2,
                                    max: 12,
                                    step: 1,
                                    ticks: '',
                                  },
                                  on: { dragend: t.handleUpdateInterval },
                                  model: {
                                    value: t.intervals,
                                    callback: function (e) {
                                      t.intervals = e
                                    },
                                    expression: 'intervals',
                                  },
                                },
                                [
                                  s('b-slider-tick', { attrs: { value: 2 } }, [
                                    t._v('2s'),
                                  ]),
                                  s('b-slider-tick', { attrs: { value: 3 } }, [
                                    t._v('3s'),
                                  ]),
                                  s('b-slider-tick', { attrs: { value: 4 } }, [
                                    t._v('4s'),
                                  ]),
                                  s('b-slider-tick', { attrs: { value: 5 } }, [
                                    t._v('5s'),
                                  ]),
                                  s('b-slider-tick', { attrs: { value: 6 } }, [
                                    t._v('6s'),
                                  ]),
                                  s('b-slider-tick', { attrs: { value: 7 } }, [
                                    t._v('7s'),
                                  ]),
                                  s('b-slider-tick', { attrs: { value: 8 } }, [
                                    t._v('8s'),
                                  ]),
                                  s('b-slider-tick', { attrs: { value: 9 } }, [
                                    t._v('9s'),
                                  ]),
                                  s('b-slider-tick', { attrs: { value: 10 } }, [
                                    t._v('10s'),
                                  ]),
                                  s('b-slider-tick', { attrs: { value: 11 } }, [
                                    t._v('11s'),
                                  ]),
                                  s('b-slider-tick', { attrs: { value: 12 } }, [
                                    t._v('12s'),
                                  ]),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s(
                        'b-field',
                        { staticClass: 'mb-0' },
                        [
                          s(
                            'b-button',
                            {
                              staticClass:
                                'button is-uppercase has-text-weight-semibold',
                              attrs: {
                                type: 'is-primary',
                                'icon-left': 'search',
                                expanded: '',
                              },
                              on: { click: t.handleStartWorking },
                            },
                            [t._v(' Start Extracting ')],
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  s(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 'list' === t.tabType,
                          expression: "tabType === 'list'",
                        },
                      ],
                      staticClass: 'px-5 pt-3 pb-2',
                    },
                    [
                      s(
                        'p',
                        {
                          staticClass:
                            'has-text-grey-dark has-text-weight-semibold pb-1',
                          staticStyle: { 'font-size': '14px' },
                        },
                        [
                          t._v(' Extract history '),
                          t.extractEmailCount > 0
                            ? s(
                                'span',
                                {
                                  staticClass:
                                    'has-text-centered has-text-grey',
                                  staticStyle: {
                                    float: 'right',
                                    'font-weight': '400',
                                  },
                                },
                                [
                                  t._v(' 🚀 total '),
                                  s(
                                    'span',
                                    { staticClass: 'has-text-weight-semibold' },
                                    [t._v(t._s(t.extractEmailCount))],
                                  ),
                                  t._v(' emails '),
                                ],
                              )
                            : t._e(),
                        ],
                      ),
                      s(
                        'div',
                        { staticClass: 'history-list' },
                        [
                          s(
                            'table',
                            {
                              staticClass:
                                'table is-fullwidth is-striped is-hoverable',
                              staticStyle: { 'margin-bottom': '15px' },
                            },
                            [
                              t._m(1),
                              t.historysTotal > 0
                                ? s(
                                    'tbody',
                                    t._l(t.historys, function (e) {
                                      return s('tr', { key: e.id }, [
                                        s('td', [
                                          s(
                                            'div',
                                            {
                                              staticClass: 'data-item',
                                              attrs: {
                                                title: e.extractionData,
                                              },
                                              on: {
                                                click: function (a) {
                                                  return t.handleGotoIgInfoPage(
                                                    e.extractionType,
                                                    e.extractionData,
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              'followers' === e.extractionType
                                                ? s('b-icon', {
                                                    attrs: {
                                                      icon: 'user-check',
                                                    },
                                                  })
                                                : t._e(),
                                              'following' === e.extractionType
                                                ? s('b-icon', {
                                                    attrs: {
                                                      icon: 'user-plus',
                                                    },
                                                  })
                                                : t._e(),
                                              'hashtag' === e.extractionType
                                                ? s('b-icon', {
                                                    attrs: { icon: 'hashtag' },
                                                  })
                                                : t._e(),
                                              'likes' === e.extractionType
                                                ? s('b-icon', {
                                                    attrs: { icon: 'heart' },
                                                  })
                                                : t._e(),
                                              'comment' === e.extractionType
                                                ? s('b-icon', {
                                                    attrs: { icon: 'comment' },
                                                  })
                                                : t._e(),
                                              'location' === e.extractionType
                                                ? s('b-icon', {
                                                    attrs: {
                                                      icon: 'map-marker-alt',
                                                    },
                                                  })
                                                : t._e(),
                                              s(
                                                'span',
                                                { staticClass: 'text' },
                                                [t._v(t._s(e.extractionData))],
                                              ),
                                            ],
                                            1,
                                          ),
                                        ]),
                                        s('td', [t._v(t._s(e.updatedAt))]),
                                        s('td', [t._v(t._s(e.scrapedCount))]),
                                        s('td', [t._v(t._s(e.emailCount))]),
                                        s('td', [
                                          e.isAllScraped
                                            ? s(
                                                'span',
                                                { staticClass: 'i-completed' },
                                                [
                                                  s('b-icon', {
                                                    attrs: {
                                                      'custom-class':
                                                        'has-text-mygreen',
                                                      icon: 'check-circle',
                                                      size: 'is-small',
                                                    },
                                                  }),
                                                  t._v('Completed'),
                                                ],
                                                1,
                                              )
                                            : s(
                                                'a',
                                                {
                                                  on: {
                                                    click: function (a) {
                                                      return t.handleContinueTask(
                                                        e,
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('Continue>>')],
                                              ),
                                        ]),
                                      ])
                                    }),
                                    0,
                                  )
                                : s('tbody', [
                                    s('tr', [
                                      s(
                                        'td',
                                        {
                                          staticStyle: {
                                            'text-align': 'center',
                                            color: '#888',
                                          },
                                          attrs: { colspan: '5' },
                                        },
                                        [
                                          s(
                                            'svg',
                                            {
                                              staticStyle: {
                                                opacity: '0.1',
                                                margin: '70px 210px 5px',
                                              },
                                              attrs: {
                                                xmlns:
                                                  'http://www.w3.org/2000/svg',
                                                viewBox: '0 0 640 512',
                                              },
                                            },
                                            [
                                              s('path', {
                                                attrs: {
                                                  d:
                                                    'M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z',
                                                },
                                              }),
                                            ],
                                          ),
                                          s('p', [t._v('History is empty')]),
                                        ],
                                      ),
                                    ]),
                                  ]),
                            ],
                          ),
                          t.historysTotal > 10
                            ? s('b-pagination', {
                                attrs: {
                                  total: t.historysTotal,
                                  size: 'is-small',
                                  'per-page': 10,
                                },
                                on: { change: t.handleHistoryChangePage },
                                model: {
                                  value: t.historysPage,
                                  callback: function (e) {
                                    t.historysPage = e
                                  },
                                  expression: 'historysPage',
                                },
                              })
                            : t._e(),
                        ],
                        1,
                      ),
                    ],
                  ),
                  s(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 'faq' === t.tabType,
                          expression: "tabType === 'faq'",
                        },
                      ],
                      staticClass: 'px-5 py-2',
                    },
                    [
                      t._l(t.collapses, function (e, a) {
                        return s(
                          'b-collapse',
                          {
                            key: a,
                            staticClass: 'is-size-7',
                            attrs: {
                              animation: 'slide',
                              open: t.isOpenFaq == a,
                            },
                            on: {
                              open: function (e) {
                                t.isOpenFaq = a
                              },
                              close: function (e) {
                                t.isOpenFaq = -1
                              },
                            },
                            scopedSlots: t._u(
                              [
                                {
                                  key: 'trigger',
                                  fn: function (a) {
                                    return [
                                      s(
                                        'div',
                                        {
                                          staticClass: 'is-flex py-2',
                                          staticStyle: {
                                            'border-bottom':
                                              '1px solid #f1f1f1',
                                          },
                                          attrs: { role: 'button' },
                                        },
                                        [
                                          s(
                                            'p',
                                            {
                                              staticClass:
                                                'is-flex is-flex-grow-1 has-text-grey-dark is-align-items-center',
                                            },
                                            [
                                              s('b-icon', {
                                                staticClass:
                                                  'has-text-grey-lighter',
                                                attrs: {
                                                  icon: 'question-circle',
                                                },
                                              }),
                                              t._v(' ' + t._s(e.title) + ' '),
                                            ],
                                            1,
                                          ),
                                          s(
                                            'a',
                                            {
                                              staticClass:
                                                'is-flex is-justify-content-center is-align-items-center',
                                            },
                                            [
                                              s('b-icon', {
                                                attrs: {
                                                  icon: a.open
                                                    ? 'angle-down'
                                                    : 'angle-up',
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              !0,
                            ),
                          },
                          [
                            s(
                              'div',
                              { staticClass: 'px-1 py-2 has-text-grey' },
                              0 === a
                                ? [
                                    s('p', [
                                      t._v(
                                        ' After installing this extension, select the extraction type in the pop-up window of the extension, enter the corresponding username, hashtag, location link, and click the "Start Extracting" button to start working. ',
                                      ),
                                    ]),
                                  ]
                                : 1 === a
                                ? [
                                    s('p', [
                                      t._v(
                                        ' The bot is available for free trial extraction for the first ' +
                                          t._s(
                                            (t.subscription &&
                                              t.subscription.trialCount) ||
                                              50,
                                          ) +
                                          ' email. After that, you must subscribe to continue using IGLeadGenerator. ',
                                      ),
                                    ]),
                                  ]
                                : 2 === a
                                ? [
                                    s('p', [
                                      t._v(
                                        ' Yes! We will never ask you for your IG password! All data is processed locally only and we do not store your extracted data. ',
                                      ),
                                    ]),
                                  ]
                                : 3 === a
                                ? [
                                    s('p', [
                                      t._v(
                                        ' Instagram (not IGLeadGenerator) limits the number of web requests in any given time period. Their limits are not exactly known, may change at any time, and will vary from account to account.',
                                      ),
                                      s('br'),
                                      s('br'),
                                      t._v(
                                        ' There are four main types of restrictions: ',
                                      ),
                                      s(
                                        'ul',
                                        {
                                          staticStyle: {
                                            'list-style': 'decimal',
                                            'padding-left': '12px',
                                            'padding-top': '5px',
                                          },
                                        },
                                        [
                                          s('li', [
                                            t._v(
                                              'A 429 limit is very common. It usually takes between 1 and 15 minutes to clear.',
                                            ),
                                          ]),
                                          s('li', [
                                            t._v(
                                              'A 400 restriction is occasionally hit and usually requires a simple account verification to be completed to be restored.',
                                            ),
                                          ]),
                                          s('li', [
                                            t._v(
                                              'A soft restriction is occasionally hit and usually lasts about 10 minutes, after which it can be restored.',
                                            ),
                                          ]),
                                          s('li', [
                                            t._v(
                                              'Hard restrictions occur less frequently, but last longer, usually at least 12 hours, sometimes up to 48 hours.',
                                            ),
                                          ]),
                                        ],
                                      ),
                                    ]),
                                  ]
                                : [
                                    s('p', [
                                      t._v(
                                        ' Sorry to see you go. Can I ask why you’re choosing to cancel and if there’s anything I can do to keep you as a subscriber?',
                                      ),
                                      s('br'),
                                      s('br'),
                                      t._v(
                                        'You can simply unsubscribe through the IGLeadGenerator app. Alternatively, email us directly at hi@echobot.dev from the email address used to register an account.If you do decide to cancel, you will continue to have access to IGLeadGenerator until the end of your billing cycle. ',
                                      ),
                                    ]),
                                  ],
                            ),
                          ],
                        )
                      }),
                      s('div', { staticClass: 'p-3' }, [
                        s(
                          'p',
                          {
                            staticClass:
                              'is-size-7 has-text-grey-light is-flex is-justify-content-center is-align-items-center pb-2',
                          },
                          [
                            s('b-icon', {
                              attrs: { icon: 'user', size: 'is-small' },
                            }),
                            t._v(' ' + t._s(t.user.username) + ' '),
                            s(
                              'a',
                              {
                                staticClass: 'ml-2',
                                on: { click: t.handleLogout },
                              },
                              [t._v('Logout')],
                            ),
                          ],
                          1,
                        ),
                      ]),
                    ],
                    2,
                  ),
                  s(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 'pro' === t.tabType,
                          expression: "tabType === 'pro'",
                        },
                      ],
                    },
                    [s('Pro', { attrs: { subscription: t.subscription } })],
                    1,
                  ),
                  t._m(2),
                  s(
                    'div',
                    {
                      staticClass: 'modal',
                      class: { 'is-active': t.isShowProUpgradePop },
                    },
                    [
                      s('div', {
                        staticClass: 'modal-background',
                        staticStyle: {
                          'background-color': 'rgba(10, 10, 10, 0.4)',
                        },
                        on: {
                          click: function (e) {
                            t.isShowProUpgradePop = !1
                          },
                        },
                      }),
                      s('div', { staticClass: 'modal-content px-6' }, [
                        s(
                          'div',
                          {
                            staticClass: 'card mx-6 pb-1',
                            staticStyle: { 'border-radius': '0.6rem' },
                          },
                          [
                            s('div', { staticClass: 'card-content' }, [
                              s(
                                'div',
                                {
                                  staticClass: 'content has-text-centered px-5',
                                },
                                [
                                  s(
                                    'h3',
                                    {
                                      staticClass:
                                        'has-text-weight-semibold is-size-6 mb-4 is-flex is-justify-content-center is-align-items-center',
                                    },
                                    [
                                      s(
                                        'svg',
                                        {
                                          staticClass: 'mr-2',
                                          attrs: {
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            width: '24',
                                            height: '24',
                                          },
                                        },
                                        [
                                          s('path', {
                                            attrs: {
                                              fill: 'none',
                                              d: 'M0 0h24v24H0z',
                                            },
                                          }),
                                          s('path', {
                                            attrs: {
                                              d:
                                                'M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
                                              fill: 'rgba(255,221,86,1)',
                                            },
                                          }),
                                        ],
                                      ),
                                      t._v(' Upgrade Pro '),
                                    ],
                                  ),
                                  s('p', { staticClass: 'mb-4' }, [
                                    t._v(
                                      ' You trial has ended (' +
                                        t._s(t.trialCount) +
                                        ' emails). Upgrade the Pro version to extract ',
                                    ),
                                    s(
                                      'span',
                                      {
                                        staticClass: 'has-text-weight-semibold',
                                      },
                                      [t._v('unlimited')],
                                    ),
                                    t._v(' emails and unlock all features. '),
                                  ]),
                                  s(
                                    'b-button',
                                    {
                                      staticClass: 'has-text-weight-semibold',
                                      attrs: {
                                        type: 'is-primary',
                                        expanded: '',
                                      },
                                      on: {
                                        click: function (e) {
                                          return null
                                        },
                                      },
                                    },
                                    [],
                                  ),
                                ],
                                1,
                              ),
                            ]),
                          ],
                        ),
                      ]),
                    ],
                  ),
                ]),
              ])
            : s(
                'div',
                { staticClass: 'p-6 mx-6 my-4' },
                [
                  s(
                    'div',
                    { staticClass: 'is-flex is-justify-content-center' },
                    [
                      s(
                        'svg',
                        {
                          attrs: {
                            width: '60',
                            height: '60',
                            viewBox: '0 0 60 60',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                        },
                        [
                          s('g', { attrs: { 'clip-path': 'url(#clip0)' } }, [
                            s('path', {
                              attrs: {
                                d:
                                  'M24.3625 54.3625C13.27 51.805 5 41.8675 5 30C5 16.1925 16.1925 5 30 5C43.8075 5 55 16.1925 55 30C55 41.8675 46.73 51.805 35.6375 54.3625L30 60L24.3625 54.3625V54.3625ZM17.53 45.6425C19.8595 47.5055 22.5783 48.8205 25.485 49.49L26.885 49.8125L30 52.93L33.1175 49.8125L34.5175 49.4875C37.614 48.7737 40.4944 47.3284 42.9175 45.2725C41.2895 43.6014 39.3429 42.2738 37.1929 41.3682C35.0428 40.4626 32.733 39.9973 30.4 40C25.31 40 20.725 42.175 17.53 45.6425V45.6425ZM14.04 42.05C16.1411 39.8202 18.6767 38.0443 21.4904 36.8318C24.304 35.6193 27.3362 34.9959 30.4 35C33.3541 34.9962 36.2799 35.5759 39.0094 36.706C41.7388 37.836 44.2182 39.4941 46.305 41.585C48.4452 38.5728 49.7091 35.0266 49.9564 31.3398C50.2038 27.653 49.4249 23.9697 47.7062 20.6986C45.9876 17.4276 43.3963 14.6966 40.2199 12.8086C37.0435 10.9207 33.4062 9.9496 29.7115 10.0031C26.0168 10.0567 22.4092 11.1327 19.2888 13.1119C16.1685 15.0911 13.6574 17.896 12.0342 21.2155C10.4111 24.535 9.73924 28.2393 10.0933 31.9174C10.4473 35.5955 11.8134 39.1036 14.04 42.0525V42.05ZM30 32.5C27.3478 32.5 24.8043 31.4464 22.9289 29.5711C21.0536 27.6957 20 25.1522 20 22.5C20 19.8478 21.0536 17.3043 22.9289 15.4289C24.8043 13.5536 27.3478 12.5 30 12.5C32.6522 12.5 35.1957 13.5536 37.0711 15.4289C38.9464 17.3043 40 19.8478 40 22.5C40 25.1522 38.9464 27.6957 37.0711 29.5711C35.1957 31.4464 32.6522 32.5 30 32.5ZM30 27.5C31.3261 27.5 32.5979 26.9732 33.5355 26.0355C34.4732 25.0979 35 23.8261 35 22.5C35 21.1739 34.4732 19.9022 33.5355 18.9645C32.5979 18.0268 31.3261 17.5 30 17.5C28.6739 17.5 27.4022 18.0268 26.4645 18.9645C25.5268 19.9022 25 21.1739 25 22.5C25 23.8261 25.5268 25.0979 26.4645 26.0355C27.4022 26.9732 28.6739 27.5 30 27.5Z',
                                fill: '#DADADA',
                              },
                            }),
                          ]),
                          s('defs', [
                            s('clipPath', { attrs: { id: 'clip0' } }, [
                              s('rect', {
                                attrs: {
                                  width: '60',
                                  height: '60',
                                  fill: 'white',
                                },
                              }),
                            ]),
                          ]),
                        ],
                      ),
                    ],
                  ),
                  s(
                    'p',
                    {
                      staticClass:
                        'is-size-6 has-text-grey-light py-4 has-text-centered',
                    },
                    [t._v(' Please sign in to save your settings. ')],
                  ),
                  s(
                    'b-button',
                    {
                      staticClass: 'mb-5',
                      attrs: { expanded: '', loading: t.loginLoading },
                      on: { click: t.handleLogin },
                    },
                    [
                      s(
                        'span',
                        {
                          staticClass:
                            'is-flex is-justify-content-center is-align-items-center',
                        },
                        [
                          s(
                            'svg',
                            {
                              attrs: {
                                width: '24',
                                height: '24',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                              },
                            },
                            [
                              s('path', {
                                attrs: {
                                  d:
                                    'M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z',
                                  fill: '#FFC107',
                                },
                              }),
                              s('path', {
                                attrs: {
                                  d:
                                    'M3.15302 7.3455L6.43851 9.755C7.32751 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z',
                                  fill: '#FF3D00',
                                },
                              }),
                              s('path', {
                                attrs: {
                                  d:
                                    'M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.001 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z',
                                  fill: '#4CAF50',
                                },
                              }),
                              s('path', {
                                attrs: {
                                  d:
                                    'M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z',
                                  fill: '#1976D2',
                                },
                              }),
                            ],
                          ),
                          s('span', { staticClass: 'is-size-6 pl-1' }, [
                            t._v('Sign In with Google'),
                          ]),
                        ],
                      ),
                    ],
                  ),
                ],
                1,
              ),
        ])
      },
      n = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s('div', { staticClass: 'logo' }, [s])
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a('thead', [
            a('tr', [
              a('th', [t._v('Data')]),
              a('th', [t._v('Time')]),
              a('th', [t._v('Extracted')]),
              a('th', [t._v('Email')]),
              a('th', [t._v('Status')]),
            ]),
          ])
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a('div', { staticClass: 'copy' }, [
            t._v(' © 2022 '),
            a(
              'a',
              {
                attrs: {
                  href: 'https://soletstalkapp.com',
                  target: '_blank',
                },
              },
              [t._v('soletstalkapp')],
            ),
          ])
        },
      ],
      r = a('1da1'),
      o =
        (a('ac1f'),
        a('1276'),
        a('caad'),
        a('2532'),
        a('4d63'),
        a('c607'),
        a('2c3e'),
        a('25f0'),
        a('466d'),
        a('498a'),
        a('5319'),
        a('99af'),
        a('96cf'),
        a('9845')),
      l = a.n(o),
      c = a('bc3a'),
      u = a.n(c),
      p = a('fa20'),
      d = a('a4af'),
      h = {
        name: 'App',
        data: function () {
          return {
            insId: '',
            insHashtag: '',
            insPostUrl: '',
            insLocationUrl: '',
            extractionType: 0,
            tabType: 'index',
            user: {},
            insLogged: !1,
            intervals: [2, 6],
            payType: 0,
            isOpenFaq: -1,
            collapses: [
              { title: 'How to get started?' },
              { title: 'Do you offer a trial?' },
              { title: 'Is it safe to use IGLeadGenerator?' },
             
              
            ],
            subscription: {},
            version: '',
            loginLoading: !1,
            extractEmailCount: 0,
            isShowProUpgradePop: !1,
            trialCount: 50,
            historys: [],
            historysPage: 1,
            historysTotal: 0,
            loginType: 'web',
            configs: {},
          }
        },
        created: function () {
          var t = l.a.runtime.getManifest(),
            e = t.version
          ;(this.version = 'v'.concat(e)), this.initData()
        },
        methods: {
          getInsConfigs: function () {
            return Object(r['a'])(
              regeneratorRuntime.mark(function t() {
                var e, a
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e = {}),
                            (t.prev = 1),
                            (t.next = 4),
                            Object(p['c'])()
                          )
                        case 4:
                          ;(a = t.sent),
                            'ok' === a.status && (e = a),
                            (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8),
                            (t.t0 = t['catch'](1)),
                            console.log(t.t0)
                        case 11:
                          return (
                            'ok' !== e.status &&
                              (e = {
                                status: 'ok',
                                ApiProfileInfo: {
                                  url:
                                    'https://www.instagram.com/${@}$/?__a=1&__d=dis',
                                  checkKey: 'data.graphql.user',
                                  dataKeys:
                                    'data.graphql.user.id|data.graphql.user.username|data.graphql.user.profile_pic_url|data.graphql.user.edge_followed_by.count|data.graphql.user.edge_follow.count|data.graphql.user.is_private',
                                },
                                ApiProfileInfo2: {
                                  url:
                                    'https://i.instagram.com/api/v1/users/web_profile_info/?username=${@}$',
                                  checkKey: 'data.status',
                                  checkValue: 'ok',
                                  dataKeys:
                                    'data.data.user.id|data.data.user.username|data.data.user.profile_pic_url|data.data.user.edge_followed_by.count|data.data.user.edge_follow.count|data.data.user.is_private',
                                },
                                ProfileInfoFromHtml: {
                                  url: 'https://www.instagram.com/${@}$/',
                                  reg_id: '%22profile_id%22%3A%22(d%2B)%22',
                                  reg_avatar:
                                    '%22profile_pic_url%22%3A%22(.%2B%3F)%22',
                                },
                                InsCsrfTokenFromCookie: {
                                  url: 'https://www.instagram.com',
                                  cookieKey: 'csrftoken',
                                },
                                InsCsrfTokenFromHtml: {
                                  url: 'https://www.instagram.com/',
                                  reg: '%22csrf_token%22%3A%22(.*%3F)%22',
                                },
                                InsUserStatusFromCookie: {
                                  url: 'https://www.instagram.com',
                                  cookieKey: 'ds_user_id',
                                },
                                InsUserStatusFromHtml: {
                                  url: 'https://www.instagram.com/',
                                  reg: '%22APP_ID%22%3A%22(.*%3F)%22',
                                },
                                CustomHeaders: {
                                  'Content-Type':
                                    'application/x-www-form-urlencoded',
                                  'x-requested-with': 'XMLHttpRequest',
                                  'x-instagram-ajax': 1,
                                  'x-asbd-id': '198387',
                                  'x-ig-app-id': '936619743392459',
                                },
                                CsrfHeaderKey: 'x-csrftoken',
                                ClaimHeaderKey: 'x-ig-www-claim',
                                ClaimSessionStorageKey: '',
                                QueryHashFollowers:
                                  '37479f2b8209594dde7facb0d904896a',
                                QueryHashFollowing:
                                  '58712303d941c6855d4e888c5f0cd22f',
                                QueryHashLike:
                                  '1cb6ec562846122743b61e492c85999f',
                                QueryHashComment:
                                  '33ba35852cb50da46f5b5e889df7d159',
                                QueryHashTag:
                                  'ded47faa9a1aaded10161a2ff32abb6b',
                                QueryHashLocation:
                                  '36bd0f2bf5911908de389b8ceaa3be6d',
                                ApiUserInfoDetail: {
                                  url:
                                    'https://i.instagram.com/api/v1/users/${@}$/info/',
                                  checkKey: 'data.status',
                                  checkValue: 'ok',
                                  dataKeys:
                                    'data.user.profile_pic_url|data.user.username|data.user.full_name|data.user.follower_count|data.user.following_count|data.user.public_email|data.user.media_count|data.user.public_phone_country_code|data.user.public_phone_number|data.user.contact_phone_number|data.user.city_name|data.user.address_street|data.user.is_private|data.user.is_verified|data.user.is_business|data.user.external_url|data.user.biography',
                                },
                              }),
                            t.abrupt('return', e)
                          )
                        case 13:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[1, 8]],
                )
              }),
            )()
          },
          initData: function () {
            var t = this
            return Object(r['a'])(
              regeneratorRuntime.mark(function e() {
                var a, s, i, n, r, o, c, u, d
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.getUserInfo()
                      case 2:
                        if (((a = e.sent), a.id)) {
                          e.next = 5
                          break
                        }
                        return e.abrupt('return')
                      case 5:
                        return (e.next = 7), t.getInsConfigs()
                      case 7:
                        return (
                          (t.configs = e.sent),
                          (e.next = 10),
                          l.a.storage.local.get(['intervals'])
                        )
                      case 10:
                        return (
                          (s = e.sent),
                          s && (t.intervals = s.intervals || [2, 6]),
                          (e.next = 14),
                          Object(p['f'])()
                        )
                      case 14:
                        if (
                          ((t.subscription = e.sent),
                          (t.trialCount = t.subscription.trialCount || 50),
                          t.subscription.isPro)
                        ) {
                          e.next = 23
                          break
                        }
                        return (e.next = 19), Object(p['g'])()
                      case 19:
                        if (
                          ((t.extractEmailCount = e.sent),
                          !(t.extractEmailCount >= t.trialCount))
                        ) {
                          e.next = 23
                          break
                        }
                        return (t.isShowProUpgradePop = !0), e.abrupt('return')
                      case 23:
                        return (e.next = 25), t.getInsUserStatus()
                      case 25:
                        return (
                          (e.next = 27),
                          l.a.tabs.query({ active: !0, currentWindow: !0 })
                        )
                      case 27:
                        if (
                          ((i = e.sent),
                          !(
                            i.length > 0 &&
                            i[0].url &&
                            i[0].url.indexOf('instagram.com') > -1
                          ))
                        ) {
                          e.next = 41
                          break
                        }
                        return (
                          (e.next = 31),
                          l.a.storage.local.get(['x_ig_www_claim'])
                        )
                      case 31:
                        if (((e.t0 = e.sent), e.t0)) {
                          e.next = 34
                          break
                        }
                        e.t0 = {}
                      case 34:
                        ;(n = e.t0),
                          n.x_ig_www_claim ||
                            l.a.tabs.create({
                              url: 'https://www.instagram.com/?_echobot=1&claim='.concat(
                                encodeURIComponent(
                                  t.configs.ClaimSessionStorageKey,
                                ),
                              ),
                              active: !1,
                            }),
                          (r = i[0].url),
                          (r = r.split('?')[0]),
                          r.indexOf('/p/') > -1
                            ? ((t.insPostUrl = r), (t.extractionType = 4))
                            : r.indexOf('/explore/tags/') > -1
                            ? ((o = r.split('/explore/tags/')),
                              (c = (o[1] && o[1].split('/')[0]) || ''),
                              (t.insHashtag = c),
                              (t.extractionType = 2))
                            : r.indexOf('/explore/locations/') > -1
                            ? ((t.insLocationUrl = r), (t.extractionType = 5))
                            : ((u = r.split('instagram.com/')),
                              (d = (u[1] && u[1].split('/')[0]) || ''),
                              d &&
                                i[0].title.includes('@'.concat(d)) &&
                                ((t.insId = d), (t.extractionType = 0))),
                          (e.next = 42)
                        break
                      case 41:
                        l.a.tabs.create({
                          url: 'https://www.instagram.com/?_echobot=1&claim='.concat(
                            encodeURIComponent(
                              t.configs.ClaimSessionStorageKey,
                            ),
                          ),
                          active: !1,
                        })
                      case 42:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          },
          getUserInfo: function () {
            var t = this
            return Object(r['a'])(
              regeneratorRuntime.mark(function e() {
                var a, s
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = {}),
                            (e.prev = 1),
                            (e.next = 4),
                            Object(p['b'])()
                          )
                        case 4:
                          ;(s = e.sent),
                            'ok' === s.status &&
                              ((t.user = s.user), (a = t.user)),
                            (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8),
                            (e.t0 = e['catch'](1)),
                            t.$buefy.toast.open(''.concat(e.t0))
                        case 11:
                          return (t.loginLoading = !1), e.abrupt('return', a)
                        case 13:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 8]],
                )
              }),
            )()
          },
          getUserProStatus: function () {
            var t = this
            return Object(r['a'])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), Object(p['f'])()
                        case 3:
                          ;(t.subscription = e.sent), (e.next = 9)
                          break
                        case 6:
                          ;(e.prev = 6),
                            (e.t0 = e['catch'](0)),
                            t.$buefy.toast.open(''.concat(e.t0))
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 6]],
                )
              }),
            )()
          },
          getInsUserStatus: function () {
            var t = this
            return Object(r['a'])(
              regeneratorRuntime.mark(function e() {
                var a, s, i, n
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            l.a.cookies.get({
                              url: t.configs.InsUserStatusFromCookie.url,
                              name: t.configs.InsUserStatusFromCookie.cookieKey,
                            })
                          )
                        case 3:
                          ;(a = e.sent),
                            (t.insLogged = !!a.value),
                            (e.next = 10)
                          break
                        case 7:
                          ;(e.prev = 7),
                            (e.t0 = e['catch'](0)),
                            console.log('🚀 get csrfToken error', e.t0)
                        case 10:
                          if (t.insLogged) {
                            e.next = 24
                            break
                          }
                          return (
                            (e.prev = 11),
                            (e.next = 14),
                            u.a.get(t.configs.InsUserStatusFromHtml.url)
                          )
                        case 14:
                          ;(s = e.sent),
                            (s = s.data),
                            (i = new RegExp(
                              decodeURIComponent(
                                t.configs.InsUserStatusFromHtml.reg,
                              ),
                            )),
                            (n = s.match(i)),
                            n && n[1] && (t.insLogged = !0),
                            (e.next = 24)
                          break
                        case 21:
                          ;(e.prev = 21),
                            (e.t1 = e['catch'](11)),
                            console.log(e.t1)
                        case 24:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [
                    [0, 7],
                    [11, 21],
                  ],
                )
              }),
            )()
          },
          handleSwitchTab: function (t) {
            var e = this
            return Object(r['a'])(
              regeneratorRuntime.mark(function a() {
                var s
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (((e.tabType = t), 'pro' !== t)) {
                          a.next = 5
                          break
                        }
                        ;(e.isShowProUpgradePop = !1), (a.next = 15)
                        break
                      case 5:
                        if ('list' !== t || 0 !== e.historysTotal) {
                          a.next = 15
                          break
                        }
                        return (a.next = 8), Object(p['e'])({ page: 1 })
                      case 8:
                        if (
                          ((s = a.sent),
                          (e.historys = s.list || []),
                          (e.historysTotal = s.total),
                          !(e.historysTotal > 0))
                        ) {
                          a.next = 15
                          break
                        }
                        return (a.next = 14), Object(p['g'])()
                      case 14:
                        e.extractEmailCount = a.sent
                      case 15:
                      case 'end':
                        return a.stop()
                    }
                }, a)
              }),
            )()
          },
          handleStartWorking: function () {
            var t = this
            return Object(r['a'])(
              regeneratorRuntime.mark(function e() {
                var a, s, i, n
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          t.subscription.isPro ||
                          !(t.extractEmailCount >= t.trialCount)
                        ) {
                          e.next = 3
                          break
                        }
                        return (t.isShowProUpgradePop = !0), e.abrupt('return')
                      case 3:
                        if (
                          (0 !== t.extractionType && 1 !== t.extractionType) ||
                          '' !== t.insId.trim()
                        ) {
                          e.next = 6
                          break
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message: 'Please enter username.',
                            type: 'is-danger',
                            position: 'is-bottom-right',
                            queue: !1,
                            duration: 3e3,
                          }),
                          e.abrupt('return')
                        )
                      case 6:
                        if (
                          2 !== t.extractionType ||
                          '' !== t.insHashtag.trim()
                        ) {
                          e.next = 9
                          break
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message: 'Please enter hashtag.',
                            type: 'is-danger',
                            position: 'is-bottom-right',
                            queue: !1,
                            duration: 3e3,
                          }),
                          e.abrupt('return')
                        )
                      case 9:
                        if (
                          (3 !== t.extractionType && 4 !== t.extractionType) ||
                          '' !== t.insPostUrl.trim()
                        ) {
                          e.next = 12
                          break
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message: 'Please enter post url.',
                            type: 'is-danger',
                            position: 'is-bottom-right',
                            queue: !1,
                            duration: 3e3,
                          }),
                          e.abrupt('return')
                        )
                      case 12:
                        if (
                          (3 !== t.extractionType && 4 !== t.extractionType) ||
                          t.insPostUrl.match('^https://www.instagram.com/p/')
                        ) {
                          e.next = 15
                          break
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message: 'Invalid post link URL.',
                            type: 'is-danger',
                            position: 'is-bottom-right',
                            queue: !1,
                            duration: 3e3,
                          }),
                          e.abrupt('return')
                        )
                      case 15:
                        if (
                          5 !== t.extractionType ||
                          '' !== t.insLocationUrl.trim()
                        ) {
                          e.next = 18
                          break
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message: 'Please enter location link.',
                            type: 'is-danger',
                            position: 'is-bottom-right',
                            queue: !1,
                            duration: 3e3,
                          }),
                          e.abrupt('return')
                        )
                      case 18:
                        if (
                          5 !== t.extractionType ||
                          t.insLocationUrl.match(
                            '^https://www.instagram.com/explore/locations/[0-9]+.*$',
                          )
                        ) {
                          e.next = 21
                          break
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message: 'Invalid location link URL.',
                            type: 'is-danger',
                            position: 'is-bottom-right',
                            queue: !1,
                            duration: 3e3,
                          }),
                          e.abrupt('return')
                        )
                      case 21:
                        if (t.insLogged) {
                          e.next = 25
                          break
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message:
                              'Please log in to Instagram and try again.',
                            type: 'is-danger',
                            position: 'is-bottom-right',
                            queue: !1,
                            duration: 3e3,
                          }),
                          setTimeout(function () {
                            t.handleGotoIns()
                          }, 2e3),
                          e.abrupt('return')
                        )
                      case 25:
                        ;(a = ''),
                          0 === t.extractionType || 1 === t.extractionType
                            ? (a = t.insId.trim())
                            : 2 === t.extractionType
                            ? (t.insHashtag.indexOf('#') > -1 &&
                                (t.insHashtag = t.insHashtag.replace(/#/g, '')),
                              (a = t.insHashtag.trim()))
                            : 3 === t.extractionType || 4 === t.extractionType
                            ? ((s = t.insPostUrl.split('/p/')[1].split('/')[0]),
                              (a = s))
                            : 5 === t.extractionType &&
                              ((i = t.insLocationUrl.split(
                                '/explore/locations/',
                              )[1]),
                              (i = i.split('/')[0]),
                              (a = i)),
                          (n = ''
                            .concat(
                              l.a.runtime.getURL('dashboard.html#/'),
                              '?ins=',
                            )
                            .concat(encodeURIComponent(a), '&type=')
                            .concat(t.extractionType)),
                          l.a.tabs.create({ url: n })
                      case 29:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          },
          handleContinueTask: function (t) {
            var e = this
            if (
              !this.subscription.isPro &&
              this.extractEmailCount >= this.trialCount
            )
              this.isShowProUpgradePop = !0
            else {
              if (!this.insLogged)
                return (
                  this.$buefy.snackbar.open({
                    message: 'Please log in to Instagram and try again.',
                    type: 'is-danger',
                    position: 'is-bottom-right',
                    queue: !1,
                    duration: 3e3,
                  }),
                  void setTimeout(function () {
                    e.handleGotoIns()
                  }, 2e3)
                )
              var a
              switch (t.extractionType) {
                case 'followers':
                  a = 0
                  break
                case 'following':
                  a = 1
                  break
                case 'hashtag':
                  a = 2
                  break
                case 'likes':
                  a = 3
                  break
                case 'comment':
                  a = 4
                  break
                case 'location':
                  a = 5
                  break
              }
              var s = ''
                .concat(l.a.runtime.getURL('dashboard.html#/'), '?history=')
                .concat(t.id, '&ins=')
                .concat(encodeURIComponent(t.extractionData), '&type=')
                .concat(a)
              l.a.tabs.create({ url: s })
            }
          },
          handleGotoIgInfoPage: function (t, e) {
            var a = ''
            switch (t) {
              case 'followers':
              case 'following':
                a = 'https://www.instagram.com/'.concat(e, '/')
                break
              case 'hashtag':
                a = 'https://www.instagram.com/explore/tags/'.concat(e, '/')
                break
              case 'likes':
              case 'comment':
                a = 'https://www.instagram.com/p/'.concat(e, '/')
                break
              case 'location':
                a = 'https://www.instagram.com/explore/locations/'.concat(
                  e,
                  '/',
                )
                break
            }
            l.a.tabs.create({ url: a })
          },
          handleHistoryChangePage: function (t) {
            var e = this
            return Object(r['a'])(
              regeneratorRuntime.mark(function a() {
                var s
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (a.next = 2), Object(p['e'])({ page: +t })
                      case 2:
                        ;(s = a.sent), (e.historys = s.list || [])
                      case 4:
                      case 'end':
                        return a.stop()
                    }
                }, a)
              }),
            )()
          },
          handleUpdateInterval: function () {
            l.a.storage.local.set({ intervals: this.intervals })
          },
          handleGotoIns: function () {
            l.a.tabs.create({ url: 'https://www.instagram.com/' })
          },
          handleLogin: function () {
            var t = this
            ;(this.loginLoading = !0),
              Object(p['h'])().then(
                function (e) {
                  'ok' === e.status && t.initData()
                },
                function () {
                  t.$buefy.snackbar.open({
                    message:
                      'You did not complete the authorization or something went wrong.',
                    type: 'is-danger',
                    position: 'is-bottom-right',
                    queue: !1,
                    duration: 3e3,
                  }),
                    (t.loginLoading = !1)
                },
              )
          },
          handleLogout: function () {
            var t = this
            this.$buefy.dialog.confirm({
              message:
                '<div style="margin-top: 10px;">Are you sure you want to log out?</div>',
              confirmText: 'Log out',
              cancelText: 'Cancel',
              type: 'is-danger',
              hasIcon: !0,
              onConfirm: function () {
                Object(p['i'])().then(
                  function () {
                    t.getUserInfo()
                  },
                  function (e) {
                    t.getUserInfo(), t.$buefy.toast.open(''.concat(e))
                  },
                )
              },
            })
          },
        },
        components: { Pro: d['a'] },
      },
      g = h,
      b = (a('11aa'), a('2877')),
      m = Object(b['a'])(g, i, n, !1, null, null, null),
      f = m.exports,
      x = (a('42e0'), a('ecee')),
      v = a('c074'),
      y = a('ad3d'),
      w = a('289d'),
      C = a('01ea')
    x['c'].add(
      v['j'],
      v['s'],
      v['r'],
      v['F'],
      v['I'],
      v['v'],
      v['A'],
      v['t'],
      v['f'],
      v['q'],
      v['E'],
      v['i'],
      v['D'],
      v['h'],
      v['u'],
      v['G'],
      v['a'],
      v['d'],
      v['z'],
      v['n'],
      v['m'],
      v['p'],
      v['H'],
      v['C'],
      v['c'],
      v['b'],
      v['o'],
    ),
      s['a'].component('vue-fontawesome', y['a']),
      s['a'].use(w['a'], {
        defaultIconComponent: 'vue-fontawesome',
        defaultIconPack: 'fas',
      }),
      (s['a'].prototype.$config = C['a']),
      new s['a']({
        el: '#app',
        render: function (t) {
          return t(f)
        },
      })
  },
  1: function (t, e, a) {
    t.exports = a('0a3d')
  },
  '11aa': function (t, e, a) {
    'use strict'
    a('0224')
  },
  '539e': function (t, e, a) {
    t.exports = a.p + 'img/tip2.4974b32e.png'
  },
  '841f': function (t, e, a) {
    t.exports = a.p + 'img/tip4.9bcbf6a2.png'
  },
  b473: function (t, e, a) {
    t.exports = a.p + 'img/tip3.f17d020f.png'
  },
  e4a8: function (t, e, a) {
    t.exports = a.p + 'img/tip1.533d3624.png'
  },
})

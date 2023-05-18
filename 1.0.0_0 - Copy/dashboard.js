;(function (t) {
  function e(e) {
    for (
      var a, o, r = e[0], c = e[1], l = e[2], d = 0, p = [];
      d < r.length;
      d++
    )
      (o = r[d]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]),
        (i[o] = 0)
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a])
    u && u(e)
    while (p.length) p.shift()()
    return n.push.apply(n, l || []), s()
  }
  function s() {
    for (var t, e = 0; e < n.length; e++) {
      for (var s = n[e], a = !0, r = 1; r < s.length; r++) {
        var c = s[r]
        0 !== i[c] && (a = !1)
      }
      a && (n.splice(e--, 1), (t = o((o.s = s[0]))))
    }
    return t
  }
  var a = {},
    i = { dashboard: 0 },
    n = []
  function o(e) {
    if (a[e]) return a[e].exports
    var s = (a[e] = { i: e, l: !1, exports: {} })
    return t[e].call(s.exports, s, s.exports, o), (s.l = !0), s.exports
  }
  ;(o.m = t),
    (o.c = a),
    (o.d = function (t, e, s) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s })
    }),
    (o.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var s = Object.create(null)
      if (
        (o.r(s),
        Object.defineProperty(s, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var a in t)
          o.d(
            s,
            a,
            function (e) {
              return t[e]
            }.bind(null, a),
          )
      return s
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default']
            }
          : function () {
              return t
            }
      return o.d(e, 'a', e), e
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (o.p = '/')
  var r = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    c = r.push.bind(r)
  ;(r.push = e), (r = r.slice())
  for (var l = 0; l < r.length; l++) e(r[l])
  var u = c
  n.push([2, 'chunk-vendors', 'chunk-common']), s()
})({
  0: function (t, e) {},
  2: function (t, e, s) {
    t.exports = s('7c3d')
  },
  '3b7b': function (t, e, s) {},
  '7c3d': function (t, e, s) {
    'use strict'
    s.r(e)
    s('e260'), s('e6cf'), s('cca6'), s('a79d')
    var a = s('2b0e'),
      i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s(
          'div',
          { staticClass: 'app' },
          [
            s('div', { staticClass: 'wrapper mx-4' }, [
              s(
                'header',
                { staticClass: 'is-flex is-align-items-center p-3 pl-4' },
                [
                  t._m(0),
                  s(
                    'h1',
                    { staticClass: 'is-size-5 has-text-weight-bold px-2' },
                    [t._v('IG Lead Generator')],
                  ),
                  s(
                    'span',
                    { staticClass: 'has-text-grey-light is-size-7 mt-1' },
                    [t._v(t._s(t.version))],
                  ),
                  void 0 !== t.subscription.isPro &&
                  (!t.subscription.isPro ||
                    (t.subscription.isPro && t.subscription.isCanceled)) &&
                  t.insLogged &&
                  t.user.id
                    ? s(
                        'a',
                        {
                          staticClass:
                            'btn-pro is-flex is-justify-content-center is-align-items-center px-5 is-size-6',
                          on: { click: t.handleShowProModal },
                        },
                        [
                        ],
                      )
                    : t._e(),
                ],
              ),
              s(
                'main',
                [
                  !t.subscription.isPro &&
                  (t.isComplete || t.loadUserIndex > 0) &&
                  t.followList.length > 0 &&
                  t.extractEmailCount >= t.trialCount
                    ? s(
                        'b-notification',
                        {
                          staticClass: 'mx-3 mt-2',
                          attrs: {
                            type: 'is-warning',
                            'aria-close-label': 'Close notification',
                            role: 'alert',
                            closable: !1,
                          },
                        },
                        [
                          t._v(' First '),
                          s('span', { staticClass: 'has-text-weight-bold' }, [
                            t._v(t._s(t.trialCount)),
                          ]),
                          t._v(
                            ' emails extract Free, Upgrade the Pro version to extract ',
                          ),
                          s('span', { staticClass: 'has-text-weight-bold' }, [
                            t._v('unlimited'),
                          ]),
                          t._v(' emails and unlock all features. '),
                          s(
                            'a',
                            {
                              staticClass:
                                'has-text-danger is-underlined has-text-weight-bold',
                              on: { click: t.handleShowProModal },
                            },
                            [t._v(' Upgrade now')],
                          ),
                          s('b-icon', {
                            attrs: {
                              icon: 'mouse-pointer',
                              type: 'is-primary',
                            },
                          }),
                          t._v(' !! '),
                        ],
                        1,
                      )
                    : t._e(),
                  t.user.id
                    ? s(
                        'div',
                        { staticClass: 'main-box mb-3 p-4 has-text-centered' },
                        [
                          0 === t.type || 1 === t.type
                            ? s('div', [
                                t.insUser.name
                                  ? s(
                                      'div',
                                      {
                                        staticClass:
                                          'source-text is-flex is-justify-content-center is-align-items-center pb-4',
                                      },
                                      [
                                        t.insUser.avatar
                                          ? s('b-image', {
                                              staticClass: 'is-48x48',
                                              attrs: {
                                                src:
                                                  'https://ig1.echobot.workers.dev/' +
                                                  t.insUser.avatar,
                                                'src-fallback':
                                                  'https://echobot.dev/avatar-d.png',
                                                alt: t.insUser.name,
                                                rounded: !0,
                                              },
                                            })
                                          : t._e(),
                                        s(
                                          'a',
                                          {
                                            staticClass:
                                              'has-text-black is-size-5 px-2',
                                            attrs: {
                                              href:
                                                'https://www.instagram.com/' +
                                                t.insUser.name +
                                                '/',
                                              target: '_blank',
                                              title:
                                                'https://www.instagram.com/' +
                                                t.insUser.name +
                                                '/',
                                            },
                                          },
                                          [t._v('@' + t._s(t.insUser.name))],
                                        ),
                                        s(
                                          'b-tag',
                                          {
                                            directives: [
                                              {
                                                name: 'show',
                                                rawName: 'v-show',
                                                value: t.insUser.count > 0,
                                                expression: 'insUser.count > 0',
                                              },
                                            ],
                                            staticClass: 'ml-2',
                                            attrs: {
                                              type: 'is-danger is-light',
                                              rounded: '',
                                              size: 'is-medium',
                                            },
                                          },
                                          [
                                            s(
                                              'em',
                                              {
                                                staticClass:
                                                  'has-text-weight-semibold',
                                              },
                                              [t._v(t._s(t.insUser.count))],
                                            ),
                                            t._v(
                                              ' ' +
                                                t._s(
                                                  0 === t.type
                                                    ? 'followers'
                                                    : 'following',
                                                ) +
                                                ' ',
                                            ),
                                          ],
                                        ),
                                      ],
                                      1,
                                    )
                                  : t._e(),
                                t.isNoFollow
                                  ? s(
                                      'div',
                                      {
                                        staticClass:
                                          'is-size-6 is-flex is-justify-content-center is-align-items-center py-3',
                                      },
                                      [
                                        s('b-icon', {
                                          attrs: {
                                            icon: 'dizzy',
                                            type: 'is-warning',
                                            size: 'is-medium',
                                          },
                                        }),
                                        t._v(
                                          ' No ' +
                                            t._s(
                                              0 === t.type
                                                ? 'followers'
                                                : 'following',
                                            ) +
                                            ' on this user yet. ',
                                        ),
                                      ],
                                      1,
                                    )
                                  : s('div', [
                                      t.isComplete
                                        ? s(
                                            'div',
                                            {
                                              staticClass:
                                                'is-size-6 is-flex is-justify-content-center is-align-items-center py-3',
                                            },
                                            [
                                              t.currentFollowCount > 0 &&
                                              0 === t.followList.length
                                                ? [
                                                    s('b-icon', {
                                                      attrs: {
                                                        icon: 'dizzy',
                                                        type: 'is-warning',
                                                        size: 'is-medium',
                                                      },
                                                    }),
                                                    t._v(
                                                      ' This may be a private account and cannot be exported. ',
                                                    ),
                                                  ]
                                                : [
                                                    s('b-icon', {
                                                      attrs: {
                                                        icon: 'check-circle',
                                                        type: 'is-success',
                                                        size: 'is-medium',
                                                      },
                                                    }),
                                                    t._v(' Completed. '),
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'has-text-primary has-text-weight-semibold mx-1',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.userList.length,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(
                                                      ' users have been extracted',
                                                    ),
                                                    t.lastScrapedCount > 0
                                                      ? s('span', [
                                                          t._v(
                                                            ' (The task has accumulated ',
                                                          ),
                                                          s(
                                                            'span',
                                                            {
                                                              staticClass:
                                                                'has-text-primary has-text-weight-semibold mx-1',
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t.lastScrapedCount +
                                                                    t.userList
                                                                      .length,
                                                                ),
                                                              ),
                                                            ],
                                                          ),
                                                          t._v(
                                                            ' users extracted)',
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    t._v('. '),
                                                  ],
                                            ],
                                            2,
                                          )
                                        : s(
                                            'div',
                                            {
                                              staticClass:
                                                'is-size-6 is-flex is-justify-content-center is-align-items-center py-3',
                                            },
                                            [
                                              s('b-icon', {
                                                attrs: {
                                                  icon: t.isPaused
                                                    ? 'pause-circle'
                                                    : 'sync',
                                                  'custom-class': t.isPaused
                                                    ? ''
                                                    : 'fa-spin1',
                                                  type: 'is-primary',
                                                  size: 'is-medium',
                                                },
                                              }),
                                              t.isPaused
                                                ? s('span', [
                                                    t._v(' Suspended. '),
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'has-text-primary has-text-weight-semibold mx-1',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.userList.length,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(
                                                      ' users have been extracted',
                                                    ),
                                                    t.lastScrapedCount > 0
                                                      ? s('span', [
                                                          t._v(
                                                            ' (The task has accumulated ',
                                                          ),
                                                          s(
                                                            'span',
                                                            {
                                                              staticClass:
                                                                'has-text-primary has-text-weight-semibold mx-1',
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t.lastScrapedCount +
                                                                    t.userList
                                                                      .length,
                                                                ),
                                                              ),
                                                            ],
                                                          ),
                                                          t._v(
                                                            ' users extracted)',
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    t._v('. '),
                                                  ])
                                                : s('span', [
                                                    t._v(' Start extracting '),
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'has-text-primary has-text-weight-semibold mx-1',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.userList.length +
                                                              1,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(' user'),
                                                    t.lastScrapedCount > 0
                                                      ? s('span', [
                                                          t._v(
                                                            ' (The task has accumulated ',
                                                          ),
                                                          s(
                                                            'span',
                                                            {
                                                              staticClass:
                                                                'has-text-primary has-text-weight-semibold mx-1',
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t.lastScrapedCount +
                                                                    t.userList
                                                                      .length,
                                                                ),
                                                              ),
                                                            ],
                                                          ),
                                                          t._v(
                                                            ' users extracted)',
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    t._v('. '),
                                                  ]),
                                              t.isLoading || t.isComplete
                                                ? t._e()
                                                : s(
                                                    'b-button',
                                                    {
                                                      staticClass:
                                                        'ml-2 has-text-weight-semibold',
                                                      attrs: {
                                                        size: 'is-small',
                                                        'icon-left': t.isPaused
                                                          ? 'play-circle'
                                                          : 'pause-circle',
                                                        type: 'is-warning',
                                                      },
                                                      on: {
                                                        click:
                                                          t.handleToggleWorkStatus,
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        ' ' +
                                                          t._s(
                                                            t.isPaused
                                                              ? 'Continue'
                                                              : 'Pause',
                                                          ) +
                                                          ' ',
                                                      ),
                                                    ],
                                                  ),
                                            ],
                                            1,
                                          ),
                                    ]),
                              ])
                            : 2 === t.type
                            ? s('div', [
                                t.insHashtag.name
                                  ? s(
                                      'div',
                                      {
                                        staticClass:
                                          'source-text is-flex is-justify-content-center is-align-items-center pb-4',
                                      },
                                      [
                                        t.insHashtag.profile_pic_url
                                          ? s('b-image', {
                                              staticClass: 'is-48x48',
                                              attrs: {
                                                src:
                                                  'https://ig1.echobot.workers.dev/' +
                                                  t.insHashtag.profile_pic_url,
                                                'src-fallback':
                                                  'https://echobot.dev/avatar-d.png',
                                                alt: t.insHashtag.name,
                                              },
                                            })
                                          : t._e(),
                                        s(
                                          'span',
                                          { staticClass: 'is-size-6 ml-2' },
                                          [t._v('Hashtag: ')],
                                        ),
                                        s(
                                          'a',
                                          {
                                            staticClass:
                                              'has-text-black is-size-5 px-2',
                                            attrs: {
                                              href:
                                                'https://www.instagram.com/explore/tags/' +
                                                t.insHashtag.name +
                                                '/',
                                              target: '_blank',
                                              title:
                                                'https://www.instagram.com/explore/tags/' +
                                                t.insHashtag.name +
                                                '/',
                                            },
                                          },
                                          [t._v('#' + t._s(t.insHashtag.name))],
                                        ),
                                        s(
                                          'div',
                                          [
                                            s(
                                              'b-tag',
                                              {
                                                staticClass: 'ml-2',
                                                attrs: {
                                                  type: 'is-danger is-light',
                                                  rounded: '',
                                                  size: 'is-medium',
                                                },
                                              },
                                              [
                                                s(
                                                  'em',
                                                  {
                                                    staticClass:
                                                      'has-text-weight-semibold',
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(t.insHashtag.count),
                                                    ),
                                                  ],
                                                ),
                                                t._v(' posts '),
                                              ],
                                            ),
                                          ],
                                          1,
                                        ),
                                      ],
                                      1,
                                    )
                                  : t._e(),
                                t.isComplete
                                  ? s(
                                      'div',
                                      {
                                        staticClass:
                                          'is-size-6 is-flex is-justify-content-center is-align-items-center py-3',
                                      },
                                      [
                                        s('b-icon', {
                                          attrs: {
                                            icon: 'check-circle',
                                            type: 'is-success',
                                            size: 'is-medium',
                                          },
                                        }),
                                        t._v(' Completed. '),
                                        s(
                                          'span',
                                          {
                                            staticClass:
                                              'has-text-primary has-text-weight-semibold mx-1',
                                          },
                                          [t._v(t._s(t.userList.length))],
                                        ),
                                        t._v(' users have been extracted'),
                                        t.lastScrapedCount > 0
                                          ? s('span', [
                                              t._v(
                                                ' (The task has accumulated ',
                                              ),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.lastScrapedCount +
                                                        t.userList.length,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                              t._v(' users extracted)'),
                                            ])
                                          : t._e(),
                                        t._v('. '),
                                      ],
                                      1,
                                    )
                                  : s(
                                      'div',
                                      {
                                        staticClass:
                                          'is-size-6 is-flex is-justify-content-center is-align-items-center py-3',
                                      },
                                      [
                                        s('b-icon', {
                                          attrs: {
                                            icon: t.isPaused
                                              ? 'pause-circle'
                                              : 'sync',
                                            'custom-class': t.isPaused
                                              ? ''
                                              : 'fa-spin1',
                                            type: 'is-primary',
                                            size: 'is-medium',
                                          },
                                        }),
                                        t.isPaused
                                          ? s('span', [
                                              t._v(' Suspended. '),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [t._v(t._s(t.userList.length))],
                                              ),
                                              t._v(
                                                ' users have been extracted',
                                              ),
                                              t.lastScrapedCount > 0
                                                ? s('span', [
                                                    t._v(
                                                      ' (The task has accumulated ',
                                                    ),
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'has-text-primary has-text-weight-semibold mx-1',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.lastScrapedCount +
                                                              t.userList.length,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(' users extracted)'),
                                                  ])
                                                : t._e(),
                                              t._v('. '),
                                            ])
                                          : s('span', [
                                              t._v(' Start extracting '),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [
                                                  t._v(
                                                    t._s(t.userList.length + 1),
                                                  ),
                                                ],
                                              ),
                                              t._v(' user'),
                                              t.lastScrapedCount > 0
                                                ? s('span', [
                                                    t._v(
                                                      ' (The task has accumulated ',
                                                    ),
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'has-text-primary has-text-weight-semibold mx-1',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.lastScrapedCount +
                                                              t.userList.length,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(' users extracted)'),
                                                  ])
                                                : t._e(),
                                              t._v('. '),
                                            ]),
                                        t.isLoading || t.isComplete
                                          ? t._e()
                                          : s(
                                              'b-button',
                                              {
                                                staticClass:
                                                  'ml-2 has-text-weight-semibold',
                                                attrs: {
                                                  size: 'is-small',
                                                  'icon-left': t.isPaused
                                                    ? 'play-circle'
                                                    : 'pause-circle',
                                                  type: 'is-warning',
                                                },
                                                on: {
                                                  click:
                                                    t.handleToggleWorkStatus,
                                                },
                                              },
                                              [
                                                t._v(
                                                  ' ' +
                                                    t._s(
                                                      t.isPaused
                                                        ? 'Continue'
                                                        : 'Pause',
                                                    ) +
                                                    ' ',
                                                ),
                                              ],
                                            ),
                                      ],
                                      1,
                                    ),
                              ])
                            : 3 === t.type
                            ? s('div', [
                                t.insLike.name
                                  ? s(
                                      'div',
                                      {
                                        staticClass:
                                          'source-text is-flex is-justify-content-center is-align-items-center pb-4',
                                      },
                                      [
                                        s(
                                          'span',
                                          { staticClass: 'is-size-6' },
                                          [t._v('Like: ')],
                                        ),
                                        s(
                                          'a',
                                          {
                                            staticClass:
                                              'has-text-black is-size-6 px-2',
                                            attrs: {
                                              href:
                                                'https://www.instagram.com/p/' +
                                                t.insLike.name +
                                                '/',
                                              target: '_blank',
                                              title:
                                                'post link: https://www.instagram.com/p/' +
                                                t.insLike.name +
                                                '/',
                                            },
                                          },
                                          [
                                            t._v(
                                              'https://www.instagram.com/p/' +
                                                t._s(t.insLike.name),
                                            ),
                                          ],
                                        ),
                                        s(
                                          'div',
                                          [
                                            s(
                                              'b-tag',
                                              {
                                                staticClass: 'ml-2',
                                                attrs: {
                                                  type: 'is-danger is-light',
                                                  rounded: '',
                                                  size: 'is-medium',
                                                },
                                              },
                                              [
                                                s(
                                                  'em',
                                                  {
                                                    staticClass:
                                                      'has-text-weight-semibold',
                                                  },
                                                  [t._v(t._s(t.insLike.count))],
                                                ),
                                                t._v(' likes '),
                                              ],
                                            ),
                                          ],
                                          1,
                                        ),
                                      ],
                                    )
                                  : t._e(),
                                t.isComplete
                                  ? s(
                                      'div',
                                      {
                                        staticClass:
                                          'is-size-6 is-flex is-justify-content-center is-align-items-center py-3',
                                      },
                                      [
                                        s('b-icon', {
                                          attrs: {
                                            icon: 'check-circle',
                                            type: 'is-success',
                                            size: 'is-medium',
                                          },
                                        }),
                                        t._v(' Completed. '),
                                        s(
                                          'span',
                                          {
                                            staticClass:
                                              'has-text-primary has-text-weight-semibold mx-1',
                                          },
                                          [t._v(t._s(t.userList.length))],
                                        ),
                                        t._v(' users have been extracted'),
                                        t.lastScrapedCount > 0
                                          ? s('span', [
                                              t._v(
                                                ' (The task has accumulated ',
                                              ),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.lastScrapedCount +
                                                        t.userList.length,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                              t._v(' users extracted)'),
                                            ])
                                          : t._e(),
                                        t._v('. '),
                                      ],
                                      1,
                                    )
                                  : s(
                                      'div',
                                      {
                                        staticClass:
                                          'is-size-6 is-flex is-justify-content-center is-align-items-center py-3',
                                      },
                                      [
                                        s('b-icon', {
                                          attrs: {
                                            icon: t.isPaused
                                              ? 'pause-circle'
                                              : 'sync',
                                            'custom-class': t.isPaused
                                              ? ''
                                              : 'fa-spin1',
                                            type: 'is-primary',
                                            size: 'is-medium',
                                          },
                                        }),
                                        t.isPaused
                                          ? s('span', [
                                              t._v(' Suspended. '),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [t._v(t._s(t.userList.length))],
                                              ),
                                              t._v(
                                                ' users have been extracted',
                                              ),
                                              t.lastScrapedCount > 0
                                                ? s('span', [
                                                    t._v(
                                                      ' (The task has accumulated ',
                                                    ),
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'has-text-primary has-text-weight-semibold mx-1',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.lastScrapedCount +
                                                              t.userList.length,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(' users extracted)'),
                                                  ])
                                                : t._e(),
                                              t._v('. '),
                                            ])
                                          : s('span', [
                                              t._v(' Start extracting '),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [
                                                  t._v(
                                                    t._s(t.userList.length + 1),
                                                  ),
                                                ],
                                              ),
                                              t._v(' user'),
                                              t.lastScrapedCount > 0
                                                ? s('span', [
                                                    t._v(
                                                      ' (The task has accumulated ',
                                                    ),
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'has-text-primary has-text-weight-semibold mx-1',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.lastScrapedCount +
                                                              t.userList.length,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(' users extracted)'),
                                                  ])
                                                : t._e(),
                                              t._v('. '),
                                            ]),
                                        t.isLoading || t.isComplete
                                          ? t._e()
                                          : s(
                                              'b-button',
                                              {
                                                staticClass:
                                                  'ml-2 has-text-weight-semibold',
                                                attrs: {
                                                  size: 'is-small',
                                                  'icon-left': t.isPaused
                                                    ? 'play-circle'
                                                    : 'pause-circle',
                                                  type: 'is-warning',
                                                },
                                                on: {
                                                  click:
                                                    t.handleToggleWorkStatus,
                                                },
                                              },
                                              [
                                                t._v(
                                                  ' ' +
                                                    t._s(
                                                      t.isPaused
                                                        ? 'Continue'
                                                        : 'Pause',
                                                    ) +
                                                    ' ',
                                                ),
                                              ],
                                            ),
                                      ],
                                      1,
                                    ),
                              ])
                            : 4 === t.type
                            ? s('div', [
                                t.insComment.name
                                  ? s(
                                      'div',
                                      {
                                        staticClass:
                                          'source-text is-flex is-justify-content-center is-align-items-center pb-4',
                                      },
                                      [
                                        s(
                                          'span',
                                          { staticClass: 'is-size-6' },
                                          [t._v('Comment: ')],
                                        ),
                                        s(
                                          'a',
                                          {
                                            staticClass:
                                              'has-text-black is-size-6 px-2',
                                            attrs: {
                                              href:
                                                'https://www.instagram.com/p/' +
                                                t.insComment.name +
                                                '/',
                                              target: '_blank',
                                              title:
                                                'post link: https://www.instagram.com/p/' +
                                                t.insComment.name +
                                                '/',
                                            },
                                          },
                                          [
                                            t._v(
                                              'https://www.instagram.com/p/' +
                                                t._s(t.insComment.name),
                                            ),
                                          ],
                                        ),
                                        s(
                                          'div',
                                          [
                                            s(
                                              'b-tag',
                                              {
                                                staticClass: 'ml-2',
                                                attrs: {
                                                  type: 'is-danger is-light',
                                                  rounded: '',
                                                  size: 'is-medium',
                                                },
                                              },
                                              [
                                                s(
                                                  'em',
                                                  {
                                                    staticClass:
                                                      'has-text-weight-semibold',
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(t.insComment.count),
                                                    ),
                                                  ],
                                                ),
                                                t._v(' comments '),
                                              ],
                                            ),
                                          ],
                                          1,
                                        ),
                                      ],
                                    )
                                  : t._e(),
                                t.isComplete
                                  ? s(
                                      'div',
                                      {
                                        staticClass:
                                          'is-size-6 is-flex is-justify-content-center is-align-items-center py-3',
                                      },
                                      [
                                        s('b-icon', {
                                          attrs: {
                                            icon: 'check-circle',
                                            type: 'is-success',
                                            size: 'is-medium',
                                          },
                                        }),
                                        t._v(' Completed. '),
                                        s(
                                          'span',
                                          {
                                            staticClass:
                                              'has-text-primary has-text-weight-semibold mx-1',
                                          },
                                          [t._v(t._s(t.userList.length))],
                                        ),
                                        t._v(' users have been extracted'),
                                        t.lastScrapedCount > 0
                                          ? s('span', [
                                              t._v(
                                                ' (The task has accumulated ',
                                              ),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.lastScrapedCount +
                                                        t.userList.length,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                              t._v(' users extracted)'),
                                            ])
                                          : t._e(),
                                        t._v('. '),
                                      ],
                                      1,
                                    )
                                  : s(
                                      'div',
                                      {
                                        staticClass:
                                          'is-size-6 is-flex is-justify-content-center is-align-items-center py-3',
                                      },
                                      [
                                        s('b-icon', {
                                          attrs: {
                                            icon: t.isPaused
                                              ? 'pause-circle'
                                              : 'sync',
                                            'custom-class': t.isPaused
                                              ? ''
                                              : 'fa-spin1',
                                            type: 'is-primary',
                                            size: 'is-medium',
                                          },
                                        }),
                                        t.isPaused
                                          ? s('span', [
                                              t._v(' Suspended. '),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [t._v(t._s(t.userList.length))],
                                              ),
                                              t._v(
                                                ' users have been extracted',
                                              ),
                                              t.lastScrapedCount > 0
                                                ? s('span', [
                                                    t._v(
                                                      ' (The task has accumulated ',
                                                    ),
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'has-text-primary has-text-weight-semibold mx-1',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.lastScrapedCount +
                                                              t.userList.length,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(' users extracted)'),
                                                  ])
                                                : t._e(),
                                              t._v('. '),
                                            ])
                                          : s('span', [
                                              t._v(' Start extracting '),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [
                                                  t._v(
                                                    t._s(t.userList.length + 1),
                                                  ),
                                                ],
                                              ),
                                              t._v(' user'),
                                              t.lastScrapedCount > 0
                                                ? s('span', [
                                                    t._v(
                                                      ' (The task has accumulated ',
                                                    ),
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'has-text-primary has-text-weight-semibold mx-1',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.lastScrapedCount +
                                                              t.userList.length,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(' users extracted)'),
                                                  ])
                                                : t._e(),
                                              t._v('. '),
                                            ]),
                                        t.isLoading || t.isComplete
                                          ? t._e()
                                          : s(
                                              'b-button',
                                              {
                                                staticClass:
                                                  'ml-2 has-text-weight-semibold',
                                                attrs: {
                                                  size: 'is-small',
                                                  'icon-left': t.isPaused
                                                    ? 'play-circle'
                                                    : 'pause-circle',
                                                  type: 'is-warning',
                                                },
                                                on: {
                                                  click:
                                                    t.handleToggleWorkStatus,
                                                },
                                              },
                                              [
                                                t._v(
                                                  ' ' +
                                                    t._s(
                                                      t.isPaused
                                                        ? 'Continue'
                                                        : 'Pause',
                                                    ) +
                                                    ' ',
                                                ),
                                              ],
                                            ),
                                      ],
                                      1,
                                    ),
                              ])
                            : 5 === t.type
                            ? s('div', [
                                t.insLocation.name
                                  ? s(
                                      'div',
                                      {
                                        staticClass:
                                          'source-text is-flex is-justify-content-center is-align-items-center pb-4',
                                      },
                                      [
                                        s(
                                          'span',
                                          { staticClass: 'is-size-6' },
                                          [t._v('Location: ')],
                                        ),
                                        s(
                                          'a',
                                          {
                                            staticClass:
                                              'has-text-black is-size-6 px-2',
                                            attrs: {
                                              href:
                                                'https://www.instagram.com/explore/locations/' +
                                                t.ins +
                                                '/',
                                              target: '_blank',
                                              title:
                                                'locations link: https://www.instagram.com/explore/locations/' +
                                                t.ins +
                                                '/',
                                            },
                                          },
                                          [t._v(t._s(t.insLocation.name))],
                                        ),
                                        s(
                                          'div',
                                          [
                                            s(
                                              'b-tag',
                                              {
                                                staticClass: 'ml-2',
                                                attrs: {
                                                  type: 'is-danger is-light',
                                                  rounded: '',
                                                  size: 'is-medium',
                                                },
                                              },
                                              [
                                                s(
                                                  'em',
                                                  {
                                                    staticClass:
                                                      'has-text-weight-semibold',
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(t.insLocation.count),
                                                    ),
                                                  ],
                                                ),
                                                t._v(' posts '),
                                              ],
                                            ),
                                          ],
                                          1,
                                        ),
                                      ],
                                    )
                                  : t._e(),
                                t.isComplete
                                  ? s(
                                      'div',
                                      {
                                        staticClass:
                                          'is-size-6 is-flex is-justify-content-center is-align-items-center py-3',
                                      },
                                      [
                                        s('b-icon', {
                                          attrs: {
                                            icon: 'check-circle',
                                            type: 'is-success',
                                            size: 'is-medium',
                                          },
                                        }),
                                        t._v(' Completed. '),
                                        s(
                                          'span',
                                          {
                                            staticClass:
                                              'has-text-primary has-text-weight-semibold mx-1',
                                          },
                                          [t._v(t._s(t.userList.length))],
                                        ),
                                        t._v(' users have been extracted'),
                                        t.lastScrapedCount > 0
                                          ? s('span', [
                                              t._v(
                                                ' (The task has accumulated ',
                                              ),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.lastScrapedCount +
                                                        t.userList.length,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                              t._v(' users extracted)'),
                                            ])
                                          : t._e(),
                                        t._v('. '),
                                      ],
                                      1,
                                    )
                                  : s(
                                      'div',
                                      {
                                        staticClass:
                                          'is-size-6 is-flex is-justify-content-center is-align-items-center py-3',
                                      },
                                      [
                                        s('b-icon', {
                                          attrs: {
                                            icon: t.isPaused
                                              ? 'pause-circle'
                                              : 'sync',
                                            'custom-class': t.isPaused
                                              ? ''
                                              : 'fa-spin1',
                                            type: 'is-primary',
                                            size: 'is-medium',
                                          },
                                        }),
                                        t.isPaused
                                          ? s('span', [
                                              t._v(' Suspended. '),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [t._v(t._s(t.userList.length))],
                                              ),
                                              t._v(
                                                ' users have been extracted',
                                              ),
                                              t.lastScrapedCount > 0
                                                ? s('span', [
                                                    t._v(
                                                      ' (The task has accumulated ',
                                                    ),
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'has-text-primary has-text-weight-semibold mx-1',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.lastScrapedCount +
                                                              t.userList.length,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(' users extracted)'),
                                                  ])
                                                : t._e(),
                                              t._v('. '),
                                            ])
                                          : s('span', [
                                              t._v(' Start extracting '),
                                              s(
                                                'span',
                                                {
                                                  staticClass:
                                                    'has-text-primary has-text-weight-semibold mx-1',
                                                },
                                                [
                                                  t._v(
                                                    t._s(t.userList.length + 1),
                                                  ),
                                                ],
                                              ),
                                              t._v(' user'),
                                              t.lastScrapedCount > 0
                                                ? s('span', [
                                                    t._v(
                                                      ' (The task has accumulated ',
                                                    ),
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'has-text-primary has-text-weight-semibold mx-1',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.lastScrapedCount +
                                                              t.userList.length,
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(' users extracted)'),
                                                  ])
                                                : t._e(),
                                              t._v('. '),
                                            ]),
                                        t.isLoading || t.isComplete
                                          ? t._e()
                                          : s(
                                              'b-button',
                                              {
                                                staticClass:
                                                  'ml-2 has-text-weight-semibold',
                                                attrs: {
                                                  size: 'is-small',
                                                  'icon-left': t.isPaused
                                                    ? 'play-circle'
                                                    : 'pause-circle',
                                                  type: 'is-warning',
                                                },
                                                on: {
                                                  click:
                                                    t.handleToggleWorkStatus,
                                                },
                                              },
                                              [
                                                t._v(
                                                  ' ' +
                                                    t._s(
                                                      t.isPaused
                                                        ? 'Continue'
                                                        : 'Pause',
                                                    ) +
                                                    ' ',
                                                ),
                                              ],
                                            ),
                                      ],
                                      1,
                                    ),
                              ])
                            : t._e(),
                          s(
                            'div',
                            { staticClass: 'has-text-centered' },
                            [
                              s(
                                'b-dropdown',
                                {
                                  staticClass: 'mb-2',
                                  attrs: {
                                    triggers: ['hover'],
                                    'aria-role': 'list',
                                  },
                                  scopedSlots: t._u(
                                    [
                                      {
                                        key: 'trigger',
                                        fn: function () {
                                          return [
                                            s('b-button', {
                                              staticClass:
                                                'is-uppercase has-text-weight-semibold',
                                              attrs: {
                                                disabled:
                                                  t.isLoading ||
                                                  0 === t.userList.length,
                                                label:
                                                  'export all (' +
                                                  t.userList.length +
                                                  ')',
                                                type: 'is-primary',
                                                'icon-left': 'download',
                                                'icon-right': 'caret-down',
                                              },
                                            }),
                                          ]
                                        },
                                        proxy: !0,
                                      },
                                    ],
                                    null,
                                    !1,
                                    1964382954,
                                  ),
                                },
                                [
                                  t.userList.length > 0
                                    ? s(
                                        'b-dropdown-item',
                                        {
                                          attrs: { 'aria-role': 'listitem' },
                                          on: {
                                            click: function (e) {
                                              return t.handleDownload(
                                                'all',
                                                t.userList,
                                                'xlsx',
                                              )
                                            },
                                          },
                                        },
                                        [
                                          s(
                                            'div',
                                            { staticClass: 'export-menu-item' },
                                            [
                                              s(
                                                'span',
                                                { staticClass: 'i-format' },
                                                [
                                                  s(
                                                    'svg',
                                                    {
                                                      attrs: {
                                                        xmlns:
                                                          'http://www.w3.org/2000/svg',
                                                        'aria-hidden': 'true',
                                                        role: 'img',
                                                        width: '1em',
                                                        height: '1em',
                                                        preserveAspectRatio:
                                                          'xMidYMid meet',
                                                        viewBox: '0 0 512 512',
                                                      },
                                                    },
                                                    [
                                                      s('path', {
                                                        attrs: {
                                                          fill: 'currentColor',
                                                          d:
                                                            'M453.547 273.449H372.12v-40.714h81.427v40.714zm0 23.264H372.12v40.714h81.427v-40.714zm0-191.934H372.12v40.713h81.427V104.78zm0 63.978H372.12v40.713h81.427v-40.713zm0 191.934H372.12v40.714h81.427V360.69zm56.242 80.264c-2.326 12.098-16.867 12.388-26.58 12.796H302.326v52.345h-36.119L0 459.566V52.492L267.778 5.904h34.548v46.355h174.66c9.83.407 20.648-.291 29.197 5.583c5.991 8.608 5.41 19.543 5.817 29.43l-.233 302.791c-.29 16.925 1.57 34.2-1.978 50.892zm-296.51-91.256c-16.052-32.57-32.395-64.909-48.39-97.48c15.82-31.698 31.408-63.512 46.937-95.327c-13.203.64-26.406 1.454-39.55 2.385c-9.83 23.904-21.288 47.169-28.965 71.888c-7.154-23.323-16.634-45.774-25.3-68.515c-12.796.698-25.592 1.454-38.387 2.21c13.493 29.78 27.86 59.15 40.946 89.104c-15.413 29.081-29.837 58.57-44.785 87.825c12.737.523 25.475 1.047 38.212 1.221c9.074-23.148 20.357-45.424 28.267-69.038c7.096 25.359 19.135 48.798 29.023 73.051c14.017.99 27.976 1.862 41.993 2.676zM484.26 79.882H302.326v24.897h46.53v40.713h-46.53v23.265h46.53v40.713h-46.53v23.265h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v26.897H484.26V79.882z',
                                                        },
                                                      }),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                              s(
                                                'span',
                                                { staticClass: 'export-desc' },
                                                [t._v('export all to xlsx')],
                                              ),
                                            ],
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                  t.userList.length > 0
                                    ? s(
                                        'b-dropdown-item',
                                        {
                                          attrs: { 'aria-role': 'listitem' },
                                          on: {
                                            click: function (e) {
                                              return t.handleDownload(
                                                'all',
                                                t.userList,
                                                'csv',
                                              )
                                            },
                                          },
                                        },
                                        [
                                          s(
                                            'div',
                                            { staticClass: 'export-menu-item' },
                                            [
                                              s(
                                                'span',
                                                {
                                                  staticClass: 'i-format',
                                                  staticStyle: {
                                                    'font-size': '34px',
                                                  },
                                                },
                                                [
                                                  s(
                                                    'svg',
                                                    {
                                                      attrs: {
                                                        xmlns:
                                                          'http://www.w3.org/2000/svg',
                                                        'aria-hidden': 'true',
                                                        role: 'img',
                                                        width: '1em',
                                                        height: '1em',
                                                        preserveAspectRatio:
                                                          'xMidYMid meet',
                                                        viewBox: '0 0 40 40',
                                                      },
                                                    },
                                                    [
                                                      s('path', {
                                                        attrs: {
                                                          fill: 'currentColor',
                                                          d:
                                                            'M30.918 15.983h-.678v-3.271a.448.448 0 0 0-.006-.062a.541.541 0 0 0-.132-.358L24.66 6.075l-.004-.004a.566.566 0 0 0-.11-.092l-.036-.022a.548.548 0 0 0-.109-.046l-.03-.01a.539.539 0 0 0-.127-.016H10.867c-.611 0-1.107.497-1.107 1.107v8.99h-.678c-.874 0-1.582.708-1.582 1.582v8.228c0 .873.709 1.582 1.582 1.582h.678v5.632c0 .61.496 1.107 1.107 1.107h18.266c.61 0 1.107-.497 1.107-1.107v-5.632h.678c.873 0 1.582-.708 1.582-1.582v-8.228c0-.873-.708-1.581-1.582-1.581zM10.867 6.992H23.69v5.664c0 .306.248.553.554.553h4.89v2.773H10.867v-8.99zm8.282 15.168c-1.344-.48-2.231-1.224-2.231-2.399c0-1.379 1.164-2.422 3.059-2.422c.924 0 1.583.18 2.063.407l-.408 1.463a3.794 3.794 0 0 0-1.679-.383c-.792 0-1.176.371-1.176.779c0 .516.443.743 1.499 1.139c1.428.528 2.087 1.271 2.087 2.411c0 1.356-1.031 2.507-3.25 2.507c-.924 0-1.835-.252-2.291-.504l.372-1.499a4.613 4.613 0 0 0 2.026.504c.84 0 1.284-.349 1.284-.876c0-.504-.383-.791-1.355-1.127zm-9.526-.552c0-2.747 1.967-4.27 4.413-4.27c.948 0 1.667.191 1.991.348l-.384 1.451a3.85 3.85 0 0 0-1.535-.3c-1.439 0-2.566.875-2.566 2.674c0 1.607.959 2.627 2.578 2.627c.564 0 1.164-.107 1.535-.264l.265 1.439c-.324.155-1.092.348-2.063.348c-2.795.001-4.234-1.75-4.234-4.053zm19.51 11.1H10.867v-5.333h18.266v5.333zm-1.478-7.166H25.52l-2.59-8.084h2.003l.983 3.419c.275.971.527 1.883.719 2.89h.036a35.87 35.87 0 0 1 .731-2.854l1.032-3.454h1.942l-2.721 8.083z',
                                                        },
                                                      }),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                              s(
                                                'span',
                                                { staticClass: 'export-desc' },
                                                [t._v('export all to csv')],
                                              ),
                                            ],
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                ],
                                1,
                              ),
                              s(
                                'b-dropdown',
                                {
                                  staticClass: 'mb-2',
                                  attrs: {
                                    triggers: ['hover'],
                                    'aria-role': 'list',
                                  },
                                  scopedSlots: t._u(
                                    [
                                      {
                                        key: 'trigger',
                                        fn: function () {
                                          return [
                                            s('b-button', {
                                              staticClass:
                                                'is-uppercase has-text-weight-semibold',
                                              attrs: {
                                                disabled:
                                                  t.isLoading ||
                                                  0 === t.emailList.length,
                                                label:
                                                  'export email (' +
                                                  t.emailList.length +
                                                  ')',
                                                type: 'is-primary',
                                                'icon-left': 'download',
                                                'icon-right': 'caret-down',
                                              },
                                            }),
                                          ]
                                        },
                                        proxy: !0,
                                      },
                                    ],
                                    null,
                                    !1,
                                    3906035879,
                                  ),
                                },
                                [
                                  t.emailList.length > 0
                                    ? s(
                                        'b-dropdown-item',
                                        {
                                          attrs: { 'aria-role': 'listitem' },
                                          on: {
                                            click: function (e) {
                                              return t.handleDownload(
                                                'email',
                                                t.emailList,
                                                'xlsx',
                                              )
                                            },
                                          },
                                        },
                                        [
                                          s(
                                            'div',
                                            { staticClass: 'export-menu-item' },
                                            [
                                              s(
                                                'span',
                                                { staticClass: 'i-format' },
                                                [
                                                  s(
                                                    'svg',
                                                    {
                                                      attrs: {
                                                        xmlns:
                                                          'http://www.w3.org/2000/svg',
                                                        'aria-hidden': 'true',
                                                        role: 'img',
                                                        width: '1em',
                                                        height: '1em',
                                                        preserveAspectRatio:
                                                          'xMidYMid meet',
                                                        viewBox: '0 0 512 512',
                                                      },
                                                    },
                                                    [
                                                      s('path', {
                                                        attrs: {
                                                          fill: 'currentColor',
                                                          d:
                                                            'M453.547 273.449H372.12v-40.714h81.427v40.714zm0 23.264H372.12v40.714h81.427v-40.714zm0-191.934H372.12v40.713h81.427V104.78zm0 63.978H372.12v40.713h81.427v-40.713zm0 191.934H372.12v40.714h81.427V360.69zm56.242 80.264c-2.326 12.098-16.867 12.388-26.58 12.796H302.326v52.345h-36.119L0 459.566V52.492L267.778 5.904h34.548v46.355h174.66c9.83.407 20.648-.291 29.197 5.583c5.991 8.608 5.41 19.543 5.817 29.43l-.233 302.791c-.29 16.925 1.57 34.2-1.978 50.892zm-296.51-91.256c-16.052-32.57-32.395-64.909-48.39-97.48c15.82-31.698 31.408-63.512 46.937-95.327c-13.203.64-26.406 1.454-39.55 2.385c-9.83 23.904-21.288 47.169-28.965 71.888c-7.154-23.323-16.634-45.774-25.3-68.515c-12.796.698-25.592 1.454-38.387 2.21c13.493 29.78 27.86 59.15 40.946 89.104c-15.413 29.081-29.837 58.57-44.785 87.825c12.737.523 25.475 1.047 38.212 1.221c9.074-23.148 20.357-45.424 28.267-69.038c7.096 25.359 19.135 48.798 29.023 73.051c14.017.99 27.976 1.862 41.993 2.676zM484.26 79.882H302.326v24.897h46.53v40.713h-46.53v23.265h46.53v40.713h-46.53v23.265h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v26.897H484.26V79.882z',
                                                        },
                                                      }),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                              s(
                                                'span',
                                                { staticClass: 'export-desc' },
                                                [t._v('export email to xlsx')],
                                              ),
                                            ],
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                  t.emailList.length > 0
                                    ? s(
                                        'b-dropdown-item',
                                        {
                                          attrs: { 'aria-role': 'listitem' },
                                          on: {
                                            click: function (e) {
                                              return t.handleDownload(
                                                'email',
                                                t.emailList,
                                                'csv',
                                              )
                                            },
                                          },
                                        },
                                        [
                                          s(
                                            'div',
                                            { staticClass: 'export-menu-item' },
                                            [
                                              s(
                                                'span',
                                                {
                                                  staticClass: 'i-format',
                                                  staticStyle: {
                                                    'font-size': '34px',
                                                  },
                                                },
                                                [
                                                  s(
                                                    'svg',
                                                    {
                                                      attrs: {
                                                        xmlns:
                                                          'http://www.w3.org/2000/svg',
                                                        'aria-hidden': 'true',
                                                        role: 'img',
                                                        width: '1em',
                                                        height: '1em',
                                                        preserveAspectRatio:
                                                          'xMidYMid meet',
                                                        viewBox: '0 0 40 40',
                                                      },
                                                    },
                                                    [
                                                      s('path', {
                                                        attrs: {
                                                          fill: 'currentColor',
                                                          d:
                                                            'M30.918 15.983h-.678v-3.271a.448.448 0 0 0-.006-.062a.541.541 0 0 0-.132-.358L24.66 6.075l-.004-.004a.566.566 0 0 0-.11-.092l-.036-.022a.548.548 0 0 0-.109-.046l-.03-.01a.539.539 0 0 0-.127-.016H10.867c-.611 0-1.107.497-1.107 1.107v8.99h-.678c-.874 0-1.582.708-1.582 1.582v8.228c0 .873.709 1.582 1.582 1.582h.678v5.632c0 .61.496 1.107 1.107 1.107h18.266c.61 0 1.107-.497 1.107-1.107v-5.632h.678c.873 0 1.582-.708 1.582-1.582v-8.228c0-.873-.708-1.581-1.582-1.581zM10.867 6.992H23.69v5.664c0 .306.248.553.554.553h4.89v2.773H10.867v-8.99zm8.282 15.168c-1.344-.48-2.231-1.224-2.231-2.399c0-1.379 1.164-2.422 3.059-2.422c.924 0 1.583.18 2.063.407l-.408 1.463a3.794 3.794 0 0 0-1.679-.383c-.792 0-1.176.371-1.176.779c0 .516.443.743 1.499 1.139c1.428.528 2.087 1.271 2.087 2.411c0 1.356-1.031 2.507-3.25 2.507c-.924 0-1.835-.252-2.291-.504l.372-1.499a4.613 4.613 0 0 0 2.026.504c.84 0 1.284-.349 1.284-.876c0-.504-.383-.791-1.355-1.127zm-9.526-.552c0-2.747 1.967-4.27 4.413-4.27c.948 0 1.667.191 1.991.348l-.384 1.451a3.85 3.85 0 0 0-1.535-.3c-1.439 0-2.566.875-2.566 2.674c0 1.607.959 2.627 2.578 2.627c.564 0 1.164-.107 1.535-.264l.265 1.439c-.324.155-1.092.348-2.063.348c-2.795.001-4.234-1.75-4.234-4.053zm19.51 11.1H10.867v-5.333h18.266v5.333zm-1.478-7.166H25.52l-2.59-8.084h2.003l.983 3.419c.275.971.527 1.883.719 2.89h.036a35.87 35.87 0 0 1 .731-2.854l1.032-3.454h1.942l-2.721 8.083z',
                                                        },
                                                      }),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                              s(
                                                'span',
                                                { staticClass: 'export-desc' },
                                                [t._v('export email to csv')],
                                              ),
                                            ],
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                ],
                                1,
                              ),
                              s(
                                'b-dropdown',
                                {
                                  staticClass: 'mb-2',
                                  attrs: {
                                    triggers: ['hover'],
                                    'aria-role': 'list',
                                  },
                                  scopedSlots: t._u(
                                    [
                                      {
                                        key: 'trigger',
                                        fn: function () {
                                          return [
                                            s('b-button', {
                                              staticClass:
                                                'is-uppercase has-text-weight-semibold',
                                              attrs: {
                                                disabled:
                                                  t.isLoading ||
                                                  0 === t.phoneList.length,
                                                label:
                                                  'export phone (' +
                                                  t.phoneList.length +
                                                  ')',
                                                type: 'is-primary',
                                                'icon-left': 'download',
                                                'icon-right': 'caret-down',
                                              },
                                            }),
                                          ]
                                        },
                                        proxy: !0,
                                      },
                                    ],
                                    null,
                                    !1,
                                    3668991159,
                                  ),
                                },
                                [
                                  t.phoneList.length > 0
                                    ? s(
                                        'b-dropdown-item',
                                        {
                                          attrs: { 'aria-role': 'listitem' },
                                          on: {
                                            click: function (e) {
                                              return t.handleDownload(
                                                'phone',
                                                t.phoneList,
                                                'xlsx',
                                              )
                                            },
                                          },
                                        },
                                        [
                                          s(
                                            'div',
                                            { staticClass: 'export-menu-item' },
                                            [
                                              s(
                                                'span',
                                                { staticClass: 'i-format' },
                                                [
                                                  s(
                                                    'svg',
                                                    {
                                                      attrs: {
                                                        xmlns:
                                                          'http://www.w3.org/2000/svg',
                                                        'aria-hidden': 'true',
                                                        role: 'img',
                                                        width: '1em',
                                                        height: '1em',
                                                        preserveAspectRatio:
                                                          'xMidYMid meet',
                                                        viewBox: '0 0 512 512',
                                                      },
                                                    },
                                                    [
                                                      s('path', {
                                                        attrs: {
                                                          fill: 'currentColor',
                                                          d:
                                                            'M453.547 273.449H372.12v-40.714h81.427v40.714zm0 23.264H372.12v40.714h81.427v-40.714zm0-191.934H372.12v40.713h81.427V104.78zm0 63.978H372.12v40.713h81.427v-40.713zm0 191.934H372.12v40.714h81.427V360.69zm56.242 80.264c-2.326 12.098-16.867 12.388-26.58 12.796H302.326v52.345h-36.119L0 459.566V52.492L267.778 5.904h34.548v46.355h174.66c9.83.407 20.648-.291 29.197 5.583c5.991 8.608 5.41 19.543 5.817 29.43l-.233 302.791c-.29 16.925 1.57 34.2-1.978 50.892zm-296.51-91.256c-16.052-32.57-32.395-64.909-48.39-97.48c15.82-31.698 31.408-63.512 46.937-95.327c-13.203.64-26.406 1.454-39.55 2.385c-9.83 23.904-21.288 47.169-28.965 71.888c-7.154-23.323-16.634-45.774-25.3-68.515c-12.796.698-25.592 1.454-38.387 2.21c13.493 29.78 27.86 59.15 40.946 89.104c-15.413 29.081-29.837 58.57-44.785 87.825c12.737.523 25.475 1.047 38.212 1.221c9.074-23.148 20.357-45.424 28.267-69.038c7.096 25.359 19.135 48.798 29.023 73.051c14.017.99 27.976 1.862 41.993 2.676zM484.26 79.882H302.326v24.897h46.53v40.713h-46.53v23.265h46.53v40.713h-46.53v23.265h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v26.897H484.26V79.882z',
                                                        },
                                                      }),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                              s(
                                                'span',
                                                { staticClass: 'export-desc' },
                                                [t._v('export phone to xlsx')],
                                              ),
                                            ],
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                  t.phoneList.length > 0
                                    ? s(
                                        'b-dropdown-item',
                                        {
                                          attrs: { 'aria-role': 'listitem' },
                                          on: {
                                            click: function (e) {
                                              return t.handleDownload(
                                                'phone',
                                                t.phoneList,
                                                'csv',
                                              )
                                            },
                                          },
                                        },
                                        [
                                          s(
                                            'div',
                                            { staticClass: 'export-menu-item' },
                                            [
                                              s(
                                                'span',
                                                {
                                                  staticClass: 'i-format',
                                                  staticStyle: {
                                                    'font-size': '34px',
                                                  },
                                                },
                                                [
                                                  s(
                                                    'svg',
                                                    {
                                                      attrs: {
                                                        xmlns:
                                                          'http://www.w3.org/2000/svg',
                                                        'aria-hidden': 'true',
                                                        role: 'img',
                                                        width: '1em',
                                                        height: '1em',
                                                        preserveAspectRatio:
                                                          'xMidYMid meet',
                                                        viewBox: '0 0 40 40',
                                                      },
                                                    },
                                                    [
                                                      s('path', {
                                                        attrs: {
                                                          fill: 'currentColor',
                                                          d:
                                                            'M30.918 15.983h-.678v-3.271a.448.448 0 0 0-.006-.062a.541.541 0 0 0-.132-.358L24.66 6.075l-.004-.004a.566.566 0 0 0-.11-.092l-.036-.022a.548.548 0 0 0-.109-.046l-.03-.01a.539.539 0 0 0-.127-.016H10.867c-.611 0-1.107.497-1.107 1.107v8.99h-.678c-.874 0-1.582.708-1.582 1.582v8.228c0 .873.709 1.582 1.582 1.582h.678v5.632c0 .61.496 1.107 1.107 1.107h18.266c.61 0 1.107-.497 1.107-1.107v-5.632h.678c.873 0 1.582-.708 1.582-1.582v-8.228c0-.873-.708-1.581-1.582-1.581zM10.867 6.992H23.69v5.664c0 .306.248.553.554.553h4.89v2.773H10.867v-8.99zm8.282 15.168c-1.344-.48-2.231-1.224-2.231-2.399c0-1.379 1.164-2.422 3.059-2.422c.924 0 1.583.18 2.063.407l-.408 1.463a3.794 3.794 0 0 0-1.679-.383c-.792 0-1.176.371-1.176.779c0 .516.443.743 1.499 1.139c1.428.528 2.087 1.271 2.087 2.411c0 1.356-1.031 2.507-3.25 2.507c-.924 0-1.835-.252-2.291-.504l.372-1.499a4.613 4.613 0 0 0 2.026.504c.84 0 1.284-.349 1.284-.876c0-.504-.383-.791-1.355-1.127zm-9.526-.552c0-2.747 1.967-4.27 4.413-4.27c.948 0 1.667.191 1.991.348l-.384 1.451a3.85 3.85 0 0 0-1.535-.3c-1.439 0-2.566.875-2.566 2.674c0 1.607.959 2.627 2.578 2.627c.564 0 1.164-.107 1.535-.264l.265 1.439c-.324.155-1.092.348-2.063.348c-2.795.001-4.234-1.75-4.234-4.053zm19.51 11.1H10.867v-5.333h18.266v5.333zm-1.478-7.166H25.52l-2.59-8.084h2.003l.983 3.419c.275.971.527 1.883.719 2.89h.036a35.87 35.87 0 0 1 .731-2.854l1.032-3.454h1.942l-2.721 8.083z',
                                                        },
                                                      }),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                              s(
                                                'span',
                                                { staticClass: 'export-desc' },
                                                [t._v('export phone to csv')],
                                              ),
                                            ],
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                      )
                    : t._e(),
                  s(
                    'div',
                    {
                      staticClass: 'm-4 pb-5',
                      staticStyle: {
                        position: 'relative',
                        'min-height': '300px',
                      },
                    },
                    [
                      s(
                        'b-table',
                        {
                          attrs: {
                            data: t.userList,
                            paginated: !0,
                            'per-page': 20,
                            'current-page': t.currentPage,
                            'pagination-simple': !1,
                            'pagination-position': 'bottom',
                            'pagination-rounded': !1,
                            'aria-next-label': 'Next page',
                            'aria-previous-label': 'Previous page',
                            'aria-page-label': 'Page',
                            'aria-current-label': 'Current page',
                            'default-sort-direction': 'asc',
                            'sort-icon': 'arrow-up',
                            'sort-icon-size': 'is-small',
                            'default-sort': 'id',
                            'custom-row-key': 'id',
                          },
                          on: {
                            'update:currentPage': function (e) {
                              t.currentPage = e
                            },
                            'update:current-page': function (e) {
                              t.currentPage = e
                            },
                          },
                        },
                        [
                          s('b-table-column', {
                            attrs: {
                              field: 'id',
                              label: 'ID',
                              sortable: '',
                              numeric: '',
                            },
                            scopedSlots: t._u([
                              {
                                key: 'default',
                                fn: function (e) {
                                  return [t._v(' ' + t._s(e.row.id) + ' ')]
                                },
                              },
                            ]),
                          }),
                          s('b-table-column', {
                            attrs: { field: 'avatar', label: 'Avatar' },
                            scopedSlots: t._u([
                              {
                                key: 'default',
                                fn: function (e) {
                                  return [
                                    e.row.avatar
                                      ? s('b-image', {
                                          staticClass: 'is-48x48',
                                          attrs: {
                                            src:
                                              'https://ig1.echobot.workers.dev/' +
                                              e.row.avatar,
                                            'src-fallback':
                                              'https://echobot.dev/avatar-d.png',
                                            alt: e.row.userName,
                                            rounded: !0,
                                          },
                                        })
                                      : t._e(),
                                  ]
                                },
                              },
                            ]),
                          }),
                          s('b-table-column', {
                            attrs: {
                              field: 'userName',
                              label: 'User',
                              sortable: '',
                            },
                            scopedSlots: t._u([
                              {
                                key: 'default',
                                fn: function (e) {
                                  return [
                                    t._v(' ' + t._s(e.row.fullName)),
                                    e.row.fullName ? s('br') : t._e(),
                                    s(
                                      'a',
                                      {
                                        directives: [
                                          {
                                            name: 'show',
                                            rawName: 'v-show',
                                            value: e.row.userName,
                                            expression: 'props.row.userName',
                                          },
                                        ],
                                        attrs: {
                                          href:
                                            'https://www.instagram.com/' +
                                            e.row.userName +
                                            '/',
                                          target: '_blank',
                                          title:
                                            'https://www.instagram.com/' +
                                            e.row.userName +
                                            '/',
                                        },
                                      },
                                      [t._v('@' + t._s(e.row.userName))],
                                    ),
                                    s('br'),
                                    'YES' === e.row.isPrivate
                                      ? s('b-tag', [t._v('Private Account')])
                                      : t._e(),
                                  ]
                                },
                              },
                            ]),
                          }),
                          s('b-table-column', {
                            attrs: {
                              field: 'followers',
                              label: 'Followers',
                              sortable: '',
                            },
                            scopedSlots: t._u([
                              {
                                key: 'default',
                                fn: function (e) {
                                  return [
                                    t._v(' ' + t._s(e.row.followers) + ' '),
                                  ]
                                },
                              },
                            ]),
                          }),
                          s('b-table-column', {
                            attrs: {
                              field: 'following',
                              label: 'Following',
                              sortable: '',
                            },
                            scopedSlots: t._u([
                              {
                                key: 'default',
                                fn: function (e) {
                                  return [
                                    t._v(' ' + t._s(e.row.following) + ' '),
                                  ]
                                },
                              },
                            ]),
                          }),
                          s('b-table-column', {
                            attrs: {
                              field: 'post',
                              label: 'Post',
                              sortable: '',
                            },
                            scopedSlots: t._u([
                              {
                                key: 'default',
                                fn: function (e) {
                                  return [t._v(' ' + t._s(e.row.post) + ' ')]
                                },
                              },
                            ]),
                          }),
                          s('b-table-column', {
                            attrs: {
                              field: 'email',
                              label: 'Email',
                              sortable: '',
                            },
                            scopedSlots: t._u([
                              {
                                key: 'default',
                                fn: function (e) {
                                  return [
                                    e.row.email
                                      ? s('span', [t._v(t._s(e.row.email))])
                                      : s(
                                          'span',
                                          {
                                            staticClass: 'has-text-grey-light',
                                          },
                                          [t._v('Not public')],
                                        ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          s('b-table-column', {
                            attrs: { field: 'phone', label: 'Phone' },
                            scopedSlots: t._u([
                              {
                                key: 'default',
                                fn: function (e) {
                                  return [
                                    e.row.phone
                                      ? s('span', [t._v(t._s(e.row.phone))])
                                      : s(
                                          'span',
                                          {
                                            staticClass: 'has-text-grey-light',
                                          },
                                          [t._v('Not public')],
                                        ),
                                  ]
                                },
                              },
                            ]),
                          }),
                          s('b-table-column', {
                            attrs: { field: 'city', label: 'City' },
                            scopedSlots: t._u([
                              {
                                key: 'default',
                                fn: function (e) {
                                  return [
                                    t._v(' ' + t._s(e.row.city || '-') + ' '),
                                  ]
                                },
                              },
                            ]),
                          }),
                          s('b-table-column', {
                            attrs: {
                              field: 'bio',
                              label: 'Biography',
                              width: '240',
                            },
                            scopedSlots: t._u([
                              {
                                key: 'default',
                                fn: function (e) {
                                  return [
                                    t._v(' ' + t._s(e.row.bio || '-') + ' '),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1,
                      ),
                      s('b-loading', {
                        attrs: { 'is-full-page': !1 },
                        model: {
                          value: t.isLoading,
                          callback: function (e) {
                            t.isLoading = e
                          },
                          expression: 'isLoading',
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ]),
            s('p', { staticClass: 'has-text-centered py-3' }, [
              t._v('© 2021 soletstalkapp'),
            ]),
            s(
              'b-modal',
              {
                attrs: { width: 460 },
                model: {
                  value: t.isShowProUpgradePop,
                  callback: function (e) {
                    t.isShowProUpgradePop = e
                  },
                  expression: 'isShowProUpgradePop',
                },
              },
              [
                s(
                  'div',
                  { staticClass: 'py-5 px-6 has-background-white' },
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
                              attrs: { fill: 'none', d: 'M0 0h24v24H0z' },
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
                      s('span', { staticClass: 'has-text-weight-bold' }, [
                        t._v('unlimited'),
                      ]),
                      t._v(' emails and unlock all features. '),
                    ]),
                    s(
                      'b-button',
                      {
                        staticClass: 'has-text-weight-semibold',
                        attrs: { type: 'is-primary', expanded: '' },
                        on: {
                          click: function (e) {
                            t.isProModalActive = !0
                          },
                        },
                      },
                      [t._v('Upgrade Now')],
                    ),
                  ],
                  1,
                ),
              ],
            ),
            s(
              'b-modal',
              {
                attrs: { width: 580 },
                model: {
                  value: t.isProModalActive,
                  callback: function (e) {
                    t.isProModalActive = e
                  },
                  expression: 'isProModalActive',
                },
              },
              [
                s(
                  'div',
                  { staticClass: 'p-4 has-background-white' },
                  [s('Pro', { attrs: { subscription: t.subscription } })],
                  1,
                ),
              ],
            ),
            s(
              'b-modal',
              {
                attrs: { width: 460, 'can-cancel': !1 },
                model: {
                  value: t.isLoginModalActive,
                  callback: function (e) {
                    t.isLoginModalActive = e
                  },
                  expression: 'isLoginModalActive',
                },
              },
              [
                s(
                  'div',
                  { staticClass: 'p-6 my-4 has-background-white' },
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
                          'is-size-6 has-text-grey-light py-5 has-text-centered',
                      },
                      [t._v(' Please sign in to save your settings. ')],
                    ),
                    s(
                      'b-button',
                      {
                        staticClass: 'mb-5',
                        attrs: { expanded: '' },
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
              ],
            ),
          ],
          1,
        )
      },
      n = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a('div', { staticClass: 'logo' }, )
        },
      ],
      o = s('5530'),
      r = s('3835'),
      c = s('1da1'),
      l =
        (s('96cf'),
        s('4de4'),
        s('d3b7'),
        s('caad'),
        s('2532'),
        s('ac1f'),
        s('5319'),
        s('1276'),
        s('4d63'),
        s('c607'),
        s('2c3e'),
        s('25f0'),
        s('466d'),
        s('e9c4'),
        s('99af'),
        s('fb6a'),
        s('d81d'),
        s('a434'),
        s('c740'),
        s('b0c0'),
        s('159b'),
        s('9845')),
      u = s.n(l),
      d = s('bc3a'),
      p = s.n(d),
      m = s('c832'),
      g = s.n(m),
      h = (s('3ca3'), s('ddb0'), s('2b3d'), s('9861'), s('369b')),
      f = s.n(h),
      v = s('5e85'),
      w = s.n(v)
    function b(t, e) {
      var s = f.a.unparse(t),
        a = new Blob(['\ufeff' + s], { type: 'text/csv;charset=utf-8;' }),
        i = URL.createObjectURL(a),
        n = document.createElement('a')
      n.setAttribute('href', i), n.setAttribute('download', e), n.click()
    }
    function y(t, e) {
      var s = { fileName: e }
      w()(t, s)
    }
    function C(t, e) {
      return Math.floor(Math.random() * (e - t + 1) + t)
    }
    var x = s('fa20'),
      _ = s('a4af'),
      k = {
        name: 'App',
        data: function () {
          return {
            user: {},
            insLogged: !1,
            insCsrfToken: '',
            ins: '',
            type: 0,
            extractionType: '',
            insUser: {},
            currentFollowCount: 0,
            isNoFollow: !1,
            insHashtag: {},
            insLike: {},
            insComment: {},
            insLocation: {},
            pageInfo: { end_cursor: '', has_next_page: !0 },
            extractLimit: 1e8,
            followList: [],
            loadUserIndex: 0,
            isPaused: !1,
            isComplete: !1,
            isLoading: !1,
            currentPage: 1,
            isShowProUpgradePop: !1,
            isProModalActive: !1,
            isLoginModalActive: !1,
            subscription: {},
            version: '',
            trialCount: 50,
            lastTrialCount: 0,
            extractEmailCount: 0,
            lastScrapedCount: 0,
            listTimer: null,
            detailTimer: null,
            listCatchTimes: 0,
            detailCatchTimes: 0,
            currentCursor: '',
            cursorCountList: [],
            historyId: '',
            lastHistoryItem: {
              id: '',
              token: '',
              updateTimes: 0,
              scrapedCount: 0,
              cursorScrapedCount: 0,
              count: 0,
            },
            getListTimes: 0,
            skipCount: 0,
            lastUpdateHistoryDataStr: '',
            configs: {},
          }
        },
        computed: {
          userList: function () {
            return this.followList.filter(function (t) {
              return t.loaded
            })
          },
          emailList: function () {
            return this.followList.filter(function (t) {
              return '' !== t.email
            })
          },
          phoneList: function () {
            return this.followList.filter(function (t) {
              return '' !== t.phone
            })
          },
        },
        created: function () {
          var t = u.a.runtime.getManifest(),
            e = t.version
          ;(this.version = 'v'.concat(e)), this.startWorking()
        },
        methods: {
          getUserInfo: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                var s, a
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s = {}),
                            (e.prev = 1),
                            (e.next = 4),
                            Object(x['b'])()
                          )
                        case 4:
                          ;(a = e.sent),
                            'ok' === a.status &&
                              ((t.user = a.user), (s = t.user)),
                            (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8),
                            (e.t0 = e['catch'](1)),
                            t.$buefy.toast.open(''.concat(e.t0))
                        case 11:
                          return e.abrupt('return', s)
                        case 12:
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
          handleLogin: function () {
            var t = this
            Object(x['h'])().then(
              function (e) {
                'ok' === e.status && t.startWorking()
              },
              function () {
                t.$buefy.snackbar.open({
                  message:
                    'You did not complete the authorization or something went wrong.',
                  type: 'is-danger',
                  position: 'is-bottom-right',
                  queue: !1,
                  duration: 3e3,
                })
              },
            )
          },
          handleGotoIns: function () {
            u.a.tabs.create({ url: 'https://www.instagram.com/' })
          },
          getInsConfigs: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                var s, a
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s = {}),
                            (e.prev = 1),
                            (e.next = 4),
                            Object(x['c'])()
                          )
                        case 4:
                          ;(a = e.sent),
                            'ok' === a.status && (s = a),
                            (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8),
                            (e.t0 = e['catch'](1)),
                            console.log(e.t0)
                        case 11:
                          return (
                            'ok' !== s.status &&
                              (s = {
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
                            s.ApiProfileInfo &&
                              s.ApiProfileInfo.url.includes('${@}$') &&
                              (s.ApiProfileInfo.url = s.ApiProfileInfo.url.replace(
                                '${@}$',
                                t.ins,
                              )),
                            s.ApiProfileInfo2 &&
                              s.ApiProfileInfo2.url.includes('${@}$') &&
                              (s.ApiProfileInfo2.url = s.ApiProfileInfo2.url.replace(
                                '${@}$',
                                t.ins,
                              )),
                            s.ProfileInfoFromHtml &&
                              s.ProfileInfoFromHtml.url.includes('${@}$') &&
                              (s.ProfileInfoFromHtml.url = s.ProfileInfoFromHtml.url.replace(
                                '${@}$',
                                t.ins,
                              )),
                            e.abrupt('return', s)
                          )
                        case 16:
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
          loadProfileInfo: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                var s,
                  a,
                  i,
                  n,
                  o,
                  r,
                  c,
                  l,
                  u,
                  d,
                  m,
                  h,
                  f,
                  v,
                  w,
                  b,
                  y,
                  C,
                  x,
                  _,
                  k,
                  L
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t.isNoFollow = !1),
                            (s = {}),
                            (e.prev = 2),
                            (e.next = 5),
                            p.a.get(t.configs.ApiProfileInfo.url)
                          )
                        case 5:
                          if (
                            ((a = e.sent),
                            (i = g()(a, t.configs.ApiProfileInfo.checkKey, '')),
                            (n = t.configs.ApiProfileInfo.checkValue),
                            n && (i = i === n),
                            i)
                          ) {
                            for (
                              o = [],
                                r = t.configs.ApiProfileInfo.dataKeys.split(
                                  '|',
                                ),
                                c = 0;
                              c < r.length;
                              c++
                            )
                              (l = r[c]),
                                (u = g()(a, l, '')),
                                u ? o.push(u) : o.push('')
                            ;(s = {
                              id: o[0],
                              name: o[1],
                              avatar: o[2],
                              followerCount: o[3] || 0,
                              followingCount: o[4] || 0,
                              is_private: o[5] || !1,
                            }),
                              console.log(s)
                          }
                          e.next = 15
                          break
                        case 12:
                          ;(e.prev = 12),
                            (e.t0 = e['catch'](2)),
                            console.log(e.t0)
                        case 15:
                          if (s.id) {
                            e.next = 29
                            break
                          }
                          return (
                            (e.prev = 16),
                            (e.next = 19),
                            p.a.get(t.configs.ApiProfileInfo2.url, {
                              headers: t.configs.CustomHeaders,
                            })
                          )
                        case 19:
                          if (
                            ((d = e.sent),
                            (m = g()(
                              d,
                              t.configs.ApiProfileInfo2.checkKey,
                              '',
                            )),
                            (h = t.configs.ApiProfileInfo2.checkValue),
                            h && (m = m === h),
                            m)
                          ) {
                            for (
                              f = [],
                                v = t.configs.ApiProfileInfo2.dataKeys.split(
                                  '|',
                                ),
                                w = 0;
                              w < v.length;
                              w++
                            )
                              (b = v[w]),
                                (y = g()(d, b, '')),
                                y ? f.push(y) : f.push('')
                            ;(s = {
                              id: f[0],
                              name: f[1],
                              avatar: f[2],
                              followerCount: f[3] || 0,
                              followingCount: f[4] || 0,
                              is_private: f[5] || !1,
                            }),
                              console.log(s)
                          }
                          e.next = 29
                          break
                        case 26:
                          ;(e.prev = 26),
                            (e.t1 = e['catch'](16)),
                            console.log(e.t1)
                        case 29:
                          if (s.id) {
                            e.next = 47
                            break
                          }
                          return (
                            (e.prev = 30),
                            (e.next = 33),
                            p.a.get(t.configs.ProfileInfoFromHtml.url)
                          )
                        case 33:
                          ;(C = e.sent),
                            (C = C.data),
                            (s = { name: t.ins, from: 'html' }),
                            (x = new RegExp(
                              decodeURIComponent(
                                t.configs.ProfileInfoFromHtml.reg_id,
                              ),
                            )),
                            (_ = C.match(x)),
                            (s.id = (_ && _[1]) || ''),
                            (k = new RegExp(
                              decodeURIComponent(
                                t.configs.ProfileInfoFromHtml.reg_avatar,
                              ),
                            )),
                            (L = C.match(k)),
                            (s.avatar =
                              (L && L[1] && L[1].replace(/\\u0026/g, '&')) ||
                              ''),
                            (e.next = 47)
                          break
                        case 44:
                          ;(e.prev = 44),
                            (e.t2 = e['catch'](30)),
                            console.log(e.t2)
                        case 47:
                          return (
                            0 === t.type
                              ? (s.count = s.followerCount)
                              : (s.count = s.followingCount),
                            (t.insUser = s),
                            e.abrupt(
                              'return',
                              new Promise(function (e) {
                                t.insUser.is_private
                                  ? (t.$buefy.dialog.confirm({
                                      message:
                                        "This is a private account, can't extract.",
                                      confirmText: 'OK',
                                      type: 'is-danger',
                                      hasIcon: !0,
                                      canCancel: !1,
                                      onConfirm: function () {
                                        window.close()
                                      },
                                    }),
                                    (t.isPaused = !0),
                                    e({ closeConfirm: !1 }))
                                  : ('html' === t.insUser.from
                                      ? ((t.currentFollowCount = 1),
                                        (t.isNoFollow = !1))
                                      : ((t.currentFollowCount =
                                          t.insUser.count || 0),
                                        t.currentFollowCount <= 0 &&
                                          (t.isNoFollow = !0)),
                                    e({ closeConfirm: !0 }))
                              }),
                            )
                          )
                        case 50:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [
                    [2, 12],
                    [16, 26],
                    [30, 44],
                  ],
                )
              }),
            )()
          },
          createIntervalRange: function () {
            return Object(c['a'])(
              regeneratorRuntime.mark(function t() {
                var e, s, a, i, n, o
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2), u.a.storage.local.get(['intervals'])
                        )
                      case 2:
                        return (
                          (e = t.sent),
                          (s = (e && e.intervals) || [2, 6]),
                          (a = Object(r['a'])(s, 2)),
                          (i = a[0]),
                          (n = a[1]),
                          (o = C(i, n)),
                          t.abrupt('return', o)
                        )
                      case 6:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              }),
            )()
          },
          loadFollowList: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t.isNoFollow) {
                          e.next = 3
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 3:
                        if (!t.isComplete) {
                          e.next = 6
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 6:
                        if (!t.isPaused) {
                          e.next = 9
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 9:
                        if (t.pageInfo.has_next_page) {
                          e.next = 12
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 12:
                        t.listTimer = setTimeout(
                          function () {
                            var e = t.followList.filter(function (t) {
                              return !t.loaded
                            })
                            0 === t.skipCount &&
                            t.getListTimes > 5 &&
                            e.length >= 40
                              ? t.loadFollowList()
                              : (t.getListTimes++,
                                p.a
                                  .get(
                                    'https://www.instagram.com/graphql/query/',
                                    {
                                      params: {
                                        query_hash:
                                          0 === t.type
                                            ? t.configs.QueryHashFollowers
                                            : t.configs.QueryHashFollowing,
                                        variables: JSON.stringify({
                                          id: t.insUser.id,
                                          first: 50,
                                          after: t.pageInfo.end_cursor,
                                        }),
                                      },
                                      headers: t.configs.CustomHeaders,
                                    },
                                  )
                                  .then(function (e) {
                                    if (
                                      e.data &&
                                      e.data.data &&
                                      e.data.data.user
                                    ) {
                                      t.listCatchTimes = 0
                                      var s = e.data.data,
                                        a = s && s.user,
                                        i =
                                          0 === t.type
                                            ? a.edge_followed_by
                                            : a.edge_follow,
                                        n = i.page_info,
                                        o = i.edges
                                      if (
                                        (console.log(
                                          '🚀 '
                                            .concat(
                                              new Date().toLocaleString(),
                                              ' loadFollowList ~ load list count ',
                                            )
                                            .concat(o.length),
                                        ),
                                        t.cursorCountList.some(function (e) {
                                          return (
                                            e.cursor === t.pageInfo.end_cursor
                                          )
                                        }) ||
                                          t.cursorCountList.push({
                                            cursor: t.pageInfo.end_cursor,
                                            count: o.length,
                                          }),
                                        t.skipCount > 0 &&
                                          (o.length > t.skipCount
                                            ? ((o = o.slice(t.skipCount)),
                                              (t.skipCount = 0))
                                            : ((t.skipCount =
                                                t.skipCount - o.length),
                                              (o = []))),
                                        (o = o.map(function (e, s) {
                                          return {
                                            id:
                                              t.lastScrapedCount +
                                              t.followList.length +
                                              s +
                                              1,
                                            avatar: e.node.profile_pic_url,
                                            userId: e.node.id,
                                            userName: e.node.username,
                                            fullName: e.node.full_name,
                                            followers: '',
                                            following: '',
                                            email: '',
                                            post: '',
                                            phone: '',
                                            city: '',
                                            address: '',
                                            isPrivate: '',
                                            isVerified: '',
                                            isBusiness: '',
                                            externalUrl: '',
                                            bio: '',
                                            cursor: t.pageInfo.end_cursor,
                                            loaded: !1,
                                          }
                                        })),
                                        (t.pageInfo = n),
                                        o.length > 0 &&
                                          (t.followList = t.followList.concat(
                                            o,
                                          )),
                                        t.followList.length >= t.extractLimit ||
                                          !t.pageInfo.has_next_page)
                                      )
                                        return void t.followList.splice(
                                          t.extractLimit,
                                          t.followList.length,
                                        )
                                    } else 'string' === typeof e.data && (t.$buefy.notification.open({ indefinite: !0, message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#30]</div>', position: 'is-bottom-right', type: 'is-danger', hasIcon: !0 }), (t.isPaused = !0))
                                    t.loadFollowList()
                                  })
                                  .catch(function (e) {
                                    return (
                                      console.log(
                                        '🚀 '.concat(
                                          new Date().toLocaleString(),
                                          ' loadFollowList ~ error',
                                        ),
                                        e.response,
                                      ),
                                      e.response && 302 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#6] '.concat(
                                              e.message || '',
                                              '</div>',
                                            ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : e.response &&
                                          400 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Instagram requires you to do a simple account verification. Please complete it and come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#7] '
                                              .concat(e.message || '', ' ')
                                              .concat(
                                                (e.response.data &&
                                                  e.response.data.message) ||
                                                  '',
                                                '</div>',
                                              ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : e.response &&
                                          429 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Due to frequent network requests, Instagram is temporarily blocking your access. You can pause and wait for 10 minutes, come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#8] '
                                              .concat(e.message || '', ' ')
                                              .concat(
                                                (e.response.data &&
                                                  e.response.data.message) ||
                                                  '',
                                                '</div>',
                                              ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : (t.listCatchTimes++,
                                          void (t.listCatchTimes < 5
                                            ? t.loadFollowList()
                                            : (t.$buefy.notification.open({
                                                indefinite: !0,
                                                message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#9] '.concat(
                                                  e.message || '',
                                                  '</div>',
                                                ),
                                                position: 'is-bottom-right',
                                                type: 'is-danger',
                                                hasIcon: !0,
                                              }),
                                              (t.isPaused = !0))))
                                    )
                                  })
                                  .finally(function () {
                                    t.isLoading = !1
                                  }))
                          },
                          0 === t.getListTimes
                            ? 100
                            : t.listCatchTimes > 2
                            ? 1e4
                            : 5e3,
                        )
                      case 13:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          },
          loadPostsLikeOwnerList: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t.isComplete) {
                          e.next = 3
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 3:
                        if (!t.isPaused) {
                          e.next = 6
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 6:
                        if (t.pageInfo.has_next_page) {
                          e.next = 9
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 9:
                        t.listTimer = setTimeout(
                          function () {
                            var e = t.followList.filter(function (t) {
                              return !t.loaded
                            })
                            0 === t.skipCount &&
                            t.getListTimes > 5 &&
                            e.length >= 40
                              ? t.loadPostsLikeOwnerList()
                              : (t.getListTimes++,
                                console.log(
                                  '🚀 '.concat(
                                    new Date().toLocaleString(),
                                    ' loadPostsLikeOwnerList ~ request',
                                  ),
                                ),
                                console.log(t.pageInfo.end_cursor),
                                p.a
                                  .get(
                                    'https://www.instagram.com/graphql/query/',
                                    {
                                      params: {
                                        query_hash: t.configs.QueryHashLike,
                                        variables: JSON.stringify({
                                          shortcode: t.ins,
                                          first: 50,
                                          after: t.pageInfo.end_cursor,
                                          include_reel: !0,
                                        }),
                                      },
                                      headers: t.configs.CustomHeaders,
                                    },
                                  )
                                  .then(function (e) {
                                    if (
                                      e.data &&
                                      e.data.data &&
                                      e.data.data.shortcode_media
                                    ) {
                                      t.listCatchTimes = 0
                                      var s = e.data.data,
                                        a = s && s.shortcode_media,
                                        i = a.edge_liked_by
                                      t.insLike = {
                                        name: t.ins,
                                        count: i.count,
                                      }
                                      var n = i.page_info,
                                        o = i.edges
                                      if (
                                        ((o = o
                                          .filter(function (t, e, s) {
                                            return (
                                              e ===
                                              s.findIndex(function (e) {
                                                return e.node.id === t.node.id
                                              })
                                            )
                                          })
                                          .filter(function (e) {
                                            return !t.followList.some(function (
                                              t,
                                            ) {
                                              return t.userId === e.node.id
                                            })
                                          })),
                                        console.log(
                                          '🚀 '
                                            .concat(
                                              new Date().toLocaleString(),
                                              ' loadPostsLikeOwnerList ~ load list count ',
                                            )
                                            .concat(o.length),
                                          o,
                                        ),
                                        t.cursorCountList.some(function (e) {
                                          return (
                                            e.cursor === t.pageInfo.end_cursor
                                          )
                                        }) ||
                                          t.cursorCountList.push({
                                            cursor: t.pageInfo.end_cursor,
                                            count: o.length,
                                          }),
                                        t.skipCount > 0 &&
                                          (o.length > t.skipCount
                                            ? ((o = o.slice(t.skipCount)),
                                              (t.skipCount = 0))
                                            : ((t.skipCount =
                                                t.skipCount - o.length),
                                              (o = []))),
                                        (o = o.map(function (e, s) {
                                          return {
                                            id:
                                              t.lastScrapedCount +
                                              t.followList.length +
                                              s +
                                              1,
                                            avatar: e.node.profile_pic_url,
                                            userId: e.node.id,
                                            userName: e.node.username,
                                            fullName: e.node.full_name,
                                            followers: '',
                                            following: '',
                                            email: '',
                                            post: '',
                                            phone: '',
                                            city: '',
                                            address: '',
                                            isPrivate: '',
                                            isVerified: '',
                                            isBusiness: '',
                                            externalUrl: '',
                                            bio: '',
                                            cursor: t.pageInfo.end_cursor,
                                            loaded: !1,
                                          }
                                        })),
                                        (t.pageInfo = n),
                                        o.length > 0 &&
                                          (t.followList = t.followList.concat(
                                            o,
                                          )),
                                        t.followList.length >= t.extractLimit ||
                                          !t.pageInfo.has_next_page)
                                      )
                                        return void t.followList.splice(
                                          t.extractLimit,
                                          t.followList.length,
                                        )
                                    } else 'string' === typeof e.data && (t.$buefy.notification.open({ indefinite: !0, message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#10]</div>', position: 'is-bottom-right', type: 'is-danger', hasIcon: !0 }), (t.isPaused = !0))
                                    t.loadPostsLikeOwnerList()
                                  })
                                  .catch(function (e) {
                                    return (
                                      console.log(
                                        '🚀 '.concat(
                                          new Date().toLocaleString(),
                                          ' loadPostsLikeOwnerList ~ error',
                                        ),
                                        e.response,
                                      ),
                                      e.response && 302 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#11] '.concat(
                                              e.message || '',
                                              '</div>',
                                            ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : e.response &&
                                          400 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Instagram requires you to do a simple account verification. Please complete it and come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#12] '
                                              .concat(e.message || '', ' ')
                                              .concat(
                                                (e.response.data &&
                                                  e.response.data.message) ||
                                                  '',
                                                '</div>',
                                              ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : e.response &&
                                          429 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Due to frequent network requests, Instagram is temporarily blocking your access. You can pause and wait for 10 minutes, come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#13] '
                                              .concat(e.message || '', ' ')
                                              .concat(
                                                (e.response.data &&
                                                  e.response.data.message) ||
                                                  '',
                                                '</div>',
                                              ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : (t.listCatchTimes++,
                                          void (t.listCatchTimes < 5
                                            ? t.loadPostsLikeOwnerList()
                                            : (t.$buefy.notification.open({
                                                indefinite: !0,
                                                message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#14] '.concat(
                                                  e.message || '',
                                                  '</div>',
                                                ),
                                                position: 'is-bottom-right',
                                                type: 'is-danger',
                                                hasIcon: !0,
                                              }),
                                              (t.isPaused = !0))))
                                    )
                                  })
                                  .finally(function () {
                                    t.isLoading = !1
                                  }))
                          },
                          0 === t.getListTimes
                            ? 100
                            : t.listCatchTimes > 2
                            ? 1e4
                            : 5e3,
                        )
                      case 10:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          },
          loadPostsCommentOwnerList: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t.isComplete) {
                          e.next = 3
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 3:
                        if (!t.isPaused) {
                          e.next = 6
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 6:
                        if (t.pageInfo.has_next_page) {
                          e.next = 9
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 9:
                        t.listTimer = setTimeout(
                          function () {
                            var e = t.followList.filter(function (t) {
                              return !t.loaded
                            })
                            0 === t.skipCount &&
                            t.getListTimes > 5 &&
                            e.length >= 40
                              ? t.loadPostsCommentOwnerList()
                              : (t.getListTimes++,
                                p.a
                                  .get(
                                    'https://www.instagram.com/graphql/query/',
                                    {
                                      params: {
                                        query_hash: t.configs.QueryHashComment,
                                        variables: JSON.stringify({
                                          shortcode: t.ins,
                                          first: 50,
                                          after: t.pageInfo.end_cursor,
                                        }),
                                      },
                                      headers: t.configs.CustomHeaders,
                                    },
                                  )
                                  .then(function (e) {
                                    if (
                                      e.data &&
                                      e.data.data &&
                                      e.data.data.shortcode_media
                                    ) {
                                      t.listCatchTimes = 0
                                      var s = e.data.data,
                                        a = s && s.shortcode_media,
                                        i = a.edge_media_to_comment
                                      t.insComment = {
                                        name: t.ins,
                                        count: i.count,
                                      }
                                      var n = i.page_info,
                                        o = i.edges
                                      if (
                                        ((o = o
                                          .filter(function (t, e, s) {
                                            return (
                                              e ===
                                              s.findIndex(function (e) {
                                                return (
                                                  e.node.owner.id ===
                                                  t.node.owner.id
                                                )
                                              })
                                            )
                                          })
                                          .filter(function (e) {
                                            return !t.followList.some(function (
                                              t,
                                            ) {
                                              return (
                                                t.userId === e.node.owner.id
                                              )
                                            })
                                          })),
                                        console.log(
                                          '🚀 '
                                            .concat(
                                              new Date().toLocaleString(),
                                              ' loadPostsCommentOwnerList ~ load list count ',
                                            )
                                            .concat(o.length),
                                        ),
                                        t.cursorCountList.some(function (e) {
                                          return (
                                            e.cursor === t.pageInfo.end_cursor
                                          )
                                        }) ||
                                          t.cursorCountList.push({
                                            cursor: t.pageInfo.end_cursor,
                                            count: o.length,
                                          }),
                                        t.skipCount > 0 &&
                                          (o.length > t.skipCount
                                            ? ((o = o.slice(t.skipCount)),
                                              (t.skipCount = 0))
                                            : ((t.skipCount =
                                                t.skipCount - o.length),
                                              (o = []))),
                                        (o = o.map(function (e, s) {
                                          return {
                                            id:
                                              t.lastScrapedCount +
                                              t.followList.length +
                                              s +
                                              1,
                                            avatar: '',
                                            userId: e.node.owner.id,
                                            userName: '',
                                            fullName: '',
                                            followers: '',
                                            following: '',
                                            email: '',
                                            post: '',
                                            phone: '',
                                            city: '',
                                            address: '',
                                            isPrivate: '',
                                            isVerified: '',
                                            isBusiness: '',
                                            externalUrl: '',
                                            bio: '',
                                            cursor: t.pageInfo.end_cursor,
                                            loaded: !1,
                                          }
                                        })),
                                        (t.pageInfo = n),
                                        o.length > 0 &&
                                          (t.followList = t.followList.concat(
                                            o,
                                          )),
                                        t.followList.length >= t.extractLimit ||
                                          !t.pageInfo.has_next_page)
                                      )
                                        return void t.followList.splice(
                                          t.extractLimit,
                                          t.followList.length,
                                        )
                                    } else 'string' === typeof e.data && (t.$buefy.notification.open({ indefinite: !0, message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#29]</div>', position: 'is-bottom-right', type: 'is-danger', hasIcon: !0 }), (t.isPaused = !0))
                                    t.loadPostsCommentOwnerList()
                                  })
                                  .catch(function (e) {
                                    return (
                                      console.log(
                                        '🚀 '.concat(
                                          new Date().toLocaleString(),
                                          ' loadPostsCommentOwnerList ~ error',
                                        ),
                                        e.response,
                                      ),
                                      e.response && 302 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#15] '.concat(
                                              e.message || '',
                                              '</div>',
                                            ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : e.response &&
                                          400 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Instagram requires you to do a simple account verification. Please complete it and come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#16] '
                                              .concat(e.message || '', ' ')
                                              .concat(
                                                (e.response.data &&
                                                  e.response.data.message) ||
                                                  '',
                                                '</div>',
                                              ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : e.response &&
                                          429 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Due to frequent network requests, Instagram is temporarily blocking your access. You can pause and wait for 10 minutes, come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#17] '
                                              .concat(e.message || '', ' ')
                                              .concat(
                                                (e.response.data &&
                                                  e.response.data.message) ||
                                                  '',
                                                '</div>',
                                              ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : (t.listCatchTimes++,
                                          void (t.listCatchTimes < 5
                                            ? t.loadPostsCommentOwnerList()
                                            : (t.$buefy.notification.open({
                                                indefinite: !0,
                                                message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#18] '.concat(
                                                  e.message || '',
                                                  '</div>',
                                                ),
                                                position: 'is-bottom-right',
                                                type: 'is-danger',
                                                hasIcon: !0,
                                              }),
                                              (t.isPaused = !0))))
                                    )
                                  })
                                  .finally(function () {
                                    t.isLoading = !1
                                  }))
                          },
                          0 === t.getListTimes
                            ? 100
                            : t.listCatchTimes > 2
                            ? 1e4
                            : 5e3,
                        )
                      case 10:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          },
          loadHashtagPostsOwnerList: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t.isComplete) {
                          e.next = 3
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 3:
                        if (!t.isPaused) {
                          e.next = 6
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 6:
                        if (t.pageInfo.has_next_page) {
                          e.next = 9
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 9:
                        t.listTimer = setTimeout(
                          function () {
                            var e = t.followList.filter(function (t) {
                              return !t.loaded
                            })
                            0 === t.skipCount &&
                            t.getListTimes > 5 &&
                            e.length >= 40
                              ? t.loadHashtagPostsOwnerList()
                              : (t.getListTimes++,
                                console.log(
                                  '🚀 '.concat(
                                    new Date().toLocaleString(),
                                    ' loadHashtagPostsOwnerList ~ request',
                                  ),
                                ),
                                console.log(t.pageInfo.end_cursor),
                                p.a
                                  .get(
                                    'https://www.instagram.com/graphql/query/',
                                    {
                                      params: {
                                        query_hash: t.configs.QueryHashTag,
                                        variables: JSON.stringify({
                                          tag_name: t.ins,
                                          first: 50,
                                          after: t.pageInfo.end_cursor,
                                        }),
                                      },
                                      headers: t.configs.CustomHeaders,
                                    },
                                  )
                                  .then(function (e) {
                                    if (
                                      e.data &&
                                      e.data.data &&
                                      e.data.data.hashtag
                                    ) {
                                      t.listCatchTimes = 0
                                      var s = e.data.data,
                                        a = s && s.hashtag,
                                        i = a.edge_hashtag_to_media
                                      t.insHashtag = {
                                        profile_pic_url: a.profile_pic_url,
                                        name: a.name,
                                        count: i.count,
                                      }
                                      var n = i.page_info,
                                        o = i.edges
                                      if (
                                        ((o = o
                                          .filter(function (t, e, s) {
                                            return (
                                              e ===
                                              s.findIndex(function (e) {
                                                return (
                                                  e.node.owner.id ===
                                                  t.node.owner.id
                                                )
                                              })
                                            )
                                          })
                                          .filter(function (e) {
                                            return !t.followList.some(function (
                                              t,
                                            ) {
                                              return (
                                                t.userId === e.node.owner.id
                                              )
                                            })
                                          })),
                                        console.log(
                                          '🚀 '
                                            .concat(
                                              new Date().toLocaleString(),
                                              ' loadHashtagPostsOwnerList ~ load list count ',
                                            )
                                            .concat(o.length),
                                          o,
                                        ),
                                        t.cursorCountList.some(function (e) {
                                          return (
                                            e.cursor === t.pageInfo.end_cursor
                                          )
                                        }) ||
                                          t.cursorCountList.push({
                                            cursor: t.pageInfo.end_cursor,
                                            count: o.length,
                                          }),
                                        t.skipCount > 0 &&
                                          (o.length > t.skipCount
                                            ? ((o = o.slice(t.skipCount)),
                                              (t.skipCount = 0))
                                            : ((t.skipCount =
                                                t.skipCount - o.length),
                                              (o = []))),
                                        (o = o.map(function (e, s) {
                                          return {
                                            id:
                                              t.lastScrapedCount +
                                              t.followList.length +
                                              s +
                                              1,
                                            avatar: '',
                                            userId: e.node.owner.id,
                                            userName: '',
                                            fullName: '',
                                            followers: '',
                                            following: '',
                                            email: '',
                                            post: '',
                                            phone: '',
                                            city: '',
                                            address: '',
                                            isPrivate: '',
                                            isVerified: '',
                                            isBusiness: '',
                                            externalUrl: '',
                                            bio: '',
                                            cursor: t.pageInfo.end_cursor,
                                            loaded: !1,
                                          }
                                        })),
                                        (t.pageInfo = n),
                                        o.length > 0 &&
                                          (t.followList = t.followList.concat(
                                            o,
                                          )),
                                        t.followList.length >= t.extractLimit ||
                                          !t.pageInfo.has_next_page)
                                      )
                                        return void t.followList.splice(
                                          t.extractLimit,
                                          t.followList.length,
                                        )
                                    } else 'string' === typeof e.data && (t.$buefy.notification.open({ indefinite: !0, message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#19]</div>', position: 'is-bottom-right', type: 'is-danger', hasIcon: !0 }), (t.isPaused = !0))
                                    t.loadHashtagPostsOwnerList()
                                  })
                                  .catch(function (e) {
                                    return (
                                      console.log(
                                        '🚀 '.concat(
                                          new Date().toLocaleString(),
                                          ' loadHashtagPostsOwnerList ~ error',
                                        ),
                                        e.response,
                                      ),
                                      e.response && 302 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#20] '.concat(
                                              e.message || '',
                                              '</div>',
                                            ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : e.response &&
                                          400 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Instagram requires you to do a simple account verification. Please complete it and come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#21] '
                                              .concat(e.message || '', ' ')
                                              .concat(
                                                (e.response.data &&
                                                  e.response.data.message) ||
                                                  '',
                                                '</div>',
                                              ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : e.response &&
                                          429 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Due to frequent network requests, Instagram is temporarily blocking your access. You can pause and wait for 10 minutes, come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#22] '
                                              .concat(e.message || '', ' ')
                                              .concat(
                                                (e.response.data &&
                                                  e.response.data.message) ||
                                                  '',
                                                '</div>',
                                              ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : (t.listCatchTimes++,
                                          void (t.listCatchTimes < 5
                                            ? t.loadHashtagPostsOwnerList()
                                            : (t.$buefy.notification.open({
                                                indefinite: !0,
                                                message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#23] '.concat(
                                                  e.message || '',
                                                  '</div>',
                                                ),
                                                position: 'is-bottom-right',
                                                type: 'is-danger',
                                                hasIcon: !0,
                                              }),
                                              (t.isPaused = !0))))
                                    )
                                  })
                                  .finally(function () {
                                    t.isLoading = !1
                                  }))
                          },
                          0 === t.getListTimes
                            ? 100
                            : t.listCatchTimes > 2
                            ? 1e4
                            : 5e3,
                        )
                      case 10:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          },
          loadLocationPostsOwnerList: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t.isComplete) {
                          e.next = 3
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 3:
                        if (!t.isPaused) {
                          e.next = 6
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 6:
                        if (t.pageInfo.has_next_page) {
                          e.next = 9
                          break
                        }
                        return (t.isLoading = !1), e.abrupt('return')
                      case 9:
                        t.listTimer = setTimeout(
                          function () {
                            var e = t.followList.filter(function (t) {
                              return !t.loaded
                            })
                            0 === t.skipCount &&
                            t.getListTimes > 5 &&
                            e.length >= 40
                              ? t.loadLocationPostsOwnerList()
                              : (t.getListTimes++,
                                p.a
                                  .get(
                                    'https://www.instagram.com/graphql/query/',
                                    {
                                      params: {
                                        query_hash: t.configs.QueryHashLocation,
                                        variables: JSON.stringify({
                                          id: t.ins,
                                          first: 50,
                                          after: t.pageInfo.end_cursor,
                                        }),
                                      },
                                      headers: t.configs.CustomHeaders,
                                    },
                                  )
                                  .then(function (e) {
                                    if (
                                      e.data &&
                                      e.data.data &&
                                      e.data.data.location
                                    ) {
                                      t.listCatchTimes = 0
                                      var s = e.data.data,
                                        a = s && s.location,
                                        i = a.edge_location_to_media
                                      t.insLocation = {
                                        name: a.name,
                                        count: i.count,
                                      }
                                      var n = i.page_info,
                                        o = i.edges
                                      if (
                                        ((o = o
                                          .filter(function (t, e, s) {
                                            return (
                                              e ===
                                              s.findIndex(function (e) {
                                                return (
                                                  e.node.owner.id ===
                                                  t.node.owner.id
                                                )
                                              })
                                            )
                                          })
                                          .filter(function (e) {
                                            return !t.followList.some(function (
                                              t,
                                            ) {
                                              return (
                                                t.userId === e.node.owner.id
                                              )
                                            })
                                          })),
                                        console.log(
                                          '🚀 '
                                            .concat(
                                              new Date().toLocaleString(),
                                              ' loadLocationPostsOwnerList ~ load list count ',
                                            )
                                            .concat(o.length),
                                        ),
                                        t.cursorCountList.some(function (e) {
                                          return (
                                            e.cursor === t.pageInfo.end_cursor
                                          )
                                        }) ||
                                          t.cursorCountList.push({
                                            cursor: t.pageInfo.end_cursor,
                                            count: o.length,
                                          }),
                                        t.skipCount > 0 &&
                                          (o.length > t.skipCount
                                            ? ((o = o.slice(t.skipCount)),
                                              (t.skipCount = 0))
                                            : ((t.skipCount =
                                                t.skipCount - o.length),
                                              (o = []))),
                                        (o = o.map(function (e, s) {
                                          return {
                                            id:
                                              t.lastScrapedCount +
                                              t.followList.length +
                                              s +
                                              1,
                                            avatar: '',
                                            userId: e.node.owner.id,
                                            userName: '',
                                            fullName: '',
                                            followers: '',
                                            following: '',
                                            email: '',
                                            post: '',
                                            phone: '',
                                            city: '',
                                            address: '',
                                            isPrivate: '',
                                            isVerified: '',
                                            isBusiness: '',
                                            externalUrl: '',
                                            bio: '',
                                            cursor: t.pageInfo.end_cursor,
                                            loaded: !1,
                                          }
                                        })),
                                        (t.pageInfo = n),
                                        o.length > 0 &&
                                          (t.followList = t.followList.concat(
                                            o,
                                          )),
                                        t.followList.length >= t.extractLimit ||
                                          !t.pageInfo.has_next_page)
                                      )
                                        return void t.followList.splice(
                                          t.extractLimit,
                                          t.followList.length,
                                        )
                                    } else 'string' === typeof e.data && (t.$buefy.notification.open({ indefinite: !0, message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#24]</div>', position: 'is-bottom-right', type: 'is-danger', hasIcon: !0 }), (t.isPaused = !0))
                                    t.loadLocationPostsOwnerList()
                                  })
                                  .catch(function (e) {
                                    return (
                                      console.log(
                                        '🚀 '.concat(
                                          new Date().toLocaleString(),
                                          ' loadLocationPostsOwnerList ~ error',
                                        ),
                                        e.response,
                                      ),
                                      e.response && 302 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#25] '.concat(
                                              e.message || '',
                                              '</div>',
                                            ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : e.response &&
                                          400 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Instagram requires you to do a simple account verification. Please complete it and come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#26] '
                                              .concat(e.message || '', ' ')
                                              .concat(
                                                (e.response.data &&
                                                  e.response.data.message) ||
                                                  '',
                                                '</div>',
                                              ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : e.response &&
                                          429 === e.response.status
                                        ? (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Due to frequent network requests, Instagram is temporarily blocking your access. You can pause and wait for 10 minutes, come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#27] '
                                              .concat(e.message || '', ' ')
                                              .concat(
                                                (e.response.data &&
                                                  e.response.data.message) ||
                                                  '',
                                                '</div>',
                                              ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          void (t.isPaused = !0))
                                        : (t.listCatchTimes++,
                                          void (t.listCatchTimes < 5
                                            ? t.loadLocationPostsOwnerList()
                                            : (t.$buefy.notification.open({
                                                indefinite: !0,
                                                message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#28] '.concat(
                                                  e.message || '',
                                                  '</div>',
                                                ),
                                                position: 'is-bottom-right',
                                                type: 'is-danger',
                                                hasIcon: !0,
                                              }),
                                              (t.isPaused = !0))))
                                    )
                                  })
                                  .finally(function () {
                                    t.isLoading = !1
                                  }))
                          },
                          0 === t.getListTimes
                            ? 100
                            : t.listCatchTimes > 2
                            ? 1e4
                            : 5e3,
                        )
                      case 10:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          },
          loadUserInfoDetail: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                var s
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((0 !== t.type && 1 !== t.type) || !t.isNoFollow) {
                          e.next = 2
                          break
                        }
                        return e.abrupt('return')
                      case 2:
                        if (!t.isPaused) {
                          e.next = 4
                          break
                        }
                        return e.abrupt('return')
                      case 4:
                        return (e.next = 6), t.createIntervalRange()
                      case 6:
                        return (s = e.sent), (e.next = 9), t.getInsClaim()
                      case 9:
                        t.detailTimer = setTimeout(function () {
                          if (t.loadUserIndex >= t.followList.length)
                            return (
                              console.log(
                                '🚀 '.concat(
                                  new Date().toLocaleString(),
                                  ' loadUserInfoDetail ~ wait for next round',
                                ),
                              ),
                              void t.loadUserInfoDetail()
                            )
                          var e = t.configs.ApiUserInfoDetail.url
                          e &&
                            e.includes('${@}$') &&
                            (e = e.replace(
                              '${@}$',
                              t.followList[t.loadUserIndex].userId,
                            )),
                            p.a
                              .get(e, { headers: t.configs.CustomHeaders })
                              .then(function (e) {
                                var s = g()(
                                    e,
                                    t.configs.ApiUserInfoDetail.checkKey,
                                    '',
                                  ),
                                  a = t.configs.ApiUserInfoDetail.checkValue
                                if ((a && (s = s === a), s)) {
                                  for (
                                    var i = [],
                                      n = t.configs.ApiUserInfoDetail.dataKeys.split(
                                        '|',
                                      ),
                                      r = 0;
                                    r < n.length;
                                    r++
                                  ) {
                                    var c = n[r],
                                      l = g()(e, c, '')
                                    l ? i.push(l) : i.push('')
                                  }
                                  var d = t.followList[t.loadUserIndex]
                                  t.loadUserIndex > 0 &&
                                    d.cursor !==
                                      t.followList[t.loadUserIndex - 1]
                                        .cursor &&
                                    ((t.currentCursor = d.cursor),
                                    t.updateHistory({ isFromCursorChange: !0 }))
                                  var p = i[16]
                                    ? i[16].match(
                                        /[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/g,
                                      )
                                    : ''
                                  p = p && p.length > 0 ? p[0] : ''
                                  var m = ''
                                  m = i[5] && i[5].indexOf('@') > 0 ? i[5] : p
                                  var h = i[16]
                                    ? i[16].replace(/[\s\t\n\r]/g, '')
                                    : ''
                                  ;(h = h.match(/[\+\d]{8,}/g)),
                                    (h = h && h.length > 0 ? h[0] : '')
                                  var f = ''
                                  if (
                                    ((f = i[8]
                                      ? '+'.concat(i[7]).concat(i[8])
                                      : i[9]
                                      ? i[9]
                                      : h),
                                    f.includes('not-applicable') && (f = ''),
                                    (d = Object.assign({}, d, {
                                      avatar: d.avatar ? d.avatar : i[0] || '',
                                      userName: i[1] || '',
                                      fullName: i[2] || '',
                                      followers: i[3] || 0,
                                      following: i[4] || 0,
                                      email: m,
                                      post: i[6] || 0,
                                      phone: f,
                                      city: i[10] || '',
                                      address: i[11] || '',
                                      isPrivate: i[12] ? 'YES' : 'NO',
                                      isVerified: i[13] ? 'YES' : 'NO',
                                      isBusiness: i[14] ? 'YES' : 'NO',
                                      externalUrl: i[15] || '',
                                      bio: i[16] || '',
                                      loaded: !0,
                                    })),
                                    t.followList.splice(t.loadUserIndex, 1, d),
                                    !d.email &&
                                      d.externalUrl &&
                                      (d.externalUrl.indexOf('linktr.ee') > 0 ||
                                        d.externalUrl.indexOf('linkpop.com') >
                                          0 ||
                                        d.externalUrl.indexOf('lnk.bio') > 0 ||
                                        d.externalUrl.indexOf('snipfeed.co') >
                                          0 ||
                                        d.externalUrl.indexOf('msha.ke') > 0 ||
                                        d.externalUrl.indexOf('pico.link') >
                                          0 ||
                                        d.externalUrl.indexOf('hoo.be') > 0 ||
                                        d.externalUrl.indexOf('solo.to') > 0))
                                  )
                                    try {
                                      u.a.runtime
                                        .sendMessage({
                                          type: 'GET_LINKTREE_EMAIL',
                                          url: d.externalUrl,
                                          id:
                                            t.followList[t.loadUserIndex]
                                              .userId,
                                          num: t.loadUserIndex,
                                        })
                                        .then(function (e) {
                                          if (e && e.email) {
                                            var s = t.followList.findIndex(
                                              function (t) {
                                                return t.userId === e.id
                                              },
                                            )
                                            s >= 0 &&
                                              t.followList.splice(
                                                s,
                                                1,
                                                Object(o['a'])(
                                                  Object(o['a'])(
                                                    {},
                                                    t.followList[s],
                                                  ),
                                                  {},
                                                  { email: e.email },
                                                ),
                                              )
                                          }
                                        })
                                    } catch (v) {
                                      console.log(v)
                                    }
                                  d.email &&
                                    d.email.length > 0 &&
                                    ((t.extractEmailCount =
                                      t.lastTrialCount + t.emailList.length),
                                    !t.subscription.isPro &&
                                      t.extractEmailCount >= t.trialCount &&
                                      (t.updateHistory(),
                                      (document.body.scrollTop = 0),
                                      (document.documentElement.scrollTop = 0),
                                      (t.isComplete = !0)))
                                } else 'string' === typeof e.data && (t.$buefy.notification.open({ indefinite: !0, message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#1]</div>', position: 'is-bottom-right', type: 'is-danger', hasIcon: !0 }), (t.isPaused = !0))
                                if (!t.isComplete) {
                                  if (
                                    (t.userList.length > 0 &&
                                      t.userList.length % 100 === 0 &&
                                      u.a.tabs.create({
                                        url: 'https://www.instagram.com/?_echobot=1&claim='.concat(
                                          encodeURIComponent(
                                            t.configs.ClaimSessionStorageKey,
                                          ),
                                        ),
                                        active: !1,
                                      }),
                                    !t.pageInfo.has_next_page &&
                                      t.followList.length <= t.userList.length)
                                  )
                                    return (
                                      t.updateHistory({ isFromComplete: !0 }),
                                      (document.body.scrollTop = 0),
                                      (document.documentElement.scrollTop = 0),
                                      void (t.isComplete = !0)
                                    )
                                  t.loadUserIndex++, t.loadUserInfoDetail()
                                }
                              })
                              .catch(function (e) {
                                return (
                                  console.log(
                                    '🚀 loadUserInfoDetail ~ error',
                                    e,
                                  ),
                                  e.response && 302 === e.response.status
                                    ? (t.$buefy.notification.open({
                                        indefinite: !0,
                                        message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#2] '.concat(
                                          e.message || '',
                                          '</div>',
                                        ),
                                        position: 'is-bottom-right',
                                        type: 'is-danger',
                                        hasIcon: !0,
                                      }),
                                      void (t.isPaused = !0))
                                    : e.response && 400 === e.response.status
                                    ? (t.$buefy.notification.open({
                                        indefinite: !0,
                                        message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Instagram requires you to do a simple account verification. Please complete it and come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#3] '
                                          .concat(e.message || '', ' ')
                                          .concat(
                                            (e.response.data &&
                                              e.response.data.message) ||
                                              '',
                                            '</div>',
                                          ),
                                        position: 'is-bottom-right',
                                        type: 'is-danger',
                                        hasIcon: !0,
                                      }),
                                      void (t.isPaused = !0))
                                    : e.response && 429 === e.response.status
                                    ? (t.$buefy.notification.open({
                                        indefinite: !0,
                                        message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Due to frequent network requests, Instagram is temporarily blocking your access. You can pause and wait for 10 minutes, come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#4] '
                                          .concat(e.message || '', ' ')
                                          .concat(
                                            (e.response.data &&
                                              e.response.data.message) ||
                                              '',
                                            '</div>',
                                          ),
                                        position: 'is-bottom-right',
                                        type: 'is-danger',
                                        hasIcon: !0,
                                      }),
                                      void (t.isPaused = !0))
                                    : (t.detailCatchTimes++,
                                      void (t.detailCatchTimes < 5
                                        ? (t.detailCatchTimes > 1 &&
                                            t.loadUserIndex++,
                                          t.loadUserInfoDetail())
                                        : (t.$buefy.notification.open({
                                            indefinite: !0,
                                            message: 'Oops! Something went wrong, the task has been suspended, <div style="font-weight:500;">Please sign in to your Instagram account again, then come back and click the "Continue" button to start scraping. <a style="color:#fff810;" target="_blank" href="https://www.instagram.com/">Go to instagram.com</a></div><div style="font-size:12px;font-style:italic;">error: [#5] '.concat(
                                              e.message || '',
                                              '</div>',
                                            ),
                                            position: 'is-bottom-right',
                                            type: 'is-danger',
                                            hasIcon: !0,
                                          }),
                                          (t.isPaused = !0))))
                                )
                              })
                        }, 1e3 * s)
                      case 10:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          },
          getInsClaim: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                var s
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            u.a.storage.local.get(['x_ig_www_claim'])
                          )
                        case 3:
                          if (((e.t0 = e.sent), e.t0)) {
                            e.next = 6
                            break
                          }
                          e.t0 = {}
                        case 6:
                          ;(s = e.t0),
                            (t.configs.CustomHeaders[t.configs.ClaimHeaderKey] =
                              s.x_ig_www_claim || ''),
                            (e.next = 13)
                          break
                        case 10:
                          ;(e.prev = 10),
                            (e.t1 = e['catch'](0)),
                            console.log('🚀 get x_ig_www_claim error', e.t1)
                        case 13:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 10]],
                )
              }),
            )()
          },
          getInsCsrfToken: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                var s, a, i, n
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            u.a.cookies.get({
                              url: t.configs.InsCsrfTokenFromCookie.url,
                              name: t.configs.InsCsrfTokenFromCookie.cookieKey,
                            })
                          )
                        case 3:
                          ;(s = e.sent),
                            (t.insCsrfToken = s.value),
                            (t.configs.CustomHeaders[t.configs.CsrfHeaderKey] =
                              t.insCsrfToken),
                            (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8),
                            (e.t0 = e['catch'](0)),
                            console.log('🚀 get csrfToken error', e.t0)
                        case 11:
                          if (t.insCsrfToken) {
                            e.next = 27
                            break
                          }
                          return (
                            (e.prev = 12),
                            (e.next = 15),
                            p.a.get(t.configs.InsCsrfTokenFromHtml.url)
                          )
                        case 15:
                          ;(a = e.sent),
                            (a = a.data),
                            (i = new RegExp(
                              decodeURIComponent(
                                t.configs.InsCsrfTokenFromHtml.reg,
                              ),
                            )),
                            (n = a.match(i)),
                            (t.insCsrfToken = (n && n[1]) || ''),
                            (t.configs.CustomHeaders[t.configs.CsrfHeaderKey] =
                              t.insCsrfToken),
                            console.log('🚀 get csrfToken', t.insCsrfToken),
                            (e.next = 27)
                          break
                        case 24:
                          ;(e.prev = 24),
                            (e.t1 = e['catch'](12)),
                            console.log(e.t1)
                        case 27:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [
                    [0, 8],
                    [12, 24],
                  ],
                )
              }),
            )()
          },
          getInsUserStatus: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                var s, a, i, n
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            u.a.cookies.get({
                              url: t.configs.InsUserStatusFromCookie.url,
                              name: t.configs.InsUserStatusFromCookie.cookieKey,
                            })
                          )
                        case 3:
                          ;(s = e.sent),
                            (t.insLogged = !!s.value),
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
                            p.a.get(t.configs.InsUserStatusFromHtml.url)
                          )
                        case 14:
                          ;(a = e.sent),
                            (a = a.data),
                            (i = new RegExp(
                              decodeURIComponent(
                                t.configs.InsUserStatusFromHtml.reg,
                              ),
                            )),
                            (n = a.match(i)),
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
          updateHistory: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              s = e.isFromComplete,
              a = void 0 !== s && s,
              i = e.isFromExport,
              n = void 0 !== i && i,
              o = e.isFromCursorChange,
              r = void 0 !== o && o
            if (!n || this.lastHistoryItem.id) {
              var c = 0
              if (a)
                c = this.lastHistoryItem.scrapedCount + this.userList.length
              else {
                var l = 0
                if (this.loadUserIndex > 0) {
                  var u = this.cursorCountList.findIndex(function (e) {
                    return e.cursor === t.currentCursor
                  })
                  this.cursorCountList.forEach(function (t, e) {
                    e < u && (l += t.count)
                  })
                }
                c = this.lastHistoryItem.cursorScrapedCount + l
              }
              var d = {
                id: this.lastHistoryItem.id || '',
                token: this.lastHistoryItem.token || '',
                count: this.lastHistoryItem.count + this.emailList.length,
                lastCursor: this.currentCursor,
                extractionData: this.ins,
                extractionType: this.extractionType,
                itemsCount: 0,
                scrapedCount:
                  this.lastHistoryItem.scrapedCount + this.userList.length,
                cursorScrapedCount: c,
                version: this.version,
                isFromComplete: a,
                isFromExport: n,
                isFromCursorChange: r,
              }
              switch (this.type) {
                case 0:
                case 1:
                  d.itemsCount = this.insUser.count
                  break
                case 2:
                  d.itemsCount = this.insHashtag.count
                  break
                case 3:
                  d.itemsCount = this.insLike.count
                  break
                case 4:
                  d.itemsCount = this.insComment.count
                  break
                case 5:
                  d.itemsCount = this.insLocation.count
                  break
              }
              var p = Object.assign({}, d)
              delete p.token
              var m = JSON.stringify(p)
              m !== this.lastUpdateHistoryDataStr &&
                ((this.lastUpdateHistoryDataStr = m),
                Object(x['k'])(d)
                  .then(function (e) {
                    console.log('🚀 updateHistoryItem', e),
                      e &&
                        e.id &&
                        t.lastHistoryItem.updateTimes <= e.get('updateTimes') &&
                        (t.lastHistoryItem = Object.assign(
                          {},
                          t.lastHistoryItem,
                          {
                            id: e.id,
                            token: e.get('token'),
                            updateTimes: e.get('updateTimes'),
                          },
                        ))
                  })
                  .catch(function (e) {
                    console.log('🚀 updateHistoryItem error', e),
                      (t.lastUpdateHistoryDataStr = '')
                  }))
            }
          },
          startLoadAllData: function () {
            switch (this.type) {
              case 0:
              case 1:
                this.loadFollowList()
                break
              case 2:
                this.loadHashtagPostsOwnerList()
                break
              case 3:
                this.loadPostsLikeOwnerList()
                break
              case 4:
                this.loadPostsCommentOwnerList()
                break
              case 5:
                this.loadLocationPostsOwnerList()
                break
              default:
                break
            }
            this.loadUserInfoDetail()
          },
          startWorking: function () {
            var t = this
            return Object(c['a'])(
              regeneratorRuntime.mark(function e() {
                var s, a, i, n, o, r
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.getUserInfo()
                      case 2:
                        if (((s = e.sent), !s.id)) {
                          e.next = 61
                          break
                        }
                        ;(t.isLoginModalActive = !1),
                          (t.ins = t.$route.query.ins),
                          (t.type = +t.$route.query.type),
                          (t.historyId = t.$route.query.history || ''),
                          (a = ''),
                          (e.t0 = t.type),
                          (e.next =
                            0 === e.t0
                              ? 12
                              : 1 === e.t0
                              ? 14
                              : 2 === e.t0
                              ? 16
                              : 3 === e.t0
                              ? 18
                              : 4 === e.t0
                              ? 20
                              : 5 === e.t0
                              ? 22
                              : 24)
                        break
                      case 12:
                        return (a = 'followers'), e.abrupt('break', 24)
                      case 14:
                        return (a = 'following'), e.abrupt('break', 24)
                      case 16:
                        return (a = 'hashtag'), e.abrupt('break', 24)
                      case 18:
                        return (a = 'likes'), e.abrupt('break', 24)
                      case 20:
                        return (a = 'comment'), e.abrupt('break', 24)
                      case 22:
                        return (a = 'location'), e.abrupt('break', 24)
                      case 24:
                        return (
                          (t.extractionType = a),
                          (e.next = 27),
                          Object(x['f'])()
                        )
                      case 27:
                        return (
                          (t.subscription = e.sent),
                          (t.trialCount = t.subscription.trialCount || 50),
                          (e.next = 31),
                          Object(x['g'])()
                        )
                      case 31:
                        if (
                          ((t.lastTrialCount = e.sent), t.subscription.isPro)
                        ) {
                          e.next = 37
                          break
                        }
                        if (!(t.lastTrialCount >= t.trialCount)) {
                          e.next = 37
                          break
                        }
                        return (
                          (t.isComplete = !0),
                          (t.isShowProUpgradePop = !0),
                          e.abrupt('return', !1)
                        )
                      case 37:
                        return (e.next = 39), t.getInsConfigs()
                      case 39:
                        return (
                          (t.configs = e.sent),
                          (e.next = 42),
                          t.getInsUserStatus()
                        )
                      case 42:
                        return (
                          t.insLogged ||
                            (t.$buefy.snackbar.open({
                              message:
                                'Please log in to Instagram and try again.',
                              type: 'is-danger',
                              position: 'is-top-right',
                              queue: !1,
                              duration: 8e3,
                            }),
                            setTimeout(function () {
                              t.handleGotoIns()
                            }, 3e3)),
                          (e.next = 45),
                          t.getInsCsrfToken()
                        )
                      case 45:
                        return (e.next = 47), t.getInsClaim()
                      case 47:
                        if (
                          ((i = { closeConfirm: !0 }),
                          0 !== t.type && 1 !== t.type)
                        ) {
                          e.next = 52
                          break
                        }
                        return (e.next = 51), t.loadProfileInfo()
                      case 51:
                        i = e.sent
                      case 52:
                        if (i && i.closeConfirm)
                          try {
                            window.addEventListener('beforeunload', function (
                              e,
                            ) {
                              t.updateHistory(),
                                e.preventDefault(),
                                (e.returnValue = '')
                            })
                          } catch (l) {
                            console.log(l)
                          }
                        return (
                          (n = function (e) {
                            ;(t.lastHistoryItem = {
                              id: e.id,
                              token: e.get('token'),
                              updateTimes: e.get('updateTimes'),
                              scrapedCount: e.get('scrapedCount'),
                              cursorScrapedCount: e.get('cursorScrapedCount'),
                              count: e.get('count'),
                            }),
                              (t.skipCount =
                                e.get('scrapedCount') -
                                  e.get('cursorScrapedCount') || 0),
                              (t.pageInfo = {
                                end_cursor: e.get('lastCursor'),
                                has_next_page: !0,
                              }),
                              (t.currentCursor = e.get('lastCursor')),
                              (t.isLoading = !0),
                              t.startLoadAllData()
                          }),
                          (o = (function () {
                            var e = Object(c['a'])(
                              regeneratorRuntime.mark(function e() {
                                var s, a, i
                                return regeneratorRuntime.wrap(
                                  function (e) {
                                    while (1)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (s = ''),
                                            (e.prev = 1),
                                            (e.next = 4),
                                            u.a.storage.local.get([
                                              'sharedData',
                                            ])
                                          )
                                        case 4:
                                          ;(a = e.sent),
                                            a &&
                                              a.sharedData &&
                                              a.sharedData.username &&
                                              (s = JSON.stringify(
                                                a.sharedData,
                                              )),
                                            (e.next = 11)
                                          break
                                        case 8:
                                          ;(e.prev = 8),
                                            (e.t0 = e['catch'](1)),
                                            console.log(e.t0)
                                        case 11:
                                          return (
                                            (e.next = 13),
                                            Object(x['a'])({
                                              extractionData: t.ins,
                                              extractionType: t.extractionType,
                                              isPro: t.subscription.isPro,
                                              sharedData: s,
                                            })
                                          )
                                        case 13:
                                          ;(i = e.sent),
                                            (t.lastHistoryItem = {
                                              id: i.id,
                                              token: i.get('token'),
                                              updateTimes: i.get('updateTimes'),
                                              scrapedCount: i.get(
                                                'scrapedCount',
                                              ),
                                              cursorScrapedCount: i.get(
                                                'cursorScrapedCount',
                                              ),
                                              count: i.get('count'),
                                            }),
                                            (t.lastScrapedCount = 0),
                                            (t.isLoading = !0),
                                            t.startLoadAllData()
                                        case 18:
                                        case 'end':
                                          return e.stop()
                                      }
                                  },
                                  e,
                                  null,
                                  [[1, 8]],
                                )
                              }),
                            )
                            return function () {
                              return e.apply(this, arguments)
                            }
                          })()),
                          (e.next = 57),
                          Object(x['d'])({
                            extractionData: t.ins,
                            extractionType: t.extractionType,
                            historyId: t.historyId,
                          })
                        )
                      case 57:
                        ;(r = e.sent),
                          r && r.id
                            ? ((t.lastScrapedCount =
                                +r.get('scrapedCount') || 0),
                              t.historyId || 0 == t.lastScrapedCount
                                ? n(r)
                                : t.$buefy.dialog.confirm({
                                    message: '<div style="font-size:18px">Last time this task was extract to <strong>'.concat(
                                      t.lastScrapedCount,
                                      '</strong>, continue?</div>',
                                    ),
                                    confirmText: 'Continue',
                                    cancelText: 'Restart',
                                    canCancel: 'button',
                                    type: 'is-danger',
                                    hasIcon: !0,
                                    onConfirm: function () {
                                      n(r)
                                    },
                                    onCancel: function () {
                                      o()
                                    },
                                  }))
                            : o(),
                          (e.next = 62)
                        break
                      case 61:
                        t.isLoginModalActive = !0
                      case 62:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          },
          handleToggleWorkStatus: function () {
            if (((this.isPaused = !this.isPaused), this.isPaused))
              this.listTimer && clearTimeout(this.listTimer),
                this.detailTimer && clearTimeout(this.detailTimer),
                this.updateHistory()
            else {
              try {
                document
                  .querySelectorAll('.notification button.delete')
                  .forEach(function (t) {
                    t.click()
                  })
              } catch (t) {
                console.log('colse notification error:', t)
              }
              this.startLoadAllData()
            }
          },
          handleDownload: function (t, e) {
            var s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 'xlsx'
            if ('xlsx' === s) {
              var a = [
                  { label: 'User Id', value: 'userId' },
                  { label: 'User Name', value: 'userName' },
                  { label: 'Full Name', value: 'fullName' },
                  { label: 'Followers Count', value: 'followers' },
                  { label: 'Following Count', value: 'following' },
                  { label: 'Post Count', value: 'post' },
                  { label: 'Public Email', value: 'email' },
                  { label: 'Public Phone', value: 'phone' },
                  { label: 'City', value: 'city' },
                  { label: 'Address', value: 'address' },
                  { label: 'Is Private', value: 'isPrivate' },
                  { label: 'Is Verified', value: 'isVerified' },
                  { label: 'Is Business', value: 'isBusiness' },
                  { label: 'External Url', value: 'externalUrl' },
                  { label: 'Biography', value: 'bio' },
                  {
                    label: 'Avatar Url',
                    value: function (t) {
                      return t.avatar.split('?')[0] || ''
                    },
                  },
                  {
                    label: 'Profile Url',
                    value: function (t) {
                      return 'https://www.instagram.com/' + t.userName
                    },
                  },
                ],
                i = [{ sheet: t, columns: a, content: e }]
              y(
                i,
                'IGLeadGenerator-'
                  .concat(t, '-')
                  .concat(e.length, '-')
                  .concat(+new Date()),
              )
            } else {
              var n = e.map(function (t) {
                return {
                  'User Id': t.userId + '',
                  'User Name': t.userName + '',
                  'Full Name': t.fullName + '',
                  'Followers Count': t.followers + '',
                  'Following Count': t.following + '',
                  'Post Count': t.post + '',
                  'Public Email': t.email + '',
                  'Public Phone': t.phone + '',
                  City: t.city + '',
                  Address: t.address + '',
                  'Is Private': t.isPrivate + '',
                  'Is Verified': t.isVerified + '',
                  'Is Business': t.isBusiness + '',
                  'External Url': t.externalUrl + '',
                  Biography: t.bio + '',
                  'Avatar Url': t.avatar.split('?')[0],
                  'Profile Url': 'https://www.instagram.com/' + t.userName,
                }
              })
              b(
                n,
                'IGEmailExtractor-'
                  .concat(t, '-')
                  .concat(e.length, '-')
                  .concat(+new Date()),
              )
            }
            this.updateHistory({ isFromExport: !0 })
          },
          handleShowProModal: function () {
            this.isProModalActive = !0
          },
        },
        components: { Pro: _['a'] },
      },
      L = k,
      I = (s('cc10'), s('2877')),
      P = Object(I['a'])(L, i, n, !1, null, null, null),
      S = P.exports,
      z = (s('42e0'), s('8c4f')),
      H = s('ecee'),
      T = s('c074'),
      O = s('ad3d'),
      U = s('289d'),
      A = s('01ea')
    H['c'].add(
      T['x'],
      T['y'],
      T['o'],
      T['j'],
      T['s'],
      T['c'],
      T['b'],
      T['e'],
      T['l'],
      T['B'],
      T['i'],
      T['k'],
      T['w'],
      T['u'],
      T['C'],
      T['g'],
    ),
      a['a'].component('vue-fontawesome', O['a']),
      a['a'].use(U['a'], {
        defaultIconComponent: 'vue-fontawesome',
        defaultIconPack: 'fas',
      }),
      (a['a'].prototype.$config = A['a'])
    var F = [{ path: '/', component: S }]
    a['a'].use(z['a'])
    var $ = new z['a']({ routes: F })
    new a['a']({
      el: '#app',
      router: $,
      render: function (t) {
        return t(S)
      },
    })
  },
  cc10: function (t, e, s) {
    'use strict'
    s('3b7b')
  },
})

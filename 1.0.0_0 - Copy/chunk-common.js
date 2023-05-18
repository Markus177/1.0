//generate code to be injected into the page so login or signup is not required



;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-common'],
  {
    '01ea': function (t, e, n) {
      'use strict'
      var r = !0,
        a = 'echobot-igemailextractor',
        s = 'fdjsoa398%%@GF**!!xbeebn',
        i = r
          ? 'https://igemailextractor.echobot.dev'
          : 'http://localhost:1337',
        c = r ? 'https://echobot.dev/server' : 'http://localhost:7001'
      e['a'] = {
        IS_PRODUCTION: r,
        PARSE_APPID: a,
        PARSE_JSKEY: s,
        HOST_URL: i,
        PAY_HOST_URL: c,
      }
    },
    '30b7': function (t, e, n) {},
    '42e0': function (t, e, n) {},
    '84d6': function (t, e, n) {
      t.exports = n.p + 'img/safepay.1f7908b5.jpg'
    },
    a4af: function (t, e, n) {
      'use strict'
      var r = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'pt-1' },
            [
              n('div', { staticClass: 'px-5' }, [
                n(
                  'table',
                  { staticClass: 'table is-fullwidth is-size-7 mb-1' },
                  [
                    n('thead', [
                      n('tr', [
                        n('th'),
                        n('th', [t._v('Free Trial')]),
                        n('th', [
                          n(
                            'span',
                            { staticClass: 'is-flex is-align-items-center' },
                            [

                            ],
                          ),
                        ]),
                      ]),
                    ]),
                    n('tbody', [
                      n('tr', [
                        n('td', { staticClass: 'has-text-weight-semibold' }, [
                          t._v('Number of emails extracted'),
                        ]),
                        n('td', { staticClass: 'has-text-weight-bold' }, [
                          t._v(
                            ' ' +
                              t._s(
                                (t.subscription && t.subscription.trialCount) ||
                                  50,
                              ) +
                              ' ',
                          ),
                        ]),
                        n(
                          'td',
                          {
                            staticClass:
                              'has-text-mygreen has-text-weight-bold',
                          },
                          [t._v('Unlimited')],
                        ),
                      ]),
                      n('tr', [
                        n('td', { staticClass: 'has-text-weight-semibold' }, [
                          t._v(" Scrape any user's followers & followings "),
                        ]),
                        n(
                          'td',
                          [
                            n('b-icon', {
                              staticClass: 'has-text-mygreen',
                              attrs: { icon: 'check-circle', size: 'is-small' },
                            }),
                          ],
                          1,
                        ),
                        n(
                          'td',
                          [
                            n('b-icon', {
                              staticClass: 'has-text-mygreen',
                              attrs: { icon: 'check-circle', size: 'is-small' },
                            }),
                          ],
                          1,
                        ),
                      ]),
                      n('tr', [
                        n('td', { staticClass: 'has-text-weight-semibold' }, [
                          t._v(' Scrape any hashtag & location post owner '),
                        ]),
                        n(
                          'td',
                          [
                            n('b-icon', {
                              staticClass: 'has-text-mygreen',
                              attrs: { icon: 'check-circle', size: 'is-small' },
                            }),
                          ],
                          1,
                        ),
                        n(
                          'td',
                          [
                            n('b-icon', {
                              staticClass: 'has-text-mygreen',
                              attrs: { icon: 'check-circle', size: 'is-small' },
                            }),
                          ],
                          1,
                        ),
                      ]),
                      n('tr', [
                        n('td', { staticClass: 'has-text-weight-semibold' }, [
                          t._v(' Scrape any post likers & commenters '),
                        ]),
                        n(
                          'td',
                          [
                            n('b-icon', {
                              staticClass: 'has-text-mygreen',
                              attrs: { icon: 'check-circle', size: 'is-small' },
                            }),
                          ],
                          1,
                        ),
                        n(
                          'td',
                          [
                            n('b-icon', {
                              staticClass: 'has-text-mygreen',
                              attrs: { icon: 'check-circle', size: 'is-small' },
                            }),
                          ],
                          1,
                        ),
                      ]),
                      n('tr', [
                        n('td', { staticClass: 'has-text-weight-semibold' }, [
                          t._v("Extract any user's profile"),
                        ]),
                        n(
                          'td',
                          [
                            n('b-icon', {
                              staticClass: 'has-text-mygreen',
                              attrs: { icon: 'check-circle', size: 'is-small' },
                            }),
                          ],
                          1,
                        ),
                        n(
                          'td',
                          [
                            n('b-icon', {
                              staticClass: 'has-text-mygreen',
                              attrs: { icon: 'check-circle', size: 'is-small' },
                            }),
                          ],
                          1,
                        ),
                      ]),
                      n('tr', [
                        n('td', { staticClass: 'has-text-weight-semibold' }, [
                          t._v(' Export data to xlsx & csv '),
                        ]),
                        n(
                          'td',
                          [
                            n('b-icon', {
                              staticClass: 'has-text-mygreen',
                              attrs: { icon: 'check-circle', size: 'is-small' },
                            }),
                          ],
                          1,
                        ),
                        n(
                          'td',
                          [
                            n('b-icon', {
                              staticClass: 'has-text-mygreen',
                              attrs: { icon: 'check-circle', size: 'is-small' },
                            }),
                          ],
                          1,
                        ),
                      ]),
                    ]),
                  ],
                ),
              ]),
              t.subscription.userId
                ? n(
                    'div',
                    [
                      t.subscription.subscriptionId &&
                      !t.subscription.isCanceled
                        ? n('div', { staticClass: 'pt-5 px-5' }, [
                            n(
                              'table',
                              {
                                staticClass:
                                  'table is-fullwidth is-size-7 mb-4',
                              },
                              [
                                n('tbody', [
                                  n('tr', [
                                    n(
                                      'td',
                                      {
                                        staticClass: 'has-text-weight-semibold',
                                      },
                                      [t._v('You Plan')],
                                    ),
                                    n(
                                      'td',
                                      [
                                        n(
                                          'b-tag',
                                          {
                                            attrs: {
                                              type: 'is-warning is-uppercase',
                                            },
                                          },
                                          [t._v('Pro')],
                                        ),
                                      ],
                                      1,
                                    ),
                                  ]),
                                  n('tr', [
                                    n(
                                      'td',
                                      {
                                        staticClass: 'has-text-weight-semibold',
                                      },
                                      [t._v('Next Billing Date')],
                                    ),
                                    n('td', [
                                      t._v(
                                        ' ' +
                                          t._s(t.subscription.nextBillAt) +
                                          ' ',
                                      ),
                                    ]),
                                  ]),
                                  n('tr', [
                                    n(
                                      'td',
                                      {
                                        staticClass: 'has-text-weight-semibold',
                                      },
                                      [t._v('Billing Email')],
                                    ),
                                    n('td', [
                                      t._v(
                                        ' ' + t._s(t.subscription.email) + ' ',
                                      ),
                                    ]),
                                  ]),
                                  t.subscription.chargeStatus
                                    ? t._e()
                                    : n('tr', [
                                        n(
                                          'td',
                                          {
                                            staticClass: 'has-text-danger',
                                            attrs: { colspan: '2' },
                                          },
                                          [
                                            t._v(
                                              ' Charge Fail (' +
                                                t._s(
                                                  t.subscription
                                                    .cancelEffectiveAt,
                                                ) +
                                                ' Pro expired) ',
                                            ),
                                          ],
                                        ),
                                      ]),
                                  n('tr', [
                                    n(
                                      'td',
                                      [
                                        n(
                                          'b-button',
                                          {
                                            staticClass: 'mt-2',
                                            attrs: {
                                              size: 'is-small',
                                              type: 'is-primary',
                                              outlined: '',
                                            },
                                            on: { click: t.handleCancel },
                                          },
                                          [t._v('Unsubscribe')],
                                        ),
                                      ],
                                      1,
                                    ),
                                    n(
                                      'td',
                                      [
                                        n(
                                          'b-button',
                                          {
                                            staticClass: 'mt-2',
                                            attrs: {
                                              type: 'is-success',
                                              size: 'is-small',
                                              outlined: '',
                                            },
                                            on: { click: t.handleUpdate },
                                          },
                                          [t._v('Update Billing Info')],
                                        ),
                                      ],
                                      1,
                                    ),
                                  ]),
                                ]),
                              ],
                            ),
                          ])
                        : [
                            n(
                              'div',
                              {
                                staticClass:
                                  'mx-5 mb-3 has-background-warning has-text-dark is-uppercase is-size-7 has-text-weight-semibold is-flex is-justify-content-center is-align-items-center',
                                staticStyle: {
                                  'border-radius': '5px',
                                  padding: '4px 0',
                                },
                              },
                              [
                                n('b-icon', {
                                  staticClass: 'has-text-danger',
                                  staticStyle: { 'margin-right': '5px' },
                                  attrs: { icon: 'tags', size: 'is-small' },
                                }),
                                t._v(' Limited Time Offer '),
                              ],
                              1,
                            ),
                            n(
                              'ul',
                              { staticClass: 'price-list is-flex' },
                              t._l(t.plans, function (e) {
                                return n('li', { key: e.objectId }, [
                                  n(
                                    'div',
                                    {
                                      staticClass: 'card',
                                      class: { recommended: e.isRecommended },
                                    },
                                    [
                                      n(
                                        'div',
                                        { staticClass: 'card-content' },
                                        [
                                          n(
                                            'h2',
                                            {
                                              staticClass:
                                                'is-size-7 has-text-weight-semibold mb-1',
                                            },
                                            [
                                              t._v(
                                                ' ' + t._s(e.planName) + ' ',
                                              ),
                                            ],
                                          ),
                                          n(
                                            'p',
                                            {
                                              staticClass: 'has-text-centered',
                                            },
                                            [
                                              n(
                                                'b-tag',
                                                { attrs: { rounded: '' } },
                                                [
                                                  n(
                                                    'span',
                                                    {
                                                      staticClass:
                                                        'has-text-grey is-size-7',
                                                      staticStyle: {
                                                        'text-decoration':
                                                          'line-through',
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        '$' +
                                                          t._s(
                                                            e.originalPrice,
                                                          ) +
                                                          '/' +
                                                          t._s(
                                                            1 ===
                                                              e.intervalMonth
                                                              ? 'mo'
                                                              : 12 ===
                                                                e.intervalMonth
                                                              ? 'yr'
                                                              : 'qr',
                                                          ),
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                            ],
                                            1,
                                          ),
                                          n(
                                            'div',
                                            {
                                              staticClass:
                                                'has-text-black is-size-4 has-text-weight-semibold has-text-centered',
                                            },
                                            [
                                              n(
                                                'span',
                                                {
                                                  staticClass:
                                                    'is-size-7 has-text-grey-light has-text-weight-normal',
                                                  staticStyle: {
                                                    'margin-right': '2px',
                                                  },
                                                },
                                                [t._v('$')],
                                              ),
                                              t._v(t._s(e.monthlyPrice)),
                                              n(
                                                'span',
                                                {
                                                  staticClass:
                                                    'is-size-7 has-text-weight-normal',
                                                },
                                                [t._v('/mo')],
                                              ),
                                            ],
                                          ),
                                          e.isRecommended
                                            ? n(
                                                'b-tag',
                                                {
                                                  staticClass:
                                                    'has-text-weight-semibold',
                                                  staticStyle: {
                                                    position: 'absolute',
                                                    top: '-0.6rem',
                                                    right: '0.2rem',
                                                  },
                                                  attrs: {
                                                    type: 'is-success is-light',
                                                  },
                                                },
                                                [t._v('Most Popular')],
                                              )
                                            : t._e(),
                                          e.intervalMonth > 1
                                            ? n(
                                                'p',
                                                {
                                                  staticClass:
                                                    'has-text-centered has-text-grey mb-2',
                                                  staticStyle: {
                                                    'font-size': '11px',
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    ' $' +
                                                      t._s(e.price) +
                                                      ' billed ' +
                                                      t._s(
                                                        12 === e.intervalMonth
                                                          ? '12 months'
                                                          : '3 months',
                                                      ) +
                                                      ' ',
                                                  ),
                                                ],
                                              )
                                            : n(
                                                'p',
                                                {
                                                  staticClass:
                                                    'has-text-centered has-text-grey mb-2',
                                                  staticStyle: {
                                                    'font-size': '11px',
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    ' $' +
                                                      t._s(e.price) +
                                                      ' billed 1 month ',
                                                  ),
                                                ],
                                              ),
                                          n(
                                            'a',
                                            {
                                              staticClass:
                                                'button is-primary is-fullwidth has-text-weight-semibold btn-pay',
                                              on: {
                                                click: function (n) {
                                                  return t.handleSubscribe(e)
                                                },
                                              },
                                            },
                                            [n('span', [t._v('Try it now')])],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ],
                                  ),
                                ])
                              }),
                              0,
                            ),
                            n(
                              'p',
                              {
                                staticClass: 'has-text-grey px-5 mt-2',
                                staticStyle: { 'font-size': '11px' },
                              },
                              [
                                n('b-icon', {
                                  attrs: { icon: 'lock', size: 'is-small' },
                                }),
                                t._v(' We use '),
                                n(
                                  'span',
                                  { staticClass: 'has-text-weight-bold' },
                                  [t._v('Paddle™️')],
                                ),
                                t._v(' or '),
                                n(
                                  'span',
                                  { staticClass: 'has-text-weight-bold' },
                                  [t._v('Paypal™️')],
                                ),
                                t._v(
                                  ' to process purchases and do not keep your card details on our servers. ',
                                ),
                              ],
                              1,
                            ),
                            t._m(0),
                          ],
                    ],
                    2,
                  )
                : t._e(),
              n('b-loading', {
                attrs: { 'can-cancel': !0 },
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
          )
        },
        a = [
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e
            return r('div', { staticClass: 'has-text-centered' }, [
              r('img', {
                staticClass: 'm-auto',
                attrs: { src: n('84d6'), width: '260', alt: 'safe pay' },
              }),
            ])
          },
        ],
        s = n('1da1'),
        i = (n('99af'), n('498a'), n('96cf'), n('9845')),
        c = n.n(i),
        o = n('fa20'),
        u = {
          data: function () {
            return { version: '', plans: [] }
          },
          props: { subscription: { type: Object, default: {} } },
          computed: {
            isLoading: function () {
              return !this.subscription.userId || 0 === this.plans.length
            },
          },
          created: function () {
            this.initData()
          },
          methods: {
            initData: function () {
              var t = this
              return Object(s['a'])(
                regeneratorRuntime.mark(function e() {
                  var n, r, a
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(o['j'])()
                        case 2:
                          ;(n = e.sent),
                            0 === n.code && (t.plans = n.plans),
                            (r = c.a.runtime.getManifest()),
                            (a = r.version),
                            (t.version = 'v'.concat(a))
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )()
            },
            handleSubscribe: function (t) {
              c.a.tabs.create({
                url: ''
                  .concat(this.$config.PAY_HOST_URL, '/checkout?plan=')
                  .concat(t.id, '&product=')
                  .concat(t.product, '&uid=')
                  .concat(this.subscription.userId, '&app=igemailextractor&v=')
                  .concat(this.version, '&email=')
                  .concat(encodeURIComponent(this.subscription.email))
                  .concat(this.$config.IS_PRODUCTION ? '' : '&test=1'),
              })
            },
            handleCancel: function () {
              var t = this
              this.$buefy.dialog.confirm({
                message:
                  'Are you sure? Sorry to see you go. Can I ask why you’re choosing to cancel and if there’s anything I can do to keep you as a subscriber? <a href="mailto:echobot.dev@gmail.com" target="_blank">echobot.dev@gmail.com</a>',
                cancelText: 'Keep Pro Plan',
                confirmText: 'Unsubscribe',
                type: 'is-primary',
                onConfirm: function () {
                  t.$buefy.dialog.prompt({
                    message:
                      'Please enter the email used to make the purchase.',
                    inputAttrs: { placeholder: '' },
                    trapFocus: !0,
                    onConfirm: function (e) {
                      t.subscription.email === e.trim()
                        ? c.a.tabs.create({ url: t.subscription.cancelUrl })
                        : t.$buefy.snackbar.open({
                            message:
                              'The email you entered does not match the email used to make the purchase.',
                            type: 'is-danger',
                            position: 'is-bottom-right',
                            queue: !1,
                            duration: 3e3,
                          })
                    },
                  })
                },
              })
            },
            handleUpdate: function () {
              c.a.tabs.create({ url: this.subscription.updateUrl })
            },
          },
        },
        l = u,
        p = (n('d9d2'), n('2877')),
        h = Object(p['a'])(l, r, a, !1, null, null, null)
      e['a'] = h.exports
    },
    cf05: function (t, e, n) {
      t.exports = n.p + 'img/logo.944d7a19.png'
    },
    d9d2: function (t, e, n) {
      'use strict'
      n('30b7')
    },
    fa20: function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return w
      }),
        n.d(e, 'h', function () {
          return C
        }),
        n.d(e, 'i', function () {
          return R
        }),
        n.d(e, 'f', function () {
          return j
        }),
        n.d(e, 'd', function () {
          return S
        }),
        n.d(e, 'a', function () {
          return U
        }),
        n.d(e, 'k', function () {
          return T
        }),
        n.d(e, 'e', function () {
          return E
        }),
        n.d(e, 'g', function () {
          return D
        }),
        n.d(e, 'j', function () {
          return $
        }),
        n.d(e, 'c', function () {
          return M
        })
      var r = n('1da1'),
        a =
          (n('96cf'),
          n('d3b7'),
          n('3ca3'),
          n('ddb0'),
          n('9861'),
          n('25f0'),
          n('2b3d'),
          n('fb6a'),
          n('c1f9'),
          n('4c53'),
          n('ac1f'),
          n('00b4'),
          n('9845')),
        s = n.n(a),
        i = n('4333'),
        c = n.n(i),
        o = n('bc3a'),
        u = n.n(o),
        l = n('01ea')
      c.a.initialize(l['a'].PARSE_APPID, l['a'].PARSE_JSKEY),
        (c.a.serverURL = ''.concat(l['a'].HOST_URL, '/parse'))
      var p = s.a.identity.getRedirectURL(),
        h = s.a.runtime.id,
        d = {
          icceojeancmncflpknhmfbfaleindgmi:
            '822420326057-n1ho2mb2lqiue20li3gh7kpurm66k8ps.apps.googleusercontent.com',
          jjonmhcloehjbnboconjdapkkdekaamj:
            '822420326057-tde2foaln08bslu0vdrd6mi1qksps4ph.apps.googleusercontent.com',
        },
        m = new URLSearchParams({
          client_id: d[h],
          response_type: 'token',
          redirect_uri: p,
          scope: 'openid email',
        }),
        f = (function () {
          var t = Object(r['a'])(
            regeneratorRuntime.mark(function t() {
              var e,
                n = arguments
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = !(n.length > 0 && void 0 !== n[0]) || n[0]),
                        t.abrupt(
                          'return',
                          new Promise(function (t, n) {
                            s.a.identity
                              .launchWebAuthFlow({
                                url: 'https://accounts.google.com/o/oauth2/v2/auth?'.concat(
                                  m.toString(),
                                ),
                                interactive: e,
                              })
                              .then(
                                function (e) {
                                  if (s.a.runtime.lastError)
                                    n(s.a.runtime.lastError.message)
                                  else {
                                    var r = new URL(e),
                                      a = new URLSearchParams(r.hash.slice(1)),
                                      i = Object.fromEntries(a.entries())
                                    t(i.access_token)
                                  }
                                },
                                function (t) {
                                  n(''.concat(t))
                                },
                              )
                          }),
                        )
                      )
                    case 2:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )
          return function () {
            return t.apply(this, arguments)
          }
        })(),
        g = (function () {
          var t = Object(r['a'])(
            regeneratorRuntime.mark(function t() {
              var e,
                n = arguments
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = !(n.length > 0 && void 0 !== n[0]) || n[0]),
                        t.abrupt(
                          'return',
                          new Promise(function (t, n) {
                            s.a.identity.getAuthToken(
                              { interactive: e },
                              (function () {
                                var e = Object(r['a'])(
                                  regeneratorRuntime.mark(function e(r) {
                                    return regeneratorRuntime.wrap(function (
                                      e,
                                    ) {
                                      while (1)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (!s.a.runtime.lastError) {
                                              e.next = 3
                                              break
                                            }
                                            return (
                                              n(s.a.runtime.lastError.message),
                                              e.abrupt('return')
                                            )
                                          case 3:
                                            t(r)
                                          case 4:
                                          case 'end':
                                            return e.stop()
                                        }
                                    },
                                    e)
                                  }),
                                )
                                return function (t) {
                                  return e.apply(this, arguments)
                                }
                              })(),
                            )
                          }),
                        )
                      )
                    case 2:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )
          return function () {
            return t.apply(this, arguments)
          }
        })(),
        b = (function () {
          var t = Object(r['a'])(
            regeneratorRuntime.mark(function t(e) {
              var n, r, a, i, c, o, l
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = {}),
                          (t.prev = 1),
                          (t.next = 4),
                          u.a.get(
                            'https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token='.concat(
                              e,
                            ),
                          )
                        )
                      case 4:
                        ;(r = t.sent),
                          (a = r.data),
                          a.sub &&
                            (n = {
                              gid: a.sub,
                              email: a.email,
                              access_token: e,
                            }),
                          (t.next = 12)
                        break
                      case 9:
                        ;(t.prev = 9), (t.t0 = t['catch'](1)), console.log(t.t0)
                      case 12:
                        if (n.gid) {
                          t.next = 24
                          break
                        }
                        return (
                          (t.prev = 13),
                          (t.next = 16),
                          u.a.get(
                            'https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token='.concat(
                              e,
                            ),
                          )
                        )
                      case 16:
                        ;(i = t.sent),
                          (c = i.data),
                          c.id &&
                            (n = {
                              gid: c.id,
                              email: c.email,
                              access_token: e,
                            }),
                          (t.next = 24)
                        break
                      case 21:
                        ;(t.prev = 21),
                          (t.t1 = t['catch'](13)),
                          console.log(t.t1)
                      case 24:
                        if (n.gid) {
                          t.next = 36
                          break
                        }
                        return (
                          (t.prev = 25),
                          (t.next = 28),
                          u.a.get(
                            'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='.concat(
                              e,
                            ),
                          )
                        )
                      case 28:
                        ;(o = t.sent),
                          (l = o.data),
                          l.id &&
                            (n = {
                              gid: l.id,
                              email: l.email,
                              access_token: e,
                            }),
                          (t.next = 36)
                        break
                      case 33:
                        ;(t.prev = 33),
                          (t.t2 = t['catch'](25)),
                          console.log(t.t2)
                      case 36:
                        if (n.access_token)
                          try {
                            s.a.storage.local.set({
                              googleAccessToken: n.access_token,
                            })
                          } catch (p) {
                            console.log(p)
                          }
                        return (
                          console.log('getGoogleUserInfo', n),
                          t.abrupt('return', n)
                        )
                      case 39:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                null,
                [
                  [1, 9],
                  [13, 21],
                  [25, 33],
                ],
              )
            }),
          )
          return function (e) {
            return t.apply(this, arguments)
          }
        })(),
        v = (function () {
          var t = Object(r['a'])(
            regeneratorRuntime.mark(function t() {
              var e,
                n,
                r,
                a,
                s = arguments
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = !(s.length > 0 && void 0 !== s[0]) || s[0]),
                          (n = {}),
                          (t.prev = 2),
                          (t.next = 5),
                          g(e)
                        )
                      case 5:
                        if (((r = t.sent), !r)) {
                          t.next = 10
                          break
                        }
                        return (t.next = 9), b(r)
                      case 9:
                        n = t.sent
                      case 10:
                        t.next = 15
                        break
                      case 12:
                        ;(t.prev = 12),
                          (t.t0 = t['catch'](2)),
                          console.log('launchGetAuthToken', t.t0)
                      case 15:
                        if (n.gid) {
                          t.next = 29
                          break
                        }
                        return (t.prev = 16), (t.next = 19), f(e)
                      case 19:
                        if (((a = t.sent), !a)) {
                          t.next = 24
                          break
                        }
                        return (t.next = 23), b(a)
                      case 23:
                        n = t.sent
                      case 24:
                        t.next = 29
                        break
                      case 26:
                        ;(t.prev = 26),
                          (t.t1 = t['catch'](16)),
                          console.log('launchWebAuthFlow', t.t1)
                      case 29:
                        return (
                          console.log('loginWithGoogle', n),
                          t.abrupt('return', n)
                        )
                      case 31:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                null,
                [
                  [2, 12],
                  [16, 26],
                ],
              )
            }),
          )
          return function () {
            return t.apply(this, arguments)
          }
        })(),
        x = (function () {
          var t = Object(r['a'])(
            regeneratorRuntime.mark(function t(e) {
              var n
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (n = 'https://accounts.google.com/o/oauth2/revoke?token='.concat(
                            e,
                          )),
                          (t.next = 4),
                          u.a.get(n)
                        )
                      case 4:
                        return (
                          (t.prev = 4),
                          (t.next = 7),
                          s.a.identity.removeCachedAuthToken({ token: e })
                        )
                      case 7:
                        return t.finish(4)
                      case 8:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                null,
                [[0, , 4, 8]],
              )
            }),
          )
          return function (e) {
            return t.apply(this, arguments)
          }
        })()
      function w() {
        return y.apply(this, arguments)
      }
      function y() {
        return (
          (y = Object(r['a'])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        'return',
                        new Promise(function (t, e) {
                          c.a.User.currentAsync().then(
                            (function () {
                              var e = Object(r['a'])(
                                regeneratorRuntime.mark(function e(n) {
                                  var r
                                  return regeneratorRuntime.wrap(function (e) {
                                    while (1)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          ;(r = {}),
                                            n &&
                                              (r = {
                                                id: n.id,
                                                username: n.get('username'),
                                                createdAt: n.get('createdAt'),
                                              }),
                                            t({ status: 'ok', user: r })
                                        case 3:
                                        case 'end':
                                          return e.stop()
                                      }
                                  }, e)
                                }),
                              )
                              return function (t) {
                                return e.apply(this, arguments)
                              }
                            })(),
                            function (t) {
                              e(''.concat(t))
                            },
                          )
                        }),
                      )
                    case 1:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )),
          y.apply(this, arguments)
        )
      }
      var k = function () {
        return /Edg/.test(navigator.userAgent)
      }
      function C() {
        return _.apply(this, arguments)
      }
      function _() {
        return (
          (_ = Object(r['a'])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        'return',
                        new Promise(function (t, e) {
                          v().then(
                            (function () {
                              var n = Object(r['a'])(
                                regeneratorRuntime.mark(function n(r) {
                                  var a, s, i, o, u, l
                                  return regeneratorRuntime.wrap(
                                    function (n) {
                                      while (1)
                                        switch ((n.prev = n.next)) {
                                          case 0:
                                            if (
                                              ((a = r.email),
                                              (s = r.gid),
                                              !a || !s)
                                            ) {
                                              n.next = 37
                                              break
                                            }
                                            return (
                                              (i = {}),
                                              (o = new c.a.Query(c.a.User)),
                                              o.equalTo('username', a),
                                              (n.next = 7),
                                              o.first()
                                            )
                                          case 7:
                                            if (((u = n.sent), !u || !u.id)) {
                                              n.next = 20
                                              break
                                            }
                                            return (
                                              (n.prev = 9),
                                              (n.next = 12),
                                              c.a.User.logIn(a, s, {
                                                usePost: !0,
                                              })
                                            )
                                          case 12:
                                            ;(i = n.sent), (n.next = 18)
                                            break
                                          case 15:
                                            ;(n.prev = 15),
                                              (n.t0 = n['catch'](9)),
                                              console.log(n.t0)
                                          case 18:
                                            n.next = 34
                                            break
                                          case 20:
                                            return (
                                              (n.prev = 20),
                                              (l = new c.a.User()),
                                              l.set('username', a),
                                              l.set('password', s),
                                              l.set('email', a),
                                              l.set(
                                                'browser',
                                                k() ? 'edge' : 'chrome',
                                              ),
                                              (n.next = 28),
                                              l.signUp()
                                            )
                                          case 28:
                                            ;(i = n.sent), (n.next = 34)
                                            break
                                          case 31:
                                            ;(n.prev = 31),
                                              (n.t1 = n['catch'](20)),
                                              console.log(n.t1)
                                          case 34:
                                            i && i.id
                                              ? t({ status: 'ok' })
                                              : e(),
                                              (n.next = 38)
                                            break
                                          case 37:
                                            e()
                                          case 38:
                                          case 'end':
                                            return n.stop()
                                        }
                                    },
                                    n,
                                    null,
                                    [
                                      [9, 15],
                                      [20, 31],
                                    ],
                                  )
                                }),
                              )
                              return function (t) {
                                return n.apply(this, arguments)
                              }
                            })(),
                          )
                        }),
                      )
                    case 1:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )),
          _.apply(this, arguments)
        )
      }
      function R() {
        return P.apply(this, arguments)
      }
      function P() {
        return (
          (P = Object(r['a'])(
            regeneratorRuntime.mark(function t() {
              var e,
                n = arguments
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = !(n.length > 0 && void 0 !== n[0]) || n[0]),
                        t.abrupt(
                          'return',
                          new Promise(function (t, n) {
                            c.a.User.logOut().then(
                              Object(r['a'])(
                                regeneratorRuntime.mark(function n() {
                                  var r, a
                                  return regeneratorRuntime.wrap(
                                    function (n) {
                                      while (1)
                                        switch ((n.prev = n.next)) {
                                          case 0:
                                            if (!e) {
                                              n.next = 12
                                              break
                                            }
                                            return (
                                              (n.prev = 1),
                                              (n.next = 4),
                                              s.a.storage.local.get([
                                                'googleAccessToken',
                                              ])
                                            )
                                          case 4:
                                            ;(r = n.sent),
                                              (a =
                                                (r && r.googleAccessToken) ||
                                                ''),
                                              a &&
                                                (x(a),
                                                s.a.storage.local.remove(a)),
                                              (n.next = 12)
                                            break
                                          case 9:
                                            ;(n.prev = 9),
                                              (n.t0 = n['catch'](1)),
                                              console.log(n.t0)
                                          case 12:
                                            t({ status: 'ok' })
                                          case 13:
                                          case 'end':
                                            return n.stop()
                                        }
                                    },
                                    n,
                                    null,
                                    [[1, 9]],
                                  )
                                }),
                              ),
                              function (t) {
                                n(''.concat(t))
                              },
                            )
                          }),
                        )
                      )
                    case 2:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )),
          P.apply(this, arguments)
        )
      }
      function j() {
        return O.apply(this, arguments)
      }
      function O() {
        return (
          (O = Object(r['a'])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        'return',
                        new Promise(function (t, e) {
                          c.a.Cloud.run('isPro').then(
                            function (e) {
                              t(e)
                            },
                            function (t) {
                              e(''.concat(t))
                            },
                          )
                        }),
                      )
                    case 1:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )),
          O.apply(this, arguments)
        )
      }
      function S(t) {
        return z.apply(this, arguments)
      }
      function z() {
        return (
          (z = Object(r['a'])(
            regeneratorRuntime.mark(function t(e) {
              var n, r, a
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = e.extractionType),
                        (r = e.extractionData),
                        (a = e.historyId),
                        t.abrupt(
                          'return',
                          new Promise(function (t, e) {
                            c.a.Cloud.run('getHistoryItem', {
                              extractionType: n,
                              extractionData: r,
                              historyId: a,
                            }).then(
                              function (e) {
                                t(e)
                              },
                              function (t) {
                                e(''.concat(t))
                              },
                            )
                          }),
                        )
                      )
                    case 2:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )),
          z.apply(this, arguments)
        )
      }
      function U(t) {
        return A.apply(this, arguments)
      }
      function A() {
        return (
          (A = Object(r['a'])(
            regeneratorRuntime.mark(function t(e) {
              var n, r, a, s
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = e.extractionType),
                        (r = e.extractionData),
                        (a = e.isPro),
                        (s = e.sharedData),
                        t.abrupt(
                          'return',
                          new Promise(function (t, e) {
                            c.a.Cloud.run('addHistoryItem', {
                              extractionType: n,
                              extractionData: r,
                              isPro: a,
                              sharedData: s,
                            }).then(
                              function (e) {
                                t(e)
                              },
                              function (t) {
                                e(''.concat(t))
                              },
                            )
                          }),
                        )
                      )
                    case 2:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )),
          A.apply(this, arguments)
        )
      }
      function T(t) {
        return I.apply(this, arguments)
      }
      function I() {
        return (
          (I = Object(r['a'])(
            regeneratorRuntime.mark(function t(e) {
              var n, r, a, s, i, o, u, l, p, h, d, m, f, g
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = e.id),
                        (r = e.version),
                        (a = e.extractionType),
                        (s = e.extractionData),
                        (i = e.itemsCount),
                        (o = e.count),
                        (u = e.lastCursor),
                        (l = e.scrapedCount),
                        (p = e.cursorScrapedCount),
                        (h = e.lastScrapedCount),
                        (d = e.token),
                        (m = e.isFromComplete),
                        (f = e.isFromExport),
                        (g = e.isFromCursorChange),
                        t.abrupt(
                          'return',
                          new Promise(function (t, e) {
                            c.a.Cloud.run('updateHistory', {
                              id: n,
                              version: r,
                              extractionType: a,
                              extractionData: s,
                              itemsCount: i,
                              count: o,
                              lastCursor: u,
                              scrapedCount: l,
                              lastScrapedCount: h,
                              token: d,
                              cursorScrapedCount: p,
                              isFromComplete: m,
                              isFromExport: f,
                              isFromCursorChange: g,
                            }).then(
                              function (e) {
                                t(e)
                              },
                              function (t) {
                                e(''.concat(t))
                              },
                            )
                          }),
                        )
                      )
                    case 2:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )),
          I.apply(this, arguments)
        )
      }
      function E(t) {
        return L.apply(this, arguments)
      }
      function L() {
        return (
          (L = Object(r['a'])(
            regeneratorRuntime.mark(function t(e) {
              var n, r
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = e.page),
                        (r = void 0 === n ? 1 : n),
                        t.abrupt(
                          'return',
                          new Promise(function (t, e) {
                            c.a.Cloud.run('getHistorys', { page: r }).then(
                              function (e) {
                                t(e)
                              },
                              function (t) {
                                e(''.concat(t))
                              },
                            )
                          }),
                        )
                      )
                    case 2:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )),
          L.apply(this, arguments)
        )
      }
      function D() {
        return F.apply(this, arguments)
      }
      function F() {
        return (
          (F = Object(r['a'])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        'return',
                        new Promise(function (t, e) {
                          c.a.Cloud.run('getUseCount').then(
                            function (e) {
                              t(e)
                            },
                            function (t) {
                              e(''.concat(t))
                            },
                          )
                        }),
                      )
                    case 1:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )),
          F.apply(this, arguments)
        )
      }
      function $() {
        return H.apply(this, arguments)
      }
      function H() {
        return (
          (H = Object(r['a'])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        'return',
                        new Promise(function (t, e) {
                          c.a.Cloud.run('plans').then(
                            function (e) {
                              t({ code: 0, plans: e })
                            },
                            function (t) {
                              e(''.concat(t))
                            },
                          )
                        }),
                      )
                    case 1:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )),
          H.apply(this, arguments)
        )
      }
      function M() {
        return q.apply(this, arguments)
      }
      function q() {
        return (
          (q = Object(r['a'])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        'return',
                        new Promise(function (t, e) {
                          c.a.Cloud.run('getConfigs').then(
                            function (e) {
                              t(e)
                            },
                            function (t) {
                              e(''.concat(t))
                            },
                          )
                        }),
                      )
                    case 1:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            }),
          )),
          q.apply(this, arguments)
        )
      }
    },
  },
])

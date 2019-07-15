"use strict"
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports["default"] = exports.sourceNodes = void 0)
var _regenerator = _interopRequireDefault(
    require("@babel/runtime/regenerator")
  ),
  _asyncToGenerator2 = _interopRequireDefault(
    require("@babel/runtime/helpers/asyncToGenerator")
  ),
  _lodash = _interopRequireDefault(require("lodash")),
  _fp = _interopRequireDefault(require("lodash/fp")),
  _gatsbySourceFilesystem = require("gatsby-source-filesystem"),
  _utils = require("./utils"),
  sourceNodes = (function() {
    var a = (0, _asyncToGenerator2["default"])(
      _regenerator["default"].mark(function a(b, c) {
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
        return _regenerator["default"].wrap(function(a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                return (
                  (d = b.actions),
                  (e = b.cache),
                  (f = b.createNodeId),
                  (g = b.getNodes),
                  (h = b.reporter),
                  (i = b.store),
                  (j = c.accessKeyId),
                  (k = c.secretAccessKey),
                  (l = c.bucketName),
                  (m = c.domain),
                  (n = void 0 === m ? "s3.amazonaws.com" : m),
                  (o = c.region),
                  (p = void 0 === o ? "us-east-1" : o),
                  (q = c.protocol),
                  (r = void 0 === q ? "http" : q),
                  (s = d.createNode),
                  (t = d.touchNode),
                  (u = _lodash["default"].filter(
                    g(),
                    _lodash["default"].flow(
                      _fp["default"].get("internal.owner"),
                      _fp["default"].eq("gatsby-source-s3-image")
                    )
                  )),
                  (v = _lodash["default"].groupBy(u, "Key")),
                  (w = (0, _utils.createS3Instance)({
                    accessKeyId: j,
                    domain: n,
                    secretAccessKey: k,
                  })),
                  (a.next = 8),
                  w.listObjectsV2({ Bucket: l }).promise()
                )
              case 8:
                if (
                  ((x = a.sent),
                  (y = _lodash["default"].get(x, "Contents", [])),
                  !_lodash["default"].isEmpty(y))
                ) {
                  a.next = 12
                  break
                }
                return a.abrupt("return", [])
              case 12:
                return (
                  (z = _lodash["default"].filter(y, function(a) {
                    var b = _lodash["default"].first(v[a.Key])
                    if (b && a.LastModified) {
                      var c =
                        a.LastModified.getTime() === b.LastModified.getTime()
                      return c
                    }
                    return !1
                  })),
                  z.forEach(function(a) {
                    var b = _lodash["default"].first(v[a.Key])
                    t({ nodeId: _lodash["default"].get(b, "id") })
                  }),
                  a.abrupt(
                    "return",
                    Promise.all(
                      _lodash["default"].compact(
                        y.map(
                          (function() {
                            var a = (0, _asyncToGenerator2["default"])(
                              _regenerator["default"].mark(function a(b) {
                                var c, d, g
                                return _regenerator["default"].wrap(function(
                                  a
                                ) {
                                  for (;;)
                                    switch ((a.prev = a.next)) {
                                      case 0:
                                        if (
                                          ((c = _lodash["default"].get(
                                            b,
                                            "Key"
                                          )),
                                          c && (0, _utils.isImage)(b))
                                        ) {
                                          a.next = 3
                                          break
                                        }
                                        return a.abrupt("return")
                                      case 3:
                                        if (
                                          ((d = (0,
                                          _utils.constructS3UrlForAsset)({
                                            bucketName: l,
                                            domain: n,
                                            key: c,
                                            region: p,
                                            protocol: r,
                                          })),
                                          d)
                                        ) {
                                          a.next = 6
                                          break
                                        }
                                        return a.abrupt("return")
                                      case 6:
                                        return (
                                          (a.next = 8),
                                          (0,
                                          _gatsbySourceFilesystem.createRemoteFileNode)(
                                            {
                                              cache: e,
                                              createNode: s,
                                              createNodeId: f,
                                              reporter: h,
                                              store: i,
                                              url: d,
                                            }
                                          )
                                        )
                                      case 8:
                                        if (((g = a.sent), g)) {
                                          a.next = 11
                                          break
                                        }
                                        return a.abrupt("return")
                                      case 11:
                                        return a.abrupt(
                                          "return",
                                          (0, _utils.createS3ImageAssetNode)({
                                            createNode: s,
                                            createNodeId: f,
                                            entity: b,
                                            fileNode: g,
                                            url: d,
                                          })
                                        )
                                      case 12:
                                      case "end":
                                        return a.stop()
                                    }
                                },
                                a)
                              })
                            )
                            return function() {
                              return a.apply(this, arguments)
                            }
                          })()
                        )
                      )
                    )
                  )
                )
              case 15:
              case "end":
                return a.stop()
            }
        }, a)
      })
    )
    return function() {
      return a.apply(this, arguments)
    }
  })()
exports.sourceNodes = sourceNodes
var _default = sourceNodes
exports["default"] = _default

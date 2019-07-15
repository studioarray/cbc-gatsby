"use strict"
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.createS3ImageAssetNode = exports.constructS3UrlForAsset = exports.getEntityNodeFields = exports.isImage = exports.createS3Instance = exports.S3SourceGatsbyNodeType = void 0)
var _defineProperty2 = _interopRequireDefault(
    require("@babel/runtime/helpers/defineProperty")
  ),
  _awsSdk = require("aws-sdk"),
  _lodash = _interopRequireDefault(require("lodash")),
  _fp = _interopRequireDefault(require("lodash/fp")),
  _invariant = _interopRequireDefault(require("invariant")),
  _mimeTypes = _interopRequireDefault(require("mime-types"))
function ownKeys(a, b) {
  var c = Object.keys(a)
  return (
    Object.getOwnPropertySymbols &&
      c.push.apply(c, Object.getOwnPropertySymbols(a)),
    b &&
      (c = c.filter(function(b) {
        return Object.getOwnPropertyDescriptor(a, b).enumerable
      })),
    c
  )
}
function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++)
    (b = null == arguments[c] ? {} : arguments[c]),
      c % 2
        ? ownKeys(b, !0).forEach(function(c) {
            ;(0, _defineProperty2["default"])(a, c, b[c])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
        : ownKeys(b).forEach(function(c) {
            Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c))
          })
  return a
}
var S3SourceGatsbyNodeType = "S3ImageAsset"
exports.S3SourceGatsbyNodeType = "S3ImageAsset"
var createS3Instance = function(a) {
  var b = a.accessKeyId,
    c = a.domain,
    d = a.secretAccessKey
  return new _awsSdk.S3({
    accessKeyId: b,
    apiVersion: "2006-03-01",
    endpoint: c,
    s3ForcePathStyle: !0,
    secretAccessKey: d,
    signatureVersion: "v4",
  })
}
exports.createS3Instance = createS3Instance
var isImage = function(a) {
  var b = _lodash["default"].flow(
    _fp["default"].get("Key"),
    _fp["default"].split("."),
    _fp["default"].last
  )(a)
  return _lodash["default"].includes(["gif", "jpeg", "jpg", "png", "webp"], b)
}
exports.isImage = isImage
var getEntityNodeFields = function(a) {
  var b = a.entity,
    c = a.fileNode,
    d = b.ETag,
    e = b.Key
  ;(0, _invariant["default"])(e, "Entity Key must be defined.")
  var f = _mimeTypes["default"].lookup(e)
  ;(0, _invariant["default"])(
    f,
    "Unable to determine MIME media type for entity: ".concat(b.Key)
  )
  var g = d.replace(/"/g, ""),
    h = _lodash["default"].get(c, "id"),
    i = _lodash["default"].get(c, "absolutePath")
  return { absolutePath: i, fileNodeId: h, Key: e, mediaType: f, objectHash: g }
}
exports.getEntityNodeFields = getEntityNodeFields
var constructS3UrlForAsset = function(a) {
  var b = a.bucketName,
    c = a.domain,
    d = a.region,
    e = a.key,
    f = a.protocol,
    g = void 0 === f ? "https" : f
  if (!(e && (b || c)))
    throw new Error("Unable to construct S3 URL for asset: invalid params.")
  var h = _lodash["default"].includes(c, "amazonaws.com"),
    i = "https://cbc40eb2a4e93534a9994b559d8b97aec95-prod.s3-eu-west-1.amazonaws.com/".concat(
      e
    )
  return i
}
exports.constructS3UrlForAsset = constructS3UrlForAsset
var createS3ImageAssetNode = function(a) {
  var b = a.createNode,
    c = a.createNodeId,
    d = a.entity,
    e = a.fileNode,
    f = a.url,
    g = getEntityNodeFields({ entity: d, fileNode: e }),
    h = g.absolutePath,
    i = g.fileNodeId,
    j = g.Key,
    k = g.mediaType,
    l = g.objectHash
  return b(
    _objectSpread({}, d, {
      absolutePath: h,
      ETag: l,
      id: c(l),
      Key: j,
      parent: i,
      internal: {
        content: f,
        contentDigest: l,
        mediaType: k,
        type: S3SourceGatsbyNodeType,
      },
    })
  )
}
exports.createS3ImageAssetNode = createS3ImageAssetNode

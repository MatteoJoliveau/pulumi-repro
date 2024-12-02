"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIpRoutesOutput = exports.getIpRoutes = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getIpRoutes(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("routeros:index/getIpRoutes:getIpRoutes", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}
exports.getIpRoutes = getIpRoutes;
function getIpRoutesOutput(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("routeros:index/getIpRoutes:getIpRoutes", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}
exports.getIpRoutesOutput = getIpRoutesOutput;
//# sourceMappingURL=getIpRoutes.js.map
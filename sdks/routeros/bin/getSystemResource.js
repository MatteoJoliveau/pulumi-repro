"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemResourceOutput = exports.getSystemResource = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getSystemResource(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("routeros:index/getSystemResource:getSystemResource", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "___skip_": args.___skip_,
        "id": args.id,
    }, opts, utilities.getPackage());
}
exports.getSystemResource = getSystemResource;
function getSystemResourceOutput(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("routeros:index/getSystemResource:getSystemResource", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "___skip_": args.___skip_,
        "id": args.id,
    }, opts, utilities.getPackage());
}
exports.getSystemResourceOutput = getSystemResourceOutput;
//# sourceMappingURL=getSystemResource.js.map
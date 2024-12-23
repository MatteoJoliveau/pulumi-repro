"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIpArpOutput = exports.getIpArp = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getIpArp(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("routeros:index/getIpArp:getIpArp", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}
exports.getIpArp = getIpArp;
function getIpArpOutput(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("routeros:index/getIpArp:getIpArp", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}
exports.getIpArpOutput = getIpArpOutput;
//# sourceMappingURL=getIpArp.js.map
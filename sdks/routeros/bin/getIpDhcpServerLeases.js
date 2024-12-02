"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIpDhcpServerLeasesOutput = exports.getIpDhcpServerLeases = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getIpDhcpServerLeases(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("routeros:index/getIpDhcpServerLeases:getIpDhcpServerLeases", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}
exports.getIpDhcpServerLeases = getIpDhcpServerLeases;
function getIpDhcpServerLeasesOutput(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("routeros:index/getIpDhcpServerLeases:getIpDhcpServerLeases", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}
exports.getIpDhcpServerLeasesOutput = getIpDhcpServerLeasesOutput;
//# sourceMappingURL=getIpDhcpServerLeases.js.map
"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIpFirewallOutput = exports.getIpFirewall = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getIpFirewall(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("routeros:index/getIpFirewall:getIpFirewall", {
        "___skip_": args.___skip_,
        "addressLists": args.addressLists,
        "id": args.id,
        "mangles": args.mangles,
        "nats": args.nats,
        "rules": args.rules,
    }, opts, utilities.getPackage());
}
exports.getIpFirewall = getIpFirewall;
function getIpFirewallOutput(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("routeros:index/getIpFirewall:getIpFirewall", {
        "___skip_": args.___skip_,
        "addressLists": args.addressLists,
        "id": args.id,
        "mangles": args.mangles,
        "nats": args.nats,
        "rules": args.rules,
    }, opts, utilities.getPackage());
}
exports.getIpFirewallOutput = getIpFirewallOutput;
//# sourceMappingURL=getIpFirewall.js.map
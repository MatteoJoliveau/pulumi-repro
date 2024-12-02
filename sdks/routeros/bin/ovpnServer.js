"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.OvpnServer = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class OvpnServer extends pulumi.CustomResource {
    /**
     * Get an existing OvpnServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new OvpnServer(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of OvpnServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OvpnServer.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["auths"] = state ? state.auths : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["ciphers"] = state ? state.ciphers : undefined;
            resourceInputs["defaultProfile"] = state ? state.defaultProfile : undefined;
            resourceInputs["enableTunIpv6"] = state ? state.enableTunIpv6 : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["ipv6PrefixLen"] = state ? state.ipv6PrefixLen : undefined;
            resourceInputs["keepaliveTimeout"] = state ? state.keepaliveTimeout : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["maxMtu"] = state ? state.maxMtu : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["netmask"] = state ? state.netmask : undefined;
            resourceInputs["ovpnServerId"] = state ? state.ovpnServerId : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["pushRoutes"] = state ? state.pushRoutes : undefined;
            resourceInputs["redirectGateways"] = state ? state.redirectGateways : undefined;
            resourceInputs["renegSec"] = state ? state.renegSec : undefined;
            resourceInputs["requireClientCertificate"] = state ? state.requireClientCertificate : undefined;
            resourceInputs["tlsVersion"] = state ? state.tlsVersion : undefined;
            resourceInputs["tunServerIpv6"] = state ? state.tunServerIpv6 : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["auths"] = args ? args.auths : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["ciphers"] = args ? args.ciphers : undefined;
            resourceInputs["defaultProfile"] = args ? args.defaultProfile : undefined;
            resourceInputs["enableTunIpv6"] = args ? args.enableTunIpv6 : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["ipv6PrefixLen"] = args ? args.ipv6PrefixLen : undefined;
            resourceInputs["keepaliveTimeout"] = args ? args.keepaliveTimeout : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["maxMtu"] = args ? args.maxMtu : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["netmask"] = args ? args.netmask : undefined;
            resourceInputs["ovpnServerId"] = args ? args.ovpnServerId : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["pushRoutes"] = args ? args.pushRoutes : undefined;
            resourceInputs["redirectGateways"] = args ? args.redirectGateways : undefined;
            resourceInputs["renegSec"] = args ? args.renegSec : undefined;
            resourceInputs["requireClientCertificate"] = args ? args.requireClientCertificate : undefined;
            resourceInputs["tlsVersion"] = args ? args.tlsVersion : undefined;
            resourceInputs["tunServerIpv6"] = args ? args.tunServerIpv6 : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OvpnServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.OvpnServer = OvpnServer;
/** @internal */
OvpnServer.__pulumiType = 'routeros:index/ovpnServer:OvpnServer';
//# sourceMappingURL=ovpnServer.js.map
"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceLteApn = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class InterfaceLteApn extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceLteApn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new InterfaceLteApn(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of InterfaceLteApn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceLteApn.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["addDefaultRoute"] = state ? state.addDefaultRoute : undefined;
            resourceInputs["apn"] = state ? state.apn : undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["defaultRouteDistance"] = state ? state.defaultRouteDistance : undefined;
            resourceInputs["interfaceLteApnId"] = state ? state.interfaceLteApnId : undefined;
            resourceInputs["ipType"] = state ? state.ipType : undefined;
            resourceInputs["ipv6Interface"] = state ? state.ipv6Interface : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["number"] = state ? state.number : undefined;
            resourceInputs["passthroughInterface"] = state ? state.passthroughInterface : undefined;
            resourceInputs["passthroughMac"] = state ? state.passthroughMac : undefined;
            resourceInputs["passthroughSubnetSelection"] = state ? state.passthroughSubnetSelection : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["useNetworkApn"] = state ? state.useNetworkApn : undefined;
            resourceInputs["usePeerDns"] = state ? state.usePeerDns : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["addDefaultRoute"] = args ? args.addDefaultRoute : undefined;
            resourceInputs["apn"] = args ? args.apn : undefined;
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["defaultRouteDistance"] = args ? args.defaultRouteDistance : undefined;
            resourceInputs["interfaceLteApnId"] = args ? args.interfaceLteApnId : undefined;
            resourceInputs["ipType"] = args ? args.ipType : undefined;
            resourceInputs["ipv6Interface"] = args ? args.ipv6Interface : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["number"] = args ? args.number : undefined;
            resourceInputs["passthroughInterface"] = args ? args.passthroughInterface : undefined;
            resourceInputs["passthroughMac"] = args ? args.passthroughMac : undefined;
            resourceInputs["passthroughSubnetSelection"] = args ? args.passthroughSubnetSelection : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["useNetworkApn"] = args ? args.useNetworkApn : undefined;
            resourceInputs["usePeerDns"] = args ? args.usePeerDns : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["default"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceLteApn.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.InterfaceLteApn = InterfaceLteApn;
/** @internal */
InterfaceLteApn.__pulumiType = 'routeros:index/interfaceLteApn:InterfaceLteApn';
//# sourceMappingURL=interfaceLteApn.js.map
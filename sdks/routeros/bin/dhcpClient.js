"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.DhcpClient = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class DhcpClient extends pulumi.CustomResource {
    /**
     * Get an existing DhcpClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new DhcpClient(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of DhcpClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DhcpClient.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["addDefaultRoute"] = state ? state.addDefaultRoute : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["defaultRouteDistance"] = state ? state.defaultRouteDistance : undefined;
            resourceInputs["dhcpClientId"] = state ? state.dhcpClientId : undefined;
            resourceInputs["dhcpOptions"] = state ? state.dhcpOptions : undefined;
            resourceInputs["dhcpServer"] = state ? state.dhcpServer : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["expiresAfter"] = state ? state.expiresAfter : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["primaryDns"] = state ? state.primaryDns : undefined;
            resourceInputs["primaryNtp"] = state ? state.primaryNtp : undefined;
            resourceInputs["script"] = state ? state.script : undefined;
            resourceInputs["secondaryDns"] = state ? state.secondaryDns : undefined;
            resourceInputs["secondaryNtp"] = state ? state.secondaryNtp : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["usePeerDns"] = state ? state.usePeerDns : undefined;
            resourceInputs["usePeerNtp"] = state ? state.usePeerNtp : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["addDefaultRoute"] = args ? args.addDefaultRoute : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["defaultRouteDistance"] = args ? args.defaultRouteDistance : undefined;
            resourceInputs["dhcpClientId"] = args ? args.dhcpClientId : undefined;
            resourceInputs["dhcpOptions"] = args ? args.dhcpOptions : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["script"] = args ? args.script : undefined;
            resourceInputs["usePeerDns"] = args ? args.usePeerDns : undefined;
            resourceInputs["usePeerNtp"] = args ? args.usePeerNtp : undefined;
            resourceInputs["address"] = undefined /*out*/;
            resourceInputs["dhcpServer"] = undefined /*out*/;
            resourceInputs["dynamic"] = undefined /*out*/;
            resourceInputs["expiresAfter"] = undefined /*out*/;
            resourceInputs["gateway"] = undefined /*out*/;
            resourceInputs["invalid"] = undefined /*out*/;
            resourceInputs["primaryDns"] = undefined /*out*/;
            resourceInputs["primaryNtp"] = undefined /*out*/;
            resourceInputs["secondaryDns"] = undefined /*out*/;
            resourceInputs["secondaryNtp"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DhcpClient.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.DhcpClient = DhcpClient;
/** @internal */
DhcpClient.__pulumiType = 'routeros:index/dhcpClient:DhcpClient';
//# sourceMappingURL=dhcpClient.js.map
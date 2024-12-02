"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceMacvlan = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class InterfaceMacvlan extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceMacvlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new InterfaceMacvlan(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of InterfaceMacvlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceMacvlan.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["arp"] = state ? state.arp : undefined;
            resourceInputs["arpTimeout"] = state ? state.arpTimeout : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceMacvlanId"] = state ? state.interfaceMacvlanId : undefined;
            resourceInputs["l2mtu"] = state ? state.l2mtu : undefined;
            resourceInputs["loopProtect"] = state ? state.loopProtect : undefined;
            resourceInputs["loopProtectDisableTime"] = state ? state.loopProtectDisableTime : undefined;
            resourceInputs["loopProtectSendInterval"] = state ? state.loopProtectSendInterval : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["arp"] = args ? args.arp : undefined;
            resourceInputs["arpTimeout"] = args ? args.arpTimeout : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceMacvlanId"] = args ? args.interfaceMacvlanId : undefined;
            resourceInputs["loopProtect"] = args ? args.loopProtect : undefined;
            resourceInputs["loopProtectDisableTime"] = args ? args.loopProtectDisableTime : undefined;
            resourceInputs["loopProtectSendInterval"] = args ? args.loopProtectSendInterval : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["l2mtu"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceMacvlan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.InterfaceMacvlan = InterfaceMacvlan;
/** @internal */
InterfaceMacvlan.__pulumiType = 'routeros:index/interfaceMacvlan:InterfaceMacvlan';
//# sourceMappingURL=interfaceMacvlan.js.map
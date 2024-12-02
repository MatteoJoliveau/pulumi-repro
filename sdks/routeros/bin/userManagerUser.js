"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagerUser = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class UserManagerUser extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new UserManagerUser(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of UserManagerUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserManagerUser.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["callerId"] = state ? state.callerId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["otpSecret"] = state ? state.otpSecret : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["sharedUsers"] = state ? state.sharedUsers : undefined;
            resourceInputs["userManagerUserId"] = state ? state.userManagerUserId : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["callerId"] = args ? args.callerId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["otpSecret"] = args ? args.otpSecret : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["sharedUsers"] = args ? args.sharedUsers : undefined;
            resourceInputs["userManagerUserId"] = args ? args.userManagerUserId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserManagerUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.UserManagerUser = UserManagerUser;
/** @internal */
UserManagerUser.__pulumiType = 'routeros:index/userManagerUser:UserManagerUser';
//# sourceMappingURL=userManagerUser.js.map
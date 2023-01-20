(() => {
/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */ function $c2ad8815cacf03f2$export$f2b03a571ad3ebaf(plugin, type) {
    var plugins = window.plugins || [];
    window.plugins = plugins;
    if (!plugin) throw new Error("plugin not specified");
    if (!type) throw new Error("type not specified");
    plugins.push({
        plugin: plugin,
        type: type
    });
}
function $c2ad8815cacf03f2$export$f7682819c75f2363(component) {
    $c2ad8815cacf03f2$export$f2b03a571ad3ebaf(component, "client");
}
function $c2ad8815cacf03f2$export$d71f0820673ef38a(module) {
    $c2ad8815cacf03f2$export$f2b03a571ad3ebaf(module, "bpmn.modeler.additionalModules");
}
function $c2ad8815cacf03f2$export$30f301451b7d77a0(module) {
    $c2ad8815cacf03f2$export$f2b03a571ad3ebaf(module, "bpmn.platform.modeler.additionalModules");
}
function $c2ad8815cacf03f2$export$4851165e468ba3be(module) {
    $c2ad8815cacf03f2$export$f2b03a571ad3ebaf(module, "bpmn.cloud.modeler.additionalModules");
}
function $c2ad8815cacf03f2$export$2cc990959a7c8f64(descriptor) {
    $c2ad8815cacf03f2$export$f2b03a571ad3ebaf(descriptor, "bpmn.modeler.moddleExtension");
}
function $c2ad8815cacf03f2$export$8a441b700567cbfc(descriptor) {
    $c2ad8815cacf03f2$export$f2b03a571ad3ebaf(descriptor, "bpmn.platform.modeler.moddleExtension");
}
function $c2ad8815cacf03f2$export$302c28f396e2450(descriptor) {
    $c2ad8815cacf03f2$export$f2b03a571ad3ebaf(descriptor, "bpmn.cloud.modeler.moddleExtension");
}
function $c2ad8815cacf03f2$export$c6064514740c372d(descriptor) {
    $c2ad8815cacf03f2$export$f2b03a571ad3ebaf(descriptor, "dmn.modeler.moddleExtension");
}
function $c2ad8815cacf03f2$export$ebb056fea7b61af4(descriptor) {
    $c2ad8815cacf03f2$export$f2b03a571ad3ebaf(descriptor, "dmn.cloud.modeler.moddleExtension");
}
function $c2ad8815cacf03f2$export$bac42d94b84e0a2b(descriptor) {
    $c2ad8815cacf03f2$export$f2b03a571ad3ebaf(descriptor, "dmn.platform.modeler.moddleExtension");
}
function $c2ad8815cacf03f2$export$d299678b2b98fecd(module, components) {
    if (!Array.isArray(components)) components = [
        components
    ];
    components.forEach((c)=>$c2ad8815cacf03f2$export$f2b03a571ad3ebaf(module, `dmn.modeler.${c}.additionalModules`));
}
function $c2ad8815cacf03f2$export$9e2bbc2f6c0b88c7(module, components) {
    if (!Array.isArray(components)) components = [
        components
    ];
    components.forEach((c)=>$c2ad8815cacf03f2$export$f2b03a571ad3ebaf(module, `dmn.cloud.modeler.${c}.additionalModules`));
}
function $c2ad8815cacf03f2$export$be39714029f50e5e(module, components) {
    if (!Array.isArray(components)) components = [
        components
    ];
    components.forEach((c)=>$c2ad8815cacf03f2$export$f2b03a571ad3ebaf(module, `dmn.platform.modeler.${c}.additionalModules`));
}
function $c2ad8815cacf03f2$export$112e2b29ca639ab1() {
    return window.getModelerDirectory();
}
function $c2ad8815cacf03f2$export$9d4aa889fc4d5d55() {
    return window.getPluginsDirectory();
}


/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */ function $81cf94ad8ad2d3fa$export$bffa455ba8c619a6(arr) {
    return Array.prototype.concat.apply([], arr);
}
const $81cf94ad8ad2d3fa$var$nativeToString = Object.prototype.toString;
const $81cf94ad8ad2d3fa$var$nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function $81cf94ad8ad2d3fa$export$fce6876652108ab(obj) {
    return obj === undefined;
}
function $81cf94ad8ad2d3fa$export$4e62c701997796c1(obj) {
    return obj !== undefined;
}
function $81cf94ad8ad2d3fa$export$984f70f9382f5d27(obj) {
    return obj == null;
}
function $81cf94ad8ad2d3fa$export$43bee75e5e14138e(obj) {
    return $81cf94ad8ad2d3fa$var$nativeToString.call(obj) === "[object Array]";
}
function $81cf94ad8ad2d3fa$export$a6cdc56e425d0d0a(obj) {
    return $81cf94ad8ad2d3fa$var$nativeToString.call(obj) === "[object Object]";
}
function $81cf94ad8ad2d3fa$export$7e4aa119212bc614(obj) {
    return $81cf94ad8ad2d3fa$var$nativeToString.call(obj) === "[object Number]";
}
function $81cf94ad8ad2d3fa$export$f6e2535fb5126e54(obj) {
    const tag = $81cf94ad8ad2d3fa$var$nativeToString.call(obj);
    return tag === "[object Function]" || tag === "[object AsyncFunction]" || tag === "[object GeneratorFunction]" || tag === "[object AsyncGeneratorFunction]" || tag === "[object Proxy]";
}
function $81cf94ad8ad2d3fa$export$844ec244b1367d54(obj) {
    return $81cf94ad8ad2d3fa$var$nativeToString.call(obj) === "[object String]";
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */ function $81cf94ad8ad2d3fa$export$d0c8ecbd4ed8940c(obj) {
    if ($81cf94ad8ad2d3fa$export$43bee75e5e14138e(obj)) return;
    throw new Error("must supply array");
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */ function $81cf94ad8ad2d3fa$export$a4f4bb6b1453fff5(target, key) {
    return $81cf94ad8ad2d3fa$var$nativeHasOwnProperty.call(target, key);
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */ function $81cf94ad8ad2d3fa$export$71aa6c912b956294(collection, matcher) {
    matcher = $81cf94ad8ad2d3fa$var$toMatcher(matcher);
    let match;
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(collection, function(val, key) {
        if (matcher(val, key)) {
            match = val;
            return false;
        }
    });
    return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */ function $81cf94ad8ad2d3fa$export$de3a4d4a0d731119(collection, matcher) {
    matcher = $81cf94ad8ad2d3fa$var$toMatcher(matcher);
    let idx = $81cf94ad8ad2d3fa$export$43bee75e5e14138e(collection) ? -1 : undefined;
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(collection, function(val, key) {
        if (matcher(val, key)) {
            idx = key;
            return false;
        }
    });
    return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */ function $81cf94ad8ad2d3fa$export$3dea766d36a8935f(collection, matcher) {
    let result = [];
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(collection, function(val, key) {
        if (matcher(val, key)) result.push(val);
    });
    return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */ function $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(collection, iterator) {
    let val, result;
    if ($81cf94ad8ad2d3fa$export$fce6876652108ab(collection)) return;
    const convertKey = $81cf94ad8ad2d3fa$export$43bee75e5e14138e(collection) ? $81cf94ad8ad2d3fa$var$toNum : $81cf94ad8ad2d3fa$var$identity;
    for(let key in collection)if ($81cf94ad8ad2d3fa$export$a4f4bb6b1453fff5(collection, key)) {
        val = collection[key];
        result = iterator(val, convertKey(key));
        if (result === false) return val;
    }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */ function $81cf94ad8ad2d3fa$export$5d14bf425b37f49e(arr, matcher) {
    if ($81cf94ad8ad2d3fa$export$fce6876652108ab(arr)) return [];
    $81cf94ad8ad2d3fa$export$d0c8ecbd4ed8940c(arr);
    matcher = $81cf94ad8ad2d3fa$var$toMatcher(matcher);
    return arr.filter(function(el, idx) {
        return !matcher(el, idx);
    });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */ function $81cf94ad8ad2d3fa$export$533b26079ad0b4b(collection, iterator, result) {
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(collection, function(value, idx) {
        result = iterator(result, value, idx);
    });
    return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */ function $81cf94ad8ad2d3fa$export$7ecc1a3b11b57dab(collection, matcher) {
    return !!$81cf94ad8ad2d3fa$export$533b26079ad0b4b(collection, function(matches, val, key) {
        return matches && matcher(val, key);
    }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */ function $81cf94ad8ad2d3fa$export$ad14ef4001db2bcd(collection, matcher) {
    return !!$81cf94ad8ad2d3fa$export$71aa6c912b956294(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */ function $81cf94ad8ad2d3fa$export$871de8747c9eaa88(collection, fn) {
    let result = [];
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(collection, function(val, key) {
        result.push(fn(val, key));
    });
    return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */ function $81cf94ad8ad2d3fa$export$ed97f33186d4b816(collection) {
    return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */ function $81cf94ad8ad2d3fa$export$346677f925de839c(collection) {
    return $81cf94ad8ad2d3fa$export$ed97f33186d4b816(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */ function $81cf94ad8ad2d3fa$export$68c286be0e7e55b7(collection) {
    return $81cf94ad8ad2d3fa$export$871de8747c9eaa88(collection, (val)=>val);
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */ function $81cf94ad8ad2d3fa$export$3f063810d7bf01bd(collection, extractor, grouped = {}) {
    extractor = $81cf94ad8ad2d3fa$var$toExtractor(extractor);
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(collection, function(val) {
        let discriminator = extractor(val) || "_";
        let group = grouped[discriminator];
        if (!group) group = grouped[discriminator] = [];
        group.push(val);
    });
    return grouped;
}
function $81cf94ad8ad2d3fa$export$abf0e2545164275f(extractor, ...collections) {
    extractor = $81cf94ad8ad2d3fa$var$toExtractor(extractor);
    let grouped = {};
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(collections, (c)=>$81cf94ad8ad2d3fa$export$3f063810d7bf01bd(c, extractor, grouped));
    let result = $81cf94ad8ad2d3fa$export$871de8747c9eaa88(grouped, function(val, key) {
        return val[0];
    });
    return result;
}
const $81cf94ad8ad2d3fa$export$ef1d06dc4d91d507 = $81cf94ad8ad2d3fa$export$abf0e2545164275f;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */ function $81cf94ad8ad2d3fa$export$b035e44d7bb4278f(collection, extractor) {
    extractor = $81cf94ad8ad2d3fa$var$toExtractor(extractor);
    let sorted = [];
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(collection, function(value, key) {
        let disc = extractor(value, key);
        let entry = {
            d: disc,
            v: value
        };
        for(var idx = 0; idx < sorted.length; idx++){
            let { d: d  } = sorted[idx];
            if (disc < d) {
                sorted.splice(idx, 0, entry);
                return;
            }
        }
        // not inserted, append (!)
        sorted.push(entry);
    });
    return $81cf94ad8ad2d3fa$export$871de8747c9eaa88(sorted, (e)=>e.v);
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * let element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */ function $81cf94ad8ad2d3fa$export$69cf574f30fda100(pattern) {
    return function(el) {
        return $81cf94ad8ad2d3fa$export$7ecc1a3b11b57dab(pattern, function(val, key) {
            return el[key] === val;
        });
    };
}
function $81cf94ad8ad2d3fa$var$toExtractor(extractor) {
    return $81cf94ad8ad2d3fa$export$f6e2535fb5126e54(extractor) ? extractor : (e)=>{
        return e[extractor];
    };
}
function $81cf94ad8ad2d3fa$var$toMatcher(matcher) {
    return $81cf94ad8ad2d3fa$export$f6e2535fb5126e54(matcher) ? matcher : (e)=>{
        return e === matcher;
    };
}
function $81cf94ad8ad2d3fa$var$identity(arg) {
    return arg;
}
function $81cf94ad8ad2d3fa$var$toNum(arg) {
    return Number(arg);
}
/**
 * Debounce fn, calling it only once if the given time
 * elapsed between calls.
 *
 * Lodash-style the function exposes methods to `#clear`
 * and `#flush` to control internal behavior.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */ function $81cf94ad8ad2d3fa$export$61fc7d43ac8f84b0(fn, timeout) {
    let timer;
    let lastArgs;
    let lastThis;
    let lastNow;
    function fire(force) {
        let now = Date.now();
        let scheduledDiff = force ? 0 : lastNow + timeout - now;
        if (scheduledDiff > 0) return schedule(scheduledDiff);
        fn.apply(lastThis, lastArgs);
        clear();
    }
    function schedule(timeout) {
        timer = setTimeout(fire, timeout);
    }
    function clear() {
        if (timer) clearTimeout(timer);
        timer = lastNow = lastArgs = lastThis = undefined;
    }
    function flush() {
        if (timer) fire(true);
        clear();
    }
    function callback(...args) {
        lastNow = Date.now();
        lastArgs = args;
        lastThis = this;
        // ensure an execution is scheduled
        if (!timer) schedule(timeout);
    }
    callback.flush = flush;
    callback.cancel = clear;
    return callback;
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */ function $81cf94ad8ad2d3fa$export$de363e709c412c8a(fn, interval) {
    let throttling = false;
    return function(...args) {
        if (throttling) return;
        fn(...args);
        throttling = true;
        setTimeout(()=>{
            throttling = false;
        }, interval);
    };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */ function $81cf94ad8ad2d3fa$export$2385a24977818dd0(fn, target) {
    return fn.bind(target);
}
/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */ function $81cf94ad8ad2d3fa$export$e6e34fd1f2686227(target, ...others) {
    return Object.assign(target, ...others);
}
/**
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @param {Object} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 */ function $81cf94ad8ad2d3fa$export$adaa4cf7ef1b65be(target, path, value) {
    let currentTarget = target;
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(path, function(key, idx) {
        if (typeof key !== "number" && typeof key !== "string") throw new Error("illegal key type: " + typeof key + ". Key should be of type number or string.");
        if (key === "constructor") throw new Error("illegal key: constructor");
        if (key === "__proto__") throw new Error("illegal key: __proto__");
        let nextKey = path[idx + 1];
        let nextTarget = currentTarget[key];
        if ($81cf94ad8ad2d3fa$export$4e62c701997796c1(nextKey) && $81cf94ad8ad2d3fa$export$984f70f9382f5d27(nextTarget)) nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
        if ($81cf94ad8ad2d3fa$export$fce6876652108ab(nextKey)) {
            if ($81cf94ad8ad2d3fa$export$fce6876652108ab(value)) delete currentTarget[key];
            else currentTarget[key] = value;
        } else currentTarget = nextTarget;
    });
    return target;
}
/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 */ function $81cf94ad8ad2d3fa$export$3988ae62b71be9a3(target, path, defaultValue) {
    let currentTarget = target;
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(path, function(key) {
        // accessing nil property yields <undefined>
        if ($81cf94ad8ad2d3fa$export$984f70f9382f5d27(currentTarget)) {
            currentTarget = undefined;
            return false;
        }
        currentTarget = currentTarget[key];
    });
    return $81cf94ad8ad2d3fa$export$fce6876652108ab(currentTarget) ? defaultValue : currentTarget;
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */ function $81cf94ad8ad2d3fa$export$357523c63a2253b9(target, properties) {
    let result = {};
    let obj = Object(target);
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(properties, function(prop) {
        if (prop in obj) result[prop] = target[prop];
    });
    return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */ function $81cf94ad8ad2d3fa$export$30a06c8d3562193f(target, properties) {
    let result = {};
    let obj = Object(target);
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(obj, function(prop, key) {
        if (properties.indexOf(key) === -1) result[key] = prop;
    });
    return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */ function $81cf94ad8ad2d3fa$export$4950aa0f605343fb(target, ...sources) {
    if (!sources.length) return target;
    $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(sources, function(source) {
        // skip non-obj sources, i.e. null
        if (!source || !$81cf94ad8ad2d3fa$export$a6cdc56e425d0d0a(source)) return;
        $81cf94ad8ad2d3fa$export$4b80e395e36b5a56(source, function(sourceVal, key) {
            if (key === "__proto__") return;
            let targetVal = target[key];
            if ($81cf94ad8ad2d3fa$export$a6cdc56e425d0d0a(sourceVal)) {
                if (!$81cf94ad8ad2d3fa$export$a6cdc56e425d0d0a(targetVal)) // override target[key] with object
                targetVal = {};
                target[key] = $81cf94ad8ad2d3fa$export$4950aa0f605343fb(targetVal, sourceVal);
            } else target[key] = sourceVal;
        });
    });
    return target;
}


function $181195d06bc87782$export$85488b7eb1e4976f(elements) {
    // find elements that are not children of any other elements
    return (0, $81cf94ad8ad2d3fa$export$3dea766d36a8935f)(elements, function(element) {
        return !(0, $81cf94ad8ad2d3fa$export$71aa6c912b956294)(elements, function(e) {
            return e !== element && $181195d06bc87782$var$getParent(element, e);
        });
    });
}
function $181195d06bc87782$var$getParent(element, parent) {
    if (!parent) return;
    if (element === parent) return parent;
    if (!element.parent) return;
    return $181195d06bc87782$var$getParent(element.parent, parent);
}
function $181195d06bc87782$export$e16d8520af44a096(elements, e, unique) {
    var canAdd = !unique || elements.indexOf(e) === -1;
    if (canAdd) elements.push(e);
    return canAdd;
}
function $181195d06bc87782$export$da9925c0c5dfe300(elements, fn, depth) {
    depth = depth || 0;
    if (!(0, $81cf94ad8ad2d3fa$export$43bee75e5e14138e)(elements)) elements = [
        elements
    ];
    (0, $81cf94ad8ad2d3fa$export$4b80e395e36b5a56)(elements, function(s, i) {
        var filter = fn(s, i, depth);
        if ((0, $81cf94ad8ad2d3fa$export$43bee75e5e14138e)(filter) && filter.length) $181195d06bc87782$export$da9925c0c5dfe300(filter, fn, depth + 1);
    });
}
function $181195d06bc87782$export$f2d87d9d04c2f2e(elements, unique, maxDepth) {
    var result = [], processedChildren = [];
    $181195d06bc87782$export$da9925c0c5dfe300(elements, function(element, i, depth) {
        $181195d06bc87782$export$e16d8520af44a096(result, element, unique);
        var children = element.children;
        // max traversal depth not reached yet
        if (maxDepth === -1 || depth < maxDepth) {
            // children exist && children not yet processed
            if (children && $181195d06bc87782$export$e16d8520af44a096(processedChildren, children, unique)) return children;
        }
    });
    return result;
}
function $181195d06bc87782$export$340034333163f2d8(elements, allowDuplicates) {
    return $181195d06bc87782$export$f2d87d9d04c2f2e(elements, !allowDuplicates, 1);
}
function $181195d06bc87782$export$79a102c020bd09e6(elements, allowDuplicates) {
    return $181195d06bc87782$export$f2d87d9d04c2f2e(elements, !allowDuplicates, -1);
}
function $181195d06bc87782$export$54f6e38eef74ea7(elements, isTopLevel, closure) {
    if ((0, $81cf94ad8ad2d3fa$export$fce6876652108ab)(isTopLevel)) isTopLevel = true;
    if ((0, $81cf94ad8ad2d3fa$export$a6cdc56e425d0d0a)(isTopLevel)) {
        closure = isTopLevel;
        isTopLevel = true;
    }
    closure = closure || {};
    var allShapes = $181195d06bc87782$var$copyObject(closure.allShapes), allConnections = $181195d06bc87782$var$copyObject(closure.allConnections), enclosedElements = $181195d06bc87782$var$copyObject(closure.enclosedElements), enclosedConnections = $181195d06bc87782$var$copyObject(closure.enclosedConnections);
    var topLevel = $181195d06bc87782$var$copyObject(closure.topLevel, isTopLevel && (0, $81cf94ad8ad2d3fa$export$3f063810d7bf01bd)(elements, function(e) {
        return e.id;
    }));
    function handleConnection(c) {
        if (topLevel[c.source.id] && topLevel[c.target.id]) topLevel[c.id] = [
            c
        ];
        // not enclosed as a child, but maybe logically
        // (connecting two moved elements?)
        if (allShapes[c.source.id] && allShapes[c.target.id]) enclosedConnections[c.id] = enclosedElements[c.id] = c;
        allConnections[c.id] = c;
    }
    function handleElement(element) {
        enclosedElements[element.id] = element;
        if (element.waypoints) // remember connection
        enclosedConnections[element.id] = allConnections[element.id] = element;
        else {
            // remember shape
            allShapes[element.id] = element;
            // remember all connections
            (0, $81cf94ad8ad2d3fa$export$4b80e395e36b5a56)(element.incoming, handleConnection);
            (0, $81cf94ad8ad2d3fa$export$4b80e395e36b5a56)(element.outgoing, handleConnection);
            // recurse into children
            return element.children;
        }
    }
    $181195d06bc87782$export$da9925c0c5dfe300(elements, handleElement);
    return {
        allShapes: allShapes,
        allConnections: allConnections,
        topLevel: topLevel,
        enclosedConnections: enclosedConnections,
        enclosedElements: enclosedElements
    };
}
function $181195d06bc87782$export$9cafdf24ffa90680(elements, stopRecursion) {
    stopRecursion = !!stopRecursion;
    if (!(0, $81cf94ad8ad2d3fa$export$43bee75e5e14138e)(elements)) elements = [
        elements
    ];
    var minX, minY, maxX, maxY;
    (0, $81cf94ad8ad2d3fa$export$4b80e395e36b5a56)(elements, function(element) {
        // If element is a connection the bbox must be computed first
        var bbox = element;
        if (element.waypoints && !stopRecursion) bbox = $181195d06bc87782$export$9cafdf24ffa90680(element.waypoints, true);
        var x = bbox.x, y = bbox.y, height = bbox.height || 0, width = bbox.width || 0;
        if (x < minX || minX === undefined) minX = x;
        if (y < minY || minY === undefined) minY = y;
        if (x + width > maxX || maxX === undefined) maxX = x + width;
        if (y + height > maxY || maxY === undefined) maxY = y + height;
    });
    return {
        x: minX,
        y: minY,
        height: maxY - minY,
        width: maxX - minX
    };
}
function $181195d06bc87782$export$2debf4f7db31905f(elements, bbox) {
    var filteredElements = {};
    (0, $81cf94ad8ad2d3fa$export$4b80e395e36b5a56)(elements, function(element) {
        var e = element;
        if (e.waypoints) e = $181195d06bc87782$export$9cafdf24ffa90680(e);
        if (!(0, $81cf94ad8ad2d3fa$export$7e4aa119212bc614)(bbox.y) && e.x > bbox.x) filteredElements[element.id] = element;
        if (!(0, $81cf94ad8ad2d3fa$export$7e4aa119212bc614)(bbox.x) && e.y > bbox.y) filteredElements[element.id] = element;
        if (e.x > bbox.x && e.y > bbox.y) {
            if ((0, $81cf94ad8ad2d3fa$export$7e4aa119212bc614)(bbox.width) && (0, $81cf94ad8ad2d3fa$export$7e4aa119212bc614)(bbox.height) && e.width + e.x < bbox.width + bbox.x && e.height + e.y < bbox.height + bbox.y) filteredElements[element.id] = element;
            else if (!(0, $81cf94ad8ad2d3fa$export$7e4aa119212bc614)(bbox.width) || !(0, $81cf94ad8ad2d3fa$export$7e4aa119212bc614)(bbox.height)) filteredElements[element.id] = element;
        }
    });
    return filteredElements;
}
function $181195d06bc87782$export$e2b5c5db9e2009fd(element) {
    if ("waypoints" in element) return "connection";
    if ("x" in element) return "shape";
    return "root";
}
function $181195d06bc87782$export$2ca968424d923d9e(element) {
    return !!(element && element.isFrame);
}
// helpers ///////////////////////////////
function $181195d06bc87782$var$copyObject(src1, src2) {
    return (0, $81cf94ad8ad2d3fa$export$e6e34fd1f2686227)({}, src1 || {}, src2 || {});
}


function $3d71ca4129a7b26a$export$20a6e5e2f2826bf0(elements) {
    const { incoming: allIncoming , outgoing: allOutgoing  } = elements.reduce((flows, element)=>{
        const { incoming: incoming , outgoing: outgoing  } = flows;
        incoming.push(...element.incoming || []);
        outgoing.push(...element.outgoing || []);
        return {
            incoming: incoming,
            outgoing: outgoing
        };
    }, {
        incoming: [],
        outgoing: []
    });
    // filter flows that are part of the group
    const incoming = allIncoming.filter((flow)=>{
        return !allOutgoing.includes(flow);
    });
    const outgoing = allOutgoing.filter((flow)=>{
        return !allIncoming.includes(flow);
    });
    return {
        incoming: incoming,
        outgoing: outgoing
    };
}


class $581d59321ef1ea94$export$2e2bcd8739ae039 {
    constructor(contextPad, translate, commandStack){
        const contextPadProvider = {
            getMultiElementContextPadEntries (elements) {
                return function(entries) {
                    const groupFlows = (0, $3d71ca4129a7b26a$export$20a6e5e2f2826bf0)(elements);
                    if (groupFlows.incoming.length > 1 || groupFlows.outgoing.length > 1) return entries;
                    return {
                        ...entries,
                        "to-subprocess": {
                            title: translate("Extract elements to collapsed subprocess"),
                            className: "bpmn-icon-subprocess-collapsed",
                            action () {
                                commandStack.execute("elements.moveToSubprocess", {
                                    elements: elements,
                                    groupFlows: groupFlows
                                });
                            }
                        }
                    };
                };
            }
        };
        contextPad.registerProvider(800, contextPadProvider);
    }
}
$581d59321ef1ea94$export$2e2bcd8739ae039.inject = [
    "contextPad",
    "translate",
    "commandStack"
];



function $60234016a1eeb3e2$export$226b3eccf92c9ed9(element, type) {
    var bo = $60234016a1eeb3e2$export$eaaa82102364f1cc(element);
    return bo && typeof bo.$instanceOf === "function" && bo.$instanceOf(type);
}
function $60234016a1eeb3e2$export$ebb65efc98a3b5f7(element, types) {
    return (0, $81cf94ad8ad2d3fa$export$ad14ef4001db2bcd)(types, function(t) {
        return $60234016a1eeb3e2$export$226b3eccf92c9ed9(element, t);
    });
}
function $60234016a1eeb3e2$export$eaaa82102364f1cc(element) {
    return element && element.businessObject || element;
}
function $60234016a1eeb3e2$export$b03ebf0a7a0d1be4(element) {
    return element && element.di;
}


var $062bb7266b34dc0e$export$2f7eaf221f6dff10 = "_plane";
function $062bb7266b34dc0e$export$3e98263c484fb0c4(element) {
    var id = element.id;
    return $062bb7266b34dc0e$var$removePlaneSuffix(id);
}
function $062bb7266b34dc0e$export$2940edae6edd514d(element) {
    var id = element.id;
    if ((0, $60234016a1eeb3e2$export$226b3eccf92c9ed9)(element, "bpmn:SubProcess")) return $062bb7266b34dc0e$var$addPlaneSuffix(id);
    return id;
}
function $062bb7266b34dc0e$export$7d96c049e8a6ae04(id) {
    return $062bb7266b34dc0e$var$addPlaneSuffix(id);
}
function $062bb7266b34dc0e$export$6091a054f3eba9b5(element) {
    var di = (0, $60234016a1eeb3e2$export$b03ebf0a7a0d1be4)(element);
    return (0, $60234016a1eeb3e2$export$226b3eccf92c9ed9)(di, "bpmndi:BPMNPlane");
}
function $062bb7266b34dc0e$var$addPlaneSuffix(id) {
    return id + $062bb7266b34dc0e$export$2f7eaf221f6dff10;
}
function $062bb7266b34dc0e$var$removePlaneSuffix(id) {
    return id.replace(new RegExp($062bb7266b34dc0e$export$2f7eaf221f6dff10 + "$"), "");
}



const $5a6c7aff0216cd31$var$DEFAULT_POSITION = {
    x: 180,
    y: 160
};
const $5a6c7aff0216cd31$var$BUFFER_SIZE = 100;
class $5a6c7aff0216cd31$export$2e2bcd8739ae039 {
    constructor(commandStack, modeling, canvas, elementRegistry, selection){
        this._commandStack = commandStack;
        this._modeling = modeling;
        this._canvas = canvas;
        this._elementRegistry = elementRegistry;
        this._selection = selection;
    }
    preExecute(context) {
        const { _modeling: modeling , _canvas: canvas , _elementRegistry: elementRegistry , _selection: selection  } = this;
        const elements = context.elements.filter((el)=>{
            return !el.waypoints;
        });
        const groupFlows = context.groupFlows;
        // create new subprocess
        const elementBB = (0, $181195d06bc87782$export$9cafdf24ffa90680)(elements);
        const mid = {
            x: elementBB.x + elementBB.width / 2,
            y: elementBB.y + elementBB.height / 2
        };
        const newPosition = $5a6c7aff0216cd31$var$getPositionOnFlow(groupFlows) || mid;
        const rootElement = $5a6c7aff0216cd31$var$getSharedRoot(elements) || canvas.getRootElement();
        const newSubprocess = modeling.createShape({
            type: "bpmn:SubProcess",
            expanded: false
        }, newPosition, rootElement);
        const plane = elementRegistry.get((0, $062bb7266b34dc0e$export$2940edae6edd514d)(newSubprocess));
        // Reconnect flows
        // Save starting and ending tasks for connection in the subprocess
        const startingTasks = groupFlows.incoming.map((flow)=>flow.target);
        const endTasks = groupFlows.outgoing.map((flow)=>flow.source);
        groupFlows.incoming.forEach((flow)=>{
            modeling.reconnectEnd(flow, newSubprocess, newPosition);
        });
        groupFlows.outgoing.forEach((flow)=>{
            modeling.reconnectStart(flow, newSubprocess, newPosition);
        });
        // Create start and end events
        const startEvent = startingTasks.length && modeling.createShape({
            type: "bpmn:StartEvent"
        }, $5a6c7aff0216cd31$var$DEFAULT_POSITION, plane);
        const endEvent = endTasks.length && modeling.createShape({
            type: "bpmn:EndEvent"
        }, {
            x: $5a6c7aff0216cd31$var$DEFAULT_POSITION.x + elementBB.width + $5a6c7aff0216cd31$var$BUFFER_SIZE * 2,
            y: $5a6c7aff0216cd31$var$DEFAULT_POSITION.y
        }, plane);
        // move all elements to the new subprocess
        modeling.moveElements((0, $181195d06bc87782$export$85488b7eb1e4976f)(elements), {
            x: -elementBB.x + $5a6c7aff0216cd31$var$DEFAULT_POSITION.x + $5a6c7aff0216cd31$var$BUFFER_SIZE,
            y: -elementBB.y + $5a6c7aff0216cd31$var$DEFAULT_POSITION.y - 40
        }, plane);
        // Connect to start and end events
        startingTasks.forEach((task)=>{
            modeling.connect(startEvent, task);
        });
        endTasks.forEach((task)=>{
            modeling.connect(task, endEvent);
        });
        selection.select(newSubprocess);
    }
}
$5a6c7aff0216cd31$export$2e2bcd8739ae039.$inject = [
    "commandStack",
    "modeling",
    "canvas",
    "elementRegistry",
    "selection"
];
function $5a6c7aff0216cd31$var$getPositionOnFlow(groupFlows) {
    const { incoming: incoming , outgoing: outgoing  } = groupFlows;
    if (incoming.length === 0 || outgoing.length === 0) return null;
    const averageStart = incoming.reduce((sum, flow)=>{
        const waypoint = flow.waypoints[flow.waypoints.length - 1];
        return {
            x: sum.x + waypoint.x,
            y: sum.y + waypoint.y
        };
    }, {
        x: 0,
        y: 0
    });
    averageStart.x /= incoming.length;
    averageStart.y /= incoming.length;
    const averageEnd = outgoing.reduce((sum, flow)=>{
        const waypoint = flow.waypoints[0];
        return {
            x: sum.x + waypoint.x,
            y: sum.y + waypoint.y
        };
    }, {
        x: 0,
        y: 0
    });
    averageEnd.x /= outgoing.length;
    averageEnd.y /= outgoing.length;
    return {
        x: (averageStart.x + averageEnd.x) / 2,
        y: (averageStart.y + averageEnd.y) / 2
    };
}
function $5a6c7aff0216cd31$var$getSharedRoot(elements) {
    if (!elements.length) return;
    let potentialParents = $5a6c7aff0216cd31$var$getParentChain(elements[0]);
    elements.forEach((el)=>{
        const parents = $5a6c7aff0216cd31$var$getParentChain(el);
        potentialParents = potentialParents.filter((p)=>{
            return parents.includes(p);
        });
    });
    return potentialParents[potentialParents.length - 1];
}
function $5a6c7aff0216cd31$var$getParentChain(element) {
    if (!element || element === element.parent) return [];
    return [
        ...$5a6c7aff0216cd31$var$getParentChain(element.parent),
        element
    ];
}


function $0f4a80330f0cd849$var$CommandInitializer(eventBus, commandStack) {
    eventBus.on("diagram.init", function() {
        commandStack.registerHandler("elements.moveToSubprocess", (0, $5a6c7aff0216cd31$export$2e2bcd8739ae039));
    });
}
$0f4a80330f0cd849$var$CommandInitializer.$inject = [
    "eventBus",
    "commandStack"
];
var $0f4a80330f0cd849$export$2e2bcd8739ae039 = {
    __init__: [
        $0f4a80330f0cd849$var$CommandInitializer
    ]
};


var $05ac49a30229da32$export$2e2bcd8739ae039 = {
    __depends__: [
        (0, $0f4a80330f0cd849$export$2e2bcd8739ae039)
    ],
    __init__: [
        "extractSubprocessContextPadProvider"
    ],
    extractSubprocessContextPadProvider: [
        "type",
        (0, $581d59321ef1ea94$export$2e2bcd8739ae039)
    ]
};


(0, $c2ad8815cacf03f2$export$d71f0820673ef38a)((0, $05ac49a30229da32$export$2e2bcd8739ae039));

})();
//# sourceMappingURL=client.js.map

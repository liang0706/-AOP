//扩展函数原型
(function() {
    //前置装饰
    Function.prototype.before = function(beforefn) {
        var fn = this;
        
        return function() {
            beforefn.apply(this, arguments);
            
            return fn.apply(this, arguments);
        };
    };
    
    //后置装饰
    Function.prototype.after = function(afterfn) {
        var fn = this;
        
        return function() {
            var ret = fn.apply(this, arguments);
            
            afterfn.apply(this, arguments);
            return ret;
        };
    };
})();
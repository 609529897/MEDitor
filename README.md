## debug 日志

1. Material-ui 的 inputRef 返回 undefiend; 已经解决，它接收的值是一个对象，里面是函数。而我以前给他传入的正常 ref 的字符串。现在明白有些人为啥那么喜欢 TypeScript 了！

2. 对象的属性名需要动态变化, 使用了 `obj[a] = b` 这样的对象赋值方式。
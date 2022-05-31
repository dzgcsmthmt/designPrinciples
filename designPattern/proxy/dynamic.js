export default function (babel) {
    const { types: t } = babel;

    return {
        name: "ast-transform", // not required
        visitor: {
            ClassMethod(path) {
                let body = path.get('body');
                let last = body.get('body').at(-1);
                body.unshiftContainer('body', t.callExpression(t.MemberExpression(t.Identifier('console'), t.Identifier('log')), [t.StringLiteral('log start')]));
                if (t.isReturnStatement(last)) {
                    last.insertBefore(t.callExpression(t.MemberExpression(t.Identifier('console'), t.Identifier('log')), [t.StringLiteral('log end')]));
                } else {
                    body.pushContainer('body', t.callExpression(t.MemberExpression(t.Identifier('console'), t.Identifier('log')), [t.StringLiteral('log end')]))
                }
            }
        }
    };
}

//AOP
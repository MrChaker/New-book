type StyleObject = Partial<Record<keyof CSSStyleDeclaration, string | number | null | undefined>>;

const styleDictionaryToString = (styles: StyleObject): string => {
    return Object.entries(
        styles
    ).filter(
        ([_, value]) => value != null && value != undefined
    ).map(
        ([key, value]) => `${
            key == 'marginLeft' ? 'margin-left'
            : key == 'marginRight' ? 'margin-right'
            : key == 'marginTop' ?
             'margin-top'
            : key == 'marginBottom' ? 'margin-bottom'
            : key
        }:${value}`
    ).join(';')
};

const styleJoin = (
    styles: StyleObject,
    also: string | { [key: string]: string; } | undefined,
):string => {
    return styleDictionaryToString(styles) + ';' + also;
}

export default styleJoin;
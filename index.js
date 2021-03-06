const Tagtype = {
    body:'body'
    ,article:'article'
    ,nav:'nav'
    ,aside:'aside'
    ,section:'section'
    ,header:'header'
    ,footer:'footer'
    ,h1:'h1'
    ,h2:'h2'
    ,h3:'h3'
    ,h4:'h4'
    ,h5:'h5'
    ,h6:'h6'
    ,main:'main'
    ,address:'address'
    ,div:'div'
    ,p:'p'
    ,hr:'hr'
    ,pre:'pre'
    ,blockquote:'blockquote'
    ,ol:'ol'
    ,ul:'ul'
    ,li:'li'
    ,dl:'dl'
    ,dt:'dt'
    ,dd:'dd'
    ,figure:'figure'
    ,figcaption:'figcaption'
    ,table:'table'
    ,caption:'caption'
    ,thead:'thead'
    ,tbody:'tbody'
    ,tfoot:'tfoot'
    ,tr:'tr'
    ,th:'th'
    ,td:'td'
    ,col:'col'
    ,colgroup:'colgroup'
    ,button:'button'
    ,datalist:'datalist'
    ,fieldset:'fieldset'
    ,form:'form'
    ,input:'input'
    ,keygen:'keygen'
    ,label:'label'
    ,legend:'legend'
    ,meter:'meter'
    ,optgroup:'optgroup'
    ,option:'option'
    ,output:'output'
    ,progress:'progress'
    ,select:'select'
    ,textarea:'textarea'
    ,details:'details'
    ,summary:'summary'
    ,command:'command'
    ,menu:'menu'
    ,del:'del'
    ,ins:'ins'
    ,img:'img'
    ,iframe:'iframe'
    ,embed:'embed'
    ,object:'object'
    ,param:'param'
    ,video:'video'
    ,audio:'audio'
    ,source:'source'
    ,canvas:'canvas'
    ,track:'track'
    ,map:'map'
    ,area:'area'
    ,a:'a'
    ,em:'em'
    ,strong:'strong'
    ,i:'i'
    ,b:'b'
    ,u:'u'
    ,s:'s'
    ,small:'small'
    ,abbr:'abbr'
    ,q:'q'
    ,cite:'cite'
    ,dfn:'dfn'
    ,sub:'sub'
    ,sup:'sup'
    ,time:'time'
    ,code:'code'
    ,kbd:'kbd'
    ,samp:'samp'
    ,var:'var'
    ,mark:'mark'
    ,bdi:'bdi'
    ,bdo:'bdo'
    ,ruby:'ruby'
    ,rt:'rt'
    ,rp:'rp'
    ,span:'span'
    ,br:'br'
    ,wbr:'wbr'
}

const Important = {
    name: 'Important'
    ,Important: {
        type: { name: 'Important' }
        ,case: { name: 'Important' }
    }
    ,Unimportant: {
        type: { name: 'Important' }
        ,case: { name: 'Unimportant' }
    }
}

class Color {
    static Hex(value){
        return {
            type: Color
            ,case: Color.Hex
            ,value
        }
    }
    static RGBA(r,g,b,a){
        return {
            type: Color
            ,case: Color.RGBA
            ,r,g,b,a
        }
    }
}

const Keyword = {
    name: 'Keyword'
    ,Auto:
        { value: 'auto'
        , type: { name: 'Keyword' }
        , case: { name: 'Auto' }
        }
    ,Hidden:
        { value: 'hidden'
        , type: { name: 'Keyword' }
        , case: { name: 'Hidden' }
        }
    ,Scroll:
        { value: 'scroll'
        , type: { name: 'Keyword' }
        , case: { name: 'Scroll' }
        }
    ,Solid:
        { value: 'solid'
        , type: { name: 'Keyword' }
        , case: { name: 'Solid' }
        }
    ,None:
        { value: 'none'
        , type: { name: 'Keyword' }
        , case: { name: 'None'}
        }
    ,Both:
        { value: 'both'
        , type: { name: 'Keyword' }
        , case: { name: 'Both' }
        }
    ,Left:
        { value: 'left'
        , type: { name: 'Keyword' }
        , case: { name: 'Both' }
        }
    ,Right:
        { value: 'right'
        , type: { name: 'Keyword' }
        , case: { name: 'Right'}
        }
    ,Color:
        { value: 'color'
        , type: { name: 'Property' }
        , case: { name: 'Color' }
        }
    ,EaseIn:
        { value: 'ease-in'
        , type: { name: 'Keyword' }
        , case: { name: 'EaseIn' }
        }
    ,Dotted:
        { value: 'dotted'
        , type: { name: 'Keyword' }
        , case: { name: 'EaseIn' }
        }
    ,CurrentColor:
        { value: 'currentColor'
        , type: { name: 'Keyword' }
        , case: { name: 'CurrentColor' }
        }
    ,Table:
        { value: 'table'
        , type: { name: 'Keyword' }
        , case: { name: 'Table' }
        }
    ,Inherit:
        { value: 'inherit'
        , type: { name: 'Keyword' }
        , case: { name: 'Inherit' }
        }
    ,Transparent:
        { value: 'transparent'
        , type: { name: 'Keyword' }
        , case: { name: 'Transparent' }
        }
}


class Unit {
    static Percentage(value){
        return {
            value
            , type: Unit
            , case: Unit.Percentage
        }
    }

    static Pixel(value){
        return {
            value
            , type: Unit
            , case: Unit.Pixel
        }
    }

    static Second(value){
        return {
            value
            , type: Unit
            , case: Unit.Second
        }
    }
}

class CSSValue {
    static Keyword(value){
        return {
            value
            , type: CSSValue
            , case: CSSValue.Keyword
        }
    }

    static Unit(unit){
        return {
            unit
            , type: CSSValue
            , case: CSSValue.Unit
        }
    }

    static Raw(value){
        return {
            value
            , type: CSSValue
            , case: CSSValue.Raw
        }
    }

    static Variable(variable){
        return {
            variable
            , type: CSSValue
            , case: CSSValue.Variable
        }
    }
}

class Declaration {
    static OverflowX(important, cssValues){
        return {
            cssValues
            , type: Declaration
            , case: Declaration.OverflowX
            , important
            , prefixes: []
        }
    }

    static OverflowY(important, cssValues){
        return {
            cssValues
            , type: Declaration
            , case: Declaration.OverflowY
            , important
            , prefixes: []
        }
    }

    static Overflow(important, cssValues){
        return {
            cssValues
            , type: Declaration
            , case: Declaration.Overflow
            , important
            , prefixes: []
        }
    }

    static Outline(important, cssValues){
        return {
            cssValues
            , type: Declaration
            , case: Declaration.Outline
            , important
            , prefixes: []
        }
    }

    static Appearance(important, cssValues){
        return {
            cssValues
            ,type: Declaration
            ,case: Declaration.Appearance
            ,important
            ,prefixes: ['-webkit', '-moz']
        }
    }

    static Border(important, cssValues){
        return {
            cssValues
            ,type: Declaration
            ,case: Declaration.Border
            ,important
            ,prefixes: []
        }
    }

    static Padding(important, cssValues){
        return {
            cssValues
            ,type: Declaration
            ,case: Declaration.Padding
            ,important
            ,prefixes: []
        }
    }

    static TextDecoration(important, cssValues){
        return {
            cssValues
            ,type: Declaration
            ,case: Declaration.TextDecoration
            ,important
            ,prefixes: []
        }
    }

    static Transition(important, cssValues){
        return {
            cssValues
            ,type: Declaration
            ,case: Declaration.Transition
            ,important
            ,prefixes: []
        }
    }

    static ListStyleType(important, cssValues){
        return {
            cssValues
            ,type: Declaration
            ,case: Declaration.ListStyleType
            ,important
            ,prefixes: []
        }
    }

    static Color(important, cssValues){
        return {
            cssValues
            ,type: Declaration
            ,case: Declaration.Color
            ,important
            ,prefixes: []
        }
    }

    static BackgroundColor(important, cssValues){
        return {
            cssValues
            ,type: Declaration
            ,case: Declaration.BackgroundColor
            ,important
            ,prefixes: []
        }
    }

    static Content(important, cssValues){
        return {
            cssValues
            ,type: Declaration
            ,case: Declaration.Content
            ,important
            ,prefixes: []
        }
    }

    static Display(important, cssValues){
        return {
            cssValues
            ,type: Declaration
            ,case: Declaration.Display
            ,important
            ,prefixes: []
        }
    }

    static Clear(important, cssValues){
        return {
            cssValues
            ,type: Declaration
            ,case: Declaration.Clear
            ,important
            ,prefixes: []
        }
    }

    static IEStarHack(declaration){
        return {
            type: Declaration
            ,case: Declaration.IEStarHack
            ,declaration
        }
    }

    static Zoom(important, cssValues){
        return {
            type: Declaration
            ,case: Declaration.Zoom
            ,important
            ,cssValues
            ,prefixes: []
        }
    }

    static Variable(variableName, cssValues){
        return {
            type: Declaration
            ,case: Declaration.Zoom
            ,cssValues
            ,prefixes: []
        }
    }
}

class SimpleSelector {
    static Class(name){
        return {
            name
            , type: SimpleSelector
            , case: SimpleSelector.Class
        }
    }

    static Type(name){
        return {
            name
            , type: SimpleSelector
            , case: SimpleSelector.Type
        }
    }

    static Pseudo( psuedoName, selectors ){
        return {
            type: SimpleSelector
            , case: SimpleSelector.Pseudo
            , psuedoName
            , selectors
        }
    }
}

class Selector {
    static Selector(simpleSelectors){
        return {
            type: Selector
            , simpleSelectors
            , case: Selector.Selector
        }
    }
}

class AtRule {
    static Media( breakpoint, rules ){
        return {
            type: AtRule
            ,case: AtRule.Media
            ,rules
            ,breakpoint
        }
    }
}

class Variable {
    static Variable(name){
        return {
            type: Variable
            ,case: Variable.Variable
            ,name
        }
    }
}

class Rule {
    static Rule(selector, declarations){
        return {
            selector
            , type: Rule
            , case: Rule.Rule
            , declarations
        }
    }

    static AtRule( atRule ){
        return {
            type: Rule
            ,case: Rule.AtRule
            ,atRule
        }
    }
}

class Module {
    static Module(name, rules){
        return { name, rules }
    }
}

class ValueDefinition {
    static Keyword(name){
        return {
            type: ValueDefinition
            ,case: ValueDefinition.Keyword
            ,name
        }
    }

    static BasicDataType(value, dataType){
        return {
            type: ValueDefinition
            ,case: ValueDefinition.BasicDataType
            ,dataType
            ,value
        }
    }

    static Range( definitions ){
        return {
            type: ValueDefinition
            ,case: ValueDefinition.Range
            ,definitions
        }
    }
}

const modules = {

    code: Module.Module(
        'code'
        ,[ Rule.Rule(
            Selector.Selector(
                SimpleSelector.Class('pre')
            )
            ,[ Declaration.OverflowX(
                Important.Unimportant
                ,Keyword.Auto
            )
            , Declaration.OverflowY(
                Important.Unimportant
                ,Keyword.Hidden
            )
            , Declaration.Overflow(
                Important.Unimportant
                ,Keyword.Scroll
            )
            ]
        )
        ]
    )

    ,debug: Module.Module(
        'debug'
        ,[[Tagtype.body, 0x2980B9]
        , [Tagtype.article, 0x3498DB]
        , [Tagtype.nav, 0x0088C3]
        , [Tagtype.aside, 0x33A0CE]
        , [Tagtype.section, 0x66B8DA]
        , [Tagtype.header, 0x99CFE7]
        , [Tagtype.footer, 0xCCE7F3]
        , [Tagtype.h1, 0x162544]
        , [Tagtype.h2, 0x314E6E]
        , [Tagtype.h3, 0x3E5E85]
        , [Tagtype.h4, 0x449BAF]
        , [Tagtype.h5, 0xC7D1CB]
        , [Tagtype.h6, 0x4371D0]
        , [Tagtype.main, 0x2F4F90]
        , [Tagtype.address, 0x1A2C51]
        , [Tagtype.div, 0x036CDB]
        , [Tagtype.p, 0xAC050B]
        , [Tagtype.hr, 0xFF063F]
        , [Tagtype.pre, 0x850440]
        , [Tagtype.blockquote, 0xF1B8E7]
        , [Tagtype.ol, 0xFF050C]
        , [Tagtype.ul, 0xD90416]
        , [Tagtype.li, 0xD90416]
        , [Tagtype.dl, 0xFD3427]
        , [Tagtype.dt, 0xFF0043]
        , [Tagtype.dd, 0xE80174]
        , [Tagtype.figure, 0xFF00BB]
        , [Tagtype.figcaption, 0xBF0032]
        , [Tagtype.table, 0x00CC99]
        , [Tagtype.caption, 0x37FFC4]
        , [Tagtype.thead, 0x98DACA]
        , [Tagtype.tbody, 0x64A7A0]
        , [Tagtype.tfoot, 0x22746B]
        , [Tagtype.tr, 0x86C0B2]
        , [Tagtype.th, 0xA1E7D6]
        , [Tagtype.td, 0x3F5A54]
        , [Tagtype.col, 0x6C9A8F]
        , [Tagtype.colgroup, 0x6C9A9D]
        , [Tagtype.button, 0xDA8301]
        , [Tagtype.datalist, 0xC06000]
        , [Tagtype.fieldset, 0xD95100]
        , [Tagtype.form, 0xD23600]
        , [Tagtype.input, 0xFCA600]
        , [Tagtype.keygen, 0xB31E00]
        , [Tagtype.label, 0xEE8900]
        , [Tagtype.legend, 0xDE6D00]
        , [Tagtype.meter, 0xE8630C]
        , [Tagtype.optgroup, 0xB33600]
        , [Tagtype.option, 0xFF8A00]
        , [Tagtype.output, 0xFF9619]
        , [Tagtype.progress, 0xE57C00]
        , [Tagtype.select, 0xE26E0F]
        , [Tagtype.textarea, 0xCC5400]
        , [Tagtype.details, 0x33848F]
        , [Tagtype.summary, 0x60A1A6]
        , [Tagtype.command, 0x438DA1]
        , [Tagtype.menu, 0x449DA6]
        , [Tagtype.del, 0xBF0000]
        , [Tagtype.ins, 0x400000]
        , [Tagtype.img, 0x22746B]
        , [Tagtype.iframe, 0x64A7A0]
        , [Tagtype.embed, 0x98DACA]
        , [Tagtype.object, 0x00CC99]
        , [Tagtype.param, 0x37FFC4]
        , [Tagtype.video, 0x6EE866]
        , [Tagtype.audio, 0x027353]
        , [Tagtype.source, 0x012426]
        , [Tagtype.canvas, 0xA2F570]
        , [Tagtype.track, 0x59A600]
        , [Tagtype.map, 0x7BE500]
        , [Tagtype.area, 0x305900]
        , [Tagtype.a, 0xFF62AB]
        , [Tagtype.em, 0x800B41]
        , [Tagtype.strong, 0xFF1583]
        , [Tagtype.i, 0x803156]
        , [Tagtype.b, 0xCC1169]
        , [Tagtype.u, 0xFF0430]
        , [Tagtype.s, 0xF805E3]
        , [Tagtype.small, 0xD107B2]
        , [Tagtype.abbr, 0x4A0263]
        , [Tagtype.q, 0x240018]
        , [Tagtype.cite, 0x64003C]
        , [Tagtype.dfn, 0xB4005A]
        , [Tagtype.sub, 0xDBA0C8]
        , [Tagtype.sup, 0xCC0256]
        , [Tagtype.time, 0xD6606D]
        , [Tagtype.code, 0xE04251]
        , [Tagtype.kbd, 0x5E001F]
        , [Tagtype.samp, 0x9C0033]
        , [Tagtype.var, 0xD90047]
        , [Tagtype.mark, 0xFF0053]
        , [Tagtype.bdi, 0xBF3668]
        , [Tagtype.bdo, 0x6F1400]
        , [Tagtype.ruby, 0xFF7B93]
        , [Tagtype.rt, 0xFF2F54]
        , [Tagtype.rp, 0x803E49]
        , [Tagtype.span, 0xCC2643]
        , [Tagtype.br, 0xDB687D]
        , [Tagtype.wbr, 0xDB175B]
        ]
        .map(
            ([tag, hex]) =>
                Rule.Rule(
                    Selector.Selector([
                        SimpleSelector.Type(
                            tag
                        )
                    ])
                    ,[ Declaration.Outline(
                        Important.Important
                        ,[ Unit.Pixel(1)
                        , Keyword.Solid
                        , Color.Hex(hex)
                        ]
                    )
                    ]
                )

        )
    )
    ,forms:
        Module.Module(
            'forms'
            , [ Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Class(
                        'input-reset'
                    )
                ])
                ,[ Declaration.Appearance(
                    Important.Unimportant
                    ,[ Keyword.None
                    ]
                )
                ]
            )
            , Rule.Rule(
                Selector.Selector([
                    ,SimpleSelector.Pseudo(
                        'focus-inner'
                        ,[SimpleSelector.Class('button-reset')
                        ]
                    )
                    ,SimpleSelector.Pseudo(
                        'focus-inner'
                        ,[SimpleSelector.Class('input-reset')
                        ]
                    )
                ])
                ,[ Declaration.Border(
                    Important.Unimportant
                    ,[ CSSValue.Raw(0)
                    ]
                )
                , Declaration.Padding(
                    Important.Unimportant
                    ,[ CSSValue.Raw(0)
                    ]
                )
                ]
            )
            ]
        )
    ,links:
        Module.Module(
            'links'
            ,[ Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Class('link')
                ])
                ,[ Declaration.TextDecoration(
                    Important.Unimportant
                    ,[ Keyword.None
                    ]
                )
                , Declaration.Transition(
                    Important.Unimportant
                    ,[ CSSValue.Keyword( Keyword.Color )
                    , Unit.Second(0.15)
                    , CSSValue.Keyword( Keyword.EaseIn )
                    ]
                )
                ]
            )
            , Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Pseudo(
                        'link'
                        ,[ SimpleSelector.Class('link')
                        ]
                    )
                    ,SimpleSelector.Pseudo(
                        'visited'
                        ,[ SimpleSelector.Class('link')
                        ]
                    )
                ])
                ,[ Declaration.Transition(
                    Important.Unimportant
                    ,[ CSSValue.Keyword( Keyword.Color )
                    , Unit.Second(0.15)
                    , CSSValue.Keyword( Keyword.EaseIn )
                    ]
                )
                ]
            )
            ,Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Pseudo(
                        'hover'
                        ,[ SimpleSelector.Class('link')
                        ]
                    )
                ])
                ,[ Declaration.Transition(
                    Important.Unimportant
                    ,[ CSSValue.Keyword( Keyword.Color )
                    , Unit.Second(0.15)
                    , CSSValue.Keyword( Keyword.EaseIn )
                    ]
                )
                ]
            )
            ,Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Pseudo(
                        'active'
                        ,[ SimpleSelector.Class('link')
                        ]
                    )
                ])
                ,[ Declaration.Transition(
                    Important.Unimportant
                    ,[ CSSValue.Keyword( Keyword.Color )
                    , Unit.Second(0.15)
                    , CSSValue.Keyword( Keyword.EaseIn )
                    ]
                )
                ]
            )
            ,Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Pseudo(
                        'focus'
                        ,[ SimpleSelector.Class('link')
                        ]
                    )
                ])
                ,[ Declaration.Transition(
                    Important.Unimportant
                    ,[ CSSValue.Keyword( Keyword.Inherit , Unit.Second(0.15))
                    , CSSValue.Keyword( Keyword.Inherit )
                    ]
                )
                , Declaration.Outline(
                    Important.Unimportant
                    ,[ Unit.Pixel(1)
                    , CSSValue.Keyword( Keyword.Inherit , CSSValue.Keyword( Keyword.Inherit ))
                    ]
                )
                ]
            )
            ]
        )
    ,lists:
        Module.Module(
            'lists'
            , Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Class(
                        'list'
                    )
                ])
                ,[ Declaration.ListStyleType(
                    Important.Unimportant
                    ,[ Keyword.None
                    ]
                )
                ]
            )
        )
    ,skins:
        Module.Module(
            'skins'
            ,[[ 'black-90'
            , 'black-80'
            , 'black-70'
            , 'black-60'
            , 'black-50'
            , 'black-40'
            , 'black-30'
            , 'black-20'
            , 'black-05'
            , 'white-90'
            , 'white-80'
            , 'white-70'
            , 'white-60'
            , 'white-50'
            , 'white-40'
            , 'white-30'
            , 'white-20'
            , 'white-10'
            , 'black'
            , 'near-black'
            , 'dark-gray'
            , 'mid-gray'
            , 'gray'
            , 'silver'
            , 'light-silver'
            , 'moon-gray'
            , 'light-gray'
            , 'near-white'
            , 'white'
            , 'dark-red'
            , 'red'
            , 'light-red'
            , 'orange'
            , 'gold'
            , 'yellow'
            , 'light-yellow'
            , 'purple'
            , 'dark-pink'
            , 'hot-pink'
            , 'pink'
            , 'light-pink'
            , 'dark-green'
            , 'green'
            , 'light-green'
            , 'navy'
            , 'dark-blue'
            , 'blue'
            , 'light-blue'
            , 'lightest-blue'
            , 'washed-blue'
            , 'washed-green'
            , 'washed-yellow'
            , 'washed-red'
            , 'inherit'
            ]]
            .map(
                (xs) => [
                    'color'
                    , 'background-color'
                ]
                .map(
                    d => xs.map(
                        x => d == 'color'
                            ? [ x, Declaration.Color, x ]
                            : [ 'bg-'+x, Declaration.BackgroundColor, x]
                    )
                )
            )
            .reduce( (p,n) => p.concat(n) )
            .reduce( (p,n) => p.concat(n) )
            .map(
                ([ className, declarationFn, varName ]) =>
                    Rule.Rule(
                        Selector.Selector([
                            SimpleSelector.Class(className)
                        ])
                        ,[ varName == 'inherit'
                            ? CSSValue.Keyword( Keyword.Inherit )
                            : declarationFn(
                                CSSValue.Variable(varName)
                            )
                        ]
                    )
            )
        )
    ,clears:
        Module.Module(
            'clears'
            ,[ Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Pseudo(
                        'before'
                        ,[ SimpleSelector.Class(
                            'cf'
                        )]
                    )
                    ,SimpleSelector.Pseudo(
                        'after'
                        ,[SimpleSelector.Class(
                            'cf'
                        )]
                    )
                ])
                ,[ Declaration.Content(' ')
                , Declaration.Display(
                    CSSValue.Keyword( Keyword.Table )
                )
                ]
            )
            , Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Pseudo(
                        'after'
                        ,[ SimpleSelector.Class('cf')
                        ]
                    )
                ])
                ,[ Declaration.Clear(
                    Keyword.Both
                )
                ]
            )
            , Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Class('cf')
                ])
                ,Declaration.IEStarHack(
                    Declaration.Zoom(
                        CSSValue.Raw(1)
                    )
                )
            )
            ,Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Class('cl')
                ])
                ,Declaration.Clear(
                    CSSValue.Keyword(
                        Keyword.Left
                    )
                )
            )
            ,Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Class('cr')
                ])
                ,Declaration.Clear(
                    CSSValue.Keyword(
                        Keyword.Right
                    )
                )
            )
            ,Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Class('cb')
                ])
                ,Declaration.Clear(
                    CSSValue.Keyword(
                        Keyword.Both
                    )
                )
            )
            ,Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Class('cn')
                ])
                ,Declaration.Clear(
                    CSSValue.Keyword(
                        Keyword.None
                    )
                )
            )
            ,['not-small', 'medium', 'large']
                .map( k => '--breakpoint-'+k )
                .map(
                    variable =>
                        Rule.AtRule(
                            AtRule.Media(
                                Variable.Variable(
                                    variable
                                )
                            )
                            ,[ Rule.Rule(
                                Selector.Selector([
                                    SimpleSelector.Class(
                                        'cl-ns'
                                    )
                                ])
                                ,[ Declaration.Clear(
                                    Important.Unimportant
                                    ,[ Keyword.Left ]
                                )
                                ]
                            )
                            ,Rule.Rule(
                                Selector.Selector([
                                    SimpleSelector.Class(
                                        'cr-ns'
                                    )
                                ])
                                ,[ Declaration.Clear(
                                    Important.Unimportant
                                    ,[ Keyword.Right ]
                                )
                                ]
                            )
                            ,Rule.Rule(
                                Selector.Selector([
                                    SimpleSelector.Class(
                                        'cb-ns'
                                    )
                                ])
                                ,[ Declaration.Clear(
                                    Important.Unimportant
                                    ,[ Keyword.Both ]
                                )
                                ]
                            )
                            ,Rule.Rule(
                                Selector.Selector([
                                    SimpleSelector.Class(
                                        'cn-ns'
                                    )
                                ])
                                ,[ Declaration.Clear(
                                    Important.Unimportant
                                    ,[ Keyword.None ]
                                )
                                ]
                            )
                            ]
                        )
                )
            ]
        )
    ,colors:
        Module.Module(
            'colors'
            ,[ Rule.Rule(
                Selector.Selector(
                    SimpleSelector.Pseudo(
                        'root'
                        ,[]
                    )
                )
                ,Declaration.Variable(
                    'black', [ Color.Hex(0x000) ]
                )
                ,Declaration.Variable(
                    'near-black', [ Color.Hex(0x111) ]
                )
                ,Declaration.Variable(
                    'dark-gray', [ Color.Hex(0x333) ]
                )
                ,Declaration.Variable(
                    'mid-gray', [ Color.Hex(0x555) ]
                )
                ,Declaration.Variable(
                    'gray', [ Color.Hex(0x777) ]
                )
                ,Declaration.Variable(
                    'silver', [ Color.Hex(0x999) ]
                )
                ,Declaration.Variable(
                    'light-silver', [ Color.Hex(0xaaa) ]
                )
                ,Declaration.Variable(
                    'moon-gray', [ Color.Hex(0xccc) ]
                )
                ,Declaration.Variable(
                    'light-gray', [ Color.Hex(0xeee) ]
                )
                ,Declaration.Variable(
                    'near-white', [ Color.Hex(0xf4f4f4) ]
                )
                ,Declaration.Variable(
                    'white', [ Color.Hex(0xfff) ]
                )
                ,Declaration.Variable(
                    'transparent', [ Keyword.Transparent ]
                )
                ,[[['90', 0.9]
                , ['80', 0.8]
                , ['70', 0.7]
                , ['60', 0.6]
                , ['50', 0.5]
                , ['40', 0.4]
                , ['30', 0.3]
                , ['20', 0.2]
                , ['10', 0.1]
                , ['05', 0.05]
                , ['025', 0.025]
                , ['0125', 0.0125]
                ]]
                .reduce(
                    (p, [suffix, alpha]) =>
                        p.concat(
                            [['black', 0,0,0]
                            ,['white', 255, 255, 255]
                            ]
                            .map(
                                ([base, r,g,b]) =>
                                    [base, r, g, b, suffix, alpha]
                            )
                        )
                )
                .map(
                    ([base, r, g, b, suffix, alpha]) =>
                        Declaration.Variable(
                            base+'-'+suffix
                            ,[
                                Color.RGBA(r,g,b,alpha)
                            ]
                        )
                )
                .concat([
                    ['dark-red', 0xe7040f]
                    ,['red', 0xff4136]
                    ,['light-red', 0xff725c]
                    ,['orange', 0xff6300]
                    ,['gold', 0xffb700]
                    ,['yellow', 0xffd700]
                    ,['light-yellow', 0xfbf1a9]
                    ,['purple', 0x5e2ca5]
                    ,['light-purple', 0xa463f2]
                    ,['dark-pink', 0xd5008f]
                    ,['hot-pink', 0xff41b4]
                    ,['pink', 0xff80cc]
                    ,['light-pink', 0xffa3d7]
                    ,['dark-green', 0x137752]
                    ,['green', 0x19a974]
                    ,['light-green', 0x9eebcf]
                    ,['navy', 0x001b44]
                    ,['dark-blue', 0x00449e]
                    ,['blue', 0x357edd]
                    ,['light-blue', 0x96ccff]
                    ,['lightest-blue', 0xcdecff]
                    ,['washed-blue', 0xf6fffe]
                    ,['washed-green', 0xe8fdf5]
                    ,['washed-yellow', 0xfffceb]
                    ,['washed-red', 0xffdfdf]
                ]
                .map(
                    ([varName, value]) =>
                        Declaration.Variable(
                            varName, [ Color.Hex(value) ]
                        )
                ))

            )
            ]
        )
}
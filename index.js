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
}

const Property = {
    name: 'Property'
    ,Color:
        { value: 'color'
        , type: { name: 'Property' }
        , case: { name: 'Color' }
        }
    ,EaseIn:
        { value: 'ease-in'
        , type: { name: 'Property' }
        , case: { name: 'EaseIn' }
        }
    ,Dotted:
        { value: 'dotted'
        , type: { name: 'Property' }
        , case: { name: 'EaseIn' }
        }
    ,CurrentColor:
        { value: 'currentColor'
        , type: { name: 'Property' }
        , case: { name: 'CurrentColor' }
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

    static Property(property){
        return {
            property
            , type: CSSValue
            , case: CSSValue.Property
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

    static Psuedo( psuedoName, selectors ){
        return {
            name
            , type: SimpleSelector
            , case: SimpleSelector.Type
            , psuedoName
            , selectors
        }
    }
}

class Selector {
    static Selector(simpleSelectors){
        return {
            name
            , type: Selector
            , simpleSelectors
            , case: Selector.Selector
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
                    ,[ Unit.Property( Property.Color )
                    , Unit.Second(0.15)
                    , Unit.Property( Property.EaseIn )
                    ]
                )
                ]
            )
            , Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Psuedo(
                        'link'
                        ,[ SimpleSelector.Class('link')
                        ]
                    )
                    ,SimpleSelector.Psuedo(
                        'visited'
                        ,[ SimpleSelector.Class('link')
                        ]
                    )
                ])
                ,[ Declaration.Transition(
                    Important.Unimportant
                    ,[ Unit.Property( Property.Color )
                    , Unit.Second(0.15)
                    , Unit.Property( Property.EaseIn )
                    ]
                )
                ]
            )
            ,Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Psuedo(
                        'hover'
                        ,[ SimpleSelector.Class('link')
                        ]
                    )
                ])
                ,[ Declaration.Transition(
                    Important.Unimportant
                    ,[ Unit.Property( Property.Color )
                    , Unit.Second(0.15)
                    , Unit.Property( Property.EaseIn )
                    ]
                )
                ]
            )
            ,Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Psuedo(
                        'active'
                        ,[ SimpleSelector.Class('link')
                        ]
                    )
                ])
                ,[ Declaration.Transition(
                    Important.Unimportant
                    ,[ Unit.Property( Property.Color )
                    , Unit.Second(0.15)
                    , Unit.Property( Property.EaseIn )
                    ]
                )
                ]
            )
            ,Rule.Rule(
                Selector.Selector([
                    SimpleSelector.Psuedo(
                        'focus'
                        ,[ SimpleSelector.Class('link')
                        ]
                    )
                ])
                ,[ Declaration.Transition(
                    Important.Unimportant
                    ,[ Unit.Property( Property.Color )
                    , Unit.Second(0.15)
                    , Unit.Property( Property.EaseIn )
                    ]
                )
                , Declaration.Outline(
                    Important.Unimportant
                    ,[ Unit.Pixel(1)
                    , Unit.Property( Property.Dotted )
                    , Unit.Property( Property.CurrentColor )
                    ]
                )
                ]
            )
            ]
        )
    , lists:
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
    , skins:
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
            .map(
                ([ className, declarationFn, varName ]) =>
                    Rule.Rule(
                        Selector.Selector([
                            SimpleSelector.Class(className)
                        ])
                        ,[ varName == 'inherit'
                            ? CSSValue.Property('inherit')
                            : declarationFn(
                                CSSValue.Variable(varName)
                            )
                        ]
                    )
            )
        )
}
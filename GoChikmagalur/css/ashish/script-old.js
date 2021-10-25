$("#get").on("input",function (){
   
    let circle = ['\u24B6','\u24B7','\u24B8','\u24B9','\u24BA','\u24BB','\u24BC','\u24BD','\u24BE','\u24BF','\u24C0','\u24C1','\u24C2','\u24C3','\u24C4','\u24C5', '\u24C6','\u24C7','\u24C8', '\u24C9','\u24CA','\u24CB','\u24CC','\u24CD','\u24CE','\u24CF','\u24D0','\u24D1','\u24D2','\u24D3','\u24D4','\u24D5','\u24D6','\u24D7','\u24D8','\u24D9','\u24DA','\u24DB','\u24DC','\u24DD','\u24DE','\u24DF','\u24E0','\u24E1','\u24E2','\u24E3','\u24E4','\u24E5','\u24E6','\u24E7','\u24E8','\u24E9','\u24EA','\u2460','\u2461','\u2462','\u2463','\u2464','\u2465','\u2466','\u2467','\u2468']
    let arr = []
    let x = $("#get").val()
    oldEnglishMedeival(x)
    oldEnglishOld(x)
    mathBold(x)
    asian(x)
    square(x)
    squiggle(x)
    monospace(x)
    doubleStruck(x)
    mediavalStyle(x)
    cursiveStyle(x)
    spaceTextStyle(x)
    lolStyle(x)
    strokedStyle(x)
    randomStyle(x)
    cardstyle(x)
    testStyle(x) 
    hebrewStyle(x)
    bubbleStyle(x)
    invertedStyle(x)
    invertedReverseStyle(x)
    crazyStyle(x)
    smallStyle(x)
    let y = $("#get").val().length
    for(let i = 0;i<y;i++){
        var c = x.charAt(i);
        arr.push(c)
    }
    console.log(arr)
    let z = document.getElementById("put1")
    z.value = ""
    arr.map(data =>{
        console.log(data)
        if(data == 'A'){
            z.value += circle[0]
        }else if(data == "B"){
            z.value += circle[1]
        }else if(data == "C"){
            z.value += circle[2]
        }else if(data == "D"){
            z.value += circle[3]
        }else if(data == "E"){
            z.value += circle[4]
        }else if(data == "F"){
            z.value += circle[5]
        }else if(data == "G"){
            z.value += circle[6]
        }else if(data == "H"){
            z.value += circle[7]
        }else if(data == "I"){
            z.value += circle[8]
        }else if(data == "J"){
            z.value += circle[9]
        }else if(data == "K"){
            z.value += circle[10]
        }else if(data == "L"){
            z.value += circle[11]
        }else if(data == "M"){
            z.value += circle[12]
        }else if(data == "N"){
            z.value += circle[13]
        }else if(data == "O"){
            z.value += circle[14]
        }else if(data == "P"){
            z.value += circle[15]
        }else if(data == "Q"){
            z.value += circle[16]
        }else if(data == "R"){
            z.value += circle[17]
        }else if(data == "S"){
            z.value += circle[18]
        }else if(data == "T"){
            z.value += circle[19]
        }else if(data == "U"){
            z.value += circle[20]
        }else if(data == "V"){
            z.value += circle[21]
        }else if(data == "W"){
            z.value += circle[22]
        }else if(data == "X"){
            z.value += circle[23]
        }else if(data == "Y"){
            z.value += circle[24]
        }else if(data == "Z"){
            z.value += circle[25]
        }else if(data == "a"){
            z.value += circle[26]
        }else if(data == "b"){
            z.value += circle[27]
        }else if(data == "c"){
            z.value += circle[28]
        }else if(data == "d"){
            z.value += circle[29]
        }else if(data == "e"){
            z.value += circle[30]
        }else if(data == "f"){
            z.value += circle[31]
        }else if(data == "g"){
            z.value += circle[32]
        }else if(data == "h"){
            z.value += circle[33]
        }else if(data == "i"){
            z.value += circle[34]
        }else if(data == "j"){
            z.value += circle[35]
        }else if(data == "k"){
            z.value += circle[36]
        }else if(data == "l"){
            z.value += circle[37]
        }else if(data == "m"){
            z.value += circle[38]
        }else if(data == "n"){
            z.value += circle[39]
        }else if(data == "o"){
            z.value += circle[40]
        }else if(data == "p"){
            z.value += circle[41]
        }else if(data == "q"){
            z.value += circle[42]
        }else if(data == "r"){
            z.value += circle[43]
        }else if(data == "s"){
            z.value += circle[44]
        }else if(data == "t"){
            z.value += circle[45]
        }else if(data == "u"){
            z.value += circle[46]
        }else if(data == "v"){
            z.value += circle[47]
        }else if(data == "w"){
            z.value += circle[48]
        }else if(data == "x"){
            z.value += circle[49]
        }else if(data == "y"){
            z.value += circle[50]
        }else if(data == "z"){
            z.value += circle[51]
        }else if(data == "0"){
            z.value += circle[52]
        }else if(data == "1"){
            z.value += circle[53]
        }else if(data == "2"){
            z.value += circle[54]
        }else if(data == "3"){
            z.value += circle[55]
        }else if(data == "4"){
            z.value += circle[56]
        }else if(data == "5"){
            z.value += circle[57]
        }else if(data == "6"){
            z.value += circle[58]
        }else if(data == "7"){
            z.value += circle[59]
        }else if(data == "8"){
            z.value += circle[60]
        }else if(data == "9"){
            z.value += circle[61]
        } else{
            z.value += data
        }
    })
    })

   
    
    
        function oldEnglishMedeival(x) {
              var oldEngChars = {
                "0":'0',
                "1":'1',
                "2":'2',
                "3":'3',
                "4":'4',
                "5":'5',
                "6":'6',
                "7":'7',
                "8":'8',
                "9":'9',

                "a":"𝔞",
                "b":"𝔟",
                "c":"𝔠",
                "d":"𝔡",
                "e":"𝔢",
                "f":"𝔣",
                "g":"𝔤",
                "h":"𝔥",
                "i":"𝔦",
                "j":"𝔧",
                "k":"𝔨",
                "l":"𝔩",
                "m":"𝔪",
                "n":"𝔫",
                "o":"𝔬",
                "p":"𝔭",
                "q":"𝔮",
                "r":"𝔯",
                "s":"𝔰",
                "t":"𝔱",
                "u":"𝔲",
                "v":"𝔳",
                "w":"𝔴",
                "x":"𝔵",
                "y":"𝔶",
                "z":"𝔷",
                "A":"𝔄",
                "B":"𝔅",
                "C":"ℭ",
                "D":"𝔇",
                "E":"𝔈",
                "F":"𝔉",
                "G":"𝔊",
                "H":"ℌ",
                "I":"ℑ",
                "J":"𝔍",
                "K":"𝔎",
                "L":"𝔏",
                "M":"𝔐",
                "N":"𝔑",
                "O":"𝔒",
                "P":"𝔓",
                "Q":"𝔔",
                "R":"ℜ",
                "S":"𝔖",
                "T":"𝔗",
                "U":"𝔘",
                "V":"𝔙",
                "W":"𝔚",
                "X":"𝔛",
                "Y":"𝔜",
                "Z":"ℨ"};
              var charArray = x.split("");
              for(var i = 0; i < charArray.length; i++) {
                if( oldEngChars[charArray[i]] ) {
                  charArray[i] = oldEngChars[charArray[i]];
                }
              }
              x = charArray.join("");
            console.log(x)
            let textarea2 = document.getElementById('put2')
            textarea2.innerHTML = x
              return x;
            
            }
            

            function oldEnglishOld(x){
                console.log(x)
                var oldEngCharsBold = {
                    "0":"0",
                    "1":"1",
                    "2":"2",
                    "3":"3",
                    "4":"4",
                    "5":"5",
                    "6":"6",
                    "7":"7",
                    "8":"8",
                    "9":"9",
                    "a":"𝖆",
                    "b":"𝖇",
                    "c":"𝖈",
                    "d":"𝖉",
                    "e":"𝖊",
                    "f":"𝖋",
                    "g":"𝖌",
                    "h":"𝖍",
                    "i":"𝖎",
                    "j":"𝖏",
                    "k":"𝖐",
                    "l":"𝖑",
                    "m":"𝖒",
                    "n":"𝖓",
                    "o":"𝖔",
                    "p":"𝖕",
                    "q":"𝖖",
                    "r":"𝖗",
                    "s":"𝖘",
                    "t":"𝖙",
                    "u":"𝖚",
                    "v":"𝖛",
                    "w":"𝖜",
                    "x":"𝖝",
                    "y":"𝖞",
                    "z":"𝖟",
                    "A":"𝕬",
                    "B":"𝕭",
                    "C":"𝕮",
                    "D":"𝕯",
                    "E":"𝕰",
                    "F":"𝕱",
                    "G":"𝕲",
                    "H":"𝕳",
                    "I":"𝕴",
                    "J":"𝕵",
                    "K":"𝕶",
                    "L":"𝕷",
                    "M":"𝕸",
                    "N":"𝕹",
                    "O":"𝕺",
                    "P":"𝕻",
                    "Q":"𝕼",
                    "R":"𝕽",
                    "S":"𝕾",
                    "T":"𝕿",
                    "U":"𝖀",
                    "V":"𝖁",
                    "W":"𝖂",
                    "X":"𝖃",
                    "Y":"𝖄",
                    "Z":"𝖅"};
                    let characterArray = x.split('')
                    for(let i = 0;i<characterArray.length; i++){
                        if(oldEngCharsBold[characterArray[i]]){
                            characterArray[i]=oldEngCharsBold[characterArray[i]]
                        }
                    }
                    x = characterArray.join('')
                    console.log('xx'+x)
                    let textarea2 = document.getElementById('put3')
                        textarea2.innerHTML = x
                    return x

                    
  
            }

            function mathBold(x){
                let charactersMath = {
                    '0': '\x30',
                    '1': '\x31',
                    '2': '\x32',
                    '3': '\x33',
                    '4': '\x34',
                    '5': '\x35',
                    '6': '\x36',
                    '7': '\x37',
                    '8': '\x38',
                    '9': '\x39',
                    'a': '\u0105',
                    'b': '\u10ea',
                    'c': '\u0188',
                    'd': '\u0256',
                    'e': '\u025b',
                    'f': '\u0284',
                    'g': '\u0260',
                    'h': '\u0267',
                    'i': '\u0131',
                    'j': '\u029d',
                    'k': '\u0199',
                    'l': '\u0196',
                    'm': '\u0271',
                    'n': '\u014b',
                    'o': '\u01a1',
                    'p': '\u2118',
                    'q': '\u0566',
                    'r': '\u0f5e',
                    's': '\u0282',
                    't': '\u026c',
                    'u': '\u0173',
                    'v': '\u06f7',
                    'w': '\u1ff3',
                    'x': '\u04b3',
                    'y': '\u10e7',
                    'z': '\u0291',
                    'A': '\u0105',
                    'B': '\u10ea',
                    'C': '\u0188',
                    'D': '\u0256',
                    'E': '\u025b',
                    'F': '\u0284',
                    'G': '\u0260',
                    'H': '\u0267',
                    'I': '\u0131',
                    'J': '\u029d',
                    'K': '\u0199',
                    'L': '\u0196',
                    'M': '\u0271',
                    'N': '\u014b',
                    'O': '\u01a1',
                    'P': '\u2118',
                    'Q': '\u0566',
                    'R': '\u0f5e',
                    'S': '\u0282',
                    'T': '\u026c',
                    'U': '\u0173',
                    'V': '\u06f7',
                    'W': '\u1ff3',
                    'X': '\u04b3',
                    'Y': '\u10e7',
                    'Z': '\u0291'
                }
                let characterArray = x.split('')
                    for(let i = 0;i<characterArray.length; i++){
                        if(charactersMath[characterArray[i]]){
                            characterArray[i]=charactersMath[characterArray[i]]
                        }
                    }
                    x = characterArray.join('')
                    console.log('xx'+x)
                    let textarea3 = document.getElementById('put4')
                        textarea3.innerHTML = x
                    return x
                }
                function asian(x){
                    let charactersAsian = {
                        '0': '\x30',
                        '1': '\x31',
                        '2': '\x32',
                        '3': '\x33',
                        '4': '\x34',
                        '5': '\x35',
                        '6': '\x36',
                        '7': '\x37',
                        '8': '\x38',
                        '9': '\x39',
                        'a': '\uff91',
                        'b': '\u4e43',
                        'c': '\u1103',
                        'd': '\u308a',
                        'e': '\u4e47',
                        'f': '\uff77',
                        'g': '\u30e0',
                        'h': '\u3093',
                        'i': '\uff89',
                        'j': '\uff8c',
                        'k': '\u30ba',
                        'l': '\uff9a',
                        'm': '\uffb6',
                        'n': '\u5200',
                        'o': '\u306e',
                        'p': '\uff71',
                        'q': '\u3090',
                        'r': '\u5c3a',
                        's': '\u4e02',
                        't': '\uff72',
                        'u': '\u3072',
                        'v': '\u221a',
                        'w': '\uff92',
                        'x': '\uff98',
                        'y': '\u4e59',
                        'z': '\uff91',
                        'A': '\u4e43',
                        'B': '\u1103',
                        'C': '\u308a',
                        'D': '\u4e47',
                        'E': '\uff77',
                        'F': '\u30e0',
                        'G': '\u3093',
                        'H': '\uff89',
                        'I': '\uff8c',
                        'J': '\u30ba',
                        'K': '\uff9a',
                        'L': '\uffb6',
                        'M': '\u5200',
                        'N': '\u306e',
                        'O': '\uff71',
                        'P': '\u3090',
                        'Q': '\u5c3a',
                        'R': '\u4e02',
                        'S': '\uff72',
                        'T': '\u3072',
                        'U': '\u221a',
                        'V': '\uff92',
                        'W': '\uff98',
                        'X': '\u04b3',
                        'Y': '\u10e7',
                        'Z': '\u4e59'
                    }
                    let characterArray = x.split('')
                        for(let i = 0;i<characterArray.length; i++){
                            if(charactersAsian[characterArray[i]]){
                                characterArray[i]=charactersAsian[characterArray[i]]
                            }
                        }
                        x = characterArray.join('')
                        console.log('xx'+x)
                        let textarea3 = document.getElementById('put5')
                            textarea3.innerHTML = x
                        return x
                    }

                    function square(x){
                        let charactersAsian = {
                            '0': '\x30',
                            '1': '\x31',
                            '2': '\x32',
                            '3': '\x33',
                            '4': '\x34',
                            '5': '\x35',
                            '6': '\x36',
                            '7': '\x37',
                            '8': '\x38',
                            '9': '\x39',
                            'a': '\ud83c\udd30',
                            'b': '\ud83c\udd31',
                            'c': '\ud83c\udd32',
                            'd': '\ud83c\udd33',
                            'e': '\ud83c\udd34',
                            'f': '\ud83c\udd35',
                            'g': '\ud83c\udd36',
                            'h': '\ud83c\udd37',
                            'i': '\ud83c\udd38',
                            'j': '\ud83c\udd39',
                            'k': '\ud83c\udd3a',
                            'l': '\ud83c\udd3b',
                            'm': '\ud83c\udd3c',
                            'n': '\ud83c\udd3d',
                            'o': '\ud83c\udd3e',
                            'p': '\ud83c\udd3f',
                            'q': '\ud83c\udd40',
                            'r': '\ud83c\udd41',
                            's': '\ud83c\udd42',
                            't': '\ud83c\udd43',
                            'u': '\ud83c\udd44',
                            'v': '\ud83c\udd45',
                            'w': '\ud83c\udd46',
                            'x': '\ud83c\udd47',
                            'y': '\ud83c\udd48',
                            'z': '\ud83c\udd49',
                            'A': '\ud83c\udd30',
                            'B': '\ud83c\udd31',
                            'C': '\ud83c\udd32',
                            'D': '\ud83c\udd33',
                            'E': '\ud83c\udd34',
                            'F': '\ud83c\udd35',
                            'G': '\ud83c\udd36',
                            'H': '\ud83c\udd37',
                            'I': '\ud83c\udd38',
                            'J': '\ud83c\udd39',
                            'K': '\ud83c\udd3a',
                            'L': '\ud83c\udd3b',
                            'M': '\ud83c\udd3c',
                            'N': '\ud83c\udd3d',
                            'O': '\ud83c\udd3e',
                            'P': '\ud83c\udd3f',
                            'Q': '\ud83c\udd40',
                            'R': '\ud83c\udd41',
                            'S': '\ud83c\udd42',
                            'T': '\ud83c\udd43',
                            'U': '\ud83c\udd44',
                            'V': '\ud83c\udd45',
                            'W': '\ud83c\udd46',
                            'X': '\ud83c\udd47',
                            'Y': '\ud83c\udd48',
                            'Z': '\ud83c\udd49'
                        }
                        let characterArray = x.split('')
                            for(let i = 0;i<characterArray.length; i++){
                                if(charactersAsian[characterArray[i]]){
                                    characterArray[i]=charactersAsian[characterArray[i]]
                                }
                            }
                            x = characterArray.join('')
                            console.log('xx'+x)
                            let textarea3 = document.getElementById('put6')
                                textarea3.innerHTML = x
                            return x
                        }
                
                        function squiggle(x){
                            let charactersAsian = {
                                '0': '\x30',
                                '1': '\x31',
                                '2': '\x32',
                                '3': '\x33',
                                '4': '\x34',
                                '5': '\x35',
                                '6': '\x36',
                                '7': '\x37',
                                '8': '\x38',
                                '9': '\x39',
                                'a': '\u13d7',
                                'b': '\u13f0',
                                'c': '\u1348',
                                'd': '\u13b4',
                                'e': '\u13cb',
                                'f': '\u13a6',
                                'g': '\u13b6',
                                'h': '\u13c2',
                                'i': '\u13a5',
                                'j': '\u13e0',
                                'k': '\u13e6',
                                'l': '\u13dd',
                                'm': '\u13b7',
                                'n': '\u13c1',
                                'o': '\u13a7',
                                'p': '\u13ae',
                                'q': '\u13a4',
                                'r': '\u13d2',
                                's': '\u13d5',
                                't': '\u13d6',
                                'u': '\u13ec',
                                'v': '\u13c9',
                                'w': '\u13c7',
                                'x': '\u1300',
                                'y': '\u13a9',
                                'z': '\u135a',
                                'A': '\u13d7',
                                'B': '\u13f0',
                                'C': '\u1348',
                                'D': '\u13b4',
                                'E': '\u13cb',
                                'F': '\u13a6',
                                'G': '\u13b6',
                                'H': '\u13c2',
                                'I': '\u13a5',
                                'J': '\u13e0',
                                'K': '\u13e6',
                                'L': '\u13dd',
                                'M': '\u13b7',
                                'N': '\u13c1',
                                'O': '\u13a7',
                                'P': '\u13ae',
                                'Q': '\u13a4',
                                'R': '\u13d2',
                                'S': '\u13d5',
                                'T': '\u13d6',
                                'U': '\u13ec',
                                'V': '\u13c9',
                                'W': '\u13c7',
                                'X': '\u1300',
                                'Y': '\u13a9',
                                'Z': '\u135a'
                            }
                            let characterArray = x.split('')
                                for(let i = 0;i<characterArray.length; i++){
                                    if(charactersAsian[characterArray[i]]){
                                        characterArray[i]=charactersAsian[characterArray[i]]
                                    }
                                }
                                x = characterArray.join('')
                                console.log('xx'+x)
                                let textarea3 = document.getElementById('put7')
                                    textarea3.innerHTML = x
                                return x
                            }

                            function monospace(x){
                                let charactersAsian = {
                                    '0': '\x30',
                                    '1': '\x31',
                                    '2': '\x32',
                                    '3': '\x33',
                                    '4': '\x34',
                                    '5': '\x35',
                                    '6': '\x36',
                                    '7': '\x37',
                                    '8': '\x38',
                                    '9': '\x39',
                                    'a': '𝓪',
                                    'b': '𝓫',
                                    'c': '𝓬',
                                    'd': '𝓭',
                                    'e': '𝓮',
                                    'f': '𝓯',
                                    'g': '𝓰',
                                    'h': '𝓱',
                                    'i': '𝓲',
                                    'j': '𝓳',
                                    'k': '𝓴',
                                    'l': '',
                                    'm': '𝓶',
                                    'n': '𝓷',
                                    'o': '𝓸',
                                    'p': '𝓹',
                                    'q': '𝓺',
                                    'r': '𝓻',
                                    's': '𝓼',
                                    't': '𝓽',
                                    'u': '𝓾',
                                    'v': '𝓿',
                                    'w': '𝔀',
                                    'x': '𝔁',
                                    'y': '𝔂',
                                    'z': '𝔃',
                                    'A': '𝓐',
                                    'B': '𝓑',
                                    'C': '𝓒',
                                    'D': '𝓓',
                                    'E': '𝓔',
                                    'F': '𝓕',
                                    'G': '𝓖',
                                    'H': '𝓗',
                                    'I': '𝓘',
                                    'J': '𝓙',
                                    'K': '𝓚',
                                    'L': '𝓛',
                                    'M': '𝓜',
                                    'N': '𝓝',
                                    'O': '𝓞',
                                    'P': '𝓟',
                                    'Q': '𝓠',
                                    'R': '𝓡',
                                    'S': '𝓢',
                                    'T': '𝓣',
                                    'U': '𝓤',
                                    'V': '𝓥',
                                    'W': '𝓦',
                                    'X': '𝓧',
                                    'Y': '𝓨',
                                    'Z': '𝓩',
                                    
                                }
                                let characterArray = x.split('')
                                    for(let i = 0;i<characterArray.length; i++){
                                        if(charactersAsian[characterArray[i]]){
                                            characterArray[i]=charactersAsian[characterArray[i]]
                                        }
                                    }
                                    x = characterArray.join('')
                                    console.log('xx'+x)
                                    let textarea3 = document.getElementById('put8')
                                        textarea3.innerHTML = x
                                    return x
                                }

                                function doubleStruck(x){
                                    let charactersAsian = {
                                        '0': '\ud835\udfd8',
                                        '1': '\ud835\udfd9',
                                        '2': '\ud835\udfda',
                                        '3': '\ud835\udfdb',
                                        '4': '\ud835\udfdc',
                                        '5': '\ud835\udfdd',
                                        '6': '\ud835\udfde',
                                        '7': '\ud835\udfdf',
                                        '8': '\ud835\udfe0',
                                        '9': '\ud835\udfe1',
                                        'a': '\ud835\udd52',
                                        'b': '\ud835\udd53',
                                        'c': '\ud835\udd54',
                                        'd': '\ud835\udd55',
                                        'e': '\ud835\udd56',
                                        'f': '\ud835\udd57',
                                        'g': '\ud835\udd58',
                                        'h': '\ud835\udd59',
                                        'i': '\ud835\udd5a',
                                        'j': '\ud835\udd5b',
                                        'k': '\ud835\udd5c',
                                        'l': '\ud835\udd5d',
                                        'm': '\ud835\udd5e',
                                        'n': '\ud835\udd5f',
                                        'o': '\ud835\udd60',
                                        'p': '\ud835\udd61',
                                        'q': '\ud835\udd62',
                                        'r': '\ud835\udd63',
                                        's': '\ud835\udd64',
                                        't': '\ud835\udd65',
                                        'u': '\ud835\udd66',
                                        'v': '\ud835\udd67',
                                        'w': '\ud835\udd68',
                                        'x': '\ud835\udd69',
                                        'y': '\ud835\udd6a',
                                        'z': '\ud835\udd6b',
                                        'A': '\ud835\udd38',
                                        'B': '\ud835\udd39',
                                        'C': '\u2102',
                                        'D': '\ud835\udd3b',
                                        'E': '\ud835\udd3c',
                                        'F': '\ud835\udd3d',
                                        'G': '\ud835\udd3e',
                                        'H': '\u210d',
                                        'I': '\ud835\udd40',
                                        'J': '\ud835\udd41',
                                        'K': '\ud835\udd42',
                                        'L': '\ud835\udd43',
                                        'M': '\ud835\udd44',
                                        'N': '\u2115',
                                        'O': '\ud835\udd46',
                                        'P': '\u2119',
                                        'Q': '\u211a',
                                        'R': '\u211d',
                                        'S': '\ud835\udd4a',
                                        'T': '\ud835\udd4b',
                                        'U': '\ud835\udd4c',
                                        'V': '\ud835\udd4d',
                                        'W': '\ud835\udd4e',
                                        'X': '\ud835\udd4f',
                                        'Y': '\ud835\udd50',
                                        'Z': '\u2124'
                                        
                                    }
                                    let characterArray = x.split('')
                                        for(let i = 0;i<characterArray.length; i++){
                                            if(charactersAsian[characterArray[i]]){
                                                characterArray[i]=charactersAsian[characterArray[i]]
                                            }
                                        }
                                        x = characterArray.join('')
                                        console.log('xx'+x)
                                        let textarea3 = document.getElementById('put9')
                                            textarea3.innerHTML = x
                                        return x
                                    }
                                    function mediavalStyle(x){
                                        let charactersAsian = {
                                            '0': '\x30',
                                            '1': '\x31',
                                            '2': '\x32',
                                            '3': '\x33',
                                            '4': '\x34',
                                            '5': '\x35',
                                            '6': '\x36',
                                            '7': '\x37',
                                            '8': '\x38',
                                            '9': '\x39',
                                            '\x71': '\ud83c\udd80',
                                            '\x77': '\ud83c\udd86',
                                            '\x65': '\ud83c\udd74',
                                            '\x72': '\ud83c\udd81',
                                            '\x74': '\ud83c\udd83',
                                            '\x79': '\ud83c\udd88',
                                            '\x75': '\ud83c\udd84',
                                            '\x69': '\ud83c\udd78',
                                            '\x6f': '\ud83c\udd7e',
                                            '\x70': '\ud83c\udd7f',
                                            '\x61': '\ud83c\udd70',
                                            '\x73': '\ud83c\udd82',
                                            '\x64': '\ud83c\udd73',
                                            '\x66': '\ud83c\udd75',
                                            '\x67': '\ud83c\udd76',
                                            '\x68': '\ud83c\udd77',
                                            '\x6a': '\ud83c\udd79',
                                            '\x6b': '\ud83c\udd7a',
                                            '\x6c': '\ud83c\udd7b',
                                            '\x7a': '\ud83c\udd89',
                                            '\x78': '\ud83c\udd87',
                                            '\x63': '\ud83c\udd72',
                                            '\x76': '\ud83c\udd85',
                                            '\x62': '\ud83c\udd71',
                                            '\x6e': '\ud83c\udd7d',
                                            '\x6d': '\ud83c\udd7c',
                                            'A': '\ud83c\udd80',
                                            'B': '\ud83c\udd86',
                                            'C': '\ud83c\udd74',
                                            'D': '\ud83c\udd81',
                                            'E': '\ud83c\udd83',
                                            'F': '\ud83c\udd88',
                                            'G': '\ud83c\udd84',
                                            'H': '\ud83c\udd78',
                                            'I': '\ud83c\udd7e',
                                            'J': '\ud83c\udd7f',
                                            'K': '\ud83c\udd70',
                                            'L': '\ud83c\udd82',
                                            'M': '\ud83c\udd73',
                                            'N': '\ud83c\udd75',
                                            'O': '\ud83c\udd76',
                                            'P': '\ud83c\udd77',
                                            'Q': '\ud83c\udd79',
                                            'R': '\ud83c\udd7a',
                                            'S': '\ud83c\udd7b',
                                            'T': '\ud83c\udd89',
                                            'U': '\ud83c\udd87',
                                            'V': '\ud83c\udd72',
                                            'W': '\ud83c\udd85',
                                            'X': '\ud83c\udd71',
                                            'Y': '\ud83c\udd7d',
                                            'Z': '\ud83c\udd7c'
                                            
                                        }
                                        let characterArray = x.split('')
                                            for(let i = 0;i<characterArray.length; i++){
                                                if(charactersAsian[characterArray[i]]){
                                                    characterArray[i]=charactersAsian[characterArray[i]]
                                                }
                                            }
                                            x = characterArray.join('')
                                            console.log('xx'+x)
                                            let textarea3 = document.getElementById('put10')
                                                textarea3.innerHTML = x
                                            return x
                                        }
    
                                        function cursiveStyle(x){
                                            let charactersAsian = {
                                                '0': '\x30',
                                                '1': '\x31',
                                                '2': '\x32',
                                                '3': '\x33',
                                                '4': '\x34',
                                                '5': '\x35',
                                                '6': '\x36',
                                                '7': '\x37',
                                                '8': '\x38',
                                                '9': '\x39',
                                                '\x61': '\ud835\udcea',
                                                '\x62': '\ud835\udceb',
                                                '\x63': '\ud835\udcec',
                                                '\x64': '\ud835\udced',
                                                '\x65': '\ud835\udcee',
                                                '\x66': '\ud835\udcef',
                                                '\x67': '\ud835\udcf0',
                                                '\x68': '\ud835\udcf1',
                                                '\x69': '\ud835\udcf2',
                                                '\x6a': '\ud835\udcf3',
                                                '\x6b': '\ud835\udcf4',
                                                '\x6c': '\ud835\udcf5',
                                                '\x6d': '\ud835\udcf6',
                                                '\x6e': '\ud835\udcf7',
                                                '\x6f': '\ud835\udcf8',
                                                '\x70': '\ud835\udcf9',
                                                '\x71': '\ud835\udcfa',
                                                '\x72': '\ud835\udcfb',
                                                '\x73': '\ud835\udcfc',
                                                '\x74': '\ud835\udcfd',
                                                '\x75': '\ud835\udcfe',
                                                '\x76': '\ud835\udcff',
                                                '\x77': '\ud835\udd00',
                                                '\x78': '\ud835\udd01',
                                                '\x79': '\ud835\udd02',
                                                '\x7a': '\ud835\udd03',
                                                '\x41': '\ud835\udcd0',
                                                '\x42': '\ud835\udcd1',
                                                '\x43': '\ud835\udcd2',
                                                '\x44': '\ud835\udcd3',
                                                '\x45': '\ud835\udcd4',
                                                '\x46': '\ud835\udcd5',
                                                '\x47': '\ud835\udcd6',
                                                '\x48': '\ud835\udcd7',
                                                '\x49': '\ud835\udcd8',
                                                '\x4a': '\ud835\udcd9',
                                                '\x4b': '\ud835\udcda',
                                                '\x4c': '\ud835\udcdb',
                                                '\x4d': '\ud835\udcdc',
                                                '\x4e': '\ud835\udcdd',
                                                '\x4f': '\ud835\udcde',
                                                '\x50': '\ud835\udcdf',
                                                '\x51': '\ud835\udce0',
                                                '\x52': '\ud835\udce1',
                                                '\x53': '\ud835\udce2',
                                                '\x54': '\ud835\udce3',
                                                '\x55': '\ud835\udce4',
                                                '\x56': '\ud835\udce5',
                                                '\x57': '\ud835\udce6',
                                                '\x58': '\ud835\udce7',
                                                '\x59': '\ud835\udce8',
                                                '\x5a': '\ud835\udce9'
                                                
                                            }
                                            let characterArray = x.split('')
                                                for(let i = 0;i<characterArray.length; i++){
                                                    if(charactersAsian[characterArray[i]]){
                                                        characterArray[i]=charactersAsian[characterArray[i]]
                                                    }
                                                }
                                                x = characterArray.join('')
                                                console.log('xx'+x)
                                                let textarea3 = document.getElementById('put11')
                                                    textarea3.innerHTML = x
                                                return x
                                            }
                                            function spaceTextStyle(x){
                                                let charactersAsian = {
                                                    '\x60': '\x60',
                                                    '\x31': '\uff11',
                                                    '\x32': '\uff12',
                                                    '\x33': '\uff13',
                                                    '\x34': '\uff14',
                                                    '\x35': '\uff15',
                                                    '\x36': '\uff16',
                                                    '\x37': '\uff17',
                                                    '\x38': '\uff18',
                                                    '\x39': '\uff19',
                                                    '\x30': '\uff10',
                                                    '\x2d': '\uff0d',
                                                    '\x3d': '\uff1d',
                                                    '\x7e': '\x7e',
                                                    '\x21': '\uff01',
                                                    '\x40': '\uff20',
                                                    '\x23': '\uff03',
                                                    '\x24': '\uff04',
                                                    '\x25': '\uff05',
                                                    '\x5e': '\x5e',
                                                    '\x26': '\uff06',
                                                    '\x2a': '\uff0a',
                                                    '\x28': '\uff08',
                                                    '\x29': '\uff09',
                                                    '\x5f': '\x5f',
                                                    '\x2b': '\uff0b',
                                                    '\x71': '\uff51',
                                                    '\x77': '\uff57',
                                                    '\x65': '\uff45',
                                                    '\x72': '\uff52',
                                                    '\x74': '\uff54',
                                                    '\x79': '\uff59',
                                                    '\x75': '\uff55',
                                                    '\x69': '\uff49',
                                                    '\x6f': '\uff4f',
                                                    '\x70': '\uff50',
                                                    '\x5b': '\x5b',
                                                    '\x5d': '\x5d',
                                                    '\x5c': '\x5c',
                                                    '\x51': '\uff31',
                                                    '\x57': '\uff37',
                                                    '\x45': '\uff25',
                                                    '\x52': '\uff32',
                                                    '\x54': '\uff34',
                                                    '\x59': '\uff39',
                                                    '\x55': '\uff35',
                                                    '\x49': '\uff29',
                                                    '\x4f': '\uff2f',
                                                    '\x50': '\uff30',
                                                    '\x7b': '\x7b',
                                                    '\x7d': '\x7d',
                                                    '\x7c': '\x7c',
                                                    '\x61': '\uff41',
                                                    '\x73': '\uff53',
                                                    '\x64': '\uff44',
                                                    '\x66': '\uff46',
                                                    '\x67': '\uff47',
                                                    '\x68': '\uff48',
                                                    '\x6a': '\uff4a',
                                                    '\x6b': '\uff4b',
                                                    '\x6c': '\uff4c',
                                                    '\x3b': '\uff1b',
                                                    '\x27': '\uff07',
                                                    '\x41': '\uff21',
                                                    '\x53': '\uff33',
                                                    '\x44': '\uff24',
                                                    '\x46': '\uff26',
                                                    '\x47': '\uff27',
                                                    '\x48': '\uff28',
                                                    '\x4a': '\uff2a',
                                                    '\x4b': '\uff2b',
                                                    '\x4c': '\uff2c',
                                                    '\x3a': '\uff1a',
                                                    '\x22': '\x22',
                                                    '\x7a': '\uff5a',
                                                    '\x78': '\uff58',
                                                    '\x63': '\uff43',
                                                    '\x76': '\uff56',
                                                    '\x62': '\uff42',
                                                    '\x6e': '\uff4e',
                                                    '\x6d': '\uff4d',
                                                    '\x2c': '\uff0c',
                                                    '\x2e': '\uff0e',
                                                    '\x2f': '\uff0f',
                                                    '\x5a': '\uff3a',
                                                    '\x58': '\uff38',
                                                    '\x43': '\uff23',
                                                    '\x56': '\uff36',
                                                    '\x42': '\uff22',
                                                    '\x4e': '\uff2e',
                                                    '\x4d': '\uff2d',
                                                    '\x3c': '\x3c',
                                                    '\x3e': '\x3e',
                                                    '\x3f': '\uff1f'
                                                    
                                                }
                                                let characterArray = x.split('')
                                                    for(let i = 0;i<characterArray.length; i++){
                                                        if(charactersAsian[characterArray[i]]){
                                                            characterArray[i]=charactersAsian[characterArray[i]]
                                                        }
                                                    }
                                                    x = characterArray.join('')
                                                    console.log('xx'+x)
                                                    let textarea3 = document.getElementById('put12')
                                                        textarea3.innerHTML = x
                                                    return x
                                                }

                                                function lolStyle(x){
                                                    let charactersAsian = {
                                                        '\x30': '\ud83d\udcc1\ufe0e',
                                                        '\x31': '\ud83d\udcc2\ufe0e',
                                                        '\x32': '\ud83d\udcc4\ufe0e',
                                                        '\x33': '\ud83d\uddcf\ufe0e',
                                                        '\x34': '\ud83d\uddd0\ufe0e',
                                                        '\x35': '\ud83d\uddc4\ufe0e',
                                                        '\x36': '\u231b\ufe0e',
                                                        '\x37': '\ud83d\uddae\ufe0e',
                                                        '\x38': '\ud83d\uddb0\ufe0e',
                                                        '\x39': '\ud83d\uddb2\ufe0e',
                                                        '\x21': '\u270f\ufe0e',
                                                        '\x22': '\u2702\ufe0e',
                                                        '\x23': '\u2701\ufe0e',
                                                        '\x24': '\ud83d\udc53\ufe0e',
                                                        '\x25': '\ud83d\udd6d\ufe0e',
                                                        '\x26': '\ud83d\udd6e\ufe0e',
                                                        '\x27': '\ud83d\udd6f\ufe0e',
                                                        '\x28': '\ud83d\udd7f\ufe0e',
                                                        '\x29': '\u2706\ufe0e',
                                                        '\x2a': '\ud83d\udd82\ufe0e',
                                                        '\x2b': '\ud83d\udd83\ufe0e',
                                                        '\x2c': '\ud83d\udcea\ufe0e',
                                                        '\x2d': '\ud83d\udceb\ufe0e',
                                                        '\x2e': '\ud83d\udcec\ufe0e',
                                                        '\x2f': '\ud83d\udced\ufe0e',
                                                        '\x3a': '\ud83d\uddb3\ufe0e',
                                                        '\x3b': '\ud83d\uddb4\ufe0e',
                                                        '\x3c': '\ud83d\uddab\ufe0e',
                                                        '\x3d': '\ud83d\uddac\ufe0e',
                                                        '\x3e': '\u2707\ufe0e',
                                                        '\x3f': '\u270d\ufe0e',
                                                        '\x41': '\u270c\ufe0e',
                                                        '\x42': '\ud83d\udc4c\ufe0e',
                                                        '\x43': '\ud83d\udc4d\ufe0e',
                                                        '\x44': '\ud83d\udc4e\ufe0e',
                                                        '\x45': '\u261c\ufe0e',
                                                        '\x46': '\u261e\ufe0e',
                                                        '\x47': '\u261d\ufe0e',
                                                        '\x48': '\u261f\ufe0e',
                                                        '\x49': '\u270b\ufe0e',
                                                        '\x4a': '\u263a\ufe0e',
                                                        '\x4b': '\ud83d\ude10\ufe0e',
                                                        '\x4c': '\u2639\ufe0e',
                                                        '\x4d': '\ud83d\udca3\ufe0e',
                                                        '\x4e': '\u2620\ufe0e',
                                                        '\x4f': '\u2690\ufe0e',
                                                        '\x50': '\ud83c\udff1\ufe0e',
                                                        '\x51': '\u2708\ufe0e',
                                                        '\x52': '\u263c\ufe0e',
                                                        '\x53': '\ud83d\udca7\ufe0e',
                                                        '\x54': '\u2744\ufe0e',
                                                        '\x55': '\ud83d\udd46\ufe0e',
                                                        '\x56': '\u271e\ufe0e',
                                                        '\x57': '\ud83d\udd48\ufe0e',
                                                        '\x58': '\u2720\ufe0e',
                                                        '\x59': '\u2721\ufe0e',
                                                        '\x5a': '\u262a\ufe0e',
                                                        '\x5b': '\u262f\ufe0e',
                                                        '\x5c': '\u0950\ufe0e',
                                                        '\x5d': '\u2638\ufe0e',
                                                        '\x5e': '\u2648\ufe0e',
                                                        '\x5f': '\u2649\ufe0e',
                                                        '\x60': '\u264a\ufe0e',
                                                        '\x61': '\u264b\ufe0e',
                                                        '\x62': '\u264c\ufe0e',
                                                        '\x63': '\u264d\ufe0e',
                                                        '\x64': '\u264e\ufe0e',
                                                        '\x65': '\u264f\ufe0e',
                                                        '\x66': '\u2650\ufe0e',
                                                        '\x67': '\u2651\ufe0e',
                                                        '\x68': '\u2652\ufe0e',
                                                        '\x69': '\u2653\ufe0e',
                                                        '\x6a': '\ud83d\ude70',
                                                        '\x6b': '\ud83d\ude75',
                                                        '\x6c': '\u25cf\ufe0e',
                                                        '\x6d': '\u274d\ufe0e',
                                                        '\x6e': '\u25a0\ufe0e',
                                                        '\x6f': '\u25a1\ufe0e',
                                                        '\x70': '\u25fb\ufe0e',
                                                        '\x71': '\u2751\ufe0e',
                                                        '\x72': '\u2752\ufe0e',
                                                        '\x73': '\u2b27\ufe0e',
                                                        '\x74': '\u29eb\ufe0e',
                                                        '\x75': '\u25c6\ufe0e',
                                                        '\x76': '\u2756\ufe0e',
                                                        '\x77': '\u2b25\ufe0e',
                                                        '\x78': '\u2327\ufe0e',
                                                        '\x79': '\u2353\ufe0e',
                                                        '\x7a': '\u2318\ufe0e',
                                                        '\x7b': '\u2740\ufe0e',
                                                        '\x7c': '\u273f\ufe0e',
                                                        '\x7d': '\u275d\ufe0e',
                                                        '\x7e': '\u275e\ufe0e',
                                                        '\x20': '\u25af\ufe0e',
                                                        '\u20ac': '\u24ea\ufe0e',
                                                        '\x20': '\u2460\ufe0e',
                                                        '\u201a': '\u2461\ufe0e',
                                                        '\u0192': '\u2462\ufe0e',
                                                        '\u201e': '\u2463\ufe0e',
                                                        '\u2026': '\u2464\ufe0e',
                                                        '\u2020': '\u2465\ufe0e',
                                                        '\u2021': '\u2466\ufe0e',
                                                        '\u02c6': '\u2467\ufe0e',
                                                        '\u2030': '\u2468\ufe0e',
                                                        '\u0160': '\u2469\ufe0e',
                                                        '\u2039': '\u24ff\ufe0e',
                                                        '\u0152': '\u2776\ufe0e',
                                                        '\x20': '\u2777\ufe0e',
                                                        '\u017d': '\u2778\ufe0e',
                                                        '\x20': '\u2779\ufe0e',
                                                        '\x20': '\u277a\ufe0e',
                                                        '\u2018': '\u277b\ufe0e',
                                                        '\u2019': '\u277c\ufe0e',
                                                        '\u201c': '\u277d\ufe0e',
                                                        '\u201d': '\u277e\ufe0e',
                                                        '\u2022': '\u277f\ufe0e',
                                                        '\u2013': '\u25fb\ufe0e',
                                                        '\u2014': '\u25fb\ufe0e',
                                                        '\u02dc': '\u25fb\ufe0e',
                                                        '\u2122': '\u25fb\ufe0e',
                                                        '\u0161': '\u25fb\ufe0e',
                                                        '\u203a': '\u25fb\ufe0e',
                                                        '\u0153': '\u25fb\ufe0e',
                                                        '\x20': '\u25fb\ufe0e',
                                                        '\u017e': '\u00b7\ufe0e',
                                                        '\u0178': '\u2022\ufe0e',
                                                        '\u00a1': '\u25cb\ufe0e',
                                                        '\u00a2': '\u2b55\ufe0e',
                                                        '\u00a3': '\u25fb\ufe0e',
                                                        '\u00a4': '\u25c9\ufe0e',
                                                        '\u00a5': '\u25ce\ufe0e',
                                                        '\u00a6': '\u25fb\ufe0e',
                                                        '\u00a7': '\u25aa\ufe0e',
                                                        '\u00a8': '\u25fb\ufe0e',
                                                        '\u00a9': '\u25fb\ufe0e',
                                                        '\u00aa': '\u2726\ufe0e',
                                                        '\u00ab': '\u2605\ufe0e',
                                                        '\u00ac': '\u2736\ufe0e',
                                                        '\u00ae': '\u2739\ufe0e',
                                                        '\u00af': '\u2735\ufe0e',
                                                        '\u00b0': '\u25fb\ufe0e',
                                                        '\u00b1': '\u2316\ufe0e',
                                                        '\u00b2': '\u27e1\ufe0e',
                                                        '\u00b3': '\u2311\ufe0e',
                                                        '\u00b4': '\u25fb\ufe0e',
                                                        '\u00b5': '\u272a\ufe0e',
                                                        '\u00b6': '\u2730\ufe0e',
                                                        '\u00b7': '\ud83d\udd50\ufe0e',
                                                        '\u00b8': '\ud83d\udd51\ufe0e',
                                                        '\u00b9': '\ud83d\udd52\ufe0e',
                                                        '\u00ba': '\ud83d\udd53\ufe0e',
                                                        '\u00bb': '\ud83d\udd54\ufe0e',
                                                        '\u00bc': '\ud83d\udd55\ufe0e',
                                                        '\u00bd': '\ud83d\udd56\ufe0e',
                                                        '\u00be': '\ud83d\udd57\ufe0e',
                                                        '\u00bf': '\ud83d\udd58\ufe0e',
                                                        '\u00c0': '\ud83d\udd59\ufe0e',
                                                        '\u00c1': '\ud83d\udd5a\ufe0e',
                                                        '\u00c2': '\ud83d\udd5b\ufe0e',
                                                        '\u00c3': '\u25fb\ufe0e',
                                                        '\u00c4': '\u25fb\ufe0e',
                                                        '\u00c5': '\u25fb\ufe0e',
                                                        '\u00c6': '\u25fb\ufe0e',
                                                        '\u00c7': '\u25fb\ufe0e',
                                                        '\u00c8': '\u25fb\ufe0e',
                                                        '\u00c9': '\u25fb\ufe0e',
                                                        '\u00ca': '\u25fb\ufe0e',
                                                        '\u00cb': '\u25fb\ufe0e',
                                                        '\u00cc': '\u25fb\ufe0e',
                                                        '\u00cd': '\u25fb\ufe0e',
                                                        '\u00ce': '\u25fb\ufe0e',
                                                        '\u00cf': '\u25fb\ufe0e',
                                                        '\u00d0': '\u25fb\ufe0e',
                                                        '\u00d1': '\u25fb\ufe0e',
                                                        '\u00d2': '\u25fb\ufe0e',
                                                        '\u00d3': '\u25fb\ufe0e',
                                                        '\u00d4': '\u25fb\ufe0e',
                                                        '\u00d5': '\u232b\ufe0e',
                                                        '\u00d6': '\u2326\ufe0e',
                                                        '\u00d7': '\u25fb\ufe0e',
                                                        '\u00d8': '\u27a2\ufe0e',
                                                        '\u00d9': '\u25fb\ufe0e',
                                                        '\u00da': '\u25fb\ufe0e',
                                                        '\u00db': '\u25fb\ufe0e',
                                                        '\u00dc': '\u27b2\ufe0e',
                                                        '\u00dd': '\u25fb\ufe0e',
                                                        '\u00de': '\u25fb\ufe0e',
                                                        '\u00df': '\u25fb\ufe0e',
                                                        '\u00e0': '\u25fb\ufe0e',
                                                        '\u00e1': '\u25fb\ufe0e',
                                                        '\u00e2': '\u25fb\ufe0e',
                                                        '\u00e3': '\u25fb\ufe0e',
                                                        '\u00e4': '\u25fb\ufe0e',
                                                        '\u00e5': '\u25fb\ufe0e',
                                                        '\u00e6': '\u25fb\ufe0e',
                                                        '\u00e7': '\u25fb\ufe0e',
                                                        '\u00e8': '\u2794\ufe0e',
                                                        '\u00e9': '\u25fb\ufe0e',
                                                        '\u00ea': '\u25fb\ufe0e',
                                                        '\u00eb': '\u25fb\ufe0e',
                                                        '\u00ec': '\u25fb\ufe0e',
                                                        '\u00ed': '\u25fb\ufe0e',
                                                        '\u00ee': '\u25fb\ufe0e',
                                                        '\u00ef': '\u21e6\ufe0e',
                                                        '\u00f0': '\u21e8\ufe0e',
                                                        '\u00f1': '\u21e7\ufe0e',
                                                        '\u00f2': '\u21e9\ufe0e',
                                                        '\u00f3': '\u2b04\ufe0e',
                                                        '\u00f4': '\u21f3\ufe0e',
                                                        '\u00f5': '\u2b00\ufe0e',
                                                        '\u00f6': '\u2b01\ufe0e',
                                                        '\u00f7': '\u2b03\ufe0e',
                                                        '\u00f8': '\u2b02\ufe0e',
                                                        '\u00f9': '\u25ad\ufe0e',
                                                        '\u00fa': '\u25ab\ufe0e',
                                                        '\u00fb': '\u2717\ufe0e',
                                                        '\u00fc': '\u2713\ufe0e',
                                                        '\u00fd': '\u2612\ufe0e',
                                                        '\u00fe': '\u2611\ufe0e',
                                                        '\u00ff': '\u25fb\ufe0e'
                                                        
                                                    }
                                                    let characterArray = x.split('')
                                                        for(let i = 0;i<characterArray.length; i++){
                                                            if(charactersAsian[characterArray[i]]){
                                                                characterArray[i]=charactersAsian[characterArray[i]]
                                                            }
                                                        }
                                                        x = characterArray.join('')
                                                        console.log('xx'+x)
                                                        let textarea3 = document.getElementById('put12')
                                                            textarea3.innerHTML = x
                                                        return x
                                                    }

                                                
                                                    function strokedStyle(x) {
                                                          var oldEngChars = {
                                                            "0":'0',
                                                            "1":'1',
                                                            "2":'2',
                                                            "3":'3',
                                                            "4":'4',
                                                            "5":'5',
                                                            "6":'6',
                                                            "7":'7',
                                                            "8":'8',
                                                            "9":'9',
                                            
                                                            "a":"Ⱥ",
                                                            "b":"ƀ",
                                                            "c":"ȼ",
                                                            "d":"đ",
                                                            "e":"ɇ",
                                                            "f":"𝔣",
                                                            "g":"ǥ",
                                                            "h":"ħ",
                                                            "i":"ɨ",
                                                            "j":"ɉ",
                                                            "k":"ꝁ",
                                                            "l":"ł",
                                                            "m":"m",
                                                            "n":"𝔫",
                                                            "o":"ø",
                                                            "p":"ᵽ",
                                                            "q":"ꝗ",
                                                            "r":"ɍ",
                                                            "s":"𝔰",
                                                            "t":"ŧ",
                                                            "u":"ᵾ",
                                                            "v":"𝔳",
                                                            "w":"𝔴",
                                                            "x":"𝔵",
                                                            "y":"ɏ",
                                                            "z":"ƶ",
                                                            "A":"Ⱥ",
                                                            "B":"Ƀ",
                                                            "C":"Ȼ",
                                                            "D":"Đ",
                                                            "E":"Ɇ",
                                                            "F":"𝔉",
                                                            "G":"Ǥ",
                                                            "H":"Ħ",
                                                            "I":"Ɨ",
                                                            "J":"Ɉ",
                                                            "K":"Ꝁ",
                                                            "L":"Ł",
                                                            "M":"𝔐",
                                                            "N":"𝔑",
                                                            "O":"Ø",
                                                            "P":"Ᵽ",
                                                            "Q":"Ꝗ",
                                                            "R":"Ɍ",
                                                            "S":"𝔖",
                                                            "T":"Ŧ",
                                                            "U":"ᵾ",
                                                            "V":"𝔙",
                                                            "W":"𝔚",
                                                            "X":"𝔛",
                                                            "Y":"Ɏ",
                                                            "Z":"Ƶ"};
                                                          var charArray = x.split("");
                                                          for(var i = 0; i < charArray.length; i++) {
                                                            if( oldEngChars[charArray[i]] ) {
                                                              charArray[i] = oldEngChars[charArray[i]];
                                                            }
                                                          }
                                                          x = charArray.join("");
                                                        console.log(x)
                                                        let textarea2 = document.getElementById('put13')
                                                        textarea2.innerHTML = x
                                                          return x;
                                                        
                                                        }
                                                        function randomStyle(x) {
                                                              var oldEngChars = {
                                                                "0":'0',
                                                                "1":'1',
                                                                "2":'2',
                                                                "3":'3',
                                                                "4":'4',
                                                                "5":'5',
                                                                "6":'6',
                                                                "7":'7',
                                                                "8":'8',
                                                                "9":'9',
                                                
                                                                "a":"\u0386",
                                                                "b":"ƀ",
                                                                "c":"\u03FE",
                                                                "d":"đ",
                                                                "e":"\u03B5",
                                                                "f":"\u03DD",
                                                                "g":"ǥ",
                                                                "h":"\u03E6",
                                                                "i":"\u0390",
                                                                "j":"\u03D1",
                                                                "k":"\u03CF",
                                                                "l":"ł",
                                                                "m":"m",
                                                                "n":"\u03AE",
                                                                "o":"ø",
                                                                "p":"ᵽ",
                                                                "q":"ꝗ",
                                                                "r":"\u03EA",
                                                                "s":"\u03E9",
                                                                "t":"\u03EE",
                                                                "u":"ᵾ",
                                                                "v":"𝔳",
                                                                "w":"\u03C9",
                                                                "x":"\u03D7",
                                                                "y":"\u03D4",
                                                                "z":"ƶ",
                                                                "A":"Ⱥ",
                                                                "B":"Ƀ",
                                                                "C":"\u03FE",
                                                                "D":"Đ",
                                                                "E":"Ɇ",
                                                                "F":"𝔉",
                                                                "G":"Ǥ",
                                                                "H":"Ħ",
                                                                "I":"\u03AA",
                                                                "J":"\u03D1",
                                                                "K":"\u03CF",
                                                                "L":"Ł",
                                                                "M":"𝔐",
                                                                "N":"\u0377",
                                                                "O":"Ø",
                                                                "P":"Ᵽ",
                                                                "Q":"Ꝗ",
                                                                "R":"\u03EA",
                                                                "S":"\u03E9",
                                                                "T":"\u03EE",
                                                                "U":"ᵾ",
                                                                "V":"𝔙",
                                                                "W":"\u03E2",
                                                                "X":"𝔛",
                                                                "Y":"Ɏ",
                                                                "Z":"Ƶ"};
                                                              var charArray = x.split("");
                                                              for(var i = 0; i < charArray.length; i++) {
                                                                if( oldEngChars[charArray[i]] ) {
                                                                  charArray[i] = oldEngChars[charArray[i]];
                                                                }
                                                              }
                                                              x = charArray.join("");
                                                            console.log(x)
                                                            let textarea2 = document.getElementById('put14')
                                                            textarea2.innerHTML = x
                                                              return x;
                                                            
                                                            }
                           
                                                            function cardstyle(x) {
                                                                  var oldEngChars = {
                                                                    "0":'0',
                                                                    "1":'1',
                                                                    "2":'2',
                                                                    "3":'3',
                                                                    "4":'4',
                                                                    "5":'5',
                                                                    "6":'6',
                                                                    "7":'7',
                                                                    "8":'8',
                                                                    "9":'9',
                                                    
                                                                    "a":"👸Ⱥ",
                                                                    "b":"🌀ƀ",
                                                                    "c":"🌄ȼ",
                                                                    "d":"🌅đ",
                                                                    "e":"🌐ɇ",
                                                                    "f":"🌠𝔣",
                                                                    "g":"🌜ǥ",
                                                                    "h":"🌝ħ",
                                                                    "i":"ɨ",
                                                                    "j":"🎔ɉ",
                                                                    "k":"🌀ꝁ",
                                                                    "l":"🌹ł",
                                                                    "m":"🎔m",
                                                                    "n":"🌠𝔫",
                                                                    "o":"🌝ø",
                                                                    "p":"ᵽ",
                                                                    "q":"ꝗ",
                                                                    "r":"🌹ɍ",
                                                                    "s":"𝔰",
                                                                    "t":"🌝ŧ",
                                                                    "u":"🌜ᵾ",
                                                                    "v":"🌀𝔳",
                                                                    "w":"🎔𝔴",
                                                                    "x":"𝔵🌹",
                                                                    "y":"🌝ɏ",
                                                                    "z":"🌠ƶ",
                                                                    "A":"Ⱥ",
                                                                    "B":"🌀Ƀ",
                                                                    "C":"🌄Ȼ",
                                                                    "D":"🌅Đ",
                                                                    "E":"Ɇ",
                                                                    "F":"🌠𝔉",
                                                                    "G":"🌜Ǥ",
                                                                    "H":"🌝Ħ",
                                                                    "I":"Ɨ",
                                                                    "J":"🎔Ɉ",
                                                                    "K":"🌀Ꝁ",
                                                                    "L":"🌹Ł",
                                                                    "M":"🎔𝔐",
                                                                    "N":"🌠𝔑",
                                                                    "O":"🌝Ø",
                                                                    "P":"Ᵽ",
                                                                    "Q":"Ꝗ",
                                                                    "R":"🌹Ɍ",
                                                                    "S":"𝔖",
                                                                    "T":"🌝Ŧ",
                                                                    "U":"🌜ᵾ",
                                                                    "V":"🌀𝔙",
                                                                    "W":"🎔𝔚",
                                                                    "X":"𝔛🌹",
                                                                    "Y":"🌝Ɏ",
                                                                    "Z":"🌠Ƶ"};
                                                                  var charArray = x.split("");
                                                                  for(var i = 0; i < charArray.length; i++) {
                                                                    if( oldEngChars[charArray[i]] ) {
                                                                      charArray[i] = oldEngChars[charArray[i]];
                                                                    }
                                                                  }
                                                                  x = charArray.join("");
                                                                console.log(x)
                                                                let textarea2 = document.getElementById('put15')
                                                                textarea2.innerHTML = x
                                                                  return x;
                                                                
                                                                }
                                                                function testStyle(x) {
                                                                      var oldEngChars = {
                                                                        "0":'0',
                                                                        "1":'1',
                                                                        "2":'2',
                                                                        "3":'3',
                                                                        "4":'4',
                                                                        "5":'5',
                                                                        "6":'6',
                                                                        "7":'7',
                                                                        "8":'8',
                                                                        "9":'9',
                                                        
                                                                        "a":"\u0531",
                                                                        "b":"\u0532",
                                                                        "c":"\u0533",
                                                                        "d":"\u0534",
                                                                        "e":"\u0535",
                                                                        "f":"\u0536",
                                                                        "g":"\u0537",
                                                                        "h":"\u0538",
                                                                        "i":"\u0539",
                                                                        "j":"\u053A",
                                                                        "k":"\u053B",
                                                                        "l":"\u053C",
                                                                        "m":"\u053D",
                                                                        "n":"\u053E",
                                                                        "o":"\u053F",
                                                                        "p":"\u0540",
                                                                        "q":"\u0541",
                                                                        "r":"\u0542",
                                                                        "s":"\u0543",
                                                                        "t":"\u0544",
                                                                        "u":"\u0545",
                                                                        "v":"\u0546",
                                                                        "w":"\u0547",
                                                                        "x":"\u0548",
                                                                        "y":"\u0549",
                                                                        "z":"\u054A",
                                                                        "A":"\u0531",
                                                                        "B":"\u0532",
                                                                        "C":"\u0533",
                                                                        "D":"\u0534",
                                                                        "E":"\u0535",
                                                                        "F":"\u0536",
                                                                        "G":"\u0537",
                                                                        "H":"\u0538",
                                                                        "I":"\u0539",
                                                                        "J":"\u053A",
                                                                        "K":"\u053B",
                                                                        "L":"\u053C",
                                                                        "M":"\u053D",
                                                                        "N":"\u053E",
                                                                        "O":"\u053F",
                                                                        "P":"\u0540",
                                                                        "Q":"\u0541",
                                                                        "R":"\u0542",
                                                                        "S":"\u0543",
                                                                        "T":"\u0544",
                                                                        "U":"\u0545",
                                                                        "V":"\u0546",
                                                                        "W":"\u0547",
                                                                        "X":"\u0548",                 "Y":"\u0549",                     "Z":"\u054A"}
                                                                      var charArray = x.split("");
                                                                      for(var i = 0; i < charArray.length; i++) {
                                                                        if( oldEngChars[charArray[i]] ) {
                                                                          charArray[i] = oldEngChars[charArray[i]];
                                                                        }
                                                                      }
                                                                      x = charArray.join("");
                                                                    console.log(x)
                                                                    let textarea2 = document.getElementById('put16')
                                                                    textarea2.innerHTML = x
                                                                      return x;
                                                                    
                                                                    }
                
                
                                                                    function hebrewStyle(x) {
                                                                          var oldEngChars = {
                                                                            "0":'0',
                                                                            "1":'1',
                                                                            "2":'2',
                                                                            "3":'3',
                                                                            "4":'4',
                                                                            "5":'5',
                                                                            "6":'6',
                                                                            "7":'7',
                                                                            "8":'8',
                                                                            "9":'9',
                                                            
                                                                            "a":"\u05D0",
                                                                            "b":"\u05D1",
                                                                            "c":"\u05D2",
                                                                            "d":"\u05D3",
                                                                            "e":"\u05D4",
                                                                            "f":"\u05D5",
                                                                            "g":"\u05D6",
                                                                            "h":"\u05D7",
                                                                            "i":"\u05D8",
                                                                            "j":"\u05D9",
                                                                            "k":"\u05DA",
                                                                            "l":"\u05DB",
                                                                            "m":"\u05DC",
                                                                            "n":"\u05DD",
                                                                            "o":"\u05DE",
                                                                            "p":"\u05DF",
                                                                            "q":"\u0541",
                                                                            "r":"\u05E0",
                                                                            "s":"\u05E1",
                                                                            "t":"\u05E2",
                                                                            "u":"\u05E3",
                                                                            "v":"\u05E4",
                                                                            "w":"\u05E5",
                                                                            "x":"\u05E6",
                                                                            "y":"\u05E7",
                                                                            "z":"\u05E8",
                                                                            "A":"\u05D0",
                                                                            "B":"\u05D1",
                                                                            "C":"\u05D2",
                                                                            "D":"\u05D3",
                                                                            "E":"\u05D4",
                                                                            "F":"\u05D5",
                                                                            "G":"\u05D6",
                                                                            "H":"\u05D7",
                                                                            "I":"\u05D8",
                                                                            "J":"\u05D9",
                                                                            "K":"\u05DA",
                                                                            "L":"\u05DB",
                                                                            "M":"\u05DC",
                                                                            "N":"\u05DD",
                                                                            "O":"\u05DE",
                                                                            "P":"\u05DF",
                                                                            "Q":"\u0541",
                                                                            "R":"\u05E0",
                                                                            "S":"\u05E1",
                                                                            "T":"\u05E2",
                                                                            "U":"\u05E3",
                                                                            "V":"\u05E4",
                                                                            "W":"\u05E5",
                                                                            "X":"\u05E6",                 "Y":"\u05E7",                 "Z":"\u05E8" }
                                                                          var charArray = x.split("");
                                                                          for(var i = 0; i < charArray.length; i++) {
                                                                            if( oldEngChars[charArray[i]] ) {
                                                                              charArray[i] = oldEngChars[charArray[i]];
                                                                            }
                                                                          }
                                                                          x = charArray.join("");
                                                                        console.log(x)
                                                                        let textarea2 = document.getElementById('put17')
                                                                        textarea2.innerHTML = x
                                                                          return x;
                                                                        
                                                                        }
                                                                        function bubbleStyle(x) {
                                                                              var oldEngChars = {
                                                                                "0":'0',
                                                                                "1":'1',
                                                                                "2":'2',
                                                                                "3":'3',
                                                                                "4":'4',
                                                                                "5":'5',
                                                                                "6":'6',
                                                                                "7":'7',
                                                                                "8":'8',
                                                                                "9":'9',
                                                                
                                                                                "a":"🅐",
                                                                                "b":"🅑",
                                                                                "c":"🅒 ",
                                                                                "d":"🅓",
                                                                                "e":"🅔",
                                                                                "f":"🅕",
                                                                                "g":"🅖",
                                                                                "h":"🅗",
                                                                                "i":"🅘",
                                                                                "j":"🅙",
                                                                                "k":"🅚",
                                                                                "l":"🅛",
                                                                                "m":"🅜",
                                                                                "n":"🅝",
                                                                                "o":"🅞",
                                                                                "p":"🅟",
                                                                                "q":"🅠",
                                                                                "r":"🅡",
                                                                                "s":"🅢",
                                                                                "t":"🅣",
                                                                                "u":"🅤",
                                                                                "v":"🅥",
                                                                                "w":"🅦",
                                                                                "x":"🅧",
                                                                                "y":"🅨",
                                                                                "z":"🅩",
                                                                                "A":"🅐",
                                                                                "B":"🅑",
                                                                                "C":"🅒",
                                                                                "D":"🅓",
                                                                                "E":"🅔",
                                                                                "F":"🅕",
                                                                                "G":"🅖",
                                                                                "H":"🅗",
                                                                                "I":"🅘",
                                                                                "J":"🅙",
                                                                                "K":"🅚",
                                                                                "L":"🅛",
                                                                                "M":"🅜",
                                                                                "N":"🅝",
                                                                                "O":"🅞",
                                                                                "P":"🅟",
                                                                                "Q":"🅠",
                                                                                "R":"🅡",
                                                                                "S":"🅢",
                                                                                "T":"🅣",
                                                                                "U":"🅤",
                                                                                "V":"🅥",
                                                                                "W":"🅦",
                                                                                "X":"🅧",           "Y":"🅨",                 "Z":"🅩" }
                                                                              var charArray = x.split("");
                                                                              for(var i = 0; i < charArray.length; i++) {
                                                                                if( oldEngChars[charArray[i]] ) {
                                                                                  charArray[i] = oldEngChars[charArray[i]];
                                                                                }
                                                                              }
                                                                              x = charArray.join("");
                                                                            // y = x.join('')
                                                                            console.log(x)
                                                                            let textarea2 = document.getElementById('put18')
                                                                            textarea2.innerHTML = x
                                                                              return x;
                                                                            
                                                                            
                                                                            }
                                                                            function invertedStyle(x) {
                                                                                  var oldEngChars = {
                                                                                    "0":'0',
                                                                                    "1":'1',
                                                                                    "2":'2',
                                                                                    "3":'3',
                                                                                    "4":'4',
                                                                                    "5":'5',
                                                                                    "6":'6',
                                                                                    "7":'7',
                                                                                    "8":'8',
                                                                                    "9":'9',
                                                                    
                                                                                    "a":"ɐ",
                                                                                    "b":"q",
                                                                                    "c":"ɔ ",
                                                                                    "d":"p",
                                                                                    "e":"ǝ",
                                                                                    "f":"ɟ",
                                                                                    "g":"ƃ",
                                                                                    "h":"ɥ",
                                                                                    "i":"ı",
                                                                                    "j":"ɾ",
                                                                                    "k":"ʞ",
                                                                                    "l":"ן",
                                                                                    "m":"ɯ",
                                                                                    "n":"u",
                                                                                    "o":"o",
                                                                                    "p":"d",
                                                                                    "q":"b ",
                                                                                    "r":"ɹ",
                                                                                    "s":"s",
                                                                                    "t":"ʇ",
                                                                                    "u":"n",
                                                                                    "v":"𐌡",
                                                                                    "w":"ʍ",
                                                                                    "x":"x",
                                                                                    "y":"ʎ",
                                                                                    "z":"z",
                                                                                    "A":"ɐ",
                                                                                    "B":"q",
                                                                                    "C":"ɔ",
                                                                                    "D":"p",
                                                                                    "E":"ǝ",
                                                                                    "F":"ɟ",
                                                                                    "G":"ƃ",
                                                                                    "H":"ɥ",
                                                                                    "I":"ı",
                                                                                    "J":"ɾ",
                                                                                    "K":"ʞ",
                                                                                    "L":"ן",
                                                                                    "M":"ɯ",
                                                                                    "N":"u",
                                                                                    "O":"o",
                                                                                    "P":"d",
                                                                                    "Q":"b ",
                                                                                    "R":"ɹ",
                                                                                    "S":"s",
                                                                                    "T":"ʇ",
                                                                                    "U":"n",
                                                                                    "V":"𐌡",
                                                                                    "W":"ʍ",
                                                                                    "X":"x",           "Y":"ʎ",              "Z":"z" }
                                                                                  var charArray = x.split("");
                                                                                  for(var i = 0; i < charArray.length; i++) {
                                                                                    if( oldEngChars[charArray[i]] ) {
                                                                                      charArray[i] = oldEngChars[charArray[i]];
                                                                                    }
                                                                                  }
                                                                                  x = charArray.join("");
                                                                                // y = x.join('')
                                                                                console.log(x)
                                                                                let textarea2 = document.getElementById('put19')
                                                                                textarea2.innerHTML = x
                                                                                  return x;
                                                                                
                                                                                
                                                                                }   

                                                                                function invertedReverseStyle(x) {
                                                                                      var oldEngChars = {
                                                                                        "0":'0',
                                                                                        "1":'1',
                                                                                        "2":'2',
                                                                                        "3":'3',
                                                                                        "4":'4',
                                                                                        "5":'5',
                                                                                        "6":'6',
                                                                                        "7":'7',
                                                                                        "8":'8',
                                                                                        "9":'9',
                                                                        
                                                                                        "a":"ɐ",
                                                                                        "b":"q",
                                                                                        "c":"ɔ ",
                                                                                        "d":"p",
                                                                                        "e":"ǝ",
                                                                                        "f":"ɟ",
                                                                                        "g":"ƃ",
                                                                                        "h":"ɥ",
                                                                                        "i":"ı",
                                                                                        "j":"ɾ",
                                                                                        "k":"ʞ",
                                                                                        "l":"ן",
                                                                                        "m":"ɯ",
                                                                                        "n":"u",
                                                                                        "o":"o",
                                                                                        "p":"d",
                                                                                        "q":"b ",
                                                                                        "r":"ɹ",
                                                                                        "s":"s",
                                                                                        "t":"ʇ",
                                                                                        "u":"n",
                                                                                        "v":"𐌡",
                                                                                        "w":"ʍ",
                                                                                        "x":"x",
                                                                                        "y":"ʎ",
                                                                                        "z":"z",
                                                                                        "A":"ɐ",
                                                                                        "B":"q",
                                                                                        "C":"ɔ",
                                                                                        "D":"p",
                                                                                        "E":"ǝ",
                                                                                        "F":"ɟ",
                                                                                        "G":"ƃ",
                                                                                        "H":"ɥ",
                                                                                        "I":"ı",
                                                                                        "J":"ɾ",
                                                                                        "K":"ʞ",
                                                                                        "L":"ן",
                                                                                        "M":"ɯ",
                                                                                        "N":"u",
                                                                                        "O":"o",
                                                                                        "P":"d",
                                                                                        "Q":"b ",
                                                                                        "R":"ɹ",
                                                                                        "S":"s",
                                                                                        "T":"ʇ",
                                                                                        "U":"n",
                                                                                        "V":"𐌡",
                                                                                        "W":"ʍ",
                                                                                        "X":"x",           "Y":"ʎ",              "Z":"z" }
                                                                                      var charArray = x.split("");
                                                                                      for(var i = 0; i < charArray.length; i++) {
                                                                                        if( oldEngChars[charArray[i]] ) {
                                                                                          charArray[i] = oldEngChars[charArray[i]];
                                                                                        }
                                                                                      }
                                                                                      x = charArray.reverse();
                                                                                    y = x.join('')
                                                                                    console.log(x)
                                                                                    let textarea2 = document.getElementById('put20')
                                                                                    textarea2.innerHTML = y
                                                                                      return y;
                                                                                    
                                                                                    
                                                                                    }
                                                                                      
                                                                                                     
                        
                    
                    

    // copy function
    function copyThisval(val){
        // console.log(val.id.slice(3,))
        let divid = document.getElementById('div'+val.id.slice(3,))
        console.log(divid)
        var copyText = val;

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        let copyMain = document.createElement('div')
        copyMain.className = 'copy-information'
        copyMain.id = 'para'+ val.id.slice(3,)
        let para = document.createElement('p')
        para.className='copied-text'
        para.innerHTML = 'Copied'
        divid.appendChild(copyMain)
        copyMain.appendChild(para)
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
        $('.copy-information').show()
        setTimeout(function(){
            $('#para'+val.id.slice(3,)).remove()
            // $('.copy-information').destroy()
        },2000)
      
        /* Alert the copied text */
        // alert("Copied the text: " + copyText.value);
    }

    function crazyStyle(x) {
          var oldEngChars = {
            "0":'0',
            "1":'1',
            "2":'2',
            "3":'3',
            "4":'4',
            "5":'5',
            "6":'6',
            "7":'7',
            "8":'8',
            "9":'9',

            "a":"ል",
            "b":"ጌ",
            "c":"ር ",
            "d":"ዕ",
            "e":"ቿ",
            "f":"ቻ",
            "g":"ኗ",
            "h":"ዘ",
            "i":"ጎ",
            "j":" ጋ",
            "k":"ጕ",
            "l":"ረ",
            "m":"ጠ",
            "n":"ክ",
            "o":"ዐ",
            "p":"የ",
            "q":" ዒ",
            "r":"ዪ",
            "s":"ነ",
            "t":"ፕ",
            "u":"ሁ",
            "v":"ሀ",
            "w":"ሠ",
            "x":"ሸ",
            "y":"ሃ",
            "z":"ጊ",
            "A":"ል",
            "B":" ጌ",
            "C":"ር",
            "D":"ዕ",
            "E":"ቿ",
            "F":"ቻ",
            "G":"ኗ",
            "H":"ዘ",
            "I":"ጎ",
            "J":" ጋ",
            "K":"ጕ",
            "L":"ረ",
            "M":"ጠ",
            "N":"ክ",
            "O":"ዐ",
            "P":"የ",
            "Q":"ዒ ",
            "R":"ዪ",
            "S":"ነ",
            "T":"ፕ",
            "U":"ሁ",
            "V":"ሀ",
            "W":"ሠ",
            "X":"ሸ",          
            "Y":"ሃ", 
            "Z":"ጊ"
         }
          var charArray = x.split("");
          for(var i = 0; i < charArray.length; i++) {
            if( oldEngChars[charArray[i]] ) {
              charArray[i] = oldEngChars[charArray[i]];
            }
          }
        //   x = charArray.reverse();
        y = charArray.join('')
        console.log(x)
        let textarea2 = document.getElementById('put21')
        textarea2.innerHTML = y
          return y;
        
        
        } 

        function smallStyle(x) {
              var oldEngChars = {
                "0":'0',
                "1":'1',
                "2":'2',
                "3":'3',
                "4":'4',
                "5":'5',
                "6":'6',
                "7":'7',
                "8":'8',
                "9":'9',
    
                "a":"ᴀ",
                "b":"ʙ",
                "c":"ᴄ",
                "d":"ᴅ",
                "e":"ᴇ",
                "f":"ꜰ",
                "g":"ɢ",
                "h":"ʜ",
                "i":"ɪ",
                "j":"ᴊ",
                "k":"ᴋ",
                "l":"ʟ",
                "m":"ᴍ",
                "n":"ɴ",
                "o":"ᴏ",
                "p":"ᴩ",
                "q":"Q ",
                "r":"ʀ",
                "s":"ꜱ",
                "t":"ᴛ",
                "u":"ᴜ",
                "v":"ᴠ",
                "w":"ᴡ",
                "x":"x",
                "y":"ሃ",
                "z":"ሃ",
                "A":"ᴀ",
                "B":"ʙ",
                "C":"ᴄ",
                "D":"ᴅ",
                "E":"ᴇ",
                "F":"ꜰ",
                "G":"ɢ",
                "H":"ʜ",
                "I":"ɪ",
                "J":"ᴊ",
                "K":"ᴋ",
                "L":"ʟ",
                "M":"ᴍ",
                "N":"ɴ",
                "O":"ᴏ",
                "P":"ᴩ",
                "Q":"Q ",
                "R":"ʀ",
                "S":"ꜱ",
                "T":"ᴛ",
                "U":"ᴜ",
                "V":"ᴠ",
                "W":"ᴡ",
                "X":"x",          
                "Y":"ሃ", 
                "Z":"ሃ"
             }
              var charArray = x.split("");
              for(var i = 0; i < charArray.length; i++) {
                if( oldEngChars[charArray[i]] ) {
                  charArray[i] = oldEngChars[charArray[i]];
                }
              }
            //   x = charArray.reverse();
            y = charArray.join('')
            console.log(x)
            let textarea2 = document.getElementById('put22')
            textarea2.innerHTML = y
              return y;
            
            
            }

            function changeFont(val){
                let fSize = val.value
                console.log(val.value)
                $('.large-div textarea').css('font-size',fSize+'px')
                if(fSize>24){
                    $('.large-div textarea').css({'height':'50px','transition':'all ease 0.3s'})  
                }else{
                    $('.large-div textarea').css({'height':'40px','transition':'all ease 0.3s'})
                }
            }


            $(function () {
                "use strict";
                $('.container-fluid').slice(0, 6).show();
                $('#loadmore').on('click', function (e) {
                    e.preventDefault();
                    $('.container-fluid:hidden').slice(0, 8).slideDown( "slow" );
                    if ($('.container-fluid:hidden').length === 0) {
                        $('#loadmore').hide();
                    }
                });
                $('#top').on('click', function (e) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });
                // $(window).scroll(function () {
                //     if ($(this).scrollTop() > 50) {
                //         $('#top a').fadeIn();
                //     } else {
                //         $('#top a').fadeOut();
                //     }
                // });
            });
//              /!\ DO NOT EDIT MANUALLY /!\


//   This file was generated by `scripts/build-regexp.js`
//   edit that file then run `npm run build` to regenerate it


//        /!\ DO NOT EDIT MANUALLY /!\

export {captureMatcher, dotMDotSMatcher, groupNameMatcher, loneBracketMatcher, mEndAnchor, mStartAnchor, numRefMatcher, oneEscapeOrCharClassMatcher, pEscapeMatcher, stringNormalizerMatcher, suffixMatcher, tokenMatcher, uProblemCharClassMatcher, uProblemDefaultMatcher}

/*
drop this in ./core.js when changing the list:
import {captureMatcher, dotMDotSMatcher, groupNameMatcher, loneBracketMatcher, mEndAnchor, mStartAnchor, numRefMatcher, oneEscapeOrCharClassMatcher, pEscapeMatcher, stringNormalizerMatcher, suffixMatcher, tokenMatcher, uProblemCharClassMatcher, uProblemDefaultMatcher} from './regexps.js'
*/

import {supportsU} from './utils.js'


var captureMatcher = /\\[^]|\(\?(?::|<?[=!])|[\[\](]/g


var dotMDotSMatcher = /\\.|\.|\(\?:\^\|\(\?<=\[\\n\\r\\u2028\\u2029\]\)\)|\(\?:\$\|\(\?=\[\\n\\r\\u2028\\u2029\]\)\)|\[|\]|\^|\$/g


var groupNameMatcher = supportsU && new RegExp("^[_$\\p{ID_Start}][$\\p{ID_Continue}]*$", 'u')


var loneBracketMatcher = /\\.|\{\d+,?\d*\}|(\[|\]|\{|\})/g


var mEndAnchor = /(?:$|(?=[\n\r\u2028\u2029]))/


var mStartAnchor = /(?:^|(?<=[\n\r\u2028\u2029]))/


var numRefMatcher = /\\[^1-9]|[\[\]]|\\(\d{1,2})|\$d:(\d+),n:(\d+)\^/g


var oneEscapeOrCharClassMatcher = /^(?:\\.|\[(?:[^\]\\]|\\.)*\])$/


var pEscapeMatcher = /^\\p\{[A-Za-z][A-Za-z=]*\}$/


var stringNormalizerMatcher = /[.?*+^$[\]\\(){}|]/g


var suffixMatcher = /^(?:[+*?]|\{(?=((\d+)))\1,?(\d*)\})\??$/


var tokenMatcher = /(\\.)|[-()|\[\]]((?=\?<?[=!]))?/g


var uProblemCharClassMatcher = /\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\c[A-Za-z]|\\([^.?*+^$[\]\\(){}|\/DSWdswfnrtv-])|(\\[DSWdsw]-[^\]]|.-\\[DSWdsw])|\\.|\]/g


var uProblemDefaultMatcher = /\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\c[A-Za-z]|\\k<(.*?)>|\\([^.?*+^$[\]\\(){}|\/DSWdswBbfnrtv])|\\.|\.|\[\^\]|\[|(\((?:\?[^])?)|(\)(?:[+?*]|\{\d+,?\d*\})?)/g


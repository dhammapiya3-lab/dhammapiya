// 3과: 오계 (Pañcasīla) — text/제3과. 오계.txt 전문 기반
import type { StepType } from './lesson-data-sn56-11'

const V1 = 'Pāṇātipātā veramaṇīsikkhāpadaṃ samādiyāmi.'
const V1Ko = '빠~나~띠빠~따~ 웨라마니~식카~빠당 사마~디야~미.'
const V1K = '살아있는 생명을 죽이지 않는 계를 받들겠습니다.'

const V2 = 'Adinnādānā veramaṇīsikkhāpadaṃ samādiyāmi.'
const V2Ko = '아딘나~다~나~ 웨라마니~식카~빠당 사마~디야~미.'
const V2K = '주지 않은 것을 취하지 않는 계를 받들겠습니다.'

const V3 = 'Kāmesu micchācārā veramaṇīsikkhāpadaṃ samādiyāmi.'
const V3Ko = '까~메수 밋차~짜~라~ 웨라마니~식카~빠당 사마~디야~미.'
const V3K = '감각적 쾌락에서 삿된 행을 하지 않는 계를 받들겠습니다.'

const V4 = 'Musāvādā veramaṇīsikkhāpadaṃ samādiyāmi.'
const V4Ko = '무사~와~다~ 웨라마니~식카~빠당 사마~디야~미.'
const V4K = '거짓말하지 않는 계를 받들겠습니다.'

const V5 = 'Surāmerayamajjapamādaṭṭhānā veramaṇīsikkhāpadaṃ samādiyāmi.'
const V5Ko = '수라~메라야맛자빠마~닷타~나~ 웨라마니~식카~빠당 사마~디야~미.'
const V5K = '방일의 원인이 되는 술·곡주·취하게 하는 것을 마시지 않는 계를 받들겠습니다.'

const V_FULL = V1 + '\n' + V2 + '\n' + V3 + '\n' + V4 + '\n' + V5
const V_FULLK = V1K + '\n' + V2K + '\n' + V3K + '\n' + V4K + '\n' + V5K

export const LESSON_PANCASILA: StepType[] = [
  { type: 'intro', icon: '📿', title: '오계 (Pañcasīla)', subtitle: '다섯 가지 수행 규칙',
    description: '재가 불자의 기본 수행 규칙 다섯 가지.\n불살생·불투도·불사음·불망어·불음주.\n\n계(Sīla)는 삼학(계·정·혜)의 기초.\n11과 MN10의 sammāvācā(정어)·sammākammanta(정업)과 직결.' },

  // ── 공통 단어 (5계 모두에 등장) ──
  { type: 'teach', icon: '🚫', word: 'veramaṇī', pronKo: '웨라마니~', meaning: '삼감, 절제',
    grammar: '여성명사, 주격 단수', baseForm: 'veramaṇī (vi- + √ram)',
    formNote: 'vi(분리/멀리) + √ram(기뻐하다) = "기쁘게 멀리함 = 삼감"\n11과 MN10 V_MAG3 정어의 veramaṇī와 같은 단어',
    buddhism: '삼감(禁戒). 적극적 의지로 멀리하는 것.',
    verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '📜', word: 'sikkhāpadaṃ', pronKo: '식카~빠당', meaning: '수행 규칙, 학처(學處)',
    grammar: '중성명사, 대격 단수', baseForm: 'sikkhāpada (sikkhā + pada)',
    formNote: 'sikkhā(배움) + pada(걸음/단계) = "배움의 항목"\n√sikkh(MN10 V_ANA1의 sikkhati와 어근 공유)',
    buddhism: '학처(學處). 비구·재가가 익혀야 할 항목.',
    verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '🤲', word: 'samādiyāmi', pronKo: '사마~디야~미', meaning: '저는 받들겠습니다, 수지합니다',
    grammar: '동사 1인칭 단수 현재', baseForm: 'samādiyati (saṃ- + ā- + √dā)',
    formNote: 'saṃ(완전히) + ā + √dā(주다/잡다) → "완전히 받아 지님"\n11과 MN10 upādiyati(집착하다)와 어근 공유',
    buddhism: '수지(受持). 받아 지킴.',
    verseLine: V1, verseLineKo: V1K, audio: true },

  // ── 1계: 불살생 ──
  { type: 'teach', icon: '🐾', word: 'Pāṇātipātā', pronKo: '빠~나~띠빠~따~', meaning: '살생에서 (탈격)',
    grammar: '복합어, 탈격 단수', baseForm: 'pāṇa(생명) + atipāta(해침)',
    formNote: 'pāṇa(숨쉬는 것=생명) + ati(넘어) + √pat(떨어지다) = "생명을 떨어뜨림"\n탈격 -ā = "~로부터 (멀어짐)"\n11과 MN10 V_MAG4 sammākammanta와 같은 단어',
    buddhism: '불살생(不殺生). 오계의 첫째. 모든 생명 존중.',
    verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'verse', pali: V1, pronKo: V1Ko, translation: V1K,
    highlight: ['Pāṇātipātā', 'veramaṇī', 'sikkhāpadaṃ', 'samādiyāmi'],
    note: '🐾 1계: 살아있는 생명 보호.' },

  // ── 2계: 불투도 ──
  { type: 'teach', icon: '✋', word: 'Adinnādānā', pronKo: '아딘나~다~나~', meaning: '도둑질에서 (탈격)',
    grammar: '복합어, 탈격 단수', baseForm: 'adinna(주지 않은) + ādāna(가짐)',
    formNote: 'a(부정) + dinna(주어진) + ā + √dā(가지다) = "주어지지 않은 것을 가짐"\n탈격 -ā\n11과 MN10 V_MAG4의 adinnādānā와 동일',
    buddhism: '불투도(不偸盜). 오계의 둘째.',
    verseLine: V2, verseLineKo: V2K, audio: true },

  { type: 'verse', pali: V2, pronKo: V2Ko, translation: V2K,
    highlight: ['Adinnādānā'],
    note: '✋ 2계: 주지 않은 것 취하지 않음.' },

  // ── 3계: 불사음 ──
  { type: 'teach', icon: '💔', word: 'Kāmesu', pronKo: '까~메수', meaning: '감각적 쾌락들에서 (처격 복수)',
    grammar: '남성명사, 처격 복수', baseForm: 'kāma',
    formNote: 'kāma → kāmesu: -a 어간 처격 복수 -esu',
    buddhism: '욕(欲). 5가지 감각의 쾌락.',
    verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'teach', icon: '🚫', word: 'micchācārā', pronKo: '밋차~짜~라~', meaning: '삿된 행위에서 (탈격)',
    grammar: '복합어, 탈격 단수', baseForm: 'micchā(그릇된) + ācāra(행위)',
    formNote: 'micchā(잘못된) + ācāra(행위) → 삿된 행\n11과 MN10 V_MAG4의 kāmesumicchācārā와 동일',
    buddhism: '사음(邪婬). 오계의 셋째.',
    verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'verse', pali: V3, pronKo: V3Ko, translation: V3K,
    highlight: ['Kāmesu', 'micchācārā'],
    note: '💔 3계: 감각적 쾌락의 삿된 행 금지.' },

  // ── 4계: 불망어 ──
  { type: 'teach', icon: '🤥', word: 'Musāvādā', pronKo: '무사~와~다~', meaning: '거짓말에서 (탈격)',
    grammar: '복합어, 탈격 단수', baseForm: 'musā(거짓) + vāda(말)',
    formNote: 'musā(거짓) + vāda(√vac 말함)\n11과 MN10 V_MAG3의 musāvādā와 동일',
    buddhism: '망어(妄語). 오계의 넷째. 정어(sammāvācā)의 핵심.',
    verseLine: V4, verseLineKo: V4K, audio: true },

  { type: 'verse', pali: V4, pronKo: V4Ko, translation: V4K,
    highlight: ['Musāvādā'],
    note: '🗣️ 4계: 거짓말 금지.' },

  // ── 5계: 불음주 ──
  { type: 'teach', icon: '🍺', word: 'Surāmerayamajjapamādaṭṭhānā', pronKo: '수라~메라야맛자빠마~닷타~나~', meaning: '술·곡주·취기·방일의 원인에서 (탈격)',
    grammar: '복합어, 탈격 단수', baseForm: 'surā + meraya + majja + pamāda + ṭhāna',
    formNote: 'surā(증류주) + meraya(발효주) + majja(취하게 하는 것) + pamāda(방일) + ṭhāna(자리/원인)\n= "방일의 원인이 되는 술·곡주·취기"',
    buddhism: '음주(飮酒)·방일(放逸). 오계의 다섯째. 명료한 마음 유지.',
    verseLine: V5, verseLineKo: V5K, audio: true },

  { type: 'verse', pali: V5, pronKo: V5Ko, translation: V5K,
    highlight: ['Surāmerayamajjapamādaṭṭhānā'],
    note: '🍺 5계: 방일 원인 절제. 사념처 수행을 흐리는 것 피함.' },

  { type: 'teach-grammar', title: '오계의 구조',
    example: V1,
    exampleKo: V1K,
    explanation: '[금지 행위 탈격 -ā] + veramaṇī + sikkhāpadaṃ + samādiyāmi\n\n• 탈격(-ā) = "~으로부터 (멀어짐)" → 절제를 표현\n• veramaṇī = 삼가는 것\n• sikkhāpadaṃ = 학처\n• samādiyāmi = 받들겠습니다 (수지)\n\n5계 모두 같은 구조 — 앞의 명사만 바뀜.' },

  { type: 'verse', pali: V_FULL, pronKo: '빠~나~띠빠~따~ 웨라마니~식카~빠당 사마~디야~미...',
    translation: V_FULLK, highlight: ['veramaṇī', 'sikkhāpadaṃ', 'samādiyāmi'],
    note: '📿 오계 전문. 매일 독송 권장.' },

  { type: 'quiz', question: '"sikkhāpadaṃ"의 뜻은?',
    options: ['귀의처', '수행 규칙(학처)', '법', '삼매'], answer: 1 },
  { type: 'quiz', question: '"veramaṇī"는?',
    options: ['닦음', '삼가는 것, 절제', '받들겠습니다', '마음'], answer: 1 },
  { type: 'quiz', question: '4번째 계는?',
    options: ['살생', '음주', '거짓말', '도둑질'], answer: 2 },
  { type: 'quiz', question: '탈격 -ā의 의미?',
    options: ['~로부터 (멀어짐)', '~안에', '~과 함께', '~의'], answer: 0,
    hint: '5계 모두 탈격으로 "~으로부터 멀어짐"' },
  { type: 'quiz', question: '5계 중 11과 MN10의 sammāvācā(정어)와 직결되는 것은?',
    options: ['1계 불살생', '4계 불망어', '5계 불음주', '3계 불사음'], answer: 1,
    hint: 'musāvādā = 정어의 첫째 항목' },

  { type: 'speak', pali: V1, pronKo: V1Ko },
  { type: 'speak', pali: V4, pronKo: V4Ko },

  { type: 'arrange', instruction: '빠알리 문장을 순서대로 배열하세요.',
    translation: V4K,
    blocks: ['veramaṇīsikkhāpadaṃ', 'Musāvādā', 'samādiyāmi.'],
    correctOrder: [1, 0, 2] },
]

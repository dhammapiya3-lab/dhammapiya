// 2과: 삼귀의 (Tisaraṇa) — text/제2과. 삼귀의.txt 전문 기반
import type { StepType } from './lesson-data-sn56-11'

const V1 = 'Buddhaṃ saraṇaṃ gacchāmi.'
const V1Ko = '붓당 사라낭 갓차~미.'
const V1K = '저는 붓다께 귀의합니다.'
const V2 = 'Dhammaṃ saraṇaṃ gacchāmi.'
const V2Ko = '담망 사라낭 갓차~미.'
const V2K = '저는 담마에 귀의합니다.'
const V3 = 'Saṁghaṃ saraṇaṃ gacchāmi.'
const V3Ko = '상강 사라낭 갓차~미.'
const V3K = '저는 상가에 귀의합니다.'

const V4 = 'Dutiyampi Buddhaṃ saraṇaṃ gacchāmi.\nDutiyampi Dhammaṃ saraṇaṃ gacchāmi.\nDutiyampi Saṁghaṃ saraṇaṃ gacchāmi.'
const V4K = '두 번째로 붓다께 귀의합니다.\n두 번째로 담마에 귀의합니다.\n두 번째로 상가에 귀의합니다.'

const V5 = 'Tatiyampi Buddhaṃ saraṇaṃ gacchāmi.\nTatiyampi Dhammaṃ saraṇaṃ gacchāmi.\nTatiyampi Saṁghaṃ saraṇaṃ gacchāmi.'
const V5K = '세 번째로 붓다께 귀의합니다.\n세 번째로 담마에 귀의합니다.\n세 번째로 상가에 귀의합니다.'

const V_FULL = V1 + '\n' + V2 + '\n' + V3 + '\n' + V4 + '\n' + V5
const V_FULLK = V1K + '\n' + V2K + '\n' + V3K + '\n' + V4K + '\n' + V5K

export const LESSON_TRISARANA: StepType[] = [
  { type: 'intro', icon: '🪷', title: '삼귀의 (Tisaraṇa)', subtitle: '붓다·담마·상가에 귀의',
    description: '불교 수행의 기초가 되는 세 가지 귀의(三歸依).\n\n삼보(三寶)에 세 번씩, 총 9회 귀의 선언으로 수행의 기반을 세웁니다.\n\n• 1회: Buddhaṃ / Dhammaṃ / Saṅghaṃ\n• 2회: Dutiyampi + 위\n• 3회: Tatiyampi + 위' },

  // ── 1회 귀의: Buddhaṃ ──
  { type: 'teach', icon: '☸️', word: 'Buddhaṃ', pronKo: '붓당', meaning: '붓다를 (대격)',
    grammar: '남성명사, 대격 단수', baseForm: 'Buddha (깨달은 분)',
    formNote: 'Buddha → Buddhaṃ: -a 어간 남성 대격 -aṃ\n√budh(깨닫다)의 과거분사 → 명사화\nMN10의 satipaṭṭhānaṃ, kāmacchandaṃ과 같은 -aṃ 패턴',
    buddhism: '불(佛). 삼보의 첫째. 사마사삼붓다(완전히 바르게 깨달은 분).',
    verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '🏠', word: 'saraṇaṃ', pronKo: '사라낭', meaning: '귀의처를, 피난처를 (대격)',
    grammar: '중성명사, 대격 단수', baseForm: 'saraṇa (피난처)',
    formNote: 'saraṇa → saraṇaṃ: 중성 대격 -aṃ\n√sar(보호하다) → "보호 받는 곳"',
    buddhism: '귀의처(歸依處). 의지처. 두려움에서 보호하는 곳.',
    verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'teach', icon: '🚶', word: 'gacchāmi', pronKo: '갓차~미', meaning: '저는 갑니다, 귀의합니다',
    grammar: '동사 1인칭 단수 현재', baseForm: 'gacchati (가다)',
    formNote: 'gacchati(3인칭) → gacchāmi(1인칭) -mi 어미\n√gam(가다) — MN10 V_IRI의 gacchanto와 같은 어근\n"saraṇaṃ gacchāmi" = "귀의처로 갑니다 = 귀의합니다"',
    verseLine: V1, verseLineKo: V1K, audio: true },

  { type: 'verse', pali: V1, pronKo: V1Ko, translation: V1K,
    highlight: ['Buddhaṃ', 'saraṇaṃ', 'gacchāmi'],
    note: '☸️ 첫 번째 귀의: [대상 대격] + saraṇaṃ + gacchāmi 정형구.' },

  // ── 1회 귀의: Dhammaṃ ──
  { type: 'teach', icon: '📜', word: 'Dhammaṃ', pronKo: '담망', meaning: '담마를, 법을 (대격)',
    grammar: '남성명사, 대격 단수', baseForm: 'Dhamma (법, 가르침)',
    formNote: 'Dhamma → Dhammaṃ: -a 어간 남성 대격 -aṃ\n√dhar(지탱하다) → "지탱하는 것 = 법"',
    buddhism: '법(法). 삼보의 둘째. 부처님의 가르침 + 진리 자체 + 정신적 현상.',
    verseLine: V2, verseLineKo: V2K, audio: true },

  { type: 'verse', pali: V2, pronKo: V2Ko, translation: V2K,
    highlight: ['Dhammaṃ', 'saraṇaṃ', 'gacchāmi'] },

  // ── 1회 귀의: Saṅghaṃ ──
  { type: 'teach', icon: '🧘', word: 'Saṅghaṃ', pronKo: '상강', meaning: '상가를, 승가를 (대격)',
    grammar: '남성명사, 대격 단수', baseForm: 'Saṅgha (모임, 승가)',
    formNote: 'Saṅgha → Saṅghaṃ: -a 어간 남성 대격 -aṃ\nsaṃ(함께) + √han/√hr → "함께 모인 것"',
    buddhism: '승(僧). 삼보의 셋째. 출가 수행자들의 공동체 + 성스러운 제자들(ariyasaṅgha).',
    verseLine: V3, verseLineKo: V3K, audio: true },

  { type: 'verse', pali: V3, pronKo: V3Ko, translation: V3K,
    highlight: ['Saṁghaṃ', 'saraṇaṃ', 'gacchāmi'] },

  // ── 2회 ──
  { type: 'teach', icon: '2️⃣', word: 'Dutiyampi', pronKo: '두띠얌삐', meaning: '두 번째로도',
    grammar: '복합어, 대격 부사 + api', baseForm: 'dutiya(둘째) + pi(도)',
    formNote: 'dutiyaṃ(둘째를, 부사적) + api → dutiyampi (산디)\n반복 강조',
    verseLine: V4, verseLineKo: V4K, audio: true },

  { type: 'verse', pali: V4, pronKo: '두띠얌삐 붓당 사라낭 갓차~미. 두띠얌삐 담망 사라낭 갓차~미. 두띠얌삐 상강 사라낭 갓차~미.',
    translation: V4K, highlight: ['Dutiyampi'],
    note: '🔁 두 번째 귀의 — Dutiyampi 추가만 다름.' },

  // ── 3회 ──
  { type: 'teach', icon: '3️⃣', word: 'Tatiyampi', pronKo: '따띠얌삐', meaning: '세 번째로도',
    grammar: '복합어, 대격 부사 + api', baseForm: 'tatiya(셋째) + pi',
    formNote: 'tatiyaṃ + api → tatiyampi (산디)\n3회 독송 완료',
    verseLine: V5, verseLineKo: V5K, audio: true },

  { type: 'verse', pali: V5, pronKo: '따띠얌삐 붓당 사라낭 갓차~미. 따띠얌삐 담망 사라낭 갓차~미. 따띠얌삐 상강 사라낭 갓차~미.',
    translation: V5K, highlight: ['Tatiyampi'],
    note: '🔁 세 번째 귀의 — 9문장 완성.' },

  { type: 'teach-grammar', title: '귀의문 구조 (3x3 = 9문장)',
    example: 'Buddhaṃ saraṇaṃ gacchāmi.',
    exampleKo: '저는 붓다께 귀의합니다.',
    explanation: '[대상 대격] + saraṇaṃ + gacchāmi 구조 반복.\n\n• 1회: Buddhaṃ → Dhammaṃ → Saṅghaṃ\n• 2회: Dutiyampi + 위 3문장\n• 3회: Tatiyampi + 위 3문장\n\n총 9문장. 3보 × 3회 = 흔들리지 않는 귀의의 확립.' },

  { type: 'verse', pali: V_FULL, pronKo: '붓당 사라낭 갓차~미. 담망 사라낭 갓차~미. 상강 사라낭 갓차~미. 두띠얌삐... 따띠얌삐...',
    translation: V_FULLK, highlight: ['Buddhaṃ', 'Dhammaṃ', 'Saṁghaṃ', 'saraṇaṃ', 'gacchāmi', 'Dutiyampi', 'Tatiyampi'],
    note: '🪷 삼귀의 전문 9문장.' },

  { type: 'quiz', question: '"saraṇaṃ"의 뜻은?',
    options: ['경배', '귀의처, 피난처', '상가', '법'], answer: 1 },
  { type: 'quiz', question: '두 번째 귀의문은 어떻게 시작하나요?',
    options: ['Tatiyampi', 'Dutiyampi', 'Ekampi', 'Catutthapi'], answer: 1 },
  { type: 'quiz', question: '삼보(三寶)의 빠알리어는?',
    options: ['Buddha·Dhamma·Saṅgha', 'Sīla·Samādhi·Paññā', 'Dukkha·Anicca·Anattā', 'Rāga·Dosa·Moha'], answer: 0 },
  { type: 'quiz', question: '"gacchāmi"는 어떤 격·인칭?',
    options: ['1인칭 단수 현재', '3인칭 단수 현재', '2인칭 복수', '명령형'], answer: 0,
    hint: '-mi 어미 = 1인칭 단수' },

  { type: 'speak', pali: V1, pronKo: V1Ko },
  { type: 'speak', pali: V2, pronKo: V2Ko },
  { type: 'speak', pali: V3, pronKo: V3Ko },

  { type: 'arrange', instruction: '빠알리 문장을 순서대로 배열하세요.',
    translation: V1K,
    blocks: ['saraṇaṃ', 'Buddhaṃ', 'gacchāmi.'],
    correctOrder: [1, 0, 2] },
]

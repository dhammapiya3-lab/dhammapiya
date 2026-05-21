// 10과: 보배경 (Ratana Sutta, Snp 2.1) — text/제10과. 보배경.txt 전문 기반
import type { StepType } from './lesson-data-sn56-11'

// 1-2: 천신 초청
const V0A = 'Yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe.\nSabbeva bhūtā sumanā bhavantu, athopi sakkacca suṇantu bhāsitaṃ.'
const V0AK = '여기 모인 존재들이여, 지상에 있든 허공에 있든. 모든 존재가 기쁜 마음이 되기를, 그리고 주의 깊게 이 말씀을 들으라.'

const V0B = 'Tasmā hi bhūtā nisāmetha sabbe, mettaṃ karotha mānusiyā pajāya.\nDivā ca ratto ca haranti ye baliṃ, tasmā hi ne rakkhatha appamattā.'
const V0BK = '그러므로 모든 존재들이여 귀를 기울이라, 인간의 무리에게 자애를 행하라. 낮과 밤으로 공물을 바치는 자들을 방심 없이 보호하라.'

// 3: 붓다 보배 (1)
const V1 = 'Yaṃ kiñci vittaṃ idha vā huraṃ vā, saggesu vā yaṃ ratanaṃ paṇītaṃ.\nNa no samaṃ atthi tathāgatena, idampi buddhe ratanaṃ paṇītaṃ.\nEtena saccena suvatthi hotu.'
const V1K = '이 세상이든 저 세상이든, 천상의 어떤 보배든 — 여래와 같은 것은 없다. 이것이 붓다 안의 뛰어난 보배. 이 진실에 의해 행복이 있기를.'

// 4: 담마 보배 (소멸·이탐·열반)
const V2 = 'Khayaṃ virāgaṃ amataṃ paṇītaṃ, yadajjhagā sakyamunī samāhito.\nNa tena dhammena samatthi kiñci, idampi dhamme ratanaṃ paṇītaṃ.\nEtena saccena suvatthi hotu.'
const V2K = '석가모니께서 삼매 속에서 도달하신 소멸·이탐·불사·뛰어남 — 그 담마와 같은 것은 없다. 이것이 담마 안의 뛰어난 보배. 이 진실에 의해 행복이 있기를.'

// 5: 담마 보배 (삼매)
const V3 = 'Yaṃ buddhaseṭṭho parivaṇṇayī suciṃ, samādhimānantarikaññamāhu.\nSamādhinā tena samo na vijjati, idampi dhamme ratanaṃ paṇītaṃ.\nEtena saccena suvatthi hotu.'
const V3K = '붓다 가운데 최고이신 분께서 칭찬하신 청정한 [삼매], 즉시 결과를 내는 삼매라 일컬어진 것 — 그와 같은 삼매는 없다. 이것이 담마 안의 뛰어난 보배.'

// 6: 상가 보배 (4쌍 8배)
const V4 = 'Ye puggalā aṭṭha sataṃ pasatthā, cattāri etāni yugāni honti.\nTe dakkhiṇeyyā sugatassa sāvakā, etesu dinnāni mahapphalāni.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.'
const V4K = '선한 자들에 의해 칭송받는 여덟 분의 사람들 — 이들은 네 쌍을 이룬다. 선서(善逝)의 제자인 그들은 보시받을 만하며, 그들에게 보시한 것은 큰 결실이 있다. 이것이 상가 안의 뛰어난 보배.'

// 7: 상가 보배 (열반 누림)
const V5 = 'Ye suppayuttā manasā daḷhena, nikkāmino gotamasāsanamhi.\nTe pattipattā amataṃ vigayha, laddhā mudhā nibbutiṃ bhuñjamānā.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.'
const V5K = '굳건한 마음으로 잘 정진하고 고따마의 가르침에서 욕망을 떠난 자들 — 그들은 얻을 것을 얻어 불사에 들어가, 값없이 얻은 적멸을 누리고 있다. 이것이 상가 안의 뛰어난 보배.'

// 8: 상가 보배 (인드라 기둥 비유)
const V6 = 'Yathindakhīlo pathavissito siyā, catubbhi vātehi asampakampiyo.\nTathūpamaṃ sappurisaṃ vadāmi, yo ariyasaccāni avecca passati.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.'
const V6K = '인드라 기둥(석주)이 땅에 박혀 사방의 바람에 흔들리지 않듯이, 그와 같이 성스러운 진리를 꿰뚫어 보는 선인을 나는 말한다. 이것이 상가 안의 뛰어난 보배.'

// 9: 상가 보배 (예류자 — 8생 안 옴)
const V7 = 'Ye ariyasaccāni vibhāvayanti, gambhīrapaññena sudesitāni.\nKiñcāpi te honti bhusaṃ pamattā, na te bhavaṃ aṭṭhamamādiyanti.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.'
const V7K = '심오한 지혜로 잘 설해진 성스러운 진리들을 꿰뚫는 자들 — 그들이 비록 크게 방일하더라도, 여덟 번째 생을 받지 않는다. 이것이 상가 안의 뛰어난 보배.'

// 10: 상가 보배 (3결 끊음)
const V8 = 'Sahāvassa dassanasampadāya, tayassu dhammā jahitā bhavanti.\nSakkāyadiṭṭhi vicikicchitañca, sīlabbataṃ vāpi yadatthi kiñci.\nCatūhapāyehi ca vippamutto, chaccābhiṭhānāni abhabba kātuṃ.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.'
const V8K = '그(예류자)에게 봄의 성취와 동시에 세 가지 법이 버려진다 — 유신견·의심·계금취. 네 가지 악도에서 벗어나고, 여섯 가지 큰 죄(5무간업+이단)를 지을 수 없다. 이것이 상가 안의 뛰어난 보배.'

// 11: 상가 보배 (예류자의 죄 못 감춤)
const V9 = 'Kiñcāpi so kamma karoti pāpakaṃ, kāyena vācā uda cetasā vā.\nAbhabba so tassa paṭicchadāya, abhabbatā diṭṭhapadassa vuttā.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.'
const V9K = '비록 그가 몸·말·뜻으로 어떤 악업을 짓더라도 — 그것을 감출 수는 없다. 길을 본 자(예류자)에게는 (감춤이) 불가능하다고 일컬어진다. 이것이 상가 안의 뛰어난 보배.'

// 12: 붓다 보배 (꽃핀 숲 비유)
const V10 = 'Vanappagumbe yatha phussitagge, gimhānamāse paṭhamasmiṃ gimhe.\nTathūpamaṃ dhammavaraṃ adesayi, nibbānagāmiṃ paramaṃ hitāya.\nIdampi buddhe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.'
const V10K = '여름 첫 달 꼭대기까지 꽃핀 숲처럼, 그와 같이 뛰어난 담마를 설하셨으니 — 열반으로 이끄는 최상의 이익을 위해. 이것이 붓다 안의 뛰어난 보배.'

// 13: 붓다 보배 (최고의 칭호)
const V11 = 'Varo varaññū varado varāharo, anuttaro dhammavaraṃ adesayi.\nIdampi buddhe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.'
const V11K = '최고이시고 최고를 아시고 최고를 주시고 최고를 가져오신 분 — 무상하신 분께서 뛰어난 담마를 설하셨다. 이것이 붓다 안의 뛰어난 보배.'

// 14: 상가 보배 (옛 업 소멸·등불 비유)
const V12 = 'Khīṇaṃ purāṇaṃ nava natthi sambhavaṃ, virattacittāyatike bhavasmiṃ.\nTe khīṇabījā avirūḷhichandā, nibbanti dhīrā yathāyaṃ padīpo.\nIdampi saṅghe ratanaṃ paṇītaṃ, etena saccena suvatthi hotu.'
const V12K = '옛 (업)은 다하였고 새로운 발생은 없다, 미래 존재에 대해 탐욕이 떠난 마음. 그들은 종자가 다하였고 자라남의 의욕이 없어, 등불처럼 지혜로운 자들이 꺼진다. 이것이 상가 안의 뛰어난 보배.'

// 15-17: 결어 (천신들의 예배)
const V13 = 'Yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe.\nTathāgataṃ devamanussapūjitaṃ, buddhaṃ namassāma suvatthi hotu.'
const V13K = '여기 모인 존재들이여, 지상에 있든 허공에 있든. 신과 인간이 공양하는 여래, 붓다께 우리는 예배하노니, 행복이 있기를.'

const V14 = 'Yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe.\nTathāgataṃ devamanussapūjitaṃ, dhammaṃ namassāma suvatthi hotu.'
const V14K = '여기 모인 존재들이여... 신과 인간이 공양하는 여래의 담마께 예배. 행복이 있기를.'

const V15 = 'Yānīdha bhūtāni samāgatāni, bhummāni vā yāni va antalikkhe.\nTathāgataṃ devamanussapūjitaṃ, saṅghaṃ namassāma suvatthi hotūti.'
const V15K = '여기 모인 존재들이여... 신과 인간이 공양하는 여래의 상가께 예배. 행복이 있기를.'

export const LESSON_RATANA: StepType[] = [
  { type: 'intro', icon: '💎', title: '보배경 (Ratana Sutta)', subtitle: 'Snp 2.1 — 삼보의 보배',
    description: '베살리에 기근·역병·악귀가 들끓을 때 부처님께서 아난다 존자에게 이 경을 가르쳐 도시를 돌며 외우게 하니 재난이 사라진 경.\n\n구조 (17 게송):\n• 1-2: 천신·존재들 초청\n• 3-13: 삼보 각각의 보배 + 후렴 "etena saccena suvatthi hotu"\n• 14-17: 결어 (3보 예배)' },

  // ===== 공통 단어 =====
  { type: 'teach', icon: '💎', word: 'ratanaṃ', pronKo: '라따낭', meaning: '보배',
    grammar: '중성명사, 주격/대격', baseForm: 'ratana',
    formNote: '경의 주제어',
    verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach', icon: '⭐', word: 'paṇītaṃ', pronKo: '빠니~땅', meaning: '뛰어난, 수승한',
    grammar: '형용사, 주격 중성', baseForm: 'paṇīta',
    formNote: '9과 무아상경 V_DUK 11측면의 paṇītaṃ과 동일',
    verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach', icon: '🔮', word: 'etena saccena', pronKo: '에떼나 삿쩨나', meaning: '이 진실에 의해 (도구격)',
    grammar: '지시대명사+명사 도구격', baseForm: 'eta + sacca',
    formNote: '후렴 핵심 — saccakiriyā(진실 서원)의 구문',
    buddhism: '진실 서원 — 삼보의 공덕이라는 "진실"에 의해 가피 기원.',
    verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach', icon: '✨', word: 'suvatthi', pronKo: '수왓티', meaning: '안녕, 행복, 축복',
    grammar: '여성명사, 주격', baseForm: 'suvatthi (su + atthi)',
    verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach', icon: '🙏', word: 'hotu', pronKo: '호뚜', meaning: '있기를! (명령)',
    grammar: '동사 3인칭 단수 명령', baseForm: 'bhavati',
    formNote: '8과 자애경 hontu(복수)의 단수형 — 기원의 명령형',
    verseLine: V1, verseLineKo: V1K, audio: true },

  // ===== 게송 1 (천신 초청) =====
  { type: 'intro', icon: '🌟', title: '— 1-2 게송: 천신 초청 —', subtitle: '지상·허공의 존재들에게',
    description: '경을 듣고 자애를 행하며 사람을 보호하라.' },
  { type: 'teach', icon: '👥', word: 'bhūtāni samāgatāni', pronKo: '부~따~니 사마~가따~니', meaning: '모여든 존재들',
    grammar: '주격복수+과거분사 복수', baseForm: 'bhūta + samāgata',
    verseLine: V0A, verseLineKo: V0AK, audio: true },
  { type: 'teach', icon: '🌍', word: 'bhummāni', pronKo: '붐마~니', meaning: '지상의 (것들)',
    grammar: '형용사, 주격 중성 복수', baseForm: 'bhumma (지상의)',
    verseLine: V0A, verseLineKo: V0AK, audio: true },
  { type: 'teach', icon: '☁️', word: 'antalikkhe', pronKo: '안딸릭케', meaning: '허공에 (처격)',
    grammar: '중성명사, 처격', baseForm: 'antalikkha',
    verseLine: V0A, verseLineKo: V0AK, audio: true },
  { type: 'teach', icon: '😊', word: 'sumanā bhavantu', pronKo: '수마나~ 바완뚜', meaning: '기쁜 마음이 되기를!',
    grammar: '형용사+동사 명령', baseForm: 'sumana + bhavati',
    verseLine: V0A, verseLineKo: V0AK, audio: true },
  { type: 'teach', icon: '👂', word: 'sakkacca suṇantu', pronKo: '삭깟짜 수난뚜', meaning: '주의 깊게 들으라!',
    grammar: '부사+동사 명령', baseForm: 'sakkacca + suṇāti',
    verseLine: V0A, verseLineKo: V0AK, audio: true },
  { type: 'verse', pali: V0A, pronKo: '야~니~다 부~따~니 사마~가따~니, 붐마~니 와~ 야~니 와 안딸릭케. 삽베와 부~따~ 수마나~ 바완뚜, 아토삐 삭깟짜 수난뚜 바~시땅.',
    translation: V0AK, highlight: ['bhūtāni','samāgatāni','bhummāni','antalikkhe','sumanā','bhavantu','sakkacca','suṇantu'],
    note: '🌟 경 도입 — 천신·신령 초청.' },
  { type: 'teach', icon: '💛', word: 'mettaṃ karotha', pronKo: '멧땅 까로타', meaning: '자애를 행하라',
    grammar: '대격+동사 명령', baseForm: 'mettā + karoti',
    formNote: '8과 자애경의 mettā와 같은 단어',
    verseLine: V0B, verseLineKo: V0BK, audio: true },
  { type: 'teach', icon: '🎁', word: 'baliṃ', pronKo: '발링', meaning: '공물을 (대격)',
    grammar: '남성명사, 대격', baseForm: 'bali',
    verseLine: V0B, verseLineKo: V0BK, audio: true },
  { type: 'teach', icon: '🛡️', word: 'rakkhatha appamattā', pronKo: '락카타 압빠맛따~', meaning: '방심 없이 보호하라',
    grammar: '동사명령+형용사', baseForm: 'rakkhati + appamatta',
    verseLine: V0B, verseLineKo: V0BK, audio: true },
  { type: 'verse', pali: V0B, pronKo: '따스마~ 히 부~따~ 니사~메타 삽베, 멧땅 까로타 마~누시야~ 빠자~야. 디와~ 짜 랏또 짜 하란띠 예 발링, 따스마~ 히 네 락카타 압빠맛따~.',
    translation: V0BK, highlight: ['mettaṃ','karotha','baliṃ','rakkhatha','appamattā'],
    note: '🛡️ 천신들에게 인간 보호 부탁.' },

  // ===== 붓다 보배 (게송 3) =====
  { type: 'intro', icon: '☸️', title: '— 3 게송: 붓다 보배 —', subtitle: '여래와 같은 것은 없다',
    description: '여래(tathāgata)와 비교할 보배는 없음.' },
  { type: 'teach', icon: '💰', word: 'vittaṃ', pronKo: '윗땅', meaning: '재물, 보물',
    grammar: '중성명사, 주격', baseForm: 'vitta',
    verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach', icon: '🌐', word: 'idha vā huraṃ vā', pronKo: '이다 와~ 후랑 와~', meaning: '이 세상이든 저 세상이든',
    grammar: '부사 선택', baseForm: 'idha(여기) + huraṃ(다른 곳)',
    verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach', icon: '☁️', word: 'saggesu', pronKo: '삭게수', meaning: '천상들에서 (처격 복수)',
    grammar: '남성명사, 처격 복수', baseForm: 'sagga',
    verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'teach', icon: '⚖️', word: 'na no samaṃ atthi tathāgatena', pronKo: '나 노 사망 앗티 따타~가떼나', meaning: '여래와 같은 것은 없다',
    grammar: '부정+속격+형용사+동사+도구격', baseForm: 'na + no(우리에게) + sama(같은) + atthi + tathāgata',
    verseLine: V1, verseLineKo: V1K, audio: true },
  { type: 'verse', pali: V1, pronKo: '양 낀찌 윗땅 이다 와~ 후랑 와~, 삭게수 와~ 양 라따낭 빠니~땅. 나 노 사망 앗티 따타~가떼나, 이담삐 붓데 라따낭 빠니~땅. 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V1K, highlight: ['vittaṃ','idha','huraṃ','saggesu','tathāgatena','buddhe','ratanaṃ','paṇītaṃ'],
    note: '☸️ 붓다 = 비교 불가의 보배.' },

  // ===== 담마 보배 (게송 4) =====
  { type: 'intro', icon: '📜', title: '— 4 게송: 담마 보배 (멸·이탐·불사) —', subtitle: '석가모니가 깨달은 4법',
    description: 'khaya·virāga·amata·paṇīta — 4법은 곧 열반.' },
  { type: 'teach', icon: '🌬️', word: 'Khayaṃ', pronKo: '카양', meaning: '소멸',
    grammar: '남성명사, 주격', baseForm: 'khaya',
    buddhism: '진(盡). 번뇌의 소멸.',
    verseLine: V2, verseLineKo: V2K, audio: true },
  { type: 'teach', icon: '🌫️', word: 'virāgaṃ', pronKo: '위라~강', meaning: '이탐, 빛바램',
    grammar: '남성명사, 주격', baseForm: 'virāga',
    formNote: '9과 sn22-59 V8의 virāgā와 같은 어원',
    verseLine: V2, verseLineKo: V2K, audio: true },
  { type: 'teach', icon: '🌌', word: 'amataṃ', pronKo: '아마땅', meaning: '불사 (열반)',
    grammar: '중성명사, 주격', baseForm: 'amata (a + mata)',
    formNote: 'a(부정) + mata(죽은) = "죽지 않는"',
    buddhism: '불사(不死). 열반의 별칭.',
    verseLine: V2, verseLineKo: V2K, audio: true },
  { type: 'teach', icon: '🧘', word: 'sakyamunī samāhito', pronKo: '사꺄무니~ 사마~히또', meaning: '삼매에 든 석가모니',
    grammar: '주격+과거분사', baseForm: 'sakyamuni + samāhita',
    formNote: 'samāhita = 11과 MN10 V_CIT2의 samāhitaṃ과 동일',
    verseLine: V2, verseLineKo: V2K, audio: true },
  { type: 'teach', icon: '🏆', word: 'yadajjhagā', pronKo: '야다잣가~', meaning: '도달하신',
    grammar: '관계대명사+동사 아오리스트', baseForm: 'yaṃ + ajjhagā',
    verseLine: V2, verseLineKo: V2K, audio: true },
  { type: 'verse', pali: V2, pronKo: '카양 위라~강 아마땅 빠니~땅, 야다잣가~ 사꺄무니~ 사마~히또. 나 떼나 담메나 사맛티 낀찌, 이담삐 담메 라따낭 빠니~땅. 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V2K, highlight: ['Khayaṃ','virāgaṃ','amataṃ','paṇītaṃ','sakyamunī','samāhito','dhamme'],
    note: '📜 담마 = 4법(멸·이탐·불사·뛰어남).' },

  // ===== 담마 보배 (게송 5 - 즉시삼매) =====
  { type: 'teach', icon: '⚡', word: 'samādhimānantarikaṃ', pronKo: '사마~디마~난따리깡', meaning: '즉시 결과를 내는 삼매',
    grammar: '복합어, 대격', baseForm: 'samādhi + ānantarika (간격 없는)',
    buddhism: '무간정(無間定). 도(magga) 직후 즉시 과(phala) 일어남.',
    verseLine: V3, verseLineKo: V3K, audio: true },
  { type: 'verse', pali: V3, pronKo: '양 붓다셋토 빠리완나이~ 수찡, 사마~디마~난따리깐냐마~후. 사마~디나~ 떼나 사모 나 윗자띠, 이담삐 담메 라따낭 빠니~땅. 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V3K, highlight: ['buddhaseṭṭho','samādhimānantarikaṃ'],
    note: '📜 담마의 또 다른 측면 — 즉시삼매.' },

  // ===== 상가 보배 (4쌍8배) =====
  { type: 'intro', icon: '👥', title: '— 6 게송: 상가 보배 (4쌍 8배) —', subtitle: '예류·일래·불환·아라한',
    description: '8성인 = 4쌍 (도+과)' },
  { type: 'teach', icon: '8️⃣', word: 'aṭṭha puggalā', pronKo: '앗타 뿍갈라~', meaning: '여덟 분의 사람들',
    grammar: '수사+주격복수', baseForm: 'aṭṭha + puggala',
    formNote: '4과 tisarana-guna의 aṭṭha purisapuggalā와 동일',
    buddhism: '8배(八輩). 사향사과.',
    verseLine: V4, verseLineKo: V4K, audio: true },
  { type: 'teach', icon: '4️⃣', word: 'cattāri yugāni', pronKo: '짯따~리 유가~니', meaning: '네 쌍',
    grammar: '수사+중성복수 주격', baseForm: 'cattāri + yuga',
    buddhism: '4쌍(四雙).',
    verseLine: V4, verseLineKo: V4K, audio: true },
  { type: 'teach', icon: '🎁', word: 'dakkhiṇeyyā', pronKo: '닥키네이야~', meaning: '보시받을 만한',
    grammar: '형용사, 주격 복수', baseForm: 'dakkhiṇeyya',
    formNote: '4과 tisarana-guna의 dakkhiṇeyyo와 동일',
    verseLine: V4, verseLineKo: V4K, audio: true },
  { type: 'teach', icon: '🍇', word: 'mahapphalāni', pronKo: '마합팔라~니', meaning: '큰 결실',
    grammar: '복합어, 주격 중성 복수', baseForm: 'mahā + phala',
    verseLine: V4, verseLineKo: V4K, audio: true },
  { type: 'verse', pali: V4, pronKo: '예 뿍갈라~ 앗타 사땅 빠삿타~, 짯따~리 에따~니 유가~니 혼띠. 떼 닥키네이야~ 수가땃사 사~와까~, 에떼수 딘나~니 마합팔라~니. 이담삐 상게 라따낭 빠니~땅, 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V4K, highlight: ['aṭṭha','puggalā','cattāri','yugāni','dakkhiṇeyyā','sugatassa','sāvakā','mahapphalāni','saṅghe'],
    note: '👥 상가 = 4쌍 8배의 성인.' },

  // ===== 상가 (열반 누림) =====
  { type: 'teach', icon: '💪', word: 'suppayuttā', pronKo: '숩빠윳따~', meaning: '잘 정진한',
    grammar: '과거분사, 주격 복수', baseForm: 'suppayutta',
    verseLine: V5, verseLineKo: V5K, audio: true },
  { type: 'teach', icon: '🆓', word: 'nikkāmino', pronKo: '닉까~미노', meaning: '욕망을 떠난',
    grammar: '형용사, 주격 복수', baseForm: 'nikkāmin',
    verseLine: V5, verseLineKo: V5K, audio: true },
  { type: 'teach', icon: '🌌', word: 'amataṃ vigayha', pronKo: '아마땅 위가이하', meaning: '불사에 들어가',
    grammar: '대격+절대분사', baseForm: 'amata + vigāhati',
    verseLine: V5, verseLineKo: V5K, audio: true },
  { type: 'teach', icon: '🕊️', word: 'nibbutiṃ bhuñjamānā', pronKo: '닙부띵 분자마~나~', meaning: '적멸을 누리며',
    grammar: '대격+현재분사', baseForm: 'nibbuti + bhuñjati',
    buddhism: '적멸(寂滅). 열반의 다른 이름.',
    verseLine: V5, verseLineKo: V5K, audio: true },
  { type: 'verse', pali: V5, pronKo: '예 숩빠윳따~ 마나사~ 달헤나, 닉까~미노 고따마사~사남히. 떼 빳띱빳따~ 아마땅 위가이하, 랏다~ 무다~ 닙부띵 분자마~나~. 이담삐 상게 라따낭 빠니~땅, 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V5K, highlight: ['suppayuttā','nikkāmino','gotamasāsanamhi','amataṃ','vigayha','nibbutiṃ','bhuñjamānā'],
    note: '🕊️ 아라한들이 열반을 누림.' },

  // ===== 상가 (인드라 기둥) =====
  { type: 'teach', icon: '🗿', word: 'indakhīlo pathavissito', pronKo: '인다키~로 빠타윗시또', meaning: '땅에 박힌 인드라 기둥',
    grammar: '주격+처격', baseForm: 'indakhīla(석주) + pathavissita',
    formNote: '도시 성문 입구의 단단한 석주. 절대 흔들리지 않음의 비유',
    verseLine: V6, verseLineKo: V6K, audio: true },
  { type: 'teach', icon: '🌪️', word: 'catubbhi vātehi asampakampiyo', pronKo: '짜뚭비 와~떼히 아삼빠깜삐요', meaning: '사방의 바람에도 흔들리지 않는',
    grammar: '수사+도구격복수+형용사', baseForm: 'catur + vāta + asampakampiya',
    verseLine: V6, verseLineKo: V6K, audio: true },
  { type: 'teach', icon: '👁️', word: 'ariyasaccāni avecca passati', pronKo: '아리야삿짜~니 아웻짜 빳사띠', meaning: '성스러운 진리를 꿰뚫어 본다',
    grammar: '대격복수+절대분사+동사', baseForm: 'ariyasacca + avecca + passati',
    buddhism: '예류자의 표지.',
    verseLine: V6, verseLineKo: V6K, audio: true },
  { type: 'verse', pali: V6, pronKo: '야틴다키~로 빠타윗시또 시야~, 짜뚭비 와~떼히 아삼빠깜삐요. 따투~빠망 삽뿌리상 와다~미, 요 아리야삿짜~니 아웻짜 빳사띠. 이담삐 상게 라따낭 빠니~땅, 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V6K, highlight: ['indakhīlo','pathavissito','asampakampiyo','sappurisaṃ','ariyasaccāni','avecca','passati'],
    note: '🗿 인드라 석주 비유 — 흔들리지 않는 예류자.' },

  // ===== 상가 (8생 안 옴) =====
  { type: 'teach', icon: '7️⃣', word: 'na bhavaṃ aṭṭhamamādiyanti', pronKo: '나 바왕 앗타마마~디얀띠', meaning: '여덟 번째 생을 받지 않는다',
    grammar: '부정+대격+동사', baseForm: 'na + bhava + aṭṭhama + ādiyati',
    buddhism: '예류자는 최대 7생 안에 아라한과 성취 보장.',
    verseLine: V7, verseLineKo: V7K, audio: true },
  { type: 'verse', pali: V7, pronKo: '예 아리야삿짜~니 위바~와얀띠, 감비~라빤녜나 수데시따~니. 낀짜~삐 떼 혼띠 부상 빠맛따~, 나 떼 바왕 앗타마마~디얀띠. 이담삐 상게 라따낭 빠니~땅, 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V7K, highlight: ['ariyasaccāni','vibhāvayanti','gambhīrapaññena','aṭṭhamam'],
    note: '7️⃣ 예류자의 보장 — 최대 7생.' },

  // ===== 상가 (3결 + 4악도 + 6중죄) =====
  { type: 'teach', icon: '🚫', word: 'sakkāyadiṭṭhi vicikicchitañca sīlabbataṃ', pronKo: '삭까~야딧티 위찌낏치딴짜 시~랍바땅', meaning: '유신견·의심·계금취',
    grammar: '복합어 3개', baseForm: 'sakkāyadiṭṭhi + vicikicchā + sīlabbata',
    buddhism: '예류자가 끊는 3결(三結):\n① 유신견(有身見, sakkāyadiṭṭhi) — 자아 견해\n② 의심(疑, vicikicchā) — 삼보·4성제 의심\n③ 계금취(戒禁取, sīlabbata) — 잘못된 의례 집착',
    verseLine: V8, verseLineKo: V8K, audio: true },
  { type: 'teach', icon: '⛔', word: 'catūhapāyehi vippamutto', pronKo: '짜뚜~하빠~예히 윕빠뭇또', meaning: '4악도에서 벗어난',
    grammar: '도구격복수+과거분사', baseForm: 'catur + apāya + vippamutta',
    buddhism: '4악도(四惡道): 지옥·축생·아귀·아수라.',
    verseLine: V8, verseLineKo: V8K, audio: true },
  { type: 'teach', icon: '😈', word: 'chaccābhiṭhānāni abhabba kātuṃ', pronKo: '찻짜~비타~나~니 압밥바 까~뚱', meaning: '여섯 가지 큰 죄를 지을 수 없다',
    grammar: '주격+형용사+부정사', baseForm: 'cha + abhiṭhāna + abhabba + kātuṃ',
    buddhism: '6중죄: 살부·살모·살아라한·출불신혈·파승가 + 이단(외도) 따름.',
    verseLine: V8, verseLineKo: V8K, audio: true },
  { type: 'verse', pali: V8, pronKo: '사하~왓사 닷사나삼빠다~야, 따얏수 담마~ 자히따~ 바완띠. 삭까~야딧티 위찌낏치딴짜, 시~랍바땅 와~삐 야닷티 낀찌. 짜뚜~하빠~예히 짜 윕빠뭇또, 찻짜~비타~나~니 압밥바 까~뚱. 이담삐 상게 라따낭 빠니~땅, 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V8K, highlight: ['sakkāyadiṭṭhi','vicikicchitaṃ','sīlabbataṃ','catūhapāyehi','vippamutto','chaccābhiṭhānāni'],
    note: '🚫 예류자가 끊는 3결 + 4악도 탈출 + 6중죄 불가.' },

  // ===== 상가 (예류자 죄 못 감춤) =====
  { type: 'teach', icon: '👁️', word: 'diṭṭhapadassa', pronKo: '딧타빠닷사', meaning: '길을 본 자의 (예류자)',
    grammar: '복합어, 속격', baseForm: 'diṭṭhapada (예류의 길)',
    verseLine: V9, verseLineKo: V9K, audio: true },
  { type: 'verse', pali: V9, pronKo: '낀짜~삐 소 깜마 까로띠 빠~빠깡, 까~예나 와~짜~ 우다 쩨따사~ 와~. 압밥바 소 땃사 빠띳차다~야, 압밥바따~ 딧타빠닷사 웃따~. 이담삐 상게 라따낭 빠니~땅, 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V9K, highlight: ['kamma','pāpakaṃ','paṭicchadāya','diṭṭhapadassa'],
    note: '👁️ 예류자는 악업을 감출 수 없다 (자동 참회).' },

  // ===== 붓다 보배 (꽃핀 숲) =====
  { type: 'intro', icon: '🌸', title: '— 12-13 게송: 붓다 보배 (꽃핀 숲) —', subtitle: '여름 첫 꽃핀 숲처럼',
    description: '담마 설법의 아름다움.' },
  { type: 'teach', icon: '🌳', word: 'vanappagumbe phussitagge', pronKo: '와납빠굼베 풋시딱게', meaning: '꼭대기까지 꽃핀 숲',
    grammar: '복합어 처격+주격', baseForm: 'vanappagumba + phussitagga',
    verseLine: V10, verseLineKo: V10K, audio: true },
  { type: 'teach', icon: '☀️', word: 'gimhānamāse paṭhamasmiṃ gimhe', pronKo: '김하~나마~세 빠타마스밍 김헤', meaning: '여름 첫 달에',
    grammar: '처격구', baseForm: 'gimhāna + māsa',
    verseLine: V10, verseLineKo: V10K, audio: true },
  { type: 'teach', icon: '🛤️', word: 'nibbānagāmiṃ paramaṃ hitāya', pronKo: '닙바~나가~밍 빠라망 히따~야', meaning: '열반으로 이끄는 최상의 이익을 위해',
    grammar: '복합어대격+형용사+여격', baseForm: 'nibbāna + gāmin + parama + hita',
    verseLine: V10, verseLineKo: V10K, audio: true },
  { type: 'verse', pali: V10, pronKo: '와납빠굼베 야타 풋시딱게, 김하~나마~세 빠타마스밍 김헤. 따투~빠망 담마와랑 아데사이, 닙바~나가~밍 빠라망 히따~야. 이담삐 붓데 라따낭 빠니~땅, 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V10K, highlight: ['vanappagumbe','phussitagge','gimhānamāse','dhammavaraṃ','nibbānagāmiṃ'],
    note: '🌸 담마 설법 = 꽃핀 숲처럼 아름답고 시원하다.' },

  // ===== 붓다 (최고의 칭호) =====
  { type: 'teach', icon: '👑', word: 'varo varaññū varado varāharo', pronKo: '와로 와란뉴~ 와라도 와라~하로', meaning: '최고·최고를 아시는·최고를 주시는·최고를 가져오신 분',
    grammar: '형용사 4개', baseForm: 'vara × 4',
    formNote: '4중 vara(최고) 강조 — 부처님 칭송 정형구',
    verseLine: V11, verseLineKo: V11K, audio: true },
  { type: 'verse', pali: V11, pronKo: '와로 와란뉴~ 와라도 와라~하로, 아눗따로 담마와랑 아데사이. 이담삐 붓데 라따낭 빠니~땅, 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V11K, highlight: ['varo','varaññū','varado','varāharo','anuttaro','dhammavaraṃ'],
    note: '👑 부처님 4중 vara 칭송.' },

  // ===== 상가 (등불 비유 — 윤회 끝) =====
  { type: 'teach', icon: '🌑', word: 'khīṇaṃ purāṇaṃ nava natthi sambhavaṃ', pronKo: '키~낭 뿌라~낭 나와 낫티 삼바왕', meaning: '옛 (업)은 다하고 새 발생은 없다',
    grammar: '과거분사+형용사+부정+주격', baseForm: 'khīṇa + purāṇa + nava + sambhava',
    buddhism: '아라한의 완전한 종결.',
    verseLine: V12, verseLineKo: V12K, audio: true },
  { type: 'teach', icon: '💡', word: 'nibbanti dhīrā yathāyaṃ padīpo', pronKo: '닙반띠 디~라~ 야타~양 빠디~뽀', meaning: '지혜로운 자들이 등불처럼 꺼진다',
    grammar: '동사+주격복수+비교+주격', baseForm: 'nibbāyati + dhīra + padīpa',
    formNote: 'nibbāna(열반)의 동사형 nibbāyati = "꺼지다"\n등불 비유: 연료(업) 소진 → 자연스러운 꺼짐',
    buddhism: '아라한의 반열반(parinibbāna).',
    verseLine: V12, verseLineKo: V12K, audio: true },
  { type: 'verse', pali: V12, pronKo: '키~낭 뿌라~낭 나와 낫티 삼바왕, 위랏따찟따~야띠께 바와스밍. 떼 키~나비~자~ 아위루~흘리찬다~, 닙반띠 디~라~ 야타~양 빠디~뽀. 이담삐 상게 라따낭 빠니~땅, 에떼나 삿쩨나 수왓티 호뚜.',
    translation: V12K, highlight: ['khīṇaṃ','purāṇaṃ','sambhavaṃ','virattacittā','khīṇabījā','nibbanti','padīpo'],
    note: '💡 등불 비유 — 아라한의 종결.' },

  // ===== 결어 (3보 예배) =====
  { type: 'intro', icon: '🙏', title: '— 결어: 3보 예배 (15-17 게송) —', subtitle: '붓다·담마·상가 차례로',
    description: '천신들이 모인 자리에서 3보께 예배.' },
  { type: 'teach', icon: '🌟', word: 'devamanussapūjitaṃ', pronKo: '데와마눗사뿌~지땅', meaning: '신과 인간이 공양하는',
    grammar: '복합어, 대격', baseForm: 'deva + manussa + pūjita',
    verseLine: V13, verseLineKo: V13K, audio: true },
  { type: 'teach', icon: '🙏', word: 'namassāma', pronKo: '나맛사~마', meaning: '우리는 예배한다',
    grammar: '동사 1인칭 복수', baseForm: 'namassati (예배하다)',
    verseLine: V13, verseLineKo: V13K, audio: true },
  { type: 'verse', pali: V13, pronKo: '야~니~다 부~따~니 사마~가따~니... 따타~가땅 데와마눗사뿌~지땅, 붓당 나맛사~마 수왓티 호뚜.',
    translation: V13K, highlight: ['Tathāgataṃ','devamanussapūjitaṃ','buddhaṃ','namassāma'],
    note: '🙏 붓다 예배.' },
  { type: 'verse', pali: V14, pronKo: '야~니~다 부~따~니... 담망 나맛사~마 수왓티 호뚜.',
    translation: V14K, highlight: ['dhammaṃ','namassāma'],
    note: '🙏 담마 예배.' },
  { type: 'verse', pali: V15, pronKo: '야~니~다 부~따~니... 상강 나맛사~마 수왓티 호뚜~띠.',
    translation: V15K, highlight: ['saṅghaṃ','namassāma'],
    note: '🙏 상가 예배 — 보배경 완결.' },

  { type: 'verse', pali: 'ratanasuttaṃ niṭṭhitaṃ.', pronKo: '라따나숫땅 닛티땅.', translation: '— 보배경 끝 —' },

  // ===== 종합 =====
  { type: 'teach-grammar', title: '진실 서원 (Saccakiriyā) 구조',
    example: 'idampi buddhe ratanaṃ paṇītaṃ. etena saccena suvatthi hotu.',
    exampleKo: '이것이 붓다 안의 뛰어난 보배. 이 진실에 의해 행복이 있기를.',
    explanation: '보배경의 반복 후렴:\n• idampi (이것 또한) + [삼보 처격] + ratanaṃ paṇītaṃ\n• etena saccena (이 진실에 의해) + suvatthi hotu (행복이 있기를)\n\n삼보의 공덕 = "진실(sacca)" → 그 진실에 의해 가피.' },

  { type: 'quiz', question: '"ratanaṃ"의 뜻은?',
    options: ['가르침', '보배', '승가', '진실'], answer: 1 },
  { type: 'quiz', question: '"etena saccena suvatthi hotu"의 뜻은?',
    options: ['이 진실에 의해 행복이 있기를', '이 법을 따르라', '이 보배에 귀의', '이 진실을 기억하라'], answer: 0 },
  { type: 'quiz', question: '보배경이 설해진 배경은?',
    options: ['전법륜경 직후', '베살리의 기근·역병·악귀', '자애경과 함께', '아라한 모임'], answer: 1 },
  { type: 'quiz', question: '예류자가 끊는 3결은?',
    options: ['유신견·의심·계금취', '탐·진·치', '계·정·혜', '신·구·의'], answer: 0 },
  { type: 'quiz', question: '예류자의 보장은?',
    options: ['7생 안에 아라한과', '천상 출생', '즉시 부처', '신통 획득'], answer: 0 },
  { type: 'quiz', question: '아라한의 종결 비유(12게송)는?',
    options: ['등불의 꺼짐', '구름이 흩어짐', '강의 흐름', '꽃이 핌'], answer: 0,
    hint: 'nibbanti dhīrā yathāyaṃ padīpo' },

  { type: 'speak', pali: 'etena saccena suvatthi hotu.', pronKo: '에떼나 삿쩨나 수왓티 호뚜.' },
  { type: 'speak', pali: V1, pronKo: '양 낀찌 윗땅 이다 와~ 후랑 와~...' },

  { type: 'arrange', instruction: '빠알리 문장을 순서대로 배열하세요.',
    translation: '이 진실에 의해 행복이 있기를.',
    blocks: ['saccena', 'etena', 'hotu.', 'suvatthi'],
    correctOrder: [1, 0, 3, 2] },
]

import GSM from './Grevin Seoul Museum (서울 그레뱅 뮤지엄)1.jpg'
import GLOSNU from './Gyujanggak Library of Seoul National University (서울대학교 규장각)1.jpg'
import JL from './Jeongdok Library (서울특별시교육청 정독도서관)1.jpg'
import MOASNU from './Museum of Art, Seoul National University (서울대학교미술관)1.jpg'
import NL from './Namsan Library (서울특별시교육청 남산도서관)1.jpg'
import NMOMACAS from './National Museum of Modern and Contemporary Art, Seoul [MMCA Seoul] (국립현대미술관 (서울관))1.jpg'
import PDS from './Palais De Seoul (팔레 드 서울)1.jpg'
import SAS from './Seoul Action School (Martial Arts Center) (서울액션스쿨 (마샬아트센터))1.jpg'
import SAC from './Seoul Animation Center (서울애니메이션센터)1.jpg'
import SACGG from './Seoul Art Center Gongpyeong Gallery (서울아트센터 공평갤러리)1.jpg'
import SCFNICA from './Seoul Center for National Intangible Cultural Asset (서울국가무형문화재전수회관)1.jpg'
import SCM from "./Seoul Children's Museum (서울상상나라)1.jpg"
import SML from "./Seoul Metropolitan Library (서울도서관)1.jpg"


// TODO : need for refactoring
export default function TourImgHandler(name) {
    if (name === 'Grevin Seoul Museum (서울 그레뱅 뮤지엄)1.jpg') {
        return GSM
    } else if (name === 'Gyujanggak Library of Seoul National University (서울대학교 규장각)1.jpg') {
        return GLOSNU
    } else if (name === 'Jeongdok Library (서울특별시교육청 정독도서관)1.jpg') {
        return JL
    } else if (name === 'Museum of Art, Seoul National University (서울대학교미술관)1.jpg') {
        return MOASNU
    } else if (name === 'Namsan Library (서울특별시교육청 남산도서관)1.jpg') {
        return NL
    } else if (name === 'National Museum of Modern and Contemporary Art, Seoul [MMCA Seoul] (국립현대미술관 (서울관))1.jpg') {
        return NMOMACAS
    } else if (name === 'Palais De Seoul (팔레 드 서울)1.jpg') {
        return PDS
    } else if (name === 'Seoul Action School (Martial Arts Center) (서울액션스쿨 (마샬아트센터))1.jpg') {
        return SAS
    } else if (name === 'Seoul Animation Center (서울애니메이션센터)1.jpg') {
        return SAC
    } else if (name === 'Seoul Art Center Gongpyeong Gallery (서울아트센터 공평갤러리)1.jpg') {
        return SACGG
    } else if (name === 'Seoul Center for National Intangible Cultural Asset (서울국가무형문화재전수회관)1.jpg') {
        return SCFNICA
    } else if (name === "Seoul Children's Museum (서울상상나라)1.jpg") {
        return SCM
    } else if (name === "Seoul Metropolitan Library (서울도서관)1.jpg") {
        return SML
    }
}
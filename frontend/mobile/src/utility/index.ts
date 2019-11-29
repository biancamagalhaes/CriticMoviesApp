import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
//const scale = SCREEN_WIDTH / SCREEN_HEIGHT;
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
const horizontalScale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale, horizontalScale };

export function toQueryString(obj: any){
    let query = [];

    for (var k in obj){
        const v = obj[k];
        if (!v) {
            continue;
        }
        query.push(k+"="+v);
    }

    return query.length > 0 ? '?'+query.join("&") : ''
  }

  export function setStatus(list: Array<object>, ID: string){
    const item = list.find(id => id.oritID == ID);

    const {qtyFulfilled=0, qty=0, itfuIDs=0}=item||{};
    
    if (!item) {
      return "iniciar";
    }

    if( qtyFulfilled === 0 && itfuIDs.length === 0){
      return "iniciar"
    }else if (qtyFulfilled === qty && itfuIDs.length === 0){
      return "concluido"
    }else if (qtyFulfilled > 0 && qtyFulfilled < qty || itfuIDs.length > 0){
      return "execucao"
    }
  }

  export function setQty(list: Array<object>, ID: string){
    const item = list.find(id => id.oritID == ID);
    
    const qty = item && `${item.qtyFulfilled}/${item.qty}`
    return qty

  }
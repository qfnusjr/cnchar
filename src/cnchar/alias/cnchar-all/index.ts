import cnchar from '../../main';
import order from '../../plugin/order';
import trad from '../../plugin/trad';
import poly from '../../plugin/poly';
import draw from '../../plugin/draw';
import idiom from '../../plugin/idiom';
import xhy from '../../plugin/xhy';
import radical from '../../plugin/radical';
cnchar.use(order, trad, poly, draw, idiom, xhy, radical);
export default cnchar;
import BeanNotFoundError from "./error/BeanNotFoundError";
import IParser from "./Parser";
import HanKyungEconomicParser from "./impl/HanKyungEconomicParser";

interface IBeanFactoryElement {
    key: string,
    bean: IParser,
}

class ParserFactory {
    beanFactory: IBeanFactoryElement[] = [{
        key: 'HANKYUNG_ECONOMIC',
        bean: new HanKyungEconomicParser(),
    }];

    getBean(key:string): IParser {
        const find = this.beanFactory.find(element => element.key === key);
        if (find) {
            return find.bean;
        } else {
            throw new BeanNotFoundError(`입력받은 키에 해당하는 빈을 찾을 수 없습니다.(key=${key})`);
        }
    }
}

export default ParserFactory;
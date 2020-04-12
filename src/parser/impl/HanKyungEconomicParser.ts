import IParser from "../Parser";
import NewsRawHtml from "../../infrastructure/sequelize/models/NewsRawHtml.model";
import News from "../../infrastructure/sequelize/models/News.model";

export default class HanKyungEconomicParser implements IParser {

    parse(newsRawHtmls: NewsRawHtml[]): News {
        newsRawHtmls.forEach(newsRawHtml => {
            const { title } = newsRawHtml;
            console.log(title);
        })

        return null;
    }

}
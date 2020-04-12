import News from "../infrastructure/sequelize/models/News.model";
import NewsRawHtml from "../infrastructure/sequelize/models/NewsRawHtml.model";

export default interface IParser {
    parse(newsRawHtmls: NewsRawHtml[]): News
}
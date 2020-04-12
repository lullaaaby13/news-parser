import NewsRawHtml from "../infrastructure/sequelize/models/NewsRawHtml.model";

export default class DataSource {

    getData = async (): Promise<NewsRawHtml[]> => {
         const newsRawHtmls = await NewsRawHtml.findAll({
            where: {
                processYn: 'N'
            }
        });
        return newsRawHtmls;
    };
}